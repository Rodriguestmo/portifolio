const services = [
  {
    number: "01",
    title: "Landing pages de alta intenção",
    description:
      "Estrutura, copy e design pensados para transformar visita em ação, sem página genérica nem excesso de distração.",
    points: [
      "Arquitetura de oferta e headline",
      "Design responsivo com foco em conversão",
      "Tracking de eventos e integrações essenciais",
    ],
  },
  {
    number: "02",
    title: "Tráfego pago com leitura de funil",
    description:
      "Campanhas orientadas por intenção, criativo e dado. A meta não é só clique barato: é lead com chance real de virar conversa.",
    points: [
      "Meta Ads e Google Ads",
      "Estratégia de campanha, criativos e remarketing",
      "Ajustes por performance e corte de desperdício",
    ],
  },
  {
    number: "03",
    title: "Automações de IA para captação",
    description:
      "Sistemas que capturam, qualificam, respondem e organizam seus leads sem deixar o atendimento travado em tarefa manual.",
    points: [
      "WhatsApp, CRM, Notion e funis automatizados",
      "Qualificação e follow-up com IA",
      "Handoff para humano no timing certo",
    ],
  },
] as const;

const differentiators = [
  {
    title: "Estratégia antes de estética",
    description:
      "O visual entra para sustentar a oferta, não para disputar atenção com ela.",
  },
  {
    title: "Página, mídia e automação na mesma lógica",
    description:
      "Você evita gargalo entre quem atrai o clique, quem recebe o lead e quem precisa vender.",
  },
  {
    title: "Execução enxuta e rápida de iterar",
    description:
      "Tecnologia leve, leitura clara do funil e base pronta para crescer sem retrabalho.",
  },
] as const;

const processSteps = [
  {
    title: "Diagnóstico",
    description:
      "Entendo oferta, objeções, público e o que hoje faz o tráfego vazar.",
  },
  {
    title: "Estrutura da operação",
    description:
      "Defino a página, a jornada do lead, os eventos de tracking e o fluxo de resposta.",
  },
  {
    title: "Lançamento",
    description:
      "Coloco a página no ar, conecto campanhas e amarro as automações necessárias.",
  },
  {
    title: "Otimização",
    description:
      "Ajusto headline, criativo, segmentação e cadência com base em comportamento real.",
  },
] as const;

const stack = [
  "Landing page orientada por oferta",
  "Captação com Meta Ads e Google Ads",
  "IA aplicada em qualificação e follow-up",
  "Integrações com WhatsApp, CRM e Notion",
] as const;

const faq = [
  {
    question: "Você faz só a página ou a operação completa?",
    answer:
      "Os dois cenários fazem sentido. Posso assumir só a landing page ou montar a lógica completa com mídia, tracking e automação.",
  },
  {
    question: "Automações de IA não deixam o atendimento robótico?",
    answer:
      "Se forem mal configuradas, sim. A ideia aqui é usar IA para acelerar qualificação e contexto, sem matar naturalidade nem timing humano.",
  },
  {
    question: "Posso contratar tráfego pago sem automação?",
    answer:
      "Pode. Mas quando o gargalo está no pós-clique, só subir campanha resolve pouco. Eu prefiro alinhar a peça certa ao problema real.",
  },
  {
    question: "Isso funciona para qual tipo de negócio?",
    answer:
      "Especialistas, negócios locais, clínicas, prestadores de serviço e operações enxutas que precisam vender com mais previsibilidade.",
  },
] as const;

