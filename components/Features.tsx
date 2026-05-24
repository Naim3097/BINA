import Reveal from "./Reveal";

export default function Features() {
  return (
    <section className="section">
      <div className="container features">
        <Reveal className="features__visual">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/assets/bina close up.png" alt="BINA+ build detail close up" loading="lazy" />
        </Reveal>
        <div>
          <span className="eyebrow">Why BINA+</span>
          <h2 style={{ margin: "14px 0 28px" }}>
            One team, one contract,
            <br />
            one accountable build.
          </h2>
          <div className="features__list">
            <Reveal as="article" delay={1} className="dark-card">
              <span className="dark-card__num">01</span>
              <div>
                <h3>Structural integrity, by design</h3>
                <p>Engineered foundations and load-tested frameworks built to JKR &amp; MS standards.</p>
              </div>
            </Reveal>
            <Reveal as="article" delay={2} className="dark-card">
              <span className="dark-card__num">02</span>
              <div>
                <h3>Tropical-tuned thermal comfort</h3>
                <p>Cross-ventilation, insulation and sun-shading planned into every elevation.</p>
              </div>
            </Reveal>
            <Reveal as="article" delay={3} className="dark-card">
              <span className="dark-card__num">03</span>
              <div>
                <h3>Zero handover surprises</h3>
                <p>Fixed scope, fixed timeline. Variation orders signed off in writing — never on-site.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
