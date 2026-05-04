# Design Reference — Frame House Landing Page

> Source: Russian-language reference site for a turnkey frame-house builder.
> All copy below is the English equivalent of the reference; final site copy is BINA+ specific.
> **All imagery must use Unsplash** (modern wooden / cabin / forest house photography).

---

## Logo

- **File:** `BINA Logo.jpeg`
- **Wordmark:** `BINA +` (bold, large) + `design & build` (regular weight, smaller, below)
- **Icon mark (left of wordmark):** Stylised lowercase **`b+`** constructed from stacked rectangular blocks — resembles a building floor-plan / isometric cube fragment. Composed of two overlapping squares/rectangles forming the letterform, with a small **`+` cross** in the top-right corner of the icon.
- **Color:** Single color — deep reddish-brown (`#4A180D` secondary brand color). Two-tone depth effect: the icon uses a slightly darker shade for the shadow/bottom face of the cube (suggesting a 3D bevel), and the lighter reddish-brown for the front face.
- **Background:** Transparent / white.
- **Usage:** Use the full lockup (icon + wordmark) in the navbar and footers. Icon mark alone may be used as a favicon or avatar crop.

---

## Colours

| Role | Hex |
|---|---|
| **Main** | `#EAEAEA` |
| **Secondary** | `#4A180D` |

> Main `#EAEAEA` — light warm gray; used for backgrounds, surface fills, neutral areas.
> Secondary `#4A180D` — deep dark reddish-brown; used for primary buttons, accents, dark cards, brand highlights, and all logo elements.

---

## Global

- **Background:** soft warm off-white / cream (`#F5F1EC` range), not pure white.
- **Card surfaces:** two flavors — light cream rounded cards and **near-black** rounded cards (`#111` / `#1A1A1A`) used for emphasis.
- **Border radius:** generous, ~`24–32px` on big surfaces, ~`16px` on inner cards, **fully rounded pills** (`9999px`) for all buttons and small chips.
- **Type:** clean modern sans-serif. Headlines large, medium-weight, tight tracking. Body small, muted gray.
- **Spacing:** very airy — large vertical gaps (`96–128px`) between sections.
- **No hard shadows.** Subtle elevation only.
- **Iconography:** thin-line monochrome icons, contained inside small rounded squares/circles.

---

## 1. Top Navigation Bar

- Full width, sits on the cream background (no separate bar color).
- **Left:** small wordmark logo (dark).
- **Center-left:** 3–4 nav links, small dark text, regular weight, generous spacing between items.
- **Right cluster:**
  - Phone number `+7 (000) 000-00-00` in dark text.
  - Pill button **"Leave a request"** — outlined / ghost style, dark border, dark text.
- Padding: comfortable, ~`24px` vertical.

---

## 2. Hero Section (split layout)

Two-column. Left column = content card on cream background. Right column = **full-bleed photo card**.

### 2a. Left column (content)
- Sits directly on the page background (no card chrome).
- **H1 (large, ~56–64px, tight leading):**
  > "Ready turnkey frame house from 100 m² in 2 months"
  - Multi-line; line break before "in 2 months".
- **Sub-paragraph** (small, muted gray, max ~2 lines): short value prop about thoughtful, eco-friendly, thermally efficient frame construction.
- **CTA row** (two pill buttons, side-by-side):
  1. **Primary** — solid dark pill, white text: "Leave a request" with a tiny circular icon badge on its left edge.
  2. **Secondary** — light/cream pill, dark text: same icon-badge treatment on its left edge.
- **Stats row** (3 items, horizontal, separated by generous whitespace, no dividers):
  - `65+`  — tiny label below ("years of experience" or similar)
  - `7+`   — tiny label ("our partners")
  - `180+` — tiny label ("houses built since 2018")
  - Numbers are large, dark, semibold. Each stat has a **tiny circular icon chip** above it.

### 2b. Right column (hero image card) — **FULL-BLEED placeholder**
- **Rounded rectangle photo**, large radius (`~28px`), filling the right half edge-to-edge of the hero block.
- **Subject:** modern dark-wood / black-clad cabin with floor-to-ceiling windows in a pine forest. (Unsplash search: `modern cabin forest`, `black wood house pine`, `scandinavian cabin`.)
- **Floating element on top of the image (top-right corner):** a **tiny pill/cylinder chip** containing a small icon + the phone number `+7 (000) 000-00-00`. Light translucent or solid white pill, sits ~`16–20px` from the image's top and right edges. *(This is the "tiny cylinder inside the full-bleed section" detail.)*

---

## 3. "We Build Houses Using Frame Technology"

Two-column section on cream background.

### Left column
- **H2** (large, dark): "We build houses / using frame technology"
- Short paragraph (muted): cabins/baths built with frame technology serve homeowners for many decades.
- **Decorative illustration / 3D render** of a timber roof-truss / frame skeleton (warm wood color, transparent background). Sits below the heading, taking the full left column width. *(For implementation: use a transparent PNG render of a wooden truss structure — Unsplash or 3D asset.)*

