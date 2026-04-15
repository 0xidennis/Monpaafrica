"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex bg-bg min-h-screen text-ink">
      
      <Sidebar open={open} setOpen={setOpen} />

      <div className="flex-1 md:ml-[240px]">
        <TransTopbar setOpen={setOpen} />

        <div className="p-5 space-y-5">

          {/* HERO */}
          <div className="bg-white border rounded-xl p-6">
            <div className="flex justify-between flex-wrap gap-4">

              <div>
                <p className="text-xs text-muted">
                  #ESC-2847 · Nov 18, 2024
                </p>

                <h2 className="text-lg font-bold mt-1">
                  iPhone 15 Pro Max 256GB — Space Black
                </h2>

                <span className="text-xs bg-blue/10 text-blue px-3 py-1 rounded-full mt-2 inline-block">
                  Active — Step 3 of 4
                </span>
              </div>

              <div className="text-right">
                <h2 className="text-2xl font-bold text-blue">
                  ₦850,000
                </h2>
                <p className="text-xs text-muted">In escrow</p>
              </div>
            </div>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-[1fr_300px] gap-4">

            {/* LEFT */}
            <div className="space-y-4">

              {/* PROGRESS */}
              <div className="bg-white border rounded-xl">
                <div className="p-4 border-b font-semibold text-sm">
                  Progress
                </div>

                <div className="p-4 space-y-4 text-sm">

                  <div className="text-green">
                    ✔ Deal created
                  </div>

                  <div className="text-green">
                    ✔ Deal accepted
                  </div>

                  <div className="text-green">
                    ✔ Payment funded
                  </div>

                  <div className="text-blue font-semibold">
                    ● Awaiting delivery
                  </div>

                  <div className="text-gray-400">
                    ○ Payment released
                  </div>

                </div>
              </div>

              {/* DETAILS */}
              <div className="bg-white border rounded-xl p-4 grid grid-cols-2 gap-3 text-sm">

                <div>
                  <p className="text-xs text-muted">Category</p>
                  <p className="font-semibold">Electronics</p>
                </div>

                <div>
                  <p className="text-xs text-muted">Deadline</p>
                  <p className="font-semibold">Nov 21</p>
                </div>

                <div>
                  <p className="text-xs text-muted">Inspection</p>
                  <p className="font-semibold">48 hours</p>
                </div>

                <div>
                  <p className="text-xs text-muted">Fee</p>
                  <p className="font-semibold">₦12,750</p>
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="space-y-4">

              {/* ACTIONS */}
              <div className="bg-white border rounded-xl p-4 space-y-3">

                <button className="w-full bg-green text-white py-3 rounded font-semibold">
                  Release Payment
                </button>

                <button className="w-full border border-red text-red py-2 rounded">
                  Raise Dispute
                </button>

                <p className="text-xs text-muted text-center">
                  Only release after verifying item
                </p>

              </div>

              {/* SELLER */}
              <div className="bg-white border rounded-xl p-4">
                <p className="font-semibold mb-2">Seller</p>

                <div className="flex items-center gap-3">
                  <img
                    src="https://i.pravatar.cc/100"
                    className="w-10 h-10 rounded-full"
                  />

                  <div>
                    <p className="font-semibold text-sm">
                      Tunde Okafor
                    </p>
                    <p className="text-xs text-muted">
                      4.9 rating
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}