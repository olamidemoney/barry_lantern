"use client";

import Navbar from "@/app/component/navbar";
import Footer from "@/app/component/Footer";
import Link from "next/link";
import { useState } from "react";

const instruments = [
  {
    icon: "📊",
    title: "Bank Guarantee (BG)",
    desc: "A bank guarantee is a financial instrument issued by a bank, ensuring that a specified sum will be paid to the beneficiary if the applicant fails to meet their obligations.",
  },
  {
    icon: "📄",
    title: "Standby Letter of Credit (SBLC)",
    desc: "An SBLC is issued by a bank on behalf of its client, guaranteeing payment to the seller if the buyer defaults on the agreement. Widely used in international trade.",
  },
  {
    icon: "💰",
    title: "BG & SBLC Monetization",
    desc: "Monetization of financial instruments involves converting Bank Guarantees (BG) or Standby Letters of Credit (SBLC) into cash or credit to unlock liquidity.",
  },
  {
    icon: "🏗️",
    title: "Project Finance",
    desc: "Comprehensive long-term financing of infrastructure and industrial projects based upon projected cash flows rather than the balance sheets of the project sponsors.",
  },
  {
    icon: "🔄",
    title: "Trade Finance",
    desc: "Letters of credit, invoice financing, and supply chain finance solutions for oil and gas transactions locally and internationally.",
  },
  {
    icon: "🤝",
    title: "Joint Venture Structuring",
    desc: "Setting up JV frameworks between local and international partners for joint development of energy and oil & gas projects.",
  },
];

const faqs = [
  {
    title: "1. Monetize Standby Letter of Credit (SBLC)",
    content:
      "A Standby Letter of Credit (SBLC) is a financial guarantee issued by a bank on behalf of a client. Widely used in international trade, it assures the beneficiary of payment if the client fails to fulfill their contractual obligations. Monetizing an SBLC allows holders to leverage its creditworthiness to access funds for liquidity, investments, or other financial needs.",
  },
  {
    title: "2. Monetize Bank Guarantee (BG)",
    content:
      "A Bank Guarantee (BG) is a commitment from a bank to cover a loss if a party fails to meet their contractual obligations. Monetizing a Bank Guarantee allows holders to leverage its value to access financing, often for large-scale projects, investments, or working capital needs.",
  },
  {
    title: "3. What is the Difference Between SBLC and BG?",
    content:
      "Both Bank Guarantee and Standby Letter of Credit protect buyers if a seller fails to meet contractual obligations. An SBLC works similarly but is governed by international standards like UCP 600 or ISP98, offering globally recognized rules and streamlined procedures. A BG is governed by civil law.",
  },
  {
    title: "4. How Long Does the Process Take?",
    content:
      "We handle a wide range of financial instruments, typically completing monetization within 10 business days. Our team ensures fast decisions, flexible options, and funding over €2B to more than 1,000 clients annually.",
  },
  {
    title: "5. What Projects Qualify for Financing?",
    content:
      "We finance oil & gas upstream and downstream projects, energy infrastructure, marine logistics ventures, industrial projects, and trade finance operations. Projects must demonstrate viable cash flow projections and regulatory compliance.",
  },
];

const whyUs = [
  { title: "Quick and Hassle-Free Process", desc: "We simplify the monetization of financial instruments, including Bank Guarantees (BG) and Standby Letters of Credit (SBLC)." },
  { title: "Transparent Finance Processing", desc: "Our procedures are clear and straightforward, ensuring full visibility throughout the entire process." },
  { title: "Trusted Financial Partner", desc: "With established relationships with reputable banks worldwide, we provide reliable support for monetizing bank instruments." },
  { title: "Fast Turnaround", desc: "We handle a wide range of financial instruments, typically completing monetization within 10 days." },
];

