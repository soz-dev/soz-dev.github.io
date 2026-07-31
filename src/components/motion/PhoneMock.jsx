import { motion } from 'framer-motion'

/** Visuel iPhone animé — cohérent avec « Applications iOS » (évite une fusée hors sujet). */
export default function PhoneMock({ color = '#007AFF', className = '' }) {
  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`} aria-hidden>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        <div
          className="w-[88px] h-[170px] md:w-[104px] md:h-[200px] rounded-[1.6rem] border-[3px] bg-gradient-to-b from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 shadow-lg overflow-hidden"
          style={{ borderColor: color }}
        >
          <div className="mx-auto mt-2 w-10 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600" />
          <div className="m-2 mt-3 h-[calc(100%-2rem)] rounded-xl overflow-hidden relative" style={{ background: `${color}18` }}>
            <motion.div
              className="absolute inset-x-2 top-3 h-2 rounded-full"
              style={{ background: color, opacity: 0.35 }}
              animate={{ opacity: [0.25, 0.55, 0.25] }}
              transition={{ duration: 2.4, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-x-2 top-8 h-16 rounded-lg"
              style={{ background: color, opacity: 0.2 }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2.8, repeat: Infinity }}
            />
            <div className="absolute inset-x-2 bottom-3 space-y-1.5">
              <div className="h-1.5 rounded-full bg-slate-300/80 dark:bg-slate-600/80 w-4/5" />
              <div className="h-1.5 rounded-full bg-slate-300/60 dark:bg-slate-600/60 w-3/5" />
            </div>
          </div>
        </div>
        <motion.div
          className="absolute -right-3 top-1/3 w-2.5 h-2.5 rounded-full"
          style={{ background: color }}
          animate={{ scale: [1, 1.35, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </motion.div>
    </div>
  )
}
