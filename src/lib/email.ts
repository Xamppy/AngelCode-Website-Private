import emailjs from '@emailjs/browser'
import { ContactFormData } from './validations'

export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
    return { success: false, error: 'EmailJS configuration is missing' }
  }

  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    company: data.company,
    phone: data.phone || 'No proporcionado',
    project_type: data.projectType,
    budget: data.budget,
    message: data.message,
    to_email: 'felipe@angelcodesoluciones.com'
  }

  try {
    await emailjs.send(serviceId, templateId, templateParams, publicKey)
    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error: 'Error al enviar el mensaje. Por favor intenta nuevamente.' }
  }
}