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
        height: "2px",
        background: "#22c55e",
        scaleX: scrollYProgress,
        transformOrigin: "left",
        zIndex: 9998,
      }}
    />
  );
}
