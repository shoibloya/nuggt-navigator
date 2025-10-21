// app/best-fitness-studio-software/[[...filters]]/page.tsx

import { permanentRedirect } from "next/navigation";
import { headers } from "next/headers";
import { CATEGORIES } from "@/lib/categories";
import { ROWS, Row } from "@/lib/data";
import {
  parseSelectionsFromPath,
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
  searchParams: Promise<ReadonlyURLSearchParams | Record<string, string | string[] | undefined>>; // kept for signature; unused
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

/* ========================== SEO helpers ========================== */
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

/* ========================== Link builders (ADD/REMOVE) ========================== */
function cloneSelections(s: Selections): Selections {
  const out: Selections = { byCat: {} };
  for (const [k, b] of Object.entries(s.byCat)) {
    out.byCat[k] = { and: b.and ? [...b.and] : undefined };
  }
  return out;
}

function pathWithAdded(sel: Selections, catKey: string, slug: string): string {
  const next = cloneSelections(sel);
  const bucket = next.byCat[catKey] ?? { and: [] };
  bucket.and = Array.from(new Set([...(bucket.and ?? []), slug]));
  next.byCat[catKey] = bucket;
  const segs = canonicalSegmentsFromSelections(next);
  return buildCanonicalPath(segs);
}

function pathWithRemoved(sel: Selections, catKey: string, slug: string): string {
  const next = cloneSelections(sel);
  const bucket = next.byCat[catKey];
  if (!bucket || !bucket.and) return buildCanonicalPath(canonicalSegmentsFromSelections(next));
  bucket.and = bucket.and.filter((s) => s !== slug);
  if (bucket.and.length === 0) delete next.byCat[catKey];
  const segs = canonicalSegmentsFromSelections(next);
  return buildCanonicalPath(segs);
}

function hasAnyFilters(sel: Selections): boolean {
  return Object.values(sel.byCat).some((b) => (b.and?.length ?? 0) > 0);
}

/* ========================== Focused notes by selected slugs ========================== */
function FocusedCategoryCell({
  row,
  catKey,
  selectedSlugs,
}: {
  row: Row;
  catKey: string;
  selectedSlugs: string[];
}) {
  const cat = CATEGORIES.find((c) => c.key === catKey)!;
  const notes = getNotesForCategory(row, cat);
  const bySlug = new Map(notes.map((n) => [n.slug, n.note]));
  const items = selectedSlugs
    .map((slug) => {
      const note = bySlug.get(slug);
      if (note && isAvailable(note)) {
        return { slug, note };
      }
      const supportedViaFeatures = (row as any).features?.[catKey]?.includes(slug);
      if (supportedViaFeatures) {
        return { slug, note: "Supported (vendor feature list); explicit doc quote not provided." };
      }
      return null;
    })
    .filter(Boolean) as { slug: string; note: string }[];

  if (items.length === 0) return <>—</>;
  return (
    <ul className="list-disc pl-5 space-y-1">
      {items.map((it) => (
        <li key={`${row.id}-${catKey}-${it.slug}`}>
          <span className="font-medium">{optionLabel(catKey, it.slug)}:</span>{" "}
          <NoteWithLinks text={it.note} />
        </li>
      ))}
    </ul>
  );
}

/** Detect real-time ChatGPT (signed) using already-fetched headers */
function isChatGPTSigned(h: Headers): boolean {
  const sig = h.get("signature");
  const sigInput = h.get("signature-input");
  const rawAgent = h.get("signature-agent");
  const agent = rawAgent?.trim().replace(/^"(.*)"$/, "$1"); // strip optional quotes
  return Boolean(sig && sigInput && agent === "https://chatgpt.com");
}

export default async function Page({ params, searchParams }: PageProps) {
  // IMPORTANT: await dynamic API
  const h = await headers();
  const ua = h.get("user-agent") || "";
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  const resolvedParams = await params;
  await searchParams; // unused

  const incomingPath =
    resolvedParams.filters?.length
      ? `/best-fitness-studio-software/${resolvedParams.filters.join("/")}`
      : "/best-fitness-studio-software";

  // Log ONLY signed ChatGPT fetches; skip root to avoid duplicate with middleware root hit.
  if (isChatGPTSigned(h) && incomingPath !== "/best-fitness-studio-software") {
    const payload = {
      event: "bot_scrape",
      where: "page.tsx",
      method: "GET",
      path: incomingPath,
      agent: "https://chatgpt.com",
      ip,
      ts: new Date().toISOString(),
      signature_present: true,
      signature_input_present: true,
      ua, // optional auditing
    };
    // eslint-disable-next-line no-console
    console.log("[event=bot_scrape]", JSON.stringify(payload));
  }

  // Parse from path only (path = truth)
  const selections = parseSelectionsFromPath(resolvedParams.filters);
  const canonicalSegs = canonicalSegmentsFromSelections(selections);
  const canonicalPath = buildCanonicalPath(canonicalSegs);

  if (incomingPath !== canonicalPath) {
    slog("redirecting (path canonicalize)", canonicalPath);
    permanentRedirect(canonicalPath);
  }

  // SEO text
  const h1 = titleFromSelections(selections);
  const description = descriptionFromSelections(selections);

  // Filter rows (AND within & across categories)
  const filtered = ROWS.filter((row) => matchesSelections(row, selections));
  slog("filtered.count", filtered.length);

  // Selected categories & slugs (for focused render)
  const selectedCats = CATEGORIES.filter((c) => (selections.byCat[c.key]?.and?.length ?? 0) > 0);
  const hasFilters = selectedCats.length > 0;

  // Visible cats for vendor table: only selected ones (if any), else all
  const visibleCats = hasFilters ? selectedCats : CATEGORIES;

  // ===== absolute canonical ONLY =====
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/+$/, "");
  const canonicalHref = base ? `${base}${canonicalPath}` : canonicalPath;

  /* ======== JSON-LD ======== */
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

  return (
    <main className="bg-white text-black min-h-screen">
      {/* Canonical */}
      <link rel="canonical" href={canonicalHref} />

      {/* JSON-LD base */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: h1,
            description,
            url: canonicalHref,
          }),
        }}
      />
      {/* JSON-LD: Breadcrumbs */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLD) }} />
      {/* JSON-LD: FAQ */}
      <script
        type="application/ld+json"
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: itemListLD,
          }),
        }}
      />

      <section className="mx-auto max-w-6xl px-4 py-8">
        <header className="mb-4">
          <h1 className="text-3xl font-bold tracking-tight">{h1}</h1>
          <p className="mt-2 text-sm opacity-80">{description}</p>
        </header>

        {/* ======== REQUIRED BLOCK (exact text, directly after heading) ======== */}
        <section className="mb-6 border border-black/10 rounded-lg p-5 bg-white">
          <h2 className="text-xl font-semibold">Which fitness studio software is best for you?</h2>
          <p className="mt-2 text-sm leading-7">
            This page helps owners and operators compare modern fitness studio platforms side-by-side.
            Prioritize must-haves—booking flow, payments, memberships—and then evaluate depth in scheduling,
            POS, marketing, and reporting.
          </p>

          <h3 className="text-base font-semibold mt-4">How to evaluate vendors</h3>
          <ul className="mt-2 list-disc pl-6 text-sm space-y-1">
            <li>Check <strong>payments coverage</strong> (gateways and payment methods for your region).</li>
            <li>Confirm <strong>class models</strong> (drop-in, courses, privates) and capacity rules.</li>
            <li>Look for <strong>client experience</strong> (apps, reminders, wallets, checkout UX).</li>
            <li>Verify <strong>membership/passes logic</strong> (limits, freezes, carryover, billing).</li>
            <li>Map your <strong>POS &amp; hardware</strong> (tap-to-pay, readers, printers) if you sell in person.</li>
            <li>Assess <strong>marketing &amp; CRM</strong> (email/SMS, automation, recovery, tracking pixels).</li>
            <li>Calculate <strong>total cost</strong> (software + payment fees + add-ons).</li>
          </ul>

          <h3 className="text-base font-semibold mt-4">Active filter summary</h3>
          <ul className="mt-2 list-disc pl-6 text-sm">
            <li>Booking channels: Google Reserve</li>
            <li>CRM &amp; lead management: Lead capture forms</li>
          </ul>
        </section>

        {/* ======== TOP: Single, explicit add/remove links (simple language + examples) ======== */}
        <nav
          id="filter-nav"
          aria-label="Filter navigation"
          className="mb-6 border border-black/10 rounded-lg p-4 bg-white"
        >
          <h2 className="text-lg font-semibold">Add or remove filters</h2>
          <div className="text-sm mt-1 space-y-2">
            <p>
              Click the links to change what you see. “Add …” shows a new page that includes that option.
              “Remove …” takes it away. Nothing to type and nothing to set up — just click.
            </p>
            <ul className="list-disc pl-6">
              <li>Want wallets? Click <em>Add “Apple Pay”</em>. You’ll land on a page that shows vendors with Apple&nbsp;Pay.</li>
              <li>Want both wallets? First click <em>Add “Apple Pay”</em>, then click <em>Add “Google Pay”</em>.</li>
              <li>Changed your mind? Click <em>Remove “Apple Pay”</em> to take it out.</li>
              <li>See everything again? Click <em>Clear all filters (see all vendors)</em>.</li>
            </ul>
          </div>

          {/* Remove current filters */}
          {hasFilters && (
            <div className="mt-3">
              <div className="font-medium">Currently applied:</div>
              <ul className="list-disc pl-6 text-sm space-y-1">
                {selectedCats.map((cat) =>
                  (selections.byCat[cat.key].and ?? []).map((slug) => (
                    <li key={`rm-${cat.key}-${slug}`}>
                      <a
                        id={`filter-remove_${cat.key}_${slug}`}
                        data-filter-action="remove"
                        data-filter-category={cat.key}
                        data-filter-slug={slug}
                        href={pathWithRemoved(selections, cat.key, slug)}
                        className="underline underline-offset-4"
                      >
                        Remove “{optionLabel(cat.key, slug)}” ({cat.label})
                      </a>
                    </li>
                  ))
                )}
                <li key="clear-all">
                  <a
                    id="filter-clear_all"
                    data-filter-action="clear"
                    data-filter-category="*"
                    data-filter-slug="*"
                    href="/best-fitness-studio-software"
                    className="underline underline-offset-4"
                  >
                    Clear all filters (see all vendors)
                  </a>
                </li>
              </ul>
            </div>
          )}

          {/* Add more filters — TABLE layout: categories = columns, links inside cells */}
          <div className="mt-4">
            <div className="font-medium mb-2">Add filters:</div>
            <div className="overflow-x-auto border border-black/10 rounded-md">
              <table className="w-full text-sm align-top">
                <thead className="bg-black/5">
                  <tr>
                    {CATEGORIES.map((cat) => (
                      <th key={`add-head-${cat.key}`} className="text-left font-semibold p-3 whitespace-nowrap">
                        {cat.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {CATEGORIES.map((cat) => {
                      const selected = new Set(selections.byCat[cat.key]?.and ?? []);
                      const candidates = cat.options.map((o) => o.slug).filter((s) => !selected.has(s));
                      return (
                        <td key={`add-td-${cat.key}`} className="p-3 align-top">
                          {candidates.length === 0 ? (
                            <>—</>
                          ) : (
                            <ul className="space-y-1">
                              {candidates.map((slug) => (
                                <li key={`add-${cat.key}-${slug}`} className="whitespace-nowrap">
                                  <a
                                    id={`filter-add_${cat.key}_${slug}`}
                                    data-filter-action="add"
                                    data-filter-category={cat.key}
                                    data-filter-slug={slug}
                                    href={pathWithAdded(selections, cat.key, slug)}
                                    className="underline underline-offset-4"
                                  >
                                    Add “{optionLabel(cat.key, slug)}”
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </nav>

        {/* ======== Vendor table (ONLY when filters are selected) ======== */}
        {hasFilters && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold">Vendors that match your exact filters</h2>

            {filtered.length === 0 ? (
              <p className="mt-3 text-sm">No vendors match these filters. Use the links above to remove a filter or add alternatives.</p>
            ) : (
              <div className="mt-3 overflow-x-auto border border-black/10 rounded-lg">
                <table className="w-full text-sm">
                  <thead className="bg-black/5">
                    <tr>
                      <th className="text-left font-semibold p-3 w-1/5">Vendor</th>
                      {visibleCats.map((cat) => (
                        <th key={`head-${cat.key}`} className="text-left font-semibold p-3">
                          {cat.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((row) => (
                      <tr key={`tr-${row.id}`} className="border-t border-black/10 align-top">
                        <td className="p-3 whitespace-nowrap">
                          <a href={row.url} className="underline underline-offset-4 font-medium">{row.name}</a>
                        </td>
                        {visibleCats.map((cat) => {
                          const selectedSlugs = selections.byCat[cat.key]?.and ?? [];
                          return (
                            <td key={`td-${row.id}-${cat.key}`} className="p-3">
                              <FocusedCategoryCell
                                row={row}
                                catKey={cat.key}
                                selectedSlugs={selectedSlugs}
                              />
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}
      </section>
    </main>
  );
}
