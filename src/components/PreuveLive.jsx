import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PRIX_BASE } from '../lib/pricingEngine'
import LottieIcon from './motion/LottieIcon'
import { LOTTIE } from '../lib/lottieMap'

const METRICS = [
  { label: 'Réponse sous', value: 24, suffix: 'h', prefix: '' },
  { label: 'Livraison dès', value: 3, suffix: ' j', prefix: '' },
  { label: 'À partir de', value: PRIX_BASE['site-vitrine'], suffix: '€', prefix: '' },
  { label: 'Acompte', value: 30, suffix: '%', prefix: '' },
]

function useCountUp(target, active, duration = 1100) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!active) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - (1 - t) ** 3
      setN(Math.round(target * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])
  return n
}

function Metric({ label, value, suffix, prefix, active }) {
  const n = useCountUp(value, active)
  return (
    <div className="text-center px-3 py-2">
      <div className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tabular-nums">
        {prefix}{n.toLocaleString('fr-FR')}{suffix}
      </div>
      <div className="text-[11px] md:text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">{label}</div>
    </div>
  )
}

/** Bandeau de preuve sobre (sans gimmick « live »). */
export default function PreuveLive() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section ref={ref} className="relative border-y border-gray-100 dark:border-white/5 bg-gray-50/80 dark:bg-white/[0.02]">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-8 md:py-10">
        <div className="flex justify-center mb-5">
          <div className="w-24 h-24 opacity-90">
            <LottieIcon src={LOTTIE.trust} className="w-full h-full" />
          </div>
        </div>
        <p className="text-center text-xs text-slate-500 dark:text-slate-400 mb-6">
          Réponse sous 24h · Prix affichés · 1 mois de support inclus
        </p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 divide-y-0 md:divide-x divide-gray-200/80 dark:divide-white/5"
        >
          {METRICS.map((m) => (
            <Metric key={m.label} {...m} active={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
