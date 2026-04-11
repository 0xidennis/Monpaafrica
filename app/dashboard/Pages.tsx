
"use client"

import { useState } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import Topbar from "@/components/topbar/Topbar";
import Cards from "@/components/cards/Cards";
import Transactions from "@/components/transaction/Transaction";
import Notifications from "@/components/notification/Notification";
import Action from "@/components/action/Action"
import ActiveEscrow from "@/components/activeEscrow/ActiveEscrow"



export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [notif, setNotif] = useState(false);

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen text-[#0F172A]">

      <Sidebar />

      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/40 z-40 md:hidden" />
      )}

      <div className="flex-1 md:ml-[240px]">
        <Topbar setOpen={setOpen} setNotif={setNotif} />

        <div className="p-[22px] space-y-[22px]">
          <Cards />
          <Action/>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
          <Transactions />
        </div>
        <ActiveEscrow/>
      </div>
      </div>
      </div>

      {notif && <Notifications setNotif={setNotif} />}
    </div>
  );
}