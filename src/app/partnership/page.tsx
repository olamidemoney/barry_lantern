import Navbar from "@/app/component/navbar";
import Footer from "@/app/component/Footer";

export default function PartnershipPage() {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <div
        className="w-full h-64 bg-cover bg-center relative flex items-end pb-8 mt-[88px]"
        style={{ backgroundImage: "url('/barry_lantern_image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-8 md:px-20">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Global Partnership</h1>
          <p className="text-gray-300 mt-2 text-sm">Home / Global Partnership</p>
        </div>
      </div>

      {/* Intro Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Globe Image */}
          <div className="flex justify-center">
            <div
              className="w-72 h-72 md:w-96 md:h-96 bg-cover bg-center rounded-full shadow-2xl border-4 border-[#f0a500]/30"
              style={{ backgroundImage: "url('/globe.png')" }}
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-[#f0a500] font-semibold uppercase tracking-widest text-sm mb-2">
              Worldwide Reach
            </p>
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Global Partnership</h2>
            <div className="w-12 h-1 bg-[#f0a500] mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
              At Barry Lantern Oil & Gas Limited, we believe in partnering with viable organizations locally and internationally to achieve our organizational goals and meet our customers' and market demands.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
              If you are interested in partnering with us on any of our services or you want us to be your strategic partner in any similar ventures as regards International Business and Trade, please fill out the form below to get started.
            </p>
            <p className="text-[#003366] font-bold mb-4">
              We are open to Global Partnerships across the world in the following areas:
            </p>
            <ul className="space-y-2">
              {[
                "Business Expansion",
                "International Business Trade",
                "Export and Importation of Commodities into various regions",
                "Crude Oil Trading (Worldwide)",
                "Marketing Partner",
                "Distribution",
                "Business-To-Business MOU",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                  <span className="text-[#f0a500] font-bold mt-0.5 shrink-0">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="bg-[#001f3f] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#f0a500] font-semibold uppercase tracking-widest text-sm mb-2">
              Why Us
            </p>
            <h2 className="text-3xl font-bold text-white mb-3">Why Partner With Barry Lantern?</h2>
            <div className="w-12 h-1 bg-[#f0a500] mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🌍", title: "Pan-African Reach", desc: "Operating across Nigeria and multiple African markets with established trade networks." },
              { icon: "🤝", title: "Trusted Partner", desc: "RC: 976879  registered company with a proven track record in oil & gas marketing and logistics." },
              { icon: "⚡", title: "Fast Execution", desc: "We move quickly on deals and partnerships, ensuring minimal delays in project execution." },
              { icon: "🔒", title: "Confidential & Secure", desc: "All partnership discussions and MOU arrangements handled with strict professional confidentiality." },
              { icon: "💼", title: "Full Service Capability", desc: "From upstream supply to marine logistics, haulage, and project financing — we cover it all." },
              { icon: "📈", title: "Growth Focused", desc: "We are driven by long-term value creation for our partners, clients, and stakeholders." },
            ].map((item) => (
              <div key={item.title} className="bg-[#002a52] p-8 rounded-xl border-l-4 border-[#f0a500] hover:bg-[#003366] transition-all">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Request Form */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#f0a500] font-semibold uppercase tracking-widest text-sm mb-2">
              Get Started
            </p>
            <h2 className="text-3xl font-bold text-[#003366] mb-3">Global Partnership Request Form</h2>
            <div className="w-12 h-1 bg-[#f0a500] mx-auto mb-4" />
            <p className="text-gray-500 text-sm">
              If you wish to partner with Barry Lantern Oil & Gas Limited, fill in your details below.
            </p>
          </div>

         <form className="space-y-6">
  {/* Name */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-semibold text-[#003366] mb-1">
        First Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        placeholder="First name"
        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:border-[#f0a500] transition-all"
      />
    </div>
    <div>
      <label className="block text-sm font-semibold text-[#003366] mb-1">
        Last Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        placeholder="Last name"
        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:border-[#f0a500] transition-all"
      />
    </div>
  </div>

  {/* Email */}
  <div>
    <label className="block text-sm font-semibold text-[#003366] mb-1">
      Email <span className="text-red-500">*</span>
    </label>
    <input
      type="email"
      placeholder="your@email.com"
      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:border-[#f0a500] transition-all"
    />
  </div>

  {/* Company */}
  <div>
    <label className="block text-sm font-semibold text-[#003366] mb-1">
      Name of Company
    </label>
    <input
      type="text"
      placeholder="Your company name"
      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:border-[#f0a500] transition-all"
    />
  </div>

  {/* Phone */}
  <div>
    <label className="block text-sm font-semibold text-[#003366] mb-1">
      Phone Number
    </label>
    <input
      type="tel"
      placeholder="+234 000 000 0000"
      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:border-[#f0a500] transition-all"
    />
  </div>

  {/* Partnership Area */}
  <div>
    <label className="block text-sm font-semibold text-[#003366] mb-1">
      Area of Partnership <span className="text-red-500">*</span>
    </label>
    <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:border-[#f0a500] transition-all">
      <option value="">Select an area</option>
      <option>Business Expansion</option>
      <option>International Business Trade</option>
      <option>Export and Importation of Commodities</option>
      <option>Crude Oil Trading (Worldwide)</option>
      <option>Marketing Partner</option>
      <option>Distribution</option>
      <option>Business-To-Business MOU</option>
      <option>Other</option>
    </select>
  </div>

  {/* Message */}
  <div>
    <label className="block text-sm font-semibold text-[#003366] mb-1">
      Comment or Message <span className="text-red-500">*</span>
    </label>
    <textarea
      rows={5}
      placeholder="Tell us how we can help each other grow..."
      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:border-[#f0a500] transition-all resize-none"
    />
  </div>

  <button
    type="submit"
    className="w-full bg-[#f0a500] text-black font-bold py-4 rounded-lg hover:bg-yellow-500 transition-all text-sm"
  >
    Submit Partnership Request
  </button>
</form>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f0a500] py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-4">Ready to Partner With Us?</h2>
          <p className="text-black/70 mb-8 text-base leading-relaxed">
            Reach out directly to our team to discuss partnership opportunities in oil & gas marketing, marine logistics, and international trade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
              <a href="mailto:info@barryoilandgas.com"
              className="bg-black text-white font-bold px-8 py-3 rounded hover:bg-[#003366] transition-all text-sm"
            >
              Email Us
            </a>
            
              <a href="https://wa.me/2348024729799"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black text-black font-bold px-8 py-3 rounded hover:bg-black hover:text-white transition-all text-sm"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}