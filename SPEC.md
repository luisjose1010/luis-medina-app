# SPEC — Luis Medina App (Portafolio Personal)

## §G — Goal
Un portafolio web personal profesional, bilingüe y responsivo, diseñado para destacar proyectos de desarrollo, experiencia laboral y habilidades técnicas. La plataforma debe ser altamente visual, fácil de navegar y optimizada para SEO y rendimiento.

---

## §C — Constraints
| # | Constraint |
|---|---|
| C1 | **Framework:** Next.js 14 (App Router). |
| C2 | **Styling:** Tailwind CSS v3 con directivas en `globals.css`. |
| C3 | **Lenguaje:** TypeScript estricto. |
| C4 | **i18n:** Enrutamiento dinámico a través de `src/app/[lang]`. Los textos de la UI provienen de diccionarios/hooks en `src/i18n` o `src/hooks/useTranslation`. |
| C5 | **Datos Centralizados:** El contenido (proyectos, experiencia, skills, links) se gestiona de forma estática en `src/lib/consts.ts`. No hay base de datos backend. |
| C6 | **Despliegue:** Vercel (Edge/Serverless). |
| C7 | **Imágenes:** Optimizadas mediante el componente `next/image` y almacenadas en `public/assets/`. |

---

## §I — Interfaces & Estructura

### Routing
```text
route: /[lang]/             → Landing Page principal (Inicio, Proyectos, Experiencia, Habilidades, Contacto)
route: /[lang]/projects     → Página de listado completo de proyectos
route: /[lang]/projects/:id → Detalle dinámico del proyecto
```

### Key Components
| Componente | Path | Propósito |
|---|---|---|
| `LandingPage` | `src/components/LandingPage/` | Contenedor principal de las secciones de inicio. |
| `Projects` & `ProjectCard` | `src/components/Projects.tsx` | Tarjetas de proyectos que consumen la data de `consts.ts`. |
| `NavBar` / `Footer` | `src/components/` | Navegación global del sitio y enlaces sociales. |
| `Button` | `src/components/Button.tsx` | Componentes base para botones y enlaces con estilos consistentes. |
| `Stats` | `src/components/LandingPage/Stats.tsx` | Banda de métricas (años, proyectos, apps en vivo, tecnologías) calculadas desde `consts.ts` con count-up vía `IntersectionObserver`. |

### Data Model (`src/lib/consts.ts`)
- **`projects`**: Array de objetos con `name`, `description`, `note`, `links` (tipo, label, url), `slug`, `tags`, `imagesCount`, `cover?` (índice 1-based del screenshot usado como portada de card; default 1).
- **`experience`**: Array de experiencia profesional (`name`, `description`, `year`).
- **`skills` / `tools`**: Logos y nombres de herramientas.

---

## §V — Invariants
| # | Invariant |
|---|---|
| V1 | Las imágenes de los proyectos DEBEN ubicarse en `public/assets/projects/{slug}/{1..N}.webp`. Si se cambia la extensión, `ProjectCard` debe ser actualizado. |
| V2 | El enrutamiento debe preservar siempre el parámetro de idioma `[lang]`. |
| V3 | Los componentes de UI interactivos o que usen hooks de contexto (como el idioma) deben usar la directiva `'use client'`. |
| V4 | Todo enlace a repositorios o sitios en vivo dentro de los proyectos debe ser renderizado mediante el sub-componente `Button.LinkSolid` o `Button.LinkOutline`. |
| V5 | Los estilos globales no deben sobrescribir las utilidades de Tailwind a menos que sea estrictamente necesario para animaciones personalizadas o resets de base. |

---

## §T — Próximas Mejoras (Tasks)
- [x] Incorporar proyectos faltantes (`Traders Institute Academy`, `EcoHome WebApp`, `Canvassing App`).
- [x] Capturar y optimizar (WEBP) los screenshots de los nuevos proyectos locales.
- [x] Aplicar efecto "Glassmorphism" a los componentes flotantes como el NavBar (nav desktop = píldora glass: `bg-seasalt/60` + `backdrop-blur-md`; nav móvil ya lo tenía).
- [x] Mejorar las transiciones de `hover` en `ProjectCard` (micro-animaciones: lift + sombra en cards del landing, logos de skills, `active:scale` en botones).
- [ ] (Opcional) Implementar un conmutador explícito para "Dark Mode".
- [x] Tipografía display: `Fraunces` (variable `--font-display`, clase `font-display`) en h1/h2; `Inter` sigue como body.
- [x] Accesibilidad: `prefers-reduced-motion` global + `focus-visible` ring de marca (`dark_cyan`) en `Button.tsx` (reemplaza ring azul genérico).
- [x] Hero: badge "disponible", indicadores de slide clicables con temporizador, autoplay que pausa en hover, cue de scroll, blobs animados (`.blob`).
- [x] Sección `Stats` con contadores animados derivados de `consts.ts` (sin números hardcodeados).
- [x] Cards del landing con portada (`cover`), overlay y chips de tags; carrusel con snap en móvil (antes ocultas en `<lg`).
- [x] Marquee infinito de logos en `Skills` (pausa en hover, máscara de bordes).
- [x] Barra de progreso de scroll (CSS `animation-timeline: scroll()`, sin JS) + scrollbar/`::selection` de marca.
- [x] Páginas internas (proyectos, detalle, contacto) alineadas a la marca: headers `font-display` con gradiente, atmósfera ambiental, panel glass, tags y formulario con paleta propia (`Decorations.tsx` recoloreado, clases Tailwind inválidas `border-[f0f0f0]`/`focus:border-primary` corregidas).
- [x] SEO: metadata completa (OG/Twitter/robots/metadataBase) + `opengraph-image` generada con `next/og`.
