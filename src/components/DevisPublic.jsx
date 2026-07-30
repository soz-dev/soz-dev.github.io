import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Send, Check, Copy, CheckCircle2, RotateCcw } from 'lucide-react'
import { SECTIONS, generateEmailBody } from '../lib/questionnaire'
import { calculateDevis } from '../lib/pricingEngine'
import { parseOpt, fmt } from '../lib/formatUtils'

function QuestionField({ q, value, onChange }) {
  const opts = (q.options || []).map(parseOpt)

  if (q.type === 'select') {
    return (
      <select
        value={value || ''}
        onChange={e => onChange(e.target.value)}
        className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-brand-500 transition text-sm"
      >
        <option value="">— Sélectionner —</option>
        {opts.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    )
  }

  if (q.type === 'radio') {
    return (
      <div className="flex flex-col gap-2" role="radiogroup" aria-label={q.label}>
        {opts.map(o => (
          <label
            key={o.value}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition ${
              value === o.value
                ? 'border-brand-500 bg-purple-50 dark:bg-purple-500/10'
                : 'border-gray-200 dark:border-white/10 bg-transparent hover:border-purple-300 dark:hover:border-brand-500/30'
            }`}
          >
            <input
              type="radio"
              name={q.id}
              value={o.value}
              checked={value === o.value}
              onChange={() => onChange(o.value)}
              className="sr-only"
            />
            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 pointer-events-none ${value === o.value ? 'border-brand-500' : 'border-gray-300 dark:border-white/30'}`}>
              {value === o.value && <div className="w-2 h-2 rounded-full bg-purple-500" />}
            </div>
            <span className="text-sm text-gray-800 dark:text-slate-200 pointer-events-none">{o.label}</span>
          </label>
        ))}
      </div>
    )
  }

  if (q.type === 'multiselect') {
    const selected = Array.isArray(value) ? value : []
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {opts.map(o => {
          const checked = selected.includes(o.value)
          return (
            <label
              key={o.value}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border cursor-pointer transition text-sm select-none ${
                checked
                  ? 'border-brand-500 bg-purple-50 dark:bg-purple-500/10 text-brand-700 dark:text-brand-300'
                  : 'border-gray-200 dark:border-white/10 text-gray-700 dark:text-slate-300 hover:border-purple-300 dark:hover:border-brand-500/30'
              }`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => onChange(o.value)}
                className="sr-only"
              />
              <div className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition ${checked ? 'border-brand-500 bg-purple-500' : 'border-gray-300 dark:border-white/30'}`}>
                {checked && <Check size={10} className="text-white" />}
              </div>
              {o.label}
            </label>
          )
        })}
      </div>
    )
  }

  if (q.type === 'textarea') {
    return (
      <textarea
        value={value || ''}
        onChange={e => onChange(e.target.value)}
        placeholder={q.placeholder || ''}
        rows={3}
        className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/25 focus:outline-none focus:border-brand-500 transition text-sm resize-none"
      />
    )
  }

  return (
    <input
      type="text"
      value={value || ''}
      onChange={e => onChange(e.target.value)}
      placeholder={q.placeholder || ''}
      className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/25 focus:outline-none focus:border-brand-500 transition text-sm"
    />
  )
}

