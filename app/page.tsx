import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* riso grain across the whole page */}
      <div className="grain-overlay" aria-hidden="true" />

      <main>
        <Hero />
        <Pricing />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
