const socialLinks = [
  { name: "Instagram", label: "IG" },
  { name: "LinkedIn", label: "LI" },
  { name: "WhatsApp", label: "WA" },
];

export default function About() {
  return (
    <section className="section-border px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1160px]">
        <h2 className="mb-16 text-5xl leading-[1.05] tracking-tight md:text-6xl">
          <span className="heading-muted">
            Criando experiências
            <br />
            que resolvem
          </span>
          <br />
          <span className="heading-bold">problemas reais.</span>
        </h2>

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left — Identity */}
          <div>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href="#"
                  className="flex h-11 items-center gap-2 rounded-full border border-black/8 px-4 text-sm text-gray-500 transition-colors hover:border-black/20 hover:text-black"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white">
                    {link.label}
                  </div>
                  {link.name}
                </a>
              ))}
            </div>

            {/* Name & title */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-black">Thales Miguel</h3>
              <p className="text-gray-500">
                Especialista em Tecnologia e Marketing
              </p>
            </div>

            {/* Work history */}
            <div className="mt-8">
              <p className="text-sm font-medium tracking-wide text-gray-400 uppercase">
                Minha trajetória
              </p>
              <div className="mt-4 space-y-1">
                <div className="flex items-center justify-between rounded-xl border border-black/6 bg-white px-5 py-4">
                  <div>
                    <p className="font-semibold text-black">Freelancer</p>
                    <p className="text-sm text-gray-500">
                      Marketing Digital & Tecnologia
                    </p>
                  </div>
                  <span className="text-sm text-gray-400">2024-presente</span>
                </div>
              </div>
              <button className="mt-3 flex items-center gap-1 text-sm font-medium text-gray-400 transition-colors hover:text-black">
                Ver mais
                <svg
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right — Bio */}
          <div>
            {/* Photo placeholder */}
            <div className="mb-8 h-[320px] w-full max-w-[400px] overflow-hidden rounded-2xl bg-gradient-to-br from-sky-100 to-blue-200">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/60 text-2xl font-black text-gray-400">
                    TM
                  </div>
                  <p className="mt-3 text-sm text-gray-500">Foto do Thales</p>
                </div>
              </div>
            </div>

            {/* Bio text */}
            <div className="space-y-6 text-lg leading-relaxed text-gray-500">
              <p>
                Eu{" "}
                <span className="font-semibold text-black">
                  foco em criar soluções digitais que servem a um propósito real,
                </span>{" "}
                garantindo que não sejam apenas bonitas, mas que realmente
                resolvam problemas e gerem resultados.
              </p>
              <p>
                Seja montando uma landing page, configurando campanhas de
                tráfego ou criando automações com IA, meu objetivo é fazer algo
                que funcione de forma natural e eficiente.
              </p>
              <p>
                <span className="font-semibold text-black">
                  Sou perfeccionista quando se trata dos detalhes,
                </span>{" "}
                e acredito que é isso que transforma um bom projeto em algo
                excepcional. Essa atenção me ajuda a construir relações sólidas
                com clientes, porque sabem que vou colocar o mesmo cuidado no
                projeto deles.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8">
              <p className="font-serif text-2xl italic text-gray-300">
                Thales Miguel
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
