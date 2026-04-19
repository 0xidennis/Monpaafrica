"use client";

export default function How() {
  return (
    <section className="section section-alt" id="how">
      <div className="section-tag">How it works</div>
      <h2 className="section-title">Simple, safe, and fast — every time.</h2>
      <p className="section-sub">Monpa removes the trust problem from online trade. Here&apos;s exactly how a deal unfolds.</p>
      <div className="steps ">
        <div className="step ">
          <div className="step-num">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9h12M9 4l5 5-5 5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="step-title">Create a deal</div>
          <div className="step-desc">Both parties agree on terms — price, item, and delivery window — and set up an escrow deal on Monpa.</div>
        </div>
        <div className="step  ">
          <div className="step-num">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="4" width="14" height="10" rx="2" stroke="#fff" strokeWidth="1.5" />
              <path d="M2 8h14" stroke="#fff" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="step-title">Buyer deposits</div>
          <div className="step-desc">The buyer pays into Monpa&apos;s secure escrow via bank transfer or card. Funds are locked — nobody can touch them yet.</div>
        </div>
        <div className="step  ">
          <div className="step-num">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2L3 5.5V12.5L9 16L15 12.5V5.5L9 2Z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="step-title">Seller delivers</div>
          <div className="step-desc">The seller ships goods or completes the service, knowing the money is held and waiting for them.</div>
        </div>
        <div className="step ">
          <div className="step-num">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 9.5l4.5 4.5L16 5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="step-title">Funds released</div>
          <div className="step-desc">Once the buyer confirms they&apos;re satisfied, Monpa instantly releases funds to the seller. Fair and done.</div>
        </div>
      </div>
    </section>
  );
}
