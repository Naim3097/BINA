# BINA+ SEO Hub Strategy

Three independent content blogs that capture Malaysian search traffic at three different
buyer-journey stages and funnel qualified leads into **BINA+ Design & Build**.

> Money site: `binaplus.my` (this repo — Boxup Studio / BINA+)
> All hubs link **to** the money site. The money site does **not** link back.

---

## The 3 Hubs

| # | Hub | Folder | Domain (working) | Mindset captured | Time-to-buy | Build priority |
|---|-----|--------|------------------|------------------|-------------|----------------|
| 1 | **Local Klang Valley** | [`seo-hub-local-klang-valley/`](seo-hub-local-klang-valley/README.md) | `renoklangvalley.my` | "Who do I trust near me?" | 0–1 month | **P0 — build first** |
| 2 | **Renovation Cost** | [`seo-hub-renovation-cost/`](seo-hub-renovation-cost/README.md) | `kosrenovate.my` | "Can I afford this?" | 1–3 months | P1 |
| 3 | **Rumah Idaman Inspiration** | [`seo-hub-rumah-idaman/`](seo-hub-rumah-idaman/README.md) | `rumahidaman.my` | "What do I want?" | 3–12 months | P2 |

Build order rationale: Hub 1 leverages BINA+'s physical Shah Alam location for fastest, highest-converting leads. Hub 2 captures budgeting buyers. Hub 3 is the long-term brand & social-content moat.

---

## Funnel

```
Google search (informational query in BM or EN)
        │
        ▼
SEO Hub Blog (educates, shows real examples, builds trust)
        │
        ▼
Soft CTA (lead magnet PDF / WhatsApp / "Get a real quote")
        │
        ▼
BINA+ Design & Build → closes RM100k–RM460k+ project
```

---

## Backlink Policy (anti-PBN)

Google actively detects Private Blog Networks. To get the SEO juice without getting flagged:

### Per-page link budget
- **Max 1 follow link to BINA+ per article**, contextual, in-body — not in every section.
- **Max 1 follow link to BINA+ in the footer / sidebar** (sitewide).
- All other BINA+ mentions: in-content, naturally placed, varied anchor text.
- **Pillar / category pages may link twice** to BINA+ (once in body, once in CTA box) — these are higher-value pages.

### Anchor text variation (target distribution per hub)
| Anchor type | Target % | Examples |
|---|---|---|
| Branded | 40% | "BINA+", "BINA+ Design & Build", "bina.byboxup" |
| Naked URL | 15% | "binaplus.my" |
| Generic | 20% | "this Shah Alam contractor", "the studio we recommend" |
| Partial-match | 20% | "design and build studio in Selangor", "their renovation packages" |
| Exact-match | 5% | "design and build Shah Alam" — use sparingly |

> Exact-match anchor stuffing is the #1 trigger for Penguin algorithmic filter.

### Cross-hub linking
- **Don't** cross-link the 3 hubs heavily. That's an obvious footprint.
- Allowed: 1–2 contextual references per quarter, only when genuinely relevant.

### Off-network signal-building
- Each hub earns its own real backlinks (Reddit, Lowyat, Facebook groups, guest posts).
- This dilutes the "all roads lead to BINA+" footprint and makes each hub look organic.

---

## Anti-PBN Footprint Checklist

| Item | Rule |
|---|---|
| Domain registrar | Use 3 different registrars (e.g. Cloudflare, NameCheap, Exabytes) |
| WHOIS | Privacy ON for all 3, different contact emails |
| Hosting | Different Cloudflare/Vercel accounts (or at minimum different projects) |
| Analytics | Different GA properties — preferred: use Plausible/Umami (no cross-tracking footprint) |
| Search Console | Different Google accounts ideally, or at least separate properties |
| Visual design | Each hub uses a distinct theme / colour palette / typography |
| Author bios | Each hub has its own real author(s) with separate LinkedIn / IG presence |
| Launch cadence | Stagger launches 6–8 weeks apart. Do not launch all 3 in one month |
| Content overlap | Zero duplicate articles across hubs. Each hub's content stays in its lane |
| Tech stack | OK to reuse the same stack — that's not a footprint Google detects |

---

## Tech Stack (recommended for all 3)

