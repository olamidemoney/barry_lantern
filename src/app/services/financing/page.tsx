import Navbar from "@/app/component/navbar";
import Footer from "@/app/component/Footer";
import Link from "next/link";

export const metadata = {
  title: "Project Financing | Barry Lantern Oil & Gas Limited",
  description: "Structured project financing solutions for oil and gas ventures, energy infrastructure, and industrial projects.",
};

export default function FinancingPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a1a0a] to-black opacity-90" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/financing-hero.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <p className="text-[#f0a500] text-sm font-bold uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Project Financing
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            {/* Update this with your actual description */}
            Tailored financing structures to support oil and gas projects, energy infrastructure, and industrial ventures from concept to completion.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact/service-request" className="bg-[#f0a500] text-black font-bold px-8 py-3 rounded hover:bg-yellow-500 transition-all text-sm">
              Discuss Financing
            </a>
            <Link href="/services/upstream" className="border border-white/30 text-white font-bold px-8 py-3 rounded hover:border-[#f0a500] hover:text-[#f0a500] transition-all text-sm">
              ← Back to Upstream Supply
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#003366] mb-4">What is Project Financing?</h2>
              <div className="w-12 h-1 bg-[#f0a500] mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                {/* Replace with your actual content */}
                Project financing is the long-term financing of infrastructure and industrial projects based upon the projected cash flows of the project rather than the balance sheets of the project sponsors.
              </p>
              <p className="text-gray-600 leading-relaxed">
                {/* Replace with your actual content */}
                We work closely with financial institutions, investors, and project developers to structure deals that unlock capital for energy and oil & gas projects of all sizes.
              </p>
            </div>
            <div className="bg-[#f5f7fa] rounded-lg p-8 border border-gray-100">
              <div className="h-56 rounded-lg bg-gradient-to-br from-[#003366] to-[#0a3a0a] flex items-center justify-center">
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
              { title: "Debt Financing", desc: "Structuring of loan facilities and credit lines from banks and development finance institutions." },
              { title: "Equity Financing", desc: "Connecting projects with strategic investors and equity partners for capital injection." },
              { title: "Trade Finance", desc: "Letters of credit, invoice financing, and supply chain finance for oil and gas transactions." },
              { title: "Project Advisory", desc: "Financial modelling, feasibility studies, and investment structuring for energy projects." },
              { title: "Joint Venture Structuring", desc: "Setting up JV frameworks between local and international partners for joint development." },
              { title: "Grant & Facility Access", desc: "Assistance accessing government grants, DFI facilities, and concessionary funding lines." },
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
              { title: "Sector Expertise", desc: "Deep understanding of oil and gas project economics and financing structures." },
              { title: "Lender Relationships", desc: "Established relationships with local and international banks and DFIs." },
              { title: "End-to-End Support", desc: "From financial modelling to deal close — we manage the full financing process." },
              { title: "Confidentiality", desc: "All project details handled with strict discretion and professional confidentiality." },
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
          <h2 className="text-3xl font-bold text-black mb-4">Let's Finance Your Project</h2>
          <p className="text-black/70 mb-8 text-base leading-relaxed">
            Speak with our project financing team to explore the best capital structure for your energy or oil & gas venture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact/service-request" className="bg-black text-white font-bold px-8 py-3 rounded hover:bg-[#003366] transition-all text-sm">
              Start a Conversation
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