const posts = [
  {
    date: "30 Apr 2024",
    image: "/blog1.jpg",
    title: "Virgin Oil D6 | Residual Fuel Oil D6",
    excerpt:
      "Virgin Oil D6 is also known as Residual Fuel Oil and is of high viscosity. This particular fuel oil requires preheating to 220 – 260 Degrees Fahrenheit. D6 is mostly used for generators. D6 is a type of residual fuel, mainly used in power plants and larger ships. The fuel requires to...",
    link: "/blog/virgin-oil-d6",
  },
  {
    date: "8 Apr 2024",
    image: "/blog2.jpg",
    title: "Liquefied Petroleum Gas (LPG)",
    excerpt:
      "When you think of buying Liquefied Petroleum Gas (LPG) from credible sources, contact Barry Lantern Oil & Gas Limited. Our vast years of experience in the industry and track record with numerous clients have earned us a respectable place in the oil and gas supply industry...",
    link: "/blog/lpg",
  },
  {
    date: "2 Apr 2024",
    image: "/blog3.jpg",
    title: "Bonny Light Crude Oil",
    excerpt:
      "Bonny Light Crude oil is a high-grade Nigerian Crude Oil with high API Gravity and very low sulfur content. It is produced in the Niger Delta Basin and is named after a prolific region around the city of Bonny. It is a highly desired grade crude oil...",
    link: "/blog/bonny-light-crude",
  },
  {
    date: "17 Mar 2024",
    image: "/blog4.jpg",
    title: "Jet Fuel A1",
    excerpt:
      "We have suppliers of Jet Fuel (JP A1) and other grades. We help serious buyers secure genuine sellers of this product. Barry Lantern Oil & Gas Limited has a widespread network across Africa and the International Market Worldwide...",
    link: "/blog/jet-fuel-a1",
  },
  {
    date: "11 Mar 2024",
    image: "/blog5.jpg",
    title: "Petroleum Coke (Petcoke)",
    excerpt:
      "Petroleum coke, also known as petcoke, is a final carbon-rich solid material that derives from oil refining. Petcoke is derived from a final cracking process — a thermo-based chemical engineering process that splits long-chain hydrocarbons into shorter chains...",
    link: "/blog/petcoke",
  },
  {
    date: "22 Feb 2022",
    image: "/blog6.jpg",
    title: "Automotive Gas Oil (AGO)",
    excerpt:
      "Automotive Gas Oil, or AGO, is the name given to fuel intended for use in road vehicles powered by diesel engines. AGO is used in Heavy-duty vehicles such as trucks and buses, and Light-duty vehicles such as vans and passenger cars...",
    link: "/blog/ago",
  },
  {
    date: "17 Sep 2019",
    image: "/blog7.jpg",
    title: "Forcados Light Crude Oil, FLCO",
    excerpt:
      "Forcados Light Crude Oil is a high grade of Nigerian Crude Oil produced in the Niger Delta Basin. It is named after the prolific region around the Forcados. It is a highly desired grade crude oil for its uniqueness. We supply Forcados Light Crude Oil to serious buyers...",
    link: "/blog/forcados-crude",
  },
  {
    date: "17 Sep 2019",
    image: "/blog8.jpg",
    title: "Liquefied Natural Gas (LNG)",
    excerpt:
      "Liquefied Natural Gas (LNG) is natural gas predominantly methane, CH4, that has been cooled down to liquid form for ease and safety of non-pressurized storage or transport. It takes up about 1/600th the volume of the gas in the gaseous state at standard conditions...",
    link: "/blog/lng",
  },
  {
    date: "17 Sep 2019",
    image: "/blog9.jpg",
    title: "Jet Fuel Colonial Grade 54, JP54",
    excerpt:
      "We can supply Aviation Kerosene Colonial Grade JP54 and other grades to serious and capable buyers who can place the required instruments or who own their respective tank storage and can provide ATVs to our Partners, or provide a suitable Bank Instrument to make...",
    link: "/blog/jp54",
  },
  {
    date: "12 Jul 2019",
    image: "/blog10.jpg",
    title: "Mazut M 100 Fuel Oil",
    excerpt:
      "Mazut M 100 Fuel oil is supplied according to the Russian technical specification GOST 10585-99. This kind of oil is graded as heavy furnace oil. The product is produced from the remains of raw oil processing and is produced only from the low sulfur...",
    link: "/blog/mazut-m100",
  },
  {
    date: "11 Jul 2019",
    image: "/blog11.jpg",
    title: "5 Tips to Help You Grow Your Business in Nigeria 2019",
    excerpt:
      "Starting a business is the first step to owning a business, however having a successful business requires that you sustain and grow that business to ensure it remains alive and benefits your target audience for as long as possible, maybe a century or more...",
    link: "/blog/grow-business-nigeria",
  },
  {
    date: "16 Sep 2019",
    image: "/blog12.jpg",
    title: "Virgin Oil D6 | Residual Fuel Oil D6",
    excerpt:
      "Virgin Oil D6 is also known as Residual Fuel Oil and is of high viscosity. This particular fuel oil requires preheating to 220 – 260 Degrees Fahrenheit. D6 is mostly used for generators. D6 is a type of residual fuel, mainly used in power plants and larger ships. The fuel requires to...",
    link: "/blog/virgin-oil-d6-2",
  },
];

const Blog = () => {
  return (
    <section className="py-16 px-10 bg-gray-50">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="w-full rounded-[22px] overflow-hidden bg-[#d9a431] shadow-xl group"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${post.image})` }}
                ></div>
              </div>

              {/* Curved Content Area */}
              <div
                className="relative px-6 pt-6 pb-6 bg-[#d9a431]"
                style={{
                  borderTopLeftRadius: "100% 80px",
                  borderTopRightRadius: "100% 80px",
                  marginTop: "-45px",
                }}
              >
                {/* Date */}
                <p className="text-white/70 text-xs mb-3">{post.date}</p>

                {/* Title */}
                <h3 className="text-white font-bold text-sm leading-snug mb-3">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-white/90 text-xs leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <div className="flex justify-end">
                  
                   <a href={post.link}
                    className="text-white border border-white/70 px-4 py-2 text-xs hover:bg-white hover:text-[#d9a431] transition-all">
                    Learn More
                  </a>
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