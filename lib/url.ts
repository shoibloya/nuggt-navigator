import { CATEGORIES } from "./categories";
import type { Row } from "./data";

/* ========================================================================== *
 * Selections model (keeps shape but we only use AND now)
 * ========================================================================== */

export type Bucket = { and?: string[]; or?: string[] }; // `or` unused now (kept for compatibility)
export type Selections = { byCat: Record<string, Bucket> };

function normalizeSelections(input: any): Selections {
  if (input && typeof input === "object" && input.byCat && typeof input.byCat === "object") {
    return input as Selections;
  }
  // Back-compat: old shape like { "payment-methods": ["apple-pay"] } => treat as AND
  const byCat: Record<string, Bucket> = {};
  if (input && typeof input === "object") {
    for (const [k, v] of Object.entries(input)) {
      if (Array.isArray(v) && v.length > 0) {
        byCat[k] = { and: Array.from(new Set(v)) };
      }
    }
  }
  return { byCat };
}

/* ========================================================================== *
 * Common utils
 * ========================================================================== */

function safeDecode(s: string): string {
  try {
    return decodeURIComponent(s);
  } catch {
    return s;
  }
}

const norm = (s: string) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]/g, "");

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-");

function makeCatNormalizer() {
  const map = new Map<string, string>(); // normToken -> canonical cat.key
  for (const c of CATEGORIES) {
    const variants = new Set<string>([c.key, slug(c.label), c.key.replace(/-/g, " "), c.label]);
    for (const v of variants) map.set(norm(v), c.key);
  }
  return map;
}
const CAT_NORM_MAP = makeCatNormalizer();
const CAT_BY_KEY = new Map(CATEGORIES.map((c) => [c.key, c]));

/* ========================================================================== *
 * Parse helpers (AND-only)
 * ========================================================================== */

// From a path tail (e.g., "apple-pay-and-google-pay") produce an AND bucket
function parseTailToAnd(tail: string, allowed: Set<string>): string[] {
  if (!tail) return [];
  // Accept either a single token or an "-and-" joined list (case-insensitive)
  const parts = tail.split(/-and-/i).map((p) => p.trim()).filter(Boolean);
  const out = parts.filter((p) => allowed.has(p));
  return Array.from(new Set(out));
}

function mergeBuckets(into: Bucket, from: Bucket) {
  if (from.and?.length) {
    into.and = Array.from(new Set([...(into.and ?? []), ...from.and]));
  }
}

/* ========================================================================== *
 * PATH parsing (AND-only)
 * E.g. /payment-methods-apple-pay-and-google-pay
 * ========================================================================== */
export function parseSelectionsFromPath(segments?: string[]): Selections {
  const byCat: Record<string, Bucket> = {};
  if (!segments || segments.length === 0) return { byCat };

  const allowedByKey = new Map(
    CATEGORIES.map((c) => [c.key, new Set(c.options.map((o) => o.slug))])
  );

  for (const seg of segments) {
    const segLower = seg.toLowerCase();

    let canonicalKey: string | undefined;
    let tailStart = -1;

    for (const c of CATEGORIES) {
      const k = c.key.toLowerCase();
      const l = slug(c.label);
      if (segLower.startsWith(k + "-")) {
        canonicalKey = c.key;
        tailStart = k.length + 1;
        break;
      }
      if (segLower.startsWith(l + "-")) {
        canonicalKey = c.key;
        tailStart = l.length + 1;
        break;
      }
    }

    if (!canonicalKey || tailStart < 0) continue;

    const tailDecoded = safeDecode(seg.slice(tailStart));
    const allowed = allowedByKey.get(canonicalKey)!;
    const andList = parseTailToAnd(tailDecoded, allowed);

    if (andList.length) {
      byCat[canonicalKey] = byCat[canonicalKey] ?? {};
      mergeBuckets(byCat[canonicalKey], { and: andList });
    }
  }
  return { byCat };
}

/* ========================================================================== *
 * QUERY parsing (AND-only)
 * Repeated keys become AND: ?payment-methods=apple-pay&payment-methods=google-pay
 * Values may optionally contain "-and-" but typical usage is a single slug per entry.
 * ========================================================================== */
