import { useState, useEffect, useCallback } from 'react'
import { db } from '../../lib/adminDb'
import { Plus, ArrowLeft, FolderPlus, ChevronRight, Trash2, Mail, Phone } from 'lucide-react'

const STATUS_BADGE = {
  'questionnaire':         'text-blue-400 bg-blue-400/10',
  'questionnaire-envoyé':  'text-yellow-400 bg-yellow-400/10',
  'réponse-reçue':         'text-orange-400 bg-orange-400/10',
  'appel-planifié':        'text-purple-400 bg-purple-400/10',
  'devis-envoyé':          'text-cyan-400 bg-cyan-400/10',
  'en-cours':              'text-green-400 bg-green-400/10',
  'livré':                 'text-emerald-400 bg-emerald-400/10',
  'archivé':               'text-gray-500 dark:text-slate-500 bg-slate-500/10',
}
const STATUS_LABEL = {
  'questionnaire': 'Questionnaire', 'questionnaire-envoyé': 'Envoyé', 'réponse-reçue': 'Réponse reçue',
  'appel-planifié': 'Appel planifié', 'devis-envoyé': 'Devis envoyé', 'en-cours': 'En cours',
  'livré': 'Livré ✓', 'archivé': 'Archivé',
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="text-xs text-gray-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">{label}</label>
      <input
        {...props}
        className="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-3 py-2.5 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-purple-500 transition placeholder-gray-400 dark:placeholder-slate-600"
      />
    </div>
  )
}

