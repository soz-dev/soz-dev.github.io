import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Calculator } from 'lucide-react'
import { track, AnalyticsEvents } from '../lib/analytics'

/** Sticky mobile : chemin principal estimateur → devis. */
export default function StickyCta() {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)
  const reduce = useReducedMotion()
  const hide = pathname === '/devis' || pathname === '/tarifs'

  useEffect(() => {
    if (hide) {
      setVisible(false)
      return undefined
    }
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.45)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [hide])

  return (
    <AnimatePresence>
      {visible && !hide && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={reduce ? { duration: 0.15 } : { type: 'spring', stiffness: 380, damping: 32 }}
          className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
        >
          <Link
            to="/tarifs#estimateur"
            onClick={() => track(AnalyticsEvents.CTA_CLICK, { place: 'sticky', to: 'estimateur' })}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 to-accent-500 text-white font-semibold text-sm shadow-lg shadow-brand-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
          >
            <Calculator className="w-4 h-4" aria-hidden />
            Estimer mon projet
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
