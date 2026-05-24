import Reveal from "./Reveal";

export default function Steps() {
  return (
    <section className="section section--surface">
      <div className="container">
        <Reveal className="center-head">
          <span className="eyebrow">How it works</span>
          <h2>Four steps to your new home.</h2>
        </Reveal>
        <div className="steps">
          <Reveal className="step">
            <span className="step__num">01</span>
            <h3>Site visit</h3>
            <p>
              We come to your land or existing property, assess plot conditions, orientation and
              access, and give you an honest on-the-spot feasibility read.
            </p>
          </Reveal>
          <Reveal delay={1} className="step">
            <span className="step__num">02</span>
            <h3>Consultation &amp; design</h3>
            <p>
              Armed with site data, we develop your brief into a moodboard, spatial layout and 3D
              visuals — a design you can walk through before a single brick is laid.
            </p>
          </Reveal>
          <Reveal delay={2} className="step">
            <span className="step__num">03</span>
            <h3>Construction</h3>
            <p>
              Our in-house build team takes over with weekly photo updates, certified site
              supervision and zero subcontractor confusion.
            </p>
          </Reveal>
          <Reveal delay={3} className="step">
            <span className="step__num">04</span>
            <h3>Finishing &amp; handover</h3>
            <p>
              We hand over a fully finished home with snag list closed, warranties documented and
              a 12-month defect liability period.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
