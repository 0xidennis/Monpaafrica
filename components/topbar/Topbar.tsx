
"use client"


export default function Topbar({ setOpen, setNotif }: { setOpen: (open: boolean) => void; setNotif: (notif: boolean) => void }) {
  return (
    <div className="flex justify-between items-center px-6 py-4 border-b bg-white">
      <div>
        <h1 className="font-semibold text-[18px]">Dashboard</h1>
        <p className="text-[13px] text-gray-500">Here's what's happening with your escrows</p>
      </div>

      <div className="flex items-center gap-3">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">+ New Escrow</button>
        <div className="w-9 h-9 border rounded-lg relative flex items-center justify-center">
          <span className="absolute w-2 h-2 bg-red-500 rounded-full top-1 right-1" />
        </div>
        <div className="w-9 h-9 rounded-full bg-gray-300" />
      </div>
    </div>
  );
}