"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import FrameBorder from "../FrameBorder";
import CustomCursor from "../CustomCursor";
import SmoothScroll from "../SmoothScroll";
import PreloaderWrapper from "../PreloaderWrapper";
import MagneticButton from "../MagneticButton";
import TiltCard from "../TiltCard";
import LanguageToggle from "../LanguageToggle";
import { useLanguage } from "../../context/LanguageContext";

// ─── Animations
const wordVariants = {
  hidden: { opacity: 0, y: 80, skewY: 5 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { type: "spring" as const, damping: 24, stiffness: 120, delay: 0.1 + i * 0.1 },
  }),
};

// ─── Nav Links
const navLinks = [
  { labelPT: "Início", labelEN: "Home", href: "#inicio" },
  { labelPT: "Sobre", labelEN: "About", href: "#sobre" },
  { labelPT: "Serviços", labelEN: "Services", href: "#servicos" },
  { labelPT: "Experiência", labelEN: "Experience", href: "#experiencia" },
  { labelPT: "Projetos", labelEN: "Projects", href: "#projetos" },
  { labelPT: "Artigos", labelEN: "Articles", href: "#artigos" },
  { labelPT: "Links", labelEN: "Links", href: "#links" },
  { labelPT: "Contato", labelEN: "Contact", href: "#contato" },
];

