import LottieIcon from './LottieIcon'

/**
 * Illustration Lottie au-dessus d’un titre de section.
 * size: sm | md | lg
 */
export default function SectionLottie({
  src,
  size = 'md',
  className = '',
  loop = true,
}) {
  const dims = {
    sm: 'w-14 h-14 md:w-16 md:h-16',
    md: 'w-20 h-20 md:w-24 md:h-24',
    lg: 'w-28 h-28 md:w-36 md:h-36',
  }[size] || 'w-20 h-20'

  return (
    <div className={`mx-auto mb-4 ${dims} ${className}`} aria-hidden>
      <LottieIcon src={src} className="w-full h-full" loop={loop} />
    </div>
  )
}
