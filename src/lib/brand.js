/** Identité & assets marque — source unique pour logos et nav publique. */

export const BRAND_NAME = 'SOZ_DEV'
export const BRAND_TAGLINE = 'Développement & Solutions'
export const BRAND_ALT = `${BRAND_NAME} — ${BRAND_TAGLINE}`

/** Bust cache CDN / navigateur après remplacement d’assets. */
export const LOGO_V = '4'

const v = (path) => `${path}?v=${LOGO_V}`

export const LOGO = {
  fullLight: v('/logo-light.png'),
  fullDark: v('/logo-dark.png'),
  markLight: v('/logo-mark-light.png'),
  markDark: v('/logo-mark-dark.png'),
}

/** Liens de navigation publique (navbar + footer partiel). */
export const NAV_LINKS = [
  { label: 'Accueil', to: '/', end: true },
  { label: 'Services', to: '/services' },
  { label: 'Tarifs', to: '/tarifs' },
  { label: 'Projets', to: '/projets' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Contact', to: '/contact' },
]
