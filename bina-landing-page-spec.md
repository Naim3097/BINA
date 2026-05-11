# BINA+ — Paid-Ads Landing Page Spec

**File path on this site:** `/lp-renovation.html` (single static page, no nav, no footer links out)
**Stack:** vanilla HTML + the existing `assets/css/style.css` tokens + minimal page-scoped CSS
**Owner:** Danis
**Purpose:** ONE landing page on the BINA+ main site, isolated from the main nav, designed exclusively to convert **paid ads traffic** (Meta + Google) into WhatsApp leads or booked site-visit consults.

> ⚠️ Reality check upfront: nobody converts 100%. A focused niche reno LP that
> hits **8–14% lead rate** with **~30% lead-to-consult** is already top-decile
> for Meta-ads-driven traffic in MY home renovation. This spec is engineered
> for that ceiling — not a fictional 100%.

---

## 1. The visitor (who's actually clicking the ad)

This LP receives traffic from paid Meta + Google campaigns. The visitor is **NOT** browsing — they clicked one specific ad with a specific creative. Three realistic personas:

| Persona | What they saw in the ad | What they want on landing |
|---|---|---|
| **A. New homeowner (post-VP, 0–6 months)** — 50% of clicks | "Just got your keys? Here's what a real fit-out costs in 2026." | Specific RM numbers for a 1,200–1,500 sqft terrace. Fast. |
| **B. Resale upgrader (just moved in to old house)** — 30% | "Old house, new life. RM350k turned this Subang terrace around." | Before/after photo. Total contract value. Timeline. |
| **C. Late-stage shopper (3+ contractor quotes already)** — 20% | "Stop comparing apples to chairs. Get an itemised quote." | Proof of itemised pricing. WhatsApp the team in 1 tap. |

**All three want the same three things on the LP:** real photos of finished work, real RM numbers attached to those photos, and a no-friction way to start a conversation.

**They do NOT want:** brand story, founder bio, blog content, newsletter, "learn about D&B," team page.

---

## 2. The single conversion goal

**Primary action:** WhatsApp chat opened (`wa.me/60193428981` Najiha primary, `wa.me/60134315051` Syafiq fallback) with a **pre-filled message** that auto-tags the source ad (UTM-aware).

**Secondary action:** Lead form submission (name, phone, package interest, property area).

**Tertiary action:** Direct phone call (mobile only, click-to-call).

**Not the goal:** newsletter, downloads, blog reads, "view portfolio."

**One CTA verb, three placements:** *"WhatsApp us"* (top, mid, sticky bottom on mobile) — secondary form CTA *"Send my details"* appears once near the bottom for buyers who don't WhatsApp.

---

## 3. Why WhatsApp-first (not "free quote form")

| Offer | Lead quality | Reply turnaround | Close rate |
|---|---|---|---|
| "Get a free quote" form | Low — price-shoppers, info-collectors | Hours-to-days (forms get ignored) | ~5–8% |
| "Book a site visit" | Medium — but commitment too big for cold ad traffic | Often ghosted | ~10–15% |
| **"WhatsApp us your floor plan"** | **High — only commits if serious** | **Minutes** | **~25–35%** |

WhatsApp is the **single highest-converting CTA in MY market** for home services because:
- The visitor already lives in WhatsApp daily (95%+ of MY adults).
- The pre-filled message reduces typing-friction to zero — they tap and send.
- The team can reply in seconds during business hours.
- Conversation history sits in the team's phone forever — easier follow-up than email.
- The CSV-style "lead form" generates 5× more rubbish for 1× more close.

The form stays on the page as a **fallback** for the segment who genuinely prefers async ("submit and they'll call me back tomorrow") — typically the older, more analytical buyer of BINA MAX (RM460k+).

---

## 4. Page architecture (top → bottom, mobile-first)

This LP is **one continuous scroll**, not multi-page. **Total length: ~7 sections / ~3,000–4,000px on desktop.** No internal navigation. No links out except the WhatsApp CTAs and the form.

**Critical isolation rules:**
- **No header nav** showing Home / About / Services / Case Studies — the LP has its own slim header (logo + phone + WhatsApp pill only).
- **No footer with sitemap links** — only legal essentials (address, SSM-pending notice, privacy link).
- The user can ONLY take the conversion action or leave. No rabbit holes.

