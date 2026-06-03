export type Locale = "en" | "ms";

export const dict = {
  en: {
    skipToContent: "Skip to content",
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      caseStudies: "Case Studies",
      blog: "Blog",
      contact: "Contact",
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
      follow: "Follow us",
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
      about: "Tentang Kami",
      services: "Perkhidmatan",
      caseStudies: "Portfolio",
      blog: "Blog",
      contact: "Hubungi",
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
      follow: "Ikuti kami",
      hours: "Isnin–Jumaat 9:00–17:30 · Sabtu 9:00–13:00",
      copyright: "BINA+ Reka & Bina · bina.byboxup. Hak cipta terpelihara.",
      privacy: "Privasi",
      terms: "Terma",
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
    blog: "/blog",
    contact: "/contact",
    privacy: "/privacy",
    lp: "/lp-renovation",
  },
  ms: {
    home: "/ms",
    about: "/ms/about",
    services: "/ms/services",
    caseStudies: "/ms/case-studies",
    blog: "/ms/blog",
    contact: "/ms/contact",
    privacy: "/ms/privacy",
    lp: "/ms/lp-renovation",
  },
} as const;

export const altRoute = {
  en: routes.ms,
  ms: routes.en,
} as const;
