# Angel Code Soluciones - Website

## Stack
- **Framework:** Next.js 14.2 App Router
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 3.4 with custom design system
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod v4
- **Email:** EmailJS
- **Icons:** Lucide React
- **SEO:** next-sitemap, JSON-LD structured data
- **Deploy:** Vercel -> https://angelcodesoluciones.cl

## Commands
```bash
npm run dev          # Development server on :3000
npm run build        # Build (RUN BEFORE EVERY COMMIT)
npm run lint         # Lint
npm run build:production  # Production build + sitemap
```

## Project Structure
```
src/
  app/               # App Router pages
    layout.tsx       # Main layout + SEO metadata
    page.tsx         # Landing page (single-page app)
    globals.css      # Global styles + design tokens
  components/
    ui/              # Reusable (navigation, service-card, image-gallery)
    sections/        # Page sections (hero, services, projects, process, testimonials, contact)
    seo/             # Structured data (JSON-LD)
    pixel-art/       # Gaming-style components (project-card, project-modal)
  lib/               # Utils, hooks, validations, email service
```

## Design System
- **Theme:** Dark mode only (#0A0A0A background)
- **Primary color:** Purple #8B5CF6
- **Typography:** Inter (sans), JetBrains Mono (mono) - loaded via next/font
- **Spacing system:** xs(4px) through 5xl(96px) defined in tailwind.config.ts
- **Shadows:** card, card-hover, button-primary defined in tailwind config
- **Breakpoints:** mobile(768px), tablet(1024px), desktop(1200px)

## Sections (in order)
1. Hero - Typing animation, CTA buttons, background image with overlays
2. Services - 4 service cards (Web, Business Systems, Maintenance, Automation)
3. Projects - 3 project cards (Podoclinic, Mayorista, Kinesiologia)
4. Process - 4-step methodology timeline
5. Testimonials - Infinite scroll carousel + metrics
6. Contact - Form + contact info + Calendly

## SEO
- All pages are server components with metadata export
- JSON-LD structured data in src/components/seo/structured-data.tsx
- Open Graph + Twitter cards configured in layout.tsx
- Sitemap auto-generated via next-sitemap on build
- Canonical URL: https://angelcodesoluciones.cl

## Code Standards
- TypeScript strict mode enabled
- All components use 'use client' directive for interactivity
- Framer Motion for scroll-triggered animations
- Tailwind classes for styling (no CSS modules)
- Form validation with Zod schemas in src/lib/validations.ts
- Email sending via EmailJS in src/lib/email.ts
- Scroll utilities in src/lib/scroll.ts
- Utility functions (cn) in src/lib/utils.ts

## Git
- Branch: main
- Commit style: feat/fix description in Spanish
- Always run `npm run build` before committing