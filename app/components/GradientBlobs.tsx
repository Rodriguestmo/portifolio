"use client";

import { motion } from "framer-motion";

export default function GradientBlobs() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Blob 1 — green, top-left */}
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "#22c55e",
          filter: "blur(80px)",
          opacity: 0.12,
          pointerEvents: "none",
        }}
      />

      {/* Blob 2 — purple, bottom-right */}
      <motion.div
        animate={{
          x: [0, -60, 30, 0],
          y: [0, 40, -60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "-100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "#7c3aed",
          filter: "blur(80px)",
          opacity: 0.12,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
