# Skill Registry — Angel Code Soluciones

> Catálogo de skills disponibles para subagentes.
> El orquestador lee este índice y solo pasa la skill necesaria para cada tarea.

---

## Cómo usar

1. El orquestador identifica qué tipo de tarea se va a delegar
2. Busca en este registry la skill correspondiente
3. Pasa la ruta de la skill al subagente como contexto
4. El subagente carga solo esa skill — ni más ni menos

---

## Registry

| ID | Skill | Ruta | Cuándo usarla |
|----|-------|------|---------------|
| `nextjs-dev` | Next.js Dev Checklist | `docs/skills/nextjs-dev-checklist.md` | Tareas con App Router, useParams, routing |
| `react-hooks` | React useRef Stale Closure | `docs/skills/react-useref-stale-closure-loop.md` | Bugs de loops infinitos con useEffect |
| `web-design` | Web Design Best Practices | `docs/skills/web-design-best-practices.md` | UI/UX, tema oscuro, shadcn/ui, Tailwind |
| `ecommerce-ux` | E-commerce UX Audit | `docs/skills/ecommerce-ux-audit.md` | Auditoría UX de e-commerce |
| `owasp` | OWASP Top 10 | `docs/skills/owasp-top-10.md` | Features con auth, payments, datos sensibles |
| `drizzle-migration` | Drizzle DB Migration Gap | `docs/skills/drizzle-db-migration-gap.md` | Diagnóstico de schema vs DB real |
| `seo-conversion` | Landing Page SEO Chile | `docs/skills/landing-page-seo-conversion.md` | SEO técnico, Schema.org, conversión |
| `psicologia-ecommerce` | Psicología E-commerce | `docs/skills/optimizador-psicologia-ecommerce.md` | Optimización con sesgos cognitivos |
| `tdd` | Test-Driven Development | `docs/skills/test-driven-development.md` | Tareas con tests (RED-GREEN-REFACTOR) |
| `systematic-debug` | Systematic Debugging | `docs/skills/systematic-debugging.md` | Bugs complejos, root cause analysis |
| `code-review` | Code Review | `docs/skills/requesting-code-review.md` | Revisión pre-commit, quality gates |
| `writing-plans` | Writing Plans | `docs/skills/writing-plans.md` | Desglose de tareas, planes de implementación |
| `subagent-dev` | Subagent-Driven Development | `docs/skills/subagent-driven-development.md` | Ejecución con subagentes + 2-stage review |
| `estetikflow-api` | EstetikFlow Booking API | `docs/skills/estetikflow-booking.md` | Integración con API de EstetikFlow |
| `motoforall` | MotoForAll Project | `docs/skills/motoforall.md` | Tareas en MotoForAll e-commerce |

---

## Mantenimiento

- **Agregar**: cuando se cree una skill nueva, agregarla a esta tabla
- **Actualizar**: cuando una skill cambie de ruta o alcance
- **Eliminar**: cuando una skill se deprecie

> ⚠️ El registry debe mantenerse actualizado manualmente o mediante el agente archivador (Fase 6).

## Skills locales del agente (Hermes Agent)

El agente orquestador tiene acceso directo a estas skills a través de `skill_view()`:

- `harness-engineering` — Framework unificado de harness
- `writing-plans` — Creación de planes de implementación
- `subagent-driven-development` — Ejecución con subagentes + revisión
- `test-driven-development` — Ciclo TDD completo
- `requesting-code-review` — Revisión pre-commit
- `systematic-debugging` — Debugging de 4 fases
- `nextjs-dev-checklist` — Next.js audit checklist
- `web-design-best-practices` — Diseño web con shadcn/ui
- `owasp-top-10` — Seguridad OWASP
- `ecommerce-ux-audit` — Auditoría UX e-commerce
- `drizzle-db-migration-gap` — Diagnóstico Drizzle
- `landing-page-seo-conversion` — SEO + conversión
- `estetikflow-booking` — API booking EstetikFlow
- `motoforall` — Proyecto MotoForAll

Para cargar una skill local: `skill_view(name="nombre-skill")`
