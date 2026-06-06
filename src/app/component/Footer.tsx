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
                   {item.label}
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
  <a href="https://facebook.com/barryoilandgas" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
    className="bg-[#1877f2] w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-all">
    <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  </a>
  <a href="https://linkedin.com/company/barryoilandgas" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
    className="bg-[#0a66c2] w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-all">
    <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  </a>
  <a href="https://x.com/barryoilandgas" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
    className="bg-[#000000] w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-all">
    <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  </a>
  <a href="https://wa.me/2348131595373" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
    className="bg-[#25d366] w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-all">
    <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.546 5.877L.057 23.572a.75.75 0 00.921.921l5.695-1.489A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.726 9.726 0 01-4.964-1.357l-.355-.212-3.683.964.982-3.588-.232-.368A9.725 9.725 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
    </svg>
  </a>
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