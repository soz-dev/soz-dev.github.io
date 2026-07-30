/** Tokens JS — pour styles inline / Framer / charts */

export const colors = {
  brand: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7c3aed',
    800: '#6b21a8',
    900: '#581c87',
  },
  accent: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
  },
  success: { 400: '#34d399', 500: '#10b981', 600: '#059669' },
  warning: { 400: '#fbbf24', 500: '#f59e0b', 600: '#d97706' },
  danger: { 400: '#f87171', 500: '#ef4444', 600: '#dc2626' },
  ink: {
    DEFAULT: '#111827',
    muted: '#64748b',
    subtle: '#94a3b8',
    inverse: '#ffffff',
  },
  surface: {
    DEFAULT: '#ffffff',
    muted: '#f8fafc',
    dark: '#030712',
  },
}

export const gradients = {
  brand: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
  cta: 'linear-gradient(to right, #9333ea, #06b6d4)',
}

export const fonts = {
  sans: "'Manrope', system-ui, sans-serif",
  display: "'Syne', system-ui, sans-serif",
  mono: "ui-monospace, 'SF Mono', Menlo, Consolas, monospace",
}

export const radius = {
  sm: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.25rem',
  '3xl': '1.5rem',
  full: '9999px',
  card: '1rem',
  pill: '9999px',
}

export const space = {
  section: '7rem',
  sectionSm: '4rem',
  container: '64rem',
  containerWide: '72rem',
}

export const motion = {
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeOutSoft: [0.22, 1, 0.36, 1],
  duration: { fast: 0.15, base: 0.3, slow: 0.55 },
  spring: { type: 'spring', stiffness: 380, damping: 32 },
}

export const typeScale = [
  { name: 'Display', className: 'ds-display', sample: 'SOZ_DEV' },
  { name: 'H1', className: 'ds-h1', sample: 'Sites & apps qui convertissent' },
  { name: 'H2', className: 'ds-h2', sample: 'Huit sites, huit univers' },
  { name: 'H3', className: 'ds-h3', sample: 'Pack Clé en main' },
  { name: 'Body LG', className: 'ds-body-lg', sample: 'Pour freelances, artisans et petits business.' },
  { name: 'Body', className: 'ds-body', sample: 'Devis sous 24h · Acompte 30 % · Support inclus.' },
  { name: 'Caption', className: 'ds-caption', sample: 'Délai typique · 1 à 2 semaines' },
  { name: 'Eyebrow', className: 'ds-eyebrow text-brand-500', sample: 'Investissement' },
  { name: 'Mono', className: 'ds-mono text-ink-muted', sample: 'à partir de 390€' },
]

export const brand = {
  name: 'SOZ-DEV',
  tagline: 'Sites & apps iOS qui convertissent — sans prix agence.',
  url: 'https://soz-dev.com',
}
