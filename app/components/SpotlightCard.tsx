"use client";

import { useRef, useState, useCallback, ElementType } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
  [x: string]: any;
}

export default function SpotlightCard({ children, className = "", as: Tag = "div", ...props }: SpotlightCardProps) {
  const ref = useRef<any>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0, visible: false });

  const handleMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true });
  }, []);

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setSpot(s => ({ ...s, visible: false }))}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity: spot.visible ? 1 : 0,
          background: `radial-gradient(400px circle at ${spot.x}px ${spot.y}px, rgba(0,0,0,0.08) 0%, transparent 60%)`,
        }}
      />
      {children}
    </Tag>
  );
}
