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
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close ONLY when clicking outside sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

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
        { label: "Blog and Press Release", href: "/blogs" },
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
        { label: "Financial instrument and Monetization", href: "/services/financing" },
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
        className={`w-full fixed top-0 left-0 z-50 font-sans transition-all duration-300 ${
          scrolled
            ? "bg-[#001f3f]/90 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" onClick={closeAll} className="flex items-center gap-3">
            <div className="w-16 h-16 shrink-0">
              <img
                src="/logo (3).png"
                alt="Barry Lantern Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <h1 className="text-base font-bold leading-tight text-white">
                Barry Lantern Oil & Gas Limited
              </h1>

              <p className="text-xs tracking-wider text-gray-300">
                Oil & Gas Marketing | Marine Logistics
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.key}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.key!)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`font-bold text-sm flex items-center gap-1 transition-all hover:text-[#f0a500] pb-1 ${
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
                    <div className="absolute top-full left-0 pt-3 z-50 w-52">
                      <div className="bg-[#001f3f]/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeAll}
                            className={`block px-5 py-3 text-sm font-medium transition-all border-b border-white/5 last:border-0 hover:bg-[#f0a500] hover:text-black ${
                              pathname === child.href
                                ? "text-[#f0a500]"
                                : "text-gray-200"
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
                  className={`font-bold text-sm transition-all hover:text-[#f0a500] pb-1 ${
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

          {/* Right Side */}
          <div className="flex items-center gap-4">

            <a
              href="/contact/service-request"
              className="hidden md:block bg-[#f0a500] text-black font-bold px-5 py-2 rounded-xl text-sm hover:bg-yellow-400 transition-all shadow-lg"
            >
              Order Now
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-2 z-[60]"
              onClick={() => setMenuOpen(true)}
              aria-label="Toggle menu"
            >
              <span className="block h-0.5 w-6 bg-white"></span>
              <span className="block h-0.5 w-6 bg-white"></span>
              <span className="block h-0.5 w-6 bg-white"></span>
            </button>

          </div>
        </div>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-all duration-300" />
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-[82%] max-w-sm
        bg-white/10 backdrop-blur-2xl border-l border-white/20
        z-50 md:hidden flex flex-col
        shadow-[0_8px_32px_rgba(0,0,0,0.37)]
        transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">

          <div>
            <p className="text-white font-bold text-sm">
              Barry Lantern
            </p>

            <p className="text-[#f0a500] text-xs">
              Oil & Gas Limited
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={closeAll}
            className="text-white text-2xl hover:text-[#f0a500] transition-all duration-300 hover:rotate-90"
          >
            ✕
          </button>
        </div>

        {/* Mobile Nav */}
        <nav className="flex-1 overflow-y-auto py-4">

          {navLinks.map((link) =>
            link.children ? (
              <div key={link.key} className="border-b border-white/5">

                <button
                  onClick={() => toggleDropdown(link.key!)}
                  className={`w-full text-left px-6 py-4 text-sm font-bold flex justify-between items-center transition-all ${
                    openDropdown === link.key
                      ? "text-[#f0a500]"
                      : "text-white hover:text-[#f0a500]"
                  }`}
                >
                  {link.label}

                  <span
                    className={`transition-transform duration-300 text-xs ${
                      openDropdown === link.key
                        ? "rotate-180 text-[#f0a500]"
                        : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openDropdown === link.key
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={closeAll}
                      className={`flex items-center gap-2 pl-10 pr-6 py-3 text-sm transition-all hover:text-[#f0a500] border-b border-white/5 last:border-0 ${
                        pathname === child.href
                          ? "text-[#f0a500]"
                          : "text-gray-300"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f0a500] shrink-0"></span>

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
                className={`block px-6 py-4 text-sm font-bold border-b border-white/5 transition-all hover:text-[#f0a500] hover:pl-8 ${
                  pathname === link.href
                    ? "text-[#f0a500]"
                    : "text-white"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Bottom Button */}
        <div className="px-6 py-6 border-t border-white/10">

          <a
            href="/contact/service-request"
            onClick={closeAll}
            className="block bg-[#f0a500] text-black font-bold py-3 rounded-2xl text-sm text-center hover:bg-yellow-400 transition-all shadow-lg"
          >
            Order Now
          </a>

        </div>
      </div>
    </>
  );
};

export default Navbar;