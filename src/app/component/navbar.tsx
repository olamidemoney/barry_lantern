"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const toggleDropdown = (name: string) =>
    setOpenDropdown(openDropdown === name ? null : name);

  const closeAll = () => {
    setOpenDropdown(null);
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      key: "about",
      children: [
        { label: "About Us", href: "/about" },
        { label: "Blog and Press Release", href: "/blog" },
      ],
    },
    {
      label: "Our Services",
      key: "services",
      children: [
        { label: "Upstream Supply", href: "/services/upstream" },
        { label: "Downstream Supply", href: "/services/downstream" },
        { label: "Marine Logistics", href: "/services/marine" },
        { label: "Logistics & Haulage", href: "/services/haulage" },
        { label: "Financial Instrument & Monetization", href: "/services/financing" },
      ],
    },
    {
      label: "Contact",
      key: "contact",
      children: [
        { label: "Contact Form", href: "/contact" },
        { label: "Service Request", href: "/contact/service-request" },
      ],
    },
    { label: "Global Partnership", href: "/partnership" },
  ];

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-50 font-sans transition-colors duration-300 ${
          scrolled
            ? "bg-[#001f3f] shadow-lg"
            : "bg-[#001f3f]"
        }`}
        /* Always solid navy — eliminates layout shift on scroll */
      >
        {/* Fixed height on all screens so nothing ever shifts */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2">

          {/* ── LOGO ── */}
          <Link
            href="/"
            onClick={closeAll}
            className="flex items-center gap-2 min-w-0 flex-1"
          >
            {/* Logo icon — fixed size, never shrinks */}
            <img
              src="/logo (3).png"
              alt="Barry Lantern Logo"
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain shrink-0"
            />

            {/* Name — always shows full company name, wraps if needed */}
            <div className="min-w-0">
              <p className="text-white font-bold leading-tight
                            text-[11px]
                            xs:text-xs
                            sm:text-sm
                            truncate">
                Barry Lantern Oil &amp; Gas Limited
              </p>
              <p className="text-gray-400 text-[9px] sm:text-[10px] tracking-wide hidden sm:block truncate">
                Oil &amp; Gas Marketing | Marine Logistics
              </p>
            </div>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 shrink-0">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.key}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.key!)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`font-bold text-sm flex items-center gap-1 transition-all hover:text-[#f0a500] pb-1 whitespace-nowrap ${
                      pathname.startsWith(`/${link.key}`)
                        ? "text-[#f0a500] border-b-2 border-[#f0a500]"
                        : "text-white"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`transition-transform duration-200 text-xs ${
                        openDropdown === link.key ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>

                  {openDropdown === link.key && (
                    <div className="absolute top-full left-0 pt-3 z-50 w-56">
                      <div className="bg-[#001f3f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeAll}
                            className={`block px-5 py-3 text-sm font-medium transition-all border-b border-white/5 last:border-0 hover:bg-[#f0a500] hover:text-black ${
                              pathname === child.href ? "text-[#f0a500]" : "text-gray-200"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  onClick={closeAll}
                  className={`font-bold text-sm transition-all hover:text-[#f0a500] whitespace-nowrap ${
                    pathname === link.href
                      ? "text-[#f0a500] border-b-2 border-[#f0a500]"
                      : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* ── RIGHT SIDE ── */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="/contact/service-request"
              className="hidden lg:block bg-[#f0a500] text-black font-bold px-4 py-2 rounded-xl text-sm hover:bg-yellow-400 transition-all shadow-lg whitespace-nowrap"
            >
              Order Now
            </a>

            {/* Hamburger — always same size, never moves */}
            <button
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] shrink-0"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="block h-0.5 w-6 bg-white rounded" />
              <span className="block h-0.5 w-6 bg-white rounded" />
              <span className="block h-0.5 w-6 bg-white rounded" />
            </button>
          </div>

        </div>
      </header>

      {/* ── OVERLAY ── */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeAll}
        />
      )}

      {/* ── SIDEBAR ── */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[320px]
          bg-[#001f3f] border-l border-white/10
          z-50 lg:hidden flex flex-col
          shadow-[0_8px_32px_rgba(0,0,0,0.5)]
          transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <img src="/logo (3).png" alt="Logo" className="w-8 h-8 object-contain shrink-0" />
            <div>
              <p className="text-white font-bold text-xs leading-tight">Barry Lantern Oil &amp; Gas Limited</p>
              <p className="text-[#f0a500] text-[10px] mt-0.5">Oil &amp; Gas Marketing</p>
            </div>
          </div>
          <button
            onClick={closeAll}
            className="text-white text-lg hover:text-[#f0a500] transition-all duration-200 w-8 h-8 flex items-center justify-center shrink-0"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto py-2">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.key} className="border-b border-white/5">
                <button
                  onClick={() => toggleDropdown(link.key!)}
                  className={`w-full text-left px-5 py-4 text-sm font-bold flex justify-between items-center transition-all ${
                    openDropdown === link.key ? "text-[#f0a500]" : "text-white hover:text-[#f0a500]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`transition-transform duration-300 text-xs ${
                      openDropdown === link.key ? "rotate-180 text-[#f0a500]" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openDropdown === link.key ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={closeAll}
                      className={`flex items-center gap-2 pl-8 pr-5 py-3 text-sm transition-all hover:text-[#f0a500] border-b border-white/5 last:border-0 ${
                        pathname === child.href ? "text-[#f0a500]" : "text-gray-300"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f0a500] shrink-0" />
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                onClick={closeAll}
                className={`block px-5 py-4 text-sm font-bold border-b border-white/5 transition-all hover:text-[#f0a500] hover:pl-7 ${
                  pathname === link.href ? "text-[#f0a500]" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Bottom CTA */}
        <div className="px-5 py-5 border-t border-white/10">
          <a
            href="/contact/service-request"
            onClick={closeAll}
            className="block bg-[#f0a500] text-black font-bold py-3 rounded-xl text-sm text-center hover:bg-yellow-400 transition-all"
          >
            Order Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;