import { motion } from 'framer-motion'

const techs = [
  { name: 'React',       color: '#61DAFB' },
  { name: 'Vite',        color: '#646CFF' },
  { name: 'Tailwind CSS',color: '#06B6D4' },
  { name: 'Supabase',    color: '#3ECF8E' },
  { name: 'Cloudflare',  color: '#F38020' },
  { name: 'Swift',       color: '#F05138' },
  { name: 'SwiftUI',     color: '#007AFF' },
  { name: 'GameKit',     color: '#30D158' },
  { name: 'iOS',         color: '#A2AAAD' },
  { name: 'Figma',       color: '#A259FF' },
  { name: 'GitHub',      color: '#6E40C9' },
]

const doubled = [...techs, ...techs]

export default function Stack() {
  return (
    <section id="stack" className="py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-8 lg:px-12 mb-12" style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono text-brand-400 tracking-[0.3em] uppercase mb-4 block">
            Mon arsenal
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Technologies</h2>
        </motion.div>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Edge fades */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--page-bg), transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--page-bg), transparent)' }}
        />

        <div className="animate-marquee gap-4">
          {doubled.map((tech, i) => (
            <div
              key={i}
              className="mx-3 px-5 py-2.5 glass rounded-full border border-white/5 flex items-center gap-2.5 whitespace-nowrap select-none"
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: tech.color, boxShadow: `0 0 6px ${tech.color}88` }}
              />
              <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
