"use client";
import { useEffect } from "react";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

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

      {/* Desktop nav links */}
      <ul className="nav-links">
        <li><a href="#how">How it works</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#stories">Stories</a></li>
        <li><Link href="/login" className="nav-cta">Get Started</Link></li>
      </ul>

      {/* Mobile hamburger button */}
      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
        <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
        <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
      </button>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="mobile-menu" onClick={() => setMenuOpen(false)}>
          <div className="mobile-menu-inner" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-links">
              <li> <a href="#how" onClick={() => setMenuOpen(false)}>How it works</a></li>
              <li> <a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
              <li><a href="#stories" onClick={() => setMenuOpen(false)}>Stories</a></li>
            </div>
            <Link href="/login" className="btn-primary mobile-menu-cta" onClick={() => setMenuOpen(false)}>
              Get Started
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M2.5 7.5h10M9 4l3.5 3.5L9 11" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
