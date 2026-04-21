"use client";

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
    <section className="bg-black text-white h-400 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex items-center justify-between">

        {/* TEXT */}
        <div className="max-w-xl">
          <h1 className="text-[34px] md:text-[52px] font-semibold leading-[1.1] tracking-[-0.02em]">
            Real Nigerians.
            <br />
            Real protection.
          </h1>

          <p className="mt-4 text-[15px] md:text-[16px] text-gray-300 leading-[1.6]">
            Buyers, sellers, freelancers, landlords, and importers
            <br />
            across 36 states are using Monpa to trade without fear.
          </p>
        </div>

        {/* AVATARS */}
        <div className="flex items-center gap-3">
          {users.map((src, i) => (
            <div
              key={i}
              className="w-[58px] h-[58px] md:w-[64px] md:h-[64px] rounded-xl overflow-hidden"
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