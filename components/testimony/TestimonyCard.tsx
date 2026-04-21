"use client";

import Image from "next/image";

export default function TestimonialCard({
  text,
  name,
  role,
  image,
}: {
  text: string;
  name: string;
  role: string;
  image: string;
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-[16px] p-[24px] shadow-sm">

      {/* STARS */}
      <div className="text-[#F59E0B] text-[14px] mb-[16px] tracking-[2px]">
        ★★★★★
      </div>

      {/* TEXT */}
      <p className="text-[15px] leading-[1.7] text-[#64748b] mb-[24px]">
        {text}
      </p>

      {/* USER */}
      <div className="flex items-center gap-[12px]">
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />

        <div>
          <p className="text-[14px] font-semibold text-[#0f172a]">
            {name}
          </p>
          <p className="text-[12px] text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
