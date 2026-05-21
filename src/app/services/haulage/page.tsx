import Navbar from "@/app/component/navbar";
import Footer from "@/app/component/Footer";
import Link from "next/link";

export const metadata = {
  title: "Logistics & Haulage | Barry Lantern Oil & Gas Limited",
  description: "End-to-end road logistics and haulage services for petroleum products and oil field equipment.",
};

export default function HaulagePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1000] to-black opacity-90" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/haulage-hero.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <p className="text-[#f0a500] text-sm font-bold uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Logistics & Haulage
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            {/* Update this with your actual description */}
            Dependable road haulage and inland logistics solutions for petroleum products, equipment, and industrial cargo across key routes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact/service-request" className="bg-[#f0a500] text-black font-bold px-8 py-3 rounded hover:bg-yellow-500 transition-all text-sm">
              Request This Service
            </a>
            <Link href="/services/financing" className="border border-white/30 text-white font-bold px-8 py-3 rounded hover:border-[#f0a500] hover:text-[#f0a500] transition-all text-sm">
              Next: Project Financing →
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#003366] mb-4">Our Haulage Capabilities</h2>
              <div className="w-12 h-1 bg-[#f0a500] mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                {/* Replace with your actual content */}
                We operate a fleet of tankers and heavy-duty trucks for the safe and efficient transportation of petroleum products and oil field equipment across Nigeria and beyond.
              </p>
              <p className="text-gray-600 leading-relaxed">
                {/* Replace with your actual content */}
                Our logistics team manages routing, documentation, and compliance to ensure every consignment arrives safely and on schedule.
              </p>
            </div>
            <div className="bg-[#f5f7fa] rounded-lg p-8 border border-gray-100">
              <div className="h-56 rounded-lg bg-gradient-to-br from-[#2a1a00] to-[#f0a500] flex items-center justify-center">
                <p className="text-white/40 text-sm">[Add image here]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="bg-[#f5f7fa] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-3">What We Offer</h2>
            <div className="w-12 h-1 bg-[#f0a500] mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Petroleum Product Haulage", desc: "Safe transport of diesel, PMS, kerosene, and other refined products via certified tanker trucks." },
              { title: "Heavy Equipment Haulage", desc: "Movement of oilfield machinery, rig components, and oversized industrial equipment." },
              { title: "Depot-to-Depot Supply", desc: "Reliable product transfers between storage depots, tank farms, and distribution terminals." },
              { title: "Fleet Management", desc: "Maintained and GPS-tracked fleet ensuring real-time visibility and accountability." },
              { title: "Customs & Documentation", desc: "Full handling of waybills, DPR documentation, and interstate movement permits." },
              { title: "Last-Mile Delivery", desc: "Dedicated delivery runs to remote project sites, construction camps, and industrial facilities." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 border border-gray-100 hover:border-[#f0a500] hover:shadow-md transition-all group">
                <div className="w-8 h-8 bg-[#f0a500] rounded mb-4 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-sm" />
                </div>
                <h3 className="font-bold text-[#003366] mb-2 group-hover:text-[#f0a500] transition-all">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-[#003366] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Why Choose Barry Lantern?</h2>
            <div className="w-12 h-1 bg-[#f0a500] mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Certified Drivers & Fleet", desc: "All drivers are trained, licensed, and certified for petroleum product haulage." },
              { title: "GPS Tracking", desc: "Real-time fleet tracking for full visibility of every consignment in transit." },
              { title: "Insurance Coverage", desc: "All loads covered by comprehensive cargo and third-party insurance policies." },
              { title: "On-Time Delivery", desc: "Proven track record of on-time delivery with minimal disruptions." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="w-10 h-10 shrink-0 bg-[#f0a500] rounded flex items-center justify-center text-black font-bold text-lg">✓</div>
                <div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f0a500] py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-4">Need a Haulage Solution?</h2>
          <p className="text-black/70 mb-8 text-base leading-relaxed">
            Get in touch to discuss your logistics and haulage requirements — we'll provide a competitive and reliable solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact/service-request" className="bg-black text-white font-bold px-8 py-3 rounded hover:bg-[#003366] transition-all text-sm">
              Request a Quote
            </a>
            <a href="/contact" className="border-2 border-black text-black font-bold px-8 py-3 rounded hover:bg-black hover:text-white transition-all text-sm">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}