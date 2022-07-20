import emailjs from 'emailjs-com'

export function useEmailJs() {
  const serviceId = 'service_k0lhu1i'
  const publicKey = '5I5SnP5giie3mviTa'
  const template = {
    CONTACTO: 'template_j26a27k',
    INSCRIPCION: 'template_nnsj3kv',
  }

  /**
   * 
   * @param {String} template String del templateId de EmailJS
   * @param {Object} formObject Objeto con la data del formulario
   * @returns Promise con status y text
   */
  async function sendEmail(template, formObject) {
    return await emailjs.send(serviceId, template, formObject, publicKey)
  }

  return { template, sendEmail }
}
