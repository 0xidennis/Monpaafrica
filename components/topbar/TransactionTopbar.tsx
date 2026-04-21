// components/Topbar.tsx
"use client";

export default function Topbar({ setOpen }: any) {
  return (
    <div className="h-[60px] bg-white border-b flex items-center justify-between px-5 sticky top-0 z-50">

      <div className="flex items-center gap-3">
        <button
          className="md:hidden border p-2 rounded"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>

        <div>
          <h1 className="font-bold text-sm">Transactions</h1>
          <p className="text-xs text-muted">All your escrow deals</p>
        </div>
      </div>

      <button className="bg-blue text-white px-4 py-2 rounded text-sm font-semibold">
        New Escrow
      </button>
    </div>
  );
}