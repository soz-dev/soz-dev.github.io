import { useState, useMemo } from 'react'
import { supabase } from '../../lib/supabaseAdmin'
import { SECTIONS, generateEmailBody } from '../../lib/questionnaire'
import { calculateDevis } from '../../lib/pricingEngine'
import { exportDevisPDF } from '../../lib/generatePDF'
import { ArrowLeft, Save, Mail, FileDown, ChevronDown, ChevronUp, Check } from 'lucide-react'

const ALL_STATUTS = [
  'questionnaire', 'questionnaire-envoyé', 'réponse-reçue',
  'appel-planifié', 'devis-envoyé', 'en-cours', 'livré', 'archivé',
]

function parseOpt(opt) {
  const p = opt.split('|')
  return p.length === 2 ? { value: p[0], label: p[1] } : { value: opt, label: opt }
}

export default function ProjectPage({ client, project, go }) {
  const [nom, setNom] = useState(project?.nom || '')
  const [statut, setStatut] = useState(project?.statut || 'questionnaire')
  const [questionnaire, setQuestionnaire] = useState(project?.questionnaire || {})
  const [notesAdmin, setNotesAdmin] = useState(project?.notes_admin || '')
  const [openSections, setOpenSections] = useState({ projet: true })
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const devis = useMemo(() => calculateDevis(questionnaire), [questionnaire])

  const setAnswer = (id, value) => {
    setQuestionnaire(prev => ({ ...prev, [id]: value }))
    setSaved(false)
  }

  const toggleMulti = (id, opt) => {
    setQuestionnaire(prev => {
      const cur = prev[id] || []
      return { ...prev, [id]: cur.includes(opt) ? cur.filter(x => x !== opt) : [...cur, opt] }
    })
    setSaved(false)
  }

  const save = async () => {
    setSaving(true)
    const payload = {
      client_id: client.id,
      nom: nom || 'Nouveau projet',
      statut,
      questionnaire,
      notes_admin: notesAdmin,
      montant_total: devis?.sousTotal || 0,
      devis,
      updated_at: new Date().toISOString(),
    }
    if (project?.id) {
      await supabase.from('projets').update(payload).eq('id', project.id)
    } else {
      await supabase.from('projets').insert([payload])
    }
    setSaving(false)
    setSaved(true)
  }

  const sendEmail = () => {
    if (!client?.email) return alert('Pas d\'email pour ce client.')
    const body = generateEmailBody(client, { nom: nom || 'Nouveau projet' }, questionnaire)
    const subject = encodeURIComponent(`[SOZ-DEV] Questionnaire projet — ${nom || 'Nouveau projet'}`)
    // Truncate body if too long for mailto
    const maxLen = 1800
    const bodyEnc = encodeURIComponent(body.length > maxLen ? body.slice(0, maxLen) + '\n\n[... voir version complète en pièce jointe]' : body)
    window.open(`mailto:${client.email}?subject=${subject}&body=${bodyEnc}`)
  }

  const exportPDF = () => {
    if (!devis) return alert('Sélectionnez d\'abord un type de projet.')
    exportDevisPDF({ client, projet: { nom: nom || 'Nouveau projet' }, devis })
  }

  // Render a question field
  const renderField = (q) => {
    const val = questionnaire[q.id]

    if (q.type === 'text') return (
      <input
        value={val || ''} onChange={e => setAnswer(q.id, e.target.value)}
        placeholder={q.placeholder || ''}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-purple-500 transition placeholder-slate-600"
      />
    )

    if (q.type === 'textarea') return (
      <textarea
        value={val || ''} onChange={e => setAnswer(q.id, e.target.value)}
        placeholder={q.placeholder || ''} rows={3}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-purple-500 transition resize-none placeholder-slate-600"
      />
    )

    if (q.type === 'select') return (
      <select
        value={val || ''} onChange={e => setAnswer(q.id, e.target.value)}
        className="w-full bg-[#0d0d1a] border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-purple-500 transition"
      >
        <option value="">— Sélectionner —</option>
        {(q.options || []).map(opt => {
          const { value, label } = parseOpt(opt)
          return <option key={value} value={value}>{label}</option>
        })}
      </select>
    )

    if (q.type === 'radio') return (
      <div className="flex flex-wrap gap-2">
        {(q.options || []).map(opt => (
          <button key={opt} type="button" onClick={() => setAnswer(q.id, opt)}
            className={`text-xs px-3 py-1.5 rounded-full border transition ${
              val === opt ? 'bg-purple-600/30 border-purple-500 text-purple-300' : 'border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    )

    if (q.type === 'multiselect') return (
      <div className="flex flex-wrap gap-2">
        {(q.options || []).map(opt => {
          const active = (val || []).includes(opt)
          return (
            <button key={opt} type="button" onClick={() => toggleMulti(q.id, opt)}
              className={`text-xs px-3 py-1.5 rounded-full border transition flex items-center gap-1 ${
                active ? 'bg-purple-600/30 border-purple-500 text-purple-300' : 'border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
              }`}
            >
              {active && <Check size={10} />}{opt}
            </button>
          )
        })}
      </div>
    )

    return null
  }

  const visibleSections = SECTIONS.filter(s => !s.conditional || s.conditional(questionnaire))

  return (
    <div className="p-8">
      {/* Back */}
      <button onClick={() => go('clients', { openClient: client })}
        className="flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-5 transition">
        <ArrowLeft size={14} /> {client?.nom}
      </button>

      {/* Project name + status */}
      <div className="flex items-center gap-4 mb-8">
        <input
          value={nom} onChange={e => { setNom(e.target.value); setSaved(false) }}
          placeholder="Nom du projet"
          className="flex-1 bg-transparent border-b border-white/15 pb-2 text-2xl font-bold text-white focus:outline-none focus:border-purple-500 transition placeholder-slate-700"
        />
        <select
          value={statut} onChange={e => { setStatut(e.target.value); setSaved(false) }}
          className="bg-[#0d0d1a] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500 transition flex-shrink-0"
        >
          {ALL_STATUTS.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Main layout */}
      <div className="flex gap-8 items-start">
        {/* Left: Questionnaire */}
        <div className="flex-1 min-w-0 space-y-2">
          {visibleSections.map(section => {
            const isOpen = openSections[section.id] !== false
            return (
              <div key={section.id} className="bg-white/[0.03] border border-white/8 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenSections(p => ({ ...p, [section.id]: !isOpen }))}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition"
                >
                  <span className="text-sm font-medium text-white flex items-center gap-2.5">
                    <span className="text-base">{section.emoji}</span>
                    {section.title}
                  </span>
                  {isOpen
                    ? <ChevronUp size={14} className="text-slate-600 flex-shrink-0" />
                    : <ChevronDown size={14} className="text-slate-600 flex-shrink-0" />}
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 space-y-4 border-t border-white/5">
                    {section.questions.map(q => (
                      <div key={q.id} className="pt-4">
                        <label className="text-xs text-slate-400 block mb-2">
                          {q.label}{q.required && <span className="text-purple-400 ml-1">*</span>}
                        </label>
                        {renderField(q)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}

          {/* Admin notes */}
          <div className="bg-white/[0.03] border border-white/8 rounded-xl p-4">
            <label className="text-xs text-slate-400 uppercase tracking-wider block mb-2">
              📌 Notes internes <span className="normal-case text-slate-600">(non envoyées au client)</span>
            </label>
            <textarea
              value={notesAdmin} onChange={e => { setNotesAdmin(e.target.value); setSaved(false) }}
              rows={4} placeholder="Observations, points à aborder, contraintes, contexte..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-purple-500 transition resize-none placeholder-slate-600"
            />
          </div>
        </div>

        {/* Right: Devis + Actions */}
        <div className="w-72 flex-shrink-0">
          <div className="sticky top-6 space-y-3">
            {/* Pricing panel */}
            <div className="bg-white/[0.04] border border-white/10 rounded-xl p-5">
              <h3 className="text-xs text-slate-400 uppercase tracking-wider mb-4">Estimation devis</h3>
              {!devis ? (
                <p className="text-slate-600 text-sm">Sélectionnez un type de projet dans le questionnaire.</p>
              ) : (
                <>
                  <div className="space-y-2 mb-4">
                    {devis.lignes.map((l, i) => (
                      <div key={i} className={`flex justify-between text-sm gap-2 ${l.base ? 'text-white font-medium' : 'text-slate-400'}`}>
                        <span className="min-w-0 truncate">{l.label}</span>
                        <span className="flex-shrink-0">{l.montant.toLocaleString('fr-FR')} €</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-white/10 pt-3 space-y-2">
                    <div className="flex justify-between text-sm font-bold text-white">
                      <span>Total HT</span>
                      <span>{devis.sousTotal.toLocaleString('fr-FR')} €</span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>Acompte 30 %</span>
                      <span>{devis.acompte.toLocaleString('fr-FR')} €</span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>Solde livraison</span>
                      <span>{devis.solde.toLocaleString('fr-FR')} €</span>
                    </div>
                    {devis.maintenance > 0 && (
                      <div className="flex justify-between text-xs text-purple-400 border-t border-white/5 pt-2">
                        <span>Maintenance / mois</span>
                        <span>+{devis.maintenance} €</span>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Action buttons */}
            <button onClick={save} disabled={saving}
              className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition disabled:opacity-50">
              {saved ? <><Check size={14} /> Sauvegardé</> : saving ? 'Sauvegarde…' : <><Save size={14} /> Sauvegarder</>}
            </button>

            <button onClick={sendEmail}
              className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition">
              <Mail size={14} /> Envoyer le questionnaire
            </button>

            <button onClick={exportPDF} disabled={!devis}
              className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition disabled:opacity-30 disabled:cursor-not-allowed">
              <FileDown size={14} /> Exporter le devis PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
