import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'

/** Barre de progression de scroll en haut du viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 })
  const reduce = useReducedMotion()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (reduce || !show) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-brand-600 via-accent-500 to-brand-400"
      style={{ scaleX }}
    />
  )
}
