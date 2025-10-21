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

/** Best-effort ChatGPT agent header check (signed, user-session fetch) */
function detectChatGPTAgent(req: NextRequest) {
  const sig = req.headers.get("signature");
  const sigInput = req.headers.get("signature-input");
  const sigAgentRaw = req.headers.get("signature-agent") || "";
  // Signature-Agent sometimes includes quotes; normalize
  const sigAgent = sigAgentRaw.trim().replace(/^"(.*)"$/, "$1");

  const isAgent = Boolean(sig && sigInput && sigAgent === "https://chatgpt.com");
  return {
    isAgent,
    sig,
    sigInput,
    sigAgentRaw,
  };
}

/** Small helper to log in logfmt format (easy to grep in Vercel Logs) */
function logfmtKV(k: string, v: string) {
  const safe = String(v ?? "")
    .replace(/"/g, '\\"')
    .replace(/\n/g, " ");
  return `${k}="${safe}"`;
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ----- ChatGPT (live agent) detection & logging -----
  const { isAgent, sig, sigInput, sigAgentRaw } = detectChatGPTAgent(req);
  if (isAgent) {
    const ua = req.headers.get("user-agent") || "";
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const pathWithQuery = req.nextUrl.pathname + req.nextUrl.search;

    // 1) Edge/Middleware log
    // eslint-disable-next-line no-console
    console.log(
      [
        "vercel_event_name=bot_scrape",
        "bot=chatgpt_agent_headers",
        "source=edge_mw",
        logfmtKV("path", pathWithQuery),
        logfmtKV("ua", ua),
        logfmtKV("ip", ip),
      ].join(" ")
    );

    // 2) Also emit a Serverless Function log (easy to see in Deployments → Logs)
    try {
      await fetch(new URL("/api/__bot-log", req.url), {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-internal-bot-log": "1", // prevent external abuse
        },
        body: JSON.stringify({
          vercel_event_name: "bot_scrape",
          bot: "chatgpt_agent_headers",
          source: "edge_mw",
          path: pathWithQuery,
          ua,
          ip,
          headers: {
            signature: sig ?? null,
            "signature-input": sigInput ?? null,
            "signature-agent": sigAgentRaw ?? null,
          },
        }),
        cache: "no-store",
        keepalive: true,
      });
    } catch {
      // swallow logging errors
    }
  }

  // ----- Existing behavior (unchanged) -----

  // Debug (kept; shows in Edge logs)
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

  // Only act on the collection root (query -> canonical path) — same logic as before,
  // but middleware now runs for *all* subpaths too; if no query, we just continue.
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

// IMPORTANT: expand matcher so middleware runs on *all* filtered pages too
export const config = {
  matcher: [
    "/best-fitness-studio-software",
    "/best-fitness-studio-software/",
    "/best-fitness-studio-software/:path*", // <— NEW: run for every filter page
  ],
};
