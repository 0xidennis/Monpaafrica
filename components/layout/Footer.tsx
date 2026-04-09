import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <Link href="/" className="footer-logo">
            <div className="footer-logo-icon">
              <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
                <path d="M9 2L3 5.5V12.5L9 16L15 12.5V5.5L9 2Z" stroke="#93C5FD" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
            mon<span>pa</span>
          </Link>
          <p className="footer-desc">
            Monpa is Nigeria's leading escrow platform — keeping buyers and sellers safe, one transaction at a time.
          </p>
          <div className="cbn-badge">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 5l2.5 2.5L9 2" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            CBN Compliant
          </div>
        </div>
        <div className="footer-col">
          <h4>Product</h4>
          <ul className="footer-links">
            <li><Link href="#">How it Works</Link></li>
            <li><Link href="#">Pricing</Link></li>
            <li><Link href="#">API for Businesses</Link></li>
            <li><Link href="#">USSD Access</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul className="footer-links">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Press</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <ul className="footer-links">
            <li><Link href="#">Help Centre</Link></li>
            <li><Link href="#">Contact Us</Link></li>
            <li><Link href="#">Terms of Service</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Monpa Technologies Ltd. All rights reserved. RC: 1234567</p>
        <p>Funds held in partnership with licensed financial institutions.</p>
      </div>
    </footer>
  );
}