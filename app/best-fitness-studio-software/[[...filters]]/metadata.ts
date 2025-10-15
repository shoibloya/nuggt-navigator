import type { Metadata } from "next";
import {
  parseSelectionsFromPath,
  canonicalSegmentsFromSelections,
  titleFromSelections,
  descriptionFromSelections,
  buildCanonicalPath,
} from "@/lib/url";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ filters?: string[] }>;
}): Promise<Metadata> {
  const { filters } = await params;
  const selections = parseSelectionsFromPath(filters);
  const segs = canonicalSegmentsFromSelections(selections);
  const path = buildCanonicalPath(segs);
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/+$/, "");
  const canonicalAbs = base ? `${base}${path}` : path;

  const title = titleFromSelections(selections);
  const description = descriptionFromSelections(selections);

  // keep your existing keywords/meta exactly as-is
  const baseKeywords = [
    "fitness studio software",
    "gym management software",
    "class booking",
    "membership management",
    "POS",
    "payments",
    "scheduling",
    "best fitness software",
    "compare",
    "reviews",
  ];

  return {
    title,
    description,
    keywords: baseKeywords,
    robots: { index: true, follow: true },
    alternates: { canonical: canonicalAbs }, // <-- absolute canonical
    openGraph: {
      title,
      description,
      url: canonicalAbs, // <-- absolute OG url
      type: "website",
      siteName: "Best Fitness Studio Software",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
