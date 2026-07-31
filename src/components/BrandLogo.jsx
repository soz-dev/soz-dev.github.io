import { useState } from 'react'
import { BRAND_ALT, BRAND_NAME, LOGO } from '../lib/brand'
import Skeleton from './Skeleton'

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

function ThemeImgs({ light, dark, width, height, className: imgClass, imgBase }) {
  const [lightOk, setLightOk] = useState(false)
  const [darkOk, setDarkOk] = useState(false)
  const ready = lightOk || darkOk

  return (
    <>
      {!ready && (
        <Skeleton
          className="absolute inset-0 z-0"
          rounded="rounded-2xl"
        />
      )}
      <img
        {...imgBase}
        src={light}
        width={width}
        height={height}
        className={`object-contain bg-transparent dark:hidden relative z-[1] transition-opacity duration-300 ${
          lightOk ? 'opacity-100' : 'opacity-0'
        } ${imgClass}`}
        onLoad={() => setLightOk(true)}
      />
      <img
        {...imgBase}
        src={dark}
        width={width}
        height={height}
        className={`object-contain bg-transparent hidden dark:block relative z-[1] transition-opacity duration-300 ${
          darkOk ? 'opacity-100' : 'opacity-0'
        } ${imgClass}`}
        onLoad={() => setDarkOk(true)}
      />
    </>
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

  // full — PNG avec skeleton jusqu’au chargement (aspect réservé → pas de trou blanc)
  return (
    <span className={`relative inline-block aspect-square bg-transparent overflow-hidden ${className}`}>
      <ThemeImgs
        light={LOGO.fullLight}
        dark={LOGO.fullDark}
        width={500}
        height={500}
        imgBase={imgBase}
        className="w-full h-full"
      />
    </span>
  )
}
