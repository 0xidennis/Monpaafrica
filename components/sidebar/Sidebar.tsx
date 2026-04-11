"use client";

import { useState } from "react";



// ================= Sidebar =================
export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-[250px] bg-[#0B1A33] text-white flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 px-5 py-5 border-b border-white/10">
          <div className="w-6 h-6 bg-blue-500 rounded" />
          <span className="font-bold text-lg tracking-tight">monpa</span>
        </div>

        <div className="px-4 mt-6 text-[13px] space-y-1">
          <p className="text-white/40 text-[10px] tracking-widest">MAIN</p>
          <div className="bg-blue-600 px-3 py-2 rounded-lg font-medium">Dashboard</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg">New Escrow</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg flex justify-between">
            Transactions <span className="bg-white/20 text-[10px] px-2 rounded">4</span>
          </div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg">Wallet</div>

          <p className="text-white/40 text-[10px] mt-6 tracking-widest">SERVICES</p>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg">Bill Payments</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg">Crypto Escrow</div>

          <p className="text-white/40 text-[10px] mt-6 tracking-widest">ACCOUNT</p>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg">Settings</div>
        </div>
      </div>

      <div className="p-4 border-t border-white/10 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gray-400" />
        <div>
          <p className="text-sm">Adaeze Okonkwo</p>
          <p className="text-xs text-white/50">demo@monpa.ng</p>
        </div>
      </div>
    </div>
  );
}