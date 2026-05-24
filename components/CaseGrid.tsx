"use client";

import { useState } from "react";
import { PROJECTS, type Project } from "@/lib/projects";
import ProjectModal from "./ProjectModal";
import type { Locale } from "@/lib/dict";

export type CardData = {
  id: string;
  category: "design-build" | "renovation" | "interior";
  img: string;
  alt: string;
  location: string;
  year: string;
  title: string;
  priceLine: string;
  zoom?: boolean;
};

export const EN_CARDS: CardData[] = [
  {
    id: "saujana",
    category: "design-build",
    img: "/assets/assets/house 1.jpg",
    alt: "Batu Muda, Gombak double-storey home",
    location: "Batu Muda, Gombak",
    year: "2023",
    title: "Linear Grey House",
    priceLine: "BINA MAX · 2,000 sqft · from RM430,000",
    zoom: true,
  },
  {
    id: "subang",
    category: "design-build",
    img: "/assets/assets/sekinchan.png",
    alt: "Subang Jaya semi-double home",
    location: "Sekinchan, Selangor",
    year: "2024",
    title: "Sawah & Teduh, Makngah Tiny House",
    priceLine: "BINA START · 1,200 sqft · from RM180,000",
  },
  {
    id: "klang",
    category: "renovation",
    img: "/assets/assets/courtyard renewal.png",
    alt: "Modern Courtyard Renewal renovation",
    location: "Klang, Selangor",
    year: "2024",
    title: "Modern Courtyard Renewal",
    priceLine: "Renovation · 1,800 sqft · RM300,000",
  },
  {
    id: "pj",
    category: "renovation",
    img: "/assets/assets/ervina 6.png",
    alt: "Petaling Jaya kitchen renovation",
    location: "Petaling Jaya, Selangor",
    year: "2025",
    title: "Ervina",
    priceLine: "Renovation · kitchen + living · RM200,000",
  },
  {
    id: "usj",
    category: "interior",
    img: "/assets/assets/usim 1.png",
    alt: "Ummi Maktum, Usim interior",
    location: "USIM, Negeri Sembilan",
    year: "2025",
    title: "Ummi Maktum, Usim",
    priceLine: "Interior 9-in-1 · full home · RM59,999",
  },
  {
    id: "kajang",
    category: "design-build",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop",
    alt: "Kajang custom home",
    location: "Kajang, Selangor",
    year: "2025",
    title: "The Kajang Courtyard House",
    priceLine: "BINA MAX · 2,200 sqft · from RM520,000",
  },
  {
    id: "cyber",
    category: "interior",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80&auto=format&fit=crop",
    alt: "Cyberjaya apartment",
    location: "Cyberjaya, Selangor",
    year: "2024",
    title: "The Cyber Loft",
    priceLine: "Interior 7-in-1 · 1,100 sqft · RM49,999",
  },
  {
    id: "ampang",
    category: "renovation",
    img: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80&auto=format&fit=crop",
    alt: "Ampang renovation",
    location: "Ampang, Selangor",
    year: "2024",
    title: "The Ampang Refit",
    priceLine: "Renovation · 2 areas · RM100,000",
  },
];

type Props = {
  cards?: CardData[];
  projects?: Record<string, Project>;
  locale?: Locale;
  filterLabels?: {
    all: string;
    designBuild: string;
    renovation: string;
    interior: string;
    ariaLabel: string;
    viewProjectLabel: string;
  };
};

const DEFAULT_LABELS = {
  all: "All projects",
  designBuild: "Design & Build",
  renovation: "Renovation",
  interior: "Interior",
  ariaLabel: "Filter projects",
  viewProjectLabel: "View project",
};

export default function CaseGrid({
  cards = EN_CARDS,
  projects = PROJECTS,
  locale = "en",
  filterLabels = DEFAULT_LABELS,
}: Props) {
  const [filter, setFilter] = useState<"all" | CardData["category"]>("all");
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const filtered = cards.filter((c) => filter === "all" || c.category === filter);

  const filterBtn = (
    key: "all" | CardData["category"],
    label: string
  ) => (
    <button
      key={key}
      type="button"
      className={filter === key ? "is-active" : undefined}
      data-filter={key}
      onClick={() => setFilter(key)}
    >
      {label}
    </button>
  );

  return (
    <>
      <div className="filter" role="tablist" aria-label={filterLabels.ariaLabel}>
        {filterBtn("all", filterLabels.all)}
        {filterBtn("design-build", filterLabels.designBuild)}
        {filterBtn("renovation", filterLabels.renovation)}
        {filterBtn("interior", filterLabels.interior)}
      </div>

      <div className="case-grid">
        {filtered.map((c, i) => (
          <article
            key={c.id}
            className="case"
            data-category={c.category}
            data-project={c.id}
            data-delay={i % 3 === 0 ? undefined : ((i % 3) as 1 | 2)}
            role="button"
            tabIndex={0}
            onClick={(e) => {
              if ((e.target as HTMLElement).closest("a")) return;
              const p = projects[c.id];
              if (p) setOpenProject(p);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                const p = projects[c.id];
                if (p) setOpenProject(p);
              }
            }}
          >
            <div className="case__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt={c.alt} loading="lazy" />
              {c.zoom && (
                <span className="case__zoom" aria-label={filterLabels.viewProjectLabel}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6" />
                    <path d="M9 21H3v-6" />
                    <path d="M21 3l-7 7" />
                    <path d="M3 21l7-7" />
                  </svg>
                </span>
              )}
            </div>
            <div className="case__body">
              <div className="case__meta">
                <span>{c.location}</span>
                <span>{c.year}</span>
              </div>
              <h3>{c.title}</h3>
              <span className="case__price">{c.priceLine}</span>
            </div>
          </article>
        ))}
      </div>

      <ProjectModal
        project={openProject}
        onClose={() => setOpenProject(null)}
        locale={locale}
      />
    </>
  );
}
