"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";

function Character({
  progress,
  start,
  end,
  children,
}: {
  progress: import("framer-motion").MotionValue<number>;
  start: number;
  end: number;
  children: React.ReactNode;
}) {
  const color = useTransform(progress, [start, end], ["#d4d4d4", "#000000"]);

  return (
    <motion.span style={{ color }} className="inline">
      {children}
    </motion.span>
  );
}

export default function TextReveal() {
  const { t } = useLanguage();
  const { text, boldWords } = t.textReveal;
  const boldSet = new Set(boldWords);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "center center"],
  });
  const delayedProgress = useTransform(scrollYProgress, [0.1, 1], [0, 1]);
  const textScale = useTransform(scrollYProgress, [0, 0.8], [0.92, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0.4, 1]);

  const lines = text.split("\n");
  const allChars = text.replace(/[\n ]/g, "");
  const totalChars = allChars.length;

  let charIndex = 0;

  return (
    <section ref={containerRef} className="relative px-6 py-16 lg:px-8 lg:py-44 overflow-hidden">
      <motion.div className="mx-auto max-w-[1120px] text-center" style={{ scale: textScale, opacity: textOpacity }}>
        <p className="text-4xl leading-[1.12] tracking-tight md:text-6xl lg:text-[5rem]">
          {lines.map((line, lineIdx) => (
            <span key={lineIdx}>
              {lineIdx > 0 && <br />}
              {line.split(" ").map((word, wordIdx) => {
                const isBold = boldSet.has(word);
                const chars = word.split("");

                const wordEl = (
                  <span
                    key={wordIdx}
                    className={`inline-block ${isBold ? "font-bold" : ""}`}
                  >
                    {chars.map((char, cIdx) => {
                      const currentCharIndex = charIndex;
                      charIndex++;

                      const start = currentCharIndex / totalChars;
                      const end = Math.min(
                        (currentCharIndex + 1) / totalChars,
                        1
                      );

                      return (
                        <Character
                          key={cIdx}
                          progress={delayedProgress}
                          start={start}
                          end={end}
                        >
                          {char}
                        </Character>
                      );
                    })}
                  </span>
                );

                const wordsInLine = line.split(" ");
                if (wordIdx < wordsInLine.length - 1) {
                  return (
                    <span key={wordIdx}>
                      {wordEl}
                      <span> </span>
                    </span>
                  );
                }

                return wordEl;
              })}
            </span>
          ))}
        </p>
      </motion.div>
    </section>
  );
}
