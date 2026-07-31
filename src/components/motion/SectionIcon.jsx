/**
 * Visuel de section sans Lottie : icône Lucide unique (évite toute répétition d’animation).
 */
export default function SectionIcon({
  icon: Icon,
  color = '#a855f7',
  size = 'xl',
  className = '',
}) {
  const dims = {
    sm: 'w-20 h-20',
    md: 'w-28 h-28',
    lg: 'w-36 h-36',
    xl: 'w-44 h-44 md:w-52 md:h-52',
    '2xl': 'w-52 h-52 md:w-64 md:h-64',
  }[size] || 'w-44 h-44 md:w-52 md:h-52'

  const iconSize = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20 md:w-24 md:h-24',
    '2xl': 'w-24 h-24 md:w-28 md:h-28',
  }[size] || 'w-20 h-20'

  return (
    <div
      className={`mx-auto mb-6 ${dims} rounded-3xl flex items-center justify-center ${className}`}
      style={{ background: `${color}14`, border: `1px solid ${color}28` }}
      aria-hidden
    >
      <Icon className={iconSize} style={{ color }} strokeWidth={1.5} />
    </div>
  )
}
