import LottieIcon from './LottieIcon'

/**
 * Illustration Lottie au-dessus d’un titre de section.
 * size: sm | md | lg | xl  (défaut lg — les personas doivent se lire clairement)
 */
export default function SectionLottie({
  src,
  size = 'lg',
  className = '',
  loop = true,
}) {
  const dims = {
    sm: 'w-20 h-20 md:w-24 md:h-24',
    md: 'w-28 h-28 md:w-32 md:h-32',
    lg: 'w-36 h-36 md:w-44 md:h-44',
    xl: 'w-44 h-44 md:w-56 md:h-56',
  }[size] || 'w-36 h-36 md:w-44 md:h-44'

  return (
    <div className={`mx-auto mb-5 ${dims} ${className}`} aria-hidden>
      <LottieIcon src={src} className="w-full h-full" loop={loop} />
    </div>
  )
}
