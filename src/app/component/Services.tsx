import Link from "next/link";
const services = [
  {
    image: "/img1.jpg",
    title: "Downstream Supply",
    slug: "downstream",   // ✅ matches /services/downstream/page.tsx
    description: "...",
  },
  {
    image: "/img2.jpg",
    title: "Marine Logistics",
    slug: "marine",       // ✅ matches /services/marine
    description: "...",
  },
  {
    image: "/img3.jpg",
    title: "Upstream Supply",
    slug: "upstream",     // ✅ matches /services/upstream
    description: "...",
  },
  {
    image: "/img4.jpg",
    title: "Logistics & Haulage",
    slug: "haulage",      // ✅ matches /services/haulage
    description: "...",
  },
  {
    image: "/img1.jpg",
    title: "Project Financing",
    slug: "financing",    // ✅ matches /services/financing/page.tsx
    description: "...",
  },
  {
    image: "/img2.jpg",
    title: "Storage Facilities",
    slug: "storage",      // ⚠️ no folder yet — create /services/storage/page.tsx
    description: "...",
  },
];
const Services = () => {
  return (
    <section className="py-16 px-10 bg-gray-50">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden h-64 group cursor-pointer shadow-md"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>

              {/* Default Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/65 transition-all duration-500"></div>

              {/* Default - Title at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-500 group-hover:translate-y-[-8px]">
                <h3 className="text-white font-bold text-lg">{service.title}</h3>
              </div>

              {/* Hover - Extra description slides up */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-3">{service.description}</p>
                
              <Link href={`/services/${service.slug}`}
  className="inline-block text-xs font-bold text-black bg-[#f0a500] px-4 py-2 rounded hover:bg-yellow-500 transition-all">
  Know More...
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