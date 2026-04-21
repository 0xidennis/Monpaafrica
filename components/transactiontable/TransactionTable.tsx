// components/TransactionsTable.tsx
"use client";

import { useState } from "react";

const transactions = [
  {
    id: 1,
    name: "Tunde Okafor",
    title: "iPhone 15 Pro Max",
    amount: "₦850,000",
    role: "buyer",
    status: "active",
    date: "Nov 18, 2024",
    avatar: "https://i.pravatar.cc/100?u=1",
  },
  {
    id: 2,
    name: "Aisha Bello",
    title: "Laptop",
    amount: "₦320,000",
    role: "seller",
    status: "pending",
    date: "Nov 17, 2024",
    avatar: "https://i.pravatar.cc/100?u=2",
  },
  {
    id: 3,
    name: "John Doe",
    title: "Car",
    amount: "₦2,500,000",
    role: "buyer",
    status: "complete",
    date: "Nov 16, 2024",
    avatar: "https://i.pravatar.cc/100?u=3",
  },
  {
    id: 4,
    name: "Jane Smith",
    title: "Phone",
    amount: "₦150,000",
    role: "seller",
    status: "dispute",
    date: "Nov 15, 2024",
    avatar: "https://i.pravatar.cc/100?u=4",
  },
];

export default function TransactionsTable() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? transactions
      : transactions.filter((t) => t.status === filter);

  const badge = (status: string) => {
    switch (status) {
      case "active":
        return "bg-blueLight text-blue";
      case "pending":
        return "bg-amber/10 text-amber";
      case "complete":
        return "bg-green/10 text-green";
      case "dispute":
        return "bg-red/10 text-red";
    }
  };

  return (
    <div className="space-y-4">

      {/* FILTERS */}
      <div className="flex gap-2 flex-wrap">
        {["all", "active", "pending", "dispute", "complete"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded text-sm font-semibold ${
              filter === f
                ? "bg-blue text-white"
                : "border text-ink"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* TABLE */}
      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-bg text-muted text-xs uppercase">
            <tr>
              <th className="p-3 text-left">Party</th>
              <th className="p-3 hidden md:table-cell">Amount</th>
              <th className="p-3 hidden md:table-cell">Role</th>
              <th className="p-3">Status</th>
              <th className="p-3 hidden md:table-cell">Date</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((t) => (
              <tr key={t.id} className="border-t hover:bg-blueLight cursor-pointer">

                <td className="p-3 flex items-center gap-3">
                  <img src={t.avatar} className="w-8 h-8 rounded-full" />
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-xs text-muted">{t.title}</p>
                  </div>
                </td>

                <td className="p-3 hidden md:table-cell">{t.amount}</td>

                <td className="p-3 hidden md:table-cell capitalize">
                  {t.role}
                </td>

                <td className="p-3">
                  <span className={`px-2 py-1 text-xs rounded-full ${badge(t.status)}`}>
                    {t.status}
                  </span>
                </td>

                <td className="p-3 hidden md:table-cell text-muted">
                  {t.date}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}