"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../context/Auth";
import Link from "next/link";

const RESEND_COOLDOWN = 60; // seconds

export default function VerifyOtpPage() {
  const { verifyOtp, resendOtp, pendingUserId, loading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Resolve userId: query param takes priority, fallback to context
  const userId = searchParams.get("userId") || pendingUserId || "";

  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [resending, setResending] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Countdown timer for resend
  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  const focusInput = (idx: number) => {
    inputRefs.current[idx]?.focus();
  };

  const handleChange = (idx: number, val: string) => {
    const digit = val.replace(/\D/g, "").slice(-1);
    const next = [...otp];
    next[idx] = digit;
    setOtp(next);
    setError("");
    if (digit && idx < 5) focusInput(idx + 1);
  };

  const handleKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (otp[idx]) {
        const next = [...otp];
        next[idx] = "";
        setOtp(next);
      } else if (idx > 0) {
        focusInput(idx - 1);
      }
    } else if (e.key === "ArrowLeft" && idx > 0) {
      focusInput(idx - 1);
    } else if (e.key === "ArrowRight" && idx < 5) {
      focusInput(idx + 1);
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pasted) return;
    const next = [...otp];
    pasted.split("").forEach((ch, i) => { next[i] = ch; });
    setOtp(next);
    focusInput(Math.min(pasted.length, 5));
  };

  const handleVerify = useCallback(async () => {
    const code = otp.join("");
    if (code.length < 6) {
      setError("Please enter all 6 digits.");
      return;
    }
    if (!userId) {
      setError("Session expired. Please sign up again.");
      return;
    }
    try {
      setVerifying(true);
      setError("");
      await verifyOtp(userId, code);
      setSuccess("Email verified! Redirecting to your dashboard…");
      setTimeout(() => router.push("/dashboard"), 1500);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Verification failed. Please try again.");
      setOtp(Array(6).fill(""));
      focusInput(0);
    } finally {
      setVerifying(false);
    }
  }, [otp, userId, verifyOtp, router]);

  const handleResend = async () => {
    if (!userId) {
      setError("Session expired. Please sign up again.");
      return;
    }
    try {
      setResending(true);
      setError("");
      await resendOtp(userId);
      setSuccess("A new OTP has been sent to your email.");
      setCooldown(RESEND_COOLDOWN);
      setOtp(Array(6).fill(""));
      focusInput(0);
      setTimeout(() => setSuccess(""), 4000);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Failed to resend OTP.");
    } finally {
      setResending(false);
    }
  };

  const allFilled = otp.every((d) => d !== "");

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-[#F8FAFC] text-[#0F172A]">

      {/* LEFT PANEL */}
      <div className="hidden md:flex relative flex-col justify-between p-[48px] bg-[#2563EB] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute -top-[80px] -right-[80px] w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,transparent_65%)]" />

        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-[10px] mb-[64px]">
            <div className="w-[36px] h-[36px] rounded-[9px] bg-white/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                <path d="M9 2L3 5.5V12.5L9 16L15 12.5V5.5L9 2Z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-[1.5rem] font-extrabold tracking-[-0.03em] text-white">monpa</span>
          </Link>

          {/* Shield icon */}
          <div className="w-[80px] h-[80px] rounded-[20px] bg-white/10 flex items-center justify-center mb-[32px] border border-white/20">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 4L6 10V22C6 29.7 12.3 36.8 20 38C27.7 36.8 34 29.7 34 22V10L20 4Z" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
              <path d="M14 20l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h1 className="text-[2.6rem] leading-[1.15] font-extrabold tracking-[-0.03em] text-white mb-[16px]">
            Almost there.<br />
            <span className="text-white/60">Verify your email.</span>
          </h1>

          <p className="text-[0.95rem] text-white/60 leading-[1.7] max-w-[360px] mb-[40px]">
            We sent a 6-digit code to your email address. Enter it to activate your account and start your first protected transaction.
          </p>

          <div className="flex flex-col gap-[14px] text-[0.88rem] text-white/85">
            {[
              "Code expires in 10 minutes",
              "Check your spam folder if not received",
              "Each code can only be used once",
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-[12px]">
                <div className="w-[22px] h-[22px] bg-white/15 rounded-[6px] flex items-center justify-center shrink-0">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex gap-[12px] flex-wrap">
          {["✓ CBN Compliant", "🔒 AES-256 Encrypted", "⚡ Instant Payouts"].map((t, i) => (
            <div key={i} className="px-[14px] py-[8px] rounded-[8px] bg-white/10 border border-white/15 text-[0.75rem] font-semibold text-white/80">{t}</div>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex items-center justify-center px-[40px] py-[48px]">
        <div className="w-full max-w-[420px]">

          {/* Header */}
          <div className="mb-[8px] flex items-center gap-[14px]">
            <div className="w-[48px] h-[48px] rounded-[14px] bg-[#EFF6FF] flex items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L4 6V14C4 18.4 7.4 22.5 12 23.5C16.6 22.5 20 18.4 20 14V6L12 2Z"
                  stroke="#2563EB" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M9 12l2 2 4-4" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h2 className="text-[1.8rem] font-extrabold tracking-[-0.03em] leading-[1.1]">Enter OTP</h2>
              <p className="text-[0.85rem] text-[#64748B] mt-[2px]">6-digit code sent to your email</p>
            </div>
          </div>

          <p className="text-[0.92rem] text-[#64748B] mb-[36px] mt-[8px]">
            Didn&apos;t receive it?{" "}
            {cooldown > 0 ? (
              <span className="text-[#94A3B8] font-medium">Resend in {cooldown}s</span>
            ) : (
              <button
                onClick={handleResend}
                disabled={resending}
                className="text-[#2563EB] font-semibold cursor-pointer bg-transparent border-none p-0 disabled:opacity-50 disabled:cursor-not-allowed hover:underline"
              >
                {resending ? "Sending…" : "Resend code"}
              </button>
            )}
          </p>

          {/* Error / Success banners */}
          {error && (
            <div className="flex items-center gap-[10px] bg-red-50 border border-red-200 text-red-600 text-[0.85rem] rounded-[10px] px-[14px] py-[12px] mb-[24px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                <circle cx="8" cy="8" r="7" stroke="#EF4444" strokeWidth="1.5" />
                <path d="M8 5v3.5M8 10.5v.5" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              {error}
            </div>
          )}
          {success && (
            <div className="flex items-center gap-[10px] bg-green-50 border border-green-200 text-green-700 text-[0.85rem] rounded-[10px] px-[14px] py-[12px] mb-[24px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                <circle cx="8" cy="8" r="7" stroke="#10B981" strokeWidth="1.5" />
                <path d="M5 8l2 2 4-4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {success}
            </div>
          )}

          {/* OTP Input Grid */}
          <div className="flex gap-[10px] justify-between mb-[32px]" onPaste={handlePaste}>
            {otp.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => { inputRefs.current[idx] = el; }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                onFocus={(e) => e.target.select()}
                id={`otp-input-${idx}`}
                className={[
                  "w-[52px] h-[60px] text-center text-[1.5rem] font-bold rounded-[12px]",
                  "border-[2px] outline-none transition-all duration-150",
                  "focus:border-[#2563EB] focus:bg-[#EFF6FF] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.12)]",
                  digit
                    ? "border-[#2563EB] bg-[#EFF6FF] text-[#2563EB]"
                    : "border-[#E2E8F0] bg-white text-[#0F172A]",
                  error ? "border-red-300 bg-red-50" : "",
                ].join(" ")}
              />
            ))}
          </div>

          {/* Verify Button */}
          <button
            id="verify-otp-btn"
            onClick={handleVerify}
            disabled={verifying || loading || !allFilled}
            className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-[0.95rem] py-[14px] rounded-[10px] flex items-center justify-center gap-[8px] transition-colors duration-150"
          >
            {verifying || loading ? (
              <>
                <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
                  <path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                </svg>
                Verifying…
              </>
            ) : (
              <>
                Verify Email
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </>
            )}
          </button>

          {/* Resend block */}
          <div className="mt-[20px] p-[16px] rounded-[12px] bg-[#F8FAFC] border border-[#E2E8F0] text-[0.82rem] text-[#64748B]">
            <div className="font-semibold text-[#0F172A] mb-[4px]">Didn&apos;t get the code?</div>
            <div className="mb-[10px]">Check your spam/junk folder. The code is valid for 10 minutes.</div>
            <button
              onClick={handleResend}
              disabled={resending || cooldown > 0}
              className="inline-flex items-center gap-[6px] text-[#2563EB] font-semibold text-[0.82rem] disabled:opacity-40 disabled:cursor-not-allowed hover:underline bg-transparent border-none p-0 cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1.5 7A5.5 5.5 0 1 1 7 12.5" stroke="#2563EB" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M1.5 4v3h3" stroke="#2563EB" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {cooldown > 0 ? `Resend available in ${cooldown}s` : resending ? "Sending new code…" : "Resend OTP"}
            </button>
          </div>

          <div className="text-center mt-[24px]">
            <Link href="/signup" className="text-[0.85rem] text-[#64748B] hover:text-[#2563EB] transition-colors">
              ← Back to sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
