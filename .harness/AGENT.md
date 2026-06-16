# AGENT.md — Cómo Correr AngelCode Website

> Este archivo es leído por el agente al inicio de cada sesión.
> Contiene TODO lo necesario para levantar y trabajar en el proyecto.

---

## Setup Inicial (una vez)

```bash
cd /root/angelcode-website
npm install
```

## Variables de Entorno

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Variables en `.env.production` para producción.

## Comandos

```bash
npm run dev              # Servidor desarrollo → localhost:3000
npm run build            # Build (OBLIGATORIO antes de commit)
npm run build:production # Build producción + sitemap
npm run lint             # ESLint
```

## Skills del Agente

Skills disponibles en `.ATL/skill_registry.md`
Cargar con: `skill_view(name="nombre-skill")`

## Memoria Persistente (Engram)

```bash
python3 engram/engram.py recent --limit 5
python3 engram/engram.py query --tag TEMA
python3 engram/engram.py search "término"
python3 engram/engram.py add decision "Pregunta" "Razón" "Ubicación" tags
python3 engram/engram.py add bug "Problema" "Causa" "Solución" tags
python3 engram/engram.py add learning "Contexto" "Insight" "Fuente" tags
```

## Documentación SDD

- `specs/prompts/sdd-prompts.md` — Prompts del orquestador (Fases 0-6)
- `specs/proposals/` — Propuestas de features
- `specs/designs/` — Diseños técnicos
- `specs/tasks/` — Tareas planificadas
- `specs/reports/` — Reportes de verificación y finales
