"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");

  useEffect(() => {
    // Phase 1 — text fades in (handled by motion)
    // After 1.4s total, start exit
    const holdTimer = setTimeout(() => setPhase("out"), 1400);
    return () => clearTimeout(holdTimer);
  }, []);

  return (
    <AnimatePresence
      onExitComplete={() => {
        sessionStorage.setItem("preloaderShown", "true");
        onComplete();
      }}
    >
      {phase !== "out" && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#0a0a0a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {/* "Thales Miguel" — word by word slide up */}
          <div
            style={{
              overflow: "hidden",
              display: "flex",
              gap: "0.5em",
            }}
          >
            {["Thales", "Miguel"].map((word, i) => (
              <motion.span
                key={word}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.15 + i * 0.12,
                }}
                style={{
                  display: "block",
                  color: "#ffffff",
                  fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  userSelect: "none",
                  fontFamily: "inherit",
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 0.35, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.55 }}
            style={{
              color: "#ffffff",
              fontSize: "0.75rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              userSelect: "none",
            }}
          >
            Engenharia · Estratégia · Tecnologia
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
