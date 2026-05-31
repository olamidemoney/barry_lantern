import Navbar from "@/app/component/navbar";
import Footer from "@/app/component/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero Banner */}
        <div
          className="w-full h-64 bg-cover bg-center relative flex items-end pb-8 mt-[88px]"
          style={{ backgroundImage: "url('/img1.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 px-8 md:px-20">
            <h1 className="text-3xl md:text-4xl font-bold text-white">About Us</h1>
            <p className="text-gray-300 mt-2 text-sm">Home / About Us</p>
          </div>
        </div>

        {/* About Section */}
        <section className="py-16 px-6 md:px-10 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">

            {/* Left - Image */}
            <div className="w-full md:w-1/2">
              <div
                className="w-full h-[300px] md:h-[500px] bg-cover bg-right rounded-lg shadow-lg"
                style={{ backgroundImage: "url('/tanker_trucks.png')" }}
              ></div>
            </div>

            {/* Right - Text */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 mb-2">
                <p className="text-[#f0a500] font-semibold text-sm">Welcome to</p>
                <div className="h-[2px] w-12 bg-[#f0a500]"></div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-2">
                Barry Lantern Oil & Gas Limited
              </h2>
              <p className="text-gray-700 font-semibold mb-4">RC: 976879  — Registered Company.</p>
              <p className="text-gray-600 leading-relaxed mb-4 text-justify text-sm md:text-base">
                Barry Lantern Oil & Gas Limited is an indigenous oil and gas marketing and marine
                logistics company operating across Nigeria. We are active across the downstream
                value chain with emphasis on petroleum trading, marketing, distribution, and
                marine logistics services.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4 text-justify text-sm md:text-base">
                The company was founded with its Head Quarters in Nigeria, positioned to serve
                clients across all geopolitical zones. Our performance within the sector has
                resulted in significant growth in market share and client base.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4 text-justify text-sm md:text-base">
                We focus on creating long-term value through excellent service delivery and
                customer satisfaction, while ensuring quality and constructive partnerships with
                our various stakeholders.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify text-sm md:text-base">
                We are continuously evolving to ensure that access to our products and services
                is seamless, cost-effective, and safe. We are highly driven to be recognized as
                market leaders in the Nigerian Oil and Gas Sector — renowned for integrity,
                passion for excellence, and sustainable growth.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Core Values */}
        <section className="py-16 px-6 md:px-10 bg-[#001f3f]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

            <div className="bg-[#002a52] p-8 md:p-10 rounded-xl border-l-4 border-[#f0a500]">
              <div className="text-4xl mb-4">🔭</div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                To be Nigeria's most trusted and leading oil & gas marketing, marine logistics,
                and project financing company — delivering world-class energy solutions with
                integrity, excellence, and a commitment to sustainable growth across Africa
                and beyond.
              </p>
            </div>

            <div className="bg-[#002a52] p-8 md:p-10 rounded-xl border-l-4 border-[#f0a500]">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Core Values</h3>
              <ul className="space-y-3">
                {[
                  "Integrity — We operate with honesty and transparency",
                  "Excellence — We deliver the highest quality in every service",
                  "Reliability — Our clients can always count on us",
                  "Innovation — We continuously improve our processes",
                  "Customer Focus — Your satisfaction is our priority",
                ].map((value, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className="text-[#f0a500] font-bold mt-0.5">✓</span>
                    {value}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* Mission */}
        <section className="py-16 px-6 md:px-10 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-[#f0a500] font-semibold uppercase tracking-widest text-sm mb-2">What Drives Us</p>
            <h2 className="text-3xl font-bold text-[#003366] mb-8">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-base md:text-lg">
              To provide reliable, efficient, and world-class oil & gas marketing, marine
              logistics, haulage, and project financing services that empower businesses
              and communities across Nigeria and Africa — guided by the principle:
              <em className="text-[#f0a500] font-bold"> In God We Trust.</em>
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}