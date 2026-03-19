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
            <AnimateIn variant="fadeIn" delay={0.2}>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-black/8 bg-white/80 px-4 py-2 text-xs font-medium tracking-wide text-black uppercase">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Disponível para projetos
              </div>
            </AnimateIn>

            <AnimateIn variant="genie" delay={0.3}>
              <h1 className="mt-8 text-5xl leading-[1.05] tracking-tight md:text-7xl">
                <span className="heading-muted">Tecnologia que</span>
                <br />
                <span className="heading-bold">entrega resultado.</span>
              </h1>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={0.5}>
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
            <AnimateIn variant="slideLeft" delay={0.6}>
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
                  <p className="font-bold text-black">3x</p>
                  <p className="text-gray-400">mais leads com IA</p>
                </div>
              </div>
            </AnimateIn>

            {/* CTAs */}
            <AnimateIn variant="fadeUp" delay={0.7}>
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
            <div className="relative h-[460px]">
              {/* Card 1 - back */}
              <motion.div
                initial={{ opacity: 0, x: 80, rotate: 8 }}
                whileInView={{ opacity: 1, x: 0, rotate: 3 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: "spring", damping: 25, stiffness: 180, delay: 0.4 }}
                className="absolute top-4 right-0 h-[280px] w-[380px] overflow-hidden rounded-2xl border border-black/8 bg-gradient-to-br from-gray-900 to-gray-800 p-6 shadow-2xl"
              >
                <div className="mb-3 flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-3/4 rounded bg-white/10" />
                  <div className="h-3 w-1/2 rounded bg-white/10" />
                  <div className="mt-4 h-20 rounded-lg bg-white/5" />
                  <div className="h-3 w-2/3 rounded bg-white/10" />
                </div>
                <div className="absolute top-6 left-6 text-[10px] font-semibold tracking-widest text-white/40 uppercase">
                  Design · Landing Page
                </div>
                <div className="absolute bottom-4 right-4 text-xs font-medium text-white/30">
                  Landing Page
                </div>
              </motion.div>

              {/* Card 2 - middle */}
              <motion.div
                initial={{ opacity: 0, x: 80, rotate: -6 }}
                whileInView={{ opacity: 1, x: 0, rotate: -2 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: "spring", damping: 25, stiffness: 180, delay: 0.55 }}
                className="absolute top-12 left-8 h-[280px] w-[380px] overflow-hidden rounded-2xl border border-black/8 bg-gradient-to-br from-emerald-900 to-emerald-800 p-6 shadow-2xl"
              >
                <div className="mb-3 flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <div className="absolute top-6 left-6 text-[10px] font-semibold tracking-widest text-white/40 uppercase">
                  Design · Dashboard
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="space-y-1.5">
                    <div className="h-16 rounded bg-white/10" />
                    <div className="h-2 w-3/4 rounded bg-white/10" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-16 rounded bg-white/10" />
                    <div className="h-2 w-3/4 rounded bg-white/10" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-16 rounded bg-white/10" />
                    <div className="h-2 w-3/4 rounded bg-white/10" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-xs font-medium text-white/30">
                  Dashboard Ads
                </div>
              </motion.div>

              {/* Card 3 - front */}
              <motion.div
                initial={{ opacity: 0, x: 80, rotate: 5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: "spring", damping: 25, stiffness: 180, delay: 0.7 }}
                className="absolute bottom-0 left-0 h-[280px] w-[380px] overflow-hidden rounded-2xl border border-black/8 bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-2xl"
              >
                <div className="mb-3 flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <div className="absolute top-6 left-6 text-[10px] font-semibold tracking-widest text-white/40 uppercase">
                  Design · Automação IA
                </div>
                <div className="flex gap-3">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-green-500/30" />
                      <div className="h-2 w-20 rounded bg-white/20" />
                    </div>
                    <div className="rounded-lg bg-white/5 p-2">
                      <div className="h-2 w-full rounded bg-white/10" />
                      <div className="mt-1 h-2 w-2/3 rounded bg-white/10" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-blue-500/30" />
                      <div className="h-2 w-16 rounded bg-white/20" />
                    </div>
                    <div className="rounded-lg bg-white/5 p-2">
                      <div className="h-2 w-3/4 rounded bg-white/10" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-xs font-medium text-white/30">
                  WhatsApp Bot
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
