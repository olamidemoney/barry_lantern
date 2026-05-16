"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const closeAll = () => {
    setAboutOpen(false);
    setServicesOpen(false);
    setContactOpen(false);
  };

  return (
    <header className="w-full shadow-md font-sans">

      <div className="flex items-center px-10 py-5 bg-white border-b border-gray-200">
  <div className="w-24 h-24 mr-6 shrink-0">
    <img
      src="/logo (3).png"
      alt="Barry Lantern Oil & Gas Logo"
      className="w-full h-full object-contain"
    />
  </div>
        <div>
          <h1 className="text-3xl font-bold text-[#003366] leading-tight">
            Barry Lantern Oil & Gas Limited
          </h1>
          <p className="text-sm text-gray-500 tracking-widest mt-1">
            Oil & Gas Marketing &nbsp;|&nbsp; Marine Logistics &nbsp;|&nbsp; <em>In God We Trust</em>
          </p>
        </div>
      </div>

      <nav className="bg-white border-t border-gray-100">
        <div className="flex justify-end items-center px-10 py-3 space-x-8">

          <Link href="/" className="text-gray-700 hover:text-[#003366] font-semibold text-sm flex items-center gap-1 border-b-2 border-transparent hover:border-[#003366] pb-1 transition-all">
            🏠 Home
          </Link>

          <div className="relative">
            <button
              onClick={() => { setAboutOpen(!aboutOpen); setServicesOpen(false); setContactOpen(false); }}
              className="text-gray-700 hover:text-[#003366] font-semibold text-sm flex items-center gap-1 border-b-2 border-transparent hover:border-[#003366] pb-1 transition-all"
            >
              📁 About Us ▾
            </button>
            {aboutOpen && (
              <div className="absolute top-10 left-0 bg-white shadow-xl border border-gray-100 rounded z-50 w-48">
                <Link href="/about" onClick={closeAll} className="block px-5 py-3 hover:bg-gray-50 text-sm text-gray-700">👤 About Us</Link>
                <Link href="/about/vision" onClick={closeAll} className="block px-5 py-3 hover:bg-gray-50 text-sm text-gray-700">🔭 Vision</Link>
                <Link href="/about/core-values" onClick={closeAll} className="block px-5 py-3 hover:bg-gray-50 text-sm text-gray-700">💡 Core Values</Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => { setServicesOpen(!servicesOpen); setAboutOpen(false); setContactOpen(false); }}
              className="text-gray-700 hover:text-[#003366] font-semibold text-sm flex items-center gap-1 border-b-2 border-transparent hover:border-[#003366] pb-1 transition-all"
            >
              ⚙️ Services ▾
            </button>
            {servicesOpen && (
              <div className="absolute top-10 left-0 bg-white shadow-xl border border-gray-100 rounded z-50 w-56">
                <Link href="/services/downstream" onClick={closeAll} className="block px-5 py-3 hover:bg-gray-50 text-sm text-gray-700">⛽ Downstream Supply</Link>
                <Link href="/services/marine" onClick={closeAll} className="block px-5 py-3 hover:bg-gray-50 text-sm text-gray-700">🚢 Marine Logistics</Link>
                <Link href="/services/haulage" onClick={closeAll} className="block px-5 py-3 hover:bg-gray-50 text-sm text-gray-700">🚛 Logistics & Haulage</Link>
                <Link href="/services/financing" onClick={closeAll} className="block px-5 py-3 hover:bg-gray-50 text-sm text-gray-700">💰 Project Financing</Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => { setContactOpen(!contactOpen); setAboutOpen(false); setServicesOpen(false); }}
              className="text-gray-700 hover:text-[#003366] font-semibold text-sm flex items-center gap-1 border-b-2 border-transparent hover:border-[#003366] pb-1 transition-all"
            >
              📞 Contact ▾
            </button>
            {contactOpen && (
              <div className="absolute top-10 left-0 bg-white shadow-xl border border-gray-100 rounded z-50 w-52">
                <Link href="/contact" onClick={closeAll} className="block px-5 py-3 hover:bg-gray-50 text-sm text-gray-700">📬 Contact Form</Link>
                <Link href="/contact/service-request" onClick={closeAll} className="block px-5 py-3 hover:bg-gray-50 text-sm text-gray-700">📋 Service Request</Link>
              </div>
            )}
          </div>

          <Link href="/partnership" className="text-gray-700 hover:text-[#003366] font-semibold text-sm flex items-center gap-1 border-b-2 border-transparent hover:border-[#003366] pb-1 transition-all">
            🌍 Global Partnership
          </Link>

        </div>
      </nav>

      <div className="bg-[#003366] flex items-center justify-between px-10 py-2 text-sm text-white">
        <div className="flex items-center gap-8">
          <span>✉️ info@barryoilandgas.com</span>
          <span>📱 08024729799 &nbsp;|&nbsp; 08131595373</span>
          <span>📍 Nigeria</span>
        </div>
        <button className="bg-white text-[#003366] px-4 py-1 rounded font-semibold hover:bg-gray-100 transition-all">
          🔍 Search
        </button>
      </div>

    </header>
  );
};

export default Navbar;