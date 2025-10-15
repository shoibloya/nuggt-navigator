// app/sitemap.ts
import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/categories";
import { buildCanonicalPath, canonicalSegmentsFromSelections } from "@/lib/url";

const BASE =
  (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/+$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const urls: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE}/best-fitness-studio-software`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  // 1) All single-option canonical pages (your current approach)
  for (const cat of CATEGORIES) {
    for (const opt of cat.options) {
      const segs = canonicalSegmentsFromSelections({ [cat.key]: [opt.slug] });
      urls.push({
        url: `${BASE}${buildCanonicalPath(segs)}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }

    // 2) Lightly seed AND pages for very small categories (<= 3 options)
    //    This avoids a crawl flood while exposing higher-intent combos.
    if (cat.options.length >= 2 && cat.options.length <= 3) {
      for (let i = 0; i < cat.options.length; i++) {
        for (let j = i + 1; j < cat.options.length; j++) {
          const a = cat.options[i].slug;
          const b = cat.options[j].slug;
          const segs = canonicalSegmentsFromSelections({ [cat.key]: [a, b] });
          urls.push({
            url: `${BASE}${buildCanonicalPath(segs)}`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.55,
          });
        }
      }
    }
  }

  return urls;
}
