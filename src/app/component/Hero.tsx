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
    image: "/vessel.png",
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
  title: "Providers of Fresh Cut",
  highlight: "BG & SBLC for Lease",
  description: "Our bank instruments can be engaged in PPP Trading, Discounting Signature Projects across Construction, Oil & Gas, Telecommunication, and more — locally and internationally.",
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
  className="
    relative
    w-full
    bg-cover
    bg-no-repeat
    flex
    items-center
    transition-all
    duration-700
    mt-14
    sm:mt-16
    min-h-[60vh]
    md:min-h-[65vh]
    lg:min-h-[75vh]
  "
  style={{
    backgroundImage: `url('${slide.image}')`,
    backgroundPosition: bgPosition,
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/50 sm:bg-black/40" />

  {/* Content */}
  {animating && (
    <div className="relative z-10 w-full px-4 sm:px-8 md:px-14 lg:px-20 py-12">
      <div className="max-w-xl lg:max-w-2xl">

        <p className="anim-label text-[#f0a500] font-semibold tracking-widest uppercase text-[10px] sm:text-xs mb-2">
          {slide.label}
        </p>

        <h2
          className="font-bold leading-tight mb-3 md:mb-5 text-white
                     text-2xl
                     xs:text-3xl
                     sm:text-4xl
                     md:text-5xl
                     lg:text-6xl"
        >
          <span className="anim-title block">{slide.title}</span>
          {slide.highlight && (
            <span className="anim-highlight block text-[#f0a500]">
              {slide.highlight}
            </span>
          )}
        </h2>

        <p
          className="anim-desc text-gray-200 leading-relaxed mb-5 md:mb-8
                     text-xs sm:text-sm md:text-base
                     max-w-[90%] sm:max-w-sm md:max-w-none"
        >
          {slide.description}
        </p>

        
          <div className="anim-buttons flex gap-3 flex-wrap">
  
   <a href={slide.serviceLink}
    className="inline-block bg-[#f0a500] hover:bg-[#d4920a] text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base transition-colors duration-200 rounded-sm"
  >
    Our Services
  </a>
  
    <a href="/contact"
    className="inline-block border-2 border-white hover:border-[#f0a500] hover:text-[#f0a500] text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base transition-colors duration-200 rounded-sm">
    Contact Us
  </a>
</div>
        

      </div>
    </div>
  )}
</section>
    </>
  );
};

export default Hero;