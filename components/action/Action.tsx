"use client"


export default function Actions() {
  const items = ["New Escrow", "Fund Wallet", "Pay Bills", "Crypto Escrow"];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
      {items.map((item) => (
        <div key={item} className="bg-white border rounded-xl p-6 text-center">
          <div className="w-10 h-10 mx-auto mb-3 bg-blue-100 rounded-full" />
          <p className="text-sm text-blue-600 font-medium">{item}</p>
        </div>
      ))}
    </div>
  );
}