export default function ClientsPage({ go, openClient }) {
  const [clients, setClients] = useState([])
  const [selected, setSelected] = useState(openClient || null)
  const [projects, setProjects] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ nom: '', email: '', telephone: '', entreprise: '', notes: '' })
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(true)

  const loadClients = useCallback(() => {
    setClients(db.getClients())
    setLoading(false)
  }, [])

  const loadProjects = useCallback((clientId) => {
    setProjects(db.getProjectsByClient(clientId))
  }, [])

  useEffect(() => { loadClients() }, [loadClients])
  useEffect(() => { if (selected) loadProjects(selected.id) }, [selected, loadProjects])

  const createClient = (e) => {
    e.preventDefault()
    setSaving(true)
    const newClient = db.createClient(form)
    setClients(c => [newClient, ...c])
    setForm({ nom: '', email: '', telephone: '', entreprise: '', notes: '' })
    setShowForm(false)
    setSelected(newClient)
    setSaving(false)
  }

  const deleteClient = (id) => {
    if (!confirm('Supprimer ce client et tous ses projets ?')) return
    db.deleteClient(id)
    if (selected?.id === id) setSelected(null)
    setClients(c => c.filter(x => x.id !== id))
  }

  const f = k => e => setForm(p => ({ ...p, [k]: e.target.value }))

  // ── Client detail ─────────────────────────────────────────
  if (selected) {
    return (
      <div className="p-8 max-w-3xl">
        <button onClick={() => setSelected(null)} className="flex items-center gap-2 text-gray-500 dark:text-slate-400 hover:text-white text-sm mb-6 transition">
          <ArrowLeft size={14} /> Tous les clients
        </button>

        {/* Client card */}
        <div className="bg-gray-50 dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 rounded-2xl p-6 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                <span className="text-purple-300 font-bold text-xl">{selected.nom?.[0]?.toUpperCase()}</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{selected.nom}</h2>
                {selected.entreprise && <p className="text-gray-500 dark:text-slate-400 text-sm">{selected.entreprise}</p>}
              </div>
            </div>
            <button
              onClick={() => deleteClient(selected.id)}
              className="text-gray-400 dark:text-slate-600 hover:text-red-400 p-2 rounded-lg hover:bg-red-400/10 transition"
            >
              <Trash2 size={14} />
            </button>
          </div>
          <div className="flex flex-wrap gap-5 mt-4 text-sm text-gray-500 dark:text-slate-400">
            {selected.email && (
              <a href={`mailto:${selected.email}`} className="flex items-center gap-1.5 hover:text-white transition">
                <Mail size={13} />{selected.email}
              </a>
            )}
            {selected.telephone && (
              <span className="flex items-center gap-1.5"><Phone size={13} />{selected.telephone}</span>
            )}
          </div>
          {selected.notes && (
            <p className="text-gray-500 dark:text-slate-500 text-sm mt-4 pt-4 border-t border-gray-200 dark:border-white/5">{selected.notes}</p>
          )}
        </div>

        {/* Projects */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">Projets</h3>
          <button
            onClick={() => go('project-new', { client: selected })}
            className="flex items-center gap-1.5 bg-purple-600 hover:bg-purple-500 text-gray-900 dark:text-white text-xs font-medium py-2 px-3 rounded-lg transition"
          >
            <FolderPlus size={13} /> Nouveau projet
          </button>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-12 border border-gray-200 dark:border-white/5 rounded-xl">
            <FolderPlus size={24} className="mx-auto mb-2 text-gray-500 dark:text-slate-700" />
            <p className="text-gray-400 dark:text-slate-600 text-sm">Aucun projet — créez le premier !</p>
          </div>
        ) : (
          <div className="space-y-2">
            {projects.map(p => {
              const badge = STATUS_BADGE[p.statut] || 'text-gray-500 dark:text-slate-400 bg-gray-100 dark:bg-white/5'
              const label = STATUS_LABEL[p.statut] || p.statut
              return (
                <div
                  key={p.id}
                  onClick={() => go('project', { client: selected, project: p })}
                  className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/8 rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:border-purple-500/30 transition group"
                >
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{p.nom}</div>
                    <div className="text-xs text-gray-400 dark:text-slate-600 mt-0.5">
                      Modifié le {new Date(p.updated_at).toLocaleDateString('fr-FR')}
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium flex-shrink-0 ${badge}`}>{label}</span>
                  {p.montant_total > 0 && (
                    <span className="text-sm font-semibold text-gray-900 dark:text-white flex-shrink-0">
                      {p.montant_total.toLocaleString('fr-FR')} €
                    </span>
                  )}
                  <ChevronRight size={13} className="text-gray-500 dark:text-slate-700 group-hover:text-gray-500 dark:text-slate-400 transition flex-shrink-0" />
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  // ── Clients list ──────────────────────────────────────────
  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Clients</h1>
          <p className="text-gray-500 dark:text-slate-500 text-sm mt-1">{clients.length} client{clients.length !== 1 ? 's' : ''}</p>
        </div>
        <button
          onClick={() => setShowForm(v => !v)}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-gray-900 dark:text-white text-sm font-medium py-2.5 px-4 rounded-lg transition"
        >
          <Plus size={14} /> Nouveau client
        </button>
      </div>

      {/* New client form */}
      {showForm && (
        <form onSubmit={createClient} className="bg-gray-50 dark:bg-white/[0.04] border border-purple-500/30 rounded-2xl p-6 mb-6 space-y-4">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Nouveau client</h2>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Nom *" value={form.nom} onChange={f('nom')} required placeholder="Jean Dupont" />
            <Field label="Email *" type="email" value={form.email} onChange={f('email')} required placeholder="jean@exemple.com" />
            <Field label="Téléphone" value={form.telephone} onChange={f('telephone')} placeholder="+33 6 00 00 00 00" />
            <Field label="Entreprise" value={form.entreprise} onChange={f('entreprise')} placeholder="SARL Dupont" />
          </div>
          <div>
            <label className="text-xs text-gray-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">Notes</label>
            <textarea
              value={form.notes} onChange={f('notes')} rows={2}
              placeholder="Source (réseau, recommandation...), contexte..."
              className="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-3 py-2.5 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-purple-500 transition resize-none placeholder-gray-400 dark:placeholder-slate-600"
            />
          </div>
          <div className="flex gap-3 pt-1">
            <button type="submit" disabled={saving}
              className="bg-purple-600 hover:bg-purple-500 text-gray-900 dark:text-white text-sm font-medium py-2 px-5 rounded-lg transition disabled:opacity-50">
              {saving ? 'Création…' : 'Créer le client'}
            </button>
            <button type="button" onClick={() => setShowForm(false)}
              className="text-gray-500 dark:text-slate-400 hover:text-white text-sm py-2 px-4 rounded-lg hover:bg-gray-100 dark:bg-white/5 transition">
              Annuler
            </button>
          </div>
        </form>
      )}

      {/* List */}
      {loading ? (
        <div className="text-gray-400 dark:text-slate-600 text-sm">Chargement…</div>
      ) : clients.length === 0 ? (
        <div className="text-center py-16 border border-gray-200 dark:border-white/5 rounded-xl">
          <p className="text-gray-400 dark:text-slate-600 text-sm">Aucun client — créez le premier !</p>
        </div>
      ) : (
        <div className="space-y-2">
          {clients.map(c => (
            <div
              key={c.id}
              onClick={() => setSelected(c)}
              className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/8 rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:border-purple-500/30 transition group"
            >
              <div className="w-9 h-9 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                <span className="text-purple-300 font-semibold">{c.nom?.[0]?.toUpperCase()}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 dark:text-white">{c.nom}</div>
                <div className="text-xs text-gray-500 dark:text-slate-500 mt-0.5">{c.email}</div>
              </div>
              {c.entreprise && <span className="text-xs text-gray-400 dark:text-slate-600 hidden sm:block">{c.entreprise}</span>}
              <span className="text-xs text-gray-400 dark:text-slate-600">
                {new Date(c.created_at).toLocaleDateString('fr-FR')}
              </span>
              <ChevronRight size={13} className="text-gray-500 dark:text-slate-700 group-hover:text-gray-500 dark:text-slate-400 transition flex-shrink-0" />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
