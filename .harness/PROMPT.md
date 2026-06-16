# PROMPT.md — Contexto Inicial para el Agente

> Este archivo se entrega al agente al inicio de cada sesión de trabajo.

---

## Proyecto: Angel Code Soluciones — Website

**Descripción:** Website profesional para empresa chilena de desarrollo de software.
**Stack:** Next.js 14.2 + TypeScript Strict + Tailwind CSS + Framer Motion + EmailJS
**Repo:** https://github.com/Xamppy/AngelCode-Website-Private
**Deploy:** Vercel → https://angelcodesoluciones.cl

---

## Flujo de Trabajo (SDD)

Este proyecto usa **Spec-Driven Development (SDD)** con un agente orquestador.

**Fases:**
0. SDD Init — leer contexto, verificar build, consultar Engram
1. Explorer — explorar base de código
2. Proposer/Spec/Design — proponer y diseñar
3. Task Planner — dividir en tareas
4. Implementer — codificar con TDD
5. Verifier — revisar contra specs
6. Archive — documentar y guardar en Engram

---

## Instrucciones de Inicio

```
1. python3 engram/engram.py recent --limit 3
2. Leer .harness/feature_list.json
3. Leer .harness/progress.md
4. Identificar próxima tarea de mayor prioridad
5. Seguir flujo SDD (specs/prompts/sdd-prompts.md)
```

---

## Reglas de Oro

1. **Tema oscuro** con paleta purple (#8B5CF6) sobre fondos #0A0A0A / #1A1A1A
2. **Mobile-first responsive**
3. **Imágenes en WebP/AVIF** con next/image
4. **`npm run build` antes de cada commit**
5. **Mantener SEO**: metadata, structured data, OG tags
6. **TDD**: RED → GREEN → REFACTOR
7. **Skills**: consultar `.ATL/skill_registry.md` antes de delegar
8. **Engram**: guardar decisiones y bugs importantes
