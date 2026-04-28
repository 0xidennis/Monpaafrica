"use client";

import { useState } from "react";
import { useAuth } from "../context/Auth";
import Link from "next/link";

// HYBRID EXACT CLONE: original CSS preserved + React logic
export default function LoginPage() {
  const { login, loginWithGoogle } = useAuth();

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
            <div className="logo-icon bg-black "><svg width="20" height="20" viewBox="0 0 18 18" fill="none"><path d="M9 2L3 5.5V12.5L9 16L15 12.5V5.5L9 2Z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"/></svg></div>
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

          {/* Divider */}
          <div style={{display:"flex",alignItems:"center",gap:"12px",margin:"20px 0"}}>
            <div style={{flex:1,height:"1px",background:"#E2E8F0"}} />
            <span style={{fontSize:"0.78rem",color:"#94A3B8",fontWeight:600}}>OR CONTINUE WITH</span>
            <div style={{flex:1,height:"1px",background:"#E2E8F0"}} />
          </div>

          {/* Google Sign-in Button */}
          <button
            id="google-signin-btn"
            onClick={loginWithGoogle}
            style={{
              width:"100%",display:"flex",alignItems:"center",justifyContent:"center",
              gap:"10px",padding:"12px 16px",border:"1.5px solid #E2E8F0",borderRadius:"10px",
              background:"#fff",cursor:"pointer",fontFamily:"inherit",fontWeight:600,
              fontSize:"0.9rem",color:"#0F172A",transition:"border-color 0.15s,box-shadow 0.15s"
            }}
            onMouseEnter={e=>{
              (e.currentTarget as HTMLButtonElement).style.borderColor="#2563EB";
              (e.currentTarget as HTMLButtonElement).style.boxShadow="0 0 0 3px rgba(37,99,235,0.1)";
            }}
            onMouseLeave={e=>{
              (e.currentTarget as HTMLButtonElement).style.borderColor="#E2E8F0";
              (e.currentTarget as HTMLButtonElement).style.boxShadow="none";
            }}
          >
            {/* Google SVG logo */}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" fill="#34A853"/>
              <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z" fill="#EA4335"/>
            </svg>
            Continue with Google
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
        @media(max-width:480px){.right{padding:24px 16px}}
        .fw{width:100%;max-width:400px}

        .inp{width:100%;padding:12px;border:1px solid #E2E8F0;border-radius:8px;margin-top:6px;font-size:16px}
        .bad{border-color:#EF4444}

        .sbtn{width:100%;margin-top:16px;background:#2563EB;color:#fff;padding:14px;border-radius:10px;font-size:0.95rem;font-weight:600;border:none;cursor:pointer}

        .ebox{background:#FEE2E2;padding:10px;border-radius:8px;margin-bottom:10px}

        h1{font-size:clamp(1.6rem,4vw,2.4rem)}
      `}</style>
    </div>
  );
}
