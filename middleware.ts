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

/** Only care about real-time ChatGPT Agent (signed) */
function isChatGPTSigned(req: NextRequest) {
  const sig = req.headers.get("signature");
  const sigInput = req.headers.get("signature-input");
  const rawAgent = req.headers.get("signature-agent");
  const agent = rawAgent?.trim().replace(/^"(.*)"$/, "$1"); // strip optional quotes
  return Boolean(sig && sigInput && agent === "https://chatgpt.com");
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Debug: keep your existing logging
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

  // --- ChatGPT Agent logging (ONLY when signed) ---
  if (isChatGPTSigned(req)) {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";
    const payload = {
      event: "bot_scrape",
      where: "middleware",
      method: req.method,
      path: pathname,
      fullUrl: req.nextUrl.href,
      agent: "https://chatgpt.com",
      ip,
      ts: new Date().toISOString(),
      // keep only what's necessary to audit:
      signature_present: true,
      signature_input_present: true,
    };
    // Single, filterable line in Vercel Logs:
    // eslint-disable-next-line no-console
    console.log("[event=bot_scrape]", JSON.stringify(payload));
  }
  // -----------------------------------------------

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
  matcher: ["/best-fitness-studio-software", "/best-fitness-studio-software/"],
};
