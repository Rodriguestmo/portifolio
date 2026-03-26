"use client";

/**
 * Aurora Ribbon Lines — thin luminous glowing lines that undulate.
 * Linear/Raycast-inspired aesthetic: sharp defined cores with soft glow halos.
 * Uses aurora-line keyframes defined in globals.css.
 */

interface AuroraProps {
  className?: string;
  intensity?: number;
  dark?: boolean;
}

const lines = [
  { left: "6%",   dur: "8s",   del: "0s",     color: [0, 230, 120],  glow: 18 },
  { left: "15%",  dur: "11s",  del: "-3s",    color: [0, 200, 180],  glow: 22 },
  { left: "25%",  dur: "14s",  del: "-7s",    color: [0, 255, 140],  glow: 16 },
  { left: "35%",  dur: "9s",   del: "-1.5s",  color: [40, 255, 160], glow: 20 },
  { left: "48%",  dur: "12s",  del: "-5s",    color: [0, 180, 220],  glow: 24 },
  { left: "58%",  dur: "10s",  del: "-8.5s",  color: [0, 220, 200],  glow: 18 },
  { left: "70%",  dur: "13s",  del: "-2s",    color: [0, 240, 160],  glow: 20 },
  { left: "82%",  dur: "9.5s", del: "-6s",    color: [0, 200, 180],  glow: 16 },
  { left: "92%",  dur: "11s",  del: "-4.5s",  color: [0, 230, 140],  glow: 14 },
];

export default function Aurora({
  className = "",
  intensity = 0.15,
  dark = false,
}: AuroraProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ mixBlendMode: dark ? "screen" : "normal", opacity: dark ? 1 : 0.7 }}
      aria-hidden="true"
    >
      {lines.map((l, i) => {
        const [r, g, b] = l.color;
        const alpha = intensity;
        return (
          <div
            key={i}
            data-aurora-ribbon
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: l.left,
              width: "2px",
              borderRadius: "1px",
              animation: `aurora-line ${l.dur} ease-in-out ${l.del} infinite`,
              willChange: "transform, opacity",
              background: `linear-gradient(
                180deg,
                transparent 0%,
                rgba(${r},${g},${b},${alpha * 0.3}) 15%,
                rgba(${r},${g},${b},${alpha}) 45%,
                rgba(${r},${g},${b},${alpha * 0.8}) 65%,
                rgba(${r},${g},${b},${alpha * 0.2}) 85%,
                transparent 100%
              )`,
              boxShadow: `
                0 0 ${l.glow * 0.5}px rgba(${r},${g},${b},${alpha * 0.4}),
                0 0 ${l.glow}px rgba(${r},${g},${b},${alpha * 0.25}),
                0 0 ${l.glow * 2}px rgba(${r},${g},${b},${alpha * 0.1})
              `,
            }}
          />
        );
      })}
    </div>
  );
}
