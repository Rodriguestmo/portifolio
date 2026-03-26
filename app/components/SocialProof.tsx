"use client";

import Image from "next/image";
import AnimateIn from "./AnimateIn";
import AnimatedCounter from "./AnimatedCounter";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

function useTextScramble(finalText: string, isActive: boolean) {
  const [display, setDisplay] = useState(finalText);
  const chars = "0123456789";

  useEffect(() => {
    if (!isActive) return;
    let iteration = 0;
    const total = 15;
    const interval = setInterval(() => {
      setDisplay(
        finalText
          .split("")
          .map((char, i) => {
            if (i < Math.floor((iteration / total) * finalText.length))
              return char;
            if (!/[0-9+]/.test(char)) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join(""),
      );
      iteration++;
      if (iteration > total) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [isActive, finalText]);

  return display;
}

function ScrambleLabel({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const display = useTextScramble(text, isActive);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

const avatars = [
  "/images/pessoas/1.jpeg",
  "/images/pessoas/2.jpeg",
  "/images/pessoas/3.jpeg",
  "/images/pessoas/4.jpeg",
];

export default function SocialProof() {
  const { t } = useLanguage();

  return (
    <div className="section-border px-6 py-6 lg:px-8">
      <AnimateIn variant="fadeIn" delay={0.1}>
        <div className="mx-auto flex max-w-[1160px] items-center gap-5">
          {/* Avatar stack */}
          <div className="flex -space-x-2">
            {avatars.map((src, i) => (
              <div
                key={i}
                className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white"
              >
                <Image src={src} alt={`Cliente ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>

          {/* Stars */}
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-4 w-4 fill-black" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Divider */}
          <div className="h-6 w-px bg-black/10" />

          {/* Animated counter */}
          <p className="text-sm text-black">
            <AnimatedCounter
              target={90}
              prefix="+"
              className="font-bold text-base"
            />{" "}
            <ScrambleLabel
              text={t.socialProof.label}
              className="text-gray-500"
            />
          </p>
        </div>
      </AnimateIn>
    </div>
  );
}
