"use client";

const skills = [
  "Landing Pages",
  "Tráfego Pago",
  "IA Personalizada",
  "WhatsApp",
  "CRM",
  "Automação",
  "SaaS",
  "Prospecção",
  "Funil de Vendas",
  "Análise de Dados",
];

interface SkillsMarqueeProps {
  className?: string;
}

export default function SkillsMarquee({ className = "" }: SkillsMarqueeProps) {
  // Duplicate for seamless loop
  const items = [...skills, ...skills];

  return (
    <div
      className={`pointer-events-none absolute inset-0 flex flex-col justify-center gap-6 overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {/* Line 1 — left to right */}
      <div className="flex whitespace-nowrap" style={{ animation: "marqueeLeft 35s linear infinite" }}>
        {items.map((skill, i) => (
          <span
            key={`a-${i}`}
            className="mx-4 text-[clamp(3rem,8vw,7rem)] font-black uppercase tracking-tight text-black/[0.04]"
          >
            {skill}
          </span>
        ))}
      </div>
      {/* Line 2 — right to left */}
      <div className="flex whitespace-nowrap" style={{ animation: "marqueeRight 40s linear infinite" }}>
        {items.map((skill, i) => (
          <span
            key={`b-${i}`}
            className="mx-4 text-[clamp(3rem,8vw,7rem)] font-black uppercase tracking-tight text-black/[0.04]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
