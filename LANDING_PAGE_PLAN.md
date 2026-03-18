# Plano Completo — Landing Page Thales Miguel

> **Objetivo**: Recriar a landing page com design idêntico ao template LaunchFolio (https://launchfolio.framer.website/) adaptado para os 3 serviços do Thales: landing pages, tráfego pago e automações com IA.
>
> **Stack**: Next.js 16 + App Router + TypeScript + Tailwind CSS 4
> **Deploy**: Push para `Rodriguestmo/portifolio` → Vercel auto-deploy
> **Pasta local**: `/Users/thalesmiguel/Documents/Trabalho/thales/site/`

---

## Design System (extraído do LaunchFolio)

### Cores
```
--bg-primary: #ffffff (fundo principal das seções)
--bg-secondary: #f7f7f7 (fundo alternado de seções)
--bg-dark: #000000 / #111111 (footer, cards dark como "Single Project")
--text-primary: #000000 (headings)
--text-secondary: #666666 / #888888 (body text, subtítulos)
--text-muted: #999999 (labels, metadados)
--accent: #000000 (botões primários, ícones de serviço)
--border: rgba(0,0,0,0.08) (bordas sutis entre seções)
--border-card: rgba(0,0,0,0.06) (bordas de cards)
--surface-card: #ffffff (cards de testimonial, pricing)
```

A página toda tem uma borda sutil coral/salmon (`#ff6b54` ~3px) nas laterais esquerda e direita — efeito sutil tipo "frame".

### Tipografia
```
--font-heading: "Inter", sans-serif (weight 400 para palavras cinza, 900 para palavras pretas nos títulos)
--font-body: "Inter", sans-serif (weight 400-500)
```

**Padrão de headings**: Títulos grandes usam palavras alternando entre cinza claro (#ccc) e preto (#000). Ex: "Design that" (cinza) + "delivers results." (preto bold). Esse padrão se repete em TODAS as seções.

### Espaçamento e Layout
- Container máximo: ~1080-1160px centralizado
- Padding lateral: ~80px desktop, ~24px mobile
- Gap entre seções: ~120-160px
- Border-radius dos cards: 16-20px
- Seções separadas por linhas horizontais sutis (1px, rgba(0,0,0,0.08))

---

## Estrutura de Seções (ordem exata)

### 1. NAVBAR (sticky top)
**Layout**: Barra horizontal centralizada com cantos arredondados, fundo branco com sombra sutil.
- **Esquerda**: Avatar circular (foto do Thales) + "Thales Miguel" (font-weight 600)
- **Centro/Direita**: Links: "Projetos" | "Serviços" | "Preços" | "Blog"
- **Extrema direita**: Botão "Contato" com borda arredondada preta

**Adaptação Thales**:
- Links: "Projetos" → `#projetos`, "Serviços" → `#servicos`, "Preços" → `#precos`, "Contato" → `#contato`
- Remover "Blog" (não tem blog por enquanto)
- Avatar: usar placeholder com iniciais "TM" ou uma foto

### 2. HERO
**Layout**: Seção full-width, padding generoso top/bottom (~160px).
- **Esquerda (~55%)**:
  - Badge pill: "🟢 Disponível para projetos" (bolinha verde + texto)
  - Heading gigante (~72-80px): Palavras alternando cinza/preto
    - "Tecnologia que" (cinza #ccc)
    - "gera resultado." (preto bold)
  - Subtítulo (2 linhas, ~18px): primeira frase em bold, segunda em cinza
    - **"Soluções estratégicas que impulsionam crescimento,"** não só aparência.
    - "Eu crio tudo que sua marca precisa para atrair clientes e transformá-los em vendas."
  - CTA: Botão pill preto com avatar + "Fale comigo" (estilo do original com foto + seta)
  - Social proof: Stack de 4 avatares + ★★★★★ + "Clientes satisfeitos"

- **Direita (~45%)**:
  - Stack de mockups/screenshots de projetos em dispositivos (tablets/laptops empilhados com rotação sutil, tipo 3D stack).
  - **Para MVP**: usar cards/placeholders estilizados que representem os serviços (landing page mockup, dashboard de ads, chat WhatsApp)

### 3. SOCIAL PROOF BAR (entre hero e projects)
**Layout**: Faixa estreita com borda top/bottom sutil.
- Avatares empilhados + estrelas + "Clientes satisfeitos"
- Simples, 1 linha.

### 4. PROJETOS ("Latest Projects")
**Layout**: Heading grande + grid 2x2 de cards.
- **Heading**: "Últimos" (cinza) + "Projetos" (preto) — fonte gigante (~64px)
- **Grid 2x2**: Cada card tem:
  - Screenshot/mockup do projeto (imagem grande, border-radius 16px)
  - Nome do projeto em bold
  - Categoria em cinza
  - "Ver Projeto →" link
- **Link abaixo**: "Ver todos os projetos →"

**Conteúdo Thales** (4 projetos placeholder):
1. "Prospector Bot" — Automação com IA (screenshot do CRM Notion ou mockup WhatsApp)
2. "Dra. Camila Sutilo" — Landing Page (screenshot da landing page)
3. "Dashboard Ads" — Tráfego Pago (mockup de painel de métricas)
4. "Bot Atendimento" — Automação (mockup do fluxo)

### 5. TESTIMONIAL QUOTE (destaque único)
**Layout**: Seção com fundo #f7f7f7, texto grande centralizado.
- Aspas grandes, fonte ~28-32px, itálico
- Frase com palavras-chave em **bold**
- Foto do autor + Nome + Cargo abaixo

**Conteúdo**: Depoimento placeholder (substituir com depoimento real depois)

### 6. SERVIÇOS ("Services that supercharge your business")
**Layout**: 2 colunas.
- **Esquerda**:
  - Heading grande: "Serviços que" (cinza) + "aceleram" (cinza) + "seu negócio." (preto)
  - "Minha stack" label + row de ícones de ferramentas (Figma, Meta Ads, Google Ads, WhatsApp, Notion, Claude, Python)

- **Direita**: Lista vertical de serviços, cada um com:
  - Ícone circular preto (SVG simples)
  - Nome do serviço em bold (~18px)

  Serviços:
  1. Landing Pages
  2. Tráfego Pago
  3. Automações com IA
  4. WhatsApp Business
  5. CRM & Integrações
  6. Consultoria Digital

### 7. ABOUT / BIO ("Designing experiences that solve real problems")
**Layout**: 2 colunas.
- **Esquerda**:
  - Social links com ícones (Instagram, LinkedIn, WhatsApp) — cada um com ícone + contagem/label
  - "Thales Miguel" (nome bold)
  - "Especialista em Marketing Digital" (subtítulo cinza)
  - "Minha trajetória" label
  - Cards de experiência: Empresa | Cargo | Período
  - "Ver mais ▼"

- **Direita**:
  - Foto grande do Thales (retrato, border-radius 16px)
  - 2-3 parágrafos de bio com frases em **bold** como destaque (mesmo padrão do original):
    - "Eu foco em criar soluções digitais que servem a um propósito real,"
    - "Sou perfeccionista quando se trata dos detalhes,"
  - Assinatura estilizada (pode ser o nome em fonte cursiva ou SVG)

**Conteúdo Bio Thales**:
- Focado em como transformou o marketing digital para profissionais de saúde
- Experiência com landing pages + ads + automação
- Tom natural, direto

### 8. PRICING ("Simple pricing. Standout designs.")
**Layout complexo — 3 partes**:

**Parte 1 — Header**:
- Heading: "Preços simples." (cinza) + "Resultados reais." (preto)
- Subtítulo: "Custos claros, sem taxas escondidas." + "Escolha entre pacotes mensais ou projetos individuais."

**Parte 2 — 3 Steps (ícone + título + descrição)**:
- Step 1: 🔄 "Contrate" — "Escolha o pacote ideal e comece a solicitar."
- Step 2: 💬 "Solicite" — "Peça qualquer serviço que ofereço, de landing page a automação."
- Step 3: ✅ "Receba" — "Receba sua entrega em média de 5-7 dias úteis."

**Parte 3 — Pricing Cards** (lado a lado):

**Esquerda (dark card background)**:
- Tag: "Cancele quando quiser"
- "Serviços por assinatura" (cinza) + "para marcas que se movem rápido." (branco)
- 3D cursor icon
- "🟢 Vagas disponíveis"
- "Contrate hoje"
- "Pule o markup de agência e trabalhe direto com um especialista."

**Direita (card branco com borda)**:
- "Pacote Mensal"
- "Gestão completa de marketing digital." + "Ideal para demandas contínuas."
- "R$ 2.500" + "/ mês"
- Checklist 2 colunas:
  - ✓ Sem contratos
  - ✓ Pause quando quiser
  - ✓ Landing page inclusa
  - ✓ Gestão de tráfego
  - ✓ Relatórios semanais
  - ✓ Automações de IA
- Botão: "Começar →"

**Abaixo (barra preta full-width)**:
- "Projeto Único"
- "Serviço completo para qualquer escopo de projeto." + "Ideal para demandas pontuais."
- ✓ Escopo definido | ✓ Prazo fixo | ✓ 3 rodadas de revisão | ✓ Updates por etapa
- Botão: "Pedir orçamento"

### 9. TRUSTED BY (logo ticker)
**Layout**: Faixa com "Parceiros de" + "confiança" (bold). Marquee horizontal infinito de logos.
- Para MVP: usar logos de ferramentas que o Thales usa (Meta, Google, WhatsApp, Notion, etc.)

### 10. TESTIMONIALS GRID
**Layout**: Heading + grid.
- Heading: "Veja o que" (cinza) + "meus clientes" (cinza) + "têm a" (cinza) + "dizer." (preto)
- Social proof badge: avatares + "Clientes satisfeitos"
- Grid 3 colunas, 2 rows = 6 testimonial cards
- Cada card: citação com frase-chave em **bold**, foto + nome + cargo

**Conteúdo**: 6 depoimentos placeholder (substituir com reais depois)

### 11. FAQ
**Layout**: 2 colunas.
- **Esquerda**:
  - Heading: "Suas perguntas" (cinza) + "respondidas." (preto)
  - Accordion numerado (01, 02, 03, 04, 05) com + para expandir

- **Direita**: Card sticky com:
  - Foto do Thales
  - "Ainda com dúvidas?" (cinza)
  - "Agende uma call gratuita." (preto bold)
  - Texto explicativo
  - Botão: "Agendar agora" (preto pill com ícone calendário)

**Perguntas** (adaptar do conteúdo existente):
1. "Você faz só a página ou a operação completa?"
2. "Automações de IA não deixam o atendimento robótico?"
3. "Posso contratar tráfego pago sem automação?"
4. "Isso funciona para qual tipo de negócio?"
5. "Qual o prazo médio de entrega?"

### 12. BLOG SECTION
**Layout**: Heading + grid 3 colunas.
- Heading: "Do meu" (cinza) + "blog," (cinza) + "insights de" (cinza) + "marketing." (preto)
- "Ver todos →" link
- 3 cards: imagem grande + título + data + autor

**Para MVP**: 3 posts placeholder ou omitir seção inteira (Thales não tem blog ainda). **Decisão**: Manter a estrutura mas com conteúdo placeholder — fácil de preencher depois.

### 13. FLOATING CONTACT BAR (sticky bottom center)
**Layout**: Pill flutuante no bottom center da tela.
- "Fale comigo" + "WhatsApp ou e-mail"
- 2 ícones: ✉️ (email) + 📅 (agendar call)

### 14. FOOTER
**Layout**: Full-width, fundo preto (#000/#111).
- **Heading gigante**: "Vamos" (branco) + "criar" (cinza) / "construir" (cinza, alternando) + "resultados incríveis juntos." (cinza)
- **3 colunas**:
  - Email: label "E-mail" + link do email
  - WhatsApp: label "WhatsApp" + "Fale agora"
  - Social: label "Social" + ícones (Instagram, LinkedIn)
- **Linha separadora**
- **Menu**: links de navegação (Projetos, Serviços, Preços)
- **Legal**: Termos de serviço, Política de privacidade
- **Copyright**: "© 2026 Thales Miguel"
- **Nome gigante**: "THALES" em fonte enorme (~200px+), cortado na parte inferior, cor cinza escuro (#222)

---

## Arquivos a Criar/Modificar

### Estrutura de arquivos
```
app/
├── layout.tsx          ← MODIFICAR (fontes: Inter)
├── globals.css         ← REESCREVER COMPLETO (novo design system)
├── page.tsx            ← REESCREVER COMPLETO (todas as seções)
├── components/
│   ├── Navbar.tsx      ← NOVO
│   ├── Hero.tsx        ← NOVO
│   ├── Projects.tsx    ← NOVO
│   ├── Testimonial.tsx ← NOVO (quote único)
│   ├── Services.tsx    ← NOVO
│   ├── About.tsx       ← NOVO
│   ├── Pricing.tsx     ← NOVO
│   ├── LogoTicker.tsx  ← NOVO
│   ├── Testimonials.tsx← NOVO (grid)
│   ├── FAQ.tsx         ← NOVO
│   ├── Blog.tsx        ← NOVO
│   ├── ContactBar.tsx  ← NOVO (floating)
│   └── Footer.tsx      ← NOVO
public/
├── images/
│   ├── avatar.jpg      ← Foto do Thales (placeholder por agora)
│   ├── project-1.jpg   ← Screenshots de projetos (placeholders)
│   ├── project-2.jpg
│   ├── project-3.jpg
│   ├── project-4.jpg
│   ├── testimonial-1.jpg ← Fotos de clientes (placeholders)
│   ├── testimonial-2.jpg
│   ├── testimonial-3.jpg
│   └── blog-1.jpg, blog-2.jpg, blog-3.jpg
```

### Dependências adicionais necessárias
```bash
# Nenhuma extra obrigatória — tudo com Tailwind CSS 4 + Next.js nativo
# Opcionais para polish:
npm install framer-motion    # Animações suaves (fade-in on scroll, etc)
```

---

## CSS Global (globals.css) — Especificação

```css
/* Reset e base */
- Fundo: #ffffff
- Cor texto: #000000
- Font: Inter (400, 500, 600, 700, 900)
- Smooth scroll
- Selection color: rgba(0,0,0,0.08)

/* Frame border (efeito coral nas laterais) */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  border: 3px solid #ff6b54;
  pointer-events: none;
  z-index: 9999;
  border-radius: 12px;
  margin: 4px;
}

/* Seções separadas por border-top sutil */
section + section {
  border-top: 1px solid rgba(0,0,0,0.06);
}

/* Heading pattern: palavras gray vs black */
.heading-gray { color: #cccccc; font-weight: 400; }
.heading-black { color: #000000; font-weight: 900; }

/* Cards */
.card { border-radius: 16px; border: 1px solid rgba(0,0,0,0.06); }

/* Dark sections (pricing single project, footer) */
.bg-dark { background: #000; color: #fff; }
```

---

## Padrão Visual dos Headings (MUITO IMPORTANTE)

Cada seção tem um heading grande (~48-72px) onde algumas palavras são cinza claro (#ccc, weight 400) e outras são preto (#000, weight 900). Exemplos:

| Seção | Cinza | Preto |
|-------|-------|-------|
| Hero | "Tecnologia que" | "gera resultado." |
| Projects | "Últimos" | "Projetos" |
| Services | "Serviços que aceleram seu" | "negócio." |
| About | "Criando experiências que resolvem" | "problemas reais." |
| Pricing | "Preços simples." | "Resultados reais." |
| Testimonials | "Veja o que meus clientes têm a" | "dizer." |
| FAQ | "Suas perguntas" | "respondidas." |
| Blog | "Do meu blog, insights de" | "marketing." |
| Footer | "Vamos criar resultados" | (cinza) / "Lets" (branco) |

**Implementação**: Usar `<span>` com classes `.text-[#ccc]` e `.text-black font-black` dentro dos `<h2>`.

---

## Animações

1. **Fade-in on scroll**: Cada seção entra com opacity 0→1 + translateY 20px→0 quando entra no viewport
2. **Navbar**: Sticky com backdrop-blur quando scrollou
3. **Project cards**: Hover → scale sutil (1.02) + sombra
4. **Service list items**: Hover → leve destaque
5. **FAQ accordion**: Smooth expand/collapse
6. **Contact bar**: Slide-up na entrada, sempre visível
7. **Footer "THALES"**: Texto gigante com overflow hidden, só metade superior visível
8. **Testimonial cards**: Hover → elevação sutil
9. **Logo ticker**: Marquee CSS infinito

**Para implementar sem framer-motion**: Usar CSS animations + Intersection Observer nativo (ou `useInView` do React se adicionar framer-motion).

---

## Conteúdo Textual Completo

### Hero
- Badge: "Disponível para projetos"
- H1: "Tecnologia que gera resultado."
- Sub bold: "Soluções estratégicas que impulsionam crescimento, não só aparência."
- Sub gray: "Eu crio tudo que sua marca precisa para atrair clientes e transformá-los em vendas."
- CTA: "Fale comigo"
- Social: "Clientes satisfeitos"

### Services (lista)
1. Landing Pages
2. Tráfego Pago (Meta & Google)
3. Automações com IA
4. WhatsApp Business
5. CRM & Integrações
6. Consultoria Digital

### Tech stack icons
Meta Ads, Google Ads, WhatsApp, Notion, Claude AI, Python, Figma, Vercel

### Pricing
**Pacote Mensal**: R$ 2.500/mês
- Sem contratos ou compromissos
- Pause ou cancele quando quiser
- Landing page inclusa
- Gestão de tráfego pago
- Relatórios semanais
- Automações de IA

**Projeto Único**: Sob consulta
- Escopo claramente definido
- Prazo fixo
- 3 rodadas de revisão
- Updates por milestone

### FAQ
1. "Você faz só a página ou a operação completa?" → "Os dois cenários fazem sentido. Posso assumir só a landing page ou montar a lógica completa com mídia, tracking e automação."
2. "Automações de IA não deixam o atendimento robótico?" → "Se forem mal configuradas, sim. A ideia aqui é usar IA para acelerar qualificação e contexto, sem matar naturalidade nem timing humano."
3. "Posso contratar tráfego pago sem automação?" → "Pode. Mas quando o gargalo está no pós-clique, só subir campanha resolve pouco. Eu prefiro alinhar a peça certa ao problema real."
4. "Isso funciona para qual tipo de negócio?" → "Especialistas, negócios locais, clínicas, prestadores de serviço e operações enxutas que precisam vender com mais previsibilidade."
5. "Qual o prazo médio de entrega?" → "Projetos simples saem em 1-2 semanas. Operações completas com landing page, tráfego e automação levam de 3-4 semanas para ficar no ar."

### Footer
- Email: thales@email.com (placeholder)
- WhatsApp: link do WhatsApp
- Social: Instagram, LinkedIn
- Menu: Projetos, Serviços, Preços
- Legal: Termos de serviço, Política de privacidade
- © 2026 Thales Miguel
- "THALES" gigante

---

## Instruções para o Sonnet

### Ordem de execução:
1. **Instalar framer-motion**: `npm install framer-motion`
2. **Modificar `layout.tsx`**: Trocar fontes para Inter (única fonte necessária, weights 400-900)
3. **Reescrever `globals.css`**: Novo design system completo (cores, tipografia, frame border, separadores)
4. **Criar pasta `components/`** dentro de `app/`
5. **Criar cada componente** na ordem das seções (Navbar → Hero → Projects → ... → Footer)
6. **Reescrever `page.tsx`**: Importar e montar todos os componentes na ordem
7. **Criar `public/images/`** com placeholders (gerar com SVG/CSS ou usar placeholder services)
8. **Testar build**: `npm run build` deve passar sem erros
9. **Push para GitHub**: `git add . && git commit && git push origin main` → deploy automático Vercel

### Regras de estilo:
- **NÃO** usar o design system atual (beige, Syne, orbs, etc.) — é um redesign COMPLETO
- Seguir o padrão LaunchFolio: fundo branco limpo, tipografia Inter, headings gray/black split
- Todas as imagens como placeholders (divs com gradientes ou emojis) — fácil substituir depois
- Mobile-first, responsivo em todos os breakpoints
- Código limpo, componentes separados, TypeScript strict

### O que NÃO mudar:
- `package.json` (exceto adicionar framer-motion)
- `next.config.ts`
- `tsconfig.json`
- `vercel.json`
- `postcss.config.mjs`

---

## Referência Visual Rápida

```
┌─────────────────────────────────────────────────┐
│  [🔴 coral frame border around entire page]      │
│                                                   │
│  ┌─ NAVBAR ─────────────────────────────────┐    │
│  │ 👤 Thales Miguel   Projetos Serviços ... │    │
│  └──────────────────────────────────────────┘    │
│                                                   │
│  ┌─ HERO ───────────────────────────────────┐    │
│  │ 🟢 Disponível        [Project mockups    │    │
│  │ Tecnologia que        stacked in 3D]     │    │
│  │ **gera resultado.**                       │    │
│  │ [Fale comigo]  👥★★★★★                   │    │
│  └──────────────────────────────────────────┘    │
│  ─────────────────────────────────────────────   │
│  👥 ★★★★★ Clientes satisfeitos                  │
│  ─────────────────────────────────────────────   │
│                                                   │
│  ┌─ PROJECTS ───────────────────────────────┐    │
│  │ Últimos **Projetos**                      │    │
│  │ ┌────────┐ ┌────────┐                    │    │
│  │ │ Proj 1 │ │ Proj 2 │                    │    │
│  │ └────────┘ └────────┘                    │    │
│  │ ┌────────┐ ┌────────┐                    │    │
│  │ │ Proj 3 │ │ Proj 4 │                    │    │
│  │ └────────┘ └────────┘                    │    │
│  │       Ver todos os projetos →             │    │
│  └──────────────────────────────────────────┘    │
│  ─────────────────────────────────────────────   │
│                                                   │
│  ┌─ TESTIMONIAL QUOTE ──────────────────────┐    │
│  │ bg: #f7f7f7                               │    │
│  │    "Citação com **palavras em bold**"     │    │
│  │         👤 Nome — Cargo                   │    │
│  └──────────────────────────────────────────┘    │
│  ─────────────────────────────────────────────   │
│                                                   │
│  ┌─ SERVICES ───────────────────────────────┐    │
│  │ Serviços que        ⚫ Landing Pages     │    │
│  │ aceleram seu        ⚫ Tráfego Pago      │    │
│  │ **negócio.**        ⚫ Automações IA     │    │
│  │                     ⚫ WhatsApp          │    │
│  │ Stack: 🔧🔧🔧🔧    ⚫ CRM              │    │
│  │                     ⚫ Consultoria       │    │
│  └──────────────────────────────────────────┘    │
│  ─────────────────────────────────────────────   │
│                                                   │
│  ┌─ ABOUT ──────────────────────────────────┐    │
│  │ 🔗🔗🔗 social    Texto bio com           │    │
│  │ 👤 Thales Miguel   **frases bold**       │    │
│  │ Especialista        como destaque.        │    │
│  │ ┌─ Work History ─┐ ✒️ Assinatura         │    │
│  │ │ KYMA  2022-now │                        │    │
│  │ └────────────────┘                        │    │
│  └──────────────────────────────────────────┘    │
│  ─────────────────────────────────────────────   │
│                                                   │
│  ┌─ PRICING ────────────────────────────────┐    │
│  │ Preços simples. **Resultados reais.**     │    │
│  │ 🔄 Contrate  💬 Solicite  ✅ Receba      │    │
│  │ ┌──────────┐ ┌─────────────────────┐     │    │
│  │ │ DARK BOX │ │ Pacote Mensal       │     │    │
│  │ │ Sub      │ │ R$ 2.500/mês       │     │    │
│  │ │ services │ │ ✓ features...       │     │    │
│  │ │ Contrate │ │ [Começar →]         │     │    │
│  │ └──────────┘ └─────────────────────┘     │    │
│  │ ┌─ DARK BAR: Projeto Único ──────────┐   │    │
│  │ │ ✓✓✓✓ features    [Pedir orçamento] │   │    │
│  │ └────────────────────────────────────┘   │    │
│  └──────────────────────────────────────────┘    │
│  ─────────────────────────────────────────────   │
│                                                   │
│  Parceiros de **confiança**                      │
│  [═══ logo ticker infinito ═══]                  │
│  ─────────────────────────────────────────────   │
│                                                   │
│  ┌─ TESTIMONIALS GRID ──────────────────────┐    │
│  │ Veja o que clientes têm a **dizer.**      │    │
│  │ ┌─────┐ ┌─────┐ ┌─────┐                  │    │
│  │ │ T1  │ │ T2  │ │ T3  │  (row 1)        │    │
│  │ └─────┘ └─────┘ └─────┘                  │    │
│  │ ┌─────┐ ┌─────┐ ┌─────┐                  │    │
│  │ │ T4  │ │ T5  │ │ T6  │  (row 2)        │    │
│  │ └─────┘ └─────┘ └─────┘                  │    │
│  └──────────────────────────────────────────┘    │
│  ─────────────────────────────────────────────   │
│                                                   │
│  ┌─ FAQ ────────────────────────────────────┐    │
│  │ Suas perguntas      ┌─────────────────┐  │    │
│  │ **respondidas.**     │ 👤 Still not    │  │    │
│  │ 01 Pergunta ──  +   │ sure? Book a    │  │    │
│  │ 02 Pergunta ──  +   │ free call.      │  │    │
│  │ 03 Pergunta ──  +   │ [Agendar →]     │  │    │
│  │ 04 Pergunta ──  +   └─────────────────┘  │    │
│  │ 05 Pergunta ──  +                        │    │
│  └──────────────────────────────────────────┘    │
│  ─────────────────────────────────────────────   │
│                                                   │
│  ┌─ BLOG ───────────────────────────────────┐    │
│  │ Do meu blog, insights de **marketing.**   │    │
│  │ ┌─────┐ ┌─────┐ ┌─────┐   [Ver todos]   │    │
│  │ │ B1  │ │ B2  │ │ B3  │                  │    │
│  │ └─────┘ └─────┘ └─────┘                  │    │
│  └──────────────────────────────────────────┘    │
│                                                   │
│  ┌─ FOOTER (bg: #000) ─────────────────────┐    │
│  │ **Vamos** criar resultados               │    │
│  │ incríveis juntos.                         │    │
│  │ Email  |  WhatsApp  |  Social            │    │
│  │ ─────────────────────────────────         │    │
│  │ Menu: links    Legal: links    © 2026    │    │
│  │         ████ THALES ████                  │    │
│  └──────────────────────────────────────────┘    │
│                                                   │
│         ┌─ FLOATING BAR (sticky) ─┐              │
│         │ Fale comigo  ✉️ 📅      │              │
│         └─────────────────────────┘              │
└─────────────────────────────────────────────────┘
```

---

## Checklist Final

- [ ] Fontes: Inter (400, 500, 600, 700, 900)
- [ ] Cores: branco, #f7f7f7, preto, #ccc, #666, coral frame
- [ ] Frame border coral nas laterais
- [ ] Heading pattern: gray/black split em TODAS as seções
- [ ] Separadores entre seções (border-top sutil)
- [ ] Navbar sticky com blur
- [ ] Hero com badge + heading + CTA + mockups
- [ ] Projects grid 2x2
- [ ] Testimonial quote centralizado
- [ ] Services 2-col com lista de serviços
- [ ] About com bio + work history + assinatura
- [ ] Pricing com steps + 2 plans + dark bar
- [ ] Logo ticker
- [ ] Testimonials grid 3x2
- [ ] FAQ accordion + sticky CTA card
- [ ] Blog 3 posts
- [ ] Footer dark com nome gigante
- [ ] Floating contact bar
- [ ] Mobile responsive
- [ ] Build sem erros
- [ ] Deploy via git push
