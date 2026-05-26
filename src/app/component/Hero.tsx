"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "/barry_lantern_storage_facilities.jpg",
    mobilePosition: "right_center",
    label: "Welcome to Barry Lantern Oil & Gas Limited",
    title: "Powering Nigeria's",
    highlight: "Energy Future",
    description:
      "A leading oil & gas marketing and marine logistics company delivering reliable energy solutions across Nigeria and beyond.",
  },
  {
    image: "/charter.png",
    mobilePosition: "center",
    label: "Our Marine Logistics Services",
    title: "Reliable Vessel",
    highlight: "Charter Services",
    description:
      "We provide world-class marine logistics and vessel charter services across Nigerian waterways and beyond.",
  },
  {
    image: "/barry_lantern_storage_facilities.png",
    mobilePosition: "center",
    label: "Our Marine Logistics Services",
    title: "Reliable Vessel",
    highlight: "Charter Services",
    description:
      "We provide world-class marine logistics and vessel charter services across Nigerian waterways and beyond.",
  },
  {
    image: "/img 2.jpg",
    mobilePosition: "center",
    label: "Our Marine Logistics Services",
    title: "Reliable Vessel",
    highlight: "Charter Services",
    description:
      "We provide world-class marine logistics and vessel charter services across Nigerian waterways and beyond.",
  },
  {
    image: "/img 3.jpg",
    mobilePosition: "center",
    label: "Downstream Supply",
    title: "Trusted Petroleum",
    highlight: "Product Supply",
    description:
      "Supplying PMS, AGO, and DPK to filling stations and bulk buyers across all regions of Nigeria.",
  },
  {
    image: "/barry_lantern_image.jpg",
    mobilePosition: "center",
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
  const bgPosition = isMobile ? slide.mobilePosition.replace("_", " ") : "center";

  return (
    <>
      <style>{`
        @keyframes slideFromLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideFromRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideFromBottom {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideFromTop {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .anim-label { animation: slideFromTop 0.6s ease forwards; }
        .anim-title { animation: slideFromLeft 0.7s ease 0.1s both; }
        .anim-highlight { animation: slideFromRight 0.7s ease 0.2s both; }
        .anim-desc { animation: slideFromBottom 0.7s ease 0.3s both; }
        .anim-buttons { animation: slideFromBottom 0.7s ease 0.45s both; }
      `}</style>

      <section
        className="relative w-full h-[60vh] sm:h-[65vh] md:h-[75vh] lg:h-screen bg-cover flex items-center pt-[60px] lg:pt-0 transition-all duration-700"
        style={{
          backgroundImage: `url('${slide.image}')`,
          backgroundPosition: bgPosition,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        {animating && (
          <div className="relative z-10 px-6 sm:px-10 md:px-20 text-white max-w-2xl">

            <p className="anim-label text-[#f0a500] font-semibold tracking-widest uppercase text-[10px] sm:text-xs md:text-sm mb-2 md:mb-3">
              {slide.label}
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-6">
              <span className="anim-title block">{slide.title}</span>
              <span className="anim-highlight block text-[#f0a500]">{slide.highlight}</span>
            </h2>

            <p className="anim-desc text-xs sm:text-sm md:text-lg text-gray-200 mb-4 md:mb-8 leading-relaxed max-w-sm md:max-w-none">
              {slide.description}
            </p>

            <div className="anim-buttons flex gap-3 flex-wrap">
              
                <a href="/services"
                className="bg-[#f0a500] text-black font-bold px-5 py-2 sm:px-8 sm:py-3 text-sm md:text-base rounded hover:bg-yellow-500 transition-all"
              >
                Our Services
              </a>
              
                <a href="/contact"
                className="border-2 border-white text-white font-bold px-5 py-2 sm:px-8 sm:py-3 text-sm md:text-base rounded hover:bg-white hover:text-black transition-all"
              >
                Contact Us
              </a>
            </div>

          </div>
        )}

        {/* Dot Navigation */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                index === current ? "bg-[#f0a500] w-4 md:w-6" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Arrow Navigation */}
        <button
          onClick={() => goTo((current - 1 + slides.length) % slides.length)}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-[#f0a500] text-white w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center text-lg md:text-xl transition-all"
        >
          ‹
        </button>
        <button
          onClick={() => goTo((current + 1) % slides.length)}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-[#f0a500] text-white w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center text-lg md:text-xl transition-all"
        >
          ›
        </button>

      </section>
    </>
  );
};

export default Hero;