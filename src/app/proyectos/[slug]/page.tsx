import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import projects from '@/data/projects'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.slug)
  if (!project) return {}

  return {
    title: `${project.title} | Angel Code Soluciones`,
    description: project.description.slice(0, 160),
    openGraph: {
      title: `${project.title} | Angel Code Soluciones`,
      description: project.description.slice(0, 160),
      type: 'article',
    },
  }
}

const statusColors: Record<string, string> = {
  live: 'bg-green-500/20 text-green-400 border border-green-500/40',
  development: 'bg-blue-500/20 text-blue-400 border border-blue-500/40',
  done: 'bg-gray-500/20 text-gray-400 border border-gray-500/40',
  prototype: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40',
}

const statusLabels: Record<string, string> = {
  live: 'En Vivo',
  development: 'En Desarrollo',
  done: 'Completado',
  prototype: 'Prototipo',
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.slug)
  if (!project) notFound()

  return (
    <main className="min-h-screen bg-neutral-black pt-24">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-neutral-gray-text hover:text-purple-light transition-colors mb-8"
        >
          ← Volver a proyectos
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl font-bold text-white">{project.title}</h1>
            {project.status && (
              <span className={`px-3 py-1 rounded text-xs font-mono ${statusColors[project.status]}`}>
                {statusLabels[project.status]}
              </span>
            )}
          </div>
          <p className="text-lg text-neutral-white/80 leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Meta info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'Industria', value: project.industry },
            { label: 'Tiempo', value: project.timeline },
            { label: 'ROI', value: project.roi },
            { label: 'Estatus', value: statusLabels[project.status ?? 'done'] },
          ].map((item) => (
            <div key={item.label} className="bg-neutral-gray-dark border border-neutral-gray-light rounded-lg p-4">
              <div className="text-xs text-neutral-gray-text font-mono mb-1">{item.label}</div>
              <div className="text-sm font-semibold text-white">{item.value}</div>
            </div>
          ))}
        </div>

        {/* Stack */}
        {project.stack.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Stack Tecnologico</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-gray-dark border border-neutral-gray-light rounded-lg text-sm text-neutral-white/90"
                >
                  {tech.icon} {tech.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Architecture */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-4">Arquitectura</h2>
          <div className="bg-neutral-gray-dark border border-neutral-gray-light rounded-lg p-6">
            <p className="text-neutral-white/80 leading-relaxed">{project.architecture}</p>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-4">Logros</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.achievements.map((a, i) => (
              <div key={i} className="bg-neutral-gray-dark border border-neutral-gray-light rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">{a.icon}</div>
                <div className="text-sm font-semibold text-white mb-1">{a.title}</div>
                <div className="text-xs text-neutral-gray-text">{a.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Screenshots gallery */}
        {project.screenshots.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Capturas</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {project.screenshots.slice(0, 6).map((src, i) => (
                <div key={i} className="bg-neutral-gray-dark border border-neutral-gray-light rounded-lg overflow-hidden aspect-video">
                  <div className="w-full h-full flex items-center justify-center text-neutral-gray-text text-sm font-mono p-4 text-center break-all">
                    {src.split('/').pop()}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Links */}
        {(project.repo || project.url) && (
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Enlaces</h2>
            <div className="flex gap-4">
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Visitar Sitio
                </a>
              )}
              {project.repo && (
                <a href={`https://github.com/${project.repo}`} target="_blank" rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  Ver Repo
                </a>
              )}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="text-center py-12 border-t border-neutral-gray-light/20">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Quieres un proyecto como este?
          </h2>
          <p className="text-neutral-white/70 mb-6 max-w-xl mx-auto">
            Contanos tu idea y la hacemos realidad con la misma calidad y dedicacion.
          </p>
          <a href="/#contact" className="btn-primary inline-flex items-center gap-2">
            Contactarnos
          </a>
        </section>
      </div>
    </main>
  )
}
