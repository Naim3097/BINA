import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services & Packages — BINA+ Design & Build",
  description:
    "Design and build, renovation and interior design packages from BINA+. Single-storey homes from RM200k, double-storey from RM460k, extensions from RM100k, interior design from RM39k. Includes 3D design, project management and free gifts.",
  alternates: {
    canonical: "/services",
    languages: {
      "en-MY": "/services",
      "ms-MY": "/ms/services",
    },
  },
  openGraph: {
    type: "website",
    title: "BINA+ Services — Design, Build, Renovate",
    description: "Move-in ready packages from RM100k. Fixed scope, fixed price, fixed timeline.",
    url: "/services",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "Design and Build Package",
      provider: { "@type": "Organization", name: "BINA+ Design & Build" },
      offers: { "@type": "Offer", price: "200000", priceCurrency: "MYR" },
    },
    {
      "@type": "Service",
      position: 2,
      name: "Renovation Package",
      provider: { "@type": "Organization", name: "BINA+ Design & Build" },
      offers: { "@type": "Offer", price: "100000", priceCurrency: "MYR" },
    },
    {
      "@type": "Service",
      position: 3,
      name: "Interior Design Package",
      provider: { "@type": "Organization", name: "BINA+ Design & Build" },
      offers: { "@type": "Offer", price: "39000", priceCurrency: "MYR" },
    },
  ],
};

