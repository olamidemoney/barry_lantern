const CTA = () => {
  return (
    <section className="bg-[#6b7a8d] py-16 px-10 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">
        Barry Lantern — Rated No. 1 Trusted Oil & Gas Marketing & Logistics Company
      </h2>
      <p className="text-gray-200 text-sm max-w-2xl mx-auto mb-8">
        Sales and Supply of Petroleum Products, Marine Logistics, and Project Financing. 
        Your business is important to us. Get in touch with us to order any of our products or services.
      </p>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        
          <a href="/contact"
          className="bg-[#003366] text-white font-bold px-8 py-3 uppercase text-sm tracking-widest hover:bg-[#f0a500] hover:text-black transition-all flex items-center gap-2">
          Contact Us ▶
        </a>
        
          <a href="/contact/service-request"
          className="border-2 border-white text-white font-bold px-8 py-3 uppercase text-sm tracking-widest hover:bg-white hover:text-[#003366] transition-all flex items-center gap-2">
          Request a Service ▶
        </a>
      </div>
    </section>
  );
};

export default CTA;