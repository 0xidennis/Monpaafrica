"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../../context/Auth";

export const dynamic = "force-dynamic";

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { handleGoogleCallback } = useAuth();
  const [status, setStatus] = useState<"loading" | "error">("loading");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    // Backend may return token + user as query params after OAuth redirect
    // Common patterns: ?token=xxx&user=... or ?token=xxx (user fetched separately)
    const token = searchParams.get("token");
    const userParam = searchParams.get("user");
    const error = searchParams.get("error");

    if (error) {
      setErrorMsg(decodeURIComponent(error));
      setStatus("error");
      return;
    }

    if (!token) {
      setErrorMsg("Authentication failed — no token received.");
      setStatus("error");
      return;
    }

    try {
      let user = { id: "", email: "" };
      if (userParam) {
        user = JSON.parse(decodeURIComponent(userParam));
      }
      handleGoogleCallback(token, user);
      router.replace("/dashboard");
    } catch {
      setErrorMsg("Failed to process authentication response.");
      setStatus("error");
    }
  }, [searchParams, handleGoogleCallback, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
      <div className="text-center  px-6">
        {status === "loading" ? (
          <>
            {/* Spinner */}
            <div className="mx-auto mb-6  rounded-[18px] bg-[#EFF6FF] flex items-center justify-center">
              <svg
                className="animate-spin"
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
            </div>
            <h2 className="text-[1.4rem] font-extrabold tracking-[-0.02em] text-[#0F172A] mb-2">
              Signing you in…
            </h2>
            <p className="text-[0.9rem] text-[#64748B]">
              Please wait while we complete your Google sign-in.
            </p>
          </>
        ) : (
          <>
            {/* Error state */}
            <div className="mx-auto mb-6  rounded-[18px] bg-red-50 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#EF4444" strokeWidth="1.8" />
                <path
                  d="M12 8v4.5M12 15v.5"
                  stroke="#EF4444"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h2 className="text-[1.4rem] font-extrabold tracking-[-0.02em] text-[#0F172A] mb-2">
              Authentication failed
            </h2>
            <p className="text-[0.9rem] text-[#64748B] mb-6">{errorMsg}</p>
            <a
              href="/login"
              className="inline-flex items-center gap-2 bg-[#2563EB] text-white font-bold text-[0.9rem] px-6 py-3 rounded-[10px] hover:bg-[#1D4ED8] transition-colors"
            >
              ← Back to Login
            </a>
          </>
        )}
      </div>
    </div>
  );
}
