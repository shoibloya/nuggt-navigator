//app/best-fitness-studio-software/[[...filters]]/page.tsx

import { redirect, permanentRedirect } from "next/navigation";
import { CATEGORIES } from "@/lib/categories";
import { ROWS, Row } from "@/lib/data";
import {
  parseSelectionsFromPath,
  parseSelectionsFromSearchParams,    // <— re-enable param parsing
  canonicalSegmentsFromSelections,
  titleFromSelections,
  descriptionFromSelections,
  buildCanonicalPath,
  type Selections,
} from "@/lib/url";
import React from "react";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ filters?: string[] }>;
  searchParams: Promise<ReadonlyURLSearchParams | Record<string, string | string[] | undefined>>;
};

// Server-side logger
const slog = (label: string, data: any) => {
  try {
    // eslint-disable-next-line no-console
    console.log(`Server  [page.tsx] ${label}:`, typeof data === "string" ? data : JSON.stringify(data));
  } catch {
    // eslint-disable-next-line no-console
    console.log(`Server  [page.tsx] ${label}: [unserializable]`);
  }
};

/* ========================== helpers ========================== */
const UNAVAILABLE_RE = /can[’']t\s+find\s+information/i;
const isAvailable = (note?: string) => !!note && !UNAVAILABLE_RE.test(note);

const norm = (s: string) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]/g, "");
const slugToWords = (s: string) => s.replace(/-/g, " ").trim();

function getNotesForCategory(
  row: Row,
  cat: { key: string; label: string }
): { slug: string; note: string }[] {
  const dict = (row as any).optionNotes as Record<string, { slug: string; note: string }[]> | undefined;
  if (!dict) return [];

  const byNorm = new Map<string, string>();
  for (const k of Object.keys(dict)) byNorm.set(norm(k), k);

  const targets = new Set<string>([norm(cat.key), norm(cat.label), norm(cat.key.replace(/-/g, " "))]);
  for (const t of targets) {
    const realKey = byNorm.get(t);
    if (realKey) return dict[realKey] ?? [];
  }
  return [];
}

function featureSlugsFor(row: Row, cat: { key: string; label: string }): string[] {
  const fromNotes = getNotesForCategory(row, cat).filter((n) => isAvailable(n.note)).map((n) => n.slug);
  const fromFeatures = (row as any).features?.[cat.key] ?? [];
  return Array.from(new Set([...(fromNotes ?? []), ...(fromFeatures ?? [])]));
}

/** AND across categories; within a category: all selected tokens must be present */
function matchesSelections(row: Row, sel: Selections): boolean {
  const activeCats = CATEGORIES.filter((c) => {
    const bucket = sel.byCat[c.key];
    return bucket && (bucket.and?.length ?? 0) > 0;
  });
  if (activeCats.length === 0) return true;

  for (const cat of activeCats) {
    const rowHas = featureSlugsFor(row, cat);
    const req = sel.byCat[cat.key]!;
    if (req.and && req.and.length > 0) {
      const allPresent = req.and.every((w) => rowHas.includes(w));
      if (!allPresent) return false;
    }
  }
  return true;
}

function NoteWithLinks({ text }: { text: string }) {
  const parenRe = /\([^)]+\)/g;
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  const isLikelyLink = (s: string) => {
    if (/\s/.test(s)) return false;
    if (/^https?:\/\/\S+$/i.test(s)) return true;
    return /^([a-z0-9-]+\.)+[a-z]{2,}(:\d+)?(\/\S*)?$/i.test(s);
  };
  while ((m = parenRe.exec(text)) !== null) {
    const before = text.slice(last, m.index);
    if (before) nodes.push(before);
    const parenText = m[0];
    const inner = parenText.slice(1, -1).trim();
    if (inner.includes("(")) {
      nodes.push(parenText);
    } else if (isLikelyLink(inner)) {
      const href = inner.startsWith("http") ? inner : `https://${inner}`;
      nodes.push(
        <a
          key={`${m.index}`}
          href={href}
          rel="nofollow noopener noreferrer ugc"
          target="_blank"
          className="underline underline-offset-4"
        >
          {parenText}
        </a>
      );
    } else {
      nodes.push(parenText);
    }
    last = m.index + parenText.length;
  }
  const after = text.slice(last);
  if (after) nodes.push(after);
  return <>{nodes}</>;
}

/* ---------- UI cells ---------- */

