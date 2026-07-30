import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, ArrowRight, FileText, MessageSquare, ArrowLeft, Send } from 'lucide-react'

export default function Contact() {
  const [mode, setMode] = useState(null) // null | 'info'
  const [form, setForm] = useState({ nom: '', email: '', message: '' })

  const handleDevis = () => {
    document.getElementById('devis')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSend = () => {
    const subject = `Contact – ${form.nom || 'Visiteur'}`
    const body = `Nom : ${form.nom}\nEmail : ${form.email}\n\n${form.message}`
    window.location.href = `mailto:sofyan.devpro@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const canSend = form.nom.trim() && form.email.trim() && form.message.trim()

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full blur-[120px]" style={{ background: 'rgba(124,58,237,0.08)' }} />
      </div>
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(168,85,247,0.3), transparent)' }} />
      <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(6,182,212,0.2), transparent)' }} />

      <div className="relative max-w-2xl mx-auto px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono text-purple-400 tracking-[0.3em] uppercase block mb-4">
            Parlons-en
          </span>
          <h2 className="font-bold text-gray-900 dark:text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
            Vous avez un projet{' '}
            <span className="gradient-text">en tête&nbsp;?</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed" style={{ maxWidth: '420px', margin: '0 auto' }}>
            Choisissez comment vous souhaitez me contacter.
          </p>
        </motion.div>

        {/* Content area */}
        <AnimatePresence mode="wait">

          {/* Mode selector */}
          {mode === null && (
            <motion.div
              key="selector"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {/* Card Devis */}
              <button
                onClick={handleDevis}
                className="group text-left glass rounded-2xl p-7 border border-gray-100 dark:border-white/8 hover:border-purple-400 dark:hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.25)' }}>
                  <FileText className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Demande de devis</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5">
                  Vous avez un projet précis. Répondez au questionnaire (5 min) et recevez une estimation instantanée.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-purple-500 group-hover:gap-3 transition-all">
                  Accéder au formulaire <ArrowRight size={14} />
                </span>
              </button>

              {/* Card Info */}
              <button
                onClick={() => setMode('info')}
                className="group text-left glass rounded-2xl p-7 border border-gray-100 dark:border-white/8 hover:border-cyan-400 dark:hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)' }}>
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Question / information</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5">
                  Une question sur mes services, mes tarifs, ma disponibilité ? Écrivez-moi directement.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-500 group-hover:gap-3 transition-all">
                  Envoyer un message <ArrowRight size={14} />
                </span>
              </button>
            </motion.div>
          )}

          {/* Simple contact form */}
          {mode === 'info' && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass rounded-2xl p-8 border border-gray-100 dark:border-white/8">
                <div className="flex items-center gap-3 mb-7">
                  <button
                    onClick={() => setMode(null)}
                    className="w-8 h-8 rounded-lg flex items-center justify-center border border-gray-200 dark:border-white/10 text-gray-400 hover:text-gray-600 dark:hover:text-white hover:border-gray-300 dark:hover:border-white/20 transition"
                  >
                    <ArrowLeft size={14} />
                  </button>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Envoyer un message</h3>
                    <p className="text-xs text-slate-400">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 dark:text-slate-400 mb-1.5">Nom *</label>
                      <input
                        type="text"
                        value={form.nom}
                        onChange={e => setForm(f => ({ ...f, nom: e.target.value }))}
                        placeholder="Jean Dupont"
                        className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/25 focus:outline-none focus:border-purple-500 transition text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 dark:text-slate-400 mb-1.5">Email *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="jean@exemple.com"
                        className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/25 focus:outline-none focus:border-purple-500 transition text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 dark:text-slate-400 mb-1.5">Message *</label>
                    <textarea
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Bonjour, je souhaitais vous demander..."
                      rows={5}
                      className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/25 focus:outline-none focus:border-purple-500 transition text-sm resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSend}
                    disabled={!canSend}
                    className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.01] active:scale-100 disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100"
                    style={{ background: 'linear-gradient(135deg, #9333ea, #06b6d4)' }}
                  >
                    <Send size={15} />
                    Envoyer le message
                  </button>

                  <p className="text-xs text-center text-slate-400 dark:text-slate-500">
                    Votre application mail s'ouvrira avec le message pré-rempli.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-3 gap-6 mt-14 text-center"
          style={{ maxWidth: '320px', margin: '3.5rem auto 0' }}
        >
          {[
            { value: '100%', label: 'Satisfaction' },
            { value: '<48h', label: 'Réponse' },
            { value: '∞', label: 'Créativité' },
          ].map(s => (
            <div key={s.label}>
              <div className="text-2xl font-bold gradient-text mb-1">{s.value}</div>
              <div className="text-xs text-slate-500 dark:text-slate-600 font-mono">{s.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

