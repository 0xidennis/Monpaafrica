"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/Auth";
import Sidebar from "@/components/sidebar/Sidebar";
import Topbar from "@/components/topbar/Topbar";
import Cards from "@/components/cards/Cards";
import Transactions from "@/components/transaction/Transaction";
import Notifications from "@/components/notification/Notification";
import Action from "@/components/action/Action";
import ActiveEscrow from "@/components/activeEscrow/ActiveEscrow";

export default function Dashboard() {
  const { token, loading } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [notif, setNotif] = useState(false);

  useEffect(() => {
    if (!loading && !token) {
      router.push("/login");
    }
  }, [loading, token, router]);

  // Show nothing while checking auth or if not logged in
  if (loading || !token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
        <div className="flex flex-col items-center gap-3">
          <svg className="animate-spin" width="32" height="32" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#E2E8F0" strokeWidth="3" />
            <path d="M12 2a10 10 0 0 1 10 10" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <p className="text-sm text-[#64748B] font-medium">Loading your dashboard…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen text-[#0F172A]">
      <Sidebar open={open} setOpen={setOpen} />

      <div className="flex-1 md:ml-[250px]">
        <Topbar setOpen={setOpen} setNotif={setNotif} />

        <div className="p-4 sm:p-[22px] space-y-[22px]">
          <Cards />
          <Action />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <Transactions />
            </div>
            <ActiveEscrow />
          </div>
        </div>
      </div>

      {notif && <Notifications setNotif={setNotif} />}
    </div>
  );
}