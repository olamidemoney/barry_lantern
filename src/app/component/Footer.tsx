import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-[#1a1a2e] text-white">

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Column 1 - About Links */}
        <div>
          <h4 className="font-bold text-white text-base mb-4 pb-2 border-b border-gray-600">Link About Us</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="/about" className="hover:text-white transition-all flex items-center gap-1">› About Us</a></li>
            <li><a href="/about/vision" className="hover:text-white transition-all flex items-center gap-1">› Vision</a></li>
            <li><a href="/about/core-values" className="hover:text-white transition-all flex items-center gap-1">› Core Value</a></li>
            <li><a href="/contact" className="hover:text-white transition-all flex items-center gap-1">› Contact</a></li>
            <li><a href="/partnership" className="hover:text-white transition-all flex items-center gap-1">› Global Partnership</a></li>
            <li><a href="/contact/service-request" className="hover:text-white transition-all flex items-center gap-1">› Service Request Form</a></li>
          </ul>
        </div>

        {/* Column 2 - Service Links */}
        <div>
          <h4 className="font-bold text-white text-base mb-4 pb-2 border-b border-gray-600">Links to access our services</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="/services/downstream" className="hover:text-white transition-all flex items-center gap-1">› Downstream supply</a></li>
            <li><a href="/services/marine" className="hover:text-white transition-all flex items-center gap-1">› Marine Logistics</a></li>
            <li><a href="/services/haulage" className="hover:text-white transition-all flex items-center gap-1">› Logistics & Haulage</a></li>
            <li><a href="/services/financing" className="hover:text-white transition-all flex items-center gap-1">› Financial instrument and Monetization</a></li>
            <li><a href="/services/downstream" className="hover:text-white transition-all flex items-center gap-1">› Distribution of Petroleum Products</a></li>
          </ul>
        </div>

        {/* Column 3 - Address */}
        <div>
          <h4 className="font-bold text-white text-base mb-4 pb-2 border-b border-gray-600">Our Address</h4>
          <div className="space-y-4 text-sm text-gray-400">
            <div>
              <p className="text-white font-semibold">Registered Address | HQ:</p>
              <p>Nigeria</p>
            </div>
            <div>
              <p className="text-white font-semibold">Phone:</p>
              <p>08131595373</p>
            </div>
            <div>
              <p className="text-white font-semibold">Email:</p>
              <p>info@barryoilandgas.com</p>
              <p>barry_oil@yahoo.com</p>
            </div>
          </div>
        </div>

        {/* Column 4 - Get in touch */}
        <div>
          <h4 className="font-bold text-white text-base mb-4 pb-2 border-b border-gray-600">Get in touch with Us</h4>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Barry Lantern Oil & Gas Limited (RC: 97875) is a duly registered oil & gas marketing and marine logistics company in Nigeria with expertise in petroleum products supply, marine logistics, haulage, and project financing.
          </p>
          <p className="text-gray-400 text-sm italic">Contact us to get started.</p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            <a href="#" className="bg-[#1877f2] w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold hover:opacity-80 transition-all">f</a>
            <a href="#" className="bg-[#0a66c2] w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold hover:opacity-80 transition-all">in</a>
            <a href="#" className="bg-[#1da1f2] w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold hover:opacity-80 transition-all">𝕏</a>
            <a href="https://wa.me/2348131595373" target="_blank" rel="noopener noreferrer" className="bg-[#25d366] w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold hover:opacity-80 transition-all">W</a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-[#111827] py-4 px-10">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500 mb-2">
          <a href="/services" className="hover:text-white transition-all">Services</a>
          <a href="/services/downstream" className="hover:text-white transition-all">Downstream</a>
          <a href="/services/marine" className="hover:text-white transition-all">Marine Logistics</a>
          <a href="/services/haulage" className="hover:text-white transition-all">Logistics & Haulage</a>
          <a href="/services/financing" className="hover:text-white transition-all">Financial instrument and Monetization</a>
        </div>
        <p className="text-center text-xs text-gray-600 mt-2">
          Copyright © 2025 Barry Lantern Oil & Gas Limited. All rights reserved. &nbsp;|&nbsp; RC: 97875 &nbsp;|&nbsp; <em>In God We Trust</em>
        </p>
      </div>

    </footer>
  );
};

export default Footer;