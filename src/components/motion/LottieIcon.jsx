import { useEffect, useRef, useState } from 'react'

/**
 * Wrapper Lottie lazy :
 * - charge lottie-react + JSON uniquement quand visible (IntersectionObserver)
 * - respects prefers-reduced-motion
 * - placeholder silencieux si import / JSON KO
 */
export default function LottieIcon({
  src,
  className = '',
  loop = true,
  autoplay = true,
  style,
  rootMargin = '120px',
}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const [Lottie, setLottie] = useState(null)
  const [data, setData] = useState(null)
  const [reduce, setReduce] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduce(mq.matches)
    const onChange = () => setReduce(mq.matches)
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return undefined
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { rootMargin, threshold: 0.01 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin])

  useEffect(() => {
    if (!inView) return undefined
    let cancelled = false
    import('lottie-react')
      .then((mod) => {
        const Comp = mod.default?.default ?? mod.LottiePlayer ?? mod.default
        if (!cancelled && typeof Comp === 'function') setLottie(() => Comp)
        else if (!cancelled) setFailed(true)
      })
      .catch(() => { if (!cancelled) setFailed(true) })
    return () => { cancelled = true }
  }, [inView])

  useEffect(() => {
    if (!inView) return undefined
    let cancelled = false
    setFailed(false)
    setData(null)
    fetch(src)
      .then((r) => {
        if (!r.ok) throw new Error(`Lottie ${r.status}`)
        return r.json()
      })
      .then((json) => {
        if (!cancelled) setData(json)
      })
      .catch(() => { if (!cancelled) setFailed(true) })
    return () => { cancelled = true }
  }, [src, inView])

  if (failed) {
    return <div ref={ref} className={className} style={style} aria-hidden />
  }

  if (!inView || !Lottie || !data) {
    return <div ref={ref} className={className} style={style} aria-hidden />
  }

  return (
    <div ref={ref} className={className} style={style} aria-hidden>
      <Lottie
        animationData={data}
        loop={reduce ? false : loop}
        autoplay={reduce ? false : autoplay}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}
