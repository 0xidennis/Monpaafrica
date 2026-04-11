"use client";

import { useState } from "react";
import { useAuth } from "../context/Auth";
import Link from "next/link";

// HYBRID EXACT CLONE: original CSS preserved + React logic
export default function LoginPage() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const clearErr = () => setError("");

  const doLogin = async () => {
    clearErr();

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    try {
      setLoading(true);

      await login(email, password);

      window.location.href = "/dashboard";
    } catch (err) {

      setLoading(false);
    }
  };

  return (
    <div className="wrap">
      {/* LEFT */}
      <div className="left">
        <div className="lg"></div>
        <div className="orb o1"></div>
        <div className="orb o2"></div>

        <div className="lc">
          <Link href="/" className="logo-link flex items-center gap-2 mb-6">
            <div className="logo-icon bg-black "><svg width="20" height="20" viewBox="0 0 18 18" fill="none"><path d="M9 2L3 5.5V12.5L9 16L15 12.5V5.5L9 2Z" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/></svg></div>
           <span className="logo-text">monpa</span>
          </Link>

          <h1>
            Trade safely.<br />
            <span>Pay with confidence.</span>
          </h1>

          <p className=" opacity-50">
            Nigeria's most trusted escrow platform. Your money stays protected until both parties are satisfied.
          </p>

          <div className="feats opacity-60">
            <div className="feat">✔ Free to join — pay per transaction only</div>
            <div className="feat">✔ Bank-grade encryption on every deal</div>
            <div className="feat">✔ Disputes resolved within 48 hours</div>
            <div className="feat">✔ Instant payout once buyer confirms</div>
          </div>
        </div>

        <div className="lb">
          <div className="dbox">
            <div className="dlabel">Demo credentials — click to auto-fill</div>
            <div className="dcreds">
              <div className="dfield">
                <div className="dfl">Email</div>
                <div className="dfv">[EMAIL_ADDRESS]</div>
              </div>
              <div className="dfield">
                <div className="dfl">Password</div>
                <div className="dfv">password123</div>
              </div>
            </div>
            <button className="dbtn" >
              Use Demo Account & Sign In
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="right ">
        <div className="fw ">
          <h2 className="ftitle text-3xl font-bold ">Welcome back</h2>
          {error && <div className="ebox">{error}</div>}
          <p className="fsub text-gray-400">
            No account?<span className="text-blue-500 hover:underline font-bold"> <Link href="/signup">Sign up free →</Link></span>
          </p>

          {error && <div className="ebox on">{error}</div>}

          <div className="grp">
            <label className="lbl text-sm font-bold">Email address</label>
            <input
              className={`inp ${error ? "bad" : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div className="grp">
            <label className="lbl text-sm font-bold">Password</label>
            <input
              type="password"
              className={`inp ${error ? "bad" : ""}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
            />
          </div>
          <div>
            <Link href="/forgot-password" className="text-sm text-blue-500 hover:underline font-bold float-right">
              Forgot password?
            </Link>
          </div>

          <button className="sbtn" onClick={doLogin} disabled={loading}>
            {loading ? "Signing in..." : "Sign in →"}
          </button>
          <div className="text-center ">
          <p><Link href="/"> Back to homepage</Link></p>
        </div>
        </div>
        
      </div>

      {/* EXACT CSS CLONE */}
      <style jsx global>{`
        *{box-sizing:border-box;margin:0;padding:0}
        body{font-family:'Plus Jakarta Sans',sans-serif;background:#F8FAFC;color:#0F172A}
        .wrap{min-height:100vh;display:grid;grid-template-columns:1fr 1fr}
        @media(max-width:768px){.wrap{grid-template-columns:1fr}}

        .left{background:#2563EB;position:relative;padding:48px;color:#fff}
        @media(max-width:768px){.left{display:none}}

        .lg{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px);background-size:40px 40px}

        .orb{position:absolute;border-radius:50%}
        .o1{bottom:-80px;left:-80px;width:360px;height:360px;background:radial-gradient(circle,rgba(255,255,255,.14),transparent)}
        .o2{top:-50px;right:-30px;width:240px;height:240px;background:radial-gradient(circle,rgba(255,255,255,.08),transparent)}

        .logo-text{font-size:1.5rem;font-weight:800}
        h1{font-size:2.4rem;font-weight:800;margin:20px 0}
        h1 span{opacity:.6}

        .feats{margin-top:20px}
        .feat{margin-bottom:8px;font-size:.9rem}

        .dbox{margin-top:40px;background:rgba(0,0,0,.2);padding:16px;border-radius:12px}

        .right{display:flex;align-items:center;justify-content:center;padding:40px}
        .fw{width:100%;max-width:400px}

        .inp{width:100%;padding:12px;border:1px solid #E2E8F0;border-radius:8px;margin-top:6px}
        .bad{border-color:#EF4444}

        .sbtn{width:100%;margin-top:16px;background:#2563EB;color:#fff;padding:14px;border-radius:10px}

        .ebox{background:#FEE2E2;padding:10px;border-radius:8px;margin-bottom:10px}
      `}</style>
    </div>
  );
}
