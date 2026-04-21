"use client";

export default function UseCases() {
  const cases = [
    {
      title: "Online Marketplace Sales",
      desc: "Buying on Jiji, Facebook, or Instagram shops? Pay through Monpa and only release funds when your item arrives.",
      emoji: "🛒",
      icon: (
        <svg viewBox="0 0 26 26" fill="none">
          <path d="M4 4h18l-2 10H6L4 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <circle cx="9" cy="21" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="18" cy="21" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M2 2h2l2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: "Freelance & Digital Work",
      desc: "Designers, developers, writers — get paid fairly. Clients pay upfront, you deliver, money releases automatically.",
      emoji: "💻",
      icon: (
        <svg viewBox="0 0 26 26" fill="none">
          <rect x="3" y="3" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 22h10M13 19v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M8 9l3 3-3 3M14 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Property & Rentals",
      desc: "Secure deposits safely. Landlords get proof of funds, tenants get protection until keys are handed over.",
      emoji: "🏠",
      icon: (
        <svg viewBox="0 0 26 26" fill="none">
          <path d="M3 22V10L13 3l10 7v12H3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M10 22v-6h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Import & Bulk Purchases",
      desc: "Monpa holds funds until your shipment clears — protecting both the importer and the exporter on every deal.",
      emoji: "📦",
      icon: (
        <svg viewBox="0 0 26 26" fill="none">
          <path d="M4 20V10l4-5h10l4 5v10H4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M4 10h18" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M13 10v10M9 14h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full py-[72px] sm:py-[96px] px-[5%] sm:px-[6%] bg-white">
      <div className="max-w-[1200px] mx-auto">

        {/* HEADER */}
        <div className="mb-12 sm:mb-14 max-w-[600px]">
          {/* Section tag */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-[2px] bg-blue-600 rounded-full"></div>
            <span className="text-[0.72rem] font-bold uppercase tracking-[0.1em] text-blue-600">Use Cases</span>
          </div>

          <h2 className="text-[1.6rem] sm:text-[2rem] lg:text-[2.4rem] font-extrabold tracking-[-0.03em] leading-[1.15] text-[#0f172a] mb-4">
            Made for how Nigerians actually trade.
          </h2>

          <p className="text-[0.95rem] text-[#64748b] leading-[1.75]">
            From Lagos markets to Abuja freelancers — Monpa protects every kind of deal.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          
          {cases.map((item, i) => (
            <div
              key={i}
              className="group bg-[#f8fafc] border border-[#e2e8f0] rounded-[18px] p-7 sm:p-8 flex items-start gap-5 sm:gap-6 transition-all duration-250 hover:-translate-y-[3px] hover:shadow-[0_16px_48px_rgba(37,99,235,0.08)] hover:border-blue-200 hover:bg-white"
            >
              
              {/* ICON */}
              <div className="w-[56px] h-[56px] bg-blue-50 border border-blue-100 rounded-[14px] flex items-center justify-center flex-shrink-0 transition-all duration-250 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:shadow-[0_4px_16px_rgba(37,99,235,0.3)]">
                <div className="w-[26px] h-[26px] text-blue-600 group-hover:text-white transition-colors duration-200">
                  {item.icon}
                </div>
              </div>

              {/* TEXT */}
              <div className="pt-1">
                <div className="font-bold text-[1.02rem] text-[#0f172a] mb-2 group-hover:text-blue-700 transition-colors duration-200">
                  {item.title}
                </div>
                <div className="text-[0.88rem] text-[#64748b] leading-[1.7]">
                  {item.desc}
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}