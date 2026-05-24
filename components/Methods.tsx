import Reveal from "./Reveal";

export default function Methods() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="center-head">
          <span className="eyebrow">Flexible financing</span>
          <h2>We work with how you pay.</h2>
        </Reveal>
        <div className="method-grid">
          <Reveal className="method method--light">
            <span className="method__num">01 · Loan</span>
            <h3>Bank financing</h3>
            <p>
              We partner with Malaysian banks for housing loans up to 90% LVR with progressive
              disbursement.
            </p>
          </Reveal>
          <Reveal delay={1} className="method method--dark">
            <span className="method__num">02 · Stages</span>
            <h3>Staged payments</h3>
            <p>Pay in milestone-based stages tied to work-in-progress certified by our QS team.</p>
          </Reveal>
          <Reveal delay={2} className="method method--dark">
            <span className="method__num">03 · KWSP</span>
            <h3>EPF Account 2 withdrawal</h3>
            <p>We handle the paperwork for KWSP withdrawals to fund your build deposit.</p>
          </Reveal>
          <Reveal delay={3} className="method method--brand">
            <span className="method__num">04 · Direct</span>
            <h3>Direct transfer</h3>
            <p>Corporate accounts welcome — full SST-compliant invoicing and tax receipts.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
