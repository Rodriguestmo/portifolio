"use client";

import Image from "next/image";
import AnimateIn from "./AnimateIn";
import { openContactModal } from "@/app/utils/contactModal";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, damping: 22, stiffness: 180, delay: i * 0.09 },
  }),
};

const specialties = [
  {
    title: "Landing Pages",
    description: "Estrutura, copy e design para conversão.",
  },
  {
    title: "Tráfego Pago",
    description: "Meta Ads e Google Ads com leitura de funil.",
  },
  {
    title: "IA Personalizada",
    description: "Treinada com os dados do seu negócio. Não é chatbot genérico.",
  },
  {
    title: "WhatsApp + CRM",
    description: "Atendimento, contexto e handoff bem amarrados.",
  },
] as const;

export default function About() {
  return (
    <section className="section-border px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1160px]">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left — Identity */}
          <AnimateIn variant="slideLeft" delay={0.1}>
            <div>
              {/* Social links */}
              <div className="flex gap-3">
                <button
                  onClick={() => openContactModal()}
                  className="flex h-11 items-center gap-2 rounded-full border border-black/8 px-4 text-sm text-gray-500 transition-colors hover:border-black/20 hover:text-black active:scale-95"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white">
                    WA
                  </div>
                  WhatsApp
                </button>
              </div>

              {/* Name & title */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-black">Thales Miguel</h3>
                <p className="text-gray-500">
                  Design, Tecnologia & Marketing Digital
                </p>
              </div>

              {/* Specialties */}
              <div className="mt-8">
                <p className="text-sm font-medium tracking-wide text-gray-400 uppercase">
                  Especialidades
                </p>
                <motion.div
                  className="mt-4 grid gap-3 sm:grid-cols-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {specialties.map((item, i) => (
                    <motion.div
                      key={item.title}
                      custom={i}
                      variants={cardVariants}
                      className="rounded-xl border border-black/6 bg-white px-5 py-4 transition-shadow hover:shadow-md"
                    >
                      <p className="font-semibold text-black">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-gray-500">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-400">
                  O foco é unir design, mídia e tecnologia numa operação que
                  transforma clique em cliente.
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Right — Bio */}
          <div>
            <AnimateIn variant="slideRight" delay={0.2}>
              {/* Photo */}
              <motion.div
                className="mb-8 h-[320px] w-full max-w-[400px] overflow-hidden rounded-2xl"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              >
                <Image
                  src="/images/thales.jpg"
                  alt="Thales Miguel"
                  width={400}
                  height={320}
                  className="h-full w-full object-cover object-top"
                  priority
                />
              </motion.div>
            </AnimateIn>

            {/* Bio text */}
            <div className="space-y-6 text-lg leading-relaxed text-gray-500">
              {[
                "A maioria das empresas trata marketing e tecnologia como coisas separadas.",
                "Eu junto as duas.",
                "Porque uma landing page bonita que não converte é desperdício, e uma automação poderosa sem design é invisível.",
                "Construo landing pages que vendem, campanhas que escalam e IA personalizada que trabalha enquanto você dorme.",
                "Tudo integrado, tudo mensurável.",
                "Não entrego projeto pela metade.",
                "Se o copy não convence, refaço.",
                "Se a automação trava, corrijo.",
                "O resultado final é o que importa, não o processo.",
              ].map((line, i) => (
                <motion.span
                  key={i}
                  className="block"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.12,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                >
                  {line}{" "}
                </motion.span>
              ))}
            </div>

            {/* Signature */}
            <AnimateIn variant="fadeIn" delay={0.5}>
              <div className="mt-8">
                <p className="font-serif text-2xl italic text-gray-300">
                  Thales Miguel
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
