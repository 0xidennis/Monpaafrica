"use client"



export default function Notifications({ setNotif }: { setNotif: (notif: boolean) => void }) {
  return (
    <div onClick={() => setNotif(false)} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div onClick={(e) => e.stopPropagation()} className="bg-white w-[340px] p-[24px] rounded-[18px] shadow-lg">
        <h2 className="font-bold text-[1rem] mb-[10px]">Notifications</h2>
        <p className="text-[0.85rem] text-gray-500">No new notifications</p>
        <button onClick={() => setNotif(false)} className="mt-[20px] w-full border py-[10px] rounded-[10px] text-[0.85rem]">
          Close
        </button>
      </div>
    </div>
  );
}