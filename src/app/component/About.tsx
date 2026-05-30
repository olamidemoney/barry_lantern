import AnimateOnScroll from "./AnimateOnScroll";

const About = () => {
  return (
    <section className="py-16 px-10 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">

      {/* Left - Image */}
<AnimateOnScroll animation="animate-slideInLeft" className="w-full md:w-1/2">
  <div className="w-full h-80 relative overflow-hidden">
    <img
      src="/tanker_trucks.png"
      alt="Barry Lantern Oil & Gas"
      className="w-full h-full object-cover"
    />
  </div>
</AnimateOnScroll>

        {/* Right - Text */}
        <AnimateOnScroll animation="animate-slideInRight" delay="animate-delay-200" className="w-full md:w-1/2">
          <p className="text-[#f0a500] font-semibold uppercase tracking-widest text-sm mb-2">Who We Are</p>
          <h2 className="text-3xl font-bold text-[#003366] mb-4">Integrated Oil & Gas Solutions You Can Trust</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            <strong>Barry Lantern Oil & Gas Limited (RC: 97875)</strong> is a duly registered oil & gas marketing, haulage,marine logistics, provision of financial instrument and monetization company operating across Nigeria. We provide reliable energy solutions spanning upstream and downstream supply, marine logistics, vessel operations, haulage services, and financing(SLBC and BG) and monetization, delivering excellence, efficiency, and integrity across every project.
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

        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default About;