- **Framework:** Astro (content-first, zero JS by default, perfect Lighthouse out of the box)
- **CMS:** Markdown files in repo (devs) **or** Astro + Decap CMS / Notion-as-source (non-devs)
- **Hosting:** Vercel or Cloudflare Pages (free tier handles all 3)
- **Analytics:** Plausible or Umami (privacy-first, 1 KB script, no cookie banner needed)
- **Search Console + Bing Webmaster Tools:** mandatory both
- **Email capture:** ConvertKit free tier or Buttondown (lead magnets)
- **CDN + WAF:** Cloudflare (free tier covers SSL, HTTP/3, Brotli, basic DDoS)

---

## Content Production Model (per hub)

### Cadence
- Launch with **15 cornerstone articles** (3 pillar + 12 cluster).
- Publish **2 new articles per week** for first 6 months.
- Refresh / update top-10 articles every quarter (real `lastmod` dates matter).

### Bilingual (BM + EN)
- Every article ships in both languages with proper `hreflang`.
- BM = volume keyword (more search). EN = higher-converting buyer.
- 1 BM + 1 EN = 2 indexed pages from same effort.

### EEAT (Experience, Expertise, Authoritativeness, Trust)
- Real author bio with photo + LinkedIn on every post.
- Author has a /about page on the hub.
- Cite local sources (KWSP, BNM, JKR, MS standards) where relevant.
- Show real photos where possible (not stock) for project examples.

---

## Schema Markup per Hub

| Hub | Primary schema | Why |
|---|---|---|
| Local Klang Valley | `LocalBusiness` (BINA+ embedded) + `Article` + `BreadcrumbList` + `Review` | Wins local pack |
| Cost Hub | `FAQPage` + `HowTo` + `Article` + price tables | Wins SERP rich results |
| Inspiration | `Article` + `ImageObject` + `HowTo` | Wins image pack & Pinterest-style traffic |

Sitewide on all 3: `Organization` + `WebSite` + `SearchAction`.

---

## Performance Targets (all hubs)

- Lighthouse mobile: **≥ 95** on every page
- LCP: **< 2.0s** on mobile 4G
- INP: **< 200ms**
- CLS: **< 0.05**
- Total page weight: **< 500 KB** (excluding hero image)
- 0 render-blocking JS in `<head>`

---

## SEO Hygiene (sitewide rules)

- Self-referencing canonical on every page
- One `<h1>` per page; strict H1 → H2 → H3 hierarchy
- Unique `<title>` (≤ 60 chars) and `<meta description>` (≤ 155 chars) per page
- Descriptive `alt` on every image (BM + EN keywords where relevant)
- Real 404 status (no soft 404s)
- HSTS preload, TLS 1.3, A+ on SSL Labs
- HTTP → HTTPS and `www` → root, both 301 at the edge
- Real `<lastmod>` in sitemap (file mtime — never fake)
- No mobile interstitials on first-paint
- No purchased backlinks, ever
- No AI-only content — every article gets human editing, examples, original photos

---

## What Will Get Us Flagged (do not do)

| Trigger | Penalty |
|---|---|
| Pure AI articles, no human editing | Helpful Content sitewide demotion |
| Doorway pages (hub posts with no value, just funnel) | Manual action |
| Cloaking BINA+ link to bots vs users | Manual action |
| Identical articles across 3 hubs | Index bloat, ranking dilution |
| > 1 follow link to BINA+ per page | Link spam algorithmic filter |
| Exact-match anchor text on > 5% of links | Penguin filter |
| Buying backlinks | Manual action |
| Footer link-stuffing to BINA+ | Link spam |
| Soft 404s (200 status on missing pages) | De-indexed |
| Fake `lastmod` in sitemap | Sitemap ignored |
| Same WHOIS / same hosting / same GA across hubs | PBN detection |
| Mobile pop-up on first scroll | Mobile ranking demotion |

---

## Roadmap

- [ ] **Phase 0 (this doc)** — strategy locked
- [ ] **Phase 1** — Hub 1: Local Klang Valley scaffold + 15 cornerstone articles
- [ ] **Phase 2** — Hub 1 launch + 8 weeks of weekly publishing + GSC verified
- [ ] **Phase 3** — Hub 2: Cost Hub scaffold + 15 cornerstone articles
- [ ] **Phase 4** — Hub 2 launch + Hub 1 still publishing
- [ ] **Phase 5** — Hub 3: Inspiration Hub scaffold + 15 cornerstone articles
- [ ] **Phase 6** — All 3 hubs publishing; quarterly content refresh cycle begins

See [`seo-hub-local-klang-valley/README.md`](seo-hub-local-klang-valley/README.md) for the first build.
