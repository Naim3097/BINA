import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

/**
 * Generated sitemap served at /sitemap.xml.
 *
 * Built from the real routes rather than a hand-maintained file, so new blog
 * posts appear automatically. The landing page (/lp-renovation) is deliberately
 * excluded — it is noindex and disallowed in robots.txt as a paid-campaign page.
 */

const BASE = "https://binaplusdesign.my";

type ChangeFreq = MetadataRoute.Sitemap[number]["changeFrequency"];

const PAGES: { en: string; ms: string; priority: number; changeFrequency: ChangeFreq }[] = [
  { en: "/", ms: "/ms", priority: 1.0, changeFrequency: "weekly" },
  { en: "/services", ms: "/ms/services", priority: 0.9, changeFrequency: "monthly" },
  { en: "/about", ms: "/ms/about", priority: 0.8, changeFrequency: "monthly" },
  { en: "/case-studies", ms: "/ms/case-studies", priority: 0.8, changeFrequency: "monthly" },
  { en: "/blog", ms: "/ms/blog", priority: 0.8, changeFrequency: "weekly" },
  { en: "/contact", ms: "/ms/contact", priority: 0.7, changeFrequency: "yearly" },
  { en: "/privacy", ms: "/ms/privacy", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const p of PAGES) {
    const languages = {
      "en-MY": `${BASE}${p.en}`,
      "ms-MY": `${BASE}${p.ms}`,
    };
    entries.push({
      url: `${BASE}${p.en}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
      alternates: { languages },
    });
    entries.push({
      url: `${BASE}${p.ms}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: Math.round(p.priority * 0.9 * 10) / 10,
      alternates: { languages },
    });
  }

  for (const post of getAllPosts()) {
    const en = `${BASE}/blog/${post.slug}`;
    const ms = `${BASE}/ms/blog/${post.slug}`;
    const languages = { "en-MY": en, "ms-MY": ms };
    const lastModified = new Date(post.date);
    entries.push({
      url: en,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages },
    });
    entries.push({
      url: ms,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: { languages },
    });
  }

  return entries;
}
