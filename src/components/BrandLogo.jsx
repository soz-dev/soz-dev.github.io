import { BRAND_ALT, BRAND_NAME, LOGO } from '../lib/brand'

/**
 * Logo SOZ_DEV.
 * - full   : lockup PNG clair/sombre (hero)
 * - mark   : wordmark texte compact (admin)
 * - lockup : wordmark HTML gradient (navbar / footer / admin)
 *
 * Pas d’image monogramme en nav/footer — le mark SVG était cassé.
 */
function Wordmark({ className = '', style }) {
  return (
    <span
      className={`font-display gradient-text leading-none select-none ${className}`}
      style={{ fontWeight: 700, letterSpacing: '0.04em', ...style }}
    >
      {BRAND_NAME}
    </span>
  )
}

export default function BrandLogo({
  variant = 'full',
  className = '',
  markClassName = '',
  priority = false,
}) {
  const imgBase = {
    alt: variant === 'full' ? BRAND_ALT : BRAND_NAME,
    decoding: priority ? 'sync' : 'async',
    ...(priority ? { fetchPriority: 'high' } : {}),
  }

  const ThemeImgs = ({ light, dark, width, height, className: imgClass }) => (
    <>
      <img
        {...imgBase}
        src={light}
        width={width}
        height={height}
        className={`object-contain bg-transparent dark:hidden ${imgClass}`}
      />
      <img
        {...imgBase}
        src={dark}
        width={width}
        height={height}
        className={`object-contain bg-transparent hidden dark:block ${imgClass}`}
      />
    </>
  )

  if (variant === 'mark') {
    return (
      <span
        className={`inline-flex items-center justify-center shrink-0 ${className}`}
        role="img"
        aria-label={BRAND_NAME}
      >
        <Wordmark className={markClassName} style={{ fontSize: '0.85rem' }} />
      </span>
    )
  }

  if (variant === 'lockup') {
    return (
      <span className={`inline-flex items-center overflow-visible ${className}`}>
        <Wordmark style={{ fontSize: '0.95rem' }} />
      </span>
    )
  }

  // full
  return (
    <span className={`relative inline-block bg-transparent overflow-visible ${className}`}>
      <ThemeImgs
        light={LOGO.fullLight}
        dark={LOGO.fullDark}
        width={500}
        height={500}
        className="w-full h-auto"
      />
    </span>
  )
}
