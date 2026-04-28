"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/Auth";
import Link from "next/link";

export default function RegisterPage() {
  const { signup, loading, loginWithGoogle } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPw, setShowPw] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      setError("");

      if (!form.username || !form.email || !form.password) {
        return setError("All fields are required");
      }

      const result = await signup(form.email, form.password, form.username);

      // Redirect to OTP verification
      const userId = result?.userId || result?.user?.id || result?.data?.userId;
      if (userId) {
        router.push(`/verify-otp?userId=${userId}`);
      } else {
        router.push("/verify-otp");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  const pw = form.password;

  const strength = (() => {
    let s = 0;
    if (pw.length >= 6) s++;
    if (pw.length >= 10) s++;
    if (/[A-Z]/.test(pw) && /[0-9]/.test(pw)) s++;
    if (/[^A-Za-z0-9]/.test(pw)) s++;
    return s;
  })();

  const labels = ["Enter a password", "Too short", "Weak", "Fair", "Strong"];

  const bar = (i: number) => {
    if (pw.length === 0) return "bg-[#E2E8F0]";
    if (i >= strength) return "bg-[#E2E8F0]";
    if (strength <= 1) return "bg-[#EF4444]";
    if (strength === 2) return "bg-[#F59E0B]";
    return "bg-[#10B981]";
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-[#F8FAFC] text-[#0F172A]">

      {/* LEFT */}
      <div className="hidden md:flex relative flex-col justify-center bg-[#2563EB] overflow-hidden px-[64px] py-[48px]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute -top-[80px] -right-[80px] w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,transparent_65%)]"></div>
        <div className="absolute -bottom-[60px] -left-[60px] w-[280px] h-[280px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.07)_0%,transparent_65%)]"></div>

        {/* Inner content — max-width keeps text from stretching wall to wall */}
        <div className="relative z-10 w-full max-w-[400px] mx-auto flex flex-col">

          {/* Logo */}
          <a className="flex items-center gap-[10px] mt-[10px] mt-[-40px] w-max">
            <div className="w-[36px] h-[36px] rounded-[9px] flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                <path d="M9 2L3 5.5V12.5L9 16L15 12.5V5.5L9 2Z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-[1.5rem] font-extrabold tracking-[-0.03em] text-white">monpa</span>
          </a>

          {/* Headline */}
          <h1 className="text-[2.4rem] leading-[1.15] font-extrabold tracking-[-0.03em] text-white mb-[14px]">
            Join 240,000+<br />
            <span className="text-white/60">Nigerians trading safely.</span>
          </h1>

          {/* Subtext */}
          <p className="text-[0.95rem] text-white/60 leading-[1.7] mb-[40px]">
            Create your free account in under 2 minutes and start your first protected transaction today.
          </p>

          {/* Feature list */}
          <div className="flex flex-col gap-[14px] text-[0.88rem] text-white/85 mb-[56px]">
            {[
              "Free to sign up — pay only per transaction",
              "Bank-grade encryption on every deal",
              "Instant payouts once buyer confirms",
              "Dispute resolution within 48 hours",
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

          {/* Badges */}
          <div className="flex gap-[10px] flex-wrap">
            {["✓ CBN Compliant", "🔒 AES-256 Encrypted", "⚡ Instant Payouts"].map((t, i) => (
              <div key={i} className="px-[14px] py-[8px] rounded-[8px] bg-white/10 border border-white/15 text-[0.75rem] font-semibold text-white/80">{t}</div>
            ))}
          </div>

        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center justify-center px-[40px] py-[48px]">
        <div className="w-full max-w-[420px]">
          <h2 className="text-[1.8rem] font-extrabold tracking-[-0.03em] mb-[8px]">Create your account</h2>
          <p className="text-[0.92rem] text-[#64748B] mb-[32px]">
            Already have an account?{" "}
            <Link href="/login" className="text-[#2563EB] font-semibold cursor-pointer">Sign in</Link>
          </p>

          {error && <p className="text-red-500 text-sm mb-[16px]">{error}</p>}

          <div className="flex flex-col gap-[16px]">

            {/* Name row */}
            <div className="grid grid-cols-2 gap-[14px]">
              <div className="flex flex-col gap-[6px]">
                <label className="text-[0.78rem] font-semibold text-[#374151]">First name</label>
                <input
                  className="p-[12px_16px] border-[1.5px] border-[#E2E8F0] rounded-[10px] focus:outline-none focus:border-[#2563EB] transition-colors"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="Chidi"
                />
              </div>
              <div className="flex flex-col gap-[6px]">
                <label className="text-[0.78rem] font-semibold text-[#374151]">Last name</label>
                <input
                  className="p-[12px_16px] border-[1.5px] border-[#E2E8F0] rounded-[10px] focus:outline-none focus:border-[#2563EB] transition-colors"
                  name="lastname"
                  value={form.lastname}
                  onChange={handleChange}
                  placeholder="Okonkwo"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-[6px]">
              <label className="text-[0.78rem] font-semibold text-[#374151]">Email address</label>
              <input
                className="w-full p-[12px_16px] border-[1.5px] border-[#E2E8F0] rounded-[10px] focus:outline-none focus:border-[#2563EB] transition-colors"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-[6px]">
              <label className="text-[0.78rem] font-semibold text-[#374151]">Phone number</label>
              <input
                className="w-full p-[12px_16px] border-[1.5px] border-[#E2E8F0] rounded-[10px] focus:outline-none focus:border-[#2563EB] transition-colors"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="0801 234 5678"
              />
            </div>

            {/* Use case */}
            <div className="flex flex-col gap-[6px]">
              <label className="text-[0.78rem] font-semibold text-[#374151]">Main use case</label>
              <select
                className="w-full p-[12px_16px] border-[1.5px] border-[#E2E8F0] rounded-[10px] focus:outline-none focus:border-[#2563EB] transition-colors appearance-none bg-[url('data:image/svg+xml,%3Csvg width=12 height=8 viewBox=0 0 12 8 fill=none xmlns=http://www.w3.org/2000/svg%3E%3Cpath d=M1 1l5 5 5-5 stroke=%2364748B stroke-width=1.5 stroke-linecap=round stroke-linejoin=round/%3E%3C/svg%3E')] bg-no-repeat bg-[right_14px_center]"
                name="usecase"
                onChange={handleChange}
              >
                <option>Select your main use case</option>
                <option>Buy goods &amp; services online</option>
                <option>Sell goods &amp; services online</option>
                <option>Freelance &amp; get paid for work</option>
                <option>Trade cryptocurrency</option>
                <option>All of the above</option>
              </select>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-[6px]">
              <label className="text-[0.78rem] font-semibold text-[#374151]">Password</label>
            <div className="relative">
              <input
                type={showPw ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full p-[12px_16px] border-[1.5px] border-[#E2E8F0] rounded-[10px] focus:outline-none focus:border-[#2563EB] transition-colors"
                placeholder="Create a strong password"
              />
              <span onClick={() => setShowPw(!showPw)} className="absolute right-[14px] top-1/2 -translate-y-1/2 cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5Z" stroke="#CBD5E1" strokeWidth="1.2" />
                  <circle cx="8" cy="8" r="2" stroke="#CBD5E1" strokeWidth="1.2" />
                </svg>
              </span>
            </div>

            <div className="flex gap-[4px] mt-[8px]">
              {[0, 1, 2, 3].map(i => (
                <div key={i} className={`h-[3px] flex-1 rounded ${bar(i)}`} />
              ))}
            </div>

            <p className="text-[0.72rem] text-[#64748B] mt-[4px]">{labels[strength]}</p>
          </div>{/* end password group */}

            {/* Terms checkbox */}
            <div className="flex items-start gap-[10px] text-[0.8rem] text-[#64748B]">
              <input type="checkbox" defaultChecked className="mt-[3px] accent-[#2563EB]" />
              <p>I agree to <span className="text-[#2563EB] font-semibold">Terms of Service</span> and <span className="text-[#2563EB] font-semibold">Privacy Policy</span>.</p>
            </div>

          </div>{/* end flex-col gap container */}

          <div className="mt-[24px]">
          <button
            className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-[0.95rem] py-[14px] rounded-[10px] flex items-center justify-center gap-[8px] disabled:opacity-60 disabled:cursor-not-allowed"
            onClick={handleSignup}
            disabled={loading}
          >
            {loading ? "Creating..." : "Create free account"}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          </div>

          <div className="text-center mt-[16px]"
          >
            {/* Divider */}
            <div className="flex items-center gap-[12px] mb-[16px]">
              <div className="flex-1 h-[1px] bg-[#E2E8F0]" />
              <span className="text-[0.72rem] text-[#94A3B8] font-semibold tracking-wide">OR CONTINUE WITH</span>
              <div className="flex-1 h-[1px] bg-[#E2E8F0]" />
            </div>

            {/* Google Button */}
            <button
              id="google-signup-btn"
              onClick={loginWithGoogle}
              className="w-full flex items-center justify-center gap-[10px] py-[12px] px-[16px] border-[1.5px] border-[#E2E8F0] rounded-[10px] bg-white hover:border-[#2563EB] hover:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] transition-all duration-150 font-semibold text-[0.9rem] text-[#0F172A] cursor-pointer"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z" fill="#4285F4"/>
                <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" fill="#34A853"/>
                <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z" fill="#FBBC05"/>
                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            <Link href="/" className="inline-block mt-[16px] text-[0.85rem] text-[#64748B] hover:text-[#2563EB] transition-colors">
              ← Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
