/**
 * Logo SOZ_DEV principal.
 * - full : monogramme + SOZ_DEV + tagline (hero)
 * - mark : icône seule (navbar)
 *
 * Clair / sombre via la classe `dark` du site (pas prefers-color-scheme).
 */
export default function BrandLogo({
  variant = 'full',
  className = '',
  priority = false,
}) {
  if (variant === 'mark') {
    return (
      <img
        src="/logo-mark.png"
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
    width: 512,
    height: 512,
    decoding: priority ? 'sync' : 'async',
    ...(priority ? { fetchPriority: 'high' } : {}),
  }

  return (
    <span className={`relative inline-block ${className}`}>
      <img
        {...imgProps}
        src="/logo-light.png"
        className="w-full h-auto object-contain dark:hidden"
      />
      <img
        {...imgProps}
        src="/logo-dark.png"
        className="w-full h-auto object-contain hidden dark:block"
      />
    </span>
  )
}