export default function HomeClient() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const { lang } = useLanguage();
  const isEn = lang === "en";

  // ─── Experience Data (from ALL CVs)
  const experience = [
    {
      role: isEn ? "Marketing & Product Consultant" : "Consultor de Marketing e Produto",
      company: isEn ? "Education startup" : "Startup de educação",
      period: "2023 – " + (isEn ? "present" : "atual"),
      descPT: "Treinamento em gestão ágil de projetos, princípios de UX e branding. Apoio direto a equipes em organização de processos, interpretação de dados e gestão ágil de tarefas com frameworks Scrum e Kanban.",
      descEN: "Training in agile project management, UX principles, and branding. Direct support to teams in process organization, data interpretation, and agile task management with Scrum and Kanban frameworks.",
    },
    {
      role: "Product Marketing Manager",
      company: isEn ? "Education startup" : "Startup de educação",
      period: "2023 – 2024",
      descPT: "Defini roadmaps de produto e gerenciei backlogs alinhados com viabilidade técnica. Liderei projetos estratégicos otimizando tráfego pago (Google, Meta, LinkedIn, TikTok) com crescimento expressivo em CTR e receita.",
      descEN: "Defined product roadmaps and managed backlogs aligned with technical feasibility. Led strategic projects optimizing paid traffic (Google, Meta, LinkedIn, TikTok) with significant CTR and revenue growth.",
    },
    {
      role: isEn ? "Designer & Paid Media Manager" : "Designer e Gestor de Mídia Paga",
      company: isEn ? "Education startup" : "Startup de educação",
      period: "2022 – 2023",
      descPT: "Gerenciei campanhas de marketing digital data-driven focadas em métricas de performance. Otimizei estratégias usando ferramentas de analytics, testes A/B e CRO (Conversion Rate Optimization).",
      descEN: "Managed data-driven digital marketing campaigns focused on performance metrics. Optimized strategies using analytics tools, A/B testing, and CRO (Conversion Rate Optimization).",
    },
    {
      role: isEn ? "Co-founder & Brand Designer" : "Co-fundador & Brand Designer",
      company: isEn ? "Services startup" : "Startup de serviços",
      period: "2021 – 2022",
      descPT: "Co-fundei a empresa. Desenvolvi identidade visual completa e estratégias de growth marketing. Trabalhei diretamente com desenvolvedores e clientes para alinhar marca, comunicação e posicionamento.",
      descEN: "Co-founded the company. Developed complete visual identity and growth marketing strategies. Worked directly with developers and clients to align brand, communication, and positioning.",
    },
    {
      role: isEn ? "Combat Engineering Soldier – Information Systems Specialist" : "Soldado de Engenharia de Combate – Especialista em Sistemas de Informação",
      company: isEn ? "Brazilian Army" : "Exército Brasileiro",
      period: "2016 – 2018",
      descPT: "Soldado de engenharia de combate especializado em sistemas de informação. Experiência com disciplina operacional, liderança de equipes e resolução de problemas em ambientes de alta pressão.",
      descEN: "Combat engineering soldier specialized in information systems. Experience with operational discipline, team leadership, and problem-solving in high-pressure environments.",
    },
  ];

  const academicExp = [
    {
      role: isEn ? "Marketing & Product Director" : "Diretor de Marketing e Produto",
      company: isEn ? "Aeronautics Academic Center – UNIFEI" : "Centro Acadêmico de Aeronáutica – UNIFEI",
      period: "2022",
      descPT: "Liderei estratégias de comunicação e branding para eventos acadêmicos e de engenharia aeronáutica. Gerenciei identidade de marca para produtos aeronáuticos e visibilidade do centro acadêmico.",
      descEN: "Led communication and branding strategies for academic and aeronautical engineering events. Managed brand identity for aeronautical products and academic center visibility.",
    },
    {
      role: isEn ? "Microgravity Research" : "Pesquisa em Microgravidade",
      company: "FEPI",
      period: "2021",
      descPT: "Pesquisei o comportamento de soldas metálicas em ambientes de microgravidade, investigando por que soldas feitas em microgravidade apresentam maior integridade estrutural versus as realizadas sob gravidade terrestre. Contribuí para design experimental, interpretação de dados e análise de propriedades metalúrgicas.",
      descEN: "Researched the behavior of metallic welding in microgravity environments, investigating why welds performed in microgravity exhibit greater structural integrity compared to those made under Earth's gravity. Contributed to experimental design, data interpretation, and analysis of metallurgical properties.",
    },
  ];

  const projects = [
    { num: "001", title: "Dra. Camila Sutilo", tags: ["landing", isEn ? "traffic" : "tráfego", "whatsapp"], href: "https://camilasutilo.com", year: "2025" },
    { num: "002", title: "Geovanna Romeiro", tags: ["landing", isEn ? "conversion" : "conversão"], href: "https://geovanna-lp.web.app", year: "2025" },
    { num: "003", title: "Prospector Bot", tags: [isEn ? "ai" : "ia", isEn ? "automation" : "automação", "python"], href: "#", year: "2025" },
  ];

  const articles = [
    { title: isEn ? "Building the Prospector Bot: AI on WhatsApp" : "Construindo o Prospector Bot: IA no WhatsApp", date: "Mar 2026", readTime: "5 min", href: "#" },
    { title: isEn ? "Conversion Design and Data Engineering" : "Design de Conversão e a Engenharia dos Dados", date: isEn ? "Feb 2026" : "Fev 2026", readTime: "8 min", href: "#" },
  ];

  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/thales-oliveira-rodrigues/", handle: "in/thales-oliveira-rodrigues" },
    { label: "GitHub", href: "https://github.com/Rodriguestmo", handle: "github.com/Rodriguestmo" },
    { label: "Instagram", href: "#", handle: "@thalesmiguelor" },
  ];

  const usefulLinks = [
    { label: isEn ? "Marketing Portfolio" : "Portfólio de Marketing", href: "/marketing" },
    { label: isEn ? "Schedule a Meeting" : "Agendar Reunião", href: "https://calendar.app.google/v7s5H975BGwnriuZA" },
  ];

  const skills = [
    { category: isEn ? "Engineering" : "Engenharia", items: ["AutoCAD", "SolidWorks", "MATLAB", "ANSYS"] },
    { category: isEn ? "Development" : "Desenvolvimento", items: ["Next.js", "React", "Python", "SQL", "Power BI", "Excel VBA"] },
    { category: isEn ? "Marketing" : "Marketing", items: ["Google Ads", "Meta Ads", "LinkedIn Ads", "TikTok Ads", "CRO", "A/B Testing"] },
    { category: isEn ? "Methods" : "Métodos", items: ["Scrum", "Kanban", "Lean Six Sigma", "UI/UX"] },
    { category: isEn ? "Languages" : "Idiomas", items: [isEn ? "English (Advanced)" : "Inglês (Avançado)", isEn ? "Spanish (Intermediate)" : "Espanhol (Intermediário)", isEn ? "French (Basic)" : "Francês (Básico)"] },
  ];

  const certifications = [
    "Lean Six Sigma – Green Belt",
    "Power BI – Escola DNC",
    "SQL – Alura",
    "Python – Alura",
    "Aviation Safety & Reliability – Hong Kong PolyU",
    "Product Management – Escola DNC",
    "Marketing Manager – Escola DNC",
  ];

  return (
    <>
      <FrameBorder />
      <PreloaderWrapper />
      <SmoothScroll />
      <CustomCursor />

      {/* ── Desktop Vertical Menu ── */}
      <nav className="hidden lg:flex flex-col fixed left-8 top-1/2 -translate-y-1/2 z-40 gap-5">
        {navLinks.map((n, i) => (
          <a
            key={n.href}
            href={n.href}
            className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.15em] text-black/60 hover:text-black transition-all duration-300"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            <span className="w-4 h-[1.5px] bg-black/20 group-hover:w-8 group-hover:bg-black transition-all duration-300 inline-block" />
            {isEn ? n.labelEN : n.labelPT}
          </a>
        ))}
      </nav>

      {/* ── Mobile Top Menu ── */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-white/95 backdrop-blur-lg border-b border-black/8 px-4 py-3.5 flex justify-start items-center gap-5 overflow-x-auto lg:hidden pr-24 shadow-sm shadow-black/[0.02]">
        {navLinks.map((n) => (
          <a key={n.href} href={n.href} className="text-[11px] font-bold uppercase tracking-[0.08em] whitespace-nowrap text-black/50 hover:text-black transition-colors">
            {isEn ? n.labelEN : n.labelPT}
          </a>
        ))}
      </nav>

      {/* ── Floating Language Toggle ── */}
      <div className="fixed top-3 right-4 lg:top-8 lg:right-10 z-50">
        <LanguageToggle />
      </div>

      <main className="min-h-screen bg-white text-black font-sans selection:bg-black/10 relative overflow-hidden pb-32 pt-16 lg:pt-0" id="inicio">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none fixed" />

        <div className="relative z-10 mx-auto max-w-[1000px] px-6 pt-24 lg:pt-40 ml-auto lg:mr-auto lg:pl-32">

          {/* ── 1. HERO ── */}
          <section className="mb-48">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative h-20 w-20 md:h-24 md:w-24 overflow-hidden rounded-full ring-2 ring-black/5 mb-10 shadow-xl shadow-black/5"
            >
              <Image src="/images/perfil.png" alt="Thales Miguel" fill sizes="96px" className="object-cover object-[center_20%]" />
            </motion.div>

            <h1 className="text-4xl md:text-[52px] lg:text-[56px] leading-[0.95] tracking-tighter overflow-hidden flex flex-wrap gap-x-3 md:gap-x-4 max-w-5xl">
              <span className="block overflow-hidden pb-2">
                <motion.span custom={0} initial="hidden" animate="visible" variants={wordVariants} className="inline-block text-[#cccccc] font-normal">Thales</motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span custom={1} initial="hidden" animate="visible" variants={wordVariants} className="inline-block font-black text-black">Miguel.</motion.span>
              </span>
              <br className="hidden md:block w-full" />
              <span className="block overflow-hidden pb-4">
                <motion.span custom={2} initial="hidden" animate="visible" variants={wordVariants} className="inline-block text-[#cccccc] font-normal">{isEn ? "Engineering," : "Engenharia,"}</motion.span>
              </span>
              <span className="block overflow-hidden pb-4">
                <motion.span custom={3} initial="hidden" animate="visible" variants={wordVariants} className="inline-block font-black text-black">{isEn ? "strategy &" : "estratégia e"}</motion.span>
              </span>
              <span className="block overflow-hidden pb-4">
                <motion.span custom={4} initial="hidden" animate="visible" variants={wordVariants} className="inline-block font-black text-black">{isEn ? "technology." : "tecnologia."}</motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-10 text-xl md:text-2xl text-neutral-500 max-w-2xl leading-relaxed tracking-tight"
            >
              {isEn ? (
                <><strong className="text-black font-semibold">Product Manager · Aeronautical Mechanical Engineering Student at UNIFEI.</strong><br />I apply an engineer&apos;s mindset to solve real problems.</>
              ) : (
                <><strong className="text-black font-semibold">Product Manager · Estudante de Eng. Mecânica Aeronáutica na UNIFEI.</strong><br />Aplico pensamento de engenheiro para resolver problemas reais.</>
              )}
            </motion.p>

          </section>

          {/* ── 2. SOBRE ── */}
          <section className="mb-48" id="sobre">
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl tracking-tight mb-16 flex flex-wrap gap-x-3 gap-y-1"
            >
              <span className="font-normal text-[#cccccc]">{isEn ? "About" : "Sobre"}</span>
              <span className="font-black text-black">{isEn ? "me." : "mim."}</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-16 text-lg md:text-xl text-neutral-600 leading-relaxed"
            >
              {isEn ? (
                <>
                  <p>
                    I&apos;m a <strong className="text-black">Product Manager</strong> and <strong className="text-black">Aeronautical Mechanical Engineering student at UNIFEI</strong>. My journey was never a straight line, and honestly, I think that&apos;s the best part of it.
                    <br /><br />
                    I started with engineering, moved through technology, dove deep into product strategy and marketing. At every turn, I carried the same thing with me: <strong className="text-black">an obsession with solving real problems</strong>. This winding path turned me into a 360° professional who can move between code, design, strategy, and execution without asking permission.
                  </p>
                  <p>
                    Outside of work, I&apos;m a self-declared nerd and space exploration enthusiast (yes, I watch rocket launches like some people watch championship finals). I believe the same curiosity that makes me want to understand how a jet engine works is the one that drives me to build products people actually use.
                    <br /><br />
                    <strong className="text-black">If you&apos;re looking for someone who thinks like an engineer, executes like a builder, and understands the business side, let&apos;s talk.</strong>
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Sou <strong className="text-black">Product Manager</strong> e estudante de <strong className="text-black">Engenharia Mecânica Aeronáutica na UNIFEI</strong>. Minha trajetória nunca foi uma linha reta, e honestamente, acho que isso é o melhor dela.
                    <br /><br />
                    Comecei pela engenharia, passei por tecnologia, mergulhei em estratégia de produto e marketing. Em cada curva, levei comigo a mesma coisa: <strong className="text-black">a obsessão por resolver problemas reais</strong>. Esse caminho meio torto me transformou num profissional 360°, que consegue transitar entre código, design, estratégia e execução sem pedir licença.
                  </p>
                  <p>
                    Fora do trabalho, sou fã declarado do universo nerd e entusiasta da exploração espacial (sim, eu acompanho lançamento de foguete como quem assiste final de campeonato). Acredito que a mesma curiosidade que me faz querer entender como um motor a jato funciona é a que me faz querer construir produtos que as pessoas realmente usam.
                    <br /><br />
                    <strong className="text-black">Se você está procurando alguém que pensa como engenheiro, executa como builder e entende o lado do negócio, vamos conversar.</strong>
                  </p>
                </>
              )}
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="mt-20"
            >
              <h3 className="text-sm uppercase tracking-widest font-bold mb-8 text-black/40">{isEn ? "Technical Skills" : "Habilidades Técnicas"}</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {skills.map((s) => (
                  <div key={s.category}>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">{s.category}</span>
                    <div className="flex flex-wrap gap-2">
                      {s.items.map((item) => (
                        <span key={item} className="px-4 py-1.5 bg-neutral-100/80 border border-black/5 text-neutral-700 rounded-full text-[11px] font-semibold">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* ── SERVIÇOS ── */}
          <section className="mb-48" id="servicos">
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl tracking-tight mb-16 flex flex-wrap gap-x-3 gap-y-1"
            >
              <span className="font-normal text-[#cccccc]">{isEn ? "My" : "Meus"}</span>
              <span className="font-black text-black">{isEn ? "Services." : "Serviços."}</span>
            </motion.h2>

            <motion.a
              href="/marketing"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="group relative block bg-white border border-black/[0.06] rounded-[24px] p-10 md:p-14 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-neutral-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-8 max-w-2xl">
                {isEn
                  ? "I design high-conversion landing pages, manage paid traffic campaigns across Google, Meta, LinkedIn & TikTok, and build AI-powered automations to scale operations."
                  : "Crio landing pages de alta conversão, gerencio campanhas de tráfego pago em Google, Meta, LinkedIn e TikTok, e construo automações com IA para escalar operações."}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["Landing Pages", isEn ? "Paid Traffic" : "Tráfego Pago", isEn ? "Automation & AI" : "Automação & IA", "UI/UX", "CRO"].map(tag => (
                  <span key={tag} className="px-4 py-1.5 border border-black/10 bg-white rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-500">{tag}</span>
                ))}
              </div>

              <span className="text-sm font-bold uppercase tracking-widest text-black/30 group-hover:text-black transition-colors duration-300 flex items-center gap-3">
                {isEn ? "See my marketing portfolio" : "Ver meu portfólio de marketing"}
                <span className="h-10 w-10 rounded-full border border-black/10 bg-white flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black group-hover:scale-110 transition-all duration-500">↗</span>
              </span>
            </motion.a>
          </section>

          {/* ── 3. EXPERIÊNCIA ── */}
          <section className="mb-48" id="experiencia">
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl tracking-tight mb-16 flex flex-wrap gap-x-3 gap-y-1"
            >
              <span className="font-normal text-[#cccccc]">{isEn ? "My" : "Minha"}</span>
              <span className="font-black text-black">{isEn ? "Experience." : "Experiência."}</span>
            </motion.h2>

            {/* Professional */}
            <div className="mb-16">
              <h3 className="text-sm uppercase tracking-widest font-bold mb-10 text-black/40">{isEn ? "Professional" : "Profissional"}</h3>
              <div className="flex flex-col border-t border-black/10">
                {experience.map((exp, i) => (
                  <motion.div
                    key={exp.role + exp.period}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.08, duration: 0.6, type: "spring", stiffness: 100 }}
                    className="group py-8 md:py-10 border-b border-black/10 grid md:grid-cols-[200px_1fr] gap-4 md:gap-12"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-bold text-black">{exp.company}</span>
                      <span className="text-xs text-neutral-400 font-mono">{exp.period}</span>
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-3 group-hover:translate-x-2 transition-transform duration-300">{exp.role}</h4>
                      <p className="text-neutral-500 leading-relaxed text-[15px]">{isEn ? exp.descEN : exp.descPT}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Academic */}
            <div>
              <h3 className="text-sm uppercase tracking-widest font-bold mb-10 text-black/40">{isEn ? "Academic & Research" : "Acadêmico & Pesquisa"}</h3>
              <div className="flex flex-col border-t border-black/10">
                {academicExp.map((exp, i) => (
                  <motion.div
                    key={exp.role + exp.period}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.08, duration: 0.6, type: "spring", stiffness: 100 }}
                    className="group py-8 md:py-10 border-b border-black/10 grid md:grid-cols-[200px_1fr] gap-4 md:gap-12"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-bold text-black">{exp.company}</span>
                      <span className="text-xs text-neutral-400 font-mono">{exp.period}</span>
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-3 group-hover:translate-x-2 transition-transform duration-300">{exp.role}</h4>
                      <p className="text-neutral-500 leading-relaxed text-[15px]">{isEn ? exp.descEN : exp.descPT}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 4. PROJETOS ── */}
          <section className="mb-48" id="projetos">
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl tracking-tight mb-16 flex flex-wrap gap-x-3 gap-y-1"
            >
              <span className="font-normal text-[#cccccc]">{isEn ? "Open" : "Projetos"}</span>
              <span className="font-black text-black">{isEn ? "Projects." : "Abertos."}</span>
            </motion.h2>

            <div className="flex flex-col border-t border-black/10">
              {projects.map((p, i) => (
                <motion.a
                  key={p.num}
                  href={p.href}
                  target={p.href.startsWith("http") ? "_blank" : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
                  className="group flex flex-col md:flex-row md:items-center justify-between py-10 md:py-12 border-b border-black/10 hover:px-8 transition-all duration-500 cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-neutral-50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] -z-10" />
                  <div className="flex items-center gap-6 mb-6 md:mb-0">
                    <span className="text-neutral-300 font-bold font-mono text-sm tracking-widest">{p.num}</span>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:translate-x-4 transition-transform duration-500 ease-out">{p.title}</h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 md:gap-8">
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {p.tags.map(tag => (
                        <span key={tag} className="px-3 md:px-4 py-1.5 border border-black/10 bg-white rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-500 shadow-sm">{tag}</span>
                      ))}
                    </div>
                    <span className="h-12 w-12 md:h-14 md:w-14 rounded-full border border-black/10 bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white group-hover:border-black group-hover:scale-110 transition-all duration-500">↗</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </section>

          {/* ── 5. ARTIGOS ── */}
          <section className="mb-48" id="artigos">
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl tracking-tight mb-16 flex flex-wrap gap-x-3 gap-y-1"
            >
              <span className="font-normal text-[#cccccc]">{isEn ? "My" : "Meus"}</span>
              <span className="font-black text-black">{isEn ? "Articles." : "Artigos."}</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((art, i) => (
                <motion.a
                  key={art.title}
                  href={art.href}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.15, duration: 0.8, type: "spring", stiffness: 80 }}
                  className="group h-full"
                >
                  <TiltCard intensity={8} className="h-full bg-white border border-black/[0.06] rounded-[32px] p-8 md:p-10 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col">
                    <div className="flex justify-between items-start mb-12">
                      <div className="flex items-center gap-4 text-xs md:text-sm font-mono tracking-tighter text-neutral-400">
                        <span>{art.date}</span>
                        <span className="w-1 h-1 rounded-full bg-black/20" />
                        <span>{art.readTime} reading</span>
                      </div>
                      <span className="text-xl opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">↗</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 group-hover:text-neutral-600 transition-colors duration-300">{art.title}</h3>
                  </TiltCard>
                </motion.a>
              ))}
            </div>
          </section>

          {/* ── 6. LINKS / ONDE ENCONTRAR ── */}
          <section className="mb-48" id="links">
            <div className="grid sm:grid-cols-2 gap-16 border-t border-black/10 pt-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-sm uppercase tracking-widest font-bold mb-8 text-black/40">{isEn ? "Where to find me" : "Onde me encontrar"}</h3>
                <div className="flex flex-col gap-5">
                  {socials.map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="group flex flex-col border-b border-black/5 pb-3">
                      <span className="text-lg font-bold text-black group-hover:text-black/60 transition-colors mb-1">{s.label}</span>
                      <span className="text-sm font-medium text-neutral-400 group-hover:text-neutral-600 transition-colors">{s.handle}</span>
                    </a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-sm uppercase tracking-widest font-bold mb-8 text-black/40">{isEn ? "Useful Links" : "Links Úteis"}</h3>
                <div className="flex flex-col gap-5">
                  {usefulLinks.map(s => (
                    <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : "_self"} rel="noreferrer" className="group flex items-center justify-between border-b border-black/5 pb-4 pt-1">
                      <span className="text-base font-bold text-black group-hover:text-black/60 transition-colors pr-2">{s.label}</span>
                      <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-sm font-bold">↗</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* ── 7. CONTATO ── */}
          <section className="mb-20" id="contato">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="bg-[#050505] rounded-[2rem] md:rounded-[4rem] text-white px-8 py-20 md:p-32 text-center flex flex-col items-center relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none" />

              <h2 className="text-5xl md:text-8xl tracking-tighter font-black mb-8 max-w-3xl leading-[0.95] z-10">
                {isEn ? "Got a project or challenge on the radar?" : "Tem um projeto ou desafio no radar?"}
              </h2>
              <p className="text-white/50 text-xl md:text-2xl mb-16 max-w-2xl z-10 leading-relaxed font-light">
                {isEn ? "Send a message and let's talk about engineering, design, or traffic. I usually respond within an hour." : "Mande uma mensagem e vamos conversar sobre engenharia, design ou tráfego. Geralmente respondo em menos de 1h."}
              </p>

              <div className="flex flex-wrap justify-center gap-6 z-10">
                <MagneticButton>
                  <a href="https://wa.me/5535984128420" target="_blank" rel="noreferrer" className="relative flex items-center gap-4 rounded-full bg-white px-10 py-5 text-base font-bold text-black transition-transform hover:scale-105 shadow-[0_20px_40px_-15px_rgba(255,255,255,0.2)] active:scale-95">
                    {isEn ? "Talk via WhatsApp" : "Falar via WhatsApp"}
                    <span className="bg-black/10 text-black rounded-full h-6 w-6 flex items-center justify-center text-xs">↗</span>
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a href="mailto:thalesmiguel.tech@gmail.com" className="relative flex items-center gap-4 rounded-full border border-white/20 bg-transparent px-10 py-5 text-base font-bold text-white transition-colors hover:bg-white/10 active:scale-95 shadow-xl">
                    {isEn ? "Send me an email" : "Me enviar email"}
                  </a>
                </MagneticButton>
              </div>
            </motion.div>
          </section>

          <div className="text-center pb-20">
            <p className="text-neutral-400 font-medium tracking-tight">© 2026 Thales Miguel — {isEn ? "Where design and code meet." : "O design e o código se encontram aqui."}</p>
          </div>

        </div>
      </main>
    </>
  );
}