export default function DevisPublic() {
  const [contact, setContact] = useState({ nom: '', email: '', telephone: '', entreprise: '', projet_nom: '' })
  const [questionnaire, setQuestionnaire] = useState({})
  const [step, setStep] = useState(0)
  const [copied, setCopied] = useState(false)
  const [sent, setSent] = useState(false)

  const visibleSections = useMemo(
    () => SECTIONS.filter(s => !s.conditional || s.conditional(questionnaire)),
    [questionnaire]
  )

  const devis = useMemo(() => calculateDevis(questionnaire), [questionnaire])

  // step 0 = contact, 1..N = sections, N+1 = recap
  const totalSteps = 1 + visibleSections.length + 1
  const isContactStep = step === 0
  const isRecapStep = step === totalSteps - 1
  const currentSection = !isContactStep && !isRecapStep ? visibleSections[step - 1] : null
  const progress = step === 0 ? 0 : Math.round((step / (totalSteps - 1)) * 100)

  const setAnswer = (id, val) => setQuestionnaire(prev => ({ ...prev, [id]: val }))
  const toggleMulti = (id, opt) => setQuestionnaire(prev => {
    const cur = prev[id] || []
    return { ...prev, [id]: cur.includes(opt) ? cur.filter(x => x !== opt) : [...cur, opt] }
  })

  const emailBody = useMemo(() => generateEmailBody(
    { nom: contact.nom, email: contact.email, telephone: contact.telephone, entreprise: contact.entreprise },
    { nom: contact.projet_nom || 'Nouveau projet' },
    questionnaire
  ), [contact, questionnaire])

  const handleSend = () => {
    const subject = `Demande de devis – ${contact.projet_nom || 'Nouveau projet'}${contact.nom ? ' – ' + contact.nom : ''}`
    window.location.href = `mailto:sofyan.devpro@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`
    setSent(true)
  }

  const handleSendAgain = () => {
    setSent(false)
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(emailBody)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const canProceed = !isContactStep || (contact.nom.trim().length > 0 && contact.email.trim().length > 0)

  return (
    <section id="devis" className="py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[900px] h-[700px] rounded-full blur-[160px]" style={{ background: 'rgba(124,58,237,0.05)' }} />
      </div>
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(6,182,212,0.25), transparent)' }} />
      <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(168,85,247,0.2), transparent)' }} />

      <div className="relative max-w-5xl mx-auto px-8 lg:px-12">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-mono text-accent-400 tracking-[0.3em] uppercase block mb-4">
            Devis en ligne
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5">
            Votre devis en{' '}
            <span className="gradient-text">2 minutes</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg" style={{ maxWidth: '460px', margin: '0 auto' }}>
            Estimation instantanée, acompte 30 %, envoi par email. Sans engagement.
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-between text-xs text-gray-400 dark:text-slate-500 mb-2">
            <span className="font-medium">
              {isContactStep ? 'Vos coordonnées' : isRecapStep ? 'Envoi de la demande' : currentSection?.title}
            </span>
            <span className="font-mono">{step + 1} / {totalSteps}</span>
          </div>
          <div className="h-1 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(to right, #a855f7, #06b6d4)' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 items-start">

          {/* Form card */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
              >
                {/* STEP 0 — Contact info */}
                {isContactStep && (
                  <div className="glass rounded-2xl p-8 border border-gray-100 dark:border-white/8">
                    <div className="flex items-center gap-3 mb-7">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#06b6d415', border: '1px solid #06b6d430' }}>
                        <span className="text-lg">👤</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">Vos informations</h3>
                        <p className="text-xs text-slate-400">Nom et email requis pour l'envoi</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { id: 'nom',        label: 'Nom *',          placeholder: 'Jean Dupont' },
                        { id: 'email',      label: 'Email *',        placeholder: 'jean@exemple.com', type: 'email' },
                        { id: 'telephone',  label: 'Téléphone',      placeholder: '06 12 34 56 78' },
                        { id: 'entreprise', label: 'Société',        placeholder: 'Ma Boîte SARL' },
                      ].map(f => (
                        <div key={f.id}>
                          <label className="block text-xs font-medium text-gray-500 dark:text-slate-400 mb-1.5">{f.label}</label>
                          <input
                            type={f.type || 'text'}
                            value={contact[f.id]}
                            onChange={e => setContact(c => ({ ...c, [f.id]: e.target.value }))}
                            placeholder={f.placeholder}
                            className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/25 focus:outline-none focus:border-brand-500 transition text-sm"
                          />
                        </div>
                      ))}
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-medium text-gray-500 dark:text-slate-400 mb-1.5">
                          Nom du projet <span className="text-gray-400 dark:text-slate-600">(facultatif)</span>
                        </label>
                        <input
                          type="text"
                          value={contact.projet_nom}
                          onChange={e => setContact(c => ({ ...c, projet_nom: e.target.value }))}
                          placeholder="Mon site vitrine, ma boutique Stripe, mon app iOS..."
                          className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/25 focus:outline-none focus:border-brand-500 transition text-sm"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* QUESTIONNAIRE SECTION */}
                {currentSection && (
                  <div className="glass rounded-2xl p-8 border border-gray-100 dark:border-white/8">
                    <div className="flex items-center gap-3 mb-7">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: '#a855f715', border: '1px solid #a855f730' }}>
                        {currentSection.emoji}
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white">{currentSection.title}</h3>
                    </div>
                    <div className="space-y-6">
                      {currentSection.questions.map(q => (
                        <div key={q.id}>
                          <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                            {q.label}
                            {q.required && <span className="text-brand-400 ml-1">*</span>}
                          </label>
                          <QuestionField
                            q={q}
                            value={q.type === 'multiselect' ? (questionnaire[q.id] || []) : (questionnaire[q.id] || '')}
                            onChange={val => q.type === 'multiselect' ? toggleMulti(q.id, val) : setAnswer(q.id, val)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* RECAP / SEND */}
                {isRecapStep && (
                  <div className="glass rounded-2xl p-8 border border-gray-100 dark:border-white/8">
                    {sent ? (
                      <div className="text-center py-4">
                        <div
                          className="mx-auto w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                          style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.35)' }}
                        >
                          <CheckCircle2 className="w-7 h-7 text-emerald-500" />
                        </div>
                        <h3 className="font-bold text-emerald-700 dark:text-emerald-400 text-xl mb-2">
                          Demande prête à envoyer
                        </h3>
                        <div className="rounded-xl border border-emerald-200 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 p-5 mb-6 text-left">
                          <p className="text-sm text-emerald-900 dark:text-emerald-100 leading-relaxed">
                            Votre client mail s&apos;est ouvert — envoyez l&apos;email prérempli pour finaliser.
                            Merci, nous vous recontactons rapidement.
                          </p>
                          <p className="text-xs text-emerald-700/80 dark:text-emerald-300/70 mt-3 leading-relaxed">
                            Nous ne pouvons pas confirmer l&apos;envoi depuis le site : finalisez dans votre application mail.
                          </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                          <button
                            type="button"
                            onClick={handleSend}
                            className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-white text-sm transition hover:opacity-90"
                            style={{ background: 'linear-gradient(135deg, #9333ea, #06b6d4)' }}
                          >
                            <Send size={14} />
                            Rouvrir l&apos;email
                          </button>
                          <button
                            type="button"
                            onClick={handleSendAgain}
                            className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl border border-gray-200 dark:border-white/10 text-gray-600 dark:text-slate-300 hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition text-sm font-medium"
                          >
                            <RotateCcw size={14} />
                            Modifier / renvoyer
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: '#06b6d415', border: '1px solid #06b6d430' }}>
                            ✉️
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 dark:text-white">Prêt à envoyer</h3>
                            <p className="text-xs text-slate-400">Réponse sous 24h</p>
                          </div>
                        </div>

                        {contact.nom && (
                          <div className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/8 rounded-xl p-4 mb-6 text-sm">
                            <p className="font-semibold text-gray-900 dark:text-white">{contact.nom}</p>
                            {contact.email && <p className="text-gray-500 dark:text-slate-400 text-xs mt-0.5">{contact.email}</p>}
                            {contact.entreprise && <p className="text-gray-500 dark:text-slate-400 text-xs">{contact.entreprise}</p>}
                            {contact.projet_nom && <p className="text-purple-500 text-xs mt-1 font-medium">{contact.projet_nom}</p>}
                          </div>
                        )}

                        {devis && devis.sousTotal > 0 && (
                          <div className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/8 rounded-xl p-4 mb-6">
                            <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Estimation calculée</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">{fmt(devis.sousTotal)}</p>
                          </div>
                        )}

                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-7">
                          En cliquant sur <strong className="text-gray-900 dark:text-white">Envoyer ma demande</strong>, votre application mail s&apos;ouvre avec toutes vos réponses préremplies. Il reste à envoyer l&apos;email pour finaliser.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <button
                            onClick={handleSend}
                            disabled={!contact.nom || !contact.email}
                            className="flex-1 flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02] active:scale-100 disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100"
                            style={{ background: 'linear-gradient(135deg, #9333ea, #06b6d4)' }}
                          >
                            <Send size={15} />
                            Envoyer ma demande
                          </button>
                          <button
                            onClick={handleCopy}
                            className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl border border-gray-200 dark:border-white/10 text-gray-600 dark:text-slate-300 hover:border-purple-400 dark:hover:border-brand-500 hover:text-purple-600 dark:hover:text-brand-400 transition text-sm font-medium"
                          >
                            {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                            {copied ? 'Copié' : 'Copier le texte'}
                          </button>
                        </div>

                        {!contact.email && (
                          <p className="text-xs text-amber-400 mt-3 flex items-center gap-1.5">
                            <span>⚠</span>
                            Retournez à l&apos;étape 1 pour renseigner votre nom et email.
                          </p>
                        )}
                      </>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-5">
              <button
                onClick={() => setStep(s => Math.max(0, s - 1))}
                disabled={step === 0}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-gray-500 dark:text-slate-400 hover:border-purple-400 hover:text-purple-500 dark:hover:border-brand-500 dark:hover:text-brand-400 transition text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ArrowLeft size={14} />
                Précédent
              </button>

              {!isRecapStep && (
                <button
                  onClick={() => setStep(s => s + 1)}
                  disabled={!canProceed}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-medium text-sm transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {step === totalSteps - 2 ? 'Récapitulatif' : 'Suivant'}
                  <ArrowRight size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Sticky pricing sidebar */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl p-6 border" style={{ background: '#030712', borderColor: 'rgba(255,255,255,0.06)' }}>
              <p className="text-xs font-mono text-brand-400 tracking-wider uppercase mb-5">Estimation</p>

              {devis && devis.sousTotal > 0 ? (
                <>
                  <div className="text-3xl font-bold text-accent-400 mb-0.5">{fmt(devis.sousTotal)}</div>
                  <div className="text-xs text-slate-500 mb-5">Hors taxes · hors maintenance</div>

                  <div className="space-y-2 mb-4">
                    {devis.lignes.map((l, i) => (
                      <div key={i} className="flex items-start justify-between gap-2 text-xs">
                        <span className="text-slate-400 leading-snug">{l.label}</span>
                        <span className="text-white font-semibold flex-shrink-0">{fmt(l.montant)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-3 mb-4" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-500">Acompte 30 %</span>
                      <span className="text-brand-400 font-semibold">{fmt(devis.acompte)}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Solde livraison</span>
                      <span className="text-white font-semibold">{fmt(devis.solde)}</span>
                    </div>
                    {devis.maintenance > 0 && (
                      <div className="flex justify-between text-xs mt-1.5">
                        <span className="text-slate-500">Maintenance /mois</span>
                        <span className="text-brand-400 font-semibold">{fmt(devis.maintenance)}</span>
                      </div>
                    )}
                  </div>

                  {devis.inclus?.length > 0 && (
                    <div className="border-t pt-3" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                      <p className="text-xs text-emerald-400 font-semibold mb-2">Inclus</p>
                      {devis.inclus.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-emerald-300/70 mb-1 leading-snug">
                          <Check size={9} className="mt-0.5 flex-shrink-0 text-emerald-400" />
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="py-8 text-center">
                  <div className="text-3xl mb-3 opacity-30">💡</div>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Sélectionnez un type de projet pour voir l'estimation en temps réel
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
