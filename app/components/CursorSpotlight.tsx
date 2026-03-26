"use client";

import { useEffect, useRef } from "react";

interface CursorSpotlightProps {
  className?: string;
  /** Radius of the glow in px */
  size?: number;
  /** Glow color */
  color?: string;
  /** Opacity of the glow (0-1) */
  opacity?: number;
}

export default function CursorSpotlight({
  className = "",
  size = 350,
  color = "rgba(0,0,0,0.04)",
  opacity = 1,
}: CursorSpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    let x = -9999;
    let y = -9999;
    let currentX = -9999;
    let currentY = -9999;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    };

    const onLeave = () => {
      x = -9999;
      y = -9999;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      currentX = lerp(currentX, x, 0.12);
      currentY = lerp(currentY, y, 0.12);

      if (currentX > -9000) {
        el.style.opacity = String(opacity);
        el.style.transform = `translate(${currentX - size / 2}px, ${currentY - size / 2}px)`;
      } else {
        el.style.opacity = "0";
      }

      raf = requestAnimationFrame(tick);
    };

    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, [size, opacity]);

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute top-0 left-0 rounded-full transition-opacity duration-300 ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity: 0,
        willChange: "transform",
      }}
      aria-hidden="true"
    />
  );
}
