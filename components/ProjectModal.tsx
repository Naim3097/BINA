"use client";

import { useEffect, useRef } from "react";
import type { Project } from "@/lib/projects";
import { dict, type Locale } from "@/lib/dict";

type Props = {
  project: Project | null;
  onClose: () => void;
  locale?: Locale;
};

const cta = {
  en: {
    kicker: "Design intent",
    aboutKicker: "What sets it apart",
    materialsKicker: "Materials & finishes",
    galleryLabel: "Project gallery",
    specsLabel: "Project specs",
    ctaEyebrow: "Build something like this",
    ctaTitle: "Want a similar scope?",
    ctaBody: "Send us your brief — we'll come back with a feasibility note within one working day.",
    ctaPrimary: "Start a project",
    ctaSecondary: "See packages",
    closeLabel: "Close project",
  },
  ms: {
    kicker: "Niat reka bentuk",
    aboutKicker: "Apa yang membezakannya",
    materialsKicker: "Bahan & kemasan",
    galleryLabel: "Galeri projek",
    specsLabel: "Spesifikasi projek",
    ctaEyebrow: "Bina yang seumpama ini",
    ctaTitle: "Mahukan skop yang serupa?",
    ctaBody: "Hantar ringkasan anda — kami balas dengan nota kebolehlaksanaan dalam satu hari bekerja.",
    ctaPrimary: "Mulakan projek",
    ctaSecondary: "Lihat pakej",
    closeLabel: "Tutup projek",
  },
} as const;

export default function ProjectModal({ project, onClose, locale = "en" }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const l = cta[locale];
  const servicesHref = locale === "en" ? "/services" : "/ms/services";

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (project) {
      if (typeof dlg.showModal === "function") dlg.showModal();
      else dlg.setAttribute("open", "");
      document.body.style.overflow = "hidden";
      dlg.classList.add("is-open");
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
      requestAnimationFrame(() => closeBtnRef.current?.focus());
    } else {
      dlg.classList.remove("is-open");
      if (typeof dlg.close === "function") {
        try { dlg.close(); } catch {}
      } else {
        dlg.removeAttribute("open");
      }
      document.body.style.overflow = "";
    }
  }, [project]);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    const onCancel = (e: Event) => {
      e.preventDefault();
      onClose();
    };
    const onClick = (e: MouseEvent) => {
      if (e.target === dlg) onClose();
    };
    dlg.addEventListener("cancel", onCancel);
    dlg.addEventListener("click", onClick);
    return () => {
      dlg.removeEventListener("cancel", onCancel);
      dlg.removeEventListener("click", onClick);
    };
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      className="pmodal"
      id="pmodal"
      aria-labelledby="pmodalTitle"
      data-lenis-prevent
    >
      <button
        ref={closeBtnRef}
        type="button"
        className="pmodal__close"
        aria-label={l.closeLabel}
        onClick={onClose}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6L6 18" />
          <path d="M6 6l12 12" />
        </svg>
      </button>
      <div ref={scrollRef} className="pmodal__scroll" data-lenis-prevent>
        <article className="pmodal__article">
          {project && (
            <>
              <header className="pm-hero">
                <div className="pm-hero__media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.hero} alt={project.title} />
                </div>
              </header>
              <div className="pm-body">
                <section className="pm-head">
                  <span className="eyebrow">{project.eyebrow}</span>
                  <h2 id="pmodalTitle">{project.title}</h2>
                  <div className="pm-head__meta">
                    <span>{project.location}</span>
                    <span className="pm-dot" aria-hidden="true" />
                    <span>{project.year}</span>
                  </div>
                  <p className="pm-lead">{project.lead}</p>
                </section>

                <section className="pm-row">
                  <div className="pm-row__copy">
                    <span className="pm-kicker">{l.kicker}</span>
                    {project.intent.split("\n\n").map((para, i) => (
                      <div key={i} className="pm-prose">
                        {para.split("\n").map((line, j, arr) => (
                          <span key={j}>
                            {line}
                            {j < arr.length - 1 && <br />}
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                  <dl className="pm-facts" aria-label={l.specsLabel}>
                    {project.specs.map((s, i) => (
                      <div key={i} className="pm-fact">
                        <dt>{s.k}</dt>
                        <dd>{s.v}</dd>
                      </div>
                    ))}
                  </dl>
                </section>

                <section className="pm-plan">
                  <figure>
                    <div className="pm-plan__media">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={project.plan.img} alt={`Floor plan — ${project.title}`} loading="lazy" />
                    </div>
                    <figcaption>{project.plan.caption}</figcaption>
                  </figure>
                </section>

                <section className="pm-gallery" aria-label={l.galleryLabel}>
                  {project.gallery.map((g, i) => (
                    <figure key={i} className="pm-shot">
                      <div className="pm-shot__media">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={g.img} alt={g.cap} loading="lazy" />
                      </div>
                      <figcaption>{g.cap}</figcaption>
                    </figure>
                  ))}
                </section>

                <section className="pm-row pm-row--bottom">
                  <div className="pm-row__copy">
                    <span className="pm-kicker">{l.aboutKicker}</span>
                    <ul className="pm-notes">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="pm-note">
                          <span className="pm-note__n">{h.n}</span>
                          <div>
                            <h4>{h.t}</h4>
                            <p>{h.d}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pm-mats-wrap">
                    <span className="pm-kicker">{l.materialsKicker}</span>
                    <ul className="pm-mats">
                      {project.materials.map((m, i) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section className="pm-cta">
                  <div>
                    <span className="eyebrow">{l.ctaEyebrow}</span>
                    <h3>{l.ctaTitle}</h3>
                    <p>{l.ctaBody}</p>
                  </div>
                  <div className="pm-cta__actions">
                    <a
                      href={`https://wa.me/60193428981?text=${encodeURIComponent(
                        locale === "ms"
                          ? `Hai BINA+! Saya inginkan projek seumpama "${project.title}" — boleh kongsi nota kebolehlaksanaan?`
                          : `Hi BINA+! I'd love a similar-scope project to "${project.title}" — can you send a feasibility note?`
                      )}`}
                      className="btn btn--primary"
                    >
                      {l.ctaPrimary}
                    </a>
                    <a href={servicesHref} className="btn btn--ghost">
                      {l.ctaSecondary}
                    </a>
                  </div>
                </section>
              </div>
            </>
          )}
        </article>
      </div>
    </dialog>
  );
}
