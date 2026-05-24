import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About BINA+ — A Malaysian Design & Build Studio",
  description:
    "Founded in Shah Alam, BINA+ is a venture of Boxup that combines architectural design with a hands-on construction team. Meet the people building Malaysia's modern homes.",
  alternates: {
    canonical: "/about",
    languages: {
      "en-MY": "/about",
      "ms-MY": "/ms/about",
    },
  },
  openGraph: {
    type: "website",
    title: "About BINA+ Design & Build",
    description: "A Shah Alam–based design-and-build studio.",
    url: "/about",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About BINA+ Design & Build",
  url: "https://bina.designbuild/about",
  mainEntity: {
    "@type": "Organization",
    name: "BINA+ Design & Build",
    foundingLocation: "Shah Alam, Selangor, Malaysia",
    parentOrganization: { "@type": "Organization", name: "Boxup" },
  },
};

export default function AboutEn() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <a href="#main" className="skip">Skip to content</a>
      <Header locale="en" current="about" altHref="/ms/about" selfHref="/about" />

      <main id="main">
        <section className="container page-hero">
          <Reveal>
            <div className="crumbs">
              <Link href="/">Home</Link>
              <span>/</span> About
            </div>
            <span className="eyebrow">Our story</span>
            <h1>
              A small studio with a clear conviction:{" "}
              <em style={{ color: "var(--brand)", fontStyle: "normal" }}>
                design and build belong together.
              </em>
            </h1>
            <p className="lead">
              BINA+ began as a side venture inside Boxup — a Malaysian product studio — when our
              team kept watching homeowners get caught between architects who wouldn&apos;t build,
              and contractors who wouldn&apos;t design. So we built the in-between.
            </p>
          </Reveal>
          <Reveal delay={1} className="page-hero__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1100&q=80&auto=format&fit=crop"
              alt="BINA+ studio space"
              loading="eager"
            />
          </Reveal>
        </section>

        <section className="section">
          <div className="container about-grid">
            <Reveal>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/assets/cement.png" alt="BINA+ construction quality" loading="lazy" />
            </Reveal>
            <Reveal delay={1}>
              <span className="eyebrow">Why we exist</span>
              <h2 style={{ margin: "14px 0 22px" }}>
                Two years in, 85 builds delivered, one philosophy.
              </h2>
              <p>
                We believe the best homes happen when the person drawing the plans is the same team
                standing on the slab. That&apos;s why every BINA+ project moves through one studio,
                one project manager, and one fixed contract.
              </p>
              <p>
                Our team is led by Najiha (architectural lead) and Syafiq (build lead) — both
                Selangor-born, both stubborn about quality. We work on a deliberately small slate of
                projects each year so every build gets the attention it deserves.
              </p>
              <p>
                BINA+ is registered as a separate SSM entity from our parent brand Boxup, but we
                share the same operations DNA: clear scopes, weekly updates, and zero &ldquo;you&apos;ll see
                when it&apos;s done&rdquo; surprises.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section" style={{ background: "var(--surface)" }}>
          <div className="container">
            <Reveal className="center-head">
              <span className="eyebrow">What we stand for</span>
              <h2>Three rules we don&apos;t break.</h2>
            </Reveal>
            <div className="values">
              <Reveal as="article" className="value">
                <span className="value__num">01 · Pricing</span>
                <h3>Fixed scope, fixed price</h3>
                <p>
                  Every quote is line-itemised. If we missed something, that&apos;s our cost — not
                  yours. Variation orders only happen when you ask for them.
                </p>
              </Reveal>
              <Reveal as="article" delay={1} className="value">
                <span className="value__num">02 · Climate</span>
                <h3>Built for the climate</h3>
                <p>
                  Designed for Malaysian heat, humidity and the monsoon. Cross-ventilation, deep
                  eaves and proper waterproofing aren&apos;t upgrades here — they&apos;re defaults.
                </p>
              </Reveal>
              <Reveal as="article" delay={2} className="value">
                <span className="value__num">03 · People</span>
                <h3>One team, all the way</h3>
                <p>
                  Same project manager from day one to handover. No subcontractor finger-pointing,
                  no &ldquo;that&apos;s not our scope.&rdquo; Accountability is built in.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal className="center-head">
              <span className="eyebrow">The studio</span>
              <h2>The people you&apos;ll actually work with.</h2>
            </Reveal>

            <Reveal className="team-principal">
              <div className="team-principal__body">
                <span className="eyebrow">Principal</span>
                <h2 className="team-principal__name">Najiha</h2>
                <p className="team-principal__role">Co-founder &amp; Design Lead</p>
                <p className="team-principal__bio">
                  Najiha leads every project from concept to handover. With a background in
                  architecture, she&apos;s the one who ensures what gets built actually matches what
                  was promised — sitting in on every briefing and visiting sites mid-pour. Her
                  approach: one studio, one manager, no surprises.
                </p>
                <a href="https://wa.me/60193428981" className="team-principal__cta">
                  Get in touch →
                </a>
              </div>
              <div className="team-principal__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&q=80&auto=format&fit=crop"
                  alt="Najiha — Co-founder & Design Lead"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal className="team-subhead">
              <span className="eyebrow">Team</span>
              <h3>Our team</h3>
            </Reveal>
            <div className="team-row">
              <Reveal as="article" className="team__card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80&auto=format&fit=crop"
                  alt="Syafiq — Co-founder & Build Lead"
                  loading="lazy"
                />
                <div>
                  <h3>Syafiq</h3>
                  <span>Co-founder · Build Lead</span>
                </div>
              </Reveal>
              <Reveal as="article" delay={1} className="team__card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80&auto=format&fit=crop"
                  alt="Aisyah — Project Manager"
                  loading="lazy"
                />
                <div>
                  <h3>Aisyah</h3>
                  <span>Project Manager</span>
                </div>
              </Reveal>
              <Reveal as="article" delay={2} className="team__card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80&auto=format&fit=crop"
                  alt="Hakim — Site Supervisor"
                  loading="lazy"
                />
                <div>
                  <h3>Hakim</h3>
                  <span>Site Supervisor</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal className="cta-strip">
              <div>
                <span className="eyebrow" style={{ color: "rgba(246,239,234,.7)" }}>
                  Visit the studio
                </span>
                <h2 style={{ marginTop: 14 }}>Drop by Pinggiran Subang.</h2>
                <p>
                  Walk through 1:1 material samples, scaled models and our build process — coffee on
                  us. Mon–Fri 9:00–17:30, Sat 9:00–13:00.
                </p>
              </div>
              <div className="cta-strip__actions">
                <a
                  href="https://maps.google.com/?q=24-1+Jalan+Matahari+Aa+U5+Pinggiran+Subang+40150+Shah+Alam"
                  className="btn btn--primary"
                >
                  Get directions
                </a>
                <a href="https://wa.me/60193428981" className="btn btn--ghost">
                  WhatsApp us
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer locale="en" />
    </>
  );
}
