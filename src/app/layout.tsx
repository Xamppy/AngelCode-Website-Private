import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/ui/navigation";
import { StructuredData } from "@/components/seo/structured-data";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Angel Code Soluciones - Desarrollo de Software y Consultoría Tecnológica",
    template: "%s | Angel Code Soluciones"
  },
  description: "Transformamos ideas en soluciones tecnológicas escalables. Especializados en desarrollo de software, integración de IA, DevOps y automatización empresarial. Más de 15 proyectos exitosos en Chile.",
  keywords: [
    "desarrollo software",
    "consultoría tecnológica", 
    "Next.js",
    "React",
    "automatización empresarial",
    "integración IA",
    "DevOps",
    "Chile",
    "Santiago",
    "desarrollo web",
    "aplicaciones móviles",
    "sistemas empresariales",
    "transformación digital"
  ],
  authors: [{ name: "Angel Code Soluciones", url: "https://angelcodesoluciones.com" }],
  creator: "Angel Code Soluciones",
  publisher: "Angel Code Soluciones",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://angelcodesoluciones.cl",
    title: "Angel Code Soluciones - Desarrollo de Software y Consultoría Tecnológica",
    description: "Transformamos ideas en soluciones tecnológicas escalables. Especializados en desarrollo de software, integración de IA, DevOps y automatización empresarial.",
    siteName: "Angel Code Soluciones",
    images: [
      {
        url: "https://angelcodesoluciones.cl/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Angel Code Soluciones - Desarrollo de Software",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angel Code Soluciones - Desarrollo de Software y Consultoría Tecnológica",
    description: "Transformamos ideas en soluciones tecnológicas escalables. Especializados en desarrollo de software, integración de IA, DevOps y automatización empresarial.",
    images: ["https://angelcodesoluciones.cl/images/og-image.png"],
  },
  alternates: {
    canonical: "https://angelcodesoluciones.cl",
  },
  category: "technology",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <Navigation />
        <main className="relative">
          {children}
        </main>
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1A1A1A',
              color: '#CCCCCC',
              border: '1px solid rgba(139, 92, 246, 0.2)',
            },
            success: {
              iconTheme: {
                primary: '#8B5CF6',
                secondary: '#FFFFFF',
              },
            },
            error: {
              iconTheme: {
                primary: '#EF4444',
                secondary: '#FFFFFF',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
