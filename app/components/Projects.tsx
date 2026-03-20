"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";
import StaggerContainer, { staggerItem } from "./StaggerContainer";

const projects = [
  {
    name: "Dra. Camila Sutilo",
    category: "Landing + Tráfego + WhatsApp",
    gradient: "from-amber-900 to-amber-800",
    preview: "/images/preview-camila.png",
    url: "https://camilasutilo.com",
    badge: "Site publicado",
    description:
      "Captação com estrutura comercial, operação de mídia e atendimento conectados.",
    actionLabel: "Ver projeto",
    stack: [] as string[],
  },
  {
    name: "Geovanna Romeiro",
    category: "Landing Page de Conversão",
    gradient: "from-rose-900 to-rose-800",
    preview: "/images/preview-geovanna.png",
    url: "https://geovanna-lp.web.app",
    badge: "Landing publicada",
    description:
      "Página desenhada para campanha, clareza de oferta e leitura limpa do funil.",
    actionLabel: "Ver projeto",
    stack: [] as string[],
  },
  // hidden for now
  // {
  //   name: "Prospector Bot",
  //   category: "Automação com IA",
  //   gradient: "from-gray-900 to-gray-800",
  //   preview: null,
  //   url: null,
  //   badge: "Case interno",
  //   description: "Busca leads, organiza contexto no CRM e automatiza outreach com follow-up.",
  //   actionLabel: "Case interno",
  //   stack: ["Google Maps", "IA", "WhatsApp", "Notion CRM"],
  // },
  // {
  //   name: "Atendimento Inteligente",
  //   category: "WhatsApp + IA",
  //   gradient: "from-emerald-900 to-emerald-800",
  //   preview: null,
  //   url: null,
  //   badge: "Em estrutura",
  //   description: "Qualificação, contexto, agendamento e handoff humano dentro do mesmo fluxo.",
  //   actionLabel: "Em construção",
  //   stack: ["WhatsApp", "Qualificação", "Agenda", "Handoff"],
  // },
];

export default function Projects() {
  return (
    <section id="projetos" className="section-border px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1160px]">
        <AnimateIn variant="fadeUp">
          <h2 className="text-5xl tracking-tight md:text-7xl">
            <span className="heading-muted">Últimos</span>{" "}
            <span className="heading-bold">Projetos</span>
          </h2>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2" staggerDelay={0.12}>
          {projects.map((project) => {
            const cardClassName = `group relative block overflow-hidden rounded-2xl border border-black/6 transition-all ${
              project.url ? "hover:-translate-y-1 hover:shadow-xl" : "hover:shadow-lg"
            }`;

            const cardContent = (
              <>
                <div
                  className={`relative h-[320px] overflow-hidden bg-gradient-to-br ${project.gradient}`}
                >
                  <div className="absolute top-5 left-5 z-10 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium tracking-wide text-white/80 uppercase backdrop-blur-sm">
                    {project.badge}
                  </div>

                  {project.preview ? (
                    <>
                      <Image
                        src={project.preview}
                        alt={project.name}
                        width={640}
                        height={400}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent p-6">
                        <span className="text-4xl font-black tracking-tight text-white/25 uppercase">
                          {project.name.split(" ")[0]}
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="flex h-full flex-col justify-between p-8 text-white">
                      <div>
                        <div className="mb-5 flex gap-1.5">
                          <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                          <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                          <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[11px] font-medium text-white/75"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="max-w-sm">
                          <p className="text-sm leading-relaxed text-white/72">
                            {project.description}
                          </p>
                        </div>
                        <span className="text-4xl font-black tracking-tight text-white/18 uppercase">
                          {project.name.split(" ")[0]}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-white px-6 py-5">
                  <div>
                    <h3 className="font-semibold text-black">{project.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{project.category}</p>
                  </div>
                  <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-gray-500">
                    {project.description}
                  </p>
                </div>
              </>
            );

            if (project.url) {
              return (
                <motion.a
                  key={project.name}
                  variants={staggerItem}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClassName}
                >
                  {cardContent}
                </motion.a>
              );
            }

            return (
              <motion.article
                key={project.name}
                variants={staggerItem}
                className={cardClassName}
              >
                {cardContent}
              </motion.article>
            );
          })}
        </StaggerContainer>

        <AnimateIn variant="fadeIn" delay={0.4}>
          <div className="mt-10 rounded-2xl border border-black/6 bg-[#f7f7f7] px-6 py-7 text-center">
            <p className="text-sm text-gray-500">
              Quer ver mais bastidores, dashboards e automações rodando em operação real?
            </p>
            <a
              href="https://wa.me/5535984128420?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20ver%20mais%20cases%20e%20bastidores%20dos%20projetos"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-black transition-opacity hover:opacity-60"
            >
              Pedir mais cases no WhatsApp
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
