export default function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="trust-item">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 1L2 3.5V7c0 3 2.5 5.3 5 6 2.5-.7 5-3 5-6V3.5L7 1Z" stroke="#93C5FD" strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
        <strong>Bank-Grade Encryption</strong>
      </div>
      <div className="t-divider"></div>
      <div className="trust-item">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7l3.5 3.5L12 3" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <strong>CBN Compliant</strong>
      </div>
      <div className="t-divider"></div>
      <div className="trust-item">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="7" r="5.5" stroke="#FCD34D" strokeWidth="1.2" />
          <path d="M7 4v3l2 1.5" stroke="#FCD34D" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        <strong>Instant Payouts</strong>
      </div>
      <div className="t-divider"></div>
      <div className="trust-item">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 1v4M7 9v4M1 7h4M9 7h4" stroke="#F9A8D4" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        <strong>Dispute Resolution</strong>
      </div>
      <div className="t-divider"></div>
      <div className="trust-item">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <rect x="2" y="2" width="10" height="12" rx="2" stroke="#6EE7B7" strokeWidth="1.2" />
          <path d="M5 6h4M5 9h2" stroke="#6EE7B7" strokeWidth="1" strokeLinecap="round" />
        </svg>
        <strong>Works on any phone</strong>
      </div>
    </div>
  );
}
