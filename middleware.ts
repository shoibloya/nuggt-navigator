// middleware.ts

import { NextRequest, NextResponse } from "next/server";
import {
  parseSelectionsFromSearchParams,
  canonicalSegmentsFromSelections,
  buildCanonicalPath,
} from "@/lib/url";

/** Extremely small raw query parser for middleware fallback */
function parseRawQueryString(raw: string): Record<string, string[]> {
  const out: Record<string, string[]> = {};
  if (!raw) return out;
  const qs = raw.startsWith("?") ? raw.slice(1) : raw;
  for (const pair of qs.split("&")) {
    if (!pair) continue;
    const eq = pair.indexOf("=");
    const k = decodeURIComponent(eq >= 0 ? pair.slice(0, eq) : pair).trim();
    const v = decodeURIComponent(eq >= 0 ? pair.slice(eq + 1) : "").trim();
    if (!k) continue;
    if (!out[k]) out[k] = [];
    out[k].push(v);
  }
  return out;
}

/** Minimal signed ChatGPT agent detector for logging */
function logChatGPTSignedHit(req: NextRequest) {
  const sig = req.headers.get("signature");
  const sigInput = req.headers.get("signature-input");
  const rawAgent = req.headers.get("signature-agent");
  const agent = rawAgent?.trim().replace(/^"(.*)"$/, "$1"); // Signature-Agent is usually quoted
  if (sig && sigInput && agent === "https://chatgpt.com") {
    const ua = req.headers.get("user-agent") || "";
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const path = req.nextUrl.pathname + req.nextUrl.search;

    // Single, structured log line for Vercel Functions log stream
    // You can filter by `vercel_event_name=bot_scrape` in Logs.
    // NOTE: We purposely do *not* guess names. This fires only for signed ChatGPT agent requests.
    // eslint-disable-next-line no-console
    console.log(
      `vercel_event_name=bot_scrape bot=chatgpt_agent_signed path="${path}" ip="${ip}" ua="${ua}"`
    );
  }
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Log signed ChatGPT agent *for all subpaths* under this collection.
  if (pathname.startsWith("/best-fitness-studio-software")) {
    logChatGPTSignedHit(req);
  }

  // Debug: keep your existing request logging
  // eslint-disable-next-line no-console
  console.log("[middleware] req.url:", req.url);
  // eslint-disable-next-line no-console
  console.log("[middleware] nextUrl.href:", req.nextUrl.href);
  // eslint-disable-next-line no-console
  console.log("[middleware] pathname:", pathname);
  // eslint-disable-next-line no-console
  console.log("[middleware] nextUrl.search:", req.nextUrl.search);
  // eslint-disable-next-line no-console
  console.log("[middleware] searchParams.toString():", req.nextUrl.searchParams.toString());

  // Only act on the collection root (query -> canonical path)
  if (!pathname.startsWith("/best-fitness-studio-software")) {
    return NextResponse.next();
  }

  // First try the official URLSearchParams object
  let selections = parseSelectionsFromSearchParams(req.nextUrl.searchParams);
  let segs = canonicalSegmentsFromSelections(selections);

  // Fallback: if nothing was detected, parse the raw query string manually
  if (segs.length === 0) {
    const rawPojo = parseRawQueryString(req.nextUrl.search);
    // eslint-disable-next-line no-console
    console.log("[middleware] fallback rawPojo:", rawPojo);
    selections = parseSelectionsFromSearchParams(rawPojo);
    segs = canonicalSegmentsFromSelections(selections);
    // eslint-disable-next-line no-console
    console.log("[middleware] fallback canonical segments:", segs);
  }

  // If still no segments, just continue (no redirect)
  if (segs.length === 0) {
    // eslint-disable-next-line no-console
    console.log("[middleware] decision: no canonicalization -> Next()");
    return NextResponse.next();
  }

  const canonical = buildCanonicalPath(segs);
  const url = req.nextUrl.clone();
  url.pathname = canonical;
  url.search = "";

  // eslint-disable-next-line no-console
  console.log("[middleware] redirect ->", url.pathname);

  return NextResponse.redirect(url, 308);
}

export const config = {
  // IMPORTANT: match *all* subpaths so filter pages also log bot hits
  matcher: ["/best-fitness-studio-software/:path*"],
};
