const About = () => {
  return (
    <section className="py-16 px-10 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">

        {/* Left - Image */}
        <div className="w-full md:w-1/2">
          <div className="w-full h-80 bg-gray-200 flex items-center justify-center border-2 border-gray-300">
            <span className="text-gray-400 text-sm">Company Image Here</span>
          </div>
        </div>

        {/* Right - Text */}
        <div className="w-full md:w-1/2">
          <p className="text-[#f0a500] font-semibold uppercase tracking-widest text-sm mb-2">Who We Are</p>
          <h2 className="text-3xl font-bold text-[#003366] mb-4">About Barry Lantern Oil & Gas Limited</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Barry Lantern Oil & Gas Limited (RC: 97875) is a duly registered oil & gas marketing
            and marine logistics company operating across Nigeria. We deliver reliable energy
            solutions spanning downstream supply, vessel charter, haulage, and project financing
            with a commitment to excellence and integrity.
          </p>

          {/* Vision */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-[#003366] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl shrink-0">
              🔭
            </div>
            <div>
              <h3 className="font-bold text-[#003366] text-lg">Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To be Nigeria's most trusted partner in oil & gas marketing, marine logistics,
                and energy project financing.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="flex items-start gap-4">
            <div className="bg-[#003366] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl shrink-0">
              ⚙️
            </div>
            <div>
              <h3 className="font-bold text-[#003366] text-lg">Core Values</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Integrity, reliability, and excellence in every service we render to our clients
                across Nigeria and internationally.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;