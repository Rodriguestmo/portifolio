"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { openContactModal } from "@/app/utils/contactModal";
import { useLanguage } from "@/app/context/LanguageContext";

const footerHeadingVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const footerWordVariants: Variants = {
  hidden: { opacity: 0, y: 50, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Footer() {
  const { t } = useLanguage();
  const fo = t.footer;
  const nav = t.nav;

  const { scrollYProgress } = useScroll();
  const footerTextX = useTransform(scrollYProgress, [0.7, 1], ["0%", "-8%"]);
  const footerY = useTransform(scrollYProgress, [0.7, 1], ["30px", "0px"]);

  return (
    <footer id="contato" className="relative bg-black px-6 py-20 text-white lg:px-8 lg:py-28 overflow-hidden">

      <motion.div className="relative z-10 mx-auto max-w-[1160px]" style={{ y: footerY }}>
        {/* Big heading */}
        <motion.h2
          className="text-5xl leading-[1.05] tracking-tight md:text-7xl overflow-hidden"
          variants={footerHeadingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span variants={footerWordVariants} className="block font-bold text-white">{fo.line1}</motion.span>
          <motion.span variants={footerWordVariants} className="block text-gray-600">{fo.line2}</motion.span>
          <motion.span variants={footerWordVariants} className="block text-gray-600">{fo.line3}</motion.span>
        </motion.h2>

        {/* Contact info — 4 columns */}
        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {[
            <div key="email">
              <p className="text-sm text-gray-500">{fo.emailLabel}</p>
              <a href="mailto:thalesmiguel.tech@gmail.com" className="mt-1 text-white transition-opacity hover:opacity-70">
                thalesmiguel.tech@gmail.com
              </a>
            </div>,
            <div key="whatsapp">
              <p className="text-sm text-gray-500">{fo.whatsappLabel}</p>
              <button onClick={() => openContactModal()} className="mt-1 text-white transition-opacity hover:opacity-70">
                {fo.whatsappCta}
              </button>
            </div>,
            <div key="meeting">
              <p className="text-sm text-gray-500">{fo.meetingLabel}</p>
              <a
                href="https://calendar.app.google/v7s5H975BGwnriuZA"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-white transition-opacity hover:opacity-70"
              >
                {fo.meetingCta}
              </a>
            </div>,
            <div key="response">
              <p className="text-sm text-gray-500">{fo.responseLabel}</p>
              <p className="mt-1 text-gray-400 text-sm">{fo.responseDesc}</p>
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
            <div>
              <p className="text-sm text-gray-500">{fo.menuLabel}</p>
              <div className="mt-2 flex gap-4">
                {nav.links.map((link) => (
                  <a key={link.label} href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-500">{fo.copyright}</p>
          </div>
        </div>

        {/* Giant name */}
        <motion.div
          className="relative mt-16 overflow-hidden"
          style={{ height: "clamp(70px, 11vw, 160px)" }}
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p
            className="text-center font-black leading-none tracking-tighter text-gray-800 select-none whitespace-nowrap"
            style={{ fontSize: "clamp(80px, 18vw, 280px)", x: footerTextX }}
          >
            THALES
          </motion.p>
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </motion.div>
      </motion.div>
    </footer>
  );
}
