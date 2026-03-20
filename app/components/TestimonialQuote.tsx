"use client";

import AnimateIn from "./AnimateIn";

export default function TestimonialQuote() {
  return (
    <section className="section-border bg-[#f7f7f7] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[900px] text-center">
        <AnimateIn variant="scaleUp">
          <p className="text-2xl leading-relaxed tracking-tight md:text-3xl">
            &ldquo;Eu tinha tráfego rodando mas perdia lead todo dia por falta
            de resposta rápida. Hoje o WhatsApp{" "}
            <span className="font-bold">qualifica e agenda sozinho,</span>{" "}
            e minha equipe só entra quando o paciente já está pronto.&rdquo;
          </p>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.2}>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-gray-600">
              RM
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-black">
                Dr. Renato Machado
              </p>
              <p className="text-sm text-gray-500">Dermatologista — SP</p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
