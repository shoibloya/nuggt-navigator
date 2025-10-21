// app/api/__bot-log/route.ts
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  // Only allow our internal middleware call
  if (req.headers.get("x-internal-bot-log") !== "1") {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  let body: any = {};
  try {
    body = await req.json();
  } catch {
    body = {};
  }

  const now = new Date().toISOString();
  const path = body?.path || req.nextUrl.pathname;
  const ua =
    body?.ua ||
    req.headers.get("user-agent") ||
    "";
  const ip =
    body?.ip ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";
  const bot = body?.bot || "unknown";
  const source = body?.source || "api";
  const sigAgent = body?.headers?.["signature-agent"] ?? "";

  // Serverless Function log (easy to find in Vercel UI)
  // Format is logfmt so you can search for vercel_event_name=bot_scrape
  // eslint-disable-next-line no-console
  console.log(
    [
      "vercel_event_name=bot_scrape",
      `bot=${bot}`,
      `source=${source}`,
      `time=${now}`,
      `path="${String(path).replace(/"/g, '\\"')}"`,
      `ua="${String(ua).replace(/"/g, '\\"')}"`,
      `ip="${ip}"`,
      `sig_agent="${String(sigAgent).replace(/"/g, '\\"')}"`,
    ].join(" ")
  );

  return new NextResponse(null, { status: 204 });
}
