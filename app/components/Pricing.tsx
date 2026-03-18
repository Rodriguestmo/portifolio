const steps = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    title: "Contrate",
    description: "Escolha o pacote ideal e comece a solicitar.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: "Solicite",
    description:
      "Peça qualquer serviço que ofereço, de landing page a automação.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Receba",
    description: "Receba sua entrega em média de 5-7 dias úteis.",
  },
];

const features = [
  "Sem contratos ou compromissos",
  "Pause ou cancele quando quiser",
  "Landing page inclusa",
  "Gestão de tráfego pago",
  "Relatórios semanais",
  "Automações de IA",
];

const singleFeatures = [
  "Escopo definido",
  "Prazo fixo",
  "3 rodadas de revisão",
  "Updates por etapa",
];

export default function Pricing() {
  return (
    <section id="precos" className="section-border px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1160px]">
        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-2">
          <h2 className="text-5xl leading-[1.05] tracking-tight md:text-6xl">
            <span className="heading-muted">Preços simples.</span>
            <br />
            <span className="heading-bold">Resultados reais.</span>
          </h2>
          <div className="self-end">
            <p className="font-semibold text-black">
              Custos claros, sem taxas escondidas.
            </p>
            <p className="text-gray-500">
              Escolha entre pacotes mensais ou projetos individuais.
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

        {/* Pricing cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left — Dark card */}
          <div className="flex flex-col justify-between rounded-2xl bg-black p-8 text-white">
            <div>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-400">
                Cancele quando quiser
              </span>
              <h3 className="mt-6 text-2xl leading-tight">
                <span className="text-gray-400">
                  Serviços por assinatura
                  <br />
                  para marcas que se movem
                </span>{" "}
                <span className="font-semibold text-white">rápido.</span>
              </h3>
            </div>

            <div className="mt-10">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium text-gray-400">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Vagas disponíveis
              </div>
              <h4 className="text-2xl font-bold">Contrate hoje</h4>
              <p className="mt-2 text-sm text-gray-400">
                Pule o markup de agência e trabalhe direto com um especialista.
              </p>
            </div>
          </div>

          {/* Right — Plan card */}
          <div className="rounded-2xl border border-black/6 bg-white p-8">
            <h3 className="text-2xl font-bold">Pacote Mensal</h3>
            <p className="mt-2 text-gray-500">
              <span className="font-medium text-black">
                Gestão completa de marketing digital.
              </span>{" "}
              Ideal para demandas contínuas.
            </p>

            <div className="mt-6 border-t border-black/6 pt-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">
                  R$ 2.500
                </span>
                <span className="text-gray-400">/ mês</span>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
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

            <a
              href="#contato"
              className="mt-8 flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-gray-800"
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
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
              Começar
            </a>
          </div>
        </div>

        {/* Single Project bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-6 rounded-2xl bg-black p-8 md:flex-row">
          <div>
            <h3 className="text-2xl font-bold text-white">Projeto Único</h3>
            <p className="mt-1 text-sm text-gray-400">
              <span className="text-gray-300">
                Serviço completo para qualquer escopo.
              </span>{" "}
              Ideal para demandas pontuais.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {singleFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-sm text-gray-400"
              >
                <svg
                  className="h-4 w-4 shrink-0"
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
                {feature}
              </div>
            ))}

            <a
              href="#contato"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
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
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              Pedir orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
