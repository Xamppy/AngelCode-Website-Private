# Angel Code Soluciones — Website

## Stack
- **Framework:** Next.js 14.2 App Router
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 3.4 with custom design system
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod v4
- **Email:** EmailJS
- **Icons:** Lucide React
- **SEO:** next-sitemap, JSON-LD structured data
- **Deploy:** Vercel → https://angelcodesoluciones.cl

## Commands
```bash
npm run dev          # Development server on :3000
npm run build        # Build (RUN BEFORE EVERY COMMIT)
npm run lint         # Lint
npm run build:production  # Production build + sitemap
```

## SDD Framework (Spec-Driven Development)

Este proyecto usa un flujo estructurado de desarrollo con IA:

- `.ATL/skill_registry.md` — Índice de skills para subagentes
- `openspec.yaml` — Configuración del proyecto
- `engram/engram.py` — Memoria persistente SQLite
- `specs/` — Documentos por fase (proposals, designs, tasks, reports)
- `specs/prompts/sdd-prompts.md` — Prompts del orquestador

## Project Structure
```
src/
  app/                    # App Router pages
    layout.tsx            # Main layout + SEO metadata
    page.tsx              # Landing page
    not-found.tsx         # 404 page
    proyectos/[slug]/     # Project detail pages
    servicios/[slug]/     # Service detail pages
    globals.css           # Global styles + design tokens
  components/
    ui/                   # Reusable components
    sections/             # Page sections
    seo/                  # Structured data (JSON-LD)
    pixel-art/            # Gaming-style components
  data/                   # Data layer (projects.ts, services.ts)
  lib/                    # Utils, hooks, validations, email
  types/                  # TypeScript types
```

## Sections (in order)
1. Hero — Typing animation, CTA buttons, background with overlays
2. Services — 4 service cards (Web, Business Systems, Maintenance, Automation)
3. Projects — 8 project cards with filter by industry
4. Process — 4-step methodology timeline
5. Testimonials — Infinite scroll carousel + metrics
6. Contact — Short form + contact info + Calendly

## Design System
- **Theme:** Dark mode (#0A0A0A background)
- **Primary color:** Purple #8B5CF6
- **Typography:** Inter (sans), JetBrains Mono (mono)
- **Breakpoints:** mobile(768px), tablet(1024px), desktop(1200px)
- **Spacing system:** xs(4px) through 5xl(96px)

## Code Standards
- TypeScript strict mode enabled
- 'use client' only when interactivity needed
- Framer Motion for scroll-triggered animations
- Tailwind classes only (no CSS modules)
- Form validation with Zod schemas
- Data layer in src/data/ (no hardcoded data in components)
- Build before every commit

## Git
- Branch: main
- Commit style: feat/fix description in Spanish
- Always run `npm run build` before committing

## Ponytail Mode (Lazy Senior Dev)
1. Does this need to be built at all? (YAGNI)
2. Does the standard library already do this? Use it.
3. Does a native platform feature cover it? Use it.
4. Does an already-installed dependency solve it? Use it.
5. Can this be one line? Make it one line.
6. Only then: write the minimum code that works.

Rules:
- No abstractions that weren't explicitly requested
- No new dependency if it can be avoided
- No boilerplate nobody asked for
- Deletion over addition. Boring over clever. Fewest files possible.
- Mark intentional simplifications with a `ponytail:` comment
- Not lazy about: input validation, data-loss prevention, security, accessibility
