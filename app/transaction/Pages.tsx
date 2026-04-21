// app/page.tsx
"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import TransactionTopbar from "@/components/topbar/TransactionTopbar";
import TransactionsTable from "@/components/transactiontable/TransactionTable";

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <div className="flex-1 md:ml-[240px]">
        <TransactionTopbar setOpen={setOpen} />

        <div className="p-5">
          <TransactionsTable />
        </div>
      </div>

    </div>
  );
}