export function parseSelectionsFromSearchParams(
  searchParams: URLSearchParams | Record<string, string | string[] | undefined> | any
): Selections {
  const byCat: Record<string, Bucket> = {};

  const assign = (rawKey: string, rawValues: string[]) => {
    const canonicalKey = CAT_NORM_MAP.get(norm(rawKey));
    if (!canonicalKey) return;
    const cat = CAT_BY_KEY.get(canonicalKey)!;
    const allowed = new Set(cat.options.map((o) => o.slug));

    const allAnd: string[] = [];
    for (const raw of rawValues) {
      const v = safeDecode(raw ?? "");
      if (!v) continue;
      // Support either a single token or "-and-" joined tokens inside one value
      const andHere = v.split(/-and-/i).map((p) => p.trim()).filter(Boolean);
      for (const t of andHere) {
        if (allowed.has(t)) allAnd.push(t);
      }
    }
    if (allAnd.length) {
      byCat[canonicalKey] = byCat[canonicalKey] ?? {};
      mergeBuckets(byCat[canonicalKey], { and: Array.from(new Set(allAnd)) });
    }
  };

  const looksLikeURLSearchParams =
    searchParams &&
    typeof searchParams === "object" &&
    (typeof (searchParams as any).getAll === "function" ||
      typeof (searchParams as any).forEach === "function" ||
      typeof (searchParams as any).keys === "function");

  if (looksLikeURLSearchParams) {
    let usp: URLSearchParams;
    try {
      usp =
        searchParams instanceof URLSearchParams
          ? searchParams
          : new URLSearchParams((searchParams as any).toString?.() ?? "");
    } catch {
      usp = new URLSearchParams();
    }
    const keys = Array.from(usp.keys());
    for (const k of keys) assign(k, usp.getAll(k));
    return { byCat };
  }

  // Plain object fallback
  const pojo = (searchParams ?? {}) as Record<string, string | string[] | undefined>;
  for (const [k, v] of Object.entries(pojo)) {
    const arr = Array.isArray(v) ? v : typeof v === "string" ? [v] : [];
    if (arr.length) assign(k, arr);
  }
  return { byCat };
}

/* ========================================================================== *
 * Canonicalization (AND-only)
 * Segment tail: "<a>-and-<b>-and-<c>"
 * ========================================================================== */
export function canonicalSegmentsFromSelections(input: Selections | Record<string, string[]>): string[] {
  const sel = normalizeSelections(input);
  const segments: string[] = [];

  for (const cat of CATEGORIES) {
    const bucket = sel.byCat[cat.key];
    if (!bucket) continue;

    const allowedOrder = cat.options.map((o) => o.slug);
    const allowedSet = new Set(allowedOrder);

    const andFiltered = (bucket.and ?? []).filter((p) => allowedSet.has(p));
    if (andFiltered.length === 0) continue;

    const andOrdered = allowedOrder.filter((x) => andFiltered.includes(x));
    const tail = andOrdered.join("-and-");
    if (tail) segments.push(`${cat.key}-${tail}`);
  }
  return segments;
}

export function buildCanonicalPath(segments: string[]): string {
  const base = "/best-fitness-studio-software";
  return segments.length ? `${base}/${segments.join("/")}` : base;
}

/* ========================================================================== *
 * SEO helpers (AND-only phrasing)
 * ========================================================================== */

function optionLabel(catKey: string, slugVal: string): string {
  const cat = CATEGORIES.find((c) => c.key === catKey);
  const opt = cat?.options.find((o) => o.slug === slugVal);
  return opt?.label.replace(/&nbsp;/g, " ") ?? slugVal;
}

export function titleFromSelections(input: Selections | Record<string, string[]>): string {
  const sel = normalizeSelections(input);
  const base = "Best fitness studio software";

  const parts: string[] = [];
  for (const cat of CATEGORIES) {
    const b = sel.byCat[cat.key];
    if (!b) continue;
    const andLabels = (b.and ?? []).map((s) => optionLabel(cat.key, s));
    if (andLabels.length) parts.push(andLabels.join(" and "));
  }
  if (parts.length === 0) return base;
  return `${base} with ${parts.join(" and ")}`;
}

export function descriptionFromSelections(input: Selections | Record<string, string[]>): string {
  const sel = normalizeSelections(input);
  const hasAny = Object.values(sel.byCat).some((b) => (b.and?.length ?? 0) > 0);
  if (!hasAny) {
    return "Compare fitness studio software in a simple table. Filter by features such as booking channels, payments, notifications, and more.";
  }
  return `${titleFromSelections(sel)}. Server-rendered, fast to scan, and easy to compare.`;
}

/* ========================================================================== *
 * Legacy display helper (unchanged rendering)
 * ========================================================================== */

const UNAVAILABLE_RE = /can[’']t\s+find\s+information/i;
function isAvailableNote(note?: string): boolean {
  return !!note && !UNAVAILABLE_RE.test(note);
}

export function displayForRowCategory(row: Row, catKey: string): string {
  const cat = CATEGORIES.find((c) => c.key === catKey);
  if (!cat) return "—";

  const fromNotes =
    (row as any).optionNotes?.[catKey]
      ?.filter((n: any) => isAvailableNote(n.note))
      .map((n: any) => n.slug) ?? [];

  const fromFeatures = (row as any).features?.[catKey] ?? [];
  const slugs = Array.from(new Set([...fromNotes, ...fromFeatures]));
  if (slugs.length === 0) return "—";

  const labelBySlug = new Map(cat.options.map((o) => [o.slug, o.label.replace(/&nbsp;/g, " ")]));
  return slugs.map((s) => labelBySlug.get(s) ?? s).join(", ");
}
