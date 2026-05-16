const Hero = () => {
  return (
    <section
      className="relative w-full h-[90vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 px-10 md:px-20 text-white max-w-3xl">
        <p className="text-[#f0a500] font-semibold tracking-widest uppercase text-sm mb-3">
          Welcome to Barry Lantern Oil & Gas Limited
        </p>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Powering Nigeria's <br />
          <span className="text-[#f0a500]">Energy Future</span>
        </h2>
        <p className="text-lg text-gray-200 mb-8 leading-relaxed">
          A leading oil & gas marketing and marine logistics company delivering
          reliable energy solutions across Nigeria and beyond.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="/services" className="bg-[#f0a500] text-black font-bold px-8 py-3 rounded hover:bg-yellow-500 transition-all">
            Our Services
          </a>
          <a href="/contact" className="border-2 border-white text-white font-bold px-8 py-3 rounded hover:bg-white hover:text-black transition-all">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;