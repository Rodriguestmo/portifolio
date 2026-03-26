"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "pt" | "en";

const translations = {
  pt: {
    nav: {
      links: [
        { label: "Projetos", href: "#projetos" },
        { label: "Serviços", href: "#servicos" },
        { label: "Soluções", href: "#solucoes" },
      ],
      contact: "Contato",
    },
    hero: {
      badgeMuted: "Disponível para",
      badgeBold: "o seu projeto",
      titleLine1: ["Tecnologia", "que"],
      titleLine2: ["entrega", "resultado."],
      descBold:
        "Landing pages, tráfego pago e IA personalizada para o seu negócio. Tudo conectado para transformar clique em lead qualificado.",
      descMuted:
        "Monto a operação digital completa que sua marca precisa para atrair, qualificar e converter.",
      statLabel: "em mídia gerenciada",
      statMore: "mais",
      statMoreSuffix: "resultado com",
      statLess: "menor",
      statLessSuffix: "custo possível",
      ctaWhatsapp: "Fale comigo no WhatsApp",
      ctaSchedule: "Agendar reunião",
    },
    socialProof: {
      label: "projetos entregues com resultado",
    },
    projects: {
      heading1: "Últimos",
      heading2: "Projetos",
      viewProject: "Ver projeto →",
      moreText:
        "Quer ver mais bastidores, dashboards e automações rodando em operação real?",
      moreBtn: "Pedir mais cases no WhatsApp",
      items: [
        {
          name: "Dra. Camila Sutilo",
          category: "Landing + Tráfego + WhatsApp",
          badge: "Site publicado",
          description:
            "Captação com estrutura comercial, operação de mídia e atendimento conectados.",
          actionLabel: "Ver projeto",
        },
        {
          name: "Geovanna Romeiro",
          category: "Landing Page de Conversão",
          badge: "Landing publicada",
          description:
            "Página desenhada para campanha, clareza de oferta e leitura limpa do funil.",
          actionLabel: "Ver projeto",
        },
      ],
    },
    testimonialQuote: {
      quote1: "Eu tinha tráfego rodando mas perdia lead todo dia por falta de resposta rápida. Hoje o WhatsApp",
      quoteBold: "qualifica e agenda sozinho,",
      quote2: "e minha equipe só entra quando o paciente já está pronto.",
      name: "Dr. Renato Machado",
      role: "Dermatologista — SP",
    },
    services: {
      heading1: "Serviços que",
      heading2: "aceleram seu",
      heading3: "negócio.",
      desc: "Cada peça é desenhada para funcionar dentro de um sistema, porque design sem tecnologia é só estética, e tecnologia sem design não converte.",
      items: [
        {
          name: "Landing Pages de Alta Conversão",
          description:
            "Páginas criadas para vender, não para ficar bonitas no portfólio. Copy persuasivo, design orientado por dados e estrutura que guia o visitante até a conversão.",
        },
        {
          name: "Tráfego Pago Estratégico",
          description:
            "Meta Ads e Google Ads com gestão completa. Criativos, segmentação, testes A/B e otimização contínua para reduzir custo por lead e escalar o que funciona.",
        },
        {
          name: "IA Personalizada",
          description:
            "Não é chatbot genérico. É uma IA treinada com os dados e linguagem do seu negócio — qualifica leads, responde dúvidas e agenda no WhatsApp 24/7 como se fosse você.",
        },
        {
          name: "Prospecção Ativa Automatizada",
          description:
            "Bot que encontra potenciais clientes, envia mensagens personalizadas e nutre o contato até ele estar pronto para converter. Prospecção rodando no piloto automático.",
        },
        {
          name: "CRM & Integrações",
          description:
            "Todos os seus leads, conversas e dados de campanha num lugar só. Integro WhatsApp, formulários, planilhas e ferramentas para você ter controle total do funil.",
        },
        {
          name: "SaaS Personalizado",
          description:
            "Software feito sob medida para o seu negócio. Dashboards, painéis administrativos, plataformas internas. Se você precisa de um sistema que não existe, eu construo.",
        },
      ],
    },
    textReveal: {
      text: "resolvendo problemas reais\nde pessoas reais.",
      boldWords: ["reais", "reais."],
    },
    about: {
      subtitle: "Design, Tecnologia & Marketing Digital",
      specialtiesLabel: "Especialidades",
      focusText:
        "O foco é unir design, mídia e tecnologia numa operação que transforma clique em cliente.",
      specialties: [
        {
          title: "Landing Pages",
          description: "Estrutura, copy e design para conversão.",
        },
        {
          title: "Tráfego Pago",
          description: "Meta Ads e Google Ads com leitura de funil.",
        },
        {
          title: "IA Personalizada",
          description:
            "Treinada com os dados do seu negócio. Não é chatbot genérico.",
        },
        {
          title: "WhatsApp + CRM",
          description:
            "Atendimento, contexto e handoff bem amarrados.",
        },
      ],
      bio: [
        {
          muted:
            "A maioria das empresas trata marketing e tecnologia como coisas separadas.",
          bold: "trata marketing e tecnologia como coisas separadas.",
          prefix: "A maioria das empresas",
          suffix:
            " Eu junto as duas. Porque uma landing page bonita que não converte é desperdício, e uma automação poderosa sem design é invisível.",
        },
        {
          plain:
            "Construo landing pages que vendem, campanhas que escalam e IA personalizada que trabalha enquanto você dorme. Tudo integrado, tudo mensurável.",
        },
        {
          boldPart: "Não entrego projeto pela metade.",
          suffix:
            " Se o copy não convence, refaço. Se a automação trava, corrijo. O resultado final é o que importa, não o processo.",
        },
      ],
    },
    pricing: {
      heading1: "Soluções completas.",
      heading2: "Resultados reais.",
      subBold: "Design + Tecnologia trabalhando juntos.",
      subMuted:
        "Cada serviço é pensado para funcionar dentro de um sistema integrado.",
      steps: [
        {
          title: "Converse",
          description:
            "Me conta seu desafio. Entendo seu contexto antes de propor qualquer solução.",
        },
        {
          title: "Planeje",
          description:
            "Monto a estratégia e o escopo ideal para o estágio atual do seu negócio.",
        },
        {
          title: "Execute",
          description: "Entrego tudo funcionando. Design, tech e automação conectados.",
        },
      ],
      card1: {
        tag: "Landing Page + Tráfego",
        title: "Design + Performance trabalhando juntos.",
        desc: "Página e campanha otimizadas em conjunto para maximizar cada clique.",
        features: [
          "A/B Test em criativos",
          "A/B Test na landing page",
          "Decisões baseadas em dados",
          "Relatório unificado",
        ],
        cta: "Falar sobre este serviço",
      },
      card2: {
        tag: "IA Personalizada",
        title: "Tecnologia que qualifica e converte no automático.",
        desc: "Inteligência artificial integrada ao seu fluxo de vendas.",
        features: [
          "Prospecção ativa automatizada",
          "WhatsApp com IA Personalizada",
          "CRM integrado (Notion)",
          "Qualificação de leads 24/7",
          "Handoff inteligente para humano",
          "SaaS personalizado sob demanda",
        ],
        cta: "Falar sobre automações",
      },
      bottomTitle: "Precisa de algo específico ou quer um projeto completo?",
      bottomDesc:
        "Me conta o que você precisa e eu monto a melhor solução pro seu momento.",
      bottomCta: "Conversar no WhatsApp",
    },
    logoTicker: {
      label: "Tecnologias de",
      labelBold: "confiança",
    },
    testimonials: {
      heading1: "Provas reais",
      heading2: "de execução.",
      desc: "Cada peça funciona dentro de um sistema conectado — página, tráfego, CRM, WhatsApp e automação trabalhando juntos como uma operação real.",
      cards: [
        {
          label: "Depoimento real",
          title: "Dra. Camila Sutilo",
          summary:
            "Em 3 meses o custo por lead caiu pela metade e o WhatsApp começou a qualificar pacientes sozinho.",
          points: [
            "Landing, mídia e atendimento pensados como um único sistema",
            "Pré-qualificação antes do contato humano",
            "Operação acompanhada ponta a ponta",
          ],
          footer: "Médica",
        },
        {
          label: "Projeto publicado",
          title: "Geovanna Romeiro",
          summary:
            "Landing construída com oferta clara, visual forte e base pronta para sustentar tráfego pago e testes.",
          points: [
            "Página desenhada para conversão, não só apresentação",
            "Estrutura comercial simples de entender e medir",
            "Base limpa para otimização contínua",
          ],
          footer: "Landing Page ativa",
        },
        {
          label: "Case real",
          title: "Clínica NutriVita",
          summary:
            "Clínica de nutrição com 3 unidades que tinha tráfego rodando mas perdia 60% dos leads por falta de resposta rápida.",
          points: [
            "Bot qualificou e agendou +180 consultas em 45 dias",
            "Custo por agendamento caiu 38% sem aumentar verba",
            "Time focou em atendimento, não em copiar e colar mensagens",
          ],
          footer: "Tráfego + WhatsApp IA + CRM",
        },
      ],
      bottomTitle: "Resultado aqui não vem de uma peça isolada.",
      bottomDesc:
        "Vem de direção, execução e integração entre marketing e tecnologia.",
      tags: ["Landing", "Tráfego", "WhatsApp", "CRM", "IA Personalizada"],
    },
    faq: {
      heading1: "Suas perguntas",
      heading2: "respondidas.",
      items: [
        {
          question: "Você faz só a página ou a operação completa?",
          answer:
            "Os dois cenários fazem sentido. Posso assumir só a landing page ou montar a lógica completa com mídia, tracking e automação.",
        },
        {
          question: "IA Personalizada não deixa o atendimento robótico?",
          answer:
            "Se for genérica, sim. A IA que eu configuro é treinada com os dados reais do seu negócio — tom de voz, serviços, objeções. O resultado é um atendimento natural que acelera qualificação sem perder humanidade.",
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
        {
          question: "Qual o prazo médio de entrega?",
          answer:
            "Projetos simples saem em 1-2 semanas. Operações completas com landing page, tráfego e automação levam de 3-4 semanas para ficar no ar.",
        },
      ],
      ctaTitle1: "Ainda com dúvidas?",
      ctaTitle2: "Agende uma call gratuita.",
      ctaDesc:
        "Saiba mais sobre como trabalho e como posso ajudar você e seu negócio a dar o próximo passo.",
      ctaSchedule: "Agendar agora",
      ctaWhatsapp: "Ou fale no WhatsApp",
    },
    footer: {
      line1: "Vamos",
      line2: "criar",
      line3: "resultados incríveis juntos.",
      emailLabel: "E-mail",
      whatsappLabel: "WhatsApp",
      whatsappCta: "Fale agora",
      meetingLabel: "Agendar reunião",
      meetingCta: "Marcar horário",
      responseLabel: "Resposta rápida",
      responseDesc: "Geralmente em menos de 1h",
      menuLabel: "Menu",
      copyright: "© 2026 Thales Miguel — Marketing Digital & Tecnologia",
    },
    contactModal: {
      tag: "Fale comigo",
      title: "Antes de ir pro WhatsApp",
      desc: "Deixa seu nome e contato para eu já saber quem é você quando chegar a mensagem.",
      nameLabel: "Nome",
      namePlaceholder: "Seu nome",
      whatsappLabel: "WhatsApp",
      emailLabel: "E-mail",
      emailOptional: "(opcional)",
      errorMsg: "Preencha seu nome e WhatsApp para continuar.",
      submitBtn: "Ir para o WhatsApp",
      waMessage: (nome: string, email: string) =>
        `Olá, vim pelo site! Meu nome é ${nome} e gostaria de conversar sobre um projeto.${email ? ` Meu e-mail é ${email}.` : ""}`,
    },
    contactBar: {
      title: "Fale comigo",
      subtitle: "WhatsApp ou agende uma call",
    },
  },

  en: {
    nav: {
      links: [
        { label: "Projects", href: "#projetos" },
        { label: "Services", href: "#servicos" },
        { label: "Solutions", href: "#solucoes" },
      ],
      contact: "Contact",
    },
    hero: {
      badgeMuted: "Available for",
      badgeBold: "your project",
      titleLine1: ["Technology", "that"],
      titleLine2: ["delivers", "results."],
      descBold:
        "Landing pages, paid traffic, and custom AI for your business. Everything connected to turn clicks into qualified leads.",
      descMuted:
        "I build the complete digital operation your brand needs to attract, qualify, and convert.",
      statLabel: "in managed media",
      statMore: "more",
      statMoreSuffix: "results with",
      statLess: "lower",
      statLessSuffix: "cost possible",
      ctaWhatsapp: "Talk to me on WhatsApp",
      ctaSchedule: "Schedule meeting",
    },
    socialProof: {
      label: "projects delivered with results",
    },
    projects: {
      heading1: "Recent",
      heading2: "Projects",
      viewProject: "View project →",
      moreText:
        "Want to see more behind-the-scenes, dashboards, and automations running in real operations?",
      moreBtn: "Request more cases on WhatsApp",
      items: [
        {
          name: "Dra. Camila Sutilo",
          category: "Landing + Traffic + WhatsApp",
          badge: "Published site",
          description:
            "Lead capture with commercial structure, media operations, and connected service.",
          actionLabel: "View project",
        },
        {
          name: "Geovanna Romeiro",
          category: "Conversion Landing Page",
          badge: "Published landing",
          description:
            "Page built for campaigns, clear offer, and clean funnel reading.",
          actionLabel: "View project",
        },
      ],
    },
    testimonialQuote: {
      quote1: "I had traffic running but was losing leads every day due to slow response. Now WhatsApp",
      quoteBold: "qualifies and books on its own,",
      quote2: "and my team only steps in when the patient is already ready.",
      name: "Dr. Renato Machado",
      role: "Dermatologist — SP",
    },
    services: {
      heading1: "Services that",
      heading2: "accelerate your",
      heading3: "business.",
      desc: "Each piece is designed to work within a system, because design without technology is just aesthetics, and technology without design doesn't convert.",
      items: [
        {
          name: "High-Conversion Landing Pages",
          description:
            "Pages built to sell, not to look pretty in a portfolio. Persuasive copy, data-driven design, and structure that guides visitors to conversion.",
        },
        {
          name: "Strategic Paid Traffic",
          description:
            "Meta Ads and Google Ads with full management. Creatives, targeting, A/B tests, and continuous optimization to reduce cost per lead and scale what works.",
        },
        {
          name: "Custom AI",
          description:
            "Not a generic chatbot. AI trained on your business's data and language — qualifies leads, answers questions, and books appointments on WhatsApp 24/7.",
        },
        {
          name: "Automated Outbound Prospecting",
          description:
            "Bot that finds potential clients, sends personalized messages, and nurtures contacts until they're ready to convert. Prospecting on autopilot.",
        },
        {
          name: "CRM & Integrations",
          description:
            "All your leads, conversations, and campaign data in one place. I integrate WhatsApp, forms, spreadsheets, and tools so you have full funnel control.",
        },
        {
          name: "Custom SaaS",
          description:
            "Software tailored to your business. Dashboards, admin panels, internal platforms. If you need a system that doesn't exist, I build it.",
        },
      ],
    },
    textReveal: {
      text: "solving real problems\nfor real people.",
      boldWords: ["real", "people."],
    },
    about: {
      subtitle: "Design, Technology & Digital Marketing",
      specialtiesLabel: "Specialties",
      focusText:
        "The focus is on combining design, media, and technology into an operation that turns clicks into clients.",
      specialties: [
        {
          title: "Landing Pages",
          description: "Structure, copy, and design for conversion.",
        },
        {
          title: "Paid Traffic",
          description: "Meta Ads and Google Ads with funnel analysis.",
        },
        {
          title: "Custom AI",
          description:
            "Trained on your business data. Not a generic chatbot.",
        },
        {
          title: "WhatsApp + CRM",
          description: "Service, context, and handoff tightly connected.",
        },
      ],
      bio: [
        {
          prefix: "Most companies",
          bold: "treat marketing and technology as separate things.",
          suffix:
            " I bring them together. Because a beautiful landing page that doesn't convert is a waste, and a powerful automation without design is invisible.",
        },
        {
          plain:
            "I build landing pages that sell, campaigns that scale, and custom AI that works while you sleep. All integrated, all measurable.",
        },
        {
          boldPart: "I don't deliver half-finished projects.",
          suffix:
            " If the copy doesn't convince, I redo it. If the automation breaks, I fix it. The final result is what matters, not the process.",
        },
      ],
    },
    pricing: {
      heading1: "Complete solutions.",
      heading2: "Real results.",
      subBold: "Design + Technology working together.",
      subMuted:
        "Each service is designed to work within an integrated system.",
      steps: [
        {
          title: "Talk",
          description:
            "Tell me your challenge. I understand your context before proposing any solution.",
        },
        {
          title: "Plan",
          description:
            "I build the strategy and ideal scope for your business's current stage.",
        },
        {
          title: "Execute",
          description: "I deliver everything working. Design, tech, and automation connected.",
        },
      ],
      card1: {
        tag: "Landing Page + Traffic",
        title: "Design + Performance working together.",
        desc: "Page and campaign optimized together to maximize every click.",
        features: [
          "A/B Test on creatives",
          "A/B Test on landing page",
          "Data-driven decisions",
          "Unified reporting",
        ],
        cta: "Talk about this service",
      },
      card2: {
        tag: "Custom AI",
        title: "Technology that qualifies and converts automatically.",
        desc: "Artificial intelligence integrated into your sales flow.",
        features: [
          "Automated outbound prospecting",
          "WhatsApp with Custom AI",
          "Integrated CRM (Notion)",
          "24/7 lead qualification",
          "Smart human handoff",
          "Custom SaaS on demand",
        ],
        cta: "Talk about automations",
      },
      bottomTitle: "Need something specific or want a complete project?",
      bottomDesc:
        "Tell me what you need and I'll build the best solution for your moment.",
      bottomCta: "Chat on WhatsApp",
    },
    logoTicker: {
      label: "Trusted",
      labelBold: "technologies",
    },
    testimonials: {
      heading1: "Real proof",
      heading2: "of execution.",
      desc: "Each piece works within a connected system — page, traffic, CRM, WhatsApp, and automation working together as a real operation.",
      cards: [
        {
          label: "Real testimonial",
          title: "Dra. Camila Sutilo",
          summary:
            "In 3 months, cost per lead dropped by half and WhatsApp started qualifying patients on its own.",
          points: [
            "Landing, media, and service designed as a single system",
            "Pre-qualification before human contact",
            "Operation monitored end to end",
          ],
          footer: "Doctor",
        },
        {
          label: "Published project",
          title: "Geovanna Romeiro",
          summary:
            "Landing page built with a clear offer, strong visuals, and a solid foundation for paid traffic and tests.",
          points: [
            "Page designed for conversion, not just presentation",
            "Simple commercial structure to understand and measure",
            "Clean foundation for continuous optimization",
          ],
          footer: "Active Landing Page",
        },
        {
          label: "Real case",
          title: "NutriVita Clinic",
          summary:
            "A nutrition clinic with 3 units that had traffic running but was losing 60% of leads due to slow response.",
          points: [
            "Bot qualified and booked +180 appointments in 45 days",
            "Cost per booking dropped 38% without increasing budget",
            "Team focused on service, not copy-pasting messages",
          ],
          footer: "Traffic + WhatsApp AI + CRM",
        },
      ],
      bottomTitle: "Results here don't come from a single piece.",
      bottomDesc:
        "They come from direction, execution, and integration between marketing and technology.",
      tags: ["Landing", "Traffic", "WhatsApp", "CRM", "Custom AI"],
    },
    faq: {
      heading1: "Your questions",
      heading2: "answered.",
      items: [
        {
          question: "Do you build just the page or the full operation?",
          answer:
            "Both scenarios make sense. I can take on just the landing page or build the full logic with media, tracking, and automation.",
        },
        {
          question: "Doesn't Custom AI make the service feel robotic?",
          answer:
            "If it's generic, yes. The AI I configure is trained on your real business data — tone of voice, services, objections. The result is natural communication that accelerates qualification without losing humanity.",
        },
        {
          question: "Can I hire paid traffic without automation?",
          answer:
            "Yes. But when the bottleneck is post-click, just running campaigns solves little. I prefer aligning the right piece to the real problem.",
        },
        {
          question: "What type of business does this work for?",
          answer:
            "Specialists, local businesses, clinics, service providers, and lean operations that need to sell with more predictability.",
        },
        {
          question: "What's the average delivery timeline?",
          answer:
            "Simple projects go live in 1-2 weeks. Complete operations with landing page, traffic, and automation take 3-4 weeks to launch.",
        },
      ],
      ctaTitle1: "Still have questions?",
      ctaTitle2: "Schedule a free call.",
      ctaDesc:
        "Learn more about how I work and how I can help you and your business take the next step.",
      ctaSchedule: "Schedule now",
      ctaWhatsapp: "Or talk on WhatsApp",
    },
    footer: {
      line1: "Let's",
      line2: "create",
      line3: "incredible results together.",
      emailLabel: "E-mail",
      whatsappLabel: "WhatsApp",
      whatsappCta: "Talk now",
      meetingLabel: "Schedule meeting",
      meetingCta: "Book a time",
      responseLabel: "Quick response",
      responseDesc: "Usually within 1h",
      menuLabel: "Menu",
      copyright: "© 2026 Thales Miguel — Digital Marketing & Technology",
    },
    contactModal: {
      tag: "Talk to me",
      title: "Before going to WhatsApp",
      desc: "Leave your name and contact so I already know who you are when the message arrives.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      whatsappLabel: "WhatsApp",
      emailLabel: "E-mail",
      emailOptional: "(optional)",
      errorMsg: "Please fill in your name and WhatsApp to continue.",
      submitBtn: "Go to WhatsApp",
      waMessage: (nome: string, email: string) =>
        `Hello, I came from the site! My name is ${nome} and I'd like to talk about a project.${email ? ` My email is ${email}.` : ""}`,
    },
    contactBar: {
      title: "Talk to me",
      subtitle: "WhatsApp or schedule a call",
    },
  },
};

type Translations = typeof translations.pt;

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
