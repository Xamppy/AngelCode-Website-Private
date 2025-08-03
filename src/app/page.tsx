import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Projects } from '@/components/sections/projects'
import { Process } from '@/components/sections/process'
import { Testimonials } from '@/components/sections/testimonials'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
      <Contact />
    </div>
  )
}
