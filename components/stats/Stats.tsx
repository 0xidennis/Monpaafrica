"use client";

import { useEffect, useRef } from "react";

export default function TrustAndStats() {
  const counters = useRef<(HTMLSpanElement | null)[]>([]);

  // Count-up animation
  useEffect(() => {
    counters.current.forEach((el) => {
      if (!el) return;

      const target = Number(el.getAttribute("data-target"));
      let count = 0;
      const speed = target / 50;

      const update = () => {
        count += speed;
        if (count < target) {
          el.innerText = Math.floor(count).toString();
          requestAnimationFrame(update);
        } else {
          el.innerText = target.toString();
        }
      };

      update();
    });
  }, []);

  return (
    <div className="w-full">

      {/* ================= TRUST STRIP ================= */}
      <div className="w-full bg-[rgba(255,255,255,.12)] border-y">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between overflow-x-auto whitespace-nowrap">

            {/* ITEM */}
            <div className="flex items-center">
              <div className="flex items-center gap-2 py-3 px-4 text-sm font-semibold text-gray-700">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L2 3.5V7c0 3 2.5 5.3 5 6 2.5-.7 5-3 5-6V3.5L7 1Z" stroke="#93C5FD" strokeWidth="1.2" strokeLinejoin="round"/>
                </svg>
                <span>Bank-Grade Encryption</span>
              </div>
              <div className="w-px h-5 bg-gray-200" />
            </div>

            <div className="flex items-center">
              <div className="flex items-center gap-2 py-3 px-4 text-sm font-semibold text-gray-700">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7l3.5 3.5L12 3" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>CBN Compliant</span>
              </div>
              <div className="w-px h-5 bg-gray-200" />
            </div>

            <div className="flex items-center">
              <div className="flex items-center gap-2 py-3 px-4 text-sm font-semibold text-gray-700">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="5.5" stroke="#FCD34D" strokeWidth="1.2"/>
                  <path d="M7 4v3l2 1.5" stroke="#FCD34D" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                <span>Instant Payouts</span>
              </div>
              <div className="w-px h-5 bg-gray-200" />
            </div>

            <div className="flex items-center">
              <div className="flex items-center gap-2 py-3 px-4 text-sm font-semibold text-gray-700">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v4M7 9v4M1 7h4M9 7h4" stroke="#F9A8D4" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                <span>Dispute Resolution</span>
              </div>
              <div className="w-px h-5 bg-gray-200" />
            </div>

            <div className="flex items-center">
              <div className="flex items-center gap-2 py-3 px-4 text-sm font-semibold text-gray-700">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="2" y="2" width="10" height="12" rx="2" stroke="#6EE7B7" strokeWidth="1.2"/>
                  <path d="M5 6h4M5 9h2" stroke="#6EE7B7" strokeWidth="1" strokeLinecap="round"/>
                </svg>
                <span>Works on any phone</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= STATS ================= */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <div className="flex justify-center mb-3 text-gray-700">
              <svg viewBox="0 0 22 22" fill="none" className="w-6 h-6">
                <path d="M11 2L3 6V11c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6L11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-2xl font-bold">
              ₦
              <span ref={(el) => (counters.current[0] = el)} data-target="12">0</span>
              B+
            </div>
            <p className="text-sm text-gray-500 mt-1">Total transactions secured</p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <div className="flex justify-center mb-3 text-gray-700">
              <svg viewBox="0 0 22 22" fill="none" className="w-6 h-6">
                <path d="M2 11l5.5 5.5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-2xl font-bold">
              <span ref={(el) => (counters.current[1] = el)} data-target="98">0</span>%
            </div>
            <p className="text-sm text-gray-500 mt-1">Dispute resolution rate</p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <div className="flex justify-center mb-3 text-gray-700">
              <svg viewBox="0 0 22 22" fill="none" className="w-6 h-6">
                <circle cx="9" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M2 19c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="text-2xl font-bold">
              <span ref={(el) => (counters.current[2] = el)} data-target="240">0</span>K+
            </div>
            <p className="text-sm text-gray-500 mt-1">Nigerians protected</p>
          </div>

        </div>
      </div>

    </div>
  );
}