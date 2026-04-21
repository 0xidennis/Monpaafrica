"use client"

// components/sections/Hero.tsx
import Image from "next/image";

const users = [
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200",
  "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=200",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200",
];

export default function Hero() {
  return (
    <section className="bg-black text-white h-500 ">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-[72px] md:py-[96px] flex  md:flex-row items-center justify-between gap-[48px]">

        {/* TEXT */}
        <div className="max-w-[520px]">
          <h1 className="text-[32px] md:text-[52px] leading-[1.1] font-[700] tracking-[-0.02em]">
            Real Nigerians.
            <br />
            Real protection.
          </h1>

          <p className="mt-[16px] text-[15px] md:text-[16px] leading-[1.6] text-gray-300">
            Buyers, sellers, freelancers, landlords, and importers across 36 states are using Monpa to trade without fear.
          </p>
        </div>

        {/* AVATAR ROW */}
        <div className="flex items-center gap-[12px]">
          {users.map((src, i) => (
            <div
              key={i}
              className="w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-[14px] overflow-hidden"
            >
              <Image
                src={src}
                alt="user"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}