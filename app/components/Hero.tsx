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

          {/* Right — Project Mockups Stack */}
          <div className="relative hidden lg:block">
            <div className="relative h-[490px]">
              {/* Card 1 - back */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, x: 0, rotate: 3 }}
                transition={{ type: "spring", damping: 25, stiffness: 180, delay: 0.4 }}
                className="absolute top-3 right-0 h-[300px] w-[390px] overflow-hidden rounded-[2rem] border border-black/8 bg-[#0a0b11] p-5 shadow-2xl"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.24),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.18),transparent_34%)]" />
                <div className="relative flex items-center justify-between rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[10px] font-medium tracking-[0.18em] text-white/70 uppercase">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-violet-400" />
                    Landing page
                  </div>
                  <span className="rounded-full bg-white/10 px-2.5 py-1 text-[9px] text-white/75">
                    Inspirado em produto
                  </span>
                </div>

                <div className="relative mt-5 grid grid-cols-[1fr_0.88fr] gap-4">
                  <div>
                    <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium text-white/70">
                      Oferta clara + CTA forte
                    </span>
                    <p className="mt-4 max-w-[12ch] text-[2rem] leading-[0.96] font-semibold tracking-tight text-white">
                      Páginas feitas para vender.
                    </p>
                    <p className="mt-3 max-w-[18ch] text-sm leading-relaxed text-white/60">
                      Estrutura comercial, prova e agenda pensadas para tráfego.
                    </p>
                    <div className="mt-5 flex gap-2">
                      <span className="rounded-full bg-violet-500 px-3 py-2 text-[11px] font-medium text-white">
                        Ver estrutura
                      </span>
                      <span className="rounded-full border border-white/12 px-3 py-2 text-[11px] font-medium text-white/72">
                        Agendar
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="overflow-hidden rounded-[1.5rem] border border-white/8 bg-white/6">
                      <div className="h-[150px] bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.22),transparent_30%),linear-gradient(180deg,#263248_0%,#10141f_100%)]" />
                      <div className="px-3 py-3">
                        <p className="text-xs font-medium text-white">Oferta</p>
                        <p className="mt-1 text-[11px] text-white/55">Headline e CTA</p>
                      </div>
                    </div>
                    <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/8 bg-white/6">
                      <div className="h-[150px] bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.26),transparent_28%),linear-gradient(180deg,#4a1d2d_0%,#12151f_100%)]" />
                      <div className="px-3 py-3">
                        <p className="text-xs font-medium text-white">Prova</p>
                        <p className="mt-1 text-[11px] text-white/55">Autoridade visual</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 - middle */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, x: 0, rotate: -2 }}
                transition={{ type: "spring", damping: 25, stiffness: 180, delay: 0.55 }}
                className="absolute top-16 left-10 h-[300px] w-[390px] overflow-hidden rounded-[2rem] border border-[#ece7ff] bg-[#f7f3ff] p-5 shadow-2xl"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(168,85,247,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_40%)]" />
                <div className="relative flex items-center justify-between px-2 text-[11px] font-medium text-[#5b4e77]">
                  <div className="flex gap-6">
                    <span>Painel</span>
                    <span>Campanhas</span>
                    <span>Leads</span>
                  </div>
                  <span className="rounded-full bg-white/80 px-3 py-1 text-[#8b5cf6]">
                    ao vivo
                  </span>
                </div>

                <div className="relative mt-7 text-center">
                  <div className="flex items-center justify-center gap-2 text-[11px] font-medium text-[#8b5cf6]">
                    <span>★★★</span>
                    <span>dados organizados em tempo real</span>
                  </div>
                  <p className="mx-auto mt-4 max-w-[10ch] text-[2.45rem] leading-[0.92] font-semibold tracking-tight text-[#3c3153]">
                    Mídia sob controle.
                  </p>
                  <p className="mx-auto mt-3 max-w-[24ch] text-sm leading-relaxed text-[#8b82a0]">
                    Dashboard, leitura de funil e operação guiada por dados.
                  </p>
                </div>

                <div className="relative mt-7 overflow-hidden rounded-[1.7rem] border border-white/80 bg-white/75 p-4 shadow-[0_22px_50px_rgba(157,120,255,0.14)] backdrop-blur">
                  <div className="grid grid-cols-[70px_1fr] gap-4">
                    <div className="rounded-[1.2rem] bg-[#f4f0ff] p-3">
                      <div className="h-4 w-9 rounded bg-[#ddd3ff]" />
                      <div className="mt-3 space-y-2">
                        <div className="h-2 w-full rounded bg-[#e7defd]" />
                        <div className="h-2 w-4/5 rounded bg-[#e7defd]" />
                        <div className="h-2 w-3/5 rounded bg-[#e7defd]" />
                      </div>
                    </div>
                    <div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="rounded-2xl bg-[#f6f1ff] p-3">
                          <div className="h-2 w-10 rounded bg-[#c4b5fd]" />
                          <div className="mt-3 h-11 rounded-xl bg-[#ddd6fe]" />
                        </div>
                        <div className="rounded-2xl bg-[#f8f5ff] p-3">
                          <div className="h-2 w-10 rounded bg-[#c4b5fd]" />
                          <div className="mt-3 h-11 rounded-xl bg-[#ede9fe]" />
                        </div>
                        <div className="rounded-2xl bg-[#f6f1ff] p-3">
                          <div className="h-2 w-10 rounded bg-[#c4b5fd]" />
                          <div className="mt-3 h-11 rounded-xl bg-[#ddd6fe]" />
                        </div>
                      </div>
                      <div className="mt-3 rounded-[1.3rem] bg-[#faf7ff] p-3">
                        <div className="h-2 w-24 rounded bg-[#d8ccff]" />
                        <div className="mt-4 flex items-end gap-2">
                          <div className="h-10 w-7 rounded-t-xl bg-[#ddd6fe]" />
                          <div className="h-16 w-7 rounded-t-xl bg-[#c4b5fd]" />
                          <div className="h-12 w-7 rounded-t-xl bg-[#a78bfa]" />
                          <div className="h-20 w-7 rounded-t-xl bg-[#8b5cf6]" />
                          <div className="h-14 w-7 rounded-t-xl bg-[#c4b5fd]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 - front */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, x: 0, rotate: 1 }}
                transition={{ type: "spring", damping: 25, stiffness: 180, delay: 0.7 }}
                className="absolute bottom-0 left-0 h-[300px] w-[392px] overflow-hidden rounded-[2rem] border border-black/8 bg-[#131826] shadow-2xl"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(163,230,53,0.18),transparent_20%),radial-gradient(circle_at_75%_16%,rgba(59,130,246,0.22),transparent_24%),radial-gradient(circle_at_52%_75%,rgba(45,212,191,0.18),transparent_34%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_35%),linear-gradient(180deg,rgba(19,24,38,0.12),rgba(19,24,38,0.88))]" />
                <div className="absolute top-20 left-[-30px] h-32 w-32 rounded-full bg-white/12 blur-3xl" />
                <div className="absolute bottom-14 right-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative flex h-full flex-col justify-between p-6 text-white">
                  <div className="flex items-center justify-between text-[10px] font-semibold tracking-[0.18em] text-white/60 uppercase">
                    <span>Automação IA</span>
                    <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[9px] text-white/72">
                      fluxo ativo
                    </span>
                  </div>

                  <div className="max-w-[18rem]">
                    <p className="text-[2.15rem] leading-[0.94] font-semibold tracking-tight">
                      Atendimento sem travar a operação.
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/66">
                      IA qualificando, respondendo e empurrando o lead para a próxima etapa.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-[11px] text-white/80">
                        Qualifica
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-[11px] text-white/80">
                        Agenda
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-[11px] text-white/80">
                        Faz follow-up
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-[1.05fr_0.85fr] gap-4">
                    <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-lime-400/30" />
                        <div>
                          <p className="text-xs font-medium text-white">Lead qualificado</p>
                          <p className="text-[11px] text-white/48">pronto para atendimento</p>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="h-2.5 w-full rounded-full bg-white/12" />
                        <div className="h-2.5 w-4/5 rounded-full bg-white/10" />
                        <div className="h-2.5 w-3/5 rounded-full bg-white/10" />
                      </div>
                    </div>
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4 backdrop-blur-sm">
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">
                        Performance
                      </p>
                      <div className="mt-4 flex items-end gap-2">
                        <div className="h-10 w-7 rounded-t-xl bg-white/18" />
                        <div className="h-14 w-7 rounded-t-xl bg-white/22" />
                        <div className="h-20 w-7 rounded-t-xl bg-lime-400/45" />
                        <div className="h-12 w-7 rounded-t-xl bg-cyan-400/35" />
                      </div>
                      <p className="mt-4 text-xs leading-relaxed text-white/58">
                        mais velocidade, menos atrito e melhor aproveitamento dos leads
                      </p>
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
