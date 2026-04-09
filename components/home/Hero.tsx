import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid"></div>
      <div className="hero-orb"></div>

      <div className="hero-left">
        <div className="hero-badge">
          <div className="hero-badge-dot"></div>
          🇳🇬 Built for Nigeria
        </div>
        <h1>Trade with trust.<br />Pay with <em>confidence</em>.</h1>
        <p className="hero-desc">
          Monpa holds your money safe until both parties are satisfied. No more scammers. No more lost payments. Just secure, fair transactions — for every Nigerian.
        </p>
        <div className="hero-actions">
          <Link href="/login" className="btn-primary">
            Start an Escrow
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M2.5 7.5h10M9 4l3.5 3.5L9 11" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <a href="#how" className="btn-outline">See how it works</a>
        </div>
        {/* Social proof */}
        <div className="hero-social-proof">
          <div className="avatar-stack">
            <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face" alt="User" />
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" alt="User" />
            <img src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&h=80&fit=crop&crop=face" alt="User" />
            <img src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=80&h=80&fit=crop&crop=face" alt="User" />
          </div>
          <div className="social-proof-text">
            <strong>240,000+ Nigerians</strong> already trade safely with Monpa
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-visual">
          <div className="hero-photo-main">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=500&fit=crop&crop=top" alt="Nigerian businessman using phone" />
          </div>
          <div className="hero-photo-secondary">
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=320&fit=crop&crop=top" alt="Nigerian woman on phone" />
          </div>
          <div className="hero-photo-accent">
            <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=220&fit=crop&crop=center" alt="People trading online" />
          </div>
          {/* Floating escrow card */}
          <div className="hero-float-card">
            <div className="float-card-label">🔒 Escrow Active</div>
            <div className="float-card-amount">₦850,000</div>
            <div className="float-card-row" style={{ marginTop: '6px' }}>
              <div className="float-dot"></div>
              <span style={{ fontSize: '.7rem', color: 'var(--muted)' }}>Awaiting delivery confirm</span>
            </div>
          </div>
          {/* Floating review card */}
          <div className="hero-float-card2">
            <div className="float-rating">★★★★★</div>
            <div className="float-review-text">&quot;Got paid same day. No stress!&quot;</div>
            <div className="float-reviewer">
              <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=50&h=50&fit=crop&crop=face" alt="Reviewer" />
              <div className="float-reviewer-name">Emeka O. · Lagos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
