const CTA = () => {
  return (
    <section className="bg-[#6b7a8d] py-12 sm:py-16 px-4 sm:px-8 text-center text-white">

      <h2 className="font-bold mb-4 leading-tight
                     text-xl
                     sm:text-2xl
                     md:text-3xl
                     max-w-3xl mx-auto">
        Barry Lantern — Rated No.&nbsp;1 Trusted<br className="hidden sm:block" />
        Oil &amp; Gas Marketing &amp; Logistics Company
      </h2>

      <p className="text-gray-200 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
        Sales and Supply of Petroleum Products, Marine Logistics, Provision of instruments
        and Monetization. Your business is important to us.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        <a
          href="/contact"
          className="w-full sm:w-auto bg-[#003366] text-white font-bold
                     px-6 py-3 uppercase text-xs sm:text-sm tracking-widest
                     hover:bg-[#f0a500] hover:text-black transition-all
                     flex items-center justify-center gap-2"
        >
          Contact Us ▶
        </a>
        <a
          href="/contact/service-request"
          className="w-full sm:w-auto border-2 border-white text-white font-bold
                     px-6 py-3 uppercase text-xs sm:text-sm tracking-widest
                     hover:bg-white hover:text-[#003366] transition-all
                     flex items-center justify-center gap-2"
        >
          Request a Service ▶
        </a>
      </div>

    </section>
  );
};

export default CTA;