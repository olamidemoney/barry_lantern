import AnimateOnScroll from "./AnimateOnScroll";

const About = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center">

        {/* Image */}
        <AnimateOnScroll animation="animate-slideInLeft" className="w-full md:w-1/2">
          <div className="w-full h-56 sm:h-72 md:h-80 relative overflow-hidden rounded-lg">
            <img
              src="/tanker_trucks.png"
              alt="Barry Lantern Oil & Gas"
              className="w-full h-full object-cover"
            />
          </div>
        </AnimateOnScroll>

        {/* Text */}
        <AnimateOnScroll
          animation="animate-slideInRight"
          delay="animate-delay-200"
          className="w-full md:w-1/2"
        >
          <p className="text-[#f0a500] font-semibold uppercase tracking-widest text-xs sm:text-sm mb-2">
            Who We Are
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#003366] mb-4 leading-tight">
            Integrated Oil &amp; Gas Solutions You Can Trust
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
            <strong>Barry Lantern Oil &amp; Gas Limited (RC: 976879)</strong> is a duly registered
            oil &amp; gas marketing, haulage, marine logistics, provision of financial instrument
            and monetization company operating across Nigeria. We deliver excellence, efficiency,
            and integrity across every project.
          </p>

          {/* Vision */}
          <div className="flex items-start gap-3 sm:gap-4 mb-5">
            <div className="bg-[#003366] text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-xl shrink-0">
              🔭
            </div>
            <div>
              <h3 className="font-bold text-[#003366] text-base sm:text-lg">Vision</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                To be Nigeria's most trusted partner in oil &amp; gas marketing, marine logistics,
                and energy project financing.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="bg-[#003366] text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-xl shrink-0">
              ⚙️
            </div>
            <div>
              <h3 className="font-bold text-[#003366] text-base sm:text-lg">Core Values</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Integrity, reliability, and excellence in every service we render to our clients
                across Nigeria and internationally.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
};

export default About;