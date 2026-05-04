# Motion System & Design DNA (Extracted)

**Source:** [thetandemco.com](https://www.thetandemco.com/)  
**Extraction Date:** Feb 10, 2026  
**Status:** High-Fidelity Trace

---

## 1. Core Technology Stack
*   **Animation Engine:** GSAP (GreenSock) v3.14.2
*   **Triggers:** GSAP ScrollTrigger
*   **Scrolling:** Native / Custom (Simulated with Lenis for smoothness in reference)
*   **Fonts:** `Sohne` (Primary), `Arial` (Fallback). *Mapped to `Inter` for reference.*

---

## 2. Color Palette
The site does not use standard white/black. It uses "warm" variations.

| Usage | Hex / RGB | Description |
| :--- | :--- | :--- |
| **Background** | `#f7f7f0` / `rgb(247, 247, 240)` | Warm off-white / Paper |
| **Primary Text** | `#1a1a1a` | Soft Black |
| **Secondary Text** | `rgb(85, 85, 81)` | Warm Dark Charcoal |
| **Accents** | `#888` | Standard Grey |

---

## 3. Typography Physics
Metrics extracted via deep scan.

*   **H1 (Hero):**
    *   Weight: `200` (Thin/Light) - *Distinctive feature*
    *   Line Height: `1.1`
    *   Letter Spacing: `normal`
*   **H2 (Section Headers):**
    *   Size: `53.2px` (Exact rendered size)
    *   Weight: `500` (Medium)
*   **Body Copy:**
    *   Size: `15.2px` (~0.95rem)
    *   Line Height: `1.4`

---

## 4. Animation Physics (The "Beat")
The site's specific timing signature used to create its "premium" feel.

### Timings
*   **Major Reveals (Hero/Sections):** `1.46s`
*   **Micro-Interactions (Snap-backs):** `0.88s`
*   **Stagger Delay:** `0.18s` between elements.

### Easing Curves
*   **Entrances:** `power4.out` (Fast start, very slow lux decel).
*   **Snap-Backs:** `expo.out` (Sharp, mechanical snap).
*   **Scrolling:** `none` (Linear scrub linked to scrollbar).

---

## 5. Interaction Patterns (Code Reference)

### A. The "Line Mask" Reveal
*Concept:* Text lives inside a container with `overflow: hidden`. It translates up from `110%` to `0%`.
```css
.line-mask { overflow: hidden; }
h1 { transform: translateY(110%); }
```
```javascript
gsap.to("h1", { 
    y: 0, 
    duration: 1.46, 
    ease: "power4.out", 
    stagger: 0.18 
});
```

### B. Sticky History Timeline
*Concept:* Left column is `sticky`, right column triggers updates on center-screen hit.
```javascript
ScrollTrigger.create({
    trigger: ".timeline-item",
    start: "top center",
    end: "bottom center",
    onEnter: () => setActiveDate()
});
```

### C. Magnetic Buttons
*Concept:* Mouse position is interpolated with a "heavy" ease for the magnet pull, and a "snap" ease for release.
```javascript
// The Pull
gsap.to(el, { x: x * 0.4, y: y * 0.4, duration: 0.3, ease: "power2.out" });

// The Snap Back
gsap.to(el, { x: 0, y: 0, duration: 0.88, ease: "power4.out" });
```
