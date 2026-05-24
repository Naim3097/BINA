"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export type CatalogCard = {
  href: string;
  img: string;
  alt: string;
  year: string;
  title: string;
};

type Props = {
  ariaLabel?: string;
  intro?: {
    years: string;
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    sub: string;
  };
  mhead?: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    sub: string;
  };
  cards?: CatalogCard[];
  cta?: {
    eyebrow: string;
    title: string;
    href: string;
    btn: string;
  };
  mfoot?: {
    eyebrow: string;
    title: string;
    href: string;
    btn: string;
  };
};

const EN_DEFAULTS = {
  ariaLabel: "Recent work",
  intro: {
    years: "2025 — Now",
    eyebrow: "Recent work",
    titleLine1: "Our 2025",
    titleLine2: "catalogue.",
    sub: "Design-and-build projects delivered across the Klang Valley — scroll to explore.",
  },
  mhead: {
    eyebrow: "2025 — Now",
    titleLine1: "Our 2025",
    titleLine2: "catalogue.",
    sub: "Design-and-build projects across the Klang Valley. Swipe to explore.",
  },
  cards: [
    { href: "/case-studies", img: "/assets/assets/house 1.jpg", alt: "Single-storey home, 1,200 sqft", year: "01 · Jalan Batu Muda", title: "Design & Build" },
    { href: "/case-studies", img: "/assets/assets/sekinchan.png", alt: "Sekinchan Field House", year: "02 · Sekinchan", title: "Field House" },
    { href: "/case-studies", img: "/assets/assets/courtyard renewal.png", alt: "Modern Courtyard Renewal renovation", year: "03 · Klang", title: "Modern Courtyard Renewal" },
    { href: "/case-studies", img: "/assets/assets/ervina 6.png", alt: "Ervina kitchen renovation, Petaling Jaya", year: "04 · Bukit Jelutong", title: "Ervina" },
  ] as CatalogCard[],
  cta: {
    eyebrow: "12+ projects delivered",
    title: "See the full portfolio.",
    href: "/case-studies",
    btn: "View all projects",
  },
  mfoot: {
    eyebrow: "12+ projects delivered",
    title: "See the full portfolio.",
    href: "/case-studies",
    btn: "View all projects",
  },
};

export default function Catalog({
  ariaLabel = EN_DEFAULTS.ariaLabel,
  intro = EN_DEFAULTS.intro,
  mhead = EN_DEFAULTS.mhead,
  cards = EN_DEFAULTS.cards,
  cta = EN_DEFAULTS.cta,
  mfoot = EN_DEFAULTS.mfoot,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const bar = barRef.current;
    if (!section || !track) return;

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktopMQ = matchMedia("(min-width: 881px)");

    if (reduced || !desktopMQ.matches) return;

    gsap.registerPlugin(ScrollTrigger);

    let stInstance: ScrollTrigger | null = null;
    let tween: gsap.core.Tween | null = null;

    const onMQChange = (e: MediaQueryListEvent) => {
      if (!e.matches && stInstance) {
        stInstance.kill();
        stInstance = null;
        if (tween) tween.kill();
        gsap.set(track, { clearProps: "transform,x" });
      }
    };
    desktopMQ.addEventListener("change", onMQChange);

    const init = () => {
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

      const stVars: ScrollTrigger.Vars = {
        trigger: section,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        start: "top top",
        end: () => "+=" + Math.abs(getScrollAmount()),
        scrub: 1,
        invalidateOnRefresh: true,
      };
      if (bar) {
        stVars.onUpdate = (self) => {
          bar.style.width = (self.progress * 100).toFixed(2) + "%";
        };
      }

      tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: stVars,
      });
      stInstance = (tween.scrollTrigger as ScrollTrigger) ?? null;

      ScrollTrigger.refresh();
    };

    const imgs = Array.from(track.querySelectorAll("img"));
    const onLoad = () => ScrollTrigger.refresh();

    if (imgs.length === 0) {
      init();
    } else {
      Promise.all(
        imgs.map((img) => {
          if (img.complete && img.naturalWidth > 0) return Promise.resolve();
          return new Promise<void>((res) => {
            img.addEventListener("load", () => res(), { once: true });
            img.addEventListener("error", () => res(), { once: true });
          });
        })
      ).then(init);
    }
    window.addEventListener("load", onLoad);

    return () => {
      desktopMQ.removeEventListener("change", onMQChange);
      window.removeEventListener("load", onLoad);
      if (stInstance) stInstance.kill();
      if (tween) tween.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="hscroll" id="catalog" aria-label={ariaLabel}>
      <header className="hscroll__mhead">
        <span className="hscroll__mhead-eyebrow">{mhead.eyebrow}</span>
        <h2 className="hscroll__mhead-title">
          {mhead.titleLine1}
          <br />
          {mhead.titleLine2}
        </h2>
        <p className="hscroll__mhead-sub">{mhead.sub}</p>
      </header>

      <div className="hscroll__sticky">
        <div className="hscroll__viewport">
          <div ref={trackRef} className="hscroll__track" id="hscrollTrack">
            <div className="hcard hcard--intro">
              <div className="hcard--intro__inner">
                <div className="hcard--intro__top">
                  <span className="hcard--intro__years">{intro.years}</span>
                  <span className="eyebrow">{intro.eyebrow}</span>
                </div>
                <div className="hcard--intro__bottom">
                  <h2>
                    {intro.titleLine1}
                    <br />
                    {intro.titleLine2}
                  </h2>
                  <p>{intro.sub}</p>
                </div>
              </div>
            </div>

            {cards.map((c, i) => (
              <Link key={i} href={c.href} className="hcard">
                <div className="hcard__inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.alt} />
                </div>
                <div className="hcard__meta">
                  <span className="hcard__year">{c.year}</span>
                  <h3>{c.title}</h3>
                </div>
              </Link>
            ))}

            <Link href={cta.href} className="hcard hcard--cta">
              <div>
                <span className="eyebrow">{cta.eyebrow}</span>
                <h3>{cta.title}</h3>
                <span className="btn btn--primary">{cta.btn}</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="hscroll__progress" aria-hidden="true">
          <span ref={barRef} className="hscroll__progress-bar" id="hscrollBar" />
        </div>
      </div>

      <footer className="hscroll__mfoot">
        <div className="hscroll__mfoot-inner">
          <span className="hscroll__mfoot-eyebrow">{mfoot.eyebrow}</span>
          <p className="hscroll__mfoot-title">{mfoot.title}</p>
          <Link href={mfoot.href} className="btn btn--primary hscroll__mfoot-btn">
            {mfoot.btn}
          </Link>
        </div>
      </footer>
    </section>
  );
}
