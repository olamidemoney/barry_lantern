import Navbar from "@/app/component/navbar";
import Footer from "@/app/component/Footer";
import Link from "next/link";

const posts = [
  {
    slug: "virgin-oil-d6",
    date: "30 Apr 2024",
    image: "/blog1.jpg",
    title: "Virgin Oil D6 | Residual Fuel Oil D6",
    excerpt:
      "Virgin Oil D6 is also known as Residual Fuel Oil and is of high viscosity. This particular fuel oil requires preheating to 220 – 260 Degrees Fahrenheit. D6 is mostly used for generators. D6 is a type of residual fuel, mainly used in power plants and larger ships.",
    content: `
      Virgin Oil D6 is also known as Residual Fuel Oil and is of high viscosity. This particular fuel oil requires preheating to 220 – 260 Degrees Fahrenheit. D6 is mostly used for generators. D6 is a type of residual fuel, mainly used in power plants and larger ships.

      The fuel requires to be heated before use due to its high viscosity. D6 is used in various industries including power generation, marine propulsion, and industrial heating.

      Barry Lantern Oil & Gas Limited supplies Virgin Oil D6 to serious buyers across Nigeria and internationally. We ensure quality, timely delivery, and competitive pricing for all our petroleum product transactions.

      Contact us today to discuss your D6 requirements and get a competitive quote from our experienced team.
    `,
  },
  {
    slug: "lpg",
    date: "8 Apr 2024",
    image: "/blog2.jpg",
    title: "Liquefied Petroleum Gas (LPG)",
    excerpt:
      "When you think of buying Liquefied Petroleum Gas (LPG) from credible sources, contact Barry Lantern Oil & Gas Limited.",
    content: `
      When you think of buying Liquefied Petroleum Gas (LPG) from credible sources, contact Barry Lantern Oil & Gas Limited. Our vast years of experience in the industry and track record with numerous clients have earned us a respectable place in the oil and gas supply industry.

      LPG is a flammable mixture of hydrocarbon gases used as fuel in heating appliances, cooking equipment, and vehicles. It is increasingly used as an aerosol propellant and a refrigerant, replacing chlorofluorocarbons in an effort to reduce damage to the ozone layer.

      Barry Lantern supplies LPG to households, businesses, and industrial clients across Nigeria. We guarantee quality products, safe delivery, and competitive pricing.

      Reach out to us today to place your LPG order or discuss bulk supply arrangements.
    `,
  },
  {
    slug: "bonny-light-crude",
    date: "2 Apr 2024",
    image: "/blog3.jpg",
    title: "Bonny Light Crude Oil",
    excerpt:
      "Bonny Light Crude oil is a high-grade Nigerian Crude Oil with high API Gravity and very low sulfur content.",
    content: `
      Bonny Light Crude oil is a high-grade Nigerian Crude Oil with high API Gravity and very low sulfur content. It is produced in the Niger Delta Basin and is named after a prolific region around the city of Bonny. It is a highly desired grade crude oil.

      Bonny Light is one of Nigeria's most important crude oil grades. It is prized for its high API gravity (around 33–37°) and low sulfur content (approximately 0.14%), making it a premium sweet crude oil.

      Barry Lantern Oil & Gas Limited facilitates the trading and supply of Bonny Light Crude Oil to refineries and buyers across the globe. We work with verified sellers and buyers to ensure smooth and compliant transactions.

      Contact our team today to discuss Bonny Light Crude Oil supply arrangements.
    `,
  },
  {
    slug: "jet-fuel-a1",
    date: "17 Mar 2024",
    image: "/blog4.jpg",
    title: "Jet Fuel A1",
    excerpt:
      "We have suppliers of Jet Fuel (JP A1) and other grades. We help serious buyers secure genuine sellers of this product.",
    content: `
      We have suppliers of Jet Fuel (JP A1) and other grades. We help serious buyers secure genuine sellers of this product. Barry Lantern Oil & Gas Limited has a widespread network across Africa and the International Market Worldwide.

      Jet A-1 is a kerosene grade of fuel suitable for most turbine-powered aircraft. It is the most commonly used jet fuel globally. Jet A-1 has a flash point above 38°C and a freeze point maximum of -47°C.

      Barry Lantern works with verified suppliers and assists buyers in securing genuine Jet Fuel A1 at competitive prices. Our network spans across Africa and international markets.

      Contact us today if you are a serious buyer looking to procure Jet Fuel A1.
    `,
  },
  {
    slug: "petcoke",
    date: "11 Mar 2024",
    image: "/blog5.jpg",
    title: "Petroleum Coke (Petcoke)",
    excerpt:
      "Petroleum coke, also known as petcoke, is a final carbon-rich solid material that derives from oil refining.",
    content: `
      Petroleum coke, also known as petcoke, is a final carbon-rich solid material that derives from oil refining. Petcoke is derived from a final cracking process — a thermo-based chemical engineering process that splits long-chain hydrocarbons into shorter chains.

      Petcoke is used as a fuel source in cement kilns, power plants, and industrial boilers. It is also used in the aluminum, steel, and titanium industries.

      Barry Lantern Oil & Gas Limited supplies petroleum coke to industrial buyers across Nigeria and internationally. We ensure quality products and timely delivery.

      Contact our sales team today to discuss your petcoke requirements.
    `,
  },
  {
    slug: "ago",
    date: "22 Feb 2022",
    image: "/blog6.jpg",
    title: "Automotive Gas Oil (AGO)",
    excerpt:
      "Automotive Gas Oil, or AGO, is the name given to fuel intended for use in road vehicles powered by diesel engines.",
    content: `
      Automotive Gas Oil, or AGO, is the name given to fuel intended for use in road vehicles powered by diesel engines. AGO is used in Heavy-duty vehicles such as trucks and buses, and Light-duty vehicles such as vans and passenger cars.

      AGO is one of the most commonly traded petroleum products in Nigeria. It powers the majority of commercial vehicles and generators across the country.

      Barry Lantern Oil & Gas Limited is a reliable supplier of AGO across all regions of Nigeria. We work with depot owners, filling stations, and bulk buyers to ensure consistent supply at competitive prices.

      Contact us today to discuss AGO supply for your business or personal needs.
    `,
  },
  {
    slug: "forcados-crude",
    date: "17 Sep 2019",
    image: "/blog7.jpg",
    title: "Forcados Light Crude Oil, FLCO",
    excerpt:
      "Forcados Light Crude Oil is a high grade of Nigerian Crude Oil produced in the Niger Delta Basin.",
    content: `
      Forcados Light Crude Oil is a high grade of Nigerian Crude Oil produced in the Niger Delta Basin. It is named after the prolific region around the Forcados. It is a highly desired grade crude oil for its uniqueness.

      We supply Forcados Light Crude Oil to serious buyers worldwide. Forcados is a blend of crude oil from several fields in the western Niger Delta. It has an API gravity of around 29° and a sulfur content of approximately 0.18%.

      Barry Lantern Oil & Gas Limited facilitates Forcados Light Crude Oil transactions for verified buyers and sellers. Contact our team today to get started.
    `,
  },
  {
    slug: "lng",
    date: "17 Sep 2019",
    image: "/blog8.jpg",
    title: "Liquefied Natural Gas (LNG)",
    excerpt:
      "Liquefied Natural Gas (LNG) is natural gas predominantly methane that has been cooled down to liquid form.",
    content: `
      Liquefied Natural Gas (LNG) is natural gas predominantly methane, CH4, that has been cooled down to liquid form for ease and safety of non-pressurized storage or transport. It takes up about 1/600th the volume of the gas in the gaseous state at standard conditions.

      LNG is odorless, colorless, non-toxic, and non-corrosive. Hazards include flammability after vaporization into a gaseous state, freezing, and asphyxia.

      Barry Lantern Oil & Gas Limited works with LNG suppliers and buyers to facilitate transactions across Nigeria and internationally. Contact us to discuss your LNG requirements.
    `,
  },
  {
    slug: "jp54",
    date: "17 Sep 2019",
    image: "/blog9.jpg",
    title: "Jet Fuel Colonial Grade 54, JP54",
    excerpt:
      "We can supply Aviation Kerosene Colonial Grade JP54 and other grades to serious and capable buyers.",
    content: `
      We can supply Aviation Kerosene Colonial Grade JP54 and other grades to serious and capable buyers who can place the required instruments or who own their respective tank storage and can provide ATVs to our Partners, or provide a suitable Bank Instrument.

      JP54 is a type of aviation fuel used specifically in aircraft with turbine engines. It is also known as Aviation Kerosene or Jet A fuel. JP54 has a flash point of 42°C and a freeze point of -47°C.

      Barry Lantern Oil & Gas Limited has established networks to supply JP54 to serious buyers globally. Contact our team today to discuss your requirements and procurement process.
    `,
  },
  {
    slug: "mazut-m100",
    date: "12 Jul 2019",
    image: "/blog10.jpg",
    title: "Mazut M 100 Fuel Oil",
    excerpt:
      "Mazut M 100 Fuel oil is supplied according to the Russian technical specification GOST 10585-99.",
    content: `
      Mazut M 100 Fuel oil is supplied according to the Russian technical specification GOST 10585-99. This kind of oil is graded as heavy furnace oil. The product is produced from the remains of raw oil processing and is produced only from the low sulfur content crude oil.

      Mazut is a heavy, low quality fuel oil, used in generating plants and similar applications. It is the residual fuel oil product of the oil refining process.

      Barry Lantern Oil & Gas Limited supplies Mazut M100 to industrial buyers and power plants. Contact our sales team to discuss your requirements.
    `,
  },
  {
    slug: "grow-business-nigeria",
    date: "11 Jul 2019",
    image: "/blog11.jpg",
    title: "5 Tips to Help You Grow Your Business in Nigeria 2019",
    excerpt:
      "Starting a business is the first step to owning a business, however having a successful business requires that you sustain and grow it.",
    content: `
      Starting a business is the first step to owning a business, however having a successful business requires that you sustain and grow that business to ensure it remains alive and benefits your target audience for as long as possible.

      Here are 5 tips to help you grow your business in Nigeria:

      1. Build Strong Relationships — Networking is key in Nigeria's business environment. Build genuine relationships with customers, suppliers, and partners.

      2. Leverage Technology — Use digital tools and social media to reach more customers and streamline your operations.

      3. Understand Your Market — Research your target market deeply and understand what drives their purchasing decisions.

      4. Manage Your Cash Flow — Monitor your finances closely and ensure you always have working capital to sustain operations.

      5. Stay Compliant — Ensure your business is properly registered and compliant with all relevant Nigerian regulations and tax obligations.

      Barry Lantern Oil & Gas Limited is committed to supporting businesses across Nigeria with reliable energy solutions and strategic partnerships.
    `,
  },
  {
    slug: "virgin-oil-d6-2",
    date: "16 Sep 2019",
    image: "/blog12.jpg",
    title: "Virgin Oil D6 | Residual Fuel Oil D6",
    excerpt:
      "Virgin Oil D6 is also known as Residual Fuel Oil and is of high viscosity.",
    content: `
      Virgin Oil D6 is also known as Residual Fuel Oil and is of high viscosity. This particular fuel oil requires preheating to 220 – 260 Degrees Fahrenheit. D6 is mostly used for generators. D6 is a type of residual fuel, mainly used in power plants and larger ships.

      The fuel requires to be heated before use due to its high viscosity. It is widely used in power generation and marine applications globally.

      Barry Lantern Oil & Gas Limited supplies Virgin Oil D6 to buyers across Nigeria and internationally. Contact us today for competitive pricing and reliable supply.
    `,
  },
];

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#003366] mb-4">Post Not Found</h1>
            <Link href="/blogs" className="text-[#f0a500] font-bold hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div
        className="w-full h-72 bg-cover bg-center relative flex items-end pb-8 mt-[88px]"
        style={{ backgroundImage: `url('${post.image}')` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-8 md:px-20">
          <p className="text-[#f0a500] text-xs font-bold uppercase tracking-widest mb-2">
            {post.date}
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-white">{post.title}</h1>
        </div>
      </div>

      {/* Content */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-10">
            <Link href="/" className="hover:text-[#f0a500] transition-all">Home</Link>
            <span>›</span>
            <Link href="/blogs" className="hover:text-[#f0a500] transition-all">Blog</Link>
            <span>›</span>
            <span className="text-[#003366] font-semibold">{post.title}</span>
          </div>

          {/* Article */}
          <article className="prose max-w-none">
            {post.content.trim().split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-6 text-base">
                {paragraph.trim()}
              </p>
            ))}
          </article>

          {/* CTA */}
          <div className="mt-12 bg-[#001f3f] rounded-xl p-8 text-center">
            <h3 className="text-white font-bold text-xl mb-3">
              Interested in this product?
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Contact Barry Lantern Oil & Gas Limited today to discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
               <a href="/contact/service-request"
                className="bg-[#f0a500] text-black font-bold px-8 py-3 rounded hover:bg-yellow-500 transition-all text-sm"
              >
                Make an Enquiry
              </a>
              
                <a href="https://wa.me/2348024729799"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white font-bold px-8 py-3 rounded hover:bg-white hover:text-black transition-all text-sm"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-10 text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-[#003366] font-bold hover:text-[#f0a500] transition-all text-sm"
            >
              ← Back to Blog
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}