import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const phrases = [
  "De l'idée à l'App Store.",
  'Du concept à la mise en ligne.',
  'Chaque pixel a son intention.',
  'Rapides, modernes, inoubliables.',
]

export default function PhrasesMarquee() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % phrases.length), 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-24 grid-pattern relative overflow-hidden">
      {/* Blob */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[300px] rounded-full blur-[100px] bg-purple-400/10 dark:bg-purple-700/15" />
      </div>

      <div className="relative z-10 text-center px-8">
        <div className="flex items-center justify-center gap-4">
          <span className="font-mono text-purple-500 text-3xl md:text-5xl select-none">//</span>

          <div style={{ overflow: 'hidden', height: 'clamp(2.5rem, 7vw, 5rem)', display: 'flex', alignItems: 'center' }}>
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-gray-900 dark:text-white font-bold"
                style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)', lineHeight: 1.1, whiteSpace: 'nowrap' }}
              >
                {phrases[index]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}


