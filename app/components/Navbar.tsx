"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Preços", href: "#precos" },
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
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 200, delay: 0.1 }}
      className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 flex items-center gap-8 rounded-full border px-5 py-3 transition-all duration-300 ${
        scrolled
          ? "border-black/8 bg-white/90 shadow-lg backdrop-blur-md"
          : "border-black/6 bg-white/70 backdrop-blur-sm"
      }`}
    >
      <a href="#" className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
          TM
        </div>
        <span className="text-sm font-semibold text-black">Thales Miguel</span>
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