---

### Section 1 — Hero (above the fold, mobile + desktop)

**Slim header** (single row, ~64px tall on desktop, ~56px on mobile):
- Left: BINA+ logo (small wordmark only)
- Right: phone `+60 19-342 8981` (text-only on desktop, hidden on mobile) + **green WhatsApp pill button** "Chat WhatsApp →"

**Hero content** (split layout on desktop, stacked on mobile):

**Left column (content):**

H1, large (52–60px desktop, 36px mobile), tight leading:
> **Renovate your Klang Valley home from RM100k.**
> Itemised quote in 48 hours. Built in 8–14 weeks.

Subhead (18px, muted), 2 lines max:
> Shah Alam–based design & build team. We give you a line-item quote you can audit, a photo log of every workday, and a fixed handover date written into the contract.

**Two CTAs side-by-side (pill buttons):**
1. **PRIMARY (solid dark `#4A180D`, white text):** *"WhatsApp Najiha →"* — opens `wa.me/60193428981?text={prefilled}`
2. **SECONDARY (cream pill, dark text):** *"See packages & prices ↓"* — anchor-scrolls to Section 4

**Trust micro-row (mono, small, 4 items in one line):**
- ⏱ Response **< 30 min, Mon–Sat 9am–5:30pm**
- 📍 Shah Alam HQ · serves all Klang Valley
- 💰 Min project: **RM100k** · max: **RM460k+**
- 🤝 SSM-pending sub-brand of **Boxup**

