"use client";

import AnimateIn from "./AnimateIn";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import { useLanguage } from "@/app/context/LanguageContext";

export default function TestimonialsGrid() {
  const { t } = useLanguage();
  const tm = t.testimonials;

  return (
    <section className="section-border px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1160px]">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimateIn variant="fadeUp">
            <div>
              <h2 className="text-5xl leading-[1.05] tracking-tight md:text-6xl">
                <span className="heading-muted">{tm.heading1}</span>
                <br />
                <span className="heading-bold">{tm.heading2}</span>
              </h2>
            </div>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.15}>
            <div className="lg:max-w-[38rem] lg:justify-self-end">
              <p className="text-lg leading-relaxed text-gray-500">{tm.desc}</p>
            </div>
          </AnimateIn>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {tm.cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard intensity={3}>
                <div className="flex flex-col rounded-2xl border border-black/6 bg-white p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full border border-black/8 bg-[#f7f7f7] px-3 py-1 text-[11px] font-medium tracking-wide text-gray-500 uppercase">
                      {card.label}
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className="h-3.5 w-3.5 fill-black" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-black">{card.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-gray-600">{card.summary}</p>
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
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 rounded-2xl border border-black/6 bg-[#f7f7f7] px-6 py-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium text-black">{tm.bottomTitle}</p>
              <p className="mt-1 text-sm text-gray-500">{tm.bottomDesc}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {tm.tags.map((item) => (
                <span key={item} className="rounded-full border border-black/8 bg-white px-3 py-1 text-sm text-gray-500">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
