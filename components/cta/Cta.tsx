"use client";

import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  const faces = [
    "photo-1531746020798-e6953c6e8e04",
    "photo-1507003211169-0a1dd7228f2d",
    "photo-1573497019940-1c28c88b4f3e",
    "photo-1522529599102-193c0d76b5b6",
    "photo-1539571696357-5a69c17a67c6",
  ];

  return (
    <section className="relative flex items-center justify-center min-h-[500px]  w-full  px-[5%] sm:px-[6%] text-center bg-[#0f172a] overflow-hidden ">

      {/* Background layers */}
      <div className="absolute inset-0  from-[#1e293b] via-[#0f172a] to-[#0f172a]"></div>

      {/* Subtle radial glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(37,99,235,0.12)_0%,transparent_65%)] blur-[20px]"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] opacity-60"></div>

      <div className="relative z-10 max-w-[640px] mx-auto">

        {/* Faces */}
        <div className="flex items-center justify-center mb-10">
          {faces.map((id, i) => (
            <div
              key={i}
              className={`relative w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] rounded-full overflow-hidden border-[2.5px] border-white/15 transition-transform duration-200 hover:scale-110 hover:z-10 ${i !== 0 ? "-ml-[10px]" : ""
                }`}
            >
              <Image
                src={`https://images.unsplash.com/${id}?w=100&h=100&fit=crop&crop=face`}
                alt="User"
                fill
                sizes="50px"
                className="object-cover object-top"
              />
            </div>
          ))}

          {/* Count */}
          <div className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] rounded-full bg-blue-600 border-[2.5px] border-white/15 flex items-center justify-center text-[0.7rem] sm:text-[0.75rem] font-bold text-white -ml-[10px]">
            240K+
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-white font-extrabold leading-[1.12] tracking-[-0.03em] text-[1.8rem] sm:text-[2.4rem] lg:text-[3rem] mb-5">
          Start trading <br />
          <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">without fear</span> today.
        </h2>

        {/* Subtext */}
        <p className="text-white/55 text-[0.95rem] sm:text-[1.02rem] leading-[1.75] max-w-[480px] mx-auto mb-10">
          Join over 240,000 Nigerians who&apos;ve made Monpa their go-to platform for safe transactions.
        </p>

        {/* Button */}
        <Link
          href="/login"
          className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[0.95rem] sm:text-[1rem] px-8 sm:px-10 py-[14px] sm:py-4 rounded-[12px] transition-all duration-200 hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] hover:-translate-y-[1px]"
        >
          Create a Free Account
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M2.5 7.5h10M9 4l3.5 3.5L9 11"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        {/* Note */}
        <p className="text-white/30 text-[0.78rem] mt-7 tracking-wide">
          No monthly fees. Pay only a small transaction fee when you close a deal.
        </p>
      </div>
    </section>
  );
}