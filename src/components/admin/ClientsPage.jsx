import { useState, useEffect, useCallback } from 'react'
import { db } from '../../lib/adminDb'
import { STATUS_BADGE, STATUS_LABEL } from '../../lib/statusLabels'
import { Plus, FolderPlus, ChevronRight, Trash2, Mail, Phone, FolderOpen, User } from 'lucide-react'

function Field({ label, ...props }) {
  return (
    <div>
      <label className="text-xs text-gray-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">{label}</label>
      <input
        { ...props}
        className="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-3 py-2.5 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-brand-500 transition placeholder-gray-400 dark:placeholder-slate-600"
      />
    </div>
  )
}

export default function ClientsPage({ go, openClient }) {
  const [clients, setClients] = useState([])
  const [selected, setSelected] = useState(openClient || null)
  const [projects, setProjects] = useState([])
  const [projectsLoading, setProjectsLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [newProjectName, setNewProjectName] = useState('')
  const [form, setForm] = useState({ nom: '', email: '', telephone: '', entreprise: '', notes: '' })
  const [saving, setSaving] = useState(false)
  const [linking, setLinking] = useState(false)
  const [loading, setLoading] = useState(true)

  const loadClients = useCallback(async () => {
    try {
      const list = await db.getClients()
      setClients(list)
      setSelected(prev => {
        if (openClient?.id) {
          return list.find(c => c.id === openClient.id) || openClient
        }
        if (prev?.id) {
          return list.find(c => c.id === prev.id) || prev
        }
        return list[0] || null
      })
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [openClient])

  const loadProjects = useCallback(async (clientId) => {
    setProjectsLoading(true)
    try {
      setProjects(await db.getProjectsByClient(clientId))
    } catch (err) {
      console.error(err)
      setProjects([])
    } finally {
      setProjectsLoading(false)
    }
  }, [])

  useEffect(() => { loadClients() }, [loadClients])
  useEffect(() => {
    if (selected?.id) loadProjects(selected.id)
    else setProjects([])
  }, [selected?.id, loadProjects])

  const createClient = async (e) => {
    e.preventDefault()
    setSaving(true)
    try {
      const newClient = await db.createClient(form)
      const withCount = { ...newClient, project_count: 0 }
      setClients(c => [withCount, ...c])
      setForm({ nom: '', email: '', telephone: '', entreprise: '', notes: '' })
      setShowForm(false)
      setSelected(withCount)
    } catch (err) {
      alert(err.message || 'Erreur lors de la création')
    } finally {
      setSaving(false)
    }
  }

  const deleteClient = async (id) => {
    if (!confirm('Supprimer ce client et tous ses projets liés ?')) return
    try {
      await db.deleteClient(id)
      const next = clients.filter(x => x.id !== id)
      setClients(next)
      setSelected(prev => (prev?.id === id ? (next[0] || null) : prev))
    } catch (err) {
      alert(err.message || 'Erreur lors de la suppression')
    }
  }

  const addProject = async () => {
    if (!selected || linking) return
    const nom = newProjectName.trim() || 'Nouveau projet'
    setLinking(true)
    try {
      const created = await db.saveProject({
        client_id: selected.id,
        nom,
        statut: 'questionnaire',
        questionnaire: {},
        notes_admin: '',
        montant_total: 0,
      })
      setNewProjectName('')
      setProjects(prev => [created, ...prev])
      setClients(cs => cs.map(c =>
        c.id === selected.id
          ? { ...c, project_count: (c.project_count || 0) + 1 }
          : c
      ))
      setSelected(prev => prev?.id === selected.id
        ? { ...prev, project_count: (prev.project_count || 0) + 1 }
        : prev
      )
    } catch (err) {
      alert(err.message || 'Erreur lors de la création du projet')
    } finally {
      setLinking(false)
    }
  }

  const deleteProject = async (projectId, e) => {
    e?.stopPropagation()
    if (!confirm('Supprimer ce projet ?')) return
    try {
      await db.deleteProject(projectId)
      setProjects(prev => prev.filter(p => p.id !== projectId))
      setClients(cs => cs.map(c =>
        c.id === selected?.id
          ? { ...c, project_count: Math.max(0, (c.project_count || 1) - 1) }
          : c
      ))
      setSelected(prev => prev
        ? { ...prev, project_count: Math.max(0, (prev.project_count || 1) - 1) }
        : prev
      )
    } catch (err) {
      alert(err.message || 'Erreur lors de la suppression')
    }
  }

  const f = k => e => setForm(p => ({ ...p, [k]: e.target.value }))

  return (
    <div className="h-full min-h-[calc(100vh-3.5rem)] md:min-h-screen flex flex-col">
      <div className="px-4 md:px-8 pt-6 pb-4 border-b border-gray-200 dark:border-white/5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Clients & projets</h1>
            <p className="text-gray-500 dark:text-slate-500 text-sm mt-1">
              Un client peut avoir plusieurs projets. Sélectionnez un client, puis gérez ses projets.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowForm(v => !v)}
            className="flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition shrink-0"
          >
            <Plus size={14} /> Nouveau client
          </button>
        </div>

        {showForm && (
          <form onSubmit={createClient} className="mt-5 bg-gray-50 dark:bg-white/[0.04] border border-brand-500/30 rounded-2xl p-5 space-y-4 max-w-3xl">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Nouveau client</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nom *" value={form.nom} onChange={f('nom')} required placeholder="Jean Dupont" />
              <Field label="Email *" type="email" value={form.email} onChange={f('email')} required placeholder="jean@exemple.com" />
              <Field label="Téléphone" value={form.telephone} onChange={f('telephone')} placeholder="+33 6 00 00 00 00" />
              <Field label="Entreprise" value={form.entreprise} onChange={f('entreprise')} placeholder="SARL Dupont" />
            </div>
            <div>
              <label className="text-xs text-gray-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">Notes</label>
              <textarea
                value={form.notes} onChange={f('notes')} rows={2}
                placeholder="Source, contexte."
                className="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-3 py-2.5 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-brand-500 transition resize-none placeholder-gray-400 dark:placeholder-slate-600"
              />
            </div>
            <div className="flex gap-3">
              <button type="submit" disabled={saving}
                className="bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium py-2 px-5 rounded-lg transition disabled:opacity-50">
                {saving ? 'Création…' : 'Créer le client'}
              </button>
              <button type="button" onClick={() => setShowForm(false)}
                className="text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white text-sm py-2 px-4 rounded-lg transition">
                Annuler
              </button>
            </div>
          </form>
        )}
      </div>

      {loading ? (
        <div className="p-8 text-gray-400 dark:text-slate-600 text-sm">Chargement…</div>
      ) : clients.length === 0 ? (
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-center max-w-sm">
            <User size={28} className="mx-auto mb-3 text-gray-400 dark:text-slate-600" />
            <p className="text-gray-900 dark:text-white font-medium mb-1">Aucun client</p>
            <p className="text-gray-500 dark:text-slate-500 text-sm mb-4">
              Créez d’abord un client, puis ajoutez-lui un ou plusieurs projets.
            </p>
            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition"
            >
              <Plus size={14} /> Nouveau client
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-1 grid md:grid-cols-[minmax(240px,320px)_1fr] min-h-0">
          {/* Liste clients */}
          <aside className="border-b md:border-b-0 md:border-r border-gray-200 dark:border-white/5 overflow-y-auto max-h-48 md:max-h-none bg-gray-50/80 dark:bg-white/[0.02]">
            <div className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-slate-600">
              Clients ({clients.length})
            </div>
            <div className="px-2 pb-3 space-y-0.5">
              {clients.map(c => {
                const active = selected?.id === c.id
                const count = c.project_count ?? 0
                return (
                  <div
                    key={c.id}
                    className={`w-full px-3 py-2.5 rounded-xl transition flex items-center gap-2 ${
                      active
                        ? 'bg-purple-100 dark:bg-brand-600/20 border border-purple-300 dark:border-brand-500/30'
                        : 'hover:bg-white dark:hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setSelected(c)}
                      className="flex-1 text-left flex items-center gap-3 min-w-0"
                    >
                      <div className="w-8 h-8 rounded-full bg-brand-600/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-300 font-semibold text-sm">{c.nom?.[0]?.toUpperCase()}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-sm font-medium truncate ${active ? 'text-purple-800 dark:text-purple-200' : 'text-gray-900 dark:text-white'}`}>
                          {c.nom}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-slate-500 truncate">
                          {count} projet{count !== 1 ? 's' : ''}
                        </div>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteClient(c.id)}
                      className="text-gray-400 dark:text-slate-600 hover:text-red-400 p-1.5 rounded-lg hover:bg-red-400/10 transition flex-shrink-0"
                      aria-label={`Supprimer ${c.nom}`}
                      title="Supprimer le client"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                )
              })}
            </div>
          </aside>

          {/* Détail client + projets liés */}
          <section className="overflow-y-auto p-4 md:p-8">
            {!selected ? (
              <p className="text-gray-400 dark:text-slate-600 text-sm">Sélectionnez un client à gauche.</p>
            ) : (
              <div className="max-w-3xl">
                <div className="bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 rounded-2xl p-5 mb-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-12 h-12 rounded-full bg-brand-600/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-300 font-bold text-xl">{selected.nom?.[0]?.toUpperCase()}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wider text-brand-500 dark:text-brand-400 font-semibold mb-0.5">
                          Fiche client
                        </p>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white truncate">{selected.nom}</h2>
                        {selected.entreprise && (
                          <p className="text-gray-500 dark:text-slate-400 text-sm">{selected.entreprise}</p>
                        )}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => deleteClient(selected.id)}
                      className="text-gray-400 dark:text-slate-600 hover:text-red-400 p-2 rounded-lg hover:bg-red-400/10 transition flex-shrink-0"
                      aria-label="Supprimer le client"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500 dark:text-slate-400">
                    {selected.email && (
                      <a href={`mailto:${selected.email}`} className="flex items-center gap-1.5 hover:text-brand-400 transition">
                        <Mail size={13} />{selected.email}
                      </a>
                    )}
                    {selected.telephone && (
                      <span className="flex items-center gap-1.5"><Phone size={13} />{selected.telephone}</span>
                    )}
                  </div>
                  {selected.notes && (
                    <p className="text-gray-500 dark:text-slate-500 text-sm mt-4 pt-4 border-t border-gray-200 dark:border-white/5">
                      {selected.notes}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <FolderOpen size={15} className="text-brand-400" />
                      Projets liés à {selected.nom.split(' ')[0]}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-slate-500 mt-0.5">
                      {projects.length} projet{projects.length !== 1 ? 's' : ''} · chaque projet appartient à ce client
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 mb-5">
                  <input
                    value={newProjectName}
                    onChange={e => setNewProjectName(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addProject() } }}
                    placeholder="Nom (optionnel), sinon « Nouveau projet »"
                    className="flex-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-3 py-2.5 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-brand-500 transition placeholder-gray-400 dark:placeholder-slate-600"
                  />
                  <button
                    type="button"
                    onClick={addProject}
                    disabled={linking}
                    className="flex items-center justify-center gap-1.5 bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition whitespace-nowrap disabled:opacity-50"
                  >
                    <FolderPlus size={14} /> {linking ? 'Liaison…' : 'Lier un projet'}
                  </button>
                </div>

                {projectsLoading ? (
                  <div className="text-gray-400 dark:text-slate-600 text-sm py-8">Chargement des projets…</div>
                ) : projects.length === 0 ? (
                  <div className="text-center py-12 border border-dashed border-gray-200 dark:border-white/10 rounded-xl px-4">
                    <FolderPlus size={24} className="mx-auto mb-2 text-gray-400 dark:text-slate-600" />
                    <p className="text-gray-900 dark:text-white text-sm font-medium mb-1">Aucun projet lié</p>
                    <p className="text-gray-500 dark:text-slate-500 text-xs max-w-xs mx-auto">
                      Un clic sur « Lier un projet » crée et rattache immédiatement le projet à {selected.nom}.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {projects.map(p => {
                      const badge = STATUS_BADGE[p.statut] || 'text-gray-500 dark:text-slate-400 bg-gray-100 dark:bg-white/5'
                      const label = STATUS_LABEL[p.statut] || p.statut
                      return (
                        <div
                          key={p.id}
                          className="w-full bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/8 rounded-xl p-4 flex items-center gap-3 text-left hover:border-brand-500/40 transition group"
                        >
                          <button
                            type="button"
                            onClick={() => go('project', { client: selected, project: p })}
                            className="flex-1 min-w-0 flex items-center gap-4 text-left"
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
                            <ChevronRight size={13} className="text-gray-400 dark:text-slate-700 group-hover:text-brand-400 transition flex-shrink-0" />
                          </button>
                          <button
                            type="button"
                            onClick={(e) => deleteProject(p.id, e)}
                            className="text-gray-400 dark:text-slate-600 hover:text-red-400 p-2 rounded-lg hover:bg-red-400/10 transition flex-shrink-0"
                            aria-label={`Supprimer le projet ${p.nom}`}
                            title="Supprimer le projet"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  )
}
