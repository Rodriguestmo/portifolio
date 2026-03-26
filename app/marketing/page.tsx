import FrameBorder from "../components/FrameBorder";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SocialProof from "../components/SocialProof";
import Projects from "../components/Projects";
import TestimonialQuote from "../components/TestimonialQuote";
import Services from "../components/Services";
import TextReveal from "../components/TextReveal";
import About from "../components/About";
import Pricing from "../components/Pricing";
import LogoTicker from "../components/LogoTicker";
import TestimonialsGrid from "../components/TestimonialsGrid";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import ContactBar from "../components/ContactBar";
import ContactModal from "../components/ContactModal";
import SmoothScroll from "../components/SmoothScroll";
import CustomCursor from "../components/CustomCursor";
import PreloaderWrapper from "../components/PreloaderWrapper";
import ScrollProgressBar from "../components/ScrollProgressBar";

export const metadata = {
  title: "Thales Miguel | Marketing Digital & Tecnologia",
  description:
    "Especialista em landing pages de alta conversão, tráfego pago e IA personalizada. Monto a operação digital completa para transformar cliques em clientes reais.",
};

export default function MarketingPage() {
  return (
    <>
      <FrameBorder />
      <PreloaderWrapper />
      <ScrollProgressBar />
      <SmoothScroll />
      <CustomCursor />
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
