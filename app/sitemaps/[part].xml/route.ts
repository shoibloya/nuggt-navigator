// app/sitemaps/[part].xml/route.ts
import { NextResponse } from "next/server";
import { CATEGORIES } from "@/lib/categories";
import { buildCanonicalPath, canonicalSegmentsFromSelections } from "@/lib/url";

export const dynamic = "force-dynamic";

const BASE = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/+$/, "");
const MAX_PER_SITEMAP = 49000;

// --- same helpers as before ---
function pathForAnd(catKey: string, slugs: string[]) {
  const segs = canonicalSegmentsFromSelections({ byCat: { [catKey]: { and: slugs } } });
  return buildCanonicalPath(segs);
}
function pathForTwoCatsAnd(aKey: string, aSlug: string, bKey: string, bSlug: string) {
  const segs = canonicalSegmentsFromSelections({
    byCat: { [aKey]: { and: [aSlug] }, [bKey]: { and: [bSlug] } },
  });
  return buildCanonicalPath(segs);
}
function* pairCombos<T>(arr: T[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) yield [arr[i], arr[j]] as [T, T];
  }
}
function generateAllCanonicalPaths(): string[] {
  const urls = new Set<string>();

  // Core
  urls.add(`/`);
  urls.add(`/best-fitness-studio-software`);

  // Singles + within-category pairs
  for (const cat of CATEGORIES) {
    const slugs = cat.options.map((o) => o.slug);

    for (const s of slugs) {
      urls.add(pathForAnd(cat.key, [s]));
    }
    for (const [a, b] of pairCombos(slugs)) {
      urls.add(pathForAnd(cat.key, [a, b]));
    }
  }

  // Pairs across categories
  for (let i = 0; i < CATEGORIES.length; i++) {
    const A = CATEGORIES[i];
    for (let j = i + 1; j < CATEGORIES.length; j++) {
      const B = CATEGORIES[j];
      for (const a of A.options) {
        for (const b of B.options) {
          urls.add(pathForTwoCatsAnd(A.key, a.slug, B.key, b.slug));
        }
      }
    }
  }

  return Array.from(urls).sort();
}

export async function GET(
  _req: Request,
  ctx: { params: { part: string } }
) {
  const idx = Number(ctx.params.part);
  if (!Number.isFinite(idx) || idx < 0) {
    return new NextResponse("Not found", { status: 404 });
  }

  const allPaths = generateAllCanonicalPaths();
  const start = idx * MAX_PER_SITEMAP;
  const end = start + MAX_PER_SITEMAP;
  const slice = allPaths.slice(start, end);
  if (slice.length === 0) {
    return new NextResponse("Not found", { status: 404 });
  }

  const now = new Date().toISOString();

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    slice
      .map((p) => {
        const loc = `${BASE}${p}`;
        return `<url><loc>${loc}</loc><lastmod>${now}</lastmod><changefreq>weekly</changefreq><priority>0.5</priority></url>`;
      })
      .join("") +
    `</urlset>`;

  return new NextResponse(body, { headers: { "content-type": "application/xml; charset=utf-8" } });
}
