"use client";

import { openContactModal } from "@/app/utils/contactModal";

const steps = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    title: "Converse",
    description: "Me conta seu desafio. Entendo seu contexto antes de propor qualquer solução.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: "Planeje",
    description:
      "Monto a estratégia e o escopo ideal para o seu momento.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Execute",
    description: "Entrego tudo funcionando. Design, tech e automação conectados.",
  },
];

const landingTrafegoFeatures = [
  "A/B Test em criativos",
  "A/B Test na landing page",
  "Decisões baseadas em dados",
  "Relatório unificado",
];

const iaFeatures = [
  "Prospecção ativa automatizada",
  "WhatsApp com IA Personalizada",
  "CRM integrado (Notion)",
  "Qualificação de leads 24/7",
  "Handoff inteligente para humano",
  "SaaS personalizado sob demanda",
];

export default function Pricing() {
  return (
    <section id="solucoes" className="section-border px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1160px]">
        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-2">
          <h2 className="text-5xl leading-[1.05] tracking-tight md:text-6xl">
            <span className="heading-muted">Soluções completas.</span>
            <br />
            <span className="heading-bold">Resultados reais.</span>
          </h2>
          <div className="self-end">
            <p className="font-semibold text-black">
              Design + Tecnologia trabalhando juntos.
            </p>
            <p className="text-gray-500">
              Cada serviço é pensado para funcionar dentro de um sistema integrado.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/8">
                {step.icon}
              </div>
              <div>
                <h3 className="font-semibold text-black">{step.title}</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Service cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Left — Landing Page + Tráfego */}
          <div className="flex flex-col justify-between rounded-2xl bg-black p-8 text-white">
            <div>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-400">
                Landing Page + Tráfego
              </span>
              <h3 className="mt-6 text-2xl font-semibold leading-tight text-white">
                Design + Performance trabalhando juntos.
              </h3>
              <p className="mt-3 text-sm text-gray-400">
                Página e campanha otimizadas em conjunto para maximizar cada clique.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {landingTrafegoFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 shrink-0 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => openContactModal()}
              className="mt-8 flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar sobre este serviço
            </button>
          </div>

          {/* Right — IA Personalizada */}
          <div className="rounded-2xl border border-black/6 bg-white p-8">
            <span className="inline-flex items-center rounded-full border border-black/8 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-500">
              IA Personalizada
            </span>
            <h3 className="mt-6 text-2xl font-bold text-black">
              Tecnologia que qualifica e converte no automático.
            </h3>
            <p className="mt-3 text-sm text-gray-500">
              Inteligência artificial integrada ao seu fluxo de vendas.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {iaFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 shrink-0 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => openContactModal()}
              className="mt-8 flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar sobre automações
            </button>
          </div>
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-6 rounded-2xl bg-black p-8 md:flex-row">
          <div>
            <h3 className="text-2xl font-bold text-white">Precisa de algo específico ou quer um projeto completo?</h3>
            <p className="mt-1 text-sm text-gray-400">
              Me conta o que você precisa e eu monto a melhor solução pro seu momento.
            </p>
          </div>

          <button
            onClick={() => openContactModal()}
            className="flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-colors hover:bg-gray-100"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Conversar no WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
