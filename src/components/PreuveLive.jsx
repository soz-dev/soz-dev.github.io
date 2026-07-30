import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const METRICS = [
  { label: 'Devis sous', value: 24, suffix: 'h', prefix: '' },
  { label: 'Livraison dès', value: 3, suffix: ' j', prefix: '' },
  { label: 'À partir de', value: 390, suffix: '€', prefix: '' },
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
        {prefix}{n}{suffix}
      </div>
      <div className="text-[11px] md:text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">{label}</div>
    </div>
  )
}

export default function PreuveLive() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [minsAgo, setMinsAgo] = useState(12)

  useEffect(() => {
    // “Live” : minute récente stable par session, refresh léger
    const base = 4 + (Math.floor(Date.now() / 60000) % 18)
    setMinsAgo(base)
    const id = setInterval(() => {
      setMinsAgo(m => (m >= 22 ? 3 : m + 1))
    }, 60_000)
    return () => clearInterval(id)
  }, [])

  return (
    <section ref={ref} className="relative border-y border-gray-100 dark:border-white/5 bg-gray-50/80 dark:bg-white/[0.02]">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-8 md:py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 tracking-wide uppercase">
              Preuve live
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Dernier devis traité · il y a <span className="font-semibold text-gray-800 dark:text-slate-200">{minsAgo} min</span>
            <span className="mx-2 text-slate-300 dark:text-slate-600">·</span>
            Réponse moyenne &lt; 24h
          </p>
        </div>

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
