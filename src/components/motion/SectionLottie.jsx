import LottieIcon from './LottieIcon'

/**
 * Illustration Lottie au-dessus d’un titre de section.
 * size: sm | md | lg | xl | 2xl
 * Défaut xl — les personas doivent dominer le header de section.
 */
export default function SectionLottie({
  src,
  size = 'xl',
  className = '',
  loop = true,
}) {
  const dims = {
    sm: 'w-28 h-28 md:w-32 md:h-32',
    md: 'w-36 h-36 md:w-44 md:h-44',
    lg: 'w-44 h-44 md:w-56 md:h-56',
    xl: 'w-56 h-56 md:w-72 md:h-72',
    '2xl': 'w-64 h-64 md:w-80 md:h-80',
  }[size] || 'w-56 h-56 md:w-72 md:h-72'

  return (
    <div className={`mx-auto mb-6 ${dims} ${className}`} aria-hidden>
      <LottieIcon src={src} className="w-full h-full" loop={loop} />
    </div>
  )
}
