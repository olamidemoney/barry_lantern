"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 10, suffix: "+", label: "Years of Experience" },
  { number: 500, suffix: "+", label: "Successful Deliveries" },
  { number: 50, suffix: "+", label: "Corporate Clients" },
  { number: 4, suffix: "", label: "Core Service Areas" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLHeadingElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <h3 ref={ref} className="text-4xl font-bold text-[#f0a500] mb-2">
      {count}{suffix}
    </h3>
  );
};

const Stats = () => {
  return (
    <section className="bg-[#003366] py-12 px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        {stats.map((stat, index) => (
          <div key={index} className="border-r border-white/20 last:border-none">
            <CountUp target={stat.number} suffix={stat.suffix} />
            <p className="text-sm tracking-widest uppercase text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;