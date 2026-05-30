import Navbar from "@/app/component/navbar";
import Footer from "@/app/component/Footer";

export const metadata = {
  title: "Service Request | Barry Lantern Oil & Gas Limited",
  description: "Submit a service request to Barry Lantern Oil & Gas Limited.",
};

export default function ServiceRequestPage() {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-[#001f3f] pt-32 pb-16 px-6 text-center">
        <p className="text-[#f0a500] text-sm font-bold uppercase tracking-widest mb-3">
          Barry Lantern Oil & Gas
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Service Request
        </h1>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="h-[2px] w-16 bg-gray-600" />
          <div className="w-2 h-2 bg-[#f0a500] rotate-45" />
          <div className="h-[2px] w-16 bg-gray-600" />
        </div>
        <p className="text-gray-400 text-sm mt-4 max-w-xl mx-auto">
          Fill out the form below and our team will get back to you within 24 hours.
        </p>
      </section>

      {/* Form Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">

            {/* Left — Info Cards */}
            <div className="md:col-span-1 flex flex-col gap-6">

              <div className="bg-[#001f3f] rounded-xl p-6 text-white">
                <div className="w-10 h-10 bg-[#f0a500] rounded-lg flex items-center justify-center mb-4 text-black text-lg">📍</div>
                <h3 className="font-bold text-sm uppercase tracking-widest text-[#f0a500] mb-2">Our Office</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Nigeria
                </p>
              </div>

              <div className="bg-[#001f3f] rounded-xl p-6 text-white">
                <div className="w-10 h-10 bg-[#f0a500] rounded-lg flex items-center justify-center mb-4 text-black text-lg">📞</div>
                <h3 className="font-bold text-sm uppercase tracking-widest text-[#f0a500] mb-2">Phone</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  08131595373
                </p>
              </div>

              <div className="bg-[#001f3f] rounded-xl p-6 text-white">
                <div className="w-10 h-10 bg-[#f0a500] rounded-lg flex items-center justify-center mb-4 text-black text-lg">✉️</div>
                <h3 className="font-bold text-sm uppercase tracking-widest text-[#f0a500] mb-2">Email</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  info@barryoilandgas.com
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mt-1">
                  barry_oil@yahoo.com
                </p>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/2348131595373"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25d366] rounded-xl p-6 text-white flex items-center gap-4 hover:opacity-90 transition-all"
              >
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#25d366] font-bold text-lg shrink-0">W</div>
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-widest mb-1">WhatsApp Us</h3>
                  <p className="text-white/80 text-xs">+234 813 159 5373</p>
                </div>
              </a>

            </div>

            {/* Right — Form */}
            <div className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-[#001f3f] mb-1">Submit a Request</h2>
              <p className="text-gray-400 text-sm mb-8">All fields marked * are required.</p>

              <form
                action="https://formsubmit.co/info@barryoilandgas.com"
                method="POST"
                className="space-y-5"
              >
                {/* Spam prevention */}
                <input type="text" name="_honey" className="hidden" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Service Request — Barry Lantern Oil & Gas" />
                <input type="hidden" name="_next" value="https://barryoilandgas.com/thank-you" />

                {/* Full Name + Company */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      required
                      placeholder="John Doe"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#f0a500] focus:ring-1 focus:ring-[#f0a500] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your Company Ltd"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#f0a500] focus:ring-1 focus:ring-[#f0a500] transition-all"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#f0a500] focus:ring-1 focus:ring-[#f0a500] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+234 800 000 0000"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#f0a500] focus:ring-1 focus:ring-[#f0a500] transition-all"
                    />
                  </div>
                </div>

                {/* Service Requested */}
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#f0a500] focus:ring-1 focus:ring-[#f0a500] transition-all bg-white"
                  >
                    <option value="">— Select a Service —</option>
                    <option value="Upstream Supply">Upstream Supply</option>
                    <option value="Downstream Supply">Downstream Supply</option>
                    <option value="Marine Logistics">Marine Logistics</option>
                    <option value="Logistics & Haulage">Logistics & Haulage</option>
                    <option value="Project Financing">Project Financing</option>
                    <option value="Financial Instrument & Monetization">Financial Instrument & Monetization</option>
                    <option value="Distribution of Petroleum Products">Distribution of Petroleum Products</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Country */}
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    placeholder="e.g. Nigeria"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#f0a500] focus:ring-1 focus:ring-[#f0a500] transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                    Request Details *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe your request in detail — product type, quantity, delivery location, timeline, etc."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#f0a500] focus:ring-1 focus:ring-[#f0a500] transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#f0a500] text-black font-bold py-4 rounded-lg hover:bg-yellow-500 transition-all text-sm uppercase tracking-widest"
                >
                  Submit Request
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Barry Lantern Oil & Gas Limited (RC: 97875) — By submitting this form you agree to be contacted by our team regarding your request.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}