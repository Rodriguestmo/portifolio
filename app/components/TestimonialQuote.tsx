"use client";

import AnimateIn from "./AnimateIn";
import { useLanguage } from "@/app/context/LanguageContext";

export default function TestimonialQuote() {
  const { t } = useLanguage();
  const q = t.testimonialQuote;

  return (
    <section className="section-border bg-[#f7f7f7] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[900px] text-center">
        <AnimateIn variant="scaleUp">
          <p className="text-2xl leading-relaxed tracking-tight md:text-3xl">
            &ldquo;{q.quote1}{" "}
            <span className="font-bold">{q.quoteBold}</span>{" "}
            {q.quote2}&rdquo;
          </p>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.2}>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-gray-600">
              RM
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-black">{q.name}</p>
              <p className="text-sm text-gray-500">{q.role}</p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
