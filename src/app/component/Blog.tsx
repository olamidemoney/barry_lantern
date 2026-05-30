import Link from "next/link";

const posts = [
  {
    date: "30 Apr 2024",
    image: "/blog1.jpg",
    title: "Virgin Oil D6 | Residual Fuel Oil D6",
    excerpt:
      "Virgin Oil D6 is also known as Residual Fuel Oil and is of high viscosity. This particular fuel oil requires preheating to 220 – 260 Degrees Fahrenheit. D6 is mostly used for generators...",
    link: "/blog/virgin-oil-d6",
  },
  {
    date: "8 Apr 2024",
    image: "/blog2.jpg",
    title: "Liquefied Petroleum Gas (LPG)",
    excerpt:
      "When you think of buying Liquefied Petroleum Gas (LPG) from credible sources, contact Barry Lantern Oil & Gas Limited. Our vast years of experience in the industry have earned us a respectable place...",
    link: "/blog/lpg",
  },
  {
    date: "2 Apr 2024",
    image: "/blog3.jpg",
    title: "Bonny Light Crude Oil",
    excerpt:
      "Bonny Light Crude oil is a high-grade Nigerian Crude Oil with high API Gravity and very low sulfur content. It is produced in the Niger Delta Basin and is named after the city of Bonny...",
    link: "/blog/bonny-light-crude",
  },
  {
    date: "17 Mar 2024",
    image: "/blog4.jpg",
    title: "Jet Fuel A1",
    excerpt:
      "We have suppliers of Jet Fuel (JP A1) and other grades. We help serious buyers secure genuine sellers of this product. Barry Lantern has a widespread network across Africa and worldwide...",
    link: "/blog/jet-fuel-a1",
  },
  {
    date: "11 Mar 2024",
    image: "/blog5.jpg",
    title: "Petroleum Coke (Petcoke)",
    excerpt:
      "Petroleum coke, also known as petcoke, is a final carbon-rich solid material that derives from oil refining, produced from a thermo-based chemical engineering process...",
    link: "/blog/petcoke",
  },
  {
    date: "22 Feb 2022",
    image: "/blog6.jpg",
    title: "Automotive Gas Oil (AGO)",
    excerpt:
      "Automotive Gas Oil, or AGO, is the name given to fuel intended for use in road vehicles powered by diesel engines, including heavy-duty trucks, buses, vans and passenger cars...",
    link: "/blog/ago",
  },
  
];

const Blog = () => {
  return (
    <section className="py-16 px-6 md:px-10 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#003366]">Our Blog and Press Release</h2>
          <div className="flex items-center justify-center mt-4 gap-2">
            <div className="h-[2px] w-16 bg-gray-300"></div>
            <div className="w-2 h-2 bg-[#f0a500] rotate-45"></div>
            <div className="h-[2px] w-16 bg-gray-300"></div>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Get updates on our offers, deals and new products
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Mobile Layout */}
              <div className="md:hidden">
                <div
                  className="w-full h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <div className="bg-[#001f3f] p-5">
                  <span className="text-[#f0a500] text-xs font-semibold uppercase tracking-widest mb-2 block">
                    {post.date}
                  </span>
                  <h3 className="text-white font-bold text-base leading-snug mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={post.link}
                    className="inline-flex items-center gap-2 bg-[#f0a500] text-black text-xs font-bold px-4 py-2 rounded-full hover:bg-yellow-500 transition-all"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>

              {/* Desktop Layout - hover effect */}
              <div className="hidden md:block relative h-72 group cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#f0a500] group-hover:w-full transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[#f0a500] text-xs font-semibold uppercase tracking-widest mb-2 block">
                    {post.date}
                  </span>
                  <h3 className="text-white font-bold text-base leading-snug mb-0 group-hover:mb-3 transition-all duration-300">
                    {post.title}
                  </h3>
                  <div className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500">
                    <p className="text-white/80 text-xs leading-relaxed mt-2">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-0 opacity-0 group-hover:opacity-100 group-hover:mt-3 transition-all duration-500">
                    <Link
                      href={post.link}
                      className="inline-flex items-center gap-2 bg-[#f0a500] text-black text-xs font-bold px-4 py-2 rounded-full hover:bg-yellow-500 transition-all"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;