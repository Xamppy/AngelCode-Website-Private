# Angel Code Soluciones - Website

Website profesional para Angel Code Soluciones, empresa chilena especializada en desarrollo de software y consultoría tecnológica.

## 🚀 Tecnologías

- **Next.js 14.2.30** con App Router
- **TypeScript** (modo estricto)
- **Tailwind CSS** con sistema de diseño personalizado
- **Framer Motion** para animaciones
- **React Hook Form** + **Zod** para formularios
- **EmailJS** para envío de formularios
- **Lucide React** para iconografía

## 🛠️ Desarrollo

### Instalación

```bash
npm install
```

### Servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build de producción

```bash
npm run build
npm run start
```

## 📁 Estructura del Proyecto

```
src/
├── app/                   # Next.js App Router
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── components/
│   ├── ui/                # Componentes reutilizables
│   ├── sections/          # Secciones de la página
│   ├── pixel-art/         # Componentes con estilo gaming
│   └── seo/               # Componentes SEO
└── lib/                   # Utilidades y hooks
```

## 🎨 Características

- ✅ Diseño responsive (mobile-first)
- ✅ Optimización SEO completa
- ✅ Animaciones suaves con Framer Motion
- ✅ Formulario de contacto funcional
- ✅ Galería de proyectos interactiva
- ✅ Testimonios de clientes
- ✅ Optimización de imágenes
- ✅ Lighthouse score 95+

## 🚀 Despliegue

### Vercel (Recomendado)

```bash
npm run deploy:vercel
```

### Variables de Entorno

```env
NEXT_PUBLIC_SITE_URL=https://angelcodesoluciones.cl
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📞 Contacto

- **Email**: felipe@angelcodesoluciones.com
- **WhatsApp**: +56 9 2212 6103
- **Website**: [angelcodesoluciones.cl](https://angelcodesoluciones.cl)
