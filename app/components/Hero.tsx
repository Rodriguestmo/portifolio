"use client";

import AnimateIn from "./AnimateIn";
import AnimatedCounter from "./AnimatedCounter";
import MagneticButton from "./MagneticButton";
import TiltCard from "./TiltCard";
import { openContactModal } from "@/app/utils/contactModal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";

const wordVariants = {
  hidden: { opacity: 0, y: 60, skewY: 4 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { type: "spring" as const, damping: 20, stiffness: 150, delay: 0.3 + i * 0.08 },
  }),
};



export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  // Subtle parallax on scroll
  const { scrollYProgress } = useScroll({ offset: ["start start", "end start"] });
  const card1Y = useTransform(scrollYProgress, [0, 1], [0, -25]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const card3Y = useTransform(scrollYProgress, [0, 1], [0, -55]);

  return (
    <section className="relative px-6 pt-28 pb-20 lg:px-8 lg:pt-36 lg:pb-28 overflow-hidden">
      <div className="mx-auto max-w-[1160px]">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}
          <div>
            <AnimateIn variant="fadeIn" delay={0.2} trigger="mount">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] px-4 py-2 text-xs font-medium text-black/70 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="text-black/50">{h.badgeMuted}</span>
                <span className="text-black font-semibold">{h.badgeBold}</span>
              </div>
            </AnimateIn>

            <h1 className="mt-8 text-5xl leading-[1.05] tracking-tight md:text-7xl overflow-hidden">
              <span className="block overflow-hidden">
                {h.titleLine1.map((word, i) => (
                  <motion.span
                    key={word + i}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={wordVariants}
                    className="heading-muted inline-block mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block overflow-hidden">
                {h.titleLine2.map((word, i) => (
                  <motion.span
                    key={word + i}
                    custom={i + 2}
                    initial="hidden"
                    animate="visible"
                    variants={wordVariants}
                    className="heading-bold inline-block mr-[0.2em]"
                    style={{
                      background: "linear-gradient(135deg, #000000 30%, #6b6b6b 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.p
              className="mt-8 max-w-xl text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <span className="font-semibold text-black">{h.descBold}</span>{" "}
              <span className="text-gray-500">{h.descMuted}</span>
            </motion.p>

            {/* Stats bar */}
            <motion.div
              className="mt-10 flex flex-wrap gap-6 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div>
                <p className="font-bold text-black">+R$ <AnimatedCounter target={18} className="tabular-nums" />M</p>
                <p className="text-gray-400">{h.statLabel}</p>
              </div>
              <div className="h-10 w-px bg-black/10" />
              <div>
                <p className="text-gray-400"><span className="font-bold text-black">{h.statMore}</span> {h.statMoreSuffix}</p>
                <p className="text-gray-400"><span className="font-bold text-black">{h.statLess}</span> {h.statLessSuffix}</p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <MagneticButton>
                {/* Layered pill button — outer border + inner pill + glow streak */}
                <button
                  onClick={() => openContactModal()}
                  className="relative rounded-full p-[1px] active:scale-95 transition-transform"
                  style={{ border: "0.6px solid rgba(0,0,0,0.25)" }}
                >
                  {/* Glow streak on top */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-px h-[10px] w-3/5 rounded-full blur-sm"
                    style={{ background: "rgba(255,255,255,0.55)" }}
                  />
                  {/* Inner pill */}
                  <span className="relative flex items-center gap-3 rounded-full bg-black px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-gray-900">
                    <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    {h.ctaWhatsapp}
                  </span>
                </button>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="https://calendar.app.google/v7s5H975BGwnriuZA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-black/15 px-6 py-4 text-sm font-medium text-black transition-all hover:bg-gray-50 hover:border-black/30 active:scale-95"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  <span>{h.ctaSchedule}</span>
                </a>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right — Screenshot-style mini hero cards (scaled from 1920px) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[490px]">

              {/* Card 1 — Aleph: screenshot crop */}
              <motion.div
                initial={{ opacity: 0, y: 60, rotate: 6 }}
                animate={{ opacity: 1, y: 0, rotate: 3 }}
                transition={{ type: "spring", damping: 22, stiffness: 120, delay: 0.5 }}
                style={{ y: card1Y }}
                className="absolute top-3 right-0 h-[300px] w-[390px]"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full w-full"
                >
                <TiltCard intensity={6} className="h-full w-full overflow-hidden rounded-[2rem] border border-white/6 shadow-2xl">
                <div style={{ width: 975, height: 750, transform: "scale(0.4)", transformOrigin: "top left" }} className="bg-[#0e0e10]">
                  <div className="absolute top-0 left-0 h-[360px] w-[360px] rounded-full bg-[#5e41e4]/18 blur-[80px]" />
                  <div className="relative flex items-center justify-between px-10 py-6 border-b border-white/6">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg bg-white/90" />
                      <span className="text-xl font-semibold text-white/80">Aleph</span>
                    </div>
                    <div className="flex items-center gap-8 text-sm text-white/50">
                      <span>Programa</span><span>Grade</span><span>Mentores</span><span>Resultados</span><span>Preços</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-full bg-[#5e41e4] px-6 py-3 text-sm font-semibold text-white">
                      Garantir vaga
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-xs">↗</div>
                    </div>
                  </div>
                  <div className="relative grid grid-cols-[1fr_420px] gap-8 px-10 pt-14">
                    <div>
                      <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 mb-8">
                        <span className="rounded-full bg-[#5e41e4] px-3 py-1 text-xs font-bold text-white uppercase">Turma 4</span>
                        <span className="text-sm text-white/60">Últimas vagas abertas</span>
                      </div>
                      <h1 className="text-[72px] leading-[1.0] font-bold tracking-tight text-white mb-6">
                        De zero a dev<br />em 6 meses.
                      </h1>
                      <p className="text-lg text-white/50 mb-8 max-w-[38ch]">
                        Bootcamp intensivo com projeto real desde o primeiro dia. Sem enrolação, sem teoria inútil.
                      </p>
                      <div className="flex items-center gap-4 mb-10">
                        <div className="flex items-center gap-3 rounded-full bg-[#5e41e4] px-8 py-4 text-base font-semibold text-white">
                          Garantir vaga
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">↗</div>
                        </div>
                        <div className="rounded-full border border-white/15 px-8 py-4 text-base font-medium text-white/70">
                          Ver grade
                        </div>
                      </div>
                      <div className="flex gap-8 text-sm font-medium text-white/40 uppercase tracking-widest">
                        <span>💻 100% Online</span><span>✓ Prático</span><span>◆ Certificado</span>
                      </div>
                    </div>
                    <div className="flex gap-4 pt-4">
                      {[
                        { bg: "bg-[#2a1f45]", name: "Rafael Mendes", role: "Dev Pleno @ Nubank" },
                        { bg: "bg-[#1a2535]", name: "Priya Anand", role: "Engenheira @ iFood" },
                        { bg: "bg-[#1f2a1e]", name: "Lucas Ferreira", role: "Frontend @ Conta Azul" },
                      ].map((s) => (
                        <div key={s.name} className="w-[120px] overflow-hidden rounded-[20px] border border-white/8 bg-white/4">
                          <div className={`h-[200px] ${s.bg}`} />
                          <div className="p-3">
                            <p className="text-sm font-semibold text-white leading-tight">{s.name}</p>
                            <p className="mt-1 text-xs text-white/45 leading-tight">{s.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
                </motion.div>
              </motion.div>

              {/* Card 2 — MOVX: screenshot crop */}
              <motion.div
                initial={{ opacity: 0, y: 80, rotate: -5 }}
                animate={{ opacity: 1, y: 0, rotate: -2 }}
                transition={{ type: "spring", damping: 22, stiffness: 120, delay: 0.7 }}
                style={{ y: card2Y }}
                className="absolute top-16 left-10 h-[300px] w-[390px]"
              >
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                  className="h-full w-full"
                >
                <TiltCard intensity={6} className="h-full w-full overflow-hidden rounded-[2rem] shadow-2xl">
                <div style={{ width: 975, height: 750, transform: "scale(0.4)", transformOrigin: "top left" }} className="relative">
                  <div className="absolute inset-0 bg-[linear-gradient(160deg,#252f1c_0%,#1a2316_25%,#111910_55%,#0a0e08_100%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_10%,rgba(200,220,160,0.08),transparent_45%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.5)_100%)]" />
                  <div className="absolute right-0 top-0 h-full w-[55%] bg-[radial-gradient(ellipse_at_70%_40%,rgba(80,100,60,0.25),transparent_60%)]" />
                  <div className="relative flex items-center justify-between px-10 py-6">
                    <span className="text-2xl font-bold tracking-[0.2em] text-white/90 uppercase">MOVX</span>
                    <div className="flex items-center gap-8 text-sm text-white/50">
                      <span>Recursos</span><span>Comunidade</span><span>Preços</span><span>Blog</span>
                    </div>
                    <span className="text-base font-medium text-[#c3ee5e]">Começar →</span>
                  </div>
                  <div className="relative px-10 pt-28">
                    <h1 className="text-[72px] leading-[1.05] font-bold tracking-tight text-white mb-6 max-w-[16ch]">
                      Treine como o 1%,<br />no seu ritmo.
                    </h1>
                    <p className="text-lg text-white/60 mb-10 max-w-[36ch]">
                      Coaching humano deixou de ser luxo. Tenha um coach MOVX para manter a consistência.
                    </p>
                    <div className="flex items-center gap-6">
                      <div className="rounded-full bg-[#c3ee5e] px-8 py-4 text-base font-bold text-black">
                        Começar agora
                      </div>
                      <div className="flex gap-3">
                        {[["Melhor", "App"], ["Melhor", "Fitness App"]].map(([l1, l2], i) => (
                          <div key={i} className="flex flex-col items-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 backdrop-blur-sm">
                            <div className="flex gap-0.5 mb-1">
                              {[...Array(5)].map((_, j) => <span key={j} className="text-[#c3ee5e] text-base">★</span>)}
                            </div>
                            <span className="text-xs text-white/50">{l1}</span>
                            <span className="text-xs text-white/50">{l2}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
                </motion.div>
              </motion.div>

              {/* Card 3 — Flow: screenshot crop */}
              <motion.div
                initial={{ opacity: 0, y: 100, rotate: 4 }}
                animate={{ opacity: 1, y: 0, rotate: 1 }}
                transition={{ type: "spring", damping: 22, stiffness: 120, delay: 0.9 }}
                style={{ y: card3Y }}
                className="absolute bottom-0 left-0 h-[300px] w-[392px]"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="h-full w-full"
                >
                <TiltCard intensity={6} className="h-full w-full overflow-hidden rounded-[2rem] shadow-2xl">
                <div style={{ width: 980, height: 750, transform: "scale(0.4)", transformOrigin: "top left" }} className="relative bg-[#f0eaf8]">
                  <div className="absolute top-0 left-[20%] h-[500px] w-[500px] rounded-full bg-[#c4aee0]/20 blur-[100px]" />
                  <div className="absolute bottom-0 right-[10%] h-[400px] w-[400px] rounded-full bg-[#b89fd8]/15 blur-[80px]" />
                  <div className="relative flex items-center justify-between px-10 py-6">
                    <div className="flex items-center gap-2.5">
                      <div className="h-7 w-7 rounded-md bg-[#7d5f92]" />
                      <span className="text-lg font-semibold text-[#271f36]">Flow</span>
                    </div>
                    <div className="flex items-center gap-8 text-sm text-[#7d5f92]">
                      <span>Home</span><span>Recursos</span><span>Comparar</span><span>Avaliações</span><span>FAQ</span>
                    </div>
                    <span className="text-base font-medium text-[#7d5f92]">Acessar Flow — É Grátis</span>
                  </div>
                  <div className="relative flex flex-col items-center px-10 pt-10 text-center">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => <span key={i} className="text-2xl text-amber-400">★</span>)}
                      </div>
                      <span className="text-base text-[#7d5f92]">Confiado por 2.500+ equipes</span>
                    </div>
                    <h1 className="text-[68px] leading-[1.05] font-bold tracking-tight text-[#271f36] mb-6 max-w-[18ch]">
                      Automatize seu trabalho de forma simples
                    </h1>
                    <p className="text-lg text-[#7d5f92] mb-8 max-w-[42ch]">
                      Flow conecta nos seus fluxos existentes para você abandonar o trabalho repetitivo.
                    </p>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="flex items-center gap-3 rounded-full bg-[#7d5f92] px-8 py-4 text-base font-semibold text-white">
                        Começar Grátis →
                      </div>
                      <div className="rounded-full border border-[#c4aee0] px-8 py-4 text-base font-medium text-[#7d5f92]">
                        Saiba como
                      </div>
                    </div>
                    <div className="flex gap-8 text-sm text-[#9f80da]">
                      <span>⏱ 7 min setup</span><span>🔒 LGPD</span><span>👥 23.027 usuários</span>
                    </div>
                    <div className="mt-8 w-[700px] overflow-hidden rounded-[24px] border border-[#c4aee0]/50 bg-white/80 shadow-[0_20px_80px_rgba(125,95,146,0.15)] backdrop-blur-sm">
                      <div className="flex items-center gap-2 border-b border-[#e8dff5] px-6 py-4">
                        <div className="h-4 w-4 rounded-full bg-[#c4aee0]" />
                        <span className="text-sm text-[#7d5f92]">Painel</span>
                      </div>
                      <div className="grid grid-cols-[160px_1fr] h-[140px]">
                        <div className="border-r border-[#e8dff5] p-4 space-y-3">
                          {["Dashboard","Público","Fluxos"].map(item => (
                            <div key={item} className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-[#c4aee0]" />
                              <div className="h-2 flex-1 rounded bg-[#e8dff5]" />
                            </div>
                          ))}
                        </div>
                        <div className="relative p-6">
                          <div className="absolute top-6 left-20 rounded-xl border border-[#d5c8f0] bg-white px-5 py-3 shadow-md">
                            <div className="h-3 w-28 rounded bg-[#c4b5fd] mb-2" />
                            <div className="h-2 w-20 rounded bg-[#e8dff5]" />
                          </div>
                          <div className="absolute top-16 left-6 rounded-xl border border-[#d5c8f0] bg-white px-5 py-3 shadow-md">
                            <div className="h-3 w-24 rounded bg-[#a78bfa] mb-2" />
                            <div className="h-2 w-16 rounded bg-[#e8dff5]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
