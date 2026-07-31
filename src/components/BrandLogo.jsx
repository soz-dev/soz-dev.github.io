/**
 * Logo SOZ_DEV principal (PNG transparents).
 * - light : texte sombre → thème clair
 * - dark  : texte clair  → thème sombre
 * - mark  : icône navbar
 */
const LOGO_V = '3' // bust cache CDN / navigateur

export default function BrandLogo({
  variant = 'full',
  className = '',
  priority = false,
}) {
  if (variant === 'mark') {
    return (
      <img
        src={`/logo-mark.png?v=${LOGO_V}`}
        alt="SOZ_DEV"
        className={`object-contain ${className}`}
        width={40}
        height={40}
        decoding="async"
      />
    )
  }

  const imgProps = {
    alt: 'SOZ_DEV — Développement & solutions',
    width: 500,
    height: 500,
    decoding: priority ? 'sync' : 'async',
    ...(priority ? { fetchPriority: 'high' } : {}),
  }

  return (
    <span className={`relative inline-block bg-transparent ${className}`}>
      <img
        {...imgProps}
        src={`/logo-light.png?v=${LOGO_V}`}
        className="w-full h-auto object-contain bg-transparent dark:hidden"
      />
      <img
        {...imgProps}
        src={`/logo-dark.png?v=${LOGO_V}`}
        className="w-full h-auto object-contain bg-transparent hidden dark:block"
      />
    </span>
  )
}
