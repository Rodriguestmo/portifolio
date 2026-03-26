"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Hide on touch devices
    if ("ontouchstart" in window) return;

    const move = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (hidden) setHidden(false);

      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const enter = () => setHidden(false);
    const leave = () => setHidden(true);

    // Detect hoverable elements
    const overHandler = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (
        t.closest("a, button, [role='button'], input, textarea, .cursor-hover")
      ) {
        setHovering(true);
      }
    };
    const outHandler = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (
        t.closest("a, button, [role='button'], input, textarea, .cursor-hover")
      ) {
        setHovering(false);
      }
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseenter", enter);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseover", overHandler);
    document.addEventListener("mouseout", outHandler);

    // Smooth follow for outer ring
    let raf: number;
    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;
    const animate = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.15);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.15);
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x - 28}px, ${pos.current.y - 28}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseenter", enter);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseover", overHandler);
      document.removeEventListener("mouseout", outHandler);
      cancelAnimationFrame(raf);
    };
  }, [hidden]);

  return (
    <>
      {/* Outer ring — gravitational distortion */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden lg:block"
        style={{
          width: 56,
          height: 56,
          opacity: hidden ? 0 : 1,
          transition: "width 0.3s, height 0.3s, opacity 0.3s",
        }}
      >
        <div
          className="h-full w-full rounded-full transition-all duration-300 pointer-events-none border border-black/5"
          style={{
            transform: hovering ? "scale(1.5)" : "scale(1)",
            backgroundColor: hovering ? "rgba(0,0,0,0.03)" : "transparent",
            backdropFilter: "blur(6px) brightness(1.05) contrast(1.1)",
            WebkitBackdropFilter: "blur(6px) brightness(1.05)",
          }}
        />
      </div>

      {/* Inner dot — instant */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden lg:block"
        style={{
          opacity: hidden ? 0 : 1,
          transition: "opacity 0.3s",
          mixBlendMode: "difference",
        }}
      >
        <div
          className="rounded-full bg-white transition-all duration-300"
          style={{
            width: hovering ? 0 : 8,
            height: hovering ? 0 : 8,
          }}
        />
      </div>

      {/* Hide default cursor */}
      <style>{`
        @media (pointer: fine) {
          *, *::before, *::after { cursor: none !important; }
        }
      `}</style>
    </>
  );
}
