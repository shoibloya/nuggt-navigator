import { NextResponse } from "next/server";
import { CATEGORIES } from "@/lib/categories";
import { buildCanonicalPath, canonicalSegmentsFromSelections } from "@/lib/url";

export const dynamic = "force-dynamic";

const BASE = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/+$/, "");
const MAX_PER_SITEMAP = 49000;

// --- helpers (AND-only inputs for canonicalSegments) ---
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

// --- generate ALL high-intent URLs (singles + pairs within + pairs across) ---
function generateAllCanonicalPaths(): string[] {
  const urls = new Set<string>();

  // Core
  urls.add(`/`);
  urls.add(`/best-fitness-studio-software`);

  // Singles + within-category AND pairs
  for (const cat of CATEGORIES) {
    const slugs = cat.options.map((o) => o.slug);

    // Singles
    for (const s of slugs) {
      urls.add(pathForAnd(cat.key, [s]));
    }

    // ALL within-category pairs (A AND B in same category)
    for (const [a, b] of pairCombos(slugs)) {
      urls.add(pathForAnd(cat.key, [a, b]));
    }
  }

  // ALL pairs across two different categories (one option from each)
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

  // Return sorted stable list
  return Array.from(urls).sort();
}

export async function GET() {
  const allPaths = generateAllCanonicalPaths();
  const parts = Math.ceil(allPaths.length / MAX_PER_SITEMAP);
  const now = new Date().toISOString();

  // Build a sitemap index referencing /sitemaps/{i} (no .xml on child routes)
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    Array.from({ length: parts }, (_, i) => {
      const loc = `${BASE}/sitemaps/${i}`;
      return `<sitemap><loc>${loc}</loc><lastmod>${now}</lastmod></sitemap>`;
    }).join("") +
    `</sitemapindex>`;

  return new NextResponse(body, { headers: { "content-type": "application/xml; charset=utf-8" } });
}
