# GEO Optimization Plan — Angel Code Soluciones

**Versión:** 1.0
**Fecha:** Junio 21, 2026
**Basado en:** GEO Audit (score: 66/100)
**Stack:** Next.js 14 App Router + Tailwind + Framer Motion + Vercel
**Branch:** main
**Objetivo:** Posicionar para "desarrollo de software", "software a medida", "desarrollo web Chile"

---

## Estructura

```
.harness/geo-plan/
├── AGENTS.md                 ← Este archivo (índice)
├── feature_list.json         ← Estado de cada tarea
├── CLAUDE.md                 ← Contexto para Claude Code
└── exec-plans/
    ├── active/
    │   ├── ACS-GEO-001.md    (🔴 og-image.png 404)
    │   ├── ACS-GEO-002.md    (🔴 Canonical www/non-www)
    │   ├── ACS-GEO-003.md    (🔴 Crear /llms.txt)
    │   ├── ACS-GEO-004.md    (🔴 Página About / equipo)
    │   ├── ACS-GEO-005.md    (🟡 Person + BreadcrumbList schema)
    │   ├── ACS-GEO-006.md    (🟡 LocalBusiness schema)
    │   ├── ACS-GEO-007.md    (🟡 Service schema con keywords)
    │   ├── ACS-GEO-008.md    (🟡 robots.txt AI crawlers)
    │   ├── ACS-GEO-009.md    (🟢 Blog / Casos de éxito)
    │   ├── ACS-GEO-010.md    (🟢 Content marketing + keywords)
    │   ├── ACS-GEO-011.md    (🟢 Google Business Profile)
    │   └── ACS-GEO-012.md    (🟢 E-E-A-T completo)
    └── completed/
```

## Keywords Target

| Keyword | Intención | Prioridad |
|---------|-----------|:---------:|
| desarrollo de software Chile | Búsqueda de servicios | 🔴 Alta |
| software a medida | Desarrollo personalizado | 🔴 Alta |
| desarrollo web Chile | Páginas web profesionales | 🟡 Media |
| sistema para negocios | POS, booking, inventario | 🟡 Media |
| tienda online Chile | E-commerce | 🟡 Media |
| chatbot WhatsApp | Automatización | 🟢 Baja |
| transformación digital Chile | Consultoría | 🟢 Baja |

## Repositorio

| Repo | Ruta Local | GitHub | Branch |
|------|-----------|--------|--------|
| angelcode-website | `/root/angelcode-website/` | `Xamppy/AngelCode-Website-Private` | main |

## Prioridades por Fase

| Fase | Items | Timeline |
|------|-------|----------|
| **Fase 1** 🚨 | ACS-GEO-001 al 004 | Esta semana |
| **Fase 2** 🟡 | ACS-GEO-005 al 009 | Próximas 2 semanas |
| **Fase 3** 🟢 | ACS-GEO-010 al 012 | Continuo |

## Reglas para Claude Code

1. **Commits:** `fix(geo): ACS-GEO-NNN descripción`
2. **Push inmediato** tras build exitoso
3. **Branch main** (producción)
4. **Build pre-commit:** `npm run build`
5. **Git identity:** user.name=Xamppy, user.email=fe.orellanaa@duocuc.cl
6. **Ponytail:** mínimo código, YAGNI, stdlib/Next.js primero
