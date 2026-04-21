"use client"

export default function Topbar({ setOpen, setNotif }: { setOpen: (open: boolean) => void; setNotif: (notif: boolean) => void }) {
  return (
    <div className="flex justify-between items-center px-4 sm:px-6 py-4 border-b bg-white">
      <div className="flex items-center gap-3">
        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 border rounded-lg"
          onClick={() => setOpen(true)}
          aria-label="Open sidebar"
        >
          <span className="block w-4 h-[2px] bg-gray-600 mb-1" />
          <span className="block w-4 h-[2px] bg-gray-600 mb-1" />
          <span className="block w-4 h-[2px] bg-gray-600" />
        </button>
        <div>
          <h1 className="font-semibold text-[16px] sm:text-[18px]">Dashboard</h1>
          <p className="text-[12px] sm:text-[13px] text-gray-500 hidden sm:block">Here&apos;s what&apos;s happening with your escrows</p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap">+ New Escrow</button>
        <div className="w-8 h-8 sm:w-9 sm:h-9 border rounded-lg relative flex items-center justify-center">
          <span className="absolute w-2 h-2 bg-red-500 rounded-full top-1 right-1" />
        </div>
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-300" />
      </div>
    </div>
  );
}