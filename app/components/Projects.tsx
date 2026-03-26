"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";
import StaggerContainer, { staggerItem } from "./StaggerContainer";
import TiltCard from "./TiltCard";
import { openContactModal } from "@/app/utils/contactModal";
import { useLanguage } from "@/app/context/LanguageContext";

const projectMeta = [
  {
    gradient: "from-amber-900 to-amber-800",
    preview: "/images/preview-camila.png",
    url: "https://camilasutilo.com",
    stack: [] as string[],
  },
  {
    gradient: "from-rose-900 to-rose-800",
    preview: "/images/preview-geovanna.png",
    url: "https://geovanna-lp.web.app",
    stack: [] as string[],
  },
];

export default function Projects() {
  const { t } = useLanguage();
  const p = t.projects;

  const projects = p.items.map((item, i) => ({ ...item, ...projectMeta[i] }));

  return (
    <section id="projetos" className="section-border px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1160px]">
        <AnimateIn variant="fadeUp">
          <h2 className="text-5xl tracking-tight md:text-7xl">
            <span className="heading-muted">{p.heading1}</span>{" "}
            <span className="heading-bold">{p.heading2}</span>
          </h2>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2" staggerDelay={0.12}>
          {projects.map((project) => {
            const cardClassName = `group relative block overflow-hidden rounded-2xl border border-black/6 transition-all duration-500 ${
              project.url ? "hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10 hover:border-black/12" : "hover:shadow-lg"
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
                      <motion.div
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="h-full w-full"
                      >
                        <Image
                          src={project.preview}
                          alt={project.name}
                          width={640}
                          height={400}
                          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                        />
                      </motion.div>
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent p-6">
                        <span className="text-4xl font-black tracking-tight text-white/25 uppercase">
                          {project.name.split(" ")[0]}
                        </span>
                      </div>
                      <motion.div
                        className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        whileHover={{ opacity: 1, backdropFilter: "blur(4px)" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        style={{ borderRadius: "inherit", backgroundColor: "rgba(0,0,0,0.60)" }}
                      >
                        <motion.span
                          className="text-white text-sm font-semibold tracking-widest uppercase"
                          initial={{ y: 10, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.25, delay: 0.05 }}
                        >
                          {project.name}
                        </motion.span>
                        <motion.span
                          className="text-green-400 text-xs tracking-wider"
                          initial={{ y: 10, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.25, delay: 0.1 }}
                        >
                          {p.viewProject}
                        </motion.span>
                      </motion.div>
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
                <TiltCard key={project.name} intensity={4}>
                  <motion.a
                    variants={staggerItem}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClassName}
                  >
                    {cardContent}
                  </motion.a>
                </TiltCard>
              );
            }

            return (
              <TiltCard key={project.name} intensity={4}>
                <motion.article
                  variants={staggerItem}
                  className={cardClassName}
                >
                  {cardContent}
                </motion.article>
              </TiltCard>
            );
          })}
        </StaggerContainer>

        <AnimateIn variant="fadeIn" delay={0.4}>
          <div className="mt-10 rounded-2xl border border-black/6 bg-[#f7f7f7] px-6 py-7 text-center">
            <p className="text-sm text-gray-500">{p.moreText}</p>
            <button
              onClick={() => openContactModal()}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-black transition-opacity hover:opacity-60"
            >
              {p.moreBtn}
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
