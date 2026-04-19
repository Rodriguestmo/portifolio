"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: "linear-gradient(90deg, #000000, #555555, #000000)",
        scaleX: scrollYProgress,
        transformOrigin: "left",
        zIndex: 9998,
      }}
    />
  );
}
