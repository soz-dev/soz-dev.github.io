/**
 * Analytics léger et optionnel.
 * Sans VITE_ANALYTICS_ID : no-op (aucun script chargé).
 *
 * Providers supportés via VITE_ANALYTICS_PROVIDER :
 * - "plausible" (défaut) — Plausible Analytics
 * - "custom" — window[VITE_ANALYTICS_GLOBAL]?.(event, props)
 *
 * Variables :
 *   VITE_ANALYTICS_ID=soz-dev.com
 *   VITE_ANALYTICS_PROVIDER=plausible
 *   VITE_ANALYTICS_SRC=https://plausible.io/js/script.js  (optionnel)
 *   VITE_ANALYTICS_GLOBAL=plausible                     (pour custom)
 */

const ID = import.meta.env.VITE_ANALYTICS_ID?.trim() || ''
const PROVIDER = (import.meta.env.VITE_ANALYTICS_PROVIDER || 'plausible').toLowerCase()
const SRC = import.meta.env.VITE_ANALYTICS_SRC || 'https://plausible.io/js/script.js'
const GLOBAL = import.meta.env.VITE_ANALYTICS_GLOBAL || 'plausible'

let booted = false

export function isAnalyticsEnabled() {
  return Boolean(ID)
}

/** Charge le script une fois (idempotent). Appeler tôt (ex. PublicLayout). */
export function initAnalytics() {
  if (!ID || booted || typeof document === 'undefined') return
  booted = true

  if (PROVIDER === 'plausible') {
    const s = document.createElement('script')
    s.defer = true
    s.dataset.domain = ID
    s.src = SRC
    document.head.appendChild(s)
  }
}

/**
 * Événement custom.
 * @param {string} name — ex. devis_submit, estimateur_complete, project_click
 * @param {Record<string, string|number|boolean>} [props]
 */
export function track(name, props = {}) {
  if (!ID || typeof window === 'undefined') return

  try {
    if (PROVIDER === 'plausible') {
      const fn = window.plausible
      if (typeof fn === 'function') {
        fn(name, { props })
      } else {
        // Queue jusqu’au chargement du script
        window.plausible = window.plausible || function (...args) {
          ;(window.plausible.q = window.plausible.q || []).push(args)
        }
        window.plausible(name, { props })
      }
      return
    }

    if (PROVIDER === 'custom') {
      const fn = window[GLOBAL]
      if (typeof fn === 'function') fn(name, props)
    }
  } catch {
    // Jamais bloquer l’UI pour de l’analytics
  }
}

export const AnalyticsEvents = {
  DEVIS_SUBMIT: 'devis_submit',
  DEVIS_COPY: 'devis_copy',
  ESTIMATEUR_COMPLETE: 'estimateur_complete',
  ESTIMATEUR_PRESET: 'estimateur_preset',
  PROJECT_CLICK: 'project_click',
  CTA_CLICK: 'cta_click',
}
