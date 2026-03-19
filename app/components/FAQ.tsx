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
                href="https://calendar.app.google/v7s5H975BGwnriuZA"
                target="_blank"
                rel="noopener noreferrer"
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

              <a
                href="https://wa.me/5535984128420?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-full border border-black/10 px-6 py-3.5 text-sm font-medium text-black transition-colors hover:bg-gray-50"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Ou fale no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