const contactCards = [
  { label: "WhatsApp", value: "adicione seu link final antes de publicar" },
  { label: "Instagram", value: "adicione seu @ ou URL principal" },
  { label: "E-mail", value: "adicione seu melhor canal comercial" },
] as const;

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <span className="badge text-[0.7rem] font-semibold text-[#12232e]">
        {eyebrow}
      </span>
      <h2 className="display-font mt-6 text-4xl leading-none text-[#12232e] md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-[#36505d] md:text-lg">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div aria-hidden="true" className="orb orb-one floating" />
      <div aria-hidden="true" className="orb orb-two floating" />
      <div aria-hidden="true" className="orb orb-three floating" />

      <section className="px-6 pb-16 pt-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <header className="panel-strong rounded-full px-5 py-3">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <a href="#topo" className="display-font text-2xl font-bold text-[#12232e]">
                Thales
              </a>

              <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-[#36505d]">
                <a href="#servicos" className="transition hover:text-[#12232e]">
                  Serviços
                </a>
                <a href="#metodo" className="transition hover:text-[#12232e]">
                  Método
                </a>
                <a href="#projeto" className="transition hover:text-[#12232e]">
                  Projeto
                </a>
                <a href="#faq" className="transition hover:text-[#12232e]">
                  FAQ
                </a>
                <a
                  href="#contato"
                  className="rounded-full bg-[#12232e] px-4 py-2 text-[#f6efe4] transition hover:bg-[#1d3543]"
                >
                  Falar comigo
                </a>
              </nav>
            </div>
          </header>

          <div
            id="topo"
            className="mt-10 grid items-end gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]"
          >
            <div>
              <span className="badge text-[0.7rem] font-semibold text-[#12232e]">
                Landing pages, tráfego pago e automações com IA
              </span>

              <h1 className="display-font mt-8 max-w-4xl text-5xl leading-[0.95] text-[#12232e] md:text-7xl">
                Eu monto a operação digital que transforma clique em lead
                qualificado.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#36505d] md:text-xl">
                Não é só um site bonito. É oferta, página, tráfego e automação
                trabalhando juntos para gerar conversa, reunião e venda com
                mais clareza.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contato"
                  className="rounded-full bg-[#ff6b2c] px-7 py-4 text-center text-sm font-semibold tracking-[0.08em] text-[#12232e] uppercase transition hover:bg-[#f04d14] hover:text-[#f6efe4]"
                >
                  Quero uma operação mais forte
                </a>
                <a
                  href="#servicos"
                  className="rounded-full border border-[#12232e]/12 bg-white/60 px-7 py-4 text-center text-sm font-semibold tracking-[0.08em] text-[#12232e] uppercase transition hover:bg-white"
                >
                  Ver estrutura
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="panel rounded-[1.75rem] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#ff6b2c]">
                    Posicionamento
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#36505d]">
                    Copy, estrutura e narrativa para sua oferta parar de parecer
                    genérica.
                  </p>
                </div>
                <div className="panel rounded-[1.75rem] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0f8c84]">
                    Performance
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#36505d]">
                    Campanhas e tracking desenhados para leitura de funil, não
                    achismo.
                  </p>
                </div>
                <div className="panel rounded-[1.75rem] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#12232e]">
                    Automação
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#36505d]">
                    IA conectada ao seu atendimento para qualificar e acelerar o
                    próximo passo.
                  </p>
                </div>
              </div>
            </div>

            <aside className="panel-dark rounded-[2rem] p-7 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#efcb73]">
                Operação em foco
              </p>
              <h2 className="display-font mt-5 text-3xl leading-tight md:text-4xl">
                Funil enxuto. Execução rápida. Leitura clara do que realmente
                gera lead.
              </h2>

              <div className="mt-8 space-y-4">
                {stack.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] px-4 py-4"
                  >
                    <span className="text-sm leading-7 text-[#e8dcc9]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    label: "Captação",
                    value: "Oferta certa para clique com intenção",
                  },
                  {
                    label: "Qualificação",
                    value: "Resposta rápida com contexto e prioridade",
                  },
                  {
                    label: "Escala",
                    value: "Lead chega mais pronto para venda",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.2rem] border border-white/10 bg-[#f6efe4]/[0.06] p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#efcb73]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#e8dcc9]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-6 py-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {differentiators.map((item) => (
            <div key={item.title} className="panel-strong rounded-[1.8rem] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#12232e]">
                {item.title}
              </p>
              <p className="mt-4 text-base leading-8 text-[#36505d]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="servicos" className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Serviços"
            title="Você pode contratar a peça certa ou a operação inteira."
            description="Quando a estrutura está alinhada, o tráfego para de vazar em página ruim, a página para de depender de adivinhação e a automação deixa de ser enfeite."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="panel rounded-[2rem] p-7 transition hover:-translate-y-1 hover:bg-white/80"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#ff6b2c]">
                  {service.number}
                </p>
                <h3 className="display-font mt-5 text-3xl leading-tight text-[#12232e]">
                  {service.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-[#36505d]">
                  {service.description}
                </p>
                <div className="mt-8 space-y-3">
                  {service.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-[1.2rem] border border-[#12232e]/10 bg-white/[0.7] px-4 py-3 text-sm leading-7 text-[#12232e]"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="metodo" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <SectionHeader
              eyebrow="Método"
              title="Eu não vendo peça solta quando o problema é o funil."
              description="A entrega parte da sua oferta e termina no ponto em que o lead precisa estar pronto para conversar com você ou com sua equipe."
            />

            <div className="grid gap-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="panel-strong rounded-[1.8rem] p-6 md:flex md:items-start md:gap-6"
                >
                  <div className="display-font text-4xl text-[#ff6b2c]">
                    0{index + 1}
                  </div>
                  <div className="mt-4 md:mt-1">
                    <h3 className="text-xl font-semibold text-[#12232e]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-8 text-[#36505d]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projeto" className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="panel-dark rounded-[2.5rem] px-7 py-8 md:px-10 md:py-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)] lg:items-start">
              <div>
                <span className="badge border-white/10 bg-white/[0.08] text-[0.7rem] font-semibold text-[#f6efe4]">
                  Projeto em destaque
                </span>
                <h2 className="display-font mt-6 text-4xl leading-none text-[#f6efe4] md:text-5xl">
                  Automação de prospecção para clínicas e consultórios.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[#d7c9b6] md:text-lg">
                  Um exemplo real do tipo de sistema que eu consigo desenhar:
                  captação de leads, conversa consultiva via WhatsApp, CRM no
                  Notion e escala para humano quando o lead aquece.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Busca leads no Google Maps ou importa por CSV",
                    "Abre conversa personalizada no WhatsApp",
                    "Usa IA para qualificar sem soar engessado",
                    "Registra histórico e status em CRM no Notion",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] px-4 py-4 text-sm leading-7 text-[#f6efe4]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#efcb73]">
                  Stack aplicada
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {["WhatsApp", "IA", "Notion CRM", "FastAPI", "Google Maps"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-4 py-2 text-sm text-[#f6efe4]"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>

                <div className="mt-8 space-y-4">
                  {[
                    {
                      title: "Entrada",
                      description:
                        "O lead chega de uma busca ativa e entra com contexto mínimo já organizado.",
                    },
                    {
                      title: "Conversa",
                      description:
                        "A IA conduz a interação com tom consultivo e identifica interesse real.",
                    },
                    {
                      title: "Escala",
                      description:
                        "Quando faz sentido, o sistema para e entrega o lead quente para atendimento humano.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.4rem] border border-white/10 bg-[#f6efe4]/[0.06] p-5"
                    >
                      <h3 className="text-lg font-semibold text-[#f6efe4]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-[#d7c9b6]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="FAQ"
            title="Dúvidas comuns antes de colocar essa estrutura para rodar."
            description="Se a sua operação já investe em tráfego ou quer começar do jeito certo, estas são as perguntas que normalmente aparecem primeiro."
          />

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {faq.map((item) => (
              <article key={item.question} className="panel rounded-[1.9rem] p-6">
                <h3 className="text-xl font-semibold text-[#12232e]">
                  {item.question}
                </h3>
                <p className="mt-4 text-base leading-8 text-[#36505d]">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="px-6 pb-20 pt-10 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="panel-dark rounded-[2.5rem] px-7 py-8 md:px-10 md:py-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.8fr)] lg:items-end">
              <div>
                <span className="badge border-white/10 bg-white/[0.08] text-[0.7rem] font-semibold text-[#f6efe4]">
                  Contato
                </span>
                <h2 className="display-font mt-6 max-w-3xl text-4xl leading-none text-[#f6efe4] md:text-5xl">
                  Se você quer vender com mais clareza, eu monto a estrutura.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[#d7c9b6] md:text-lg">
                  Posso assumir só a landing page ou desenhar a operação inteira
                  com mídia, tracking e automação. O foco é simples: menos
                  vazamento e mais lead com contexto.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#efcb73]">
                  Canais
                </p>
                <div className="mt-6 space-y-3">
                  {contactCards.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.4rem] border border-white/10 bg-[#f6efe4]/[0.06] px-4 py-4"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#efcb73]">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#f6efe4]">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <footer className="px-2 pt-8 text-sm text-[#36505d]">
            Thales. Landing pages, tráfego pago e automações de IA conectadas
            ao que realmente importa: conversa e venda.
          </footer>
        </div>
      </section>
    </main>
  );
}
