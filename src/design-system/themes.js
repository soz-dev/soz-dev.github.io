/** Palettes de marque — le visiteur peut tester en live */

export const PALETTES = [
  {
    id: 'aurora',
    name: 'Aurora',
    blurb: 'Violet → cyan',
    brand: { 400: '#c084fc', 500: '#a855f7', 600: '#9333ea', 700: '#7c3aed', 900: '#581c87' },
    accent: { 400: '#22d3ee', 500: '#06b6d4', 600: '#0891b2', 700: '#0e7490' },
  },
  {
    id: 'sunset',
    name: 'Sunset',
    blurb: 'Orange → jaune',
    brand: { 400: '#fb923c', 500: '#f97316', 600: '#ea580c', 700: '#c2410c', 900: '#7c2d12' },
    accent: { 400: '#facc15', 500: '#eab308', 600: '#ca8a04', 700: '#a16207' },
  },
  {
    id: 'ocean',
    name: 'Océan',
    blurb: 'Bleu → turquoise',
    brand: { 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 900: '#1e3a8a' },
    accent: { 400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e' },
  },
  {
    id: 'meadow',
    name: 'Meadow',
    blurb: 'Vert → lime',
    brand: { 400: '#4ade80', 500: '#22c55e', 600: '#16a34a', 700: '#15803d', 900: '#14532d' },
    accent: { 400: '#a3e635', 500: '#84cc16', 600: '#65a30d', 700: '#4d7c0f' },
  },
  {
    id: 'ember',
    name: 'Ember',
    blurb: 'Rose → corail',
    brand: { 400: '#fb7185', 500: '#f43f5e', 600: '#e11d48', 700: '#be123c', 900: '#881337' },
    accent: { 400: '#fb923c', 500: '#f97316', 600: '#ea580c', 700: '#c2410c' },
  },
  {
    id: 'noir',
    name: 'Noir or',
    blurb: 'Anthracite → or',
    brand: { 400: '#a8a29e', 500: '#78716c', 600: '#57534e', 700: '#44403c', 900: '#1c1917' },
    accent: { 400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 700: '#b45309' },
  },
]

export const DEFAULT_PALETTE = 'aurora'
export const PALETTE_STORAGE_KEY = 'soz-palette'

export function getPalette(id) {
  return PALETTES.find(p => p.id === id) || PALETTES[0]
}

function hexToRgb(hex) {
  const h = hex.replace('#', '')
  const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

/** Applique une palette sur <html> (Tailwind brand/accent + tokens DS). */
export function applyPalette(id) {
  const p = getPalette(id)
  const root = document.documentElement
  root.dataset.palette = p.id

  const set = (k, v) => root.style.setProperty(k, v)
  for (const [k, v] of Object.entries(p.brand)) {
    set(`--color-brand-${k}`, v)
  }
  for (const [k, v] of Object.entries(p.accent)) {
    set(`--color-accent-${k}`, v)
  }

  set('--ds-brand', p.brand[500])
  set('--ds-brand-strong', p.brand[600])
  set('--ds-accent', p.accent[500])
  set('--ds-accent-strong', p.accent[600])
  set('--ds-gradient-brand', `linear-gradient(135deg, ${p.brand[500]} 0%, ${p.accent[500]} 100%)`)
  set('--ds-gradient-cta', `linear-gradient(to right, ${p.brand[600]}, ${p.accent[500]})`)
  set('--ds-scrollbar', p.brand[500])

  const [br, bg, bb] = hexToRgb(p.brand[500])
  const [ar, ag, ab] = hexToRgb(p.accent[500])
  set('--ds-grid-line', `rgb(${br} ${bg} ${bb} / 0.05)`)
  set('--ds-selection', `rgb(${br} ${bg} ${bb} / 0.25)`)
  set('--ds-glow-brand', `0 0 30px rgb(${br} ${bg} ${bb} / 0.35), 0 0 80px rgb(${br} ${bg} ${bb} / 0.1)`)
  set('--ds-glow-accent', `0 0 30px rgb(${ar} ${ag} ${ab} / 0.35), 0 0 80px rgb(${ar} ${ag} ${ab} / 0.1)`)

  try {
    localStorage.setItem(PALETTE_STORAGE_KEY, p.id)
  } catch {
    /* ignore */
  }

  return p
}

export function initPalette() {
  let id = DEFAULT_PALETTE
  try {
    id = localStorage.getItem(PALETTE_STORAGE_KEY) || DEFAULT_PALETTE
  } catch {
    /* ignore */
  }
  return applyPalette(id)
}
