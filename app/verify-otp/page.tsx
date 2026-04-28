"use client";

import { Suspense } from "react";
import VerifyOtpPage from "./Pages";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
          <div className="text-center px-6">
            <svg
              className="animate-spin mx-auto mb-4"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="rgba(37,99,235,0.2)"
                strokeWidth="3"
              />
              <path
                d="M12 2a10 10 0 0 1 10 10"
                stroke="#2563EB"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-[0.9rem] text-[#64748B]">Loading…</p>
          </div>
        </div>
      }
    >
      <VerifyOtpPage />
    </Suspense>
  );
}
