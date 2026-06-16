import { Code, Bot, Settings, Database } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  icon: LucideIcon
  title: string
  description: string
  longDescription: string
  features: string[]
  price: string
  benefits: string[]
  idealFor: string
}

const services: Service[] = [
  {
    id: 'web-development',
    icon: Code,
    title: 'Páginas Web & E-commerce',
    description: 'Creamos páginas web profesionales y tiendas online que hacen crecer tu negocio.',
    longDescription:
      'Desarrollamos páginas web modernas y tiendas online completas con Webpay integrado. Desde landing pages para tu negocio local hasta e-commerce con catálogo, carro de compras y pasarela de pago. Todo optimizado para que tus clientes te encuentren en Google y compren sin complicaciones.',
    features: [
      'Landing pages profesionales',
      'Tiendas online con Webpay',
      'Catálogos de productos',
      'Integración con redes sociales',
    ],
    price: '$200.000',
    benefits: [
      'Aumenta tus ventas online',
      'Presencia profesional 24/7',
      'Aparece en Google',
      'Administración sencilla',
    ],
    idealFor:
      'Emprendedores y dueños de negocio que quieren vender por internet sin complicaciones técnicas.',
  },
  {
    id: 'business-systems',
    icon: Bot,
    title: 'Sistemas para Negocios',
    description: 'Desarrollamos sistemas simples y personalizados para que administres mejor tu negocio.',
    longDescription:
      'Creamos sistemas a medida para tu negocio: POS para ventas, booking online para reservas, control de inventario y más. Olvídate de los archivos Excel y los cuadernos. Todo centralizado en una plataforma fácil de usar, accesible desde cualquier dispositivo.',
    features: [
      'Sistemas POS para ventas',
      'Reservas de horas online',
      'Control de inventario',
      'Integración con medios de pago',
    ],
    price: '$250.000',
    benefits: [
      'Deja los Excel atrás',
      'Todo en un solo lugar',
      'Accede desde tu celular',
      'Toma decisiones con datos reales',
    ],
    idealFor:
      'Dueños de clínicas, talleres, restaurantes y tiendas que necesitan organizar su operación diaria.',
  },
  {
    id: 'maintenance-support',
    icon: Settings,
    title: 'Mantenimiento & Soporte',
    description: 'Mantenemos tu web o sistema siempre actualizado, seguro y funcionando al 100%.',
    longDescription:
      'Nos encargamos de que tu sitio web o sistema esté siempre online, actualizado y seguro. Incluye hosting, dominio, respaldos automáticos, actualizaciones de seguridad y optimización de velocidad. Tú preocúpate de tu negocio, nosotros de la tecnología.',
    features: [
      'Hosting y dominios',
      'Seguridad y respaldos',
      'Optimización de velocidad',
      'Actualizaciones técnicas',
    ],
    price: '$50.000/mes',
    benefits: [
      'Tu web siempre online',
      'Sin preocupaciones técnicas',
      'Protegido contra ataques',
      'Soporte cuando lo necesites',
    ],
    idealFor:
      'Dueños de negocio que ya tienen web o sistema y quieren mantenerlo funcionando sin dolores de cabeza.',
  },
  {
    id: 'automation',
    icon: Database,
    title: 'Automatización Inteligente',
    description: 'Implementamos chatbots y automatizaciones para ahorrar tiempo y mejorar la atención.',
    longDescription:
      'Implementamos chatbots en WhatsApp y web que responden a tus clientes automáticamente, automatizamos tareas repetitivas como envío de recordatorios y generación de reportes. Menos trabajo manual, más tiempo para lo que importa.',
    features: [
      'Chatbots en WhatsApp y web',
      'Automatización de tareas repetitivas',
      'Reportes básicos de ventas',
      'Recordatorios automáticos para clientes',
    ],
    price: '$150.000',
    benefits: [
      'Responde clientes 24/7',
      'Ahorra horas de trabajo',
      'No pierdas ventas',
      'Mejora la experiencia de tus clientes',
    ],
    idealFor:
      'Negocios con alto volumen de consultas o procesos repetitivos que quieren eficiencia sin contratar más personal.',
  },
]

export default services
