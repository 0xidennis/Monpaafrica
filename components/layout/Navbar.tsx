import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/" className="logo">
        <div className="logo-icon">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 2L3 5.5V12.5L9 16L15 12.5V5.5L9 2Z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M9 2V16M3 5.5L15 12.5M15 5.5L3 12.5" stroke="#fff" strokeWidth="1" strokeOpacity=".5" />
          </svg>
        </div>
        mon<span>pa</span>
      </Link>
      <ul className="nav-links">
        <li><a href="#how">How it works</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#stories">Stories</a></li>
        <li><Link href="/Login" className="nav-cta">Get Started</Link></li>
      </ul>
    </nav>
  );
}
