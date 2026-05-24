export type Locale = "en" | "ms";

export const dict = {
  en: {
    skipToContent: "Skip to content",
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      caseStudies: "Case Studies",
      getQuote: "Get a quote",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      primary: "Primary",
    },
    footer: {
      brandText:
        "Design & build studio crafting modern Malaysian homes — from compact single-storey to full custom builds. A venture of Boxup.",
      pages: "Pages",
      contact: "Contact",
      studio: "Studio",
      hours: "Mon–Fri 9:00–17:30 · Sat 9:00–13:00",
      copyright: "BINA+ Design & Build · bina.byboxup. All rights reserved.",
      privacy: "Privacy",
      terms: "Terms",
      contactPrincipal: "Najiha · +60 19-342 8981",
      contactSecondary: "Syafiq · +60 13-431 5051",
    },
    drawerFoot: {
      principal: "+60 19-342 8981 (Najiha)",
      secondary: "+60 13-431 5051 (Syafiq)",
    },
    lang: {
      en: "English",
      ms: "Bahasa Malaysia",
      enShort: "EN",
      msShort: "BM",
      ariaLabel: "Language",
    },
  },
  ms: {
    skipToContent: "Langkau ke kandungan",
    nav: {
      home: "Utama",
      about: "Tentang",
      services: "Perkhidmatan",
      caseStudies: "Portfolio",
      getQuote: "Dapatkan sebut harga",
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
      primary: "Utama",
    },
    footer: {
      brandText:
        "Studio reka & bina yang membina rumah Malaysia moden — dari setingkat padat hingga binaan tersuai penuh. Sebuah usaha sama Boxup.",
      pages: "Halaman",
      contact: "Hubungi",
      studio: "Studio",
      hours: "Isnin–Jumaat 9:00–17:30 · Sabtu 9:00–13:00",
      copyright: "BINA+ Reka & Bina · bina.byboxup. Hak cipta terpelihara.",
      privacy: "Privasi",
      terms: "Terma",
      contactPrincipal: "Syafiq · +60 19-342 8981",
      contactSecondary: "Syafiq · +60 13-431 5051",
    },
    drawerFoot: {
      principal: "+60 19-342 8981 (Syafiq)",
      secondary: "+60 13-431 5051 (Syafiq)",
    },
    lang: {
      en: "English",
      ms: "Bahasa Malaysia",
      enShort: "EN",
      msShort: "BM",
      ariaLabel: "Bahasa",
    },
  },
} as const;

export type Dict = (typeof dict)["en"];

export const routes = {
  en: {
    home: "/",
    about: "/about",
    services: "/services",
    caseStudies: "/case-studies",
    privacy: "/privacy",
    lp: "/lp-renovation",
  },
  ms: {
    home: "/ms",
    about: "/ms/about",
    services: "/ms/services",
    caseStudies: "/ms/case-studies",
    privacy: "/ms/privacy",
    lp: "/ms/lp-renovation",
  },
} as const;

export const altRoute = {
  en: routes.ms,
  ms: routes.en,
} as const;
