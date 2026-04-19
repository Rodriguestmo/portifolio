import FrameBorder from "../components/FrameBorder";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SocialProof from "../components/SocialProof";
import Services from "../components/Services";
import Projects from "../components/Projects";
import TestimonialQuote from "../components/TestimonialQuote";
import MidPageCTA from "../components/MidPageCTA";
import Pricing from "../components/Pricing";
import About from "../components/About";
import TextReveal from "../components/TextReveal";
import TestimonialsGrid from "../components/TestimonialsGrid";
import LogoTicker from "../components/LogoTicker";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import ContactBar from "../components/ContactBar";
import ContactModal from "../components/ContactModal";
import SmoothScroll from "../components/SmoothScroll";
import CustomCursor from "../components/CustomCursor";
import PreloaderWrapper from "../components/PreloaderWrapper";
import ScrollProgressBar from "../components/ScrollProgressBar";

export const metadata = {
  title: "Thales Miguel | Landing Pages, Tráfego Pago e Automações com IA",
  description:
    "Especialista em landing pages de alta conversão, tráfego pago e automações com IA. Mais de R$ 18M gerenciados e +50 projetos entregues. Fale comigo.",
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
        <Services />
        <Projects />
        <TestimonialQuote />
        <MidPageCTA />
        <Pricing />
        <About />
        <TextReveal />
        <TestimonialsGrid />
        <LogoTicker />
        <FAQ />
      </main>
      <Footer />
      <ContactBar />
    </>
  );
}
