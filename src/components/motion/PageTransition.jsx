import { motion, useReducedMotion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { pageVariants } from '../../lib/motionPresets'

/** Transition douce entre pages (layout public). */
export default function PageTransition({ children }) {
  const { pathname } = useLocation()
  const reduce = useReducedMotion()

  if (reduce) return children

  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  )
}
