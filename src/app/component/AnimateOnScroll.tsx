"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  animation?: string;
  delay?: string;
  className?: string;
}

const AnimateOnScroll = ({ children, animation = "animate-fadeUp", delay = "", className = "" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${visible ? `${animation} ${delay}` : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;