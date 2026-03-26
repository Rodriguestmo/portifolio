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

// ─── Data
const projects = [
  {
    num: "001",
    title: "Dra. Camila Sutilo",
    tags: ["landing", "tráfego", "whatsapp"],
    href: "https://camilasutilo.com",
    year: "2025",
  },
  {
    num: "002",
    title: "Geovanna Romeiro",
    tags: ["landing", "conversão"],
    href: "https://geovanna-lp.web.app",
    year: "2025",
  },
  {
    num: "003",
    title: "Prospector Bot",
    tags: ["ia", "automação", "python"],
    href: "#",
    year: "2025",
  },
];

const labs = [
  { title: "minilab.", desc: "Experimentos e protótipos de código criativo e micro-interações.", tags: ["react", "framer"] },
  { title: "berolab.", desc: "Projetos em desenvolvimento contínuo focados em produto real.", tags: ["produto", "saas"] },
  { title: "meu setup.", desc: "Software, hardware e arquitetura de ferramentas do dia a dia.", tags: ["workspace"] },
];

const wordVariants = {
  hidden: { opacity: 0, y: 80, skewY: 5 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { type: "spring" as const, damping: 24, stiffness: 120, delay: 0.1 + i * 0.1 },
  }),
};

export default function HomeClient() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <>
      <FrameBorder />
      <PreloaderWrapper />
      <SmoothScroll />
      <CustomCursor />

      <main className="min-h-screen bg-white text-black font-sans selection:bg-black/10 relative overflow-hidden pb-32">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1160px] px-6 pt-32 lg:px-8 lg:pt-48">
          
          {/* Header / Hero */}
          <div className="mb-40">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-black/5 mb-10 shadow-xl shadow-black/5"
            >
              <Image src="/images/perfil.png" alt="Thales Miguel" fill sizes="96px" className="object-cover object-[center_20%]" />
            </motion.div>

            <h1 className="text-6xl md:text-[100px] leading-[0.95] tracking-tighter overflow-hidden flex flex-wrap gap-x-4 md:gap-x-6 max-w-4xl">
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
                  Design &
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-4">
                <motion.span custom={3} initial="hidden" animate="visible" variants={wordVariants} className="inline-block font-black text-black">
                  Código.
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-10 text-xl md:text-2xl text-neutral-500 max-w-3xl leading-relaxed tracking-tight"
            >
              <strong className="text-black font-semibold">Um espaço pessoal</strong> para compartilhar experimentos, setups e projetos em andamento. Construindo a ponte irretocável entre estética e tecnologia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-12 flex flex-wrap items-center gap-6"
            >
              <Link href="/marketing">
                <MagneticButton className="inline-flex">
                  <span className="relative flex items-center gap-4 rounded-full bg-black px-8 py-4 md:px-10 md:py-5 text-sm md:text-base font-semibold text-white transition-colors hover:bg-neutral-800 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] active:scale-95">
                    Ver Portfólio Gráfico
                    <span className="bg-white/20 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">↗</span>
                  </span>
                </MagneticButton>
              </Link>
              <a href="https://wa.me/5535984128420" target="_blank" rel="noreferrer" className="text-sm md:text-base font-semibold text-neutral-400 hover:text-black transition-colors px-4 py-2">
                Falar no WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Labs Grid */}
          <div className="mb-48">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl tracking-tight mb-16 flex flex-wrap gap-x-3 gap-y-1"
            >
              <span className="font-normal text-[#cccccc]">Meus</span>
              <span className="font-black text-black">Laboratórios.</span>
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {labs.map((lab, i) => (
                <motion.div
                  key={lab.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.15, duration: 0.8, type: "spring", stiffness: 80 }}
                  className="h-full"
                >
                  <TiltCard intensity={8} className="h-full bg-white border border-black/[0.06] rounded-[32px] p-8 md:p-10 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 group flex flex-col">
                    <div className="h-14 w-14 rounded-full border border-black/10 flex items-center justify-center mb-16 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-500 shadow-sm">
                      <span className="text-sm font-mono tracking-tighter mix-blend-difference">0{i+1}</span>
                    </div>
                    <h3 className="text-3xl font-bold tracking-tight mb-4 group-hover:translate-x-1 transition-transform duration-300">{lab.title}</h3>
                    <p className="text-neutral-500 leading-relaxed mb-10 text-[15px]">{lab.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {lab.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 bg-neutral-100/80 border border-black/5 text-neutral-600 rounded-full text-[11px] font-bold uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Selected Work List */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl tracking-tight mb-16 flex flex-wrap gap-x-3 gap-y-1"
            >
              <span className="font-normal text-[#cccccc]">Projetos</span>
              <span className="font-black text-black">Abertos.</span>
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
                  {/* Hover accent background */}
                  <div className="absolute inset-0 bg-neutral-50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] -z-10" />
                  
                  <div className="flex items-center gap-6 mb-6 md:mb-0">
                    <span className="text-neutral-300 font-bold font-mono text-sm tracking-widest">{p.num}</span>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight group-hover:translate-x-4 transition-transform duration-500 ease-out">{p.title}</h3>
                  </div>
                  
                  <div className="flex items-center gap-8">
                    <div className="flex flex-wrap gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                       {p.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 border border-black/10 bg-white rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-500 shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="h-14 w-14 rounded-full border border-black/10 bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white group-hover:border-black group-hover:scale-110 transition-all duration-500">
                      ↗
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
            
            <div className="mt-20 text-center pb-20">
              <p className="text-neutral-400 font-medium">© 2026 Thales Miguel — O design e o código se encontram aqui.</p>
            </div>
          </div>
          
        </div>
      </main>
    </>
  );
}
