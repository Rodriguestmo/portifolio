"use client";

import AnimateIn from "./AnimateIn";

export default function TestimonialQuote() {
  return (
    <section className="section-border bg-[#f7f7f7] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[900px] text-center">
        <AnimateIn variant="scaleUp">
          <p className="text-2xl leading-relaxed tracking-tight md:text-3xl">
            &ldquo;Em 3 meses o custo por lead caiu pela metade e o WhatsApp
            começou a{" "}
            <span className="font-bold">qualificar pacientes sozinho.</span>{" "}
            Nunca pensei que tecnologia fosse fazer tanta diferença no
            consultório.&rdquo;
          </p>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.2}>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-gray-600">
              DR
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-black">
                Dra. Camila S.
              </p>
              <p className="text-sm text-gray-500">Nutróloga</p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
