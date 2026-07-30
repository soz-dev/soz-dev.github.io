/** Presets Framer Motion partagés (respecte reduced-motion côté composants). */

export const easeOutExpo = [0.16, 1, 0.3, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOutExpo },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: easeOutExpo },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
}

export const staggerFast = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.04 },
  },
}

export const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOutExpo },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.25 },
  },
}
