import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText } from 'lucide-react'

export default function StickyCta() {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)
  const onDevisPage = pathname === '/devis'

  useEffect(() => {
    if (onDevisPage) {
      setVisible(false)
      return
    }
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.45)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onDevisPage])

  return (
    <AnimatePresence>
      {visible && !onDevisPage && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
          className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
        >
          <motion.div
            animate={{ boxShadow: ['0 10px 30px rgba(168,85,247,0.25)', '0 10px 40px rgba(6,182,212,0.35)', '0 10px 30px rgba(168,85,247,0.25)'] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-2xl"
          >
            <Link
              to="/devis"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 to-accent-500 text-white font-semibold text-sm"
            >
              <FileText className="w-4 h-4" />
              Devis
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
