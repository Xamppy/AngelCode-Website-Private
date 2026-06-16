# AGENT.md - Como Correr AngelCode Website

> Este archivo es leido por el agente al inicio de cada sesion.
> Contiene TODO lo necesario para levantar y trabajar en el proyecto.

---

## Setup Inicial (una vez)

```bash
cd /root/angelcode-test
npm install
cp .env.example .env.local  # Configurar variables de entorno
```

## Variables de Entorno Requeridas

```env
NEXT_PUBLIC_SITE_URL=https://angelcodesoluciones.cl
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Correr el Proyecto

```bash
# Desarrollo
npm run dev
# -> http://localhost:3000

# Build (SIEMPRE antes de commit)
npm run build

# Lint
npm run lint
```

## Stack

- **Framework:** Next.js 14.2 App Router
- **Lenguaje:** TypeScript (strict mode)
- **Estilos:** Tailwind CSS 3.4 con diseno personalizado
- **Animaciones:** Framer Motion
- **Formularios:** React Hook Form + Zod v4
- **Email:** EmailJS
- **Iconos:** Lucide React
- **Analytics:** Vercel Analytics
- **SEO:** next-sitemap, JSON-LD structured data
- **Deploy:** Vercel

## Estructura del Proyecto

```
src/
  app/               # App Router
    globals.css      # Estilos globales
    layout.tsx       # Layout principal (metadata SEO)
    page.tsx         # Landing page (Hero + Services + Projects + Process + Testimonials + Contact)
  components/
    ui/              # Componentes reutilizables (navigation, service-card, image-gallery)
    sections/        # Secciones (hero, services, projects, process, testimonials, contact)
    seo/             # Componentes SEO (structured-data)
  lib/               # Utilidades y hooks (validations, email, hooks, utils, scroll)
```

## Reglas de Oro

1. **UNA feature a la vez** - No trabajar en multiples features simultaneas
2. **SIEMPRE hacer `npm run build`** antes de marcar como done
3. **Leer `.harness/feature_list.json`** para ver el estado actual
4. **Commits descriptivos** en espanol: `feat: descripcion` o `fix: descripcion`
5. **Si hay duda, preguntar al usuario antes de implementar**