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
    <section className="bg-black text-white min-h-[150vh] md:min-h-screen flex items-center justify-center py-20 md:py-32">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">

        {/* TEXT */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-[28px] sm:text-[34px] md:text-[52px] font-semibold leading-[1.1] tracking-[-0.02em]">
            Real Nigerians.
            <br />
            Real protection.
          </h1>

          <p className="mt-4 text-[14px] sm:text-[15px] md:text-[16px] text-gray-300 leading-[1.6]">
            Buyers, sellers, freelancers, landlords, and importers
            <br className="hidden md:block" />
            across 36 states are using Monpa to trade without fear.
          </p>
        </div>

        {/* AVATARS */}
        <div className="flex items-center justify-center md:justify-end gap-3 flex-wrap">
          {users.map((src, i) => (
            <div
              key={i}
              className="w-[50px] h-[50px] sm:w-[58px] sm:h-[58px] md:w-[64px] md:h-[64px] rounded-xl overflow-hidden"
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