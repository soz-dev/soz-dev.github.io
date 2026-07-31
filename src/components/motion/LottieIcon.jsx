import { useEffect, useState } from 'react'

/**
 * Wrapper Lottie lazy (code-split) + prefers-reduced-motion.
 */
export default function LottieIcon({
  src,
  className = '',
  loop = true,
  autoplay = true,
  style,
}) {
  const [Lottie, setLottie] = useState(null)
  const [data, setData] = useState(null)
  const [reduce, setReduce] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduce(mq.matches)
    const onChange = () => setReduce(mq.matches)
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])

  useEffect(() => {
    let cancelled = false
    import('lottie-react').then((mod) => {
      // Interop ESM/CJS : default peut être le namespace (object), pas le composant
      const Comp = mod.default?.default ?? mod.LottiePlayer ?? mod.default
      if (!cancelled && typeof Comp === 'function') setLottie(() => Comp)
    })
    return () => { cancelled = true }
  }, [])

  useEffect(() => {
    let cancelled = false
    fetch(src)
      .then(r => r.json())
      .then(json => {
        if (!cancelled) setData(json)
      })
      .catch(() => {})
    return () => { cancelled = true }
  }, [src])

  if (!Lottie || !data) {
    return <div className={className} style={style} aria-hidden />
  }

  return (
    <div className={className} style={style} aria-hidden>
      <Lottie
        animationData={data}
        loop={reduce ? false : loop}
        autoplay={reduce ? false : autoplay}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}
