// app/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuggt — Curated directories to find the best solutions",
  description:
    "Nuggt is a growing hub of curated, filterable directories that help buyers pick the best software and services for their unique use cases. Our first directory—Best fitness studio software—is live, with more coming soon.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Nuggt — Curated directories to find the best solutions",
    description:
      "A simple, filterable directory hub that prioritizes real buyer needs. Start with Best fitness studio software; more directories launching soon.",
    url: "/",
    type: "website",
    siteName: "Nuggt",
  },
  twitter: {
    card: "summary",
    title: "Nuggt — Curated directories to find the best solutions",
    description:
      "Filter curated directories by real buyer needs and quickly find best-fit tools. First up: Best fitness studio software.",
  },
};

export default function Home() {
  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nuggt",
    url: "/",
    description:
      "Nuggt is a growing hub of curated, filterable directories that help buyers pick the best software and services for their unique use cases.",
  };

  // SEO: list your live (and future) directories
  const jsonLdItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Nuggt Directories",
    numberOfItems: 1,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: "/best-fitness-studio-software",
        name: "Best fitness studio software (directory)",
        description:
          "Compare fitness studio software and filter by real requirements such as booking, payments, memberships, POS, notifications, CRM, and more.",
      },
    ],
  };

  return (
    <main className="bg-white text-black min-h-screen">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }}
      />

      <section className="mx-auto max-w-5xl px-6 py-20 flex min-h-screen flex-col items-center justify-center text-center">
        {/* Brand */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Nuggt</h1>

        <p className="mt-3 text-base sm:text-lg opacity-80 max-w-3xl">
          A growing hub of curated directories that you can{" "}
          <strong>filter by real buyer needs</strong>. Nuggt helps teams quickly
          identify <strong>best-fit software and services</strong> for their
          unique use cases. Our first directory is live—many more are on the way.
        </p>

        {/* Directories */}
        <div className="mt-10 w-full max-w-3xl text-left">
          <h2 className="text-xl font-semibold tracking-tight text-center">Directories</h2>

          <div className="mt-5 grid grid-cols-1 gap-4">
            {/* Live directory card */}
            <article className="border border-black/10 rounded-lg p-5">
              <h3 className="text-lg font-semibold">
                <a
                  href="/best-fitness-studio-software"
                  className="underline underline-offset-4"
                >
                  Best fitness studio software
                </a>
              </h3>
              <p className="mt-2 text-sm leading-6">
                A curated, filterable directory built around buyer requirements:
                booking, payments &amp; gateways, memberships &amp; billing, POS,
                notifications, scheduling, CRM, and marketing tools.
              </p>
              <div className="mt-4">
                <a
                  href="/best-fitness-studio-software"
                  className="border border-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-black hover:text-white transition"
                >
                  Open directory
                </a>
              </div>
            </article>
          </div>

          {/* Coming soon — light SEO copy without links */}
          <div className="mt-8 text-sm sm:text-base leading-7 opacity-80 text-center">
            <p>
              More directories are coming soon across areas like{" "}
              <span className="italic">
                customer engagement, scheduling, payments, and analytics
              </span>
              . Each directory will prioritize real buyer workflows and help you
              shortlist the best solutions faster.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