### Right column — 3 stacked feature cards
- Each card: **dark (`#111`) rounded rectangle**, ~`16px` radius, ~`20–24px` padding.
- Layout per card: small **rounded-square icon tile** on the left (light/white outline icon on dark), text block on the right with white title + muted gray one-line description.
- Cards (top → bottom):
  1. **High strength** — withstands loads and deformation
  2. **Thermal insulation** — quickly heats up and retains warmth
  3. **No shrinkage** — interior finishing can begin immediately

---

## 4. "Catalog of Our 2024 Projects"

- **Section header row:**
  - Left: H2 "Catalog of our objects / for 2024"
  - Right (small, muted, right-aligned): tagline like "Frame technology — house construction in Russia / why it's popular"
- **Card grid:** 4 equal cards in a single row (carousel on smaller screens).
- **Each project card:**
  - **Curved photo placeholder** — rounded rectangle (~`20px` radius), photo of a modern frame/cabin home (Unsplash: `modern wooden house`, `a-frame cabin`, `scandinavian home exterior`).
  - **Overlay label at the bottom of the image** (does NOT extend past the image): a **dark rounded pill/tag** with two lines of text:
    - Line 1: "Frame house, 73 m²" (small, white)
    - Line 2: "price from 5,800,000" (small, lighter/muted)
  - The pill is inset from the bottom-left of the image with `~12px` margin, rounded `~12–16px`.
- **Footer row under the grid:**
  - Left: solid dark pill button "Select" / "View all".
  - Right: two circular pagination arrows (`◀` / `▶`), dark filled, white icons.

Sample data for placeholders:
| # | Title | Area | Price from |
|---|---|---|---|
| 1 | Frame house | 73 m² | 5,800,000 |
| 2 | Frame house | 94 m² | 7,200,000 |
| 3 | Frame house | 65 m² | 6,000,000 |
| 4 | Frame house | 60 m² | 5,200,000 |

---

## 5. "We Offer Payment Methods"

- Centered H2: "We offer payment methods".
- **4-card row**, equal width, all rounded `~20px`, generous internal padding (~`28px`).
- **Color rhythm:** card 1 = light cream; cards 2–4 = dark `#111` with white text. (Visual rhythm: 1 light + 3 dark.)
- **Each card** (top → bottom inside):
  - Small **rounded-square icon tile** in the top-left.
  - Title (medium weight).
  - 2–3 lines of muted descriptive text.
- Cards:
  1. **House on credit** — mortgage partnership info (light card).
  2. **Maternity capital** — government family-fund payment accepted (dark).
  3. **Subsidies** — regional / state subsidy programs (dark).
  4. **Cashless payment** — bank transfer for legal entities (dark).

---

## 6. "Three Steps to a New Home"

- Centered H2: "Three steps to a new home".
- **3-column row** of step cards on the cream background (no card chrome — open layout, separated by vertical hairline dividers or just whitespace).
- **Each step:**
  - Small **icon tile** (rounded square, light) at top-left.
  - Step number `01` / `02` / `03` in small muted gray, aligned with the icon.
  - Title (dark, medium): 
    1. "Consultation & design"
    2. "Construction"
    3. "Completion & finishing"
  - Short description paragraph (muted gray, 2–3 lines).

---

## Reusable Component Inventory

| Component | Notes |
|---|---|
| **Pill button (primary)** | Solid `#111`, white text, fully rounded, optional left icon-chip. |
| **Pill button (secondary)** | Cream/white fill, dark text, fully rounded. |
| **Pill button (ghost)** | Transparent with dark border (used in nav). |
| **Icon tile** | Rounded square ~`40–48px`, thin-line icon centered. Light variant on dark cards, dark variant on light cards. |
| **Stat block** | Tiny circular icon chip → large number → tiny muted label. |
| **Dark feature card** | `#111` bg, `~16px` radius, icon-tile + title + 1-line desc. |
| **Project card** | Rounded image + bottom-inset dark pill caption (title + price). |
| **Floating image chip** | Small white pill with icon + phone, absolutely positioned over hero photo. |
| **Pagination arrows** | Solid dark circles, white chevrons. |

---

## Image Sourcing (Unsplash)

Use Unsplash search terms — **do not use stock illustration sites**:
- Hero: `modern cabin forest`, `black wood house pine trees`, `scandinavian cabin exterior`
- Project grid: `modern wooden house`, `a-frame house`, `prefab home exterior`, `minimal wood house`
- Construction render (section 3): transparent-PNG timber truss / frame illustration (or an Unsplash photo of timber framing if a render isn't available).

---

## Layout Summary (top → bottom)

1. Sticky / static top nav (logo · links · phone · ghost CTA pill)
2. Hero — split: text + stats (left) | full-bleed forest cabin photo with floating phone chip (right)
3. Frame-tech intro — heading + truss render (left) | 3 dark feature cards stacked (right)
4. 2024 project catalog — 4-card grid with bottom-inset pill captions, "Select" + arrow pagination
5. Payment methods — 4 cards (1 light, 3 dark)
6. Three steps — 3-column open process layout
