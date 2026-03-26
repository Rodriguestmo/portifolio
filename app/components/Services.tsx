"use client";

import { useState, useEffect, useCallback, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";
import { useLanguage } from "@/app/context/LanguageContext";

const icons: ReactNode[] = [
  <svg key="0" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
  </svg>,
  <svg key="1" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>,
  <svg key="2" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
  </svg>,
  <svg key="3" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>,
  <svg key="4" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
  </svg>,
  <svg key="5" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>,
];

const AUTOPLAY_DURATION = 5000;

export default function Services() {
  const { t } = useLanguage();
  const s = t.services;

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % s.items.length);
    setProgress(0);
  }, [s.items.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 100 / (AUTOPLAY_DURATION / 50);
        if (next >= 100) {
          goToNext();
          return 0;
        }
        return next;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [isPaused, activeIndex, goToNext]);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  return (
    <section id="servicos" className="section-border px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1160px]">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <AnimateIn variant="slideLeft">
              <h2 className="text-5xl leading-[1.05] tracking-tight md:text-6xl">
                <span className="heading-muted">
                  {s.heading1}
                  <br />
                  {s.heading2}
                </span>
                <br />
                <span className="heading-bold">{s.heading3}</span>
              </h2>
            </AnimateIn>
            <AnimateIn variant="fadeUp" delay={0.2}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-500">
                {s.desc}
              </p>
            </AnimateIn>
          </div>

          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="overflow-hidden rounded-[1.75rem] border border-black/6 bg-white">
              <div className="divide-y divide-black/6">
                {s.items.map((service, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <div
                      key={service.name}
                      onClick={() => handleClick(index)}
                      className={`relative block w-full cursor-pointer px-6 text-left transition-colors duration-300 ${
                        isActive ? "bg-black/[0.02]" : "bg-white"
                      }`}
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-black/8" />
                      <div
                        className="absolute top-0 left-0 h-[2px] bg-black"
                        style={{
                          width: isActive ? `${progress}%` : "0%",
                          transition: isActive ? "none" : "width 0.3s ease",
                        }}
                      />
                      <div className="flex items-center gap-4 py-5">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                            isActive
                              ? "bg-black text-white"
                              : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          {icons[index]}
                        </div>
                        <h3
                          className={`text-lg font-semibold transition-colors duration-300 ${
                            isActive ? "text-black" : "text-gray-400"
                          }`}
                        >
                          {service.name}
                        </h3>
                      </div>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            key="desc"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              height: { duration: 0.35, ease: [0.25, 0.4, 0.25, 1] },
                              opacity: { duration: 0.25, delay: 0.08 },
                            }}
                            className="overflow-hidden"
                          >
                            <p className="pb-5 text-sm leading-relaxed text-gray-500">
                              {service.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
