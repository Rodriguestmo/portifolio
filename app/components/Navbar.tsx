"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const links = [
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Soluções", href: "#solucoes" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 200, delay: 0.1 }}
      className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 flex items-center gap-8 rounded-full border px-5 py-3 transition-all duration-300 ${
        scrolled
          ? "border-black/8 bg-white/90 shadow-lg backdrop-blur-md"
          : "border-black/6 bg-white/70 backdrop-blur-sm"
      }`}
    >
      <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center gap-3">
        <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
          <Image src="/images/perfil.png" alt="Thales Miguel" fill className="object-cover object-[center_20%]" />
        </div>
        <span className="text-sm font-semibold text-black">
          <span className="sm:hidden">Thales</span>
          <span className="hidden sm:inline">Thales Miguel</span>
        </span>
      </a>

      <a
        href="#contato"
        className="rounded-full border border-black bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 md:hidden"
      >
        Contato
      </a>

      <div className="hidden items-center gap-6 md:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-gray-500 transition-colors hover:text-black"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contato"
          className="rounded-full border border-black bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
        >
          Contato
        </a>
      </div>
    </motion.nav>
  );
}
