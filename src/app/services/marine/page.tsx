import Navbar from "@/app/component/navbar";
import Footer from "@/app/component/Footer";
import Link from "next/link";

export const metadata = {
  title: "Marine Logistics | Barry Lantern Oil & Gas Limited",
  description: "Offshore and marine logistics services including vessel chartering, crew boat operations, and marine cargo handling.",
};

export default function MarinePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#001a2a] to-black opacity-90" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/offshore_marine.png')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <p className="text-[#f0a500] text-sm font-bold uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Marine Logistics
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            {/* Update this with your actual description */}
            Specialist marine logistics services for offshore oil and gas operations — from vessel chartering to crew and cargo management.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact/service-request" className="bg-[#f0a500] text-black font-bold px-8 py-3 rounded hover:bg-yellow-500 transition-all text-sm">
              Request This Service
            </a>
            <Link href="/services/haulage" className="border border-white/30 text-white font-bold px-8 py-3 rounded hover:border-[#f0a500] hover:text-[#f0a500] transition-all text-sm">
              Next: Logistics & Haulage →
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#003366] mb-4">Our Marine Capabilities</h2>
              <div className="w-12 h-1 bg-[#f0a500] mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                {/* Replace with your actual content */}
                Our marine logistics division provides end-to-end support for offshore and coastal operations, handling everything from vessel procurement to port coordination and cargo management.
              </p>
              <p className="text-gray-600 leading-relaxed">
                {/* Replace with your actual content */}
                With a strong network of marine operators and port agents, we ensure your offshore assets are always supported efficiently and safely.
              </p>
            </div>
            <div className="bg-[#f5f7fa] rounded-lg p-8 border border-gray-100">
              <div className="h-56 rounded-lg bg-gradient-to-br from-[#003366] to-[#001a3a] flex items-center justify-center">
                <p className="text-white/40 text-sm"><img src="/marine_logistics.png" alt="Marine Vessels" className="max-w-full max-h-full" /></p>
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
              { title: "Vessel Chartering", desc: "Sourcing and chartering of crew boats, supply vessels, barges, and tugboats for offshore operations." },
              { title: "Crew Boat Operations", desc: "Safe and timely crew transfers between onshore bases and offshore platforms." },
              { title: "Cargo Handling", desc: "Marine cargo loading, discharge, and handling at jetties and offshore platforms." },
              { title: "Port Agency Services", desc: "Comprehensive port agency support including customs clearance and port authority coordination." },
              { title: "Offshore Fuel Supply", desc: "Bunkering and fuel supply services direct to offshore vessels and platforms." },
              { title: "Marine Safety Compliance", desc: "Ensuring all marine operations meet NIMASA, ISPS, and international safety standards." },
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
              { title: "Experienced Marine Team", desc: "A seasoned team of marine logistics specialists with deep offshore industry knowledge." },
              { title: "Vetted Vessel Partners", desc: "Partnerships with certified and well-maintained vessel operators across the region." },
              { title: "Regulatory Compliance", desc: "Full compliance with NIMASA, IMO, and ISPS codes for safe and legal operations." },
              { title: "Rapid Mobilisation", desc: "Fast vessel and resource deployment to meet urgent offshore operational demands." },
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
          <h2 className="text-3xl font-bold text-black mb-4">Need Marine Logistics Support?</h2>
          <p className="text-black/70 mb-8 text-base leading-relaxed">
            Talk to our marine team today to arrange vessel chartering, cargo handling, or port agency services.
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