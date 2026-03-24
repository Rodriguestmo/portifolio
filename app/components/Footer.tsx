"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import Aurora from "./Aurora";
import { openContactModal } from "@/app/utils/contactModal";

const footerHeadingVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const footerWordVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const menuLinks = [
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Soluções", href: "#solucoes" },
];

export default function Footer() {
  const { scrollYProgress } = useScroll();

  const footerTextX = useTransform(scrollYProgress, [0.7, 1], ["0%", "-8%"]);
  const footerY = useTransform(scrollYProgress, [0.7, 1], ["30px", "0px"]);

  return (
    <footer id="contato" className="relative bg-black px-6 py-20 text-white lg:px-8 lg:py-28 overflow-hidden">
      <Aurora intensity={0.55} dark />
      <motion.div className="mx-auto max-w-[1160px]" style={{ y: footerY }}>
        {/* Big heading */}
        <motion.h2
          className="text-5xl leading-[1.05] tracking-tight md:text-7xl overflow-hidden"
          variants={footerHeadingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span variants={footerWordVariants} className="block font-bold text-white">Vamos</motion.span>
          <motion.span variants={footerWordVariants} className="block text-gray-600">criar</motion.span>
          <motion.span variants={footerWordVariants} className="block text-gray-600">resultados incríveis juntos.</motion.span>
        </motion.h2>

        {/* Contact info — 4 columns */}
        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {[
            <div key="email">
              <p className="text-sm text-gray-500">E-mail</p>
              <a
                href="mailto:thalesmiguel.tech@gmail.com"
                className="mt-1 text-white transition-opacity hover:opacity-70"
              >
                thalesmiguel.tech@gmail.com
              </a>
            </div>,
            <div key="whatsapp">
              <p className="text-sm text-gray-500">WhatsApp</p>
              <button
                onClick={() => openContactModal()}
                className="mt-1 text-white transition-opacity hover:opacity-70"
              >
                Fale agora
              </button>
            </div>,
            <div key="meeting">
              <p className="text-sm text-gray-500">Agendar reunião</p>
              <a
                href="https://calendar.app.google/v7s5H975BGwnriuZA"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-white transition-opacity hover:opacity-70"
              >
                Marcar horário
              </a>
            </div>,
            <div key="response">
              <p className="text-sm text-gray-500">Resposta rápida</p>
              <p className="mt-1 text-gray-400 text-sm">Geralmente em menos de 1h</p>
            </div>,
          ].map((child, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {child}
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row">
            {/* Menu */}
            <div>
              <p className="text-sm text-gray-500">Menu</p>
              <div className="mt-2 flex gap-4">
                {menuLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Legal - placeholder until pages are created */}

            {/* Copyright */}
            <p className="text-sm text-gray-500">&copy; 2026 Thales Miguel — Marketing Digital & Tecnologia</p>
          </div>
        </div>

        {/* Giant name — only top half visible, fading out */}
        <div className="relative mt-16 overflow-hidden" style={{ height: "clamp(70px, 11vw, 160px)" }}>
          <motion.p
            className="text-center font-black leading-none tracking-tighter text-gray-800 select-none whitespace-nowrap"
            style={{ fontSize: "clamp(80px, 18vw, 280px)", x: footerTextX }}
          >
            THALES
          </motion.p>
          {/* blur fade from middle down */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
      </motion.div>
    </footer>
  );
}
