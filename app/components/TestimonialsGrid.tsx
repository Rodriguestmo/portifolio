import AnimateIn from "./AnimateIn";

const proofCards = [
  {
    label: "Depoimento real",
    title: "Dra. Camila Sutilo",
    summary:
      "Em 3 meses o custo por lead caiu pela metade e o WhatsApp começou a qualificar pacientes sozinho.",
    points: [
      "Landing, mídia e atendimento pensados como um único sistema",
      "Pré-qualificação antes do contato humano",
      "Operação acompanhada ponta a ponta",
    ],
    footer: "Médica",
  },
  {
    label: "Projeto publicado",
    title: "Geovanna Romeiro",
    summary:
      "Landing construída com oferta clara, visual forte e base pronta para sustentar tráfego pago e testes.",
    points: [
      "Página desenhada para conversão, não só apresentação",
      "Estrutura comercial simples de entender e medir",
      "Base limpa para otimização contínua",
    ],
    footer: "Landing Page ativa",
  },
  {
    label: "Case fictício",
    title: "Clínica NutriVita",
    summary:
      "Clínica de nutrição com 3 unidades que tinha tráfego rodando mas perdia 60% dos leads por falta de resposta rápida.",
    points: [
      "Bot qualificou e agendou +180 consultas em 45 dias",
      "Custo por agendamento caiu 38% sem aumentar verba",
      "Time focou em atendimento, não em copiar e colar mensagens",
    ],
    footer: "Tráfego + WhatsApp IA + CRM",
  },
];

export default function TestimonialsGrid() {
  return (
    <section className="section-border px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1160px]">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimateIn variant="fadeUp">
            <div>
              <h2 className="text-5xl leading-[1.05] tracking-tight md:text-6xl">
                <span className="heading-muted">Provas reais</span>
                <br />
                <span className="heading-bold">de execução.</span>
              </h2>
            </div>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.15}>
            <div className="lg:max-w-[38rem] lg:justify-self-end">
              <p className="text-lg leading-relaxed text-gray-500">
                O ponto aqui não é parecer ocupado. É mostrar que as peças se conectam:
                página, tráfego, CRM, WhatsApp e automação funcionando como operação de
                verdade.
              </p>
            </div>
          </AnimateIn>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {proofCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-2xl border border-black/6 bg-white p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-black/8 bg-[#f7f7f7] px-3 py-1 text-[11px] font-medium tracking-wide text-gray-500 uppercase">
                  {card.label}
                </span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-3.5 w-3.5 fill-black"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-black">{card.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
                  {card.summary}
                </p>
              </div>

              <div className="mt-6 space-y-3 border-t border-black/6 pt-5">
                {card.points.map((point) => (
                  <div key={point} className="flex items-start gap-2.5">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                    <p className="text-sm leading-relaxed text-gray-500">{point}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm font-medium text-black">{card.footer}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-black/6 bg-[#f7f7f7] px-6 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium text-black">
                Resultado aqui não vem de uma peça isolada.
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Vem de direção, execução e integração entre marketing e tecnologia.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Landing", "Tráfego", "WhatsApp", "CRM", "IA Personalizada"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/8 bg-white px-3 py-1 text-sm text-gray-500"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
