"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Você faz só a página ou a operação completa?",
    answer:
      "Os dois cenários fazem sentido. Posso assumir só a landing page ou montar a lógica completa com mídia, tracking e automação.",
  },
  {
    question: "Automações de IA não deixam o atendimento robótico?",
    answer:
      "Se forem mal configuradas, sim. A ideia aqui é usar IA para acelerar qualificação e contexto, sem matar naturalidade nem timing humano.",
  },
  {
    question: "Posso contratar tráfego pago sem automação?",
    answer:
      "Pode. Mas quando o gargalo está no pós-clique, só subir campanha resolve pouco. Eu prefiro alinhar a peça certa ao problema real.",
  },
  {
    question: "Isso funciona para qual tipo de negócio?",
    answer:
      "Especialistas, negócios locais, clínicas, prestadores de serviço e operações enxutas que precisam vender com mais previsibilidade.",
  },
  {
    question: "Qual o prazo médio de entrega?",
    answer:
      "Projetos simples saem em 1-2 semanas. Operações completas com landing page, tráfego e automação levam de 3-4 semanas para ficar no ar.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-border px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1160px]">
        <h2 className="text-5xl leading-[1.05] tracking-tight md:text-6xl">
          <span className="heading-muted">Suas perguntas</span>
          <br />
          <span className="heading-bold">respondidas.</span>
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left — Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-black/6 bg-white"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="flex w-full items-center gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-medium text-gray-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-medium text-black">
                    {faq.question}
                  </span>
                  <span className="text-xl text-gray-400">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`faq-answer ${openIndex === i ? "open" : ""}`}
                >
                  <div>
                    <p className="px-6 pb-5 pl-16 text-[15px] leading-relaxed text-gray-500">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right — CTA Card (sticky) */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-black/6 bg-white p-8">
              {/* Avatar */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-blue-200 text-lg font-bold text-gray-500">
                TM
              </div>

              <p className="mt-5 text-2xl text-gray-300">Ainda com dúvidas?</p>
              <p className="text-2xl font-bold text-black">
                Agende uma call gratuita.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                Saiba mais sobre como trabalho e como posso ajudar você e seu
                negócio a dar o próximo passo.
              </p>

              <a
                href="#contato"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-gray-800"
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
                Agendar agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
