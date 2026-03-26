"use client";

import { useEffect, useRef, useCallback } from "react";

interface DotGridProps {
  className?: string;
  /** Space between dots in px */
  gap?: number;
  /** Dot radius in px */
  dotSize?: number;
  /** How far the mouse influence reaches */
  radius?: number;
  /** Base dot color (rgba) */
  color?: string;
  /** Active/hover dot color */
  activeColor?: string;
}

export default function DotGrid({
  className = "",
  gap = 32,
  dotSize = 1.2,
  radius = 120,
  color = "rgba(0,0,0,0.10)",
  activeColor = "rgba(0,0,0,0.35)",
}: DotGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);
  const dotsRef = useRef<{ baseX: number; baseY: number; x: number; y: number }[]>([]);

  const buildGrid = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const dots: typeof dotsRef.current = [];
    const cols = Math.ceil(rect.width / gap) + 1;
    const rows = Math.ceil(rect.height / gap) + 1;
    const offsetX = (rect.width - (cols - 1) * gap) / 2;
    const offsetY = (rect.height - (rows - 1) * gap) / 2;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = offsetX + c * gap;
        const y = offsetY + r * gap;
        dots.push({ baseX: x, baseY: y, x, y });
      }
    }
    dotsRef.current = dots;
  }, [gap]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    buildGrid();

    const handleResize = () => buildGrid();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const radiusSq = radius * radius;
    const ease = 0.15;

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      const dots = dotsRef.current;
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const dx = dot.baseX - mx;
        const dy = dot.baseY - my;
        const distSq = dx * dx + dy * dy;

        let targetX = dot.baseX;
        let targetY = dot.baseY;
        let scale = 1;
        let useActive = false;

        if (distSq < radiusSq && mx > -999) {
          const dist = Math.sqrt(distSq);
          const force = (1 - dist / radius) * 18;
          const angle = Math.atan2(dy, dx);
          targetX = dot.baseX + Math.cos(angle) * force;
          targetY = dot.baseY + Math.sin(angle) * force;
          scale = 1 + (1 - dist / radius) * 1.5;
          useActive = true;
        }

        // Lerp toward target
        dot.x += (targetX - dot.x) * ease;
        dot.y += (targetY - dot.y) * ease;

        ctx.beginPath();
        ctx.arc(dot.x * dpr, dot.y * dpr, dotSize * scale * dpr, 0, Math.PI * 2);
        ctx.fillStyle = useActive ? activeColor : color;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [buildGrid, dotSize, radius, color, activeColor]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-auto absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
      style={{ display: "block" }}
    />
  );
}
