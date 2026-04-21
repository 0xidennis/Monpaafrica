"use client"


import TestimonialCard from "./TestimonyCard";

export default function Testimonials() {
  return (
    <section className="bg-[#f8fafc] py-[72px] md:py-[96px]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="mb-[48px] max-w-[640px]">
          <p className="text-[12px] font-semibold tracking-[0.12em] text-[#2563EB] mb-[12px]">
            — TESTIMONIALS
          </p>

          <h2 className="text-[28px] md:text-[40px] font-extrabold tracking-[-0.02em] text-[#0f172a] leading-[1.2]">
            What our users are saying.
          </h2>

          <p className="mt-[12px] text-[15px] text-[#64748b] leading-[1.6]">
            Don’t take our word for it — hear it directly from the people Monpa has helped.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <TestimonialCard
            text="I was deceived twice buying phones online before Monpa. Now I don't release a kobo until I confirm the item is genuine. No more wahala, no more regret."
            name="Adaeze Okonkwo"
            role="Buyer · Port Harcourt"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
          />

          <TestimonialCard
            text="Clients used to ghost me after delivery. With Monpa, I know the money is locked in before I open Figma. I've tripled my freelance income this year."
            name="Taiwo Ibidapo"
            role="Freelancer · Lagos"
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200"
          />

          <TestimonialCard
            text="The milestone feature is a game-changer for our import business. We pay suppliers in stages, goods arrive safely, and everyone sleeps well at night."
            name="Bello Musa"
            role="Importer · Kano"
            image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200"
          />
        </div>

      </div>
    </section>
  );
}