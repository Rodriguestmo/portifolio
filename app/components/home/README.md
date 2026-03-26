# Arquitetura e Refatoração da Home (HomeClient.tsx)

## Contexto e Objetivos
A página inicial (`HomeClient.tsx`) passou por uma série de refatorações de design, usabilidade e padronização. O objetivo era criar uma experiência unificada, sofisticada e tecnológica, removendo comportamentos legados que causavam divergência de UX (como efeitos 3D desalinhados com a identidade ou transições de background agressivas), e inserindo novos efeitos visuais premium.

A lógica motriz de todas as alterações foi garantir uma identidade minimalista com foco em "Engenharia, Estratégia e Tecnologia", evocando precisão, cálculo (grids) e atrações gravitacionais através de manipulações de CSS puro.

---

## 1. O Componente `SpotlightCard`
**O Problema Anterior:** 
As antigas sessões possuíam diversos tipos de efeitos no `:hover`. A sessão de projetos tinha um fundo deslocando agressivamente em `translate-y`; a sessão de artigos usava um `<TiltCard>` em 3D que quebrava o grid em telas menores; enquanto a área de habilidades já usava um glow suave. O código repetia estados espúrios (`useRef`, `useState`, `useCallback`) de captura de cursor em cada bloco.

**A Solução Implementada:**
Criamos um componente altamente reutilizável e isolado (`SpotlightCard.tsx`) projetado para hospedar exatamente o mesmo efeito de iluminação para *todas* as cartas.

- **Lógica e Funcionamento:** O componente anexa eventos genéricos do React para capturar coordenadas cartesianas exatas do evento `mousemove`. A luz é um `radial-gradient` posicionado em *absoluto*, renderizado por trás do conteúdo relativo com baixa opacidade e um controle via `pointer-events-none`.
- **Layout Consistency (Fix CSS Grid):** Originalmente, os filhos dentro do SpotlightCard eram magicamente agrupados numa solitária `div`. Isso removia os nós da árvore direta do container Grid. A solução foi injetar `{children}` diretamente com seu próprio `z-index`, mantendo a reatividade intacta em grids complexos, por exemplo em "Habilidades Técnicas".

---

## 2. Grid Interativa: O Experimento Gravitacional (`GravityGrid.tsx`)
**A Demanda:** 
Trazer dinamismo unicamente para o traçado de fundo ("Grid Spacetime"), distorcendo sua teia em direção à ponta do mouse do usuário — similar a um campo gravitacional — sem ofuscar textos.

**Lógicas Testadas e Desativadas:**
1. **Backdrop Filter Lenses:** Foi tentado um óculos curvo (`blur()` e `contrast()`) no cursor, mas rejeitado pelo embaçamento destrutivo da legibilidade do conteúdo.
2. **Double CSS Mask Distorcida (GravityGrid):** Optou-se pelo truque visual de dupla máscara óptica usando a pseudo-propriedade `mask-image`:
   - Um quadriculado padrão é renderizado ao fundo (`z-0`) recoberto por uma máscara que o **desbota** (*fades out*) no ponto X,Y exato do mouse.
   - Um **segundo quadriculado idêntico**, mas previamente escalado em "zoom" de `1.15` a partir do *foco original (`transformOrigin`) no mesmo ponteiro X,Y*, é renderizado e masked-*in* para existir somente na zona de visão periférica imediata do mouse.
   - A junção virtual projeta uma distorção convexa orgânica — um buraco de minhoca. *NOTA: A flag atual deixou o componente desabilitado (`comentado no HomeClient`) a pedido de estabilidade visual na versão atual.*

---

## 3. O Fator Custom Cursor (`CustomCursor.tsx`)
**Modificações e Ajustes:**
O cursor teve três ondas cruciais de atualização:
1. **Limpeza da Lentidão:** O ringue animado de borda usa algoritmos simples de Interpolação Linear (Lerp) para `x` e `y` (`target.x` contra `current.x * 0.15`).
2. **Reversão para Inversão Genuína:** Evitando a "neblina" da tentativa frustrada de lente (`blur()` nativo), revertemos as lógicas de preenchimento voltando para `mix-blend-mode: "difference"`. Isso possibilita precisão imaculada no contorno branco escuro sobre as cards e layouts em branco clássico.
3. **Offset da Primitiva:** A alteração do contorno de *56px* para *40px* (mais delicado e alinhado) exigiu adaptação manual imediata nos raios radiais de deslocamento `transform: translate`. Ajustes para `-20px` foram finamente lapidados para centralização pixel-perfect da "bolinha principal".

---

## 4. O Sistema Visual Refinado
- **Nova Identidade Textual:** Transição generalizada de instâncias de designação técnica para "Engenharia, Estratégia e Tecnologia" ao invés do jargão puro de mercado de web development;
- **Favicon Dinâmico e Preloader:** Implementação pesada do Edge-level generation via `next/og` (criando o logo "TM" via um micro-servidor HTML to Image) substituindo `.ico` físicos pesados. Redução agressiva de decorações do Preloader — a remoção de "barras horizontais brancas e duras" alinhando com a ausência total de arestas grosseiras em prol do preenchimento fluido.
- **Micro-Molduras em Spin:** Adição de anéis absolutos reverso-giratórios tracejados e pontilhados (`border-dashed / border-dotted - animate-spin`) acompanhando a fotografia primária do herói, trazendo o elemento aeroespacial subliminar em volta de um container elástico da imagem.
