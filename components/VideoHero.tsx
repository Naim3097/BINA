"use client";

import { useEffect, useRef } from "react";

type Copy = {
  ariaLabel: string;
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  lead: string;
  primaryCta: string;
  primaryHref?: string;
  secondaryCta: string;
  secondaryHref?: string;
};

const EN_COPY: Copy = {
  ariaLabel: "BINA+ design and build showreel",
  eyebrow: "Design & Build · Shah Alam",
  titleLine1: "Homes built",
  titleLine2: "with intention.",
  lead:
    "From the first sketch to the final handover, BINA+ designs and constructs modern Malaysian homes — on time, on budget, on one accountable contract.",
  primaryCta: "Start your build",
  primaryHref: "#contact",
  secondaryCta: "View our work",
  secondaryHref: "/case-studies",
};

export default function VideoHero({ copy = EN_COPY }: { copy?: Copy }) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sourceRef = useRef<HTMLSourceElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const src = sourceRef.current;
    const bar = barRef.current;
    if (!section || !video) return;

    // Pick lighter source on small viewports before first load
    if (src && window.innerWidth <= 820) {
      src.src = "/assets/video/hero-720.mp4";
      video.load();
    }

    const reveals = section.querySelectorAll<HTMLElement>(".vhero__reveal");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = matchMedia("(pointer: coarse)").matches;

    // Mobile / touch / reduced motion: skip scroll-scrub entirely
    if (reduced || isTouch) {
      reveals.forEach((el) => el.classList.add("is-in"));
      video.setAttribute("autoplay", "");
      video.setAttribute("loop", "");
      video.muted = true;
      video.playsInline = true;
      const tryPlay = () => video.play?.().catch(() => {});
      tryPlay();
      const onTouch = () => tryPlay();
      const onClick = () => tryPlay();
      document.addEventListener("touchstart", onTouch, { once: true, passive: true });
      document.addEventListener("click", onClick, { once: true });
      return () => {
        document.removeEventListener("touchstart", onTouch);
        document.removeEventListener("click", onClick);
      };
    }

    let duration = 0;
    let targetTime = 0;
    let currentTime = 0;
    let ticking = false;
    let lastProgress = -1;
    let ready = false;
    let rafSmooth = 0;

    const smoothSeek = () => {
      cancelAnimationFrame(rafSmooth);
      const step = () => {
        const diff = targetTime - currentTime;
        if (Math.abs(diff) < 0.005) {
          currentTime = targetTime;
          try { video.currentTime = currentTime; } catch {}
          return;
        }
        currentTime += diff * 0.18;
        try { video.currentTime = currentTime; } catch {}
        rafSmooth = requestAnimationFrame(step);
      };
      rafSmooth = requestAnimationFrame(step);
    };

    const update = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const total = rect.height - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const progress = total > 0 ? scrolled / total : 0;

      if (ready && Math.abs(progress - lastProgress) > 0.0005) {
        lastProgress = progress;
        targetTime = Math.max(0.02, Math.min(0.98, progress)) * duration;
        smoothSeek();
      }

      if (bar) bar.style.width = (progress * 100).toFixed(2) + "%";

      reveals.forEach((el) => {
        const step = parseInt(el.dataset.step || "0", 10);
        const trigger = 0.02 + step * 0.1;
        el.classList.toggle("is-in", progress >= trigger);
      });
    };

    const onScrollVH = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    const setReady = () => {
      duration = video.duration || 0;
      ready = duration > 0;
      try { video.currentTime = 0.02; } catch {}
      onScrollVH();
    };

    if (video.readyState >= 2) setReady();
    else {
      video.addEventListener("loadeddata", setReady, { once: true });
      video.addEventListener("canplay", setReady, { once: true });
    }

    const primeIOS = () => {
      const p = video.play();
      if (p && typeof p.then === "function") p.then(() => video.pause()).catch(() => {});
    };
    document.addEventListener("touchstart", primeIOS, { once: true, passive: true });
    document.addEventListener("click", primeIOS, { once: true });

    document.addEventListener("scroll", onScrollVH, { passive: true });
    window.addEventListener("resize", onScrollVH);
    onScrollVH();

    return () => {
      cancelAnimationFrame(rafSmooth);
      document.removeEventListener("scroll", onScrollVH);
      window.removeEventListener("resize", onScrollVH);
      document.removeEventListener("touchstart", primeIOS);
      document.removeEventListener("click", primeIOS);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="vhero"
      id="vhero"
      aria-label={copy.ariaLabel}
    >
      <div className="vhero__sticky">
        <video
          ref={videoRef}
          className="vhero__video"
          id="vheroVideo"
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          poster="/assets/video/hero-poster.jpg"
        >
          <source ref={sourceRef} id="vheroSrc" src="/assets/video/hero-1080.mp4" type="video/mp4" />
        </video>
        <div className="vhero__scrim" aria-hidden="true" />
        <div className="container vhero__inner">
          <div className="vhero__copy">
            <span className="eyebrow vhero__eyebrow vhero__reveal" data-step="0">
              {copy.eyebrow}
            </span>
            <h1 className="vhero__title">
              <span className="vhero__line vhero__reveal" data-step="1">{copy.titleLine1}</span>
              <span className="vhero__line vhero__reveal" data-step="2">{copy.titleLine2}</span>
            </h1>
            <p className="vhero__lead vhero__reveal" data-step="3">{copy.lead}</p>
            <div className="vhero__cta vhero__reveal" data-step="4">
              <a href={copy.primaryHref ?? "#contact"} className="btn btn--primary">{copy.primaryCta}</a>
              <a href={copy.secondaryHref ?? "/case-studies"} className="btn btn--ghost-light">{copy.secondaryCta}</a>
            </div>
          </div>
        </div>
        <div className="vhero__progress" aria-hidden="true">
          <span ref={barRef} className="vhero__progress-bar" id="vheroBar" />
        </div>
      </div>
    </section>
  );
}