function CategoryCell({ row, catKey }: { row: Row; catKey: string }) {
  const cat = CATEGORIES.find((c) => c.key === catKey)!;
  const details = getNotesForCategory(row, cat);
  const show = details.filter((d) => isAvailable(d.note));
  if (show.length === 0) return <>—</>;
  return (
    <ul className="space-y-1 list-disc pl-5">
      {show.map((d) => (
        <li key={d.slug}>
          <span className="font-medium capitalize">{slugToWords(d.slug)}</span>
          {": "}
          <NoteWithLinks text={d.note} />
        </li>
      ))}
    </ul>
  );
}

function AdditionalInfoCell({ text }: { text?: string }) {
  if (!text) return <>—</>;
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  return (
    <ul className="space-y-1 list-disc pl-5">
      {lines.map((line, i) => (
        <li key={i}>
          <NoteWithLinks text={line} />
        </li>
      ))}
    </ul>
  );
}

/* ========================== SEO helper ========================== */
const optionLabel = (catKey: string, slug: string) => {
  const cat = CATEGORIES.find((c) => c.key === catKey);
  const opt = cat?.options.find((o) => o.slug === slug);
  return opt?.label.replace(/&nbsp;/g, " ") || slugToWords(slug);
};

const activeFilterSentences = (sel: Selections) => {
  const parts: string[] = [];
  for (const cat of CATEGORIES) {
    const b = sel.byCat[cat.key];
    if (!b || !b.and || b.and.length === 0) continue;
    const list = b.and.map((s) => optionLabel(cat.key, s));
    parts.push(`${cat.label}: ${list.join(" and ")}`);
  }
  return parts;
};

/* ========================== Machine-readable Filter Spec ========================== */
function buildFilterSpecJSON(basePath: string) {
  return {
    version: 1,
    basePath,
    pathPattern: "{basePath}/{catKey}-{slug}[/...]; within-category joiner: '-and-'; category order = CATEGORIES order",
    joiners: { withinCategory: "-and-", betweenCategories: "/" },
    categories: CATEGORIES.map((c) => ({
      key: c.key,
      label: c.label,
      options: c.options.map((o) => o.slug),
    })),
    acceptedQueryParams: CATEGORIES.map((c) => c.key),
    behavior: "GET query params are accepted and will be 301/302 redirected to canonical path-only URL.",
  };
}

