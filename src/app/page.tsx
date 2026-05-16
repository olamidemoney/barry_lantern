import Hero from "./component/Hero";
import CTA from "./component/CTA";
import About from "./component/About";
import Services from "./component/Services";
import Stats from "./component/Stats";
import Blog from "./component/Blog";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <CTA />
      <Stats />
      <About />
      <Services />
      <CTA />
      <Blog />
      <Footer />
    </main>
  );
}