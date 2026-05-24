import config from "@payload-config";
import { getPayload } from "payload";
import type { Project } from "./projects";
import { PROJECTS, EN_CARDS_FALLBACK } from "./projectsFallback";
import { PROJECTS_MS, MS_CARDS } from "./projects.ms";
import type { CardData } from "@/components/CaseGrid";
import type { Locale } from "./dict";

type PayloadProjectDoc = {
  id: string | number;
  slug: string;
  category: "design-build" | "renovation" | "interior";
  order?: number;
  showZoomIcon?: boolean;
  title: string;
  eyebrow: string;
  location: string;
  year: string;
  priceLine: string;
  lead: string;
  intent: string;
  heroImage?: { url?: string | null; alt?: string | null } | null;
  planImage?: { url?: string | null; alt?: string | null } | null;
  planCaption: string;
  specs?: { k: string; v: string }[] | null;
  materials?: { label: string }[] | null;
  gallery?: { image?: { url?: string | null; alt?: string | null } | null; caption: string }[] | null;
  highlights?: { n: string; t: string; d: string }[] | null;
};

function mediaUrl(media: { url?: string | null } | null | undefined): string {
  return media?.url ?? "";
}

function mediaAlt(media: { alt?: string | null } | null | undefined, fallback: string): string {
  return media?.alt ?? fallback;
}

function toCard(doc: PayloadProjectDoc): CardData {
  return {
    id: doc.slug,
    category: doc.category,
    img: mediaUrl(doc.heroImage),
    alt: mediaAlt(doc.heroImage, doc.title),
    location: doc.location,
    year: doc.year,
    title: doc.title,
    priceLine: doc.priceLine,
    zoom: doc.showZoomIcon || false,
  };
}

function toProject(doc: PayloadProjectDoc): Project {
  return {
    id: doc.slug,
    eyebrow: doc.eyebrow,
    title: doc.title,
    location: doc.location,
    year: doc.year,
    hero: mediaUrl(doc.heroImage),
    lead: doc.lead,
    specs: (doc.specs ?? []).map((s) => ({ k: s.k, v: s.v })),
    plan: {
      img: mediaUrl(doc.planImage),
      caption: doc.planCaption,
    },
    intent: doc.intent,
    materials: (doc.materials ?? []).map((m) => m.label),
    gallery: (doc.gallery ?? []).map((g) => ({
      img: mediaUrl(g.image),
      cap: g.caption,
    })),
    highlights: (doc.highlights ?? []).map((h) => ({ n: h.n, t: h.t, d: h.d })),
  };
}

export type ProjectsBundle = {
  cards: CardData[];
  projects: Record<string, Project>;
  /** Where the data came from — useful for debugging in dev. */
  source: "payload" | "fallback";
};

/**
 * Fetch projects from Payload (in-process Local API, no HTTP). Falls back to
 * the hardcoded data shipped in lib/projects*.ts if Payload is unreachable
 * (no DATABASE_URL set, DB empty, or query error) — so the page renders even
 * before the CMS is fully provisioned.
 */
export async function getProjects(locale: Locale): Promise<ProjectsBundle> {
  if (!process.env.DATABASE_URL) {
    return fallback(locale);
  }
  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "projects",
      locale,
      sort: "order",
      depth: 2,
      limit: 100,
    });
    const docs = result.docs as unknown as PayloadProjectDoc[];
    if (!docs.length) return fallback(locale);
    const cards = docs.map(toCard);
    const projects: Record<string, Project> = {};
    for (const doc of docs) projects[doc.slug] = toProject(doc);
    return { cards, projects, source: "payload" };
  } catch (err) {
    console.warn("[getProjects] Falling back to hardcoded data:", err);
    return fallback(locale);
  }
}

function fallback(locale: Locale): ProjectsBundle {
  if (locale === "ms") {
    return { cards: MS_CARDS, projects: PROJECTS_MS, source: "fallback" };
  }
  return { cards: EN_CARDS_FALLBACK, projects: PROJECTS, source: "fallback" };
}
