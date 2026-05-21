import Navbar from "@/app/component/navbar";
import Footer from "@/app/component/Footer";
import Link from "next/link";

export const metadata = {
  title: "Upstream Supply | Barry Lantern Oil & Gas Limited",
  description: "Expert upstream oil and gas supply services — exploration, drilling, and production support.",
};

export default function UpstreamPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0d1a2a] to-black opacity-90" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/upstream-hero.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <p className="text-[#f0a500] text-sm font-bold uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Upstream Supply
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            {/* Update this with your actual description */}
            Comprehensive upstream oil and gas supply solutions — from exploration support to production-phase procurement.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact/service-request" className="bg-[#f0a500] text-black font-bold px-8 py-3 rounded hover:bg-yellow-500 transition-all text-sm">
              Request This Service
            </a>
            <Link href="/services/downstream" className="border border-white/30 text-white font-bold px-8 py-3 rounded hover:border-[#f0a500] hover:text-[#f0a500] transition-all text-sm">
              Next: Downstream Supply →
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#003366] mb-4">What is Upstream Supply?</h2>
              <div className="w-12 h-1 bg-[#f0a500] mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                {/* Replace with your actual content */}
                Upstream supply covers the early stages of the oil and gas value chain — including exploration, drilling, and the extraction of crude oil and natural gas from the ground or seabed.
              </p>
              <p className="text-gray-600 leading-relaxed">
                {/* Replace with your actual content */}
                At Barry Lantern Oil & Gas, we provide reliable procurement and supply chain support tailored to upstream operators, ensuring uninterrupted operations at every stage of production.
              </p>
            </div>
            <div className="bg-[#f5f7fa] rounded-lg p-8 border border-gray-100">
              {/* Replace this placeholder with an image: <img src="/images/upstream-detail.jpg" className="rounded-lg w-full" /> */}
              <div className="h-56 rounded-lg bg-gradient-to-br from-[#003366] to-[#0a1628] flex items-center justify-center">
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
              { title: "Exploration Support", desc: "Supply of equipment and materials for seismic surveys and geological exploration activities." },
              { title: "Drilling Supplies", desc: "End-to-end procurement of drilling consumables, chemicals, and equipment for onshore and offshore rigs." },
              { title: "Production Materials", desc: "Supply of production hardware, wellhead equipment, and field maintenance materials." },
              { title: "Vendor Management", desc: "Qualified vendor sourcing and management to ensure quality and compliance at every stage." },
              { title: "Logistics Coordination", desc: "Seamless delivery of materials to remote onshore fields and offshore platforms." },
              { title: "Technical Consultation", desc: "Expert advisory services to help optimize your upstream procurement strategy." },
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
              { title: "Industry Experience", desc: "Years of proven experience serving upstream operators across multiple regions." },
              { title: "Reliable Supply Chain", desc: "Robust supplier network ensuring timely delivery even in challenging environments." },
              { title: "Compliance & Quality", desc: "All supplies meet international oil and gas industry quality standards." },
              { title: "24/7 Support", desc: "Round-the-clock customer support to handle urgent procurement needs." },
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
          <h2 className="text-3xl font-bold text-black mb-4">Ready to Get Started?</h2>
          <p className="text-black/70 mb-8 text-base leading-relaxed">
            Contact us today to discuss your upstream supply requirements and get a tailored quote.
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