"use client";

import { type ReactNode } from "react";
import { motion, type TargetAndTransition } from "framer-motion";

type AnimationVariant =
  | "genie"
  | "fadeUp"
  | "fadeIn"
  | "slideLeft"
  | "slideRight"
  | "scaleUp";

interface AnimateInProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
  as?: "div" | "span" | "section" | "article" | "header" | "footer" | "p";
}

const hidden: Record<AnimationVariant, TargetAndTransition> = {
  genie: { opacity: 0, scale: 0.85, y: 60 },
  fadeUp: { opacity: 0, y: 40 },
  fadeIn: { opacity: 0 },
  slideLeft: { opacity: 0, x: -60 },
  slideRight: { opacity: 0, x: 60 },
  scaleUp: { opacity: 0, scale: 0.9 },
};

const visible: Record<AnimationVariant, TargetAndTransition> = {
  genie: { opacity: 1, scale: 1, y: 0 },
  fadeUp: { opacity: 1, y: 0 },
  fadeIn: { opacity: 1 },
  slideLeft: { opacity: 1, x: 0 },
  slideRight: { opacity: 1, x: 0 },
  scaleUp: { opacity: 1, scale: 1 },
};

const springTransition = {
  type: "spring" as const,
  damping: 25,
  stiffness: 200,
};

const tweenTransition = (duration: number) => ({
  type: "tween" as const,
  duration,
  ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
});

function getTransition(variant: AnimationVariant, duration: number, delay: number) {
  const base =
    variant === "genie" || variant === "scaleUp"
      ? springTransition
      : tweenTransition(duration);
  return { ...base, delay };
}

export default function AnimateIn({
  children,
  variant = "genie",
  delay = 0,
  duration = 0.7,
  className,
  once = true,
  amount = 0.2,
  as = "div",
}: AnimateInProps) {
  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      initial={hidden[variant]}
      whileInView={visible[variant]}
      viewport={{ once, amount }}
      transition={getTransition(variant, duration, delay)}
      className={className}
    >
      {children}
    </Tag>
  );
}
