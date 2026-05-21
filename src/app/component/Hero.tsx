"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "/barry_lantern_storage_facilities.jpg",
    label: "Welcome to Barry Lantern Oil & Gas Limited",
    title: "Powering Nigeria's",
    highlight: "Energy Future",
    description:
      "A leading oil & gas marketing and marine logistics company delivering reliable energy solutions across Nigeria and beyond.",
  },
  {
    image: "/img 2.jpg",
    label: "Our Marine Logistics Services",
    title: "Reliable Vessel",
    highlight: "Charter Services",
    description:
      "We provide world-class marine logistics and vessel charter services across Nigerian waterways and beyond.",
  },
  {
    image: "/img 3.jpg",
    label: "Downstream Supply",
    title: "Trusted Petroleum",
    highlight: "Product Supply",
    description:
      "Supplying PMS, AGO, and DPK to filling stations and bulk buyers across all regions of Nigeria.",
  },
  {
    image: "/barry_lantern_image.jpg",
    label: "Project Financing",
    title: "Unlocking Nigeria's",
    highlight: "Energy Investments",
    description:
      "We facilitate SBLC, BG, DLC, and POF financial instruments for oil & gas projects locally and internationally.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimating(true);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setAnimating(false);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(true);
    }, 300);
  };

  const slide = slides[current];

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center transition-all duration-700"
      style={{ backgroundImage: `url('${slide.image}')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div
        className={`relative z-10 px-10 md:px-20 text-white max-w-3xl transition-all duration-500 ${
          animating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-[#f0a500] font-semibold tracking-widest uppercase text-sm mb-3">
          {slide.label}
        </p>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          {slide.title} <br />
          <span className="text-[#f0a500]">{slide.highlight}</span>
        </h2>
        <p className="text-lg text-gray-200 mb-8 leading-relaxed">
          {slide.description}
        </p>
        <div className="flex gap-4 flex-wrap">
          
           <a href="/services"
            className="bg-[#f0a500] text-black font-bold px-8 py-3 rounded hover:bg-yellow-500 transition-all"
          >
            Our Services
          </a>
          
            <a href="/contact"
            className="border-2 border-white text-white font-bold px-8 py-3 rounded hover:bg-white hover:text-black transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-[#f0a500] w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-[#f0a500] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all"
      >
        ‹
      </button>
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-[#f0a500] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all"
      >
        ›
      </button>

    </section>
  );
};

export default Hero;