"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
  amount?: number;
  as?: "div" | "ul" | "section";
}

const container = (staggerDelay: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
    },
  },
});

export const staggerItem = {
  hidden: { opacity: 0, scale: 0.85, y: 60 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      damping: 25,
      stiffness: 200,
    },
  },
};

export const staggerFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween" as const,
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  },
};

export default function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
  amount = 0.2,
  as = "div",
}: StaggerContainerProps) {
  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      variants={container(staggerDelay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      className={className}
    >
      {children}
    </Tag>
  );
}
