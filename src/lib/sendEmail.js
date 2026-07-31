/**
 * Envoi d’email depuis le site statique (GitHub Pages) via Web3Forms.
 * Pas d’ouverture de client mail : POST → email reçu à l’adresse liée à la clé.
 *
 * Config :
 *   VITE_WEB3FORMS_ACCESS_KEY  — Access Key (dashboard web3forms.com)
 *   VITE_CONTACT_EMAIL         — destinataire affiché / reply context (défaut sofyan.devpro@gmail.com)
 *
 * Créer la clé sur https://web3forms.com avec l’email destinataire souhaité.
 */

const ACCESS_KEY = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '').trim()
const CONTACT_EMAIL = (import.meta.env.VITE_CONTACT_EMAIL || 'sofyan.devpro@gmail.com').trim()

export function isEmailConfigured() {
  return Boolean(ACCESS_KEY)
}

export function getContactEmail() {
  return CONTACT_EMAIL
}

/**
 * @param {{ subject: string, message: string, fromName?: string, fromEmail?: string }} opts
 * @returns {Promise<{ success: true }>}
 */
export async function sendSiteEmail({ subject, message, fromName, fromEmail }) {
  if (!ACCESS_KEY) {
    const err = new Error(
      import.meta.env.DEV
        ? 'Envoi non configuré : ajoutez VITE_WEB3FORMS_ACCESS_KEY dans .env.local (voir .env.local.example).'
        : 'L’envoi d’email n’est pas encore configuré. Réessayez plus tard ou écrivez à ' + CONTACT_EMAIL + '.'
    )
    err.code = 'NOT_CONFIGURED'
    throw err
  }

  const payload = {
    access_key: ACCESS_KEY,
    subject: subject || 'Message depuis soz-dev.com',
    from_name: fromName || 'soz-dev.com',
    message: message || '',
  }

  if (fromEmail) {
    payload.email = fromEmail
    payload.replyto = fromEmail
  }

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  let data = {}
  try {
    data = await res.json()
  } catch {
    /* ignore */
  }

  if (!res.ok || data.success === false) {
    const err = new Error(
      (typeof data.message === 'string' && data.message) ||
        'Échec de l’envoi. Vérifiez votre connexion et réessayez.'
    )
    err.code = 'SEND_FAILED'
    throw err
  }

  return { success: true }
}
