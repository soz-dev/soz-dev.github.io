import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText } from 'lucide-react'

export default function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const devis = document.getElementById('devis')
      const scrolled = window.scrollY > window.innerHeight * 0.55
      let inDevis = false
      if (devis) {
        const rect = devis.getBoundingClientRect()
        inDevis = rect.top < window.innerHeight * 0.7 && rect.bottom > 80
      }
      setVisible(scrolled && !inDevis)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
          className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
        >
          <a
            href="#devis"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 to-accent-500 text-white font-semibold text-sm shadow-lg shadow-brand-500/30"
          >
            <FileText className="w-4 h-4" />
            Devis en 2 min
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
