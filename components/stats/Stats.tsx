"use client";

import { useEffect, useRef } from "react";

export default function TrustAndStats() {
  const counters = useRef<(HTMLSpanElement | null)[]>([]);

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
      <div className="w-full bg-[#0f172a] border-y border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 py-3 overflow-x-auto">
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 min-w-max sm:min-w-0 sm:flex-wrap">

            {/* ITEM */}
            {[
              "Bank-Grade Encryption",
              "CBN Compliant",
              "Instant Payouts",
              "Dispute Resolution",
              "Works on any phone",
            ].map((text, i) => (
              <div key={i} className="flex items-center">
                <div className="flex items-center gap-2 py-2 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-white whitespace-nowrap">
                  {/* ICONS */}
                  {i === 0 && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1L2 3.5V7c0 3 2.5 5.3 5 6 2.5-.7 5-3 5-6V3.5L7 1Z" stroke="#BFDBFE" strokeWidth="1.2" />
                    </svg>
                  )}
                  {i === 1 && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7l3.5 3.5L12 3" stroke="#86EFAC" strokeWidth="1.5" />
                    </svg>
                  )}
                  {i === 2 && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="5.5" stroke="#FDE68A" strokeWidth="1.2" />
                      <path d="M7 4v3l2 1.5" stroke="#FDE68A" strokeWidth="1.2" />
                    </svg>
                  )}
                  {i === 3 && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v4M7 9v4M1 7h4M9 7h4" stroke="#FBCFE8" strokeWidth="1.2" />
                    </svg>
                  )}
                  {i === 4 && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <rect x="2" y="2" width="10" height="12" rx="2" stroke="#A7F3D0" strokeWidth="1.2" />
                    </svg>
                  )}

                  <span>{text}</span>
                </div>

                {i !== 4 && <div className="w-px h-5 bg-white/20 hidden sm:block" />}
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* ================= STATS ================= */}
      <div className="w-full">
        <div className="w-full max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-b border-gray-200">

            {/* CARD */}
            {[
              { label: "Total transactions secured", prefix: "₦", suffix: "B+", value: 12 },
              { label: "Dispute resolution rate", prefix: "", suffix: "%", value: 98 },
              { label: "Nigerians protected", prefix: "", suffix: "K+", value: 240 },
            ].map((stat, i) => (
              <div
                key={i}
                className="
                  relative text-center p-8 sm:p-6 bg-white
                  border-b sm:border-b-0 sm:border-r last:border-r-0 last:border-b-0
                  border-gray-200
                  group
                "
              >

                {/* ICON */}
                <div className="flex justify-center mb-3 text-gray-700">
                  {i === 0 && (
                    <svg viewBox="0 0 22 22" className="w-6 h-6">
                      <path d="M11 2L3 6V11c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6L11 2Z" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  )}
                  {i === 1 && (
                    <svg viewBox="0 0 22 22" className="w-6 h-6">
                      <path d="M2 11l5.5 5.5L20 5" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  )}
                  {i === 2 && (
                    <svg viewBox="0 0 22 22" className="w-6 h-6">
                      <circle cx="9" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M2 19c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  )}
                </div>

                {/* NUMBER */}
                <div className="text-3xl sm:text-2xl font-bold">
                  {stat.prefix}
                  <span ref={(el) => { counters.current[i] = el }} data-target={stat.value}>0</span>
                  {stat.suffix}
                </div>

                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>

                {/* HOVER BLUE LINE */}
                <div className="
                  absolute bottom-0 left-0 h-[2px] w-0
                  bg-blue-600 transition-all duration-300
                  group-hover:w-full
                " />

              </div>
            ))}

          </div>
        </div>
      </div>

    </div>
  );
}