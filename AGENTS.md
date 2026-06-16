# AGENTS.md — Índice del Proyecto

> ⚡ **Léeme primero.** Este archivo es un índice.
> El detalle está en los archivos referenciados. NO escribas reglas aquí.

---

## Stack

- **Framework:** Next.js 14.2 App Router (TypeScript strict)
- **Estilos:** Tailwind CSS 3.4 + CSS custom properties
- **Animaciones:** Framer Motion 12
- **Formularios:** React Hook Form + Zod 4
- **Email:** EmailJS
- **SEO:** next-sitemap + JSON-LD structured data
- **Deploy:** Vercel → https://angelcodesoluciones.cl

---

## Harness SDD (Spec-Driven Development)

```
.ATL/skill_registry.md     → Índice de skills para subagentes
openspec.yaml              → Configuración del proyecto (stack, comandos, rutas)
engram/engram.py           → Memoria persistente SQLite (decisiones, bugs, aprendizajes)
specs/                     → Documentos por fase (proposals, designs, tasks, reports)
  prompts/sdd-prompts.md   → Prompts del orquestador (Fases 0-6)
.harness/                  → Estado del proyecto
  feature_list.json        → Features con estado (done/pending)
  progress.md              → Log de sesiones
  AGENT.md                 → Cómo correr el proyecto
  PROMPT.md                → Contexto inicial para el agente
CLAUDE.md                  → Instrucciones para Claude Code / agentes externos
```

---

## Flujo de Trabajo SDD

| Fase | Rol | Qué hace | Output |
|------|-----|----------|--------|
| 0 | Orquestador | SDD Init: calibración y preflight | Diagnóstico |
| 1 | Explorer | Explora base de código | Contexto |
| 2 | Proposer/Spec/Design | Propone, especifica, diseña | specs/proposals/ + specs/designs/ |
| 3 | Task Planner | Divide en tareas verificables | specs/tasks/ |
| 4 | Implementer | Codifica (TDD, contexto limpio) | Código + tests |
| 5 | Verifier | Revisa contra especificaciones | specs/reports/ |
| 6 | Archiver | Documenta + guarda en Engram | specs/reports/ + engram/ |

Ver detalles en `specs/prompts/sdd-prompts.md`

---

## Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx              # Layout principal + SEO
│   ├── page.tsx                # Landing page (6 secciones)
│   ├── not-found.tsx           # 404 personalizada
│   ├── viewport.ts             # Viewport config
│   ├── globals.css             # Estilos globales + tokens
│   ├── proyectos/[slug]/       # Subpáginas de proyectos
│   ├── servicios/[slug]/       # Subpáginas de servicios
│   └── fonts/                  # Fuentes locales
├── components/
│   ├── sections/               # hero, services, projects, process, testimonials, contact
│   ├── ui/                     # navigation, service-card, image-gallery, scroll-to-top, whatsapp-button
│   ├── pixel-art/              # project-card, project-modal
│   ├── forms/                  # Componentes de formulario
│   └── seo/structured-data.tsx # JSON-LD schemas
├── data/
│   ├── projects.ts             # Datos de proyectos
│   └── services.ts             # Datos de servicios
├── lib/                        # Utils, hooks, validations, email
└── types/                      # TypeScript types
```

---

## Cómo Empezar una Sesión (SDD Init)

1. Leer `openspec.yaml` (stack, comandos, rutas)
2. Leer `.ATL/skill_registry.md` (skills disponibles)
3. Consultar Engram: `python3 engram/engram.py recent --limit 5`
4. Leer `.harness/feature_list.json` (features pendientes)
5. Leer `.harness/progress.md` (última sesión)
6. Elegir feature con mayor prioridad de feature_list.json
7. Seguir flujo SDD (specs/prompts/sdd-prompts.md)

---

## Skills del Sistema (Hermes Agent)

Usar `skill_view(name)` para cargar antes de tareas específicas:

| Skill | Cuándo cargarla |
|-------|-----------------|
| `harness-engineering` | Configuración de arnés, estructura del proyecto |
| `writing-plans` | Desglose de tareas, planes de implementación |
| `subagent-driven-development` | Ejecución con subagentes + revisión 2-stage |
| `test-driven-development` | Implementación con TDD |
| `requesting-code-review` | Revisión pre-commit |
| `systematic-debugging` | Debugging de bugs complejos |
| `web-design-best-practices` | UI/UX con Tailwind, tema oscuro |
| `nextjs-dev-checklist` | Next.js App Router, routing |
| `owasp-top-10` | Seguridad en features con auth/payments |
| `landing-page-seo-conversion` | SEO técnico y Schema.org |
| `ecommerce-ux-audit` | Auditoría UX de tiendas online |

---

## Reglas de Oro

1. **SDD Flow**: Siempre seguir Spec → Design → Tasks → Code → Verify
2. **Contexto limpio**: Cada subagente recibe SOLO lo que necesita
3. **TDD**: RED → GREEN → REFACTOR en cada unidad de código
4. **Build pre-commit**: `npm run build` antes de cada commit
5. **Engram**: Decisiones y bugs importantes van a la DB
6. **Skill Registry**: Consultar `.ATL/skill_registry.md` antes de delegar
