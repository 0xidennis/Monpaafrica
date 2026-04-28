"use client";

import Image from "next/image";

export default function TestimonialCard({
  text,
  name,
  role,
  image,
}: any) {
  return (
    <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[18px] w-full p-[24px]">

      {/* STARS */}
      <div className="text-[#F59E0B] text-[14px] mb-[14px] tracking-[2px]">
        ★★★★★
      </div>

      {/* TEXT */}
      <p className="text-[15px] leading-[1.7] text-[#334155] mb-[22px]">
        "{text}"
      </p>

      {/* USER */}
      <div className="flex items-center gap-[10px]">
        <Image
          src={image}
          alt={name}
          width={36}
          height={36}
          className="rounded-full object-cover"
        />

        <div>
          <p className="text-[14px] font-semibold text-[#0F172A]">
            {name}
          </p>
          <p className="text-[12px] text-[#64748B]">{role}</p>
        </div>
      </div>
    </div>
  );
}