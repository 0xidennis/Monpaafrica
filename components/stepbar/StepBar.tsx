"use client";




export default function StepBar({ step }: { step: number }) {
  return (
    <div className="flex items-center mb-6 text-xs">
      {[1, 2, 3, 4].map((s, i) => (
        <div key={s} className="flex items-center flex-1">
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full font-bold
            ${
              step === s
                ? "bg-blue-600 text-white"
                : step > s
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-500"
            }`}
          >
            {s}
          </div>
          {i < 3 && <div className="flex-1 h-[2px] bg-gray-200 mx-2"></div>}
        </div>
      ))}
    </div>
  );
}