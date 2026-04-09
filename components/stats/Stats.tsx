'use client';

import { useEffect, useRef } from 'react';

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const start = performance.now();
            const duration = 1800;
            const step = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              el.textContent = String(Math.round(eased * target));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="stat-num">
      {suffix === '%' ? '' : '₦'}
      <span ref={spanRef}>0</span>
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <div className="stats">
      <div className="stat-card reveal">
        <div className="stat-icon">
          <svg viewBox="0 0 22 22" fill="none">
            <path d="M11 2L3 6V11c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6L11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        </div>
        <CountUp target={12} suffix="B+" />
        <div className="stat-label">Total transactions secured</div>
      </div>
      <div className="stat-card reveal reveal-delay-1">
        <div className="stat-icon">
          <svg viewBox="0 0 22 22" fill="none">
            <path d="M2 11l5.5 5.5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <CountUp target={98} suffix="%" />
        <div className="stat-label">Dispute resolution rate</div>
      </div>
      <div className="stat-card reveal reveal-delay-2">
        <div className="stat-icon">
          <svg viewBox="0 0 22 22" fill="none">
            <circle cx="9" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
            <path d="M2 19c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M16 11c1.66 0 3 .9 3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M14 6a2.5 2.5 0 0 1 0 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <CountUp target={240} suffix="K+" />
        <div className="stat-label">Nigerians protected</div>
      </div>
    </div>
  );
}
