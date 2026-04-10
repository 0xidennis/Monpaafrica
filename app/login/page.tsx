"use client";

import { useState } from "react";
import { useAuth } from "../context/Auth";

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
          <a href="#" className="logo-link">
            <div className="logo-icon">⬡</div>
            <span className="logo-text">monpa</span>
          </a>

          <h1>
            Trade safely.<br />
            <span>Pay with confidence.</span>
          </h1>

          <p>
            Nigeria's most trusted escrow platform. Your money stays protected until both parties are satisfied.
          </p>

          <div className="feats">
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
      <div className="right">
        <div className="fw">
          <h2 className="ftitle">Welcome back</h2>
          {error && <div className="ebox">{error}</div>}
          <p className="fsub">
            No account? <a href="#">Sign up free →</a>
          </p>

          {error && <div className="ebox on">{error}</div>}

          <div className="grp">
            <label className="lbl">Email address</label>
            <input
              className={`inp ${error ? "bad" : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div className="grp">
            <label className="lbl">Password</label>
            <input
              type="password"
              className={`inp ${error ? "bad" : ""}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
            />
          </div>

          <button className="sbtn" onClick={doLogin} disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
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
