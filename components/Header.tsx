"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { dict, routes, type Locale } from "@/lib/dict";
import LangSwitcher from "./LangSwitcher";

type Props = {
  locale: Locale;
  /** Path of the equivalent page in the OTHER locale (for the language switcher). */
  altHref: string;
  /** Path of the current page (for the active-language link). */
  selfHref: string;
  /** Which nav item should be marked aria-current="page". */
  current?: "home" | "about" | "services" | "caseStudies" | "blog" | "contact";
};

// Quote-intent WhatsApp pre-fill (locale-aware).
const WA_PHONE = "60193428981";
const QUOTE_TEXT = {
  en: "Hi BINA+! I'd like a quote — I have a project in mind and want to discuss scope and pricing.",
  ms: "Hai BINA+! Saya nak quote — ada projek dalam fikiran dan nak bincang skop dan harga.",
} as const;

export default function Header({ locale, altHref, selfHref, current }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const d = dict[locale];
  const r = routes[locale];
  const home = r.home;
  const quoteHref = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(QUOTE_TEXT[locale])}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const navItem = (
    key: "home" | "about" | "services" | "caseStudies" | "blog" | "contact",
    href: string,
    label: string
  ) => (
    <li key={key}>
      <Link href={href} aria-current={current === key ? "page" : undefined}>
        {label}
      </Link>
    </li>
  );

  return (
    <>
      <header className={`header${scrolled ? " is-scrolled" : ""}`}>
        <div className="container nav">
          <Link className="nav__brand" href={home} aria-label="BINA+ home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/BINA LOGO 1.png" alt="BINA+ Design & Build" />
          </Link>
          <nav aria-label={d.nav.primary}>
            <ul className="nav__links">
              {navItem("home", r.home, d.nav.home)}
              {navItem("about", r.about, d.nav.about)}
              {navItem("services", r.services, d.nav.services)}
              {navItem("caseStudies", r.caseStudies, d.nav.caseStudies)}
              {navItem("blog", r.blog, d.nav.blog)}
              {navItem("contact", r.contact, d.nav.contact)}
            </ul>
          </nav>
          <div className="nav__right">
            <LangSwitcher locale={locale} altHref={altHref} selfHref={selfHref} variant="short" />
            <a
              href={quoteHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary nav__quote"
            >
              {d.nav.getQuote}
            </a>
            <button
              type="button"
              className="nav__toggle"
              aria-label={d.nav.openMenu}
              aria-controls="drawer"
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen(true)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <aside className={`drawer${drawerOpen ? " is-open" : ""}`} id="drawer">
        <div className="drawer__top">
          <Link className="nav__brand" href={home} onClick={() => setDrawerOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/BINA LOGO 1.png" alt="" />
          </Link>
          <button
            type="button"
            className="drawer__close"
            aria-label={d.nav.closeMenu}
            onClick={() => setDrawerOpen(false)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <ul className="drawer__links">
          <li>
            <Link href={r.home} onClick={() => setDrawerOpen(false)}>
              {d.nav.home}
            </Link>
          </li>
          <li>
            <Link href={r.about} onClick={() => setDrawerOpen(false)}>
              {d.nav.about}
            </Link>
          </li>
          <li>
            <Link href={r.services} onClick={() => setDrawerOpen(false)}>
              {d.nav.services}
            </Link>
          </li>
          <li>
            <Link href={r.caseStudies} onClick={() => setDrawerOpen(false)}>
              {d.nav.caseStudies}
            </Link>
          </li>
          <li>
            <Link href={r.blog} onClick={() => setDrawerOpen(false)}>
              {d.nav.blog}
            </Link>
          </li>
          <li>
            <Link href={r.contact} onClick={() => setDrawerOpen(false)}>
              {d.nav.contact}
            </Link>
          </li>
        </ul>
        <div className="drawer__lang">
          <LangSwitcher locale={locale} altHref={altHref} selfHref={selfHref} variant="full" />
        </div>
        <div className="drawer__foot">
          <a href="tel:+60193428981">{d.drawerFoot.principal}</a>
          <a href="mailto:bina.designbuild@gmail.com">bina.designbuild@gmail.com</a>
        </div>
      </aside>
    </>
  );
}
