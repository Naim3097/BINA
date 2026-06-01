import Reveal from "./Reveal";

export default function CtaStrip() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal className="cta-strip">
          <div>
            <span className="eyebrow" style={{ color: "rgba(246,239,234,.7)" }}>
              Let&apos;s build
            </span>
            <h2 style={{ marginTop: 14 }}>
              Got land, ideas, or a renovation in mind?
            </h2>
            <p>
              Tell us your plot, budget and rough brief — we&apos;ll come back within one working
              day with a feasibility note and rough cost band.
            </p>
          </div>
          <div className="cta-strip__actions">
            <a
              href={`https://wa.me/60193428981?text=${encodeURIComponent("Hi BINA+! I'd like a feasibility note — I have a plot/brief I'd like to discuss.")}`}
              className="btn btn--primary"
            >
              Message us
            </a>
            <a href="mailto:bina.designbuild@gmail.com" className="btn btn--ghost">Email us</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
