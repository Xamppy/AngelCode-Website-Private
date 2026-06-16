# PROMPT.md - Contexto para el Agente

> Este archivo se entrega al agente al inicio de cada sesion de trabajo.

---

## Proyecto: Angel Code Soluciones - Website

**Descripcion:** Website profesional para empresa chilena de desarrollo de software.
**Stack:** Next.js 14.2 + TypeScript Strict + Tailwind CSS + Framer Motion + EmailJS
**Repo:** https://github.com/Xamppy/AngelCode-Website-Private
**Deploy:** Vercel -> https://angelcodesoluciones.cl

---

## Tarea Actual

[AGENT: Leer `.harness/progress.md` y `.harness/feature_list.json`]

---

## Reglas de Oro

1. **Diseno oscuro** con paleta purple (#8B5CF6) sobre fondos oscuros (#0A0A0A, #1A1A1A)
2. **Single Page Application** con scroll sections (hero, services, projects, process, testimonials, contact)
3. **Mobile-first responsive** con sistema de diseno en tailwind.config.ts
4. **Todas las imagenes** en WebP/AVIF con next/image
5. **SIEMPRE hacer build** antes de commit para verificar
6. **Mantener SEO** intacto al modificar: metadata, structured data, OG tags