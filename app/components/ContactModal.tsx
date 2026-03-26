"use client";

import { useState, useEffect } from "react";
import { registerOpenContactModal } from "@/app/utils/contactModal";
import { useLanguage } from "@/app/context/LanguageContext";

const WA_NUMBER = "5535984128420";

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { t } = useLanguage();
  const cm = t.contactModal;

  useEffect(() => {
    registerOpenContactModal(() => setOpen(true));
  }, []);

  function handleClose() {
    setOpen(false);
    setNome("");
    setWhatsapp("");
    setEmail("");
    setError("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nome.trim() || !whatsapp.trim()) {
      setError(cm.errorMsg);
      return;
    }
    const msg = encodeURIComponent(cm.waMessage(nome.trim(), email));
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank", "noopener,noreferrer");
    handleClose();
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center p-4"
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-black"
        >
          ✕
        </button>

        <div className="mb-6">
          <p className="text-xs font-medium uppercase tracking-widest text-gray-400">{cm.tag}</p>
          <h2 className="mt-1 text-2xl font-bold text-black">{cm.title}</h2>
          <p className="mt-1 text-sm text-gray-500">{cm.desc}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-black">
              {cm.nameLabel} <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder={cm.namePlaceholder}
              className="w-full rounded-xl border border-black/10 bg-gray-50 px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-gray-400 focus:border-black focus:bg-white"
              autoFocus
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-black">
              {cm.whatsappLabel} <span className="text-red-400">*</span>
            </label>
            <input
              type="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="(11) 99999-9999"
              className="w-full rounded-xl border border-black/10 bg-gray-50 px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-gray-400 focus:border-black focus:bg-white"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-black">
              {cm.emailLabel}{" "}
              <span className="text-xs font-normal text-gray-400">{cm.emailOptional}</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full rounded-xl border border-black/10 bg-gray-50 px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-gray-400 focus:border-black focus:bg-white"
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-black py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {cm.submitBtn}
          </button>
        </form>
      </div>
    </div>
  );
}
