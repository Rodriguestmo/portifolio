"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// ─── Data ──────────────────────────────────────────────────────────────────

const links = [
  { label: "minilab", href: "#", desc: "Experimentos e protótipos" },
  { label: "berolab", href: "#", desc: "Projetos em desenvolvimento" },
  { label: "meu setup", href: "#", desc: "Hardware, software e ferramentas" },
  { label: "what is it", href: "#", desc: "O que é este site" },
];

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

const contato = [
  { label: "email", value: "thalesmiguel.tech@gmail.com", href: "mailto:thalesmiguel.tech@gmail.com" },
  { label: "whatsapp", value: "+55 35 98412-8420", href: "https://wa.me/5535984128420" },
  { label: "call", value: "agendar horário", href: "https://calendar.app.google/v7s5H975BGwnriuZA" },
];

const usefulLinks = [
  { label: "Portfólio de marketing", href: "/marketing" },
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
];

// ─── Animations ────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

// ─── Component ──────────────────────────────────────────────────────────────

export default function HomeClient() {
  const [linksOpen, setLinksOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-neutral-400 font-mono antialiased selection:bg-neutral-800 selection:text-neutral-200">
      <div className="mx-auto max-w-4xl px-6 py-12 md:py-20 lg:py-24 flex flex-col md:flex-row gap-12 md:gap-24 relative">
        
        {/* ── Sidebar / Header ── */}
        <motion.aside 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="md:w-56 shrink-0 md:sticky md:top-24 h-max flex flex-col gap-6"
        >
          <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-white/10 grayscale hover:grayscale-0 transition-all duration-500">
            <Image 
              src="/images/perfil.png" 
              alt="Thales Miguel" 
              fill 
              sizes="48px"
              className="object-cover object-[center_20%]" 
            />
          </div>
          <div>
            <h1 className="text-sm font-semibold text-neutral-200 tracking-tight">Thales Miguel</h1>
            <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
              Design, tecnologia e marketing.<br />
              Construindo sistemas que convertem.
            </p>
          </div>
          
          <div className="hidden md:flex flex-col gap-2 mt-4 text-xs">
            <a href="mailto:thalesmiguel.tech@gmail.com" className="text-neutral-500 hover:text-neutral-200 transition-colors">email</a>
            <a href="https://wa.me/5535984128420" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-neutral-200 transition-colors">whatsapp</a>
            <Link href="/marketing" className="text-neutral-500 hover:text-neutral-200 transition-colors">marketing /work</Link>
          </div>
        </motion.aside>

        {/* ── Main Content ── */}
        <motion.div 
          className="flex-1 flex flex-col gap-16 md:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ── 00. links ── */}
          <motion.section variants={itemVariants}>
            <button
              onClick={() => setLinksOpen(!linksOpen)}
              className="group flex items-center justify-between w-full text-left"
              aria-expanded={linksOpen}
            >
              <div className="flex items-center gap-4">
                <span className="text-xs text-neutral-600">00</span>
                <span className="text-sm text-neutral-300 group-hover:text-white transition-colors">links</span>
              </div>
              <motion.span
                className="text-xs text-neutral-600"
                animate={{ rotate: linksOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {linksOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 pl-[34px] space-y-3">
                    {links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        className="group flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4"
                      >
                        <span className="text-sm text-neutral-400 group-hover:text-neutral-100 transition-colors">
                          {l.label}
                        </span>
                        <span className="text-xs text-neutral-600 group-hover:text-neutral-500 transition-colors">
                          {l.desc}
                        </span>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>

          {/* ── 01. sobre ── */}
          <motion.section variants={itemVariants} className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="text-xs text-neutral-600">01</span>
              <span className="text-sm text-neutral-300">sobre</span>
            </div>
            <div className="pl-[34px] space-y-4 text-sm leading-relaxed text-neutral-400 max-w-lg">
              <p>
                Trabalho na interseção entre <span className="text-neutral-200">design, tecnologia e marketing</span>.
                Crio interfaces, páginas e automações com um objetivo: gerar resultado real.
              </p>
              <p>
                Este espaço é um pequeno laboratório onde documento o processo, compartilho artigos, referências, setups e coisas que construo pelo caminho.
              </p>
            </div>
          </motion.section>

          {/* ── 02. projetos ── */}
          <motion.section variants={itemVariants} className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="text-xs text-neutral-600">02</span>
              <span className="text-sm text-neutral-300">projetos</span>
            </div>
            <div className="pl-[34px] flex flex-col">
              {projects.map((p) => (
                <a
                  key={p.num}
                  href={p.href}
                  target={p.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex flex-col py-3 border-b border-white/[0.04] last:border-0 relative"
                >
                  <div className="flex items-baseline justify-between w-full z-10">
                    <span className="text-sm text-neutral-400 group-hover:text-neutral-100 transition-colors">
                      {p.title}
                    </span>
                    <span className="text-xs text-neutral-600">{p.year}</span>
                  </div>
                  <div className="flex gap-2 mt-1 z-10 transition-transform duration-300 group-hover:translate-x-1">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-[10px] tracking-wider uppercase text-neutral-600 group-hover:text-neutral-400 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Subtle hover highlight background */}
                  <div className="absolute inset-y-0 -inset-x-4 bg-white/[0.02] opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 -z-0" />
                </a>
              ))}
            </div>
          </motion.section>

          {/* ── 03. marketing ── */}
          <motion.section variants={itemVariants} className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="text-xs text-neutral-600">03</span>
              <span className="text-sm text-neutral-300">marketing</span>
            </div>
            <div className="pl-[34px]">
              <Link
                href="/marketing"
                className="group flex flex-col gap-1 inline-block"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm text-neutral-400 group-hover:text-neutral-100 transition-colors">Portfólio de Marketing</span>
                  <span className="text-neutral-600 group-hover:text-neutral-300 transition-colors group-hover:translate-x-1 duration-300">→</span>
                </div>
                <span className="text-[10px] tracking-wider uppercase text-neutral-600">landing pages · tráfego pago · ia · crm</span>
              </Link>
            </div>
          </motion.section>

          {/* ── 04. contato ── */}
          <motion.section variants={itemVariants} className="flex flex-col gap-4 md:hidden">
            <div className="flex items-center gap-4">
              <span className="text-xs text-neutral-600">04</span>
              <span className="text-sm text-neutral-300">contato</span>
            </div>
            <div className="pl-[34px] space-y-3">
              {contato.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col group"
                >
                  <span className="text-xs text-neutral-600">{c.label}</span>
                  <span className="text-sm text-neutral-400 group-hover:text-neutral-100 transition-colors">
                    {c.value}
                  </span>
                </a>
              ))}
            </div>
          </motion.section>

          {/* ── 05. links úteis ── */}
          <motion.section variants={itemVariants} className="flex flex-col gap-4 pb-20">
            <div className="flex items-center gap-4">
              <span className="text-xs text-neutral-600">05</span>
              <span className="text-sm text-neutral-300">links úteis</span>
            </div>
            <div className="pl-[34px] flex gap-6">
              {usefulLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-xs text-neutral-500 hover:text-neutral-200 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>

    </main>
  );
}