export default function FinancingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/barry_lantern_image.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#001f3f]/80" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <p className="text-[#f0a500] text-sm font-bold uppercase tracking-widest mb-3">
            Our Services
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Financial Instruments <br />
            <span className="text-[#f0a500]">& Monetization</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl leading-relaxed max-w-2xl mx-auto">
            Provision and monetization of Standby Letters of Credit (SBLC) and Bank Guarantees (BG) for oil & gas projects and international trade.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            
              <a href="/contact/service-request"
              className="bg-[#f0a500] text-black font-bold px-8 py-3 rounded hover:bg-yellow-500 transition-all text-sm"
            >
              Get Started
            </a>
            <Link
              href="/services"
              className="border border-white/30 text-white font-bold px-8 py-3 rounded hover:border-[#f0a500] hover:text-[#f0a500] transition-all text-sm"
            >
              ← Back to Services
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1 — Provision of Financial Instruments */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#f0a500] font-semibold uppercase tracking-widest text-sm mb-2">
              What We Provide
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
              Provision of Financial Instruments
            </h2>
            <p className="text-[#f0a500] font-semibold text-base mb-2">(SBLC & BG)</p>
            <div className="w-12 h-1 bg-[#f0a500] mx-auto mb-6" />
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Barry Lantern facilitates the provision of internationally recognized financial instruments to support trade, project execution, and business growth across Nigeria and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* SBLC */}
            <div className="bg-[#f5f7fa] rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div
                className="w-full h-56 bg-cover bg-center"
                style={{ backgroundImage: "url('/barry_lantern_image.jpg')" }}
              />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#f0a500] rounded-lg flex items-center justify-center text-xl">📄</div>
                  <h3 className="font-bold text-[#003366] text-xl">Standby Letter of Credit (SBLC)</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  A Standby Letter of Credit (SBLC) is a legal financial instrument in which a bank guarantees payment to a seller if the buyer fails to fulfill their contractual obligations. It serves as a secure backup ensuring the seller receives the agreed-upon funds even in the event of buyer default.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We work with top-tier banks to issue SBLCs that are fully verifiable, swift-transmittable, and compliant with UCP 600 and ISP98 international standards — giving your counterparties full confidence in every transaction.
                </p>
              </div>
            </div>

            {/* BG */}
            <div className="bg-[#f5f7fa] rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div
                className="w-full h-56 bg-cover bg-center"
                style={{ backgroundImage: "url('/money_in_hand.jpg')" }}
              />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#003366] rounded-lg flex items-center justify-center text-xl">📊</div>
                  <h3 className="font-bold text-[#003366] text-xl">Bank Guarantee (BG)</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  A Bank Guarantee acts as a financial safety net in business transactions, assuring the beneficiary — whether a buyer or seller — of a specified payment if the other party fails to fulfill contractual obligations. This helps reduce potential disruptions to working capital.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Barry Lantern provides BGs that effectively mitigate credit risk, offering protection against losses or damages arising from non-performance — giving all parties confidence and security in their business dealings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Monetization of Financial Instruments */}
      <section className="bg-[#f5f7fa] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#f0a500] font-semibold uppercase tracking-widest text-sm mb-2">
              Unlock Your Capital
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
              Monetization of Financial Instruments
            </h2>
            <p className="text-[#f0a500] font-semibold text-base mb-2">(SBLC & BG)</p>
            <div className="w-12 h-1 bg-[#f0a500] mx-auto mb-6" />
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              We provide strategic guidance, optimized terms, and tailored credit solutions to maximize the value of financial instruments for liquidity and investment needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
                Monetization of financial instruments involves converting Bank Guarantees (BG) or Standby Letters of Credit (SBLC) into cash or credit. This strategic financial approach enables holders to unlock the value of their instruments, enhancing liquidity, supporting investments, and meeting other financial objectives.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                Barry Lantern works closely with financial institutions and investors to structure monetization deals that release capital for energy and oil & gas projects of all sizes — fast, transparent, and compliant.
              </p>
              <div className="space-y-4">
                {[
                  "Convert BG/SBLC into immediate liquidity",
                  "Access credit lines backed by your instruments",
                  "Fund oil & gas projects without liquidating assets",
                  "Fast processing — typically within 10 business days",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 shrink-0 bg-[#f0a500] rounded-full flex items-center justify-center text-black font-bold text-xs mt-0.5">
                      ✓
                    </div>
                    <p className="text-gray-600 text-sm">{point}</p>
                  </div>
                ))}
              </div>
              
                <a href="/contact/service-request"
                className="inline-block mt-8 bg-[#f0a500] text-black font-bold px-8 py-3 rounded hover:bg-yellow-500 transition-all text-sm"
              >
                Discuss Monetization
              </a>
            </div>

            <div
              className="w-full h-[400px] bg-cover bg-center rounded-xl shadow-lg"
              style={{ backgroundImage: "url('/barry_lantern_image.jpg')" }}
            />
          </div>
        </div>
      </section>

      {/* Financial Instruments Grid */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#f0a500] font-semibold uppercase tracking-widest text-sm mb-2">
              Full Range
            </p>
            <h2 className="text-3xl font-bold text-[#003366] mb-3">
              All Financing Solutions
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Tailored financial products to meet your business needs and drive growth.
            </p>
            <div className="w-12 h-1 bg-[#f0a500] mx-auto mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {instruments.map((item) => (
              <div
                key={item.title}
                className="bg-[#003366] rounded-xl p-8 hover:bg-[#002a52] transition-all group cursor-default"
              >
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="font-bold text-white text-lg mb-3 group-hover:text-[#f0a500] transition-all">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion + Why Us */}
      <section className="bg-[#f5f7fa] py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#f0a500] font-semibold uppercase tracking-widest text-sm mb-2">
              Learn More
            </p>
            <h2 className="text-3xl font-bold text-[#003366] mb-2">
              Expert Monetization Solutions
            </h2>
            <div className="w-12 h-1 bg-[#f0a500] mb-8" />
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-[#003366] text-sm hover:bg-gray-50 transition-all"
                  >
                    {faq.title}
                    <span className="text-[#f0a500] font-bold text-lg shrink-0 ml-2">
                      {openFaq === i ? "×" : "+"}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                      <p className="pt-4">{faq.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[#f0a500] font-semibold uppercase tracking-widest text-sm mb-2">
              Why Barry Lantern
            </p>
            <h2 className="text-3xl font-bold text-[#003366] mb-2">
              Why Choose Us?
            </h2>
            <div className="w-12 h-1 bg-[#f0a500] mb-8" />
            <div className="space-y-6">
              {whyUs.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#f0a500] rounded-lg flex items-center justify-center text-black font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003366] mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="mt-10 rounded-xl p-6 bg-cover bg-center relative overflow-hidden"
              style={{ backgroundImage: "url('/barry_lantern_image.jpg')" }}
            >
              <div className="absolute inset-0 bg-[#001f3f]/80" />
              <div className="relative z-10">
                <p className="text-white font-bold text-lg mb-2">Ready to Get Started?</p>
                <p className="text-gray-300 text-sm mb-4">
                  Speak with our project financing team today.
                </p>
                
                 <a href="/contact/service-request"
                  className="inline-block bg-[#f0a500] text-black font-bold px-6 py-2 rounded text-sm hover:bg-yellow-500 transition-all"
                >
                  Start a Conversation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-[#003366] py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "€2B+", label: "Funding Facilitated" },
            { value: "1,000+", label: "Clients Served" },
            { value: "10 Days", label: "Avg. Turnaround" },
            { value: "100%", label: "Confidential Process" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-[#f0a500] text-3xl md:text-4xl font-bold mb-2">{stat.value}</p>
              <p className="text-gray-300 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f0a500] py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-4">
            Let's Finance Your Project
          </h2>
          <p className="text-black/70 mb-8 text-base leading-relaxed">
            Speak with our project financing team to explore the best capital structure for your energy or oil & gas venture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
              <a href="/contact/service-request"
              className="bg-black text-white font-bold px-8 py-3 rounded hover:bg-[#003366] transition-all text-sm"
            >
              Start a Conversation
            </a>
            
              <a href="/contact"
              className="border-2 border-black text-black font-bold px-8 py-3 rounded hover:bg-black hover:text-white transition-all text-sm"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
