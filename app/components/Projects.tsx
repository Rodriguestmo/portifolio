"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";
import StaggerContainer, { staggerItem } from "./StaggerContainer";

const projects = [
  {
    name: "Clínica Dra. Camila",
    category: "Landing Page",
    gradient: "from-amber-900 to-amber-800",
    preview: "/images/preview-camila.png",
    url: "https://camilasutilo.com",
  },
  {
    name: "Geovanna LP",
    category: "Landing Page",
    gradient: "from-rose-900 to-rose-800",
    preview: "/images/preview-geovanna.png",
    url: "https://geovanna-lp.web.app",
  },
  {
    name: "Prospector Bot",
    category: "Automação com IA",
    gradient: "from-gray-900 to-gray-800",
    preview: null,
    url: "#",
  },
  {
    name: "Atendimento Inteligente",
    category: "WhatsApp + IA",
    gradient: "from-emerald-900 to-emerald-800",
    preview: null,
    url: "#",
  },
] as const;

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
          {projects.map((project) => (
            <motion.a
              key={project.name}
              variants={staggerItem}
              href={project.url}
              target={project.url !== "#" ? "_blank" : undefined}
              rel={project.url !== "#" ? "noopener noreferrer" : undefined}
              className="group relative block overflow-hidden rounded-2xl border border-black/6 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Project mockup area */}
              <div
                className={`relative h-[280px] overflow-hidden bg-gradient-to-br ${project.gradient}`}
              >
                {project.preview ? (
                  <Image
                    src={project.preview}
                    alt={project.name}
                    width={640}
                    height={400}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full flex-col p-8">
                    <div className="mb-4 flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    </div>
                    <div className="flex flex-1 items-center justify-center">
                      <span className="text-sm font-medium text-white/40">Em breve</span>
                    </div>
                  </div>
                )}
                {/* Overlay gradient */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                  <span className="text-4xl font-black tracking-tight text-white/25 uppercase">
                    {project.name.split(" ")[0]}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="flex items-center justify-between bg-white px-6 py-5">
                <div>
                  <h3 className="font-semibold text-black">{project.name}</h3>
                  <p className="text-sm text-gray-500">{project.category}</p>
                </div>
                <span className="flex items-center gap-1 text-sm text-gray-400 transition-colors group-hover:text-black">
                  Ver Projeto
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
                </span>
              </div>
            </motion.a>
          ))}
        </StaggerContainer>

        <AnimateIn variant="fadeIn" delay={0.4}>
          <div className="mt-10 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-black transition-opacity hover:opacity-60"
            >
              Ver todos os projetos
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
