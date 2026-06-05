"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "/tanker_trucks.png",
    mobilePosition: "center",
    label: "Welcome to Barry Lantern Oil & Gas Limited",
    title: "Powering Nigeria's",
    highlight: "Energy Future",
    description: "A leading oil & gas marketing and marine logistics company delivering reliable energy solutions across Nigeria and beyond.",
    serviceLink: "/#services",
  },
  {
    image: "/haulage_trucks.png",
    mobilePosition: "right center",
    label: "Fast and reliable",
    title: "On-demand fuel delivery",
    highlight: "across Nigeria",
    description: "From PMS, AGO, ATK, DPK, LPG, lubricants to base oil — safe, timely, seamless delivery.",
    serviceLink: "/services/haulage",
  },
  {
    image: "/barry_lantern_filling_station.png",
    mobilePosition: "center",
    label: "Downstream Supply",
    title: "Trusted Petroleum",
    highlight: "Product Supply",
    description: "Supplying PMS, AGO, and DPK to filling stations and bulk buyers across all regions of Nigeria.",
    serviceLink: "/services/downstream",
  },
  {
    image: "/offshore_intake.png",
    mobilePosition: "center",
    label: "One of the largest offshore",
    title: "Intake Facilities",
    highlight: "in Nigeria",
    description: "World-class marine logistics and vessel charter services across Nigerian waterways and beyond.",
    serviceLink: "/services/marine",
  },
  {
    image: "/charter.png",
    mobilePosition: "center",
    label: "Marine Logistics Services",
    title: "Reliable Vessel",
    highlight: "Charter Services",
    description: "World-class marine logistics and vessel charter services across Nigerian waterways.",
    serviceLink: "/services/marine",
  },
  {
    image: "/barry_lantern_storage_facilities.png",
    mobilePosition: "center",
    label: "One of Nigeria's",
    title: "Leading High-Tech",
    highlight: "Storage Facilities",
    description: "Reliable storage services meeting global standards, supporting seamless distribution across Nigeria.",
    serviceLink: "/services/marine",
  },
  {
    image: "/img 2.jpg",
    mobilePosition: "center",
    label: "Marine Logistics Services",
    title: "Reliable Vessel",
    highlight: "Charter Services",
    description: "World-class marine logistics and vessel charter services across Nigerian waterways.",
    serviceLink: "/services/marine",
  },
  {
    image: "/img 3.jpg",
    mobilePosition: "center",
    label: "Downstream Supply",
    title: "Trusted Petroleum",
    highlight: "Product Supply",
    description: "Supplying PMS, AGO, and DPK to filling stations and bulk buyers across Nigeria.",
    serviceLink: "/services/downstream",
  },
  {
    image: "/slbc.png",
    mobilePosition: "center",
    label: "Project Financing",
    title: "Unlocking Nigeria's",
    highlight: "Energy Investments",
    description: "SBLC, BG, DLC, and POF financial instruments for oil & gas projects locally and internationally.",
    serviceLink: "/services/financing",
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
  const bgPosition = isMobile ? slide.mobilePosition : "center";

  return (
    <>
      <style>{`
        @keyframes slideFromLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideFromRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideFromBottom {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideFromTop {
          from { opacity: 0; transform: translateY(-30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-label     { animation: slideFromTop    0.6s ease          forwards; }
        .anim-title     { animation: slideFromLeft   0.7s ease 0.1s     both; }
        .anim-highlight { animation: slideFromRight  0.7s ease 0.2s     both; }
        .anim-desc      { animation: slideFromBottom 0.7s ease 0.3s     both; }
        .anim-buttons   { animation: slideFromBottom 0.7s ease 0.45s    both; }
      `}</style>

      <section
        className="relative w-full bg-cover bg-no-repeat flex items-center transition-all duration-700"
        style={{
          backgroundImage: `url('${slide.image}')`,
          backgroundPosition: bgPosition,
          /* Fills full viewport minus navbar (~56px mobile, ~64px desktop) */
          minHeight: "60vh",
          paddingTop: "56px",
        }}
      >
        {/* Dark overlay — slightly heavier on mobile for text legibility */}
        <div className="absolute inset-0 bg-black/50 sm:bg-black/40" />

        {/* Content */}
        {animating && (
          <div className="relative z-10 w-full px-4 sm:px-8 md:px-14 lg:px-20 py-10 sm:py-0">
            <div className="max-w-xl">

              <p className="anim-label text-[#f0a500] font-semibold tracking-widest uppercase text-[10px] sm:text-xs mb-2">
                {slide.label}
              </p>

              <h2 className="font-bold leading-tight mb-3 md:mb-5 text-white
                             text-2xl   
                             xs:text-3xl
                             sm:text-4xl
                             md:text-5xl
                             lg:text-6xl">
                <span className="anim-title block">{slide.title}</span>
                {slide.highlight && (
                  <span className="anim-highlight block text-[#f0a500]">{slide.highlight}</span>
                )}
              </h2>

              <p className="anim-desc text-gray-200 leading-relaxed mb-5 md:mb-8
                            text-xs sm:text-sm md:text-base
                            max-w-[90%] sm:max-w-sm md:max-w-none">
                {slide.description}
              </p>

              <div className="anim-buttons flex gap-3 flex-wrap">
                <a
                  href={slide.serviceLink}
                  className="bg-[#f0a500] text-black font-bold rounded transition-all hover:bg-yellow-500
                             px-5 py-2.5 text-xs
                             sm:px-7 sm:py-3 sm:text-sm
                             md:px-8 md:text-base"
                >
                  Our Services
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white font-bold rounded transition-all hover:bg-white hover:text-black
                             px-5 py-2.5 text-xs
                             sm:px-7 sm:py-3 sm:text-sm
                             md:px-8 md:text-base"
                >
                  Contact Us
                </a>
              </div>

            </div>
          </div>
        )}

        {/* Dot Navigation */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-[#f0a500] w-5 md:w-6"
                  : "bg-white/50 w-2"
              }`}
            />
          ))}
        </div>

        {/* Arrow Navigation */}
        <button
          onClick={() => goTo((current - 1 + slides.length) % slides.length)}
          aria-label="Previous slide"
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-10
                     bg-white/20 hover:bg-[#f0a500] text-white rounded-full
                     flex items-center justify-center transition-all
                     w-8 h-8 text-base
                     sm:w-10 sm:h-10 sm:text-lg
                     md:w-12 md:h-12 md:text-xl"
        >
          ‹
        </button>
        <button
          onClick={() => goTo((current + 1) % slides.length)}
          aria-label="Next slide"
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-10
                     bg-white/20 hover:bg-[#f0a500] text-white rounded-full
                     flex items-center justify-center transition-all
                     w-8 h-8 text-base
                     sm:w-10 sm:h-10 sm:text-lg
                     md:w-12 md:h-12 md:text-xl"
        >
          ›
        </button>
      </section>
    </>
  );
};

export default Hero;