import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-neutral-black flex items-center justify-center">
      <div className="container max-w-xl mx-auto px-4 py-20 text-center">
        <div className="text-8xl font-bold text-purple-primary mb-4">404</div>
        <h1 className="text-3xl font-bold text-white mb-4">Pagina no encontrada</h1>
        <p className="text-neutral-white/70 mb-8 max-w-md mx-auto">
          La pagina que buscas no existe o fue movida. 
          Mientras tanto, puedes ver nuestros proyectos o contactarnos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/#projects" className="btn-primary">
            Ver Proyectos
          </Link>
          <Link href="/#contact" className="btn-secondary">
            Contactar
          </Link>
        </div>
      </div>
    </main>
  )
}
