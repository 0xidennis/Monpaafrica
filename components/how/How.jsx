"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// (Optional) keep only if you plan to use it
function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

export default function How() {
  const steps = ["Create Deal", "Fund", "Deliver", "Release"];

  return (
    <section className="px-6 py-20 bg-gray-100 grid md:grid-cols-4 gap-6">
      {steps.map((s, i) => (
        <motion.div key={i} whileHover={{ y: -5 }}>
          <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full mb-3 font-semibold">
            {i + 1}
          </div>
          <h3 className="font-bold">{s}</h3>
        </motion.div>
      ))}
    </section>
  );
}