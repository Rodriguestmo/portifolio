"use client";

import { useEffect, useRef } from "react";

export default function GravityGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let mouse = { x: width / 2, y: height / 2 };
    let currentPos = { x: mouse.x, y: mouse.y };
    let isHovering = false;

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      isHovering = true;
    };

    const onMouseLeave = () => {
      isHovering = false;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", onResize);

    let animationFrameId: number;
    const spacing = 32;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth follow
      if (isHovering) {
        currentPos.x += (mouse.x - currentPos.x) * 0.1;
        currentPos.y += (mouse.y - currentPos.y) * 0.1;
      }

      ctx.strokeStyle = "rgba(0, 0, 0, 0.06)";
      ctx.lineWidth = 1;
      ctx.beginPath();

      const drawPoint = (x: number, y: number) => {
        const dx = x - currentPos.x;
        const dy = y - currentPos.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 300;

        if (dist < maxDist && dist > 0 && isHovering) {
          const force = Math.pow((maxDist - dist) / maxDist, 1.5);
          const pull = force * 60; // Max displacement in pixels
          return {
            x: x - (dx / dist) * pull,
            y: y - (dy / dist) * pull,
          };
        }
        return { x, y };
      };

      // Draw vertical lines
      const resolution = 8; // Interpolation steps
      for (let x = 0; x <= width + spacing; x += spacing) {
        for (let y = 0; y <= height + spacing; y += resolution) {
          const p = drawPoint(x, y);
          if (y === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
      }

      // Draw horizontal lines
      for (let y = 0; y <= height + spacing; y += spacing) {
        for (let x = 0; x <= width + spacing; x += resolution) {
          const p = drawPoint(x, y);
          if (x === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
      }

      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}
