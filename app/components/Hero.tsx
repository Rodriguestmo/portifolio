export default function Hero() {
  return (
    <section className="px-6 pt-28 pb-20 lg:px-8 lg:pt-36 lg:pb-28">
      <div className="mx-auto max-w-[1160px]">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-black/8 bg-white/80 px-4 py-2 text-xs font-medium tracking-wide text-black uppercase">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Disponível para projetos
            </div>

            <h1 className="mt-8 text-5xl leading-[1.05] tracking-tight md:text-7xl">
              <span className="heading-muted">Tecnologia que</span>
              <br />
              <span className="heading-bold">gera resultado.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed">
              <span className="font-semibold text-black">
                Soluções estratégicas que impulsionam crescimento, não só
                aparência.
              </span>{" "}
              <span className="text-gray-500">
                Eu crio tudo que sua marca precisa para atrair clientes e
                transformá-los em vendas.
              </span>
            </p>

            <a
              href="#contato"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-6 py-4 text-sm font-medium text-white transition-all hover:bg-gray-800 hover:shadow-lg"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-xs font-bold">
                TM
              </div>
              <span>Fale comigo</span>
              <svg
                className="h-4 w-4"
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

          {/* Right — Project Mockups Stack */}
          <div className="relative hidden lg:block">
            <div className="relative h-[460px]">
              {/* Card 1 - back */}
              <div className="absolute top-4 right-0 h-[280px] w-[380px] rotate-3 overflow-hidden rounded-2xl border border-black/8 bg-gradient-to-br from-gray-900 to-gray-800 p-6 shadow-2xl">
                <div className="mb-3 flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-3/4 rounded bg-white/10" />
                  <div className="h-3 w-1/2 rounded bg-white/10" />
                  <div className="mt-4 h-20 rounded-lg bg-white/5" />
                  <div className="h-3 w-2/3 rounded bg-white/10" />
                </div>
                <div className="absolute bottom-4 right-4 text-xs font-medium text-white/30">
                  Landing Page
                </div>
              </div>

              {/* Card 2 - middle */}
              <div className="absolute top-12 left-8 h-[280px] w-[380px] -rotate-2 overflow-hidden rounded-2xl border border-black/8 bg-gradient-to-br from-emerald-900 to-emerald-800 p-6 shadow-2xl">
                <div className="mb-3 flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="space-y-1.5">
                    <div className="h-16 rounded bg-white/10" />
                    <div className="h-2 w-3/4 rounded bg-white/10" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-16 rounded bg-white/10" />
                    <div className="h-2 w-3/4 rounded bg-white/10" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-16 rounded bg-white/10" />
                    <div className="h-2 w-3/4 rounded bg-white/10" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-xs font-medium text-white/30">
                  Dashboard Ads
                </div>
              </div>

              {/* Card 3 - front */}
              <div className="absolute bottom-0 left-0 h-[280px] w-[380px] rotate-1 overflow-hidden rounded-2xl border border-black/8 bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-2xl">
                <div className="mb-3 flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <div className="flex gap-3">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-green-500/30" />
                      <div className="h-2 w-20 rounded bg-white/20" />
                    </div>
                    <div className="rounded-lg bg-white/5 p-2">
                      <div className="h-2 w-full rounded bg-white/10" />
                      <div className="mt-1 h-2 w-2/3 rounded bg-white/10" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-blue-500/30" />
                      <div className="h-2 w-16 rounded bg-white/20" />
                    </div>
                    <div className="rounded-lg bg-white/5 p-2">
                      <div className="h-2 w-3/4 rounded bg-white/10" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-xs font-medium text-white/30">
                  WhatsApp Bot
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
