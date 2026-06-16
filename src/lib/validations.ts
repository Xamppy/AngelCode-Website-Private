import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  projectType: z.enum(['software', 'ai', 'devops', 'other']),
  message: z.string().min(10, 'Cuéntanos un poco más sobre tu proyecto (mín. 10 caracteres)'),
  acceptCommunications: z.boolean().refine(val => val === true, {
    message: 'Debes aceptar recibir comunicaciones'
  })
})

export type ContactFormData = z.infer<typeof contactSchema>
