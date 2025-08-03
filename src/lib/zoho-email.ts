// Alternativa usando Nodemailer con Zoho SMTP
// NOTA: Esto requiere un backend, no funciona desde el frontend
// Este archivo está comentado para evitar errores de build

/*
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransporter({
  host: 'smtp.zoho.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'contacto@angelcodesoluciones.cl',
    pass: 'tu-app-password-de-zoho' // Necesitas generar esto en Zoho
  }
})

export const sendZohoEmail = async (data: Record<string, string>) => {
  try {
    const info = await transporter.sendMail({
      from: 'contacto@angelcodesoluciones.cl',
      to: 'contacto@angelcodesoluciones.cl',
      subject: `Nuevo contacto desde la web: ${data.name}`,
      html: `
        <h2>Nuevo contacto desde Angel Code Soluciones</h2>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Empresa:</strong> ${data.company}</p>
        <p><strong>Teléfono:</strong> ${data.phone}</p>
        <p><strong>Tipo de proyecto:</strong> ${data.projectType}</p>
        <p><strong>Presupuesto:</strong> ${data.budget}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${data.message}</p>
      `
    })
    
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error }
  }
}
*/

// Placeholder export para evitar errores
export const sendZohoEmail = async (data: Record<string, string>) => {
  console.log('Zoho email functionality is disabled in production build', data)
  return { success: false, error: 'Not implemented' }
}