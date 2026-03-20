"use client";

import AnimateIn from "./AnimateIn";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="px-6 pt-28 pb-20 lg:px-8 lg:pt-36 lg:pb-28">
      <div className="mx-auto max-w-[1160px]">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}
          <div>
            <AnimateIn variant="fadeIn" delay={0.2} trigger="mount">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-black/8 bg-white/80 px-4 py-2 text-xs font-medium tracking-wide text-black uppercase">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Disponível para projetos
              </div>
            </AnimateIn>

            <AnimateIn variant="genie" delay={0.3} trigger="mount">
              <h1 className="mt-8 text-5xl leading-[1.05] tracking-tight md:text-7xl">
                <span className="heading-muted">Tecnologia que</span>
                <br />
                <span className="heading-bold">entrega resultado.</span>
              </h1>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={0.5} trigger="mount">
              <p className="mt-8 max-w-xl text-lg leading-relaxed">
                <span className="font-semibold text-black">
                  Landing pages, tráfego pago e automações com IA. Tudo conectado
                  para transformar clique em lead qualificado.
                </span>{" "}
                <span className="text-gray-500">
                  Eu monto a operação digital completa que sua marca precisa para
                  atrair, qualificar e converter.
                </span>
              </p>
            </AnimateIn>

            {/* Stats bar */}
            <AnimateIn variant="slideLeft" delay={0.6} trigger="mount">
              <div className="mt-10 flex flex-wrap gap-6 text-sm">
                <div>
                  <p className="font-bold text-black">+R$ 18M</p>
                  <p className="text-gray-400">em mídia gerenciada</p>
                </div>
                <div className="h-10 w-px bg-black/10" />
                <div>
                  <p className="font-bold text-black">+50</p>
                  <p className="text-gray-400">projetos entregues</p>
                </div>
                <div className="h-10 w-px bg-black/10" />
                <div>
                  <p className="text-gray-400"><span className="font-bold text-black">mais</span> resultado com</p>
                  <p className="text-gray-400"><span className="font-bold text-black">menor</span> custo possível</p>
                </div>
              </div>
            </AnimateIn>

            {/* CTAs */}
            <AnimateIn variant="fadeUp" delay={0.7} trigger="mount">
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/5535984128420?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-black px-6 py-4 text-sm font-medium text-white transition-all hover:bg-gray-800 hover:shadow-lg"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Fale comigo no WhatsApp</span>
                </a>
                <a
                  href="https://calendar.app.google/v7s5H975BGwnriuZA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-black/15 px-6 py-4 text-sm font-medium text-black transition-all hover:bg-gray-50"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  <span>Agendar reunião</span>
                </a>
              </div>
            </AnimateIn>
          </div>

          {/* Right — Framer-inspired mini hero cards */}
          <div className="relative hidden lg:block">
            <div className="relative h-[490px]">

              {/* Card 1 — Educore style: dark bg, big white headline, profile photos, purple CTA */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, x: 0, rotate: 3 }}
                transition={{ type: "spring", damping: 25, stiffness: 180, delay: 0.4 }}
                className="absolute top-3 right-0 h-[300px] w-[390px] overflow-hidden rounded-[2rem] border border-white/6 bg-[#0e0e10] p-5 shadow-2xl"
              >
                {/* subtle purple glow top-left */}
                <div className="absolute top-0 left-0 h-40 w-40 rounded-full bg-[#5e41e4]/20 blur-3xl" />

                {/* navbar row */}
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="h-5 w-5 rounded-md bg-white/90" />
                    <span className="text-[11px] font-semibold text-white/80">Educore</span>
                  </div>
                  <span className="rounded-full bg-[#5e41e4] px-3 py-1 text-[10px] font-semibold text-white">
                    Matricule-se
                  </span>
                </div>

                {/* badge */}
                <div className="relative mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/6 px-3 py-1">
                  <span className="rounded-full bg-[#5e41e4] px-1.5 py-0.5 text-[8px] font-bold text-white uppercase">Novo</span>
                  <span className="text-[10px] text-white/60">Vagas abertas para 2025</span>
                </div>

                {/* headline */}
                <div className="relative mt-3 grid grid-cols-[1fr_auto] gap-3">
                  <div>
                    <p className="text-[1.6rem] leading-[1.0] font-bold tracking-tight text-white">
                      Domine UI Design<br />do Zero.
                    </p>
                    <p className="mt-2 text-[11px] leading-relaxed text-white/50">
                      O único curso de design que você precisa para estar entre os top 1%.
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="rounded-full bg-[#5e41e4] px-3 py-1.5 text-[10px] font-semibold text-white">
                        Matricule-se
                      </span>
                      <span className="rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-medium text-white/70">
                        Ver grade
                      </span>
                    </div>
                    <div className="mt-3 flex gap-3 text-[9px] font-medium text-white/40 uppercase tracking-wider">
                      <span>● Online</span>
                      <span>✓ Prático</span>
                      <span>◆ Certificado</span>
                    </div>
                  </div>

                  {/* floating student photo cards */}
                  <div className="flex flex-col gap-2 pt-1">
                    {[
                      { color: "bg-[#3a2a5c]", name: "Ana Lima", role: "Designer @ Adobe" },
                      { color: "bg-[#1a2a3c]", name: "Erin R.", role: "UX @ Google" },
                    ].map((s) => (
                      <div key={s.name} className="w-[100px] overflow-hidden rounded-2xl border border-white/8 bg-white/5">
                        <div className={`h-14 ${s.color}`} />
                        <div className="p-2">
                          <p className="text-[9px] font-semibold text-white leading-tight">{s.name}</p>
                          <p className="text-[8px] text-white/45 leading-tight">{s.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Card 2 — FitFlix style: full dark photo bg, white text, green CTA, award badges */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, x: 0, rotate: -2 }}
                transition={{ type: "spring", damping: 25, stiffness: 180, delay: 0.55 }}
                className="absolute top-16 left-10 h-[300px] w-[390px] overflow-hidden rounded-[2rem] shadow-2xl"
              >
                {/* photo-like dark gradient bg */}
                <div className="absolute inset-0 bg-[linear-gradient(135deg,#1a1f14_0%,#2b3320_30%,#1c2418_60%,#0e1209_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_0%,rgba(255,255,255,0.07),transparent_50%)]" />
                {/* subtle texture overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.55)_100%)]" />

                <div className="relative flex h-full flex-col justify-between p-6 text-white">
                  {/* top nav */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-widest text-white/90 uppercase">FITFLIX</span>
                    <span className="text-[11px] font-medium text-[#c3ee5e]">Começar →</span>
                  </div>

                  {/* main content — bottom left like Fitflix */}
                  <div>
                    <p className="max-w-[18ch] text-[1.7rem] leading-[1.05] font-bold tracking-tight text-white">
                      Treine como o 1%.<br />No seu ritmo.
                    </p>
                    <p className="mt-2 max-w-[26ch] text-[11px] leading-relaxed text-white/60">
                      Coaching humano deixou de ser luxo. Ganhe R$100 off no primeiro mês.
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <span className="rounded-full bg-[#c3ee5e] px-4 py-2 text-[11px] font-bold text-black">
                        Começar agora
                      </span>
                      {/* award badges */}
                      <div className="flex gap-2">
                        {["Melhor\nApp", "Fitness\nApp"].map((b) => (
                          <div key={b} className="flex flex-col items-center rounded-xl border border-white/15 bg-white/8 px-2.5 py-1.5 text-center backdrop-blur-sm">
                            <span className="text-[9px] leading-tight text-white/50 whitespace-pre-line">{b}</span>
                            <div className="mt-0.5 flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-[7px] text-[#c3ee5e]">★</span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 — Flowline style: lavender bg, stars badge, dark purple headline, app mockup */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, x: 0, rotate: 1 }}
                transition={{ type: "spring", damping: 25, stiffness: 180, delay: 0.7 }}
                className="absolute bottom-0 left-0 h-[300px] w-[392px] overflow-hidden rounded-[2rem] border border-[#d5c8f0] bg-[#f0eaf8] shadow-2xl"
              >
                {/* soft radial orbs */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(157,128,218,0.22),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(168,100,240,0.14),transparent_40%)]" />

                <div className="relative flex h-full flex-col gap-3 p-5">
                  {/* stars badge */}
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[11px] text-amber-400">★</span>
                      ))}
                    </div>
                    <span className="text-[10px] text-[#7d5f92]">Confiado por 2.500+ equipes</span>
                  </div>

                  {/* headline */}
                  <p className="max-w-[18ch] text-[1.75rem] leading-[1.02] font-bold tracking-tight text-[#271f36]">
                    Trabalho chato.<br />Feito simples.
                  </p>
                  <p className="max-w-[28ch] text-[11px] leading-relaxed text-[#7d5f92]">
                    Conecta nos seus fluxos existentes. Automatiza o repetitivo. Foca no crescimento.
                  </p>

                  {/* CTAs */}
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-[#7d5f92] px-4 py-2 text-[10px] font-semibold text-white">
                      Começar grátis →
                    </span>
                    <span className="rounded-full border border-[#c4aee0] px-4 py-2 text-[10px] font-medium text-[#7d5f92]">
                      Saiba mais
                    </span>
                  </div>

                  {/* trust badges */}
                  <div className="flex gap-4 text-[9px] text-[#9f80da]">
                    <span>⏱ 7 min setup</span>
                    <span>🔒 LGPD</span>
                    <span>👥 23.027 usuários</span>
                  </div>

                  {/* app mockup preview */}
                  <div className="flex-1 overflow-hidden rounded-2xl border border-[#c4aee0]/60 bg-white/70 p-3 backdrop-blur-sm shadow-[0_8px_30px_rgba(125,95,146,0.12)]">
                    <div className="grid grid-cols-[56px_1fr] gap-2 h-full">
                      {/* sidebar */}
                      <div className="space-y-1.5">
                        <div className="h-2 w-full rounded bg-[#ddd3f0]" />
                        {["Dashboard", "Público", "Fluxos"].map((item) => (
                          <div key={item} className="flex items-center gap-1 rounded-md px-1 py-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-[#c4aee0]" />
                            <div className="h-1.5 flex-1 rounded bg-[#e8dff5]" />
                          </div>
                        ))}
                      </div>
                      {/* main area — flow nodes */}
                      <div className="relative">
                        <div className="absolute top-2 left-8 rounded-lg border border-[#d5c8f0] bg-white px-2.5 py-1.5 shadow-sm">
                          <div className="h-1.5 w-16 rounded bg-[#c4b5fd]" />
                          <div className="mt-1 h-1 w-10 rounded bg-[#e8dff5]" />
                        </div>
                        <div className="absolute top-10 left-2 rounded-lg border border-[#d5c8f0] bg-white px-2.5 py-1.5 shadow-sm">
                          <div className="h-1.5 w-12 rounded bg-[#a78bfa]" />
                          <div className="mt-1 h-1 w-8 rounded bg-[#e8dff5]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
