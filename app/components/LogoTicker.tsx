"use client";

import { useState } from "react";
import AnimateIn from "./AnimateIn";

const logos = [
  "Meta Ads",
  "Google Ads",
  "WhatsApp",
  "HubSpot",
  "RD Station",
  "Pipedrive",
  "Notion",
  "Claude AI",
  "Python",
  "Vercel",
  "Figma",
  "Next.js",
  "Supabase",
  "Node.js",
  "TypeScript",
  "Make",
  "Zapier",
];

export default function LogoTicker() {
  const [paused, setPaused] = useState(false);

  // Triple for seamless infinite scroll
  const allLogos = [...logos, ...logos, ...logos];
  const allLogosReverse = [...logos, ...logos, ...logos];

  return (
    <section className="section-border px-6 py-10 lg:px-8">
      <AnimateIn variant="fadeIn" delay={0.1}>
        <div className="mx-auto max-w-[1160px]">
          <p className="text-sm text-gray-400">
            Tecnologias de <span className="font-bold text-black">confiança</span>
          </p>
        </div>

        <div
          className="mt-6 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Forward track */}
          <div
            className="ticker-track flex w-max gap-8"
            style={{ animationPlayState: paused ? "paused" : "running" }}
          >
            {allLogos.map((logo, i) => (
              <div
                key={`${logo}-${i}`}
                className="flex h-10 shrink-0 items-center rounded-lg border border-black/6 bg-white px-6 text-sm font-medium text-gray-500"
              >
                {logo}
              </div>
            ))}
          </div>

          {/* Reverse track — visible on md and above only */}
          <div
            className="ticker-track mt-4 hidden w-max gap-8 md:flex"
            style={{
              animationPlayState: paused ? "paused" : "running",
              animationDirection: "reverse",
            }}
          >
            {allLogosReverse.map((logo, i) => (
              <div
                key={`rev-${logo}-${i}`}
                className="flex h-10 shrink-0 items-center rounded-lg border border-black/6 bg-white px-6 text-sm font-medium text-gray-500"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
