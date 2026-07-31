import { BRAND_ALT, BRAND_NAME, LOGO } from '../lib/brand'

/**
 * Logo SOZ_DEV.
 * - full   : monogramme + nom + tagline (hero) — PNG pour le lockup complet
 * - mark   : monogramme SVG (net, transparent)
 * - lockup : monogramme SVG + wordmark HTML (navbar / footer / admin)
 *
 * Clair / sombre via la classe `dark` du site (PNG full uniquement).
 */
function MarkSvg({ className = '' }) {
  return (
    <img
      src={LOGO.markSvg}
      alt=""
      width={44}
      height={28}
      decoding="async"
      className={`object-contain bg-transparent ${className}`}
      aria-hidden
    />
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
        className={`inline-flex items-center justify-center overflow-visible shrink-0 ${className}`}
        role="img"
        aria-label={BRAND_NAME}
      >
        <MarkSvg className={`h-full w-full max-h-full max-w-full ${markClassName}`} />
      </span>
    )
  }

  if (variant === 'lockup') {
    return (
      <span className={`inline-flex items-center gap-2.5 select-none overflow-visible ${className}`}>
        <span className="inline-flex h-9 w-14 shrink-0 items-center justify-center overflow-visible">
          <MarkSvg className="h-full w-full" />
        </span>
        <span
          className="font-display gradient-text leading-none"
          style={{ fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.04em' }}
        >
          {BRAND_NAME}
        </span>
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
