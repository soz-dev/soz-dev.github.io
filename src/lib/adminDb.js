import { supabase } from './supabaseAdmin'

function throwIf(error) {
  if (error) throw error
}

export const db = {
  async getClients() {
    const { data, error } = await supabase
      .from('clients')
      .select('*, projets(count)')
      .order('created_at', { ascending: false })
    throwIf(error)
    return (data || []).map(c => {
      const count = Array.isArray(c.projets) ? (c.projets[0]?.count ?? 0) : 0
      const { projets: _p, ...rest } = c
      return { ...rest, project_count: count }
    })
  },

  async createClient(payload) {
    const { data, error } = await supabase
      .from('clients')
      .insert({
        nom: payload.nom,
        email: payload.email,
        telephone: payload.telephone || null,
        entreprise: payload.entreprise || null,
        notes: payload.notes || null,
      })
      .select()
      .single()
    throwIf(error)
    return data
  },

  async deleteClient(id) {
    const { error } = await supabase.from('clients').delete().eq('id', id)
    throwIf(error)
  },

  async getProjectsByClient(clientId) {
    const { data, error } = await supabase
      .from('projets')
      .select('*')
      .eq('client_id', clientId)
      .order('updated_at', { ascending: false })
    throwIf(error)
    return data || []
  },

  async getRecentProjects(limit = 6) {
    const { data, error } = await supabase
      .from('projets')
      .select('*, clients(*)')
      .order('updated_at', { ascending: false })
      .limit(limit)
    throwIf(error)
    return (data || []).map(p => ({
      ...p,
      clients: p.clients || null,
    }))
  },

  async saveProject(payload) {
    const now = new Date().toISOString()
    const row = {
      client_id: payload.client_id,
      nom: payload.nom,
      statut: payload.statut,
      questionnaire: payload.questionnaire ?? {},
      notes_admin: payload.notes_admin ?? null,
      devis: payload.devis ?? null,
      paiements: payload.paiements ?? {
        acompte: false, acompteDate: '', solde: false, soldeDate: '',
      },
      montant_total: payload.montant_total ?? 0,
      updated_at: now,
    }

    if (payload.id) {
      const { data, error } = await supabase
        .from('projets')
        .update(row)
        .eq('id', payload.id)
        .select()
        .single()
      throwIf(error)
      return data
    }

    const { data, error } = await supabase
      .from('projets')
      .insert({ ...row, created_at: now })
      .select()
      .single()
    throwIf(error)
    return data
  },

  async deleteProject(id) {
    const { error } = await supabase.from('projets').delete().eq('id', id)
    throwIf(error)
  },

  async stats() {
    const [{ data: clients, error: e1 }, { data: projets, error: e2 }] = await Promise.all([
      supabase.from('clients').select('id'),
      supabase.from('projets').select('montant_total'),
    ])
    throwIf(e1)
    throwIf(e2)
    const list = projets || []
    return {
      clients: (clients || []).length,
      projets: list.length,
      ca: list.reduce((s, p) => s + (p.montant_total || 0), 0),
    }
  },
}
