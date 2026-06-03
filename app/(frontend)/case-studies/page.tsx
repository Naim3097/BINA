import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CaseGrid from "@/components/CaseGrid";
import { getProjects } from "@/lib/getProjects";

// Revalidate every 60s so admin edits show up within a minute.
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Case Studies — BINA+ Design & Build Projects in Selangor",
  description:
    "Browse BINA+ design-and-build projects across Selangor — from compact single-storey homes in Bandar Saujana to full double-storey custom builds in Shah Alam.",
  alternates: {
    canonical: "/case-studies",
    languages: {
      "en-MY": "/case-studies",
      "ms-MY": "/ms/case-studies",
    },
  },
  openGraph: {
    type: "website",
    title: "BINA+ Case Studies",
    description: "Real projects, real budgets, real timelines.",
    url: "/case-studies",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "BINA+ Case Studies",
  url: "https://bina.designbuild/case-studies",
};

export default async function CaseStudiesEn() {
  const { cards, projects } = await getProjects("en");
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header locale="en" current="caseStudies" altHref="/ms/case-studies" selfHref="/case-studies" />

      <main id="main">
        <Reveal as="section" className="cs-hero">
          <div className="cs-hero__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/assets/ervina 7.png"
              alt="Featured BINA+ project"
              loading="eager"
            />
            <div className="cs-hero__scrim" aria-hidden="true" />
            <div className="cs-hero__content">
              <div className="crumbs">
                <Link href="/">Home</Link>
                <span>/</span> Case Studies
              </div>
              <span className="eyebrow eyebrow--light">Selected work</span>
              <h1>
                Real homes.
                <br />
                <em>Real budgets.</em>
                <br />
                Real handovers.
              </h1>
              <p className="lead">
                Every project below was scoped, designed, built and handed over by the same BINA+
                team — across Selangor and the Klang Valley.
              </p>
              <div className="cs-hero__cta">
                <a href="#projects" className="btn btn--primary">Browse projects</a>
                <a
                  href={`https://wa.me/60193428981?text=${encodeURIComponent("Hi BINA+! I'd like to start a project — please send me a feasibility note.")}`}
                  className="btn btn--ghost btn--ghost-light"
                >
                  Start a project
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <section className="section">
          <div className="container cs-stats">
            <Reveal className="cs-stats__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/assets/construction.png" alt="BINA+ delivered home" />
              <span className="cs-stats__chip">Why clients pick us</span>
            </Reveal>
            <div className="cs-stats__grid">
              <Reveal className="cs-stat">
                <span className="cs-stat__num">
                  500<sup>+</sup>
                </span>
                <span className="cs-stat__label">Projects scoped &amp; delivered across Selangor.</span>
              </Reveal>
              <Reveal delay={1} className="cs-stat">
                <span className="cs-stat__num">15</span>
                <span className="cs-stat__label">Years of combined design &amp; build experience.</span>
              </Reveal>
              <Reveal delay={1} className="cs-stat">
                <span className="cs-stat__num">
                  98<sup>%</sup>
                </span>
                <span className="cs-stat__label">Clients who refer BINA+ to family or friends.</span>
              </Reveal>
              <Reveal delay={2} className="cs-stat">
                <span className="cs-stat__num">
                  100<sup>+</sup>
                </span>
                <span className="cs-stat__label">Tradespeople, consultants &amp; partners on call.</span>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <Reveal className="cs-head">
              <div>
                <span className="eyebrow">Our projects</span>
                <h2>
                  From land sourcing
                  <br />
                  to handover — covered.
                </h2>
              </div>
              <p>
                Filter by scope to see what fits your brief. Every project is delivered with a fixed
                contract and a single point of accountability.
              </p>
            </Reveal>

            <CaseGrid locale="en" cards={cards} projects={projects} />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal className="cta-strip">
              <div>
                <span className="eyebrow" style={{ color: "rgba(246,239,234,.7)" }}>
                  Yours could be next
                </span>
                <h2 style={{ marginTop: 14 }}>See yourself in any of these?</h2>
                <p>
                  Tell us which project resonates and what you&apos;re working with. We&apos;ll send
                  back a similar-scope feasibility note within a working day.
                </p>
              </div>
              <div className="cta-strip__actions">
                <a
                  href={`https://wa.me/60193428981?text=${encodeURIComponent("Hi BINA+! One of your case studies resonates with me — can you send a similar-scope feasibility note?")}`}
                  className="btn btn--primary"
                >
                  Start a project
                </a>
                <Link href="/services" className="btn btn--ghost">
                  See packages
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer locale="en" />
    </>
  );
}
