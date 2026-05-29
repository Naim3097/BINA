import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services & Packages — BINA+ Design & Build",
  description:
    "Design and build, renovation and interior design packages from BINA+. Single-storey homes from RM200k, double-storey from RM460k, renovations from RM100k. Includes 3D design, project management and free gifts.",
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
    description: "Turnkey packages from RM100k. Fixed scope, fixed price, fixed timeline.",
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
      offers: { "@type": "Offer", price: "19999", priceCurrency: "MYR" },
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
                      <p className="tier__tag">For smaller homes.</p>
                    </div>
                    <div className="tier__spec">~1,200 sqft · Single-storey</div>
                    <div className="tier__price"><small>FROM</small><strong>RM200k</strong></div>
                    <a href="https://wa.me/60193428981" className="tier__cta">Enquire →</a>
                    <ul className="tier__feats">
                      <li>Design &amp; build</li>
                      <li>Layout planning</li>
                      <li>Cost-efficient build</li>
                    </ul>
                    <p className="tier__note">First-time homeowners</p>
                  </div>
                  <div className="tier tier--featured">
                    <div className="tier__badge">Most Popular</div>
                    <div className="tier__head">
                      <span className="tier__name">BINA PLUS</span>
                      <p className="tier__tag">Space, value &amp; comfort.</p>
                    </div>
                    <div className="tier__spec">~1,500 sqft · Semi-double</div>
                    <div className="tier__price"><small>FROM</small><strong>RM350k</strong></div>
                    <a href="https://wa.me/60193428981" className="tier__cta">Enquire →</a>
                    <ul className="tier__feats">
                      <li>Enhanced space planning</li>
                      <li>Premium materials</li>
                      <li>Priority management</li>
                    </ul>
                    <p className="tier__note">Top pick for families</p>
                  </div>
                  <div className="tier">
                    <div className="tier__head">
                      <span className="tier__name">BINA MAX</span>
                      <p className="tier__tag">Luxury, fully maximised.</p>
                    </div>
                    <div className="tier__spec">~2,000 sqft · Double-storey</div>
                    <div className="tier__price"><small>FROM</small><strong>RM460k</strong></div>
                    <a href="https://wa.me/60193428981" className="tier__cta">Enquire →</a>
                    <ul className="tier__feats">
                      <li>Custom design</li>
                      <li>High-end finishes</li>
                      <li>Dedicated consultant</li>
                    </ul>
                    <p className="tier__note">For those who want the best</p>
                  </div>
                </div>
                <div className="tier-footer">
                  <div className="tier-footer__stat"><span className="tier-footer__num">50+</span><span>Homes built</span></div>
                  <div className="tier-footer__stat"><span className="tier-footer__num">Certified</span><span>engineers &amp; contractors</span></div>
                  <div className="tier-footer__stat"><span className="tier-footer__num">Weekly</span><span>updates &amp; site photos</span></div>
                </div>
                <div className="gifts-strip">
                  <strong>Free gifts included with every package:</strong>{" "}
                  3D design · installation wiring · quotation · 8ft table top · downlight fittings
                  · sink &amp; hood installation · smart lock · fan fittings · safety door · site visit
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
                <h2>Upgrade what&apos;s already yours.</h2>
                <div className="svc__price"><small>From</small>RM100,000</div>
                <p className="lead">
                  From a single-room refresh to full-home transformations. Three tiers, each with a
                  defined scope so you know exactly what to expect.
                </p>
                <div className="tier-grid">
                  <div className="tier">
                    <div className="tier__head">
                      <span className="tier__name">RM100k</span>
                      <p className="tier__tag">Focused refresh.</p>
                    </div>
                    <div className="tier__spec">1–2 area renovation</div>
                    <div className="tier__price"><small>FROM</small><strong>RM100k</strong></div>
                    <a href="https://wa.me/60193428981" className="tier__cta">Enquire →</a>
                    <ul className="tier__feats">
                      <li>Basic finishes &amp; carpentry</li>
                      <li>1 wet or dry area</li>
                      <li>Standard materials</li>
                    </ul>
                    <p className="tier__note">Room upgrades</p>
                  </div>
                  <div className="tier tier--featured">
                    <div className="tier__badge">Most Popular</div>
                    <div className="tier__head">
                      <span className="tier__name">RM200k</span>
                      <p className="tier__tag">Modern living upgrade.</p>
                    </div>
                    <div className="tier__spec">Kitchen + living + carpentry</div>
                    <div className="tier__price"><small>FROM</small><strong>RM200k</strong></div>
                    <a href="https://wa.me/60193428981" className="tier__cta">Enquire →</a>
                    <ul className="tier__feats">
                      <li>Kitchen &amp; living</li>
                      <li>Built-in carpentry</li>
                      <li>Plumbing &amp; M&amp;E</li>
                    </ul>
                    <p className="tier__note">Most chosen</p>
                  </div>
                  <div className="tier">
                    <div className="tier__head">
                      <span className="tier__name">RM300k</span>
                      <p className="tier__tag">Full home reset.</p>
                    </div>
                    <div className="tier__spec">Whole-home renovation</div>
                    <div className="tier__price"><small>FROM</small><strong>RM300k</strong></div>
                    <a href="https://wa.me/60193428981" className="tier__cta">Enquire →</a>
                    <ul className="tier__feats">
                      <li>Complete interior overhaul</li>
                      <li>Premium finishes</li>
                      <li>Structural updates</li>
                    </ul>
                    <p className="tier__note">Full transformation</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal as="article" className="svc" delay={2}>
              <div className="svc__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80&auto=format&fit=crop"
                  alt="Interior design"
                  loading="lazy"
                />
              </div>
              <div className="svc__body" id="interior" style={{ marginTop: 24 }}>
                <span className="eyebrow">03 · Interior Design</span>
                <h2>Design-only, if that&apos;s all you need.</h2>
                <div className="svc__price"><small>From</small>RM19,999</div>
                <p className="lead">
                  For homeowners who want a polished design package they can hand to their own
                  contractor — or just to visualise before committing.
                </p>
                <ul className="svc__list">
                  <li>Layout planning &amp; space optimisation</li>
                  <li>Moodboard &amp; concept direction</li>
                </ul>
                <div className="tier-grid tier-grid--2">
                  <div className="tier">
                    <div className="tier__head">
                      <span className="tier__name">7-in-1</span>
                      <p className="tier__tag">Design starter.</p>
                    </div>
                    <div className="tier__spec">Key rooms covered</div>
                    <div className="tier__price"><small>FROM</small><strong>RM49,999</strong></div>
                    <a href="https://wa.me/60193428981" className="tier__cta">Enquire →</a>
                    <ul className="tier__feats">
                      <li>3D visualisation</li>
                      <li>Technical drawings</li>
                      <li>Material &amp; colour selection</li>
                    </ul>
                    <p className="tier__note">New homeowners</p>
                  </div>
                  <div className="tier tier--featured">
                    <div className="tier__badge">Best Value</div>
                    <div className="tier__head">
                      <span className="tier__name">9-in-1</span>
                      <p className="tier__tag">Full interior solution.</p>
                    </div>
                    <div className="tier__spec">Complete home coverage</div>
                    <div className="tier__price"><small>FROM</small><strong>RM59,999</strong></div>
                    <a href="https://wa.me/60193428981" className="tier__cta">Enquire →</a>
                    <ul className="tier__feats">
                      <li>Everything in 7-in-1</li>
                      <li>Full documentation set</li>
                      <li>Site coordination support</li>
                      <li>9 design categories covered</li>
                    </ul>
                    <p className="tier__note">Includes contractor handover pack</p>
                  </div>
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
                <a href="https://wa.me/60193428981" className="btn btn--primary">
                  WhatsApp Najiha
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
