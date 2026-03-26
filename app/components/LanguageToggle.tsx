"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "pt" ? "en" : "pt")}
      className="flex items-center gap-1 rounded-full border border-black/10 px-3 py-1.5 text-xs font-medium text-gray-500 transition-colors hover:border-black/20 hover:text-black"
      aria-label="Switch language"
    >
      <span className={lang === "pt" ? "text-black font-semibold" : "text-gray-400"}>PT</span>
      <span className="text-gray-300">/</span>
      <span className={lang === "en" ? "text-black font-semibold" : "text-gray-400"}>EN</span>
    </button>
  );
}
