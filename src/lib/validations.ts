import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  company: z.string().min(2, 'El nombre de la empresa debe tener al menos 2 caracteres'),
  phone: z.string().optional(),
  projectType: z.enum(['software', 'ai', 'devops', 'other']).refine(val => val, {
    message: 'Selecciona un tipo de proyecto'
  }),
  budget: z.enum(['200k-300k', '400k-600k', '700k-900k', '1000k+']).refine(val => val, {
    message: 'Selecciona un rango de presupuesto'
  }),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  acceptCommunications: z.boolean().refine(val => val === true, {
    message: 'Debes aceptar recibir comunicaciones'
  })
})

export type ContactFormData = z.infer<typeof contactSchema>