**Right column (hero image card, full-bleed, rounded ~28px):**
- One **real BINA+ project photo** (no Unsplash for this LP — the existing main site already uses Unsplash and that's a credibility risk on a paid LP).
- Floating chip top-right: small white pill with WhatsApp icon + `+60 19-342 8981`.

> **If no real BINA+ photo is available**, use a single Unsplash modern-MY-interior photo (search: `modern terrace house interior malaysia`, `subang minimalist living room`) but caption it explicitly: "Reference image — your project will be photographed by us." Hiding stock photos as portfolio is the fastest way to lose a paid lead.

---

### Section 2 — "Is this you?" qualifier (3 audience cards)

Three cards in a row (stack on mobile). Each card matches one of the three personas in §1 and ends with the same WhatsApp CTA. Job: visitor instantly says "that's me."

**Card A — Just got your keys**
> First home, post-VP, 0–6 months in. You need grilles, kitchen, wardrobes, electrical points. The first quote you got felt high but you can't tell which lines are inflated.
> **Typical scope:** RM100k–200k · BINA Renovation Package
> → *WhatsApp Najiha*

**Card B — Old house, new life**
> Bought a 15+ year-old terrace. The wiring is original, the kitchen is from 2008, three contractors quoted you RM150k, RM250k, RM340k for the same scope.
> **Typical scope:** RM200k–350k · BINA PLUS or MAX
> → *WhatsApp Najiha*

**Card C — Building from scratch**
> New land, custom design. You want a single-storey or double-storey home built from drawings to handover, end-to-end, one accountable team.
> **Typical scope:** RM200k–460k+ · BINA START / PLUS / MAX
> → *WhatsApp Syafiq*

---

### Section 3 — The 4 promises (the actual differentiators)

A 4-card row (2×2 on mobile). Each card removes ONE specific objection that kills MY reno deals.

| Card | Headline | Body (1–2 lines) |
|---|---|---|
| 1 | **Line-item quotes only** | Every quote we issue lists every item, qty, unit price. No "lump sum RM150k." If you can't audit it, we won't send it. |
| 2 | **Daily photo log** | Site supervisor uploads a dated photo of progress every workday. You see the build from your phone, even at the office. |
| 3 | **Fixed handover date in contract** | The handover date is a contract clause, not a verbal promise. Liquidated damages apply if we miss it without a written variation order. |
| 4 | **Free gifts on every D&B package** | 3D design, electrical wiring install, table top, downlights, sink, smart lock, fan fittings, safety door, site visit. Documented, not "we'll see." |

Each card uses a small icon tile (light icon on dark `#111` square, matches the existing site's component vocabulary).

---

### Section 4 — Packages & prices (the core conversion section)

Three large cards in a row (stack on mobile). **This section is where intent converts to action** — never hide pricing on a paid LP. The visitor clicked an ad; if they have to ask for prices they'll bounce.

**Card 1 — BINA START — From RM200k**
> **~1,200 sqft · Single-storey home**
> Architectural planning · structural & construction works · basic finishes · project management
> *Best for:* first-time builders, terrace land, single-storey
> → *WhatsApp for floor plan*

**Card 2 — BINA PLUS — From RM350k** **★ MOST CHOSEN**
> **~1,500 sqft · Semi-double-storey**
> Design development · extended layout · material detailing · full execution
> *Best for:* growing families, semi-double layouts
> → *WhatsApp for floor plan*

**Card 3 — BINA MAX — From RM460k**
> **~2,000 sqft · Double-storey home**
> Full architectural design · complete construction · refined finishing · end-to-end management
> *Best for:* full transformations, double-storey, premium finish
> → *WhatsApp for floor plan*

**Below the cards — secondary "Renovation only" row** (smaller, muted):
> **Just renovating, not building?** Renovation Package from **RM100k** (1–2 areas, basic finishes & carpentry) up to **RM300k** (full home transformation, premium finishes). → *WhatsApp Najiha*

**Below that — Interior Design only row** (smallest, muted):
> **Design only, no build?** Interior Design Package from **RM19,999** (consultation, layout, moodboard) up to **RM59,999** (full design + site coordination). → *WhatsApp Najiha*

---

### Section 5 — Real project gallery (NOT a 30-image carousel)

A clean 4-card grid (2×2 on mobile, 4-in-a-row on desktop). Each card is a real BINA+ project. Photo + minimal caption.

**Per card:**
- Real photo, rounded ~20px
- Inset dark pill caption (bottom-left of the photo): line 1 = location + property type (e.g. "Subang · 2-storey terrace"), line 2 = "RM 287k · 11 weeks · completed Mar 2026"

Below the grid: single line CTA, muted: *"More projects on Instagram → @bina.byboxup"* (this is the ONLY external link on the page, and it's not necessary if it cannibalises the WhatsApp CTA — A/B test).

---

### Section 6 — How it works (4 steps, simple numbered list, no marketing fluff)

| # | Step | What actually happens |
|---|---|---|
| 01 | **WhatsApp + send floor plan** | You message Najiha. Send floor plan photo or sketch. Reply within 30 min during business hours. |
| 02 | **Free site visit (Klang Valley)** | We visit, measure, listen. ~60–90 min on site. No charge. No obligation. |
| 03 | **Itemised quote within 48 hours** | Line-by-line spreadsheet, every item priced, audit-ready. |
| 04 | **Sign + start build** | 10% deposit on signing. 30% at demolition complete. 40% at carpentry install. 20% on handover. |

Italic kicker line below the table:
> *No lock-in to proceed after the site visit. About 1 in 3 site visits don't end in a contract — that's healthy. We'd rather lose the quote than the relationship.*

---

### Section 7 — FAQ (5 questions max — discipline matters)

Accordion, default closed. The 5 questions every BINA+ paid lead actually asks:

1. **How long does a typical reno take?** — Renovation: 6–12 weeks. Single-storey D&B: 14–20 weeks. Double-storey: 20–28 weeks. Written into your contract.
2. **Do you handle JMB / strata renovation forms?** — Yes for all strata. We submit the form, follow up, get the approval letter before demolition starts.
3. **What if costs blow out mid-build?** — All variations are itemised same as the original quote. Anything above 10% of contract value triggers a written re-baseline. No verbal "tambah sikit."
4. **Can I supply my own materials?** — Yes for finishes (tiles, taps, lights, paint, wallpaper). No for structural items (cement, steel, electrical wiring) — we carry the warranty and need quality control.
5. **What's your warranty?** — 12 months on workmanship from handover date. Manufacturer warranty pass-through on all installed products (pumps, smart locks, fittings).

---

### Section 8 — Final CTA band (full-width, dark `#1A1A1A` background)

Single line, large (~36–44px):
> **Get your itemised quote this week.**

Subline (muted white, ~16px):
> WhatsApp Najiha now. Floor plan optional. Reply within 30 min.

**Single oversized green WhatsApp pill button** (60–72px tall): *"Chat WhatsApp now →"*

Below the button, mono, smaller:
> Mon–Fri 9am–5:30pm · Sat 9am–1pm · Closed Sun · We answer one polite reschedule message and that's it. We don't chase.

---

### Section 9 — Slim footer (legal essentials only — NO sitemap)

3 stacked rows, centered, very muted:

1. **BINA+ Design & Build** — 24-1, Jalan Matahari Aa U5/Aa, Pinggiran Subang, 40150 Shah Alam, Selangor
2. **Contact:** Najiha +60 19-342 8981 · Syafiq +60 13-431 5051 · bina.designbuild@gmail.com
3. SSM registration pending · Sub-brand of Boxup · *Privacy notice* (one inline link to a `/privacy.html` micro-page — required for Meta ads policy compliance)

**No nav links to Home / About / Services / Case Studies on this page.** Anyone who wants those types in `bina.designbuild` directly. This LP exists to convert, not to navigate.

---

## 5. The pre-filled WhatsApp message (UTM-aware, lifts conversion 20–40%)

Every WhatsApp CTA on the page builds the URL dynamically with JS:

```
https://wa.me/60193428981?text={encoded message}
```

Where `{message}` is built from URL parameters captured on landing:

```
Hi BINA+, I saw your ad and I'm interested in [PACKAGE].
My property: [TYPE/LOCATION].
Source: [utm_source]/[utm_campaign]/[utm_content]
```

The visitor sees the message pre-typed when WhatsApp opens — they edit only the bracketed bits and tap send. **This single detail is the difference between an 8% and a 14% lead rate.**

`[PACKAGE]` defaults to "renovation" but switches if the click came from inside the packages section (data attribute on each package card → `data-package="BINA START"` etc.).

---

## 6. The fallback lead form (placed BETWEEN sections 6 and 7)

For the analytical buyer who wants async contact. **Only 5 fields.** Every extra field reduces submission rate ~10%.

1. Name (required)
2. Phone / WhatsApp number (required)
3. Property area / postcode (required, dropdown of Klang Valley areas + "Other")
4. Package interest (required, dropdown: Renovation RM100k+ / BINA START / BINA PLUS / BINA MAX / Interior Design only / Not sure yet)
5. Tell us briefly (optional, single textarea, "what are you trying to do?")

Submit button: solid dark pill *"Send my details — I'll hear back within 30 min"*

**Form posts to:** a Formspree or Web3Forms endpoint (no backend needed — keeps the LP fully static), with email forwarding to `bina.designbuild@gmail.com` AND a Telegram-bot webhook to alert the team in real-time. (Telegram alert can be added later via n8n; the email is the critical path for v1.)

**Below the form, the same trust micro-row:** response < 30 min, Mon–Sat hours.

**Honeypot field** (hidden, named `website`) — filters bot submissions.

---

## 7. Tracking & analytics (consent-respecting)

- **Plausible** (already in scope for the SEO hubs — reuse it):
  - `lp_view`
  - `cta_whatsapp_click` (fires per location: hero / cards / packages / final)
  - `cta_phone_click`
  - `form_started` (first-input focus)
  - `form_submitted`
- **Meta Pixel + Conversions API** — REQUIRED for Meta ads optimization (no choice — without it, Meta can't optimise toward WhatsApp clicks). Fire `Lead` event on both WhatsApp click and form submit.
- **Google Tag (gtag.js)** — fire `conversion` event on WhatsApp click and form submit if running Google ads.
- **No GA4** unless explicitly needed — Plausible covers analytics, Meta Pixel + Google Tag cover ads.

UTM passthrough: capture `utm_source`, `utm_campaign`, `utm_content`, `utm_term`, `gclid`, `fbclid` on landing → store in `sessionStorage` → inject into the WhatsApp pre-filled message AND into a hidden form field. Without this, you can't tell which ad creative drove the lead.

---

## 8. Performance, mobile & accessibility (non-negotiable for paid traffic)

**Performance budget** (paid traffic is unforgiving — 1s LCP delay = ~7% conversion drop):
- LCP < 1.8s on 4G mobile
- Hero image WebP, ≤ 80 KB, served from local `/assets/img/lp/` (NOT Unsplash CDN — too slow, too risky)
- Total page weight ≤ 600 KB excluding fonts
- Zero render-blocking JS (form & WhatsApp URL builder load deferred)
- Reuse `Plus_Jakarta_Sans` already preloaded on the site — **no new font requests**

**Mobile (60–75% of paid clicks):**
- **Sticky bottom bar after first scroll**: full-width green WhatsApp pill — visible on every screen below the fold
- All tap targets ≥ 48×48px
- Hero stacks vertically; image first or text first depending on A/B test
- Package cards become a horizontal-scroll snap row (saves vertical space)
- Form fields stack full-width

**Accessibility (WCAG AA):**
- Real `<form>`, `<button>`, `<a>` semantics — no div-soup
- Visible labels above every form field, NOT placeholder-only
- Contrast: dark text on cream meets AA at all sizes
- Skip-to-form link at the top
- WhatsApp pill links have explicit `aria-label="Chat with Najiha on WhatsApp"`

---

## 9. What's deliberately NOT on this page

| Removed | Why |
|---|---|
| Site-wide nav links (Home/About/Services/Case Studies) | LP isolation — eliminate every exit that isn't the conversion action |
| Newsletter signup | Distracts from primary CTA; cold ad traffic doesn't subscribe to renovation newsletters |
| Live chat widget | "Just kicking tyres" leads pollute pipeline; WhatsApp is already the chat |
| 30-image portfolio carousel | Decision fatigue; 4 hero projects is enough |
| Founder bio / team page | Belongs on main site, not LP |
| Blog post links | Belongs on main site; LP is for action |
| Social follow buttons | Wrong action — converts a buyer into a follower (worth ~RM0) |
| Pop-up exit-intent | Cheapens the brand. Renovation is a RM100k–460k decision, not a ShopeePay flash sale |
| Countdown timers / "Only 3 slots left" | Same — cheapens the brand and breaks Meta ads policy |
| Video hero | Kills LCP, distracts, and most users mute it |
| Carousel hero | Banner-blindness; first frame gets 3× the attention of frames 2–5 |
| Testimonial wall (>3) | Diminishing returns past 3; visitor scrolls past |

**Discipline rule:** if a section doesn't directly remove an objection or restate the CTA, it does not go on this page.

---

## 10. Visual design (matches the existing site's vocabulary)

This LP uses the existing tokens from `assets/css/style.css` and the components inventory in `design.md`. Specifically:

- **Background:** soft warm off-white (`#F5F1EC` range) — same as main site
- **Surfaces:** cream cards + selective near-black `#111` / `#1A1A1A` cards for emphasis (4-promises section + final CTA band)
- **Brand accent:** secondary `#4A180D` (deep reddish-brown) — used for primary pill buttons, logo, accents
- **WhatsApp green:** `#25D366` for the WhatsApp-specific pills (this is the one place we deviate from brand color — WhatsApp green is universally recognised and converts ~30% better than a brand-colored "WhatsApp" button)
- **Typography:** `Plus_Jakarta_Sans` (already preloaded). Headlines tight tracking, medium weight. Body small, muted gray.
- **Border radius:** 24–32px on big surfaces, 16px on inner cards, fully rounded pills (9999px) on every button
- **Spacing:** airy, 96–128px between sections
- **No hard shadows** — subtle elevation only
- **Component reuse:** pill buttons, icon tiles, dark feature cards, project cards with bottom-inset captions — all from the existing inventory

**One single design difference from the main site:** the LP has its own slim header (logo + WhatsApp pill only) and slim footer (legal text only). This is the LP's "isolation chrome."

---

## 11. A/B tests to run AFTER launch (priority order — do NOT pre-build all variants)

Ship V1, run paid traffic for 2–3 weeks at ≥1,000 sessions, then test:

1. **Hero headline** — *"Renovate your Klang Valley home from RM100k"* vs *"Bought a house? Get an itemised quote in 48 hours"* vs *"Stop comparing apples to chairs — get a real renovation quote"*
2. **Hero image** — real BINA+ photo vs Unsplash MY-interior vs no image (text-only)
3. **CTA copy** — *"Chat WhatsApp"* vs *"Send floor plan to WhatsApp"* vs *"Get my itemised quote"*
4. **Packages section position** — directly under hero (current spec) vs after the 4-promises section vs after the gallery
5. **Form length** — 5 fields (current) vs 3 fields (name + phone + package only)
6. **Sticky mobile bar** — green WhatsApp pill (current) vs split bar (WhatsApp + Phone)

Stop testing once a variant wins by ≥15% over 2 full weeks at >1,000 sessions per variant.

---

## 12. Lead handling SLA (the close happens AFTER the click)

The LP cannot close on its own. Three rules for what happens after the lead lands in WhatsApp:

1. **WhatsApp lead → first reply within 30 minutes during business hours.** The LP advertises "< 30 min" — under-promise, over-deliver to **< 15 min** internally.
2. **Form submission → Najiha or Syafiq calls within 60 minutes.** No "we'll get back to you in 1–2 working days" emails. Speed is the entire game.
3. **No-show on a booked site visit → ONE polite reschedule message at +24 hours. Never a second.** The LP advertises this. Honour it.

Failing any of these three undoes everything the page did.

**Internal team setup:**
- Najiha + Syafiq both on WhatsApp Business (same account or shared inbox)
- Telegram bot alert on every form submit (ensures nothing is missed when WhatsApp queue is busy)
- Spreadsheet log: date · ad source · WhatsApp/form · package interest · property area · status · contract value (if signed)

---

## 13. Success metrics (what to actually measure on this LP)

| Metric | Floor (V1, weeks 1–4) | Target (V3, optimised) |
|---|---|---|
| Page → WhatsApp click rate | ≥ 9% | ≥ 16% |
| Page → form submission rate | ≥ 1.5% | ≥ 3% |
| WhatsApp click → real conversation | ≥ 60% | ≥ 80% |
| Form lead → connected on phone | ≥ 70% | ≥ 88% |
| Lead → site visit booked | ≥ 35% | ≥ 55% |
| Site visit → signed contract | ≥ 30% | ≥ 50% |
| **Cost per lead (Meta ads)** | **≤ RM 35** | **≤ RM 15** |
| **Cost per signed contract** | **≤ RM 800** | **≤ RM 250** |

End-to-end (page view → signed contract): floor 0.6%, target 2.2%.
At 5,000 monthly LP views (typical for RM4–6k/mo Meta spend in MY): 30–110 contracts/year. At average RM250k contract value, that's RM 7.5M–27M/year topline. Pick your team-size constraint accordingly.

---

## 14. What's needed before build can start

- [ ] **3–6 real BINA+ project photos** (high-res, exterior + interior, ideally one per package). This is the single most important asset.
- [ ] **3 real client outcomes** with: location/area, property type, contract value (RM), timeline (weeks), month/year completed.
- [ ] **Confirmation of the WhatsApp Business number** — should it be Najiha's `+60 19-342 8981` (current spec) or a new dedicated business line?
- [ ] **Confirmation of pricing in §4** — the package floors come from `business-info.md`; confirm they're still current for 2026.
- [ ] **Lead capture endpoint:** Formspree / Web3Forms / Getform / custom — pick one. (Recommend Formspree free tier for v1.)
- [ ] **Privacy notice page** — `/privacy.html` micro-page required for Meta ads policy. ~200 words is enough.
- [ ] **Meta Pixel ID** + **Google Tag ID** (if running Google ads).
- [ ] **Plausible site already provisioned for `bina.designbuild`** — confirm.

Once those land, build is **1 working day** for the static HTML + CSS + JS + Formspree wiring. Then 2 weeks of paid traffic before any A/B test runs.

---

## 15. Appendix — file plan

```
/lp-renovation.html              ← the LP itself (or /start.html, your call)
/privacy.html                    ← short privacy notice (Meta ads requirement)
/assets/css/style.css            ← existing, extended with LP-scoped section
/assets/js/lp.js                 ← UTM capture + WhatsApp URL builder + form handler (~80 lines)
/assets/img/lp/                  ← real BINA+ photos for hero + gallery
   ├ hero-bina-plus-subang.webp
   ├ project-01-setia-alam.webp
   ├ project-02-bandar-kinrara.webp
   ├ project-03-kota-damansara.webp
   └ project-04-shah-alam.webp
```

The LP is **excluded from `sitemap.xml`** (we don't want it ranking organically — it's a paid funnel, not an SEO page) and **disallowed in `robots.txt`** to prevent organic snippets.

Add to `robots.txt`:
```
Disallow: /lp-renovation.html
Disallow: /lp-*
```

(Meta and Google ads ignore robots.txt for ad-destination URLs — this only blocks organic crawl.)
