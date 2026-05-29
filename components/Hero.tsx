import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="hero" id="main-hero">
      <div className="container hero__grid">
        <Reveal className="hero__copy">
          <span className="eyebrow">Design · Build · Live</span>
          <h1>
            Turnkey homes from <em style={{ color: "var(--brand)", fontStyle: "normal" }}>RM200k</em>, designed and built in{" "}
            <em style={{ color: "var(--brand)", fontStyle: "normal" }}>under 6 months</em>.
          </h1>
          <p className="lead">
            BINA+ is a Shah Alam–based design-and-build studio. We plan, design and construct
            refined single-storey, semi-double and double-storey homes — with a single team
            accountable from sketch to handover.
          </p>
          <div className="hero__cta">
            <a href="#contact" className="btn btn--primary">Leave a request</a>
            <a href="/services" className="btn btn--secondary">Explore packages</a>
          </div>
          <div className="hero__stats">
            <Reveal delay={1} className="stat">
              <span className="stat__num">12+</span>
              <span className="stat__lbl">years of combined experience</span>
            </Reveal>
            <Reveal delay={2} className="stat">
              <span className="stat__num">85+</span>
              <span className="stat__lbl">homes delivered across Selangor</span>
            </Reveal>
            <Reveal delay={3} className="stat">
              <span className="stat__num">100%</span>
              <span className="stat__lbl">on-time, fixed-scope delivery</span>
            </Reveal>
          </div>
        </Reveal>

        <Reveal delay={1} className="hero__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/assets/inear grey house 6.png"
            alt="Modern double-storey design-and-build home with warm timber accents"
            fetchPriority="high"
          />
          <a href="tel:+60193428981" className="hero__chip">+60 19-342 8981</a>
          <div className="hero__badge">
            <strong>BINA MAX</strong>
            <span>Double-storey · approx 2,000 sqft · from RM460k</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
