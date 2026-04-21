"use client"

// small helpers
const StatusBadge = ({ status }: { status: string}) => {
  const styles: Record<string, string> = {
    Active: "bg-blue-100 text-blue-600",
    Pending: "bg-yellow-100 text-yellow-600",
    Dispute: "bg-red-100 text-red-600",
    Complete: "bg-green-100 text-green-600",
  };

  return (
    <span className={`px-2 py-[2px] text-[11px] rounded-full font-medium ${styles[status] || ""}`}>
      {status}
    </span>
  );
};


export default function Transactions() {
    const data = [
    ["Tunde Okafor", "iPhone 15 Pro Max", "₦850,000", "Buyer", "Active"],
    ["Funmi Adeyemi", "Brand Design", "₦250,000", "Seller", "Pending"],
    ["Bello Musa", "Bulk Electronics", "₦1,400,000", "Buyer", "Dispute"],
    ["Emeka Eze", "Apartment Deposit", "₦600,000", "Seller", "Complete"],
  ];

 return (
    <div className="bg-white border rounded-xl overflow-hidden">
      <div className="flex justify-between p-4 border-b">
        <p className="font-medium">Recent Transactions</p>
        <span className="text-blue-600 text-sm">View all →</span>
      </div>

      {/* Desktop table header - hidden on mobile */}
      <div className="hidden sm:grid grid-cols-5 px-4 py-2 border-b bg-gray-50 text-xs text-gray-500 font-medium">
        <div>User</div>
        <div>Amount</div>
        <div>Role</div>
        <div>Status</div>
        <div className="text-right"></div>
      </div>

      {data.map((t, i) => (
        <div key={i} className="flex flex-col sm:grid sm:grid-cols-5 p-4 border-t text-sm items-start sm:items-center gap-2 sm:gap-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0" />
            <div>
              <p className="font-medium">{t[0]}</p>
              <p className="text-[11px] text-gray-500">{t[1]}</p>
            </div>
          </div>
          <div className="sm:block">
            <span className="sm:hidden text-gray-400 text-xs mr-1">Amount:</span>
            <span className="font-semibold sm:font-normal">{t[2]}</span>
          </div>
          <div className="text-blue-600 text-[12px]">
            <span className="sm:hidden text-gray-400 text-xs mr-1">Role:</span>
            {t[3]}
          </div>
          <StatusBadge status={t[4]} />
          <div className="hidden sm:block text-right text-gray-400">›</div>
        </div>
      ))}
    </div>
  );
}