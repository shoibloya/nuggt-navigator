//app/best-fitness-studio-software/[[...filters]]/page.tsx

import { redirect } from "next/navigation";
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
  // use parentheses, not bracket indexing
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

/* ========================== AI Instructions copy (kept EXACTLY the same) ============================ */
const CATEGORY_DEFINITIONS: Record<string, string> = {
  "booking-channels": "Where and how clients can browse, book, and pay.",
  "class-types": "Kinds of offerings the platform supports (classes, privates, events, etc.).",
  "recurrence": "Ways to schedule repeating or fixed-date programs and enrollments.",
  "capacity-and-time-controls": "Controls for class size, waitlists, timing and cancellation rules.",
  "resource-allocation": "Scheduling facilities, staff, and equipment without conflicts.",
  "calendar-sync": "Sync options to external calendars.",
  "check-in-and-access": "Onsite entry/check-in methods and access control.",
  "forms-and-waivers": "Data capture, waivers, and consent workflows.",
  "booking-models": "Account/guest flows and multi-attendee options.",
  "notifications": "System emails, texts, pushes, and waitlist messages.",
  "payment-gateways": "Payment processors supported natively.",
  "payment-methods": "Payment methods clients can use online or in person.",
  "point-of-sale-in-person": "In-person POS hardware capabilities.",
  "pricing-models": "How you can price and package your services.",
  "billing-and-collections": "Recurring billing, retries, proration and related flows.",
  "taxes-and-invoicing": "Tax settings and invoicing features.",
  "discounts-and-credits": "Coupons, gift cards, and other credits/discounts.",
  "risk-and-compliance": "Security, SCA/3DS, PCI, and fraud-related items.",
  "profiles": "Client profile fields and segmentation.",
  "memberships": "Membership rules like contracts, freezes, and access.",
  "passes": "Packs/punch cards and related rules.",
  "loyalty-and-referral": "Points, referrals, rewards.",
  "gift-cards": "Gift card capabilities.",
  "community": "Social community features.",
  "admin-and-permissions": "Admin roles and audit capabilities.",
  "scheduling-and-availability": "Staff availability, time off, and scheduling.",
  "compensation": "Payroll, commissions, tips reporting.",
  "crm-and-lead-management": "CRM, lead capture and pipeline.",
  "campaigns": "Email/SMS marketing & automation tools.",
  "ads-and-tracking": "Ads pixels and analytics tracking.",
};
/* =================================================================================== */

/* ---------- SEO helpers for prose ---------- */
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

/* ========================== NEW: Server Action (SSR-only filtering) ========================== */
async function applyFilters(formData: FormData) {
  "use server";
  // Build selections from posted checkbox values (AND within each category)
  const byCat: Record<string, { and: string[] }> = {};
  for (const cat of CATEGORIES) {
    const raw = formData.getAll(cat.key).map(String);
    if (raw.length === 0) continue;
    const allowed = new Set(cat.options.map((o) => o.slug));
    const and = Array.from(new Set(raw.filter((s) => allowed.has(s))));
    if (and.length > 0) byCat[cat.key] = { and };
  }
  const segs = canonicalSegmentsFromSelections({ byCat });
  const target = buildCanonicalPath(segs);
  redirect(target);
}

/* ========================== NEW: Expansion Links (crawl hints) ========================== */