export default function ServicesEn() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <a href="#main" className="skip">Skip to content</a>
      <Header locale="en" current="services" altHref="/ms/services" selfHref="/services" />

      <main id="main">
        <section className="container page-hero">
          <Reveal>
            <div className="crumbs">
              <Link href="/">Home</Link>
              <span>/</span> Services
            </div>
            <span className="eyebrow">Packages</span>
            <h1>
              Flexible packages,{" "}
              <em style={{ color: "var(--brand)", fontStyle: "normal" }}>honest pricing</em>.
            </h1>
            <p className="lead">
              Three core service lines — design and build, renovation, and interior design — each
              with clear price bands so you know what your ringgit gets you before we ever sign
              anything.
            </p>
          </Reveal>
          <Reveal delay={1} className="page-hero__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/assets/sekinchan%201.png"
              alt="Modern interior design"
              loading="eager"
            />
          </Reveal>
        </section>

        <section className="section">
          <div className="container">
            <Reveal as="article" className="svc">
              <div className="svc__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/assets/contractor.png" alt="Design and build" loading="lazy" />
              </div>
              <div className="svc__body" id="design-build">
                <span className="eyebrow">01 · Design &amp; Build</span>
                <h2>End-to-end, from blank land to handover.</h2>
                <div className="svc__price">
                  <small>From</small>RM200,000
                </div>
                <p className="lead">
                  A complete solution covering architectural planning, structural engineering, full
                  project management and on-site execution. Tailored for new builds and major
                  transformations.
                </p>
                <ul className="svc__list">
                  <li>Architectural planning &amp; 3D design</li>
                  <li>Full project management with weekly updates</li>
                  <li>Construction &amp; certified site supervision</li>
                  <li>Material &amp; detail coordination end-to-end</li>
                </ul>
                <div className="tier-grid">
                  <div className="tier">
                    <div className="tier__head">
                      <span className="tier__name">BINA START</span>
                      <p className="tier__tag">Single-storey family home.</p>
                    </div>
                    <div className="tier__spec">1,200 sqft · 3 bed · 2 bath · Single-storey</div>
                    <div className="tier__price"><small>FROM</small><strong>RM200k</strong></div>
                    <a
                      href={`https://wa.me/60193428981?text=${encodeURIComponent("Hi BINA+! I'd like more info on the BINA START package (Design & Build · 1-storey, 1,200 sqft, 3 bed / 2 bath, from RM200k).")}`}
                      className="tier__cta"
                    >
                      Enquire →
                    </a>
                    <ul className="tier__feats">
                      <li>1-storey home, ~1,200 sqft</li>
                      <li>3 bedrooms · 2 bathrooms</li>
                      <li>Full design &amp; build delivery</li>
                    </ul>
                    <p className="tier__note">First-time homeowners</p>
                  </div>
                  <div className="tier tier--featured">
                    <div className="tier__badge">Most Popular</div>
                    <div className="tier__head">
                      <span className="tier__name">BINA PLUS</span>
                      <p className="tier__tag">1.5-storey, room to grow.</p>
                    </div>
                    <div className="tier__spec">1,500 sqft · 3 bed · 2 bath · 1.5-storey</div>
                    <div className="tier__price"><small>FROM</small><strong>RM350k</strong></div>
                    <a
                      href={`https://wa.me/60193428981?text=${encodeURIComponent("Hi BINA+! I'd like more info on the BINA PLUS package (Design & Build · 1.5-storey, 1,500 sqft, 3 bed / 2 bath, from RM350k).")}`}
                      className="tier__cta"
                    >
                      Enquire →
                    </a>
                    <ul className="tier__feats">
                      <li>1.5-storey home, ~1,500 sqft</li>
                      <li>3 bedrooms · 2 bathrooms</li>
                      <li>Mid-tier finishes, upgradable specs</li>
                    </ul>
                    <p className="tier__note">Best value for growing families</p>
                  </div>
                  <div className="tier">
                    <div className="tier__head">
                      <span className="tier__name">BINA MAX</span>
                      <p className="tier__tag">Double-storey, fully maximised.</p>
                    </div>
                    <div className="tier__spec">2,000 sqft · 4 bed · 3 bath · Double-storey</div>
                    <div className="tier__price"><small>FROM</small><strong>RM460k</strong></div>
                    <a
                      href={`https://wa.me/60193428981?text=${encodeURIComponent("Hi BINA+! I'd like more info on the BINA MAX package (Design & Build · 2-storey, 2,000 sqft, 4 bed / 3 bath, from RM460k).")}`}
                      className="tier__cta"
                    >
                      Enquire →
                    </a>
                    <ul className="tier__feats">
                      <li>2-storey home, ~2,000 sqft</li>
                      <li>4 bedrooms · 3 bathrooms</li>
                      <li>Premium finishes throughout</li>
                    </ul>
                    <p className="tier__note">Families wanting more space</p>
                  </div>
                </div>
                <div className="tier-footer">
                  <div className="tier-footer__stat"><span className="tier-footer__num">50+</span><span>Homes built</span></div>
                  <div className="tier-footer__stat"><span className="tier-footer__num">Certified</span><span>engineers &amp; contractors</span></div>
                  <div className="tier-footer__stat"><span className="tier-footer__num">Weekly</span><span>updates &amp; site photos</span></div>
                </div>
                <div className="gifts-strip">
                  <strong>Free gifts included with every package:</strong>{" "}
                  3D design · 8ft table top · smart lock · safe back door · installation wiring
                  · downlight fittings · fan fittings · site visit · quotation · sink · hood &amp; stove installation
                </div>
              </div>
            </Reveal>

            <Reveal as="article" className="svc" delay={1}>
              <div className="svc__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/assets/contractor 2.png" alt="Renovation" loading="lazy" />
              </div>
              <div className="svc__body" id="renovation" style={{ marginTop: 24 }}>
                <span className="eyebrow">02 · Renovation</span>
                <h2>Extend the home you already own.</h2>
                <div className="svc__price"><small>From</small>RM100,000</div>
                <p className="lead">
                  Add livable square footage to your existing home — back extension, full
                  two-storey build-up, or corner-lot expansion. Three tiers, defined scope,
                  fixed price.
                </p>
                <div className="tier-grid">
                  <div className="tier">
                    <div className="tier__head">
                      <span className="tier__name">RENO START</span>
                      <p className="tier__tag">Back extension.</p>
                    </div>
                    <div className="tier__spec">Single-storey rear extension</div>
                    <div className="tier__price"><small>FROM</small><strong>RM100k</strong></div>
                    <a
                      href={`https://wa.me/60193428981?text=${encodeURIComponent("Hi BINA+! I'd like more info on the RENO START package (single-storey back extension, from RM100k).")}`}
                      className="tier__cta"
                    >
                      Enquire →
                    </a>
                    <ul className="tier__feats">
                      <li>Single-floor rear extension</li>
                      <li>Structural &amp; finishing works</li>
                      <li>Permits &amp; plans included</li>
                    </ul>
                    <p className="tier__note">Add living space at the back</p>
                  </div>
                  <div className="tier tier--featured">
                    <div className="tier__badge">Most Popular</div>
                    <div className="tier__head">
                      <span className="tier__name">RENO PLUS</span>
                      <p className="tier__tag">2-storey extension.</p>
                    </div>
                    <div className="tier__spec">Full two-storey extension</div>
                    <div className="tier__price"><small>FROM</small><strong>RM200k</strong></div>
                    <a
                      href={`https://wa.me/60193428981?text=${encodeURIComponent("Hi BINA+! I'd like more info on the RENO PLUS package (full 2-storey extension, from RM200k).")}`}
                      className="tier__cta"
                    >
                      Enquire →
                    </a>
                    <ul className="tier__feats">
                      <li>Full 2-storey extension</li>
                      <li>Engineered structure &amp; roof</li>
                      <li>Finishes &amp; permits</li>
                    </ul>
                    <p className="tier__note">Maximise your floor area</p>
                  </div>
                  <div className="tier">
                    <div className="tier__head">
                      <span className="tier__name">RENO MAX</span>
                      <p className="tier__tag">2-storey corner-lot extension.</p>
                    </div>
                    <div className="tier__spec">2-storey corner-lot expansion</div>
                    <div className="tier__price"><small>FROM</small><strong>RM300k</strong></div>
                    <a
                      href={`https://wa.me/60193428981?text=${encodeURIComponent("Hi BINA+! I'd like more info on the RENO MAX package (2-storey corner-lot extension, from RM300k).")}`}
                      className="tier__cta"
                    >
                      Enquire →
                    </a>
                    <ul className="tier__feats">
                      <li>Corner-lot expansion, both floors</li>
                      <li>Wider envelope, engineered structure</li>
                      <li>Council submissions handled</li>
                    </ul>
                    <p className="tier__note">For corner lots with wider build potential</p>
                  </div>
                </div>
                <div className="gifts-strip">
                  <strong>Free gifts included with every package:</strong>{" "}
                  3D design · 8ft table top · smart lock · safe back door · installation wiring
                  · downlight fittings · fan fittings · site visit · quotation · sink · hood &amp; stove installation
                </div>
              </div>
            </Reveal>

            <Reveal as="article" className="svc" delay={2}>
              <div className="svc__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/assets/ervina 16.png"
                  alt="Interior design"
                  loading="lazy"
                />
              </div>
              <div className="svc__body" id="interior" style={{ marginTop: 24 }}>
                <span className="eyebrow">03 · Interior Design</span>
                <h2>Carpentry &amp; finishes built into your home.</h2>
                <div className="svc__price"><small>From</small>RM39,000</div>
                <p className="lead">
                  Full interior build-out packages covering kitchen, wardrobes, TV cabinet,
                  ceiling and flooring. Three material series — choose the one that fits your
                  budget and finish.
                </p>
                <ul className="svc__list">
                  <li>Plaster ceiling &amp; SPC flooring</li>
                  <li>Custom kitchen, wardrobes, TV cabinet, tall units</li>
                  <li>Three material series: melamine, laminated, shaker</li>
                </ul>
                <div className="tier-grid">
                  <div className="tier">
                    <div className="tier__head">
                      <span className="tier__name">ID START</span>
                      <p className="tier__tag">Melamine series.</p>
                    </div>
                    <div className="tier__spec">~650 sqft · Essentials</div>
                    <div className="tier__price"><small>FROM</small><strong>RM39k</strong></div>
                    <a
                      href={`https://wa.me/60193428981?text=${encodeURIComponent("Hi BINA+! I'd like more info on the ID START package (Interior Design · melamine series, from RM39k).")}`}
                      className="tier__cta"
                    >
                      Enquire →
                    </a>
                    <ul className="tier__feats">
                      <li>Plaster ceiling &amp; SPC flooring (~650 sqft)</li>
                      <li>Kitchen base + wall units · backsplash</li>
                      <li>TV cabinet · shoe cabinet · 2 wardrobes</li>
                    </ul>
                    <p className="tier__note">First-time homeowners</p>
                  </div>
                  <div className="tier tier--featured">
                    <div className="tier__badge">Most Popular</div>
                    <div className="tier__head">
                      <span className="tier__name">ID PLUS</span>
                      <p className="tier__tag">Laminated series.</p>
                    </div>
                    <div className="tier__spec">~1,000 sqft · Family-ready</div>
                    <div className="tier__price"><small>FROM</small><strong>RM59k</strong></div>
                    <a
                      href={`https://wa.me/60193428981?text=${encodeURIComponent("Hi BINA+! I'd like more info on the ID PLUS package (Interior Design · laminated series, from RM59k).")}`}
                      className="tier__cta"
                    >
                      Enquire →
                    </a>
                    <ul className="tier__feats">
                      <li>Plaster ceiling &amp; SPC flooring (~1,000 sqft)</li>
                      <li>Island table + study table + 3 wardrobes</li>
                      <li>Tall units (fridge + oven) included</li>
                    </ul>
                    <p className="tier__note">Most chosen by families</p>
                  </div>
                  <div className="tier">
                    <div className="tier__head">
                      <span className="tier__name">ID MAX</span>
                      <p className="tier__tag">Shaker design series.</p>
                    </div>
                    <div className="tier__spec">~1,300 sqft · Premium finish</div>
                    <div className="tier__price"><small>FROM</small><strong>RM79k</strong></div>
                    <a
                      href={`https://wa.me/60193428981?text=${encodeURIComponent("Hi BINA+! I'd like more info on the ID MAX package (Interior Design · shaker design series, from RM79k).")}`}
                      className="tier__cta"
                    >
                      Enquire →
                    </a>
                    <ul className="tier__feats">
                      <li>SPC flooring up to ~1,300 sqft</li>
                      <li>Large 8ft × 4ft island table</li>
                      <li>3 wardrobes incl. 10ft master</li>
                    </ul>
                    <p className="tier__note">Full premium build-out</p>
                  </div>
                </div>
                <div className="gifts-strip">
                  <strong>Free gifts included with every ID package:</strong>{" "}
                  3D design · dishrack · bottle rack · drawer set · soft-close mechanism
                  · undersink protection · stove &amp; hood installation · cabinet handles (on request)
                  · simple wiring &amp; plumbing
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section section--surface">
          <div className="container">
            <Reveal className="center-head">
              <span className="eyebrow">Our process</span>
              <h2>How a BINA+ project actually runs.</h2>
            </Reveal>
            <div className="steps">
              <Reveal className="step">
                <span className="step__num">01</span>
                <h3>Discovery &amp; site visit</h3>
                <p>
                  Free 60-min consultation. We visit your land or existing home, take measurements,
                  discuss budget and lifestyle.
                </p>
              </Reveal>
              <Reveal delay={1} className="step">
                <span className="step__num">02</span>
                <h3>Design &amp; 3D visualisation</h3>
                <p>
                  Layout drafts, moodboards and a walk-through 3D so you can see the home before a
                  single brick is laid.
                </p>
              </Reveal>
              <Reveal delay={2} className="step">
                <span className="step__num">03</span>
                <h3>Fixed-scope quote</h3>
                <p>
                  Itemised quotation with materials, labour, timeline and milestone payments —
                  signed before any work begins.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal className="cta-strip">
              <div>
                <span className="eyebrow" style={{ color: "rgba(246,239,234,.7)" }}>
                  Ready when you are
                </span>
                <h2 style={{ marginTop: 14 }}>Get a free feasibility note.</h2>
                <p>
                  Send us your land title or floor plan plus a rough budget. We&apos;ll come back
                  within one working day with a feasibility note and price band — no commitment.
                </p>
              </div>
              <div className="cta-strip__actions">
                <a
                  href={`https://wa.me/60193428981?text=${encodeURIComponent("Hi BINA+! I'd like a free feasibility note — I'm exploring your packages and would like to discuss my project.")}`}
                  className="btn btn--primary"
                >
                  Message us
                </a>
                <a href="mailto:bina.designbuild@gmail.com" className="btn btn--ghost">
                  Email us
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
