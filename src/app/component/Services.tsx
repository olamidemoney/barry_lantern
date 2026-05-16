const services = [
  {
    icon: "⛽",
    title: "Downstream Supply",
    description:
      "We supply petroleum products including PMS, AGO, and DPK to filling stations and bulk buyers across Nigeria through a reliable distribution network.",
    link: "/services/downstream",
  },
  {
    icon: "🚢",
    title: "Marine Logistics",
    description:
      "We provide vessel charter and marine logistics services for the transportation of petroleum products across Nigerian waterways and beyond.",
    link: "/services/marine",
  },
  {
    icon: "🚛",
    title: "Logistics & Haulage",
    description:
      "Our fleet of trucks and tankers ensures safe and timely delivery of petroleum products to clients across all regions of Nigeria.",
    link: "/services/haulage",
  },
  {
    icon: "💰",
    title: "Project Financing",
    description:
      "We facilitate project financing and financial instruments including SBLC, BG, DLC, and POF for oil & gas transactions locally and internationally.",
    link: "/services/financing",
  },
];

const Services = () => {
  return (
    <section className="py-16 px-10 bg-gray-50">
      <div className="max-w-6xl mx-auto">

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col"
            >
              <div className="bg-[#003366] text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl mx-auto mb-5">
                {service.icon}
              </div>
              <h3 className="text-[#003366] font-bold text-lg mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.description}</p>
              
                <a href={service.link}
                className="mt-5 text-[#003366] font-semibold text-sm hover:text-[#f0a500] transition-all"
              >
                [ Read more ]
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;