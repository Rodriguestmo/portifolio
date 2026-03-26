"use client";

// Coral/salmon frame border — only used on /marketing page
export default function FrameBorder() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
      style={{
        border: "3px solid #f0a090",
        borderRadius: "10px",
        margin: "4px",
      }}
    />
  );
}
