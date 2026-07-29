import { motion } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full blur-[120px]" style={{ background: 'rgba(124,58,237,0.08)' }} />
      </div>
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(168,85,247,0.3), transparent)' }} />
      <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(6,182,212,0.2), transparent)' }} />

      <div
        className="relative"
        style={{ maxWidth: '680px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="text-xs font-mono text-purple-400 tracking-[0.3em] uppercase"
            style={{ display: 'block', marginBottom: '1.5rem' }}
          >
            // parlons-en
          </span>

          <h2
            className="font-bold text-white"
            style={{
              fontSize: 'clamp(2.2rem, 6vw, 4rem)',
              lineHeight: 1.1,
              marginBottom: '1.75rem',
              textAlign: 'center',
            }}
          >
            Vous avez un projet{' '}
            <span className="gradient-text">en tête&nbsp;?</span>
          </h2>

          <p
            className="text-slate-400 leading-relaxed"
            style={{
              fontSize: '1.1rem',
              maxWidth: '460px',
              margin: '0 auto 3rem',
              textAlign: 'center',
            }}
          >
            Discutons de votre vision. Je vous accompagne de l'idée à la mise en ligne,
            avec soin et précision.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
            <a
              href="mailto:sofyan.devpro@gmail.com"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 glow-purple"
            >
              <Mail className="w-4 h-4" />
              sofyan.devpro@gmail.com
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', maxWidth: '340px', margin: '0 auto' }}
          >
            {[
              { value: '100%', label: 'Satisfaction' },
              { value: '<48h', label: 'Réponse' },
              { value: '∞', label: 'Créativité' },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div className="text-2xl font-bold gradient-text" style={{ marginBottom: '0.25rem' }}>{s.value}</div>
                <div className="text-xs text-slate-600 font-mono">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
