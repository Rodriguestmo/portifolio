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

              {/* Work history */}
              <div className="mt-8">
                <p className="text-sm font-medium tracking-wide text-gray-400 uppercase">
                  Minha trajetória
                </p>
                <div className="mt-4 space-y-1">
                  <div className="flex items-center justify-between rounded-xl border border-black/6 bg-white px-5 py-4">
                    <div>
                      <p className="font-semibold text-black">RTMO</p>
                      <p className="text-sm text-gray-500">
                        Marketing Digital & Tecnologia
                      </p>
                    </div>
                    <span className="text-sm text-gray-400">2024-presente</span>
                  </div>
                </div>
                <button className="mt-3 flex items-center gap-1 text-sm font-medium text-gray-400 transition-colors hover:text-black">
                  Ver mais
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
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
