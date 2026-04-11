"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/Auth";
import Link from "next/link";

export default function RegisterPage() {
  const { signup, loading } = useAuth();
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
      <div className="hidden md:flex relative flex-col justify-between p-[48px] bg-[#2563EB] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute -top-[80px] -right-[80px] w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,transparent_65%)]"></div>

        <div className="relative z-10">
          <a className="flex items-center gap-[10px] mb-[64px]">
            <div className="w-[36px] h-[36px] rounded-[9px] bg-white/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                <path d="M9 2L3 5.5V12.5L9 16L15 12.5V5.5L9 2Z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-[1.5rem] font-extrabold tracking-[-0.03em] text-white">monpa</span>
          </a>

          <h1 className="text-[2.6rem] leading-[1.15] font-extrabold tracking-[-0.03em] text-white mb-[16px]">
            Join 240,000+<br />
            <span className="text-white/60">Nigerians trading safely.</span>
          </h1>

          <p className="text-[0.95rem] text-white/60 leading-[1.7] max-w-[360px] mb-[40px]">
            Create your free account in under 2 minutes and start your first protected transaction today.
          </p>

          <div className="flex flex-col gap-[14px] text-[0.88rem] text-white/85">
            {[
              "Free to sign up — pay only per transaction",
              "Bank-grade encryption on every deal",
              "Instant payouts once buyer confirms",
              "Dispute resolution within 48 hours"
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-[12px]">
                <div className="w-[22px] h-[22px] bg-white/15 rounded-[6px] flex items-center justify-center">
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

      {/* RIGHT */}
      <div className="flex items-center justify-center px-[40px] py-[48px]">
        <div className="w-full max-w-[420px]">
          <h2 className="text-[1.8rem] font-extrabold tracking-[-0.03em] mb-[8px]">Create your account</h2>
          <p className="text-[0.92rem] text-[#64748B] mb-[32px]">
            Already have an account?{" "}
            <Link href="/login" className="text-[#2563EB] font-semibold cursor-pointer">Sign in</Link>
          </p>

          {error && <p className="text-red-500 text-sm mb-[16px]">{error}</p>}

          <div className="grid grid-cols-2 gap-[16px] mb-[18px]">
            <input
              className="p-[12px_16px] border-[1.5px] border-[#E2E8F0] rounded-[10px]"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Chidi"
            />
            <input
              className="p-[12px_16px] border-[1.5px] border-[#E2E8F0] rounded-[10px]"
              name="lastname"
              value={form.lastname}
              onChange={handleChange}
              placeholder="Okonkwo"
            />
          </div>

          <input
            className="w-full p-[12px_16px] border-[1.5px] border-[#E2E8F0] rounded-[10px] mb-[18px]"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
          <input
            className="w-full p-[12px_16px] border-[1.5px] border-[#E2E8F0] rounded-[10px] mb-[18px]"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="0801 234 5678"
          />

          <select
            className="w-full p-[12px_16px] border-[1.5px] border-[#E2E8F0] rounded-[10px] mb-[18px] appearance-none bg-[url('data:image/svg+xml,%3Csvg width=12 height=8 viewBox=0 0 12 8 fill=none xmlns=http://www.w3.org/2000/svg%3E%3Cpath d=M1 1l5 5 5-5 stroke=%2364748B stroke-width=1.5 stroke-linecap=round stroke-linejoin=round/%3E%3C/svg%3E')] bg-no-repeat bg-[right_14px_center]"
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

          <div className="mb-[8px]">
            <div className="relative">
              <input
                type={showPw ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full p-[12px_16px] border-[1.5px] border-[#E2E8F0] rounded-[10px]"
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
          </div>

          <div className="flex items-start gap-[10px] mb-[20px] text-[0.8rem] text-[#64748B]">
            <input type="checkbox" defaultChecked className="mt-[3px] accent-[#2563EB]" />
            <p>I agree to <span className="text-[#2563EB] font-semibold">Terms of Service</span> and <span className="text-[#2563EB] font-semibold">Privacy Policy</span>.</p>
          </div>

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

          <div className="text-center mt-[16px]">
            <Link href="/" className="text-[0.85rem] text-[#64748B] hover:text-[#2563EB] transition-colors">
              ← Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
