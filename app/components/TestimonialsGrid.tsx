const testimonials = [
  {
    quote: "A nova landing page ",
    bold: "reduziu nosso custo por lead pela metade.",
    rest: " Foi um divisor de águas.",
    name: "Maria S.",
    role: "Gestora de Clínica",
    initials: "MS",
  },
  {
    quote: "O Thales realmente ",
    bold: "entendeu nossa visão",
    rest: " e trouxe resultados que superaram expectativas.",
    name: "Dr. Pedro L.",
    role: "Médico Especialista",
    initials: "PL",
  },
  {
    quote: "Nosso número de consultas ",
    bold: "aumentou significativamente",
    rest: " graças à expertise do Thales.",
    name: "Ana R.",
    role: "Diretora de Clínica",
    initials: "AR",
  },
  {
    quote:
      "A automação de WhatsApp trouxe clareza para nossas conversas com leads. Nossos pacientes adoraram!",
    bold: "",
    rest: "",
    name: "Carlos M.",
    role: "Gestor de Operações",
    initials: "CM",
  },
  {
    quote: "O rebranding superou nossas expectativas. ",
    bold: "Nos deu uma vantagem competitiva",
    rest: " no mercado.",
    name: "Juliana F.",
    role: "Coordenadora de Marketing",
    initials: "JF",
  },
  {
    quote: "O redesign transformou nossa presença digital. ",
    bold: "Vimos um aumento de 30% em engajamento",
    rest: " desde o lançamento.",
    name: "Roberto K.",
    role: "Diretor Comercial",
    initials: "RK",
  },
];

export default function TestimonialsGrid() {
  return (
    <section className="section-border px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1160px]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-5xl leading-[1.05] tracking-tight md:text-6xl">
            <span className="heading-muted">
              Veja o que estão
            </span>{" "}
            <span className="heading-bold">dizendo.</span>
          </h2>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {["MS", "PL", "AR", "CM"].map((init, i) => (
                <div
                  key={i}
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-gray-600 ${
                    [
                      "bg-amber-200",
                      "bg-sky-200",
                      "bg-emerald-200",
                      "bg-purple-200",
                    ][i]
                  }`}
                >
                  {init}
                </div>
              ))}
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-3.5 w-3.5 fill-black"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-500">Clientes satisfeitos</p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-black/6 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <p className="text-[15px] leading-relaxed text-gray-600">
                {t.quote}
                {t.bold && (
                  <span className="font-semibold text-black">{t.bold}</span>
                )}
                {t.rest}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-600">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
