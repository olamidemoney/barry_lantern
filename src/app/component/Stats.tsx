"use client";

import { useEffect, useState } from "react";

const stats = [
  { number: 10,  suffix: "+", label: "Years of Experience" },
  { number: 500, suffix: "+", label: "Successful Deliveries" },
  { number: 50,  suffix: "+", label: "Corporate Clients" },
  { number: 4,   suffix: "",  label: "Core Service Areas" },
];

const Stats = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => setStarted(true), 400);
    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 2000;
    const fps = 60;
    const totalFrames = (duration / 1000) * fps;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const eased = 1 - Math.pow(1 - frame / totalFrames, 2);
      setCounts(stats.map((s) => Math.floor(s.number * eased)));
      if (frame >= totalFrames) {
        setCounts(stats.map((s) => s.number));
        clearInterval(timer);
      }
    }, 1000 / fps);

    return () => clearInterval(timer);
  }, [started]);

  return (
    <section className="bg-[#003366] py-10 sm:py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center text-white">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`py-2 ${
              /* right border on desktop, bottom border between top/bottom rows on mobile */
              index < 3 ? "md:border-r md:border-white/20" : ""
            } ${
              index < 2 ? "border-b border-white/10 pb-6 md:border-b-0 md:pb-2" : ""
            }`}
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-[#f0a500] mb-1 sm:mb-2">
              {counts[index]}{stat.suffix}
            </h3>
            <p className="text-xs sm:text-sm tracking-widest uppercase text-gray-300 leading-snug">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;