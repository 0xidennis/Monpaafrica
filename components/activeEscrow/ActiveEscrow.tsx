"use client"


export default function ActiveEscrows() {
  const items = [
    ["iPhone 15 Pro Max", "₦850K", "bg-blue-500"],
    ["Brand Design", "₦250K", "bg-yellow-500"],
    ["Bulk Electronics", "₦1.4M", "bg-red-500"],
  ];

  return (
    <div className="bg-white border rounded-xl p-4 space-y-4">
      <div className="flex justify-between">
        <p className="font-medium">Active Escrows</p>
        <span className="text-blue-600 text-sm">All</span>
      </div>

      {items.map((e, i) => (
        <div key={i}>
          <div className="flex justify-between text-sm">
            <p>{e[0]}</p>
            <p className="text-blue-600 font-medium">{e[1]}</p>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded mt-1">
            <div className={`h-full ${e[2]} rounded w-1/2`} />
          </div>
        </div>
      ))}

      <div className="bg-blue-600 text-white p-4 rounded-xl mt-4">
        <p className="text-[13px] opacity-80">Good afternoon, Adaeze</p>
        <p className="font-medium mt-1">Ready to start a new deal?</p>
        <button className="mt-3 bg-white/20 px-3 py-1 rounded text-sm">Start Escrow →</button>
      </div>
    </div>
  );
}