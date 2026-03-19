"use client";

import Image from "next/image";
import AnimateIn from "./AnimateIn";

const socialLinks = [
  {
    name: "LinkedIn",
    label: "LI",
    href: "https://www.linkedin.com/in/thales-oliveira-rodrigues/",
  },
  {
    name: "WhatsApp",
    label: "WA",
    href: "https://wa.me/5535984128420",
  },
];

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
    title: "Automações com IA",
    description: "Qualificação, CRM e follow-up conectados.",
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
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 items-center gap-2 rounded-full border border-black/8 px-4 text-sm text-gray-500 transition-colors hover:border-black/20 hover:text-black"
                  >
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white">
                      {link.label}
                    </div>
                    {link.name}
                  </a>
                ))}
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
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {specialties.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-black/6 bg-white px-5 py-4"
                    >
                      <p className="font-semibold text-black">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-400">
                  O foco aqui é unir design, mídia e tecnologia numa operação
                  que realmente gere demanda e venda.
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Right — Bio */}
          <div>
            <AnimateIn variant="slideRight" delay={0.2}>
              {/* Photo */}
              <div className="mb-8 h-[320px] w-full max-w-[400px] overflow-hidden rounded-2xl">
                <Image
                  src="/images/thales.jpg"
                  alt="Thales Miguel"
                  width={400}
                  height={320}
                  className="h-full w-full object-cover object-top"
                  priority
                />
              </div>
            </AnimateIn>

            {/* Bio text */}
            <AnimateIn variant="fadeUp" delay={0.3}>
              <div className="space-y-6 text-lg leading-relaxed text-gray-500">
                <p>
                  A maioria das empresas{" "}
                  <span className="font-semibold text-black">
                    trata marketing e tecnologia como coisas separadas.
                  </span>{" "}
                  Eu junto as duas. Porque uma landing page bonita que não converte
                  é desperdício, e uma automação poderosa sem design é invisível.
                </p>
                <p>
                  Construo landing pages que vendem, campanhas que escalam e
                  automações com IA que trabalham enquanto você dorme. Tudo
                  integrado, tudo mensurável.
                </p>
                <p>
                  <span className="font-semibold text-black">
                    Não entrego projeto pela metade.
                  </span>{" "}
                  Se o copy não convence, refaço. Se a automação trava, corrijo.
                  O resultado final é o que importa, não o processo.
                </p>
              </div>
            </AnimateIn>

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
