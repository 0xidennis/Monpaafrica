"use client";







export default function Step1({ form, setForm, next }: any) {
  return (
    <div className="bg-white border rounded-2xl p-6">
      <h2 className="font-bold mb-1">Your role in this deal</h2>
      <p className="text-sm text-gray-500 mb-4">Are you buying or selling?</p>

      <div className="grid md:grid-cols-2 gap-3 mb-6">
        {["buyer", "seller"].map((r) => (
          <div
            key={r}
            onClick={() => setForm({ ...form, role: r })}
            className={`p-4 border-2 rounded-xl cursor-pointer
              ${
                form.role === r
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200"
              }`}
          >
            {r === "buyer" ? "🛒 Buyer" : "💼 Seller"}
          </div>
        ))}
      </div>

      <input
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        placeholder="Deal title"
        className="w-full border p-3 rounded mb-4"
      />

      <div className="flex justify-between">
        <button className="border px-5 py-2 rounded">Cancel</button>
        <button onClick={next} className="bg-blue-600 text-white px-5 py-2 rounded">
          Continue
        </button>
      </div>
    </div>
  );
}