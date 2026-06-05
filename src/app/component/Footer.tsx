import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a2e] text-white">

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-16
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

        {/* Column 1 */}
        <div>
          <h4 className="font-bold text-white text-sm sm:text-base mb-4 pb-2 border-b border-gray-600">
            About Us
          </h4>
          <ul className="space-y-2 sm:space-y-3 text-sm text-gray-400">
            {[
              { label: "About Us",             href: "/about" },
              { label: "Vision",               href: "/about/vision" },
              { label: "Core Value",           href: "/about/core-values" },
              { label: "Contact",              href: "/contact" },
              { label: "Global Partnership",   href: "/partnership" },
              { label: "Service Request Form", href: "/contact/service-request" },
            ].map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-white transition-all flex items-center gap-1 text-xs sm:text-sm">
                  › {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-bold text-white text-sm sm:text-base mb-4 pb-2 border-b border-gray-600">
            Our Services
          </h4>
          <ul className="space-y-2 sm:space-y-3 text-gray-400">
            {[
              { label: "Downstream Supply",              href: "/services/downstream" },
              { label: "Marine Logistics",               href: "/services/marine" },
              { label: "Logistics & Haulage",            href: "/services/haulage" },
              { label: "Financial Instrument",           href: "/services/financing" },
              { label: "Petroleum Distribution",        href: "/services/downstream" },
            ].map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-white transition-all flex items-center gap-1 text-xs sm:text-sm">
                  › {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-bold text-white text-sm sm:text-base mb-4 pb-2 border-b border-gray-600">
            Our Address
          </h4>
          <div className="space-y-3 text-gray-400">
            <div>
              <p className="text-white font-semibold text-xs sm:text-sm">HQ — Nigeria</p>
            </div>
            <div>
              <p className="text-white font-semibold text-xs sm:text-sm">Phone</p>
              <a href="tel:08131595373" className="text-xs sm:text-sm hover:text-[#f0a500] transition-all">
                08131595373
              </a>
            </div>
            <div>
              <p className="text-white font-semibold text-xs sm:text-sm">Email</p>
              <a href="mailto:info@barryoilandgas.com" className="block text-xs sm:text-sm hover:text-[#f0a500] transition-all break-all">
                info@barryoilandgas.com
              </a>
              <a href="mailto:barry_oil@yahoo.com" className="block text-xs sm:text-sm hover:text-[#f0a500] transition-all break-all">
                barry_oil@yahoo.com
              </a>
            </div>
          </div>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-bold text-white text-sm sm:text-base mb-4 pb-2 border-b border-gray-600">
            Get in Touch
          </h4>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
            Barry Lantern Oil &amp; Gas Limited (RC: 976879) is a duly registered oil &amp; gas
            marketing and marine logistics company in Nigeria.
          </p>
          <p className="text-gray-400 text-xs sm:text-sm italic mb-5">Contact us to get started.</p>

          {/* Social Icons */}
          <div className="flex gap-3 flex-wrap">
            <a href="#" aria-label="Facebook" className="bg-[#1877f2] w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold hover:opacity-80 transition-all">f</a>
            <a href="#" aria-label="LinkedIn" className="bg-[#0a66c2] w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold hover:opacity-80 transition-all">in</a>
            <a href="#" aria-label="Twitter" className="bg-[#1da1f2] w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold hover:opacity-80 transition-all">𝕏</a>
            <a href="https://wa.me/2348131595373" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="bg-[#25d366] w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold hover:opacity-80 transition-all">W</a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-[#111827] py-4 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-gray-500 mb-2">
          {[
            { label: "Services",                href: "/services" },
            { label: "Downstream",              href: "/services/downstream" },
            { label: "Marine Logistics",        href: "/services/marine" },
            { label: "Logistics & Haulage",     href: "/services/haulage" },
            { label: "Financial Instrument",    href: "/services/financing" },
          ].map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white transition-all whitespace-nowrap">
              {item.label}
            </a>
          ))}
        </div>
        <p className="text-center text-xs text-gray-600 mt-2 leading-relaxed">
          Copyright &copy; 2025 Barry Lantern Oil &amp; Gas Limited. All rights reserved.
          &nbsp;|&nbsp; RC: 976879 &nbsp;|&nbsp; <em>In God We Trust</em>
        </p>
      </div>

    </footer>
  );
};

export default Footer;