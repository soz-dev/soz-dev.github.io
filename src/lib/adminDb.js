// ─── Mot de passe admin (change-le ici si tu veux) ───────
const ADMIN_PASS = 'soz2026'

export function checkPassword(input) {
  return input === ADMIN_PASS
}

// ─── Stockage localStorage ────────────────────────────────
function get(key) {
  try { return JSON.parse(localStorage.getItem(`admin_${key}`) || '[]') } catch { return [] }
}
function set(key, data) {
  localStorage.setItem(`admin_${key}`, JSON.stringify(data))
}
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6)
}

export const db = {
  // ── Clients ──────────────────────────────────────────────
  getClients() {
    return [...get('clients')].sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
  },
  createClient(data) {
    const client = { ...data, id: uid(), created_at: new Date().toISOString() }
    set('clients', [...get('clients'), client])
    return client
  },
  deleteClient(id) {
    set('clients', get('clients').filter(c => c.id !== id))
    set('projets', get('projets').filter(p => p.client_id !== id))
  },

  // ── Projets ───────────────────────────────────────────────
  getProjectsByClient(clientId) {
    return get('projets')
      .filter(p => p.client_id === clientId)
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
  },
  getRecentProjects(limit = 6) {
    const clients = get('clients')
    return get('projets')
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .slice(0, limit)
      .map(p => ({ ...p, clients: clients.find(c => c.id === p.client_id) || null }))
  },
  saveProject(data) {
    const projets = get('projets')
    const now = new Date().toISOString()
    if (data.id) {
      const updated = projets.map(p => p.id === data.id ? { ...p, ...data, updated_at: now } : p)
      set('projets', updated)
      return updated.find(p => p.id === data.id)
    } else {
      const projet = { ...data, id: uid(), created_at: now, updated_at: now }
      set('projets', [...projets, projet])
      return projet
    }
  },
  deleteProject(id) {
    set('projets', get('projets').filter(p => p.id !== id))
  },
  stats() {
    const projets = get('projets')
    return {
      clients: get('clients').length,
      projets: projets.length,
      ca: projets.reduce((s, p) => s + (p.montant_total || 0), 0),
    }
  },
}
