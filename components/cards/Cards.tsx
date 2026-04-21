"use client"


export default function Cards() {
   return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-blue-600 text-white p-6 rounded-xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:20px_20px]" />
        <p className="text-[11px] opacity-80">WALLET BALANCE</p>
        <h2 className="text-[26px] font-bold mt-2">₦248,500</h2>
        <div className="flex gap-2 mt-4">
          <button className="bg-white/20 px-3 py-1 rounded text-[12px]">+ Fund</button>
          <button className="bg-white/20 px-3 py-1 rounded text-[12px]">Withdraw</button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border">
        <p className="text-[11px] text-gray-500">IN ESCROW</p>
        <h2 className="text-[26px] font-bold mt-2">₦1,250,000</h2>
        <div className="text-[13px] mt-2 space-y-1">
          <p className="flex justify-between"><span>• Active deals</span><span>3</span></p>
          <p className="flex justify-between"><span>• Completed</span><span>8</span></p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border">
        <p className="text-[11px] text-gray-500">TOTAL TRANSACTED</p>
        <h2 className="text-[26px] font-bold mt-2">₦4,820,000</h2>
        <div className="text-[13px] mt-2 space-y-1">
          <p className="flex justify-between"><span>• As buyer</span><span>₦2.1M</span></p>
          <p className="flex justify-between"><span>• As seller</span><span>₦2.7M</span></p>
        </div>
      </div>
    </div>
  );
}