function buildExpansionGroups(sel: Selections): Array<{
  catKey: string;
  catLabel: string;
  links: Array<{ href: string; text: string }>;
}> {
  const groups: Array<{ catKey: string; catLabel: string; links: Array<{ href: string; text: string }> }> = [];
  const currentByCat = sel.byCat;

  for (const cat of CATEGORIES) {
    const current = new Set(currentByCat[cat.key]?.and ?? []);
    const links: Array<{ href: string; text: string }> = [];

    for (const opt of cat.options) {
      if (current.has(opt.slug)) continue; // only show additions
      const nextSel: Selections = {
        byCat: Object.fromEntries(
          Object.entries(currentByCat).map(([k, v]) => [k, { and: Array.from(new Set(v.and ?? [])) }])
        ) as Record<string, { and: string[] }>,
      };
      const existing = nextSel.byCat[cat.key]?.and ?? [];
      nextSel.byCat[cat.key] = { and: Array.from(new Set([...existing, opt.slug])) };

      const segs = canonicalSegmentsFromSelections(nextSel);
      const href = buildCanonicalPath(segs);
      links.push({ href, text: `Add ${opt.label}` });
    }

    groups.push({ catKey: cat.key, catLabel: cat.label, links });
  }

  return groups;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;

  slog("incoming params.filters", resolvedParams.filters ?? []);

  // 1) Parse from path only (NO query string support)
  const selections = parseSelectionsFromPath(resolvedParams.filters);
  slog("fromPath.byCat", selections.byCat);

  // 2) Ensure canonical path for path-based selections
  const canonicalSegs = canonicalSegmentsFromSelections(selections);
  const canonicalPath = buildCanonicalPath(canonicalSegs);
  const incomingPath =
    resolvedParams.filters?.length
      ? `/best-fitness-studio-software/${resolvedParams.filters.join("/")}`
      : "/best-fitness-studio-software";
  slog("incomingPath", incomingPath);
  slog("canonicalPath", canonicalPath);

  if (incomingPath !== canonicalPath) {
    slog("redirecting (path canonicalize)", canonicalPath);
    redirect(canonicalPath);
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
  slog("visibleCats", activeCatKeys.length === 0 ? "ALL" : activeCatKeys);

  /* ======== JSON-LD (additional SEO) ======== */
  const faqLD = [
    {
      "@type": "Question",
      name: "How do I filter this page?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Use the on-page checkboxes and submit to update. Each combination redirects to a dedicated URL so you can compare options quickly.",
      },
    },
    {
      "@type": "Question",
      name: "What does a selected option mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Selecting an option (e.g., Apple Pay under Payment methods) filters to software that supports that capability. All selections are combined with AND logic.",
      },
    },
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

  /* ========================== NEW: Build expansion link groups ========================== */
  const expansionGroups = buildExpansionGroups(selections);

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
            url: canonicalPath,
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

      <section className="mx-auto max-w-6xl px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">{h1}</h1>
          <p className="mt-2 text-sm opacity-80">{description}</p>
        </header>

        {/* ========= SEO Overview & Buying Guidance (SEO-first) ========= */}
        <section className="mb-8 border border-black/10 rounded-lg p-5 bg-white">
          <h2 className="text-xl font-semibold">Which fitness studio software is best for you?</h2>
          <p className="mt-2 text-sm leading-7">
            This page helps owners and operators compare modern fitness studio platforms side-by-side.
            Start with your must-haves—booking flow, payments, memberships—then narrow to vendors that
            satisfy <em>all</em> requirements. Every selection you add redirects to a dedicated, indexable URL.
          </p>

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
        </section>

        {/* =================== NEW: Checkbox Form (SSR submit -> redirect to path) =================== */}
        <section className="mb-8 border border-black/10 rounded-lg p-5 bg-white">
          <h2 className="text-xl font-semibold mb-2">Filter by capabilities</h2>
          <form action={applyFilters}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CATEGORIES.map((cat) => {
                const selected = new Set(selections.byCat[cat.key]?.and ?? []);
                return (
                  <fieldset key={cat.key} className="border border-black/10 rounded-md p-3">
                    <legend className="font-medium">{cat.label}</legend>
                    <p className="text-xs opacity-75 mt-1">
                      {CATEGORY_DEFINITIONS[cat.key] ?? "Select all that apply."}
                    </p>
                    <ul className="mt-2 space-y-2">
                      {cat.options.map((opt) => (
                        <li key={opt.slug} className="flex items-start gap-2">
                          <input
                            id={`${cat.key}__${opt.slug}`}
                            type="checkbox"
                            name={cat.key}
                            value={opt.slug}
                            defaultChecked={selected.has(opt.slug)}
                            className="mt-1"
                          />
                          <label htmlFor={`${cat.key}__${opt.slug}`} className="text-sm">
                            <code>{opt.slug}</code> — {opt.label.replace(/&nbsp;/g, " ")}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </fieldset>
                );
              })}
            </div>

            <div className="mt-4 flex items-center gap-3">
              <button
                type="submit"
                className="px-3 py-2 rounded-md border border-black/10 bg-black text-white text-sm"
              >
                Update results
              </button>
              <a
                href="/best-fitness-studio-software"
                className="text-sm underline underline-offset-4"
              >
                Clear all
              </a>
            </div>
          </form>
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

        {/* ======== FAQ (visible content to match JSON-LD) ======== */}
        <section className="mt-10 border border-black/10 rounded-lg p-5">
          <h2 className="text-xl font-semibold">FAQs</h2>
          <div className="mt-3 space-y-4 text-sm">
            <div>
              <h3 className="font-medium">How do I filter this page?</h3>
              <p>
                Use the checkboxes above and click <em>Update results</em>. Each combination has its own URL (no query strings),
                so it’s easy to share, index, and compare.
              </p>
            </div>
            <div>
              <h3 className="font-medium">What does selecting an option do?</h3>
              <p>
                Selecting an option (e.g., <code>payment-methods = Apple&nbsp;Pay</code>) filters to vendors that support it.
                All selections are combined with AND logic, across and within categories.
              </p>
            </div>
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

        {/* =================== NEW: Crawl Hints (explicit links to expansion pages) =================== */}
        <section className="mt-10 border border-black/10 rounded-lg p-5">
          <h2 className="text-xl font-semibold">Explore related filtered pages</h2>
          <p className="mt-2 text-sm">
            From this page, you can jump to any closely-related combination. Each link below adds exactly one additional
            requirement to your current selection (AND logic). This helps you compare “what if we also required …”.
          </p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {expansionGroups.map((g) => (
              <div key={g.catKey} className="border border-black/10 rounded-md p-3">
                <h3 className="font-medium">{g.catLabel}</h3>
                {g.links.length === 0 ? (
                  <p className="text-sm opacity-75 mt-1">All options in this category are already selected.</p>
                ) : (
                  <ul className="list-disc pl-5 text-sm mt-2 space-y-1">
                    {g.links.map((l) => (
                      <li key={l.href}>
                        <a href={l.href} className="underline underline-offset-4">{l.text}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs opacity-70">
            Tip: Search engines and scrapers can navigate the entire comparison space via these links with no client-side code.
          </p>
        </section>
      </section>
    </main>
  );
}
