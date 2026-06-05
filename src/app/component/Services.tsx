import Link from "next/link";

const services = [
  {
    image: "/petrol.png",
    title: "Downstream Supply",
    slug: "downstream",
    description: "Supply of PMS, AGO, and DPK to filling stations and bulk buyers across all regions of Nigeria.",
  },
  {
    image: "/offshore_marine.png",
    title: "Marine Logistics",
    slug: "marine",
    description: "World-class marine logistics and vessel charter services across Nigerian waterways and beyond.",
  },
  {
    image: "/industrial_oil_ring.png",
    title: "Upstream Supply",
    slug: "upstream",
    description: "Crude oil lifting, supply, and trading operations connecting producers to refineries and buyers.",
  },
  {
    image: "/tanker_trucks.png",
    title: "Logistics & Haulage",
    slug: "haulage",
    description: "Reliable road haulage and distribution of petroleum products across Nigeria.",
  },
  {
    image: "/slbc.png",
    title: "Project Financing",
    slug: "financing",
    description: "SBLC, BG, DLC, and POF financial instruments for oil & gas projects locally and internationally.",
  },
  {
    image: "/barry_lantern_storage_facilities.png",
    title: "Storage Facilities",
    slug: "marine",
    description: "Secure petroleum product storage facilities strategically located across key Nigerian regions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="scroll-mt-[72px] py-12 sm:py-16 px-4 sm:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-[#f0a500] font-semibold uppercase tracking-widest text-xs sm:text-sm mb-2">
            What We Offer
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#003366]">Our Premium Services</h2>
          <div className="flex items-center justify-center mt-4 gap-2">
            <div className="h-[2px] w-12 sm:w-16 bg-gray-300" />
            <div className="w-2 h-2 bg-[#f0a500] rotate-45" />
            <div className="h-[2px] w-12 sm:w-16 bg-gray-300" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-md">

              {/* Shared image */}
              <div
                className="w-full h-44 sm:h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* Content card */}
              <div className="bg-[#001f3f] p-4 sm:p-5">
                <h3 className="text-white font-bold text-sm sm:text-base mb-2">{service.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">{service.description}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-block text-xs font-bold text-black bg-[#f0a500] px-4 py-2 rounded hover:bg-yellow-500 transition-all"
                >
                  Read More →
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;