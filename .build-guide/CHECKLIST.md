# Checklist de Build — Landing Page Thales Miguel

> Tema: "Thales Miguel — Solucoes de Tecnologia e Marketing"
> Servicos: Landing pages, Trafego pago, Automacoes (CRM, SaaS, WhatsApp, prospeccao ativa, automacoes personalizadas)
> Design ref: https://launchfolio.framer.website/
> Pasta: `/Users/thalesmiguel/Documents/Trabalho/thales/site/`

## Como retomar
> Cole para o Claude: "Leia `/Users/thalesmiguel/Documents/Trabalho/thales/site/.build-guide/CHECKLIST.md` e continue de onde parou."

---

## Etapa 0 — Setup
- [x] Plano completo criado (`LANDING_PAGE_PLAN.md`)
- [x] Screenshots do site referencia capturados via Chrome
- [x] Estrutura do DOM extraida via read_page
- [x] Pastas criadas (components/, public/images/, .build-guide/)
- [x] Instalar framer-motion
- [x] Modificar layout.tsx (fonte Inter)
- [x] Reescrever globals.css (novo design system)

## Etapa 1 — Componentes (criar em app/components/)
- [x] Navbar.tsx
- [x] Hero.tsx
- [x] SocialProof.tsx
- [x] Projects.tsx
- [x] TestimonialQuote.tsx
- [x] Services.tsx
- [x] About.tsx
- [x] Pricing.tsx
- [x] LogoTicker.tsx
- [x] TestimonialsGrid.tsx
- [x] FAQ.tsx
- [x] Blog.tsx
- [x] Footer.tsx
- [x] ContactBar.tsx (floating)

## Etapa 2 — Montagem
- [x] Reescrever page.tsx (importar todos componentes)
- [x] Testar `npm run build` sem erros
- [x] Testar visual no browser local (preview OK — todas secoes renderizando)

## Etapa 3 — Deploy
- [x] git add + commit (00d00c0)
- [x] git push origin main
- [ ] Verificar deploy no Vercel

## Etapa 4 — Refinamentos (futuro)
- [ ] Adicionar fotos reais (avatar Thales, screenshots de projetos)
- [ ] Substituir depoimentos placeholder por reais
- [ ] Adicionar links reais (WhatsApp, Instagram, LinkedIn, email)
- [ ] Adicionar animacoes de scroll (framer-motion InView)
- [ ] Blog com posts reais ou remover secao
- [ ] SEO: Open Graph images, favicon personalizado
- [ ] Mobile: testar em dispositivos reais

---

## Notas de Progresso

### Sessao 1 (planejamento — Opus)
- Capturado design completo do LaunchFolio via Chrome
- Criado plano detalhado em LANDING_PAGE_PLAN.md
- Disco ficou cheio, parou. Retomou apos limpeza.
- Instalado framer-motion, criados todos 14 componentes
- Build passou sem erros, preview local OK
- Todas as secoes: Navbar, Hero, SocialProof, Projects, TestimonialQuote, Services, About, Pricing, LogoTicker, TestimonialsGrid, FAQ, Blog, Footer, ContactBar
- Design elements: frame coral, heading gray/black split, section separators, dark cards, footer com "THALES" gigante
