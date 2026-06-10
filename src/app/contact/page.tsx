const Contact = () => {
  return (
    <section className="bg-[#001f3f] pt-24 pb-0">

      {/* Section Header */}
      <div className="text-center mb-12 px-10">
        <h2 className="text-4xl font-bold text-white inline-block border-b-4 border-[#f0a500] pb-2">
          Get In Touch With Us
        </h2>
        <p className="text-gray-300 text-sm mt-4">
          Investment, Business or Enquiries? Let's hear from you!
        </p>
      </div>

      {/* 3 Column Section */}
      <div className="grid grid-cols-1 md:grid-cols-3">

        {/* Left - Image */}
        <div
          className="h-96 md:h-auto bg-cover bg-center"
          style={{ backgroundImage: "url('/contact.jpg')" }}
        >
          {/* <div className="w-full h-full flex items-center justify-center bg-gray-700/50">
            <span className="text-gray-300 text-sm">Image Here</span>
          </div> */}
        </div>

        {/* Middle - Contact Form */}
        <div className="p-10 bg-[#002a52]">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full bg-white border border-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-[#f0a500] rounded text-gray-800"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white border border-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-[#f0a500] rounded text-gray-800"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-white border border-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-[#f0a500] rounded text-gray-800"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full bg-white border border-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-[#f0a500] rounded resize-none text-gray-800"
            />
            <button className="w-full bg-[#f0a500] text-black font-bold py-3 rounded hover:bg-yellow-500 transition-all">
              Send Mail
            </button>
          </div>
        </div>

        {/* Right - Contact Info */}
        <div className="p-10 bg-[#001833] space-y-8">

          <div className="flex items-start gap-4">
            <div className="text-2xl">📱</div>
            <div>
              <h4 className="font-bold text-white text-lg mb-1">Call Us</h4>
              <p className="text-[#f0a500] font-semibold">08024729799</p>
              <p className="text-[#f0a500] font-semibold">08131595373</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-2xl">✉️</div>
            <div>
              <h4 className="font-bold text-white text-lg mb-1">Mail Us</h4>
              <p className="text-[#f0a500] font-semibold text-sm">info@barryoilandgas.com</p>
              <p className="text-[#f0a500] font-semibold text-sm">barry_oil@yahoo.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-2xl">📍</div>
            <div>
              <h4 className="font-bold text-white text-lg mb-1">Address</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Nigeria</p>
            </div>
          </div>

          
           <a href="https://wa.me/2348024729799"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-600 transition-all">
            💬 Chat on WhatsApp
          </a>

        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-80">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7!2d3.3792!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNDEuMiJOIDPCsDIyJzQ1LjEiRQ!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </section>
  );
};

export default Contact;