export default function Features() {
  return (
    <section className="section" id="features">
      <div className="section-tag">Why Monpa</div>
      <h2 className="section-title">Everything you need to trade safely.</h2>
      <p className="section-sub">Built for the unique realities of Nigerian online commerce.</p>
      <div className="features-grid">
        <div className="feature-card reveal">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 2L4 6v6c0 5.5 3.5 9 8 11 4.5-2 8-5.5 8-11V6L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="feature-title">Secure Escrow Holding</div>
          <div className="feature-desc">Your money stays in a regulated escrow account until both sides are happy. Zero risk of disappearing cash.</div>
        </div>
        <div className="feature-card reveal reveal-delay-1">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 3l-9 4v5c0 5 4 9.5 9 11 5-1.5 9-6 9-11V7L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="feature-title">Neutral Dispute Resolution</div>
          <div className="feature-desc">If there&apos;s a disagreement, our team reviews evidence and mediates fairly — so neither party feels cheated.</div>
        </div>
        <div className="feature-card reveal reveal-delay-2">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="feature-title">Instant Payouts</div>
          <div className="feature-desc">Sellers receive their money within minutes of buyer confirmation — not days. Your time is money.</div>
        </div>
        <div className="feature-card reveal">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
              <path d="M9 7h6M9 11h6M9 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="feature-title">USSD &amp; Smartphone Ready</div>
          <div className="feature-desc">Whether on a smartphone or feature phone, Monpa works. Access via USSD — no data required.</div>
        </div>
        <div className="feature-card reveal reveal-delay-1">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="feature-title">Milestone Payments</div>
          <div className="feature-desc">Release funds in stages as work gets done. Perfect for freelancers, contractors, and big projects.</div>
        </div>
        <div className="feature-card reveal reveal-delay-2">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 6h16v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M4 6l2-3h12l2 3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="feature-title">Full Transaction Records</div>
          <div className="feature-desc">Every deal is timestamped and documented. A clear paper trail for your records or legal purposes.</div>
        </div>
      </div>
    </section>
  );
}
