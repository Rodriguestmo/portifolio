"use client";

/**
 * Aurora Borealis — vertical curtain-of-light beams.
 *
 * Each ribbon is a narrow vertical gradient strip that sways, leans
 * and pulses via the aurora-wave keyframe (defined in globals.css).
 */

interface AuroraProps {
  className?: string;
  intensity?: number;
  dark?: boolean;
}

const ribbons = [
  { left: "8%",  w: "12%", dur: "9s",   del: "0s",    blur: 50, color: [0, 230, 120] },
  { left: "20%", w: "15%", dur: "13s",  del: "-4s",   blur: 65, color: [0, 200, 180] },
  { left: "38%", w: "10%", dur: "11s",  del: "-7s",   blur: 45, color: [0, 255, 140] },
  { left: "52%", w: "18%", dur: "14s",  del: "-2.5s", blur: 70, color: [0, 180, 220] },
  { left: "68%", w: "11%", dur: "10s",  del: "-9s",   blur: 50, color: [40, 255, 160] },
  { left: "82%", w: "14%", dur: "12s",  del: "-5.5s", blur: 60, color: [0, 220, 200] },
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
      {ribbons.map((r, i) => {
        const [red, green, blue] = r.color;
        const peak = intensity;
        return (
          <div
            key={i}
            data-aurora-ribbon
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: r.left,
              width: r.w,
              filter: `blur(${r.blur}px)`,
              animation: `aurora-wave ${r.dur} ease-in-out ${r.del} infinite`,
              willChange: "transform, opacity",
              background: `linear-gradient(
                180deg,
                transparent 0%,
                rgba(${red},${green},${blue},${peak * 0.2}) 10%,
                rgba(${red},${green},${blue},${peak * 0.7}) 30%,
                rgba(${red},${green},${blue},${peak}) 50%,
                rgba(${red},${green},${blue},${peak * 0.6}) 70%,
                rgba(${red},${green},${blue},${peak * 0.15}) 90%,
                transparent 100%
              )`,
            }}
          />
        );
      })}
    </div>
  );
}
