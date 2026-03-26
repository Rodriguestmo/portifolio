"use client";

import { useEffect, useState } from "react";

export default function GravityGrid() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let current = { x: target.x, y: target.y };
    let raf: number;

    const move = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      setHovering(true);
    };

    const leave = () => setHovering(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);

    const animate = () => {
      current.x += (target.x - current.x) * 0.15;
      current.y += (target.y - current.y) * 0.15;
      setPos({ x: current.x, y: current.y });
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Base Static Grid (Fades out where cursor is) */}
      <div
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-300"
        style={{
          backgroundImage: "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          WebkitMaskImage: hovering ? `radial-gradient(200px circle at ${pos.x}px ${pos.y}px, transparent 0%, black 100%)` : "none",
          maskImage: hovering ? `radial-gradient(200px circle at ${pos.x}px ${pos.y}px, transparent 0%, black 100%)` : "none",
        }}
      />

      {/* Gravitational Grid - (Fades in where cursor is, slightly scaled) */}
      <div
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: hovering ? 1 : 0,
          WebkitMaskImage: `radial-gradient(200px circle at ${pos.x}px ${pos.y}px, black 20%, transparent 100%)`,
          maskImage: `radial-gradient(200px circle at ${pos.x}px ${pos.y}px, black 20%, transparent 100%)`,
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, #80808025 1px, transparent 1px), linear-gradient(to bottom, #80808025 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            transform: "scale(1.15)", // Magnification factor
            transformOrigin: `${pos.x}px ${pos.y}px`, // Expands identically from mouse pos
          }}
        />
      </div>
    </>
  );
}
