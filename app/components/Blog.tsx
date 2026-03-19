const posts = [
  {
    title: "Como landing pages de alta conversão funcionam na prática",
    date: "Mar 2026",
    gradient: "from-orange-100 to-amber-50",
  },
  {
    title: "Tráfego pago sem estratégia é dinheiro jogado fora",
    date: "Mar 2026",
    gradient: "from-blue-100 to-sky-50",
  },
  {
    title: "IA no atendimento: por que automação não é robotização",
    date: "Mar 2026",
    gradient: "from-emerald-100 to-green-50",
  },
];

export default function Blog() {
  return (
    <section className="section-border px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1160px]">
        <div className="flex items-end justify-between">
          <h2 className="text-5xl leading-[1.05] tracking-tight md:text-6xl">
            <span className="heading-muted">
              Insights de
            </span>{" "}
            <span className="heading-bold">tecnologia e marketing.</span>
          </h2>

          <a
            href="#"
            className="hidden items-center gap-1.5 text-sm font-medium text-black transition-opacity hover:opacity-60 md:flex"
          >
            Ver todos
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-black/6 bg-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              {/* Image placeholder */}
              <div
                className={`h-[200px] bg-gradient-to-br ${post.gradient} p-6`}
              >
                <div className="flex h-full items-end">
                  <div className="h-3 w-3/4 rounded bg-black/5" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold leading-snug text-black transition-colors group-hover:text-gray-600">
                  {post.title}
                </h3>
                <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>Por Thales Miguel</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
