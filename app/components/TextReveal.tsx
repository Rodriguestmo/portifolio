"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const words = [
  "resolvendo",
  "problemas",
  "reais",
  "\n",
  "de",
  "pessoas",
  "reais.",
];

function Word({
  progress,
  start,
  end,
  children,
  bold,
}: {
  progress: import("framer-motion").MotionValue<number>;
  start: number;
  end: number;
  children: React.ReactNode;
  bold?: boolean;
}) {
  const color = useTransform(progress, [start, end], ["#d1d5db", "#000000"]);

  return (
    <motion.span
      style={{ color }}
      className={`inline-block ${bold ? "font-bold" : ""}`}
    >
      {children}
    </motion.span>
  );
}

export default function TextReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "start 0.2"],
  });

  // Filter out line breaks for word count
  const visibleWords = words.filter((w) => w !== "\n");
  const totalWords = visibleWords.length;
  let wordIndex = 0;

  return (
    <section ref={containerRef} className="px-6 py-32 lg:px-8 lg:py-44">
      <div className="mx-auto max-w-[900px]">
        <p className="text-5xl leading-[1.15] tracking-tight md:text-7xl lg:text-8xl">
          {words.map((word, i) => {
            if (word === "\n") {
              return <br key={i} />;
            }

            const currentIndex = wordIndex;
            wordIndex++;

            const start = currentIndex / totalWords;
            const end = (currentIndex + 1) / totalWords;

            // Bold the key words: "reais" (first line) and "reais." (second line)
            const isBold = word === "reais" || word === "reais.";

            return (
              <span key={i}>
                <Word
                  progress={scrollYProgress}
                  start={start}
                  end={end}
                  bold={isBold}
                >
                  {word}
                </Word>
                {word !== "\n" && words[i + 1] !== "\n" && i < words.length - 1
                  ? " "
                  : ""}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
