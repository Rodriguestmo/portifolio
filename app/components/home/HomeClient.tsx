"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import FrameBorder from "../FrameBorder";
import CustomCursor from "../CustomCursor";
import SmoothScroll from "../SmoothScroll";
import PreloaderWrapper from "../PreloaderWrapper";
import MagneticButton from "../MagneticButton";
import TiltCard from "../TiltCard";
import LanguageToggle from "../LanguageToggle";
import { useLanguage } from "../../context/LanguageContext";

// ─── Animations
const wordVariants = {
  hidden: { opacity: 0, y: 80, skewY: 5 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { type: "spring" as const, damping: 24, stiffness: 120, delay: 0.1 + i * 0.1 },
  }),
};

// ─── Data Arrays
const navLinks = [
  { labelPT: "Início", labelEN: "Home", href: "#inicio" },
  { labelPT: "Sobre", labelEN: "About", href: "#sobre" },
  { labelPT: "Projetos", labelEN: "Projects", href: "#projetos" },
  { labelPT: "Artigos", labelEN: "Articles", href: "#artigos" },
  { labelPT: "Links", labelEN: "Links", href: "#links" },
  { labelPT: "Contato", labelEN: "Contact", href: "#contato" },
];

export default function HomeClient() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  const { lang } = useLanguage();
  const isEn = lang === "en";

  const projects = [
    { num: "001", title: "Dra. Camila Sutilo", tags: ["landing", isEn ? "traffic" : "tráfego", "whatsapp"], href: "https://camilasutilo.com", year: "2025" },
    { num: "002", title: "Geovanna Romeiro", tags: ["landing", isEn ? "conversion" : "conversão"], href: "https://geovanna-lp.web.app", year: "2025" },
    { num: "003", title: "Prospector Bot", tags: [isEn ? "ai" : "ia", isEn ? "automation" : "automação", "python"], href: "#", year: "2025" },
  ];

  const articles = [
    { title: isEn ? "Building the Prospector Bot: AI on WhatsApp" : "Construindo o Prospector Bot: IA no WhatsApp", date: isEn ? "Mar 2026" : "Mar 2026", readTime: "5 min", href: "#" },
    { title: isEn ? "Conversion Design and Data Engineering" : "Design de Conversão e a Engenharia dos Dados", date: isEn ? "Feb 2026" : "Fev 2026", readTime: "8 min", href: "#" },
  ];

  const socials = [
    { label: "LinkedIn", href: "#", handle: "in/thalesmiguel" },
    { label: "GitHub", href: "https://github.com/Rodriguestmo", handle: "github.com/Rodriguestmo" },
    { label: "Instagram", href: "#", handle: "@thalesmiguel" },
  ];

  const usefulLinks = [
    { label: isEn ? "Marketing Portfolio" : "Portfólio de Marketing", href: "/marketing" },
    { label: isEn ? "Schedule a Meeting" : "Agendar Reunião", href: "https://calendar.app.google/v7s5H975BGwnriuZA" },
  ];

  return (
    <>
      <FrameBorder />
      <PreloaderWrapper />
      <SmoothScroll />
      <CustomCursor />
      
      {/* ── Desktop Vertical Menu ── */}
      <nav className="hidden lg:flex flex-col fixed left-10 top-1/2 -translate-y-1/2 z-40 gap-6">
        {navLinks.map((n) => (
          <a
            key={n.href}
            href={n.href}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/30 hover:text-black transition-colors"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            {isEn ? n.labelEN : n.labelPT}
          </a>
        ))}
      </nav>

      {/* ── Mobile Top Menu ── */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-black/5 p-4 flex justify-start items-center gap-6 overflow-x-auto lg:hidden pr-24">
        {navLinks.map((n) => (
          <a key={n.href} href={n.href} className="text-[10px] font-bold uppercase tracking-[0.1em] whitespace-nowrap text-black/40 hover:text-black transition-colors">
            {isEn ? n.labelEN : n.labelPT}
          </a>
        ))}
      </nav>

      {/* ── Floating Language Toggle (Global) ── */}
      <div className="fixed top-3 right-4 lg:top-8 lg:right-10 z-50">
        <LanguageToggle />
      </div>

      <main className="min-h-screen bg-white text-black font-sans selection:bg-black/10 relative overflow-hidden pb-32 pt-16 lg:pt-0" id="inicio">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none fixed" />

        <div className="relative z-10 mx-auto max-w-[1000px] px-6 pt-24 lg:pt-40 ml-auto lg:mr-auto lg:pl-32">
          
          {/* 1. Hero */}
          <section className="mb-48">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative h-20 w-20 md:h-24 md:w-24 overflow-hidden rounded-full ring-2 ring-black/5 mb-10 shadow-xl shadow-black/5"
            >
              <Image src="/images/perfil.png" alt="Thales Miguel" fill sizes="96px" className="object-cover object-[center_20%]" />
            </motion.div>

            <h1 className="text-6xl md:text-[90px] lg:text-[100px] leading-[0.95] tracking-tighter overflow-hidden flex flex-wrap gap-x-3 md:gap-x-5 max-w-5xl">
               <span className="block overflow-hidden pb-2">
                <motion.span custom={0} initial="hidden" animate="visible" variants={wordVariants} className="inline-block text-[#cccccc] font-normal">
                  Thales
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span custom={1} initial="hidden" animate="visible" variants={wordVariants} className="inline-block font-black text-black">
                  Miguel.
                </motion.span>
              </span>
              <br className="hidden md:block w-full" />
              <span className="block overflow-hidden pb-4">
                <motion.span custom={2} initial="hidden" animate="visible" variants={wordVariants} className="inline-block text-[#cccccc] font-normal">
                  {isEn ? "Engineering," : "Engenharia,"}
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-4">
                <motion.span custom={3} initial="hidden" animate="visible" variants={wordVariants} className="inline-block font-black text-black">
                  {isEn ? "technology &" : "tecnologia e"}
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-4">
                <motion.span custom={4} initial="hidden" animate="visible" variants={wordVariants} className="inline-block font-black text-black">
                  marketing.
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-10 text-xl md:text-2xl text-neutral-500 max-w-2xl leading-relaxed tracking-tight"
            >
              {isEn ? (
                <><strong className="text-black font-semibold">Aeronautical Mechanical Engineering student at UNIFEI.</strong> I work developing advanced systems, high-performing funnels and uniting commercial technology with high-end design.</>
              ) : (
                <><strong className="text-black font-semibold">Estudante de Engenharia Mecânica Aeronáutica na UNIFEI.</strong> Atuo desenvolvendo sistemas avançados, portfólios impactantes e unindo tecnologia comercial com alto design.</>
              )}
            </motion.p>
          </section>

          {/* 2. Sobre */}
          <section className="mb-48" id="sobre">
             <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl tracking-tight mb-16 flex flex-wrap gap-x-3 gap-y-1"
            >
              <span className="font-normal text-[#cccccc]">{isEn ? "About" : "Sobre"}</span>
              <span className="font-black text-black">{isEn ? "me." : "mim."}</span>
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-16 text-lg md:text-xl text-neutral-600 leading-relaxed"
            >
              {isEn ? (
                <>
                  <p>
                    Graduating in <strong className="text-black">Aeronautical Mechanical Engineering at the Federal University of Itajubá (UNIFEI)</strong> provided me with a deep mathematical and analytical foundation. Digital design and software development emerged from my desire to build iterative and tangible solutions that generate immediate impact.
                  </p>
                  <p>
                    This space is my personal laboratory. The place where I document conversion experiments, elaborate interfaces with Next.js and Framer Motion, and Artificial Intelligence tools I create to solve real commercial bottlenecks for businesses.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    A graduação em <strong className="text-black">Engenharia Mecânica Aeronáutica na Universidade Federal de Itajubá (UNIFEI)</strong> me deu uma base matemática e analítica profunda. O design digital e o desenvolvimento de software surgiram da vontade de construir soluções iterativas e tangíveis que gerassem impacto imediato.
                  </p>
                  <p>
                    Este espaço é o meu laboratório pessoal. O lugar onde documento experimentos com conversão, interfaces elaboradas com Next.js e Framer Motion, e ferramentas de Inteligência Artificial que crio para solucionar gargalos comerciais reais de negócios.
                  </p>
                </>
              )}
            </motion.div>
          </section>

          {/* 3. Projetos */}
          <section className="mb-48" id="projetos">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl tracking-tight mb-16 flex flex-wrap gap-x-3 gap-y-1"
            >
              <span className="font-normal text-[#cccccc]">{isEn ? "Open" : "Projetos"}</span>
              <span className="font-black text-black">{isEn ? "Projects." : "Abertos."}</span>
            </motion.h2>

            <div className="flex flex-col border-t border-black/10">
              {projects.map((p, i) => (
                <motion.a
                  key={p.num}
                  href={p.href}
                  target={p.href.startsWith("http") ? "_blank" : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
                  className="group flex flex-col md:flex-row md:items-center justify-between py-10 md:py-12 border-b border-black/10 hover:px-8 transition-all duration-500 cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-neutral-50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] -z-10" />
                  
                  <div className="flex items-center gap-6 mb-6 md:mb-0">
                    <span className="text-neutral-300 font-bold font-mono text-sm tracking-widest">{p.num}</span>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight group-hover:translate-x-4 transition-transform duration-500 ease-out">{p.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 md:gap-8">
                    <div className="flex flex-wrap gap-1 md:gap-2 opacity-100 md:opacity-0 md:-translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                       {p.tags.map(tag => (
                        <span key={tag} className="px-3 md:px-4 py-1.5 border border-black/10 bg-white rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-500 shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="h-12 w-12 md:h-14 md:w-14 rounded-full border border-black/10 bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white group-hover:border-black group-hover:scale-110 transition-all duration-500">
                      ↗
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </section>

          {/* 4. Artigos */}
           <section className="mb-48" id="artigos">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl tracking-tight mb-16 flex flex-wrap gap-x-3 gap-y-1"
            >
              <span className="font-normal text-[#cccccc]">{isEn ? "My" : "Meus"}</span>
              <span className="font-black text-black">{isEn ? "Articles." : "Artigos."}</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((art, i) => (
                <motion.a
                  key={art.title}
                  href={art.href}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.15, duration: 0.8, type: "spring", stiffness: 80 }}
                  className="group h-full"
                >
                  <TiltCard intensity={8} className="h-full bg-white border border-black/[0.06] rounded-[32px] p-8 md:p-10 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col">
                    <div className="flex justify-between items-start mb-12">
                      <div className="flex items-center gap-4 text-xs md:text-sm font-mono tracking-tighter text-neutral-400">
                        <span>{art.date}</span>
                        <span className="w-1 h-1 rounded-full bg-black/20" />
                        <span>{art.readTime} reading</span>
                      </div>
                      <span className="text-xl opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">↗</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 group-hover:text-neutral-600 transition-colors duration-300">{art.title}</h3>
                  </TiltCard>
                </motion.a>
              ))}
            </div>
          </section>

           {/* 5. Este Site / Links / Onde Encontrar */}
          <section className="mb-48" id="links">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-16 border-t border-black/10 pt-20">
              
              {/* Este Site */}
              <motion.div
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-3xl font-black mb-6">{isEn ? "About This Site" : "Sobre Este Site"}</h3>
                <p className="text-neutral-500 text-lg leading-relaxed mb-8">
                  {isEn ? (
                    <>Built with Next.js (App Router), React, Tailwind CSS and Framer Motion for super fluid animations. Hosted on Vercel with CI/CD integration. <br/><br/>Uses clean accessibility practices, modular components, and a design system that perfectly reflects my skills with high-end frontend.</>
                  ) : (
                    <>Construído com Next.js (App Router), React, Tailwind CSS e Framer Motion para animações super fluidas. Hospedado na Vercel com integração contínua (CI/CD). <br/><br/>Utiliza práticas limpas de acessibilidade, componentes modulares e um design system que reflete perfeitamente as minhas habilidades com frontend de alto nível.</>
                  )}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 bg-neutral-100 text-neutral-600 rounded-full text-xs font-semibold uppercase tracking-wider">Next.js 16</span>
                  <span className="px-4 py-1.5 bg-neutral-100 text-neutral-600 rounded-full text-xs font-semibold uppercase tracking-wider">Tailwind CSS</span>
                  <span className="px-4 py-1.5 bg-neutral-100 text-neutral-600 rounded-full text-xs font-semibold uppercase tracking-wider">Framer Motion</span>
                </div>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-12 pt-2">
                {/* Onde me encontrar */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h3 className="text-sm uppercase tracking-widest font-bold mb-8 text-black/40">{isEn ? "Where to find me" : "Onde me encontrar"}</h3>
                  <div className="flex flex-col gap-5">
                    {socials.map(s => (
                       <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="group flex flex-col border-b border-black/5 pb-3">
                          <span className="text-lg font-bold text-black group-hover:text-black/60 transition-colors mb-1">{s.label}</span>
                          <span className="text-sm font-medium text-neutral-400 group-hover:text-neutral-600 transition-colors">{s.handle}</span>
                       </a>
                    ))}
                  </div>
                </motion.div>

                {/* Links Uteis */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <h3 className="text-sm uppercase tracking-widest font-bold mb-8 text-black/40">{isEn ? "Useful Links" : "Links Úteis"}</h3>
                  <div className="flex flex-col gap-5">
                    {usefulLinks.map(s => (
                       <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : "_self"} rel="noreferrer" className="group flex items-center justify-between border-b border-black/5 pb-4 pt-1">
                          <span className="text-base font-bold text-black group-hover:text-black/60 transition-colors pr-2">{s.label}</span>
                          <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-sm font-bold">↗</span>
                       </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* 6. Contato */}
          <section className="mb-20" id="contato">
            <motion.div 
             initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
             className="bg-[#050505] rounded-[2rem] md:rounded-[4rem] text-white px-8 py-20 md:p-32 text-center flex flex-col items-center relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none" />

              <h2 className="text-5xl md:text-8xl tracking-tighter font-black mb-8 max-w-3xl leading-[0.95] z-10">
                {isEn ? "Got a project or challenge on the radar?" : "Tem um projeto ou desafio no radar?"}
              </h2>
              <p className="text-white/50 text-xl md:text-2xl mb-16 max-w-2xl z-10 leading-relaxed font-light">
                {isEn ? "Send a message and let's talk about data engineering, design, or traffic. I usually respond within an hour." : "Mande uma mensagem e vamos conversar sobre engenharia de dados, design ou tráfego. Geralmente respondo em menos de 1h."}
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 z-10">
                <MagneticButton>
                  <a href="https://wa.me/5535984128420" target="_blank" rel="noreferrer" className="relative flex items-center gap-4 rounded-full bg-white px-10 py-5 text-base font-bold text-black transition-transform hover:scale-105 shadow-[0_20px_40px_-15px_rgba(255,255,255,0.2)] active:scale-95">
                    {isEn ? "Talk via WhatsApp" : "Falar via WhatsApp"}
                    <span className="bg-black/10 text-black rounded-full h-6 w-6 flex items-center justify-center text-xs">↗</span>
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a href="mailto:thalesmiguel.tech@gmail.com" className="relative flex items-center gap-4 rounded-full border border-white/20 bg-transparent px-10 py-5 text-base font-bold text-white transition-colors hover:bg-white/10 active:scale-95 shadow-xl">
                    {isEn ? "Send me an email" : "Me enviar email"}
                  </a>
                </MagneticButton>
              </div>
            </motion.div>
          </section>
          
          <div className="text-center pb-20">
            <p className="text-neutral-400 font-medium tracking-tight">© 2026 Thales Miguel — {isEn ? "Where design and code meet." : "O design e o código se encontram aqui."}</p>
          </div>
          
        </div>
      </main>
    </>
  );
}