export default async function Page({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  slog("incoming params.filters", resolvedParams.filters ?? []);
  slog("incoming searchParams", resolvedSearchParams);

  // 1) Accept SGCarmart-style query params and canonicalize to path
  const fromQuery = parseSelectionsFromSearchParams(resolvedSearchParams);
  const segsFromQuery = canonicalSegmentsFromSelections(fromQuery);
  if (segsFromQuery.length > 0) {
    const target = buildCanonicalPath(segsFromQuery);
    slog("redirecting (query -> path canonical)", target);
    // Use permanent redirect for stronger consolidation
    permanentRedirect(target);
  }

  // 2) Parse from path only
  const selections = parseSelectionsFromPath(resolvedParams.filters);
  const canonicalSegs = canonicalSegmentsFromSelections(selections);
  const canonicalPath = buildCanonicalPath(canonicalSegs);
  const incomingPath =
    resolvedParams.filters?.length
      ? `/best-fitness-studio-software/${resolvedParams.filters.join("/")}`
      : "/best-fitness-studio-software";

  if (incomingPath !== canonicalPath) {
    slog("redirecting (path canonicalize)", canonicalPath);
    // Use permanent redirect for non-canonical path variants
    permanentRedirect(canonicalPath);
  }

  // 3) SEO text
  const h1 = titleFromSelections(selections);
  const description = descriptionFromSelections(selections);

  // 4) Filter rows (AND within & across categories)
  const filtered = ROWS.filter((row) => matchesSelections(row, selections));
  slog("filtered.count", filtered.length);

  // 5) Visible columns: only the selected categories; if none selected -> show all
  const activeCatKeys = CATEGORIES.map((c) => c.key).filter((k) => {
    const b = selections.byCat[k];
    return b && (b.and?.length ?? 0) > 0;
  });
  const visibleCats =
    activeCatKeys.length === 0 ? CATEGORIES : CATEGORIES.filter((c) => activeCatKeys.includes(c.key));

  /* ======== JSON-LD (additional SEO) ======== */
  const faqLD = [
    {
      "@type": "Question",
      name: "What happens if I don't set any filters?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "You will see all vendors and all category columns. Once you filter, only the selected category columns are shown.",
      },
    },
    {
      "@type": "Question",
      name: "How should I choose the best fitness studio software?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Start with must-have booking, payments, and scheduling features, then evaluate memberships, POS, and marketing needs. Shortlist vendors that meet all your required filters, compare implementation speed, total cost, and regional payments support.",
      },
    },
  ];

  const itemListLD = filtered.slice(0, 20).map((row, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: row.url,
    name: row.name,
  }));

  const breadcrumbLD = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Best fitness studio software", item: "/best-fitness-studio-software" },
      ...(canonicalSegs.length
        ? [{ "@type": "ListItem", position: 3, name: h1, item: canonicalPath }]
        : []),
    ],
  };

  const overviewBullets = activeFilterSentences(selections);

  // ===== absolute canonical ONLY =====
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/+$/, "");
  const canonicalHref = base ? `${base}${canonicalPath}` : canonicalPath;

  /* Build machine-readable filter spec JSON and HTML comment payload */
  const filterSpec = buildFilterSpecJSON("/best-fitness-studio-software");
  const filterSpecComment =
    `<!-- FILTER_SPEC: ${JSON.stringify(filterSpec)} -->`;

  /* Build schema.org potentialAction with EntryPoint urlTemplate for query params */
  const queryTemplate = (() => {
    // Build "{?cat1*,cat2*,...}" RFC6570-style list template using category keys
    const keys = CATEGORIES.map((c) => c.key).join("*,");

    // If no categories, fallback to generic
    const qs = keys ? `{?${keys}*}` : "";
    const baseAbs = base ? `${base}/best-fitness-studio-software` : "/best-fitness-studio-software";
    return `${baseAbs}${qs}`;
  })();

  const filterActionLD = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: h1,
    url: canonicalHref,
    potentialAction: {
      "@type": "Action",
      name: "Filter vendors (query params accepted; redirects to canonical path)",
      target: {
        "@type": "EntryPoint",
        urlTemplate: queryTemplate,
        httpMethod: "GET",
        encodingType: "application/x-www-form-urlencoded",
      },
    },
  };

  return (
    <main className="bg-white text-black min-h-screen">
      {/* Canonical */}
      <link rel="canonical" href={canonicalHref} />

      {/* Machine-readable filter spec (HTML comment for bots) */}
      <div
        aria-hidden="true"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: filterSpecComment }}
      />

      {/* Non-executing JSON filter spec for parsers */}
      <script
        type="application/json"
        id="filter-spec"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(filterSpec) }}
      />

      {/* JSON-LD base */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: h1,
            description,
            url: canonicalHref, // absolute
          }),
        }}
      />
      {/* JSON-LD: Breadcrumbs */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLD) }}
      />
      {/* JSON-LD: FAQ */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqLD,
          }),
        }}
      />
      {/* JSON-LD: ItemList (top vendors) */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: itemListLD,
          }),
        }}
      />
      {/* JSON-LD: potentialAction with EntryPoint urlTemplate (query params) */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(filterActionLD) }}
      />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">{h1}</h1>
          <p className="mt-2 text-sm opacity-80">{description}</p>
        </header>

        {/* ========= SEO Overview (no on-page filter instructions) ========= */}
        <section className="mb-8 border border-black/10 rounded-lg p-5 bg-white">
          <h2 className="text-xl font-semibold">Which fitness studio software is best for you?</h2>
          <p className="mt-2 text-sm leading-7">
            This page helps owners and operators compare modern fitness studio platforms side-by-side.
            Prioritize must-haves—booking flow, payments, memberships—and then evaluate depth in scheduling,
            POS, marketing, and reporting.
          </p>

          {/* Added SEO-friendly evaluation checklist */}
          <h3 className="text-base font-semibold mt-4">How to evaluate vendors</h3>
          <ul className="mt-2 list-disc pl-6 text-sm space-y-1">
            <li>Check <strong>payments coverage</strong> (gateways and payment methods for your region).</li>
            <li>Confirm <strong>class models</strong> (drop-in, courses, privates) and <strong>capacity rules</strong>.</li>
            <li>Look for <strong>client experience</strong> (apps, reminders, wallets, checkout UX).</li>
            <li>Verify <strong>membership/passes logic</strong> (limits, freezes, carryover, billing).</li>
            <li>Map your <strong>POS &amp; hardware</strong> (tap-to-pay, readers, printers) if you sell in person.</li>
            <li>Assess <strong>marketing &amp; CRM</strong> (email/SMS, automation, recovery, tracking pixels).</li>
            <li>Calculate <strong>total cost</strong> (software + payment fees + add-ons).</li>
          </ul>

          {overviewBullets.length > 0 && (
            <>
              <h3 className="text-base font-semibold mt-4">Active filter summary</h3>
              <ul className="mt-2 list-disc pl-6 text-sm">
                {overviewBullets.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </>
          )}
        </section>

        {/* ======== SEO-Friendly Vendor Summaries (textual, crawlable) ======== */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold">Top vendors that match your exact requirements</h2>
          <p className="mt-2 text-sm">
            Below are concise summaries for each provider that satisfies <em>all</em> selected filters. Each summary
            lists the relevant categories and verified notes so you can validate requirements quickly.
          </p>

        {filtered.length === 0 ? (
            <p className="mt-3 text-sm">No vendors match these filters. Remove one or more constraints and try again.</p>
          ) : (
            <div className="mt-4 space-y-6">
              {filtered.map((row) => (
                <article
                  key={`card-${row.id}`}
                  className="border border-black/10 rounded-lg p-4"
                  itemScope
                  itemType="https://schema.org/SoftwareApplication"
                >
                  <h3 className="text-lg font-semibold">
                    <a href={row.url} className="underline underline-offset-4" itemProp="name">
                      {row.name}
                    </a>
                  </h3>
                  <link itemProp="applicationCategory" href="https://schema.org/BusinessApplication" />
                  <meta itemProp="operatingSystem" content="Web" />
                  <p className="mt-1 text-sm opacity-80" itemProp="description">
                    Fitness studio management software comparison details for {row.name}. Key notes and supported capabilities are listed below.
                  </p>

                  {row.additionalInfo && (
                    <div className="mt-3">
                      <h4 className="text-sm font-medium">Highlights</h4>
                      <div className="text-sm">
                        <AdditionalInfoCell text={row.additionalInfo} />
                      </div>
                    </div>
                  )}

                  <div className="mt-3">
                    <h4 className="text-sm font-medium">Verified capabilities</h4>
                    <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3">
                      {visibleCats.map((cat) => (
                        <li key={`${row.id}-${cat.key}`} className="text-sm">
                          <div className="font-semibold">{cat.label}</div>
                          <div className="mt-1">
                            <CategoryCell row={row} catKey={cat.key} />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* ======== Buying guide + methodology (SEO content) ======== */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-black/10 rounded-lg p-5">
            <h2 className="text-xl font-semibold">Buying guide: choosing the right platform</h2>
            <p className="mt-2 text-sm">
              The best fitness studio software balances frictionless booking with robust back-office controls.
              Prioritize client experience, reliable payments, and accurate capacity rules. Test your highest-traffic flows first.
            </p>
            <ul className="mt-2 list-disc pl-6 text-sm space-y-1">
              <li><strong>Payments &amp; gateways:</strong> verify your cards, wallets, and regional methods.</li>
              <li><strong>Scheduling depth:</strong> recurring classes, courses, time-off and conflicts.</li>
              <li><strong>Membership logic:</strong> freezes, limits, carryover, dunning/retries.</li>
              <li><strong>POS &amp; retail:</strong> readers, tap-to-pay, receipts, barcode scanners.</li>
              <li><strong>Engagement:</strong> reminders, waitlist messages, marketing automation.</li>
              <li><strong>Reporting:</strong> revenue, attendance, campaign attribution.</li>
            </ul>
          </div>

          <div className="border border-black/10 rounded-lg p-5">
            <h2 className="text-xl font-semibold">Our methodology</h2>
            <p className="mt-2 text-sm">
              Capabilities are compiled from vendor docs, product demos, and hands-on testing. Notes reflect exact phrasing
              from vendors when available. A feature appears as supported when a clear note is present and does not indicate
              missing functionality.
            </p>
            <p className="mt-2 text-sm">
              Filter to your non-negotiables first; then compare secondary features and total cost (software + payment fees + hardware).
            </p>
          </div>
        </section>

        {/* ======== FAQ (no “how to use filters” visible) ======== */}
        <section className="mt-10 border border-black/10 rounded-lg p-5">
          <h2 className="text-xl font-semibold">FAQs</h2>
          <div className="mt-3 space-y-4 text-sm">
            <div>
              <h3 className="font-medium">What if I see no results?</h3>
              <p>Relax a constraint or remove one filter at a time to broaden the results.</p>
            </div>
            <div>
              <h3 className="font-medium">Why do columns disappear when I filter?</h3>
              <p>To keep the page scannable, only the columns for categories you filtered remain visible.</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
