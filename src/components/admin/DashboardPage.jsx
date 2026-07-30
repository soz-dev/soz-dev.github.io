import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabaseAdmin'
import { Users, FolderOpen, TrendingUp, ArrowRight, Clock } from 'lucide-react'

const STATUS_BADGE = {
  'questionnaire':         'text-blue-400 bg-blue-400/10',
  'questionnaire-envoyé':  'text-yellow-400 bg-yellow-400/10',
  'réponse-reçue':         'text-orange-400 bg-orange-400/10',
  'appel-planifié':        'text-purple-400 bg-purple-400/10',
  'devis-envoyé':          'text-cyan-400 bg-cyan-400/10',
  'en-cours':              'text-green-400 bg-green-400/10',
  'livré':                 'text-emerald-400 bg-emerald-400/10',
  'archivé':               'text-slate-500 bg-slate-500/10',
}

const STATUS_LABEL = {
  'questionnaire':         'Questionnaire',
  'questionnaire-envoyé':  'Envoyé',
  'réponse-reçue':         'Réponse reçue',
  'appel-planifié':        'Appel planifié',
  'devis-envoyé':          'Devis envoyé',
  'en-cours':              'En cours',
  'livré':                 'Livré ✓',
  'archivé':               'Archivé',
}

export default function DashboardPage({ go }) {
  const [stats, setStats] = useState({ clients: 0, projets: 0, ca: 0 })
  const [recents, setRecents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const [
        { count: nbClients },
        { count: nbProjets },
        { data: recentProjets },
      ] = await Promise.all([
        supabase.from('clients').select('*', { count: 'exact', head: true }),
        supabase.from('projets').select('*', { count: 'exact', head: true }),
        supabase.from('projets')
          .select('*, clients(nom, email)')
          .order('updated_at', { ascending: false })
          .limit(6),
      ])
      const ca = (recentProjets || []).reduce((s, p) => s + (p.montant_total || 0), 0)
      setStats({ clients: nbClients || 0, projets: nbProjets || 0, ca })
      setRecents(recentProjets || [])
      setLoading(false)
    }
    load()
  }, [])

  if (loading) {
    return (
      <div className="p-8 flex items-center gap-2 text-slate-500 text-sm">
        <div className="w-4 h-4 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
        Chargement...
      </div>
    )
  }

  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-2xl font-bold text-white mb-1">Tableau de bord</h1>
      <p className="text-slate-500 text-sm mb-8">Vue d'ensemble de votre activité</p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        {[
          { label: 'Clients', value: stats.clients, icon: Users, color: 'text-purple-400', bg: 'bg-purple-400/10' },
          { label: 'Projets', value: stats.projets, icon: FolderOpen, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
          { label: 'CA estimé', value: `${stats.ca.toLocaleString('fr-FR')} €`, icon: TrendingUp, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
        ].map(s => (
          <div key={s.label} className="bg-white/[0.04] border border-white/8 rounded-xl p-5">
            <div className={`w-9 h-9 rounded-lg ${s.bg} flex items-center justify-center mb-4`}>
              <s.icon size={18} className={s.color} />
            </div>
            <div className="text-2xl font-bold text-white">{s.value}</div>
            <div className="text-xs text-slate-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Recent projects */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
            <Clock size={12} /> Activité récente
          </h2>
          <button onClick={() => go('clients')} className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 transition">
            Voir tous les clients <ArrowRight size={11} />
          </button>
        </div>

        {recents.length === 0 ? (
          <div className="text-slate-600 text-sm py-12 text-center border border-white/5 rounded-xl">
            Aucun projet pour l'instant — créez votre premier client !
          </div>
        ) : (
          <div className="space-y-2">
            {recents.map(p => {
              const badge = STATUS_BADGE[p.statut] || 'text-slate-400 bg-slate-400/10'
              const label = STATUS_LABEL[p.statut] || p.statut
              return (
                <div
                  key={p.id}
                  onClick={() => go('project', { client: p.clients, project: p })}
                  className="bg-white/[0.03] border border-white/8 rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:border-purple-500/30 transition group"
                >
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-white truncate">{p.nom}</div>
                    <div className="text-xs text-slate-600 mt-0.5">{p.clients?.nom}</div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium flex-shrink-0 ${badge}`}>{label}</span>
                  {p.montant_total > 0 && (
                    <span className="text-sm font-semibold text-slate-300 flex-shrink-0">
                      {p.montant_total.toLocaleString('fr-FR')} €
                    </span>
                  )}
                  <ArrowRight size={13} className="text-slate-700 group-hover:text-slate-400 transition flex-shrink-0" />
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
