"use client"
import Image from 'next/image'

export default function Stories() {
  return (
    <section className="section" id="stories">
      <div className="section-tag">Real stories</div>
      <h2 className="section-title">Nigerians just like you, trading safely.</h2>
      <p className="section-sub">From Port Harcourt to Kano — Monpa is protecting real deals every day.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Wide card */}
        <div className="story-card sm:col-span-2 lg:col-span-2 relative h-[280px] sm:h-[350px] lg:h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop&crop=top"
            alt="Chidi the buyer"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white z-20">
            <span className="story-tag">Buyer</span>
            <div className="story-name">Chidi A. — Port Harcourt</div>
            <div className="story-detail">&quot;I bought a ₦1.2M laptop through Monpa. The seller knew his money was locked in, so he delivered on time. I confirmed it worked — he got paid instantly. Zero wahala.&quot;</div>
          </div>
        </div>
        {/* Regular card */}
        <div className="story-card relative h-[280px] sm:h-[350px] lg:h-[400px]">
          <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop&crop=top" alt="Amaka the freelancer" className="object-cover w-full h-full" />
          <div className="story-overlay"></div>
          <div className="story-content">
            <span className="story-tag">Freelancer</span>
            <div className="story-name">Amaka T. — Lagos</div>
            <div className="story-detail">&quot;I design brand identities. Monpa&apos;s milestone payments mean I get 50% upfront, 50% on delivery. I haven&apos;t had a client ghost me in 8 months.&quot;</div>
          </div>
        </div>
        {/* Regular card */}
        <div className="story-card relative h-[280px] sm:h-[350px] lg:h-[400px]">
          <img src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&h=500&fit=crop&crop=top" alt="Bello the importer" className="object-cover w-full h-full" />
          <div className="story-overlay"></div>
          <div className="story-content">
            <span className="story-tag">Importer</span>
            <div className="story-name">Bello M. — Kano</div>
            <div className="story-detail">&quot;We import electronics from China. Monpa holds 60% until goods clear customs. Our suppliers love the guarantee. Our CFO loves the paper trail.&quot;</div>
          </div>
        </div>
        {/* Regular card */}
        <div className="story-card relative h-[280px] sm:h-[350px] lg:h-[400px]">
          <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop&crop=top" alt="Ngozi the landlord" className="object-cover w-full h-full" />
          <div className="story-overlay"></div>
          <div className="story-content">
            <span className="story-tag">Property</span>
            <div className="story-name">Ngozi E. — Abuja</div>
            <div className="story-detail">&quot;I rent out two flats in Maitama. Monpa handles deposit and rent collection. Tenants trust it, I trust it. No more arguments at handover.&quot;</div>
          </div>
        </div>
      </div>
    </section>
  );
}
