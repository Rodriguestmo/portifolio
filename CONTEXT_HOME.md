# CONTEXTO — Home pessoal (thalesmiguel.com)

## Objetivo
Criar uma home estilo **blog / currículo / linktree** para Thales Miguel.
O site vai ser usado para compartilhar artigos, projetos abertos e experiências.
É diferente da página de marketing (thalesmiguel.com/marketing).

---

## Estrutura de arquivos

```
app/
  page.tsx                        ← home pessoal (renderiza HomeClient)
  marketing/page.tsx              ← portfólio de marketing (conteúdo existente)
  components/
    home/
      HomeClient.tsx              ← COMPONENTE PRINCIPAL DA HOME (edite aqui)
    ...outros componentes do marketing
  context/
    LanguageContext.tsx           ← sistema de i18n PT/EN (usado pelo marketing)
```

---

## Design — visão e referências

### Estilo geral
- **Fundo**: preto/dark (`#0d0d0d` ou similar)
- **Tipografia**: monospace, tamanhos pequenos (xs/sm), hierarquia clara
- **Paleta**: neutros — branco para destaque, cinzas intermediários para texto, cinzas escuros para labels/números
- **Tom**: minimalista, técnico, mas legível — como um terminal bem organizado
- **Referências visuais**: rauno.me, paco.me, linktrees de devs indie

### Seções numeradas (conforme screenshot do usuário)
```
00. links
  00.1 minilab
  00.2 berolab
  00.3 meu setup
  00.4 what is it
01. sobre
02. projetos
03. marketing        ← link para /marketing
04. contato
05. links úteis
```

*Nota: no screenshot original tinha 02. media kit e 04. vídeos — o usuário removeu essas.*

### Interações desejadas
- Seção `00. links` abre/fecha (accordion) mostrando sub-itens
- Hover nos links muda a cor do texto (neutral-700 → neutral-100)
- Animações sutis de entrada (fade/slide suave)
- Sem cursor customizado, sem preloader, sem barra de scroll

---

## Conteúdo a preencher

### 00. links
Os 4 sub-links (`minilab`, `berolab`, `meu setup`, `what is it`) ainda não têm URLs definidas. São projetos/páginas que o usuário vai criar.

### 01. sobre
Texto curto explicando quem é Thales. Pode expandir — ele vai compartilhar artigos, projetos abertos, experiências.

### 02. projetos
Lista de projetos. Atualmente há 3:
- Dra. Camila Sutilo (camilasutilo.com)
- Geovanna Romeiro (geovanna-lp.web.app)
- Prospector Bot (sem URL pública ainda)

Futuramente vai crescer com mais projetos.

### 03. marketing
Apenas um link para `/marketing` com descrição de serviços.

### 04. contato
- Email: thalesmiguel.tech@gmail.com
- WhatsApp: +55 35 98412-8420
- Agendar call: calendar.app.google/v7s5H975BGwnriuZA

### 05. links úteis
Links externos relevantes.

---

## Stack técnica

- **Next.js** (App Router), **React**, **TypeScript**
- **Tailwind CSS v4** — classes utilitárias, use `text-neutral-*`, `bg-neutral-*`
- **Framer Motion** — animações (já instalado)
- **next/image** e **next/link** para imagens e navegação
- **Foto do usuário**: `/images/perfil.png` (já existe)

---

## O que já está feito

- [x] Estrutura básica de seções numeradas
- [x] Accordion de sub-links para seção 00
- [x] Layout responsivo com max-width centrado
- [x] Hover states nos links
- [x] Dados de projetos e contato
- [x] Integração com `/marketing` via Link

## O que falta / pode melhorar

- [ ] Design visual mais refinado (tipografia, espaçamentos, hierarquia)
- [ ] Possível sidebar ou nav lateral em telas maiores (como no screenshot)
- [ ] Efeitos de hover mais expressivos nos projetos
- [ ] Seção de artigos/posts (quando houver conteúdo)
- [ ] Dark mode já é o padrão — não precisa toggle
- [ ] URLs dos sub-links de 00. links (aguardar o usuário definir)
- [ ] Foto ou avatar mais destacado
- [ ] Meta tags OG para a home

---

## Convenções de código

- Componente principal: `app/components/home/HomeClient.tsx`
- Data (conteúdo) no topo do mesmo arquivo em constantes — fácil de editar
- Não criar arquivos desnecessários
- Não adicionar dependências novas sem necessidade

---

## Notas adicionais

- A página de marketing (`/marketing`) usa o `LanguageContext` (PT/EN toggle na navbar) — a home pessoal **não precisa** disso
- A borda coral da página de marketing (`FrameBorder.tsx`) **não aparece** na home
- O preloader e custom cursor são exclusivos da página de marketing
