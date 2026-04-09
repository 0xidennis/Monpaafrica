export default function UseCases() {
  return (
    <section className="section" id="usecases">
      <div className="section-tag">Use Cases</div>
      <h2 className="section-title">Made for how Nigerians actually trade.</h2>
      <p className="section-sub">From Lagos markets to Abuja freelancers — Monpa protects every kind of deal.</p>
      <div className="use-cases">
        <div className="use-case-card reveal">
          <div className="use-case-icon">
            <svg viewBox="0 0 26 26" fill="none">
              <path d="M4 4h18l-2 10H6L4 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <circle cx="9" cy="21" r="1.5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="18" cy="21" r="1.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M2 2h2l2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div className="use-case-title">Online Marketplace Sales</div>
            <div className="use-case-desc">Buying on Jiji, Facebook, or Instagram shops? Pay through Monpa and only release funds when your item arrives.</div>
          </div>
        </div>
        <div className="use-case-card reveal reveal-delay-1">
          <div className="use-case-icon">
            <svg viewBox="0 0 26 26" fill="none">
              <rect x="3" y="3" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 22h10M13 19v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M8 9l3 3-3 3M14 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <div className="use-case-title">Freelance &amp; Digital Work</div>
            <div className="use-case-desc">Designers, developers, writers — get paid fairly. Clients pay upfront, you deliver, money releases automatically.</div>
          </div>
        </div>
        <div className="use-case-card reveal">
          <div className="use-case-icon">
            <svg viewBox="0 0 26 26" fill="none">
              <path d="M3 22V10L13 3l10 7v12H3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M10 22v-6h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <div className="use-case-title">Property &amp; Rentals</div>
            <div className="use-case-desc">Secure deposits safely. Landlords get proof of funds, tenants get protection until keys are handed over.</div>
          </div>
        </div>
        <div className="use-case-card reveal reveal-delay-1">
          <div className="use-case-icon">
            <svg viewBox="0 0 26 26" fill="none">
              <path d="M4 20V10l4-5h10l4 5v10H4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M4 10h18" stroke="currentColor" strokeWidth="1.5" />
              <path d="M13 10v10M9 14h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div className="use-case-title">Import &amp; Bulk Purchases</div>
            <div className="use-case-desc">Monpa holds funds until your shipment clears — protecting both the importer and the exporter on every deal.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
