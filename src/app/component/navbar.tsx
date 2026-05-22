"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
        setServicesOpen(false);
        setContactOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAll = () => {
    setAboutOpen(false);
    setServicesOpen(false);
    setContactOpen(false);
    setMenuOpen(false);
  };

  return (
    <header
      ref={navRef as React.RefObject<HTMLElement>}
      className={`w-full fixed top-0 left-0 z-50 font-sans transition-all duration-300 ${scrolled ? "bg-[#001f3f] shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo + Company Name */}
        <div className="flex items-center gap-3">
          <div className="w-20 h-20 shrink-0">
            <img
              src="/logo (3).png"
              alt="Barry Lantern Oil & Gas Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight text-white">
              Barry Lantern Oil & Gas Limited
            </h1>
            <p className="text-xs tracking-wider text-gray-300">
              Oil & Gas Marketing | Marine Logistics
            </p>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">

          <Link href="/" onClick={closeAll} className={`font-bold text-base transition-all hover:text-[#f0a500] pb-1 ${pathname === "/" ? "text-[#f0a500] border-b-2 border-[#f0a500]" : "text-white"}`}>
            Home
          </Link>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className={`font-bold text-base flex items-center gap-1 transition-all hover:text-[#f0a500] pb-1 ${pathname.startsWith("/about") ? "text-[#f0a500] border-b-2 border-[#f0a500]" : "text-white"}`}
            >
              About Us ▾
            </button>
            {aboutOpen && (
              <div className="absolute top-full left-0 pt-2 z-50 w-48">
                <div className="bg-white shadow-xl border border-gray-100 rounded animate-fadeDown">
                  <Link href="/about" onClick={closeAll} className="block px-5 py-3 hover:bg-[#f0a500] hover:text-white text-sm text-gray-700 transition-all">About Us</Link>
                  <Link href="/about/blog" onClick={closeAll} className="block px-5 py-3 hover:bg-[#f0a500] hover:text-white text-sm text-gray-700 transition-all">Blog and Press Release</Link>
                </div>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`font-bold text-base flex items-center gap-1 transition-all hover:text-[#f0a500] pb-1 ${pathname.startsWith("/services") ? "text-[#f0a500] border-b-2 border-[#f0a500]" : "text-white"}`}
            >
              Our Services ▾
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 pt-2 z-50 w-52">
                <div className="bg-white shadow-xl border border-gray-100 rounded animate-fadeDown">
                  <Link href="/services/upstream" onClick={closeAll} className="block px-5 py-3 hover:bg-[#f0a500] hover:text-white text-sm text-gray-700 transition-all">Upstream Supply</Link>
                  <Link href="/services/downstream" onClick={closeAll} className="block px-5 py-3 hover:bg-[#f0a500] hover:text-white text-sm text-gray-700 transition-all">Downstream Supply</Link>
                  <Link href="/services/marine" onClick={closeAll} className="block px-5 py-3 hover:bg-[#f0a500] hover:text-white text-sm text-gray-700 transition-all">Marine Logistics</Link>
                  <Link href="/services/haulage" onClick={closeAll} className="block px-5 py-3 hover:bg-[#f0a500] hover:text-white text-sm text-gray-700 transition-all">Logistics & Haulage</Link>
                  <Link href="/services/financing" onClick={closeAll} className="block px-5 py-3 hover:bg-[#f0a500] hover:text-white text-sm text-gray-700 transition-all">Project Financing</Link>
                </div>
              </div>
            )}
          </div>

          {/* Contact Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setContactOpen(true)}
            onMouseLeave={() => setContactOpen(false)}
          >
            <button
              onClick={() => setContactOpen(!contactOpen)}
              className={`font-bold text-base flex items-center gap-1 transition-all hover:text-[#f0a500] pb-1 ${pathname.startsWith("/contact") ? "text-[#f0a500] border-b-2 border-[#f0a500]" : "text-white"}`}
            >
              Contact ▾
            </button>
            {contactOpen && (
              <div className="absolute top-full left-0 pt-2 z-50 w-48">
                <div className="bg-white shadow-xl border border-gray-100 rounded animate-fadeDown">
                  <Link href="/contact" onClick={closeAll} className="block px-5 py-3 hover:bg-[#f0a500] hover:text-white text-sm text-gray-700 transition-all">Contact Form</Link>
                  <Link href="/contact/service-request" onClick={closeAll} className="block px-5 py-3 hover:bg-[#f0a500] hover:text-white text-sm text-gray-700 transition-all">Service Request</Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/partnership" onClick={closeAll} className={`font-bold text-base transition-all hover:text-[#f0a500] pb-1 ${pathname === "/partnership" ? "text-[#f0a500] border-b-2 border-[#f0a500]" : "text-white"}`}>
            Global Partnership
          </Link>

        </nav>

        {/* Order Now Button */}
        <div className="hidden md:flex items-center gap-4">
          <a href="/contact/service-request" className="bg-[#f0a500] text-black font-bold px-5 py-2 rounded text-sm hover:bg-yellow-500 transition-all">
            Order Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#001f3f] border-t border-gray-700 shadow-xl">

          <Link href="/" onClick={closeAll} className="block px-6 py-3 text-sm font-bold text-white hover:bg-[#f0a500] hover:text-black transition-all">
            Home
          </Link>

          <div className="border-t border-gray-700">
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="w-full text-left px-6 py-3 text-sm font-bold text-white hover:bg-[#f0a500] hover:text-black transition-all flex justify-between items-center"
            >
              About Us <span>{aboutOpen ? "▴" : "▾"}</span>
            </button>
            {aboutOpen && (
              <div className="bg-[#002a52] border-t border-gray-700">
                <Link href="/about" onClick={closeAll} className="block px-10 py-2.5 text-sm text-gray-300 hover:bg-[#f0a500] hover:text-black transition-all">About Us</Link>
                <Link href="/about/blog" onClick={closeAll} className="block px-10 py-2.5 text-sm text-gray-300 hover:bg-[#f0a500] hover:text-black transition-all">Blog and Press Release</Link>
              </div>
            )}
          </div>

          <div className="border-t border-gray-700">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full text-left px-6 py-3 text-sm font-bold text-white hover:bg-[#f0a500] hover:text-black transition-all flex justify-between items-center"
            >
              Our Services <span>{servicesOpen ? "▴" : "▾"}</span>
            </button>
            {servicesOpen && (
              <div className="bg-[#002a52] border-t border-gray-700">
                <Link href="/services/upstream" onClick={closeAll} className="block px-10 py-2.5 text-sm text-gray-300 hover:bg-[#f0a500] hover:text-black transition-all">Upstream Supply</Link>
                <Link href="/services/downstream" onClick={closeAll} className="block px-10 py-2.5 text-sm text-gray-300 hover:bg-[#f0a500] hover:text-black transition-all">Downstream Supply</Link>
                <Link href="/services/marine" onClick={closeAll} className="block px-10 py-2.5 text-sm text-gray-300 hover:bg-[#f0a500] hover:text-black transition-all">Marine Logistics</Link>
                <Link href="/services/haulage" onClick={closeAll} className="block px-10 py-2.5 text-sm text-gray-300 hover:bg-[#f0a500] hover:text-black transition-all">Logistics & Haulage</Link>
                <Link href="/services/financing" onClick={closeAll} className="block px-10 py-2.5 text-sm text-gray-300 hover:bg-[#f0a500] hover:text-black transition-all">Project Financing</Link>
              </div>
            )}
          </div>

          <div className="border-t border-gray-700">
            <button
              onClick={() => setContactOpen(!contactOpen)}
              className="w-full text-left px-6 py-3 text-sm font-bold text-white hover:bg-[#f0a500] hover:text-black transition-all flex justify-between items-center"
            >
              Contact <span>{contactOpen ? "▴" : "▾"}</span>
            </button>
            {contactOpen && (
              <div className="bg-[#002a52] border-t border-gray-700">
                <Link href="/contact" onClick={closeAll} className="block px-10 py-2.5 text-sm text-gray-300 hover:bg-[#f0a500] hover:text-black transition-all">Contact Form</Link>
                <Link href="/contact/service-request" onClick={closeAll} className="block px-10 py-2.5 text-sm text-gray-300 hover:bg-[#f0a500] hover:text-black transition-all">Service Request</Link>
              </div>
            )}
          </div>

          <Link href="/partnership" onClick={closeAll} className="block px-6 py-3 text-sm font-bold text-white border-t border-gray-700 hover:bg-[#f0a500] hover:text-black transition-all">
            Global Partnership
          </Link>

          <div className="px-6 py-4 border-t border-gray-700">
            <a href="/contact/service-request" onClick={closeAll} className="block bg-[#f0a500] text-black font-bold px-5 py-2 rounded text-sm text-center hover:bg-yellow-500 transition-all">
              Order Now
            </a>
          </div>

        </div>
      )}

    </header>
  );
};

export default Navbar;