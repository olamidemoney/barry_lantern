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
    <section className="py-16 px-6 md:px-10 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#f0a500] font-semibold uppercase tracking-widest text-sm mb-2">
            What We Offer
          </p>
          <h2 className="text-3xl font-bold text-[#003366]">Our Premium Services</h2>
          <div className="flex items-center justify-center mt-4 gap-2">
            <div className="h-[2px] w-16 bg-gray-300"></div>
            <div className="w-2 h-2 bg-[#f0a500] rotate-45"></div>
            <div className="h-[2px] w-16 bg-gray-300"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-md">

              {/* Mobile Layout */}
              <div className="md:hidden">
                <div
                  className="w-full h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="bg-[#001f3f] p-5">
                  <h3 className="text-white font-bold text-base mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{service.description}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-block text-xs font-bold text-black bg-[#f0a500] px-4 py-2 rounded hover:bg-yellow-500 transition-all"
                  >
                    Read More →
                  </Link>
                </div>
              </div>

              {/* Desktop Layout - hover effect */}
              <div className="hidden md:block relative h-64 group cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/65 transition-all duration-500" />

                {/* Default - title at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5 group-hover:opacity-0 transition-all duration-300">
                  <h3 className="text-white font-bold text-lg">{service.title}</h3>
                </div>

                {/* Hover - slides up */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">{service.description}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-block text-xs font-bold text-black bg-[#f0a500] px-4 py-2 rounded hover:bg-yellow-500 transition-all"
                  >
                    Read More →
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;