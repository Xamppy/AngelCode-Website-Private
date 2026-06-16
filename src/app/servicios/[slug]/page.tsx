import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import services from '@/data/services'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.id === params.slug)
  if (!service) return {}

  return {
    title: `${service.title} | Angel Code Soluciones`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Angel Code Soluciones`,
      description: service.description,
      type: 'article',
    },
  }
}

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.id === params.slug)
  if (!service) notFound()

  return (
    <main className="min-h-screen bg-neutral-black pt-24">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        {/* Back link */}
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-sm text-neutral-gray-text hover:text-purple-light transition-colors mb-8"
        >
          ← Volver a servicios
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center w-14 h-14 bg-purple-primary/10 rounded-lg">
              <service.icon className="w-7 h-7 text-purple-primary" />
            </div>
            <h1 className="text-4xl font-bold text-white">{service.title}</h1>
          </div>
          <p className="text-lg text-neutral-white/80 leading-relaxed max-w-3xl">
            {service.longDescription}
          </p>
        </div>

        {/* Price highlight */}
        <div className="bg-gradient-to-r from-purple-primary/20 to-purple-light/10 border border-purple-primary/30 rounded-xl p-6 mb-10 text-center">
          <div className="text-sm text-neutral-white/70 mb-1">Inversión desde:</div>
          <div className="text-4xl font-bold text-white">{service.price}</div>
          <p className="text-sm text-neutral-white/60 mt-2">Precio referencial — cotización personalizada según tu proyecto</p>
        </div>

        {/* Features */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-4">¿Qué incluye?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 bg-neutral-gray-dark border border-neutral-gray-light rounded-lg p-4">
                <div className="w-5 h-5 bg-green-500/20 border border-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-neutral-white/90">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-4">Beneficios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="bg-neutral-gray-dark border border-neutral-gray-light rounded-lg p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-white/90 font-medium">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ideal for */}
        <section className="mb-10">
          <div className="bg-neutral-gray-dark border border-neutral-gray-light rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-3">Ideal para:</h2>
            <p className="text-neutral-white/80 leading-relaxed">{service.idealFor}</p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 border-t border-neutral-gray-light/20">
          <h2 className="text-2xl font-semibold text-white mb-4">
            ¿Te interesa este servicio?
          </h2>
          <p className="text-neutral-white/70 mb-6 max-w-xl mx-auto">
            Cuéntanos tu proyecto y te enviaremos una cotización personalizada sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="btn-primary inline-flex items-center gap-2">
              Solicitar Cotización
            </a>
            <a
              href="https://wa.me/56922126103"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
