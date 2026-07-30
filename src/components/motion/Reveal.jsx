import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../lib/motionPresets'

/** Révèle au scroll (viewport). */
export function Reveal({ children, className = '', delay = 0, as: Tag = motion.div }) {
  const reduce = useReducedMotion()
  if (reduce) {
    return <div className={className}>{children}</div>
  }
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        ...fadeUp,
        visible: {
          ...fadeUp.visible,
          transition: { ...fadeUp.visible.transition, delay },
        },
      }}
    >
      {children}
    </Tag>
  )
}

/** Conteneur avec stagger des enfants (enfants = motion.* avec variants fadeUp). */
export function Stagger({ children, className = '', fast = false }) {
  const reduce = useReducedMotion()
  if (reduce) {
    return <div className={className}>{children}</div>
  }
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fast ? { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } } : staggerContainer}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }) {
  const reduce = useReducedMotion()
  if (reduce) {
    return <div className={className}>{children}</div>
  }
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  )
}
