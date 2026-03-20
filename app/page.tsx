import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Projects from "./components/Projects";
import TestimonialQuote from "./components/TestimonialQuote";
import Services from "./components/Services";
import TextReveal from "./components/TextReveal";
import About from "./components/About";
import Pricing from "./components/Pricing";
import LogoTicker from "./components/LogoTicker";
import TestimonialsGrid from "./components/TestimonialsGrid";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ContactBar from "./components/ContactBar";
import ContactModal from "./components/ContactModal";

export default function Home() {
  return (
    <>
      <ContactModal />
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Projects />
        <TestimonialQuote />
        <Services />
        <TextReveal />
        <About />
        <Pricing />
        <LogoTicker />
        <TestimonialsGrid />
        <FAQ />
      </main>
      <Footer />
      <ContactBar />
    </>
  );
}
