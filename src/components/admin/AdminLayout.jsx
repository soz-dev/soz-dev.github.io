import { LayoutDashboard, Users, LogOut, Plus } from 'lucide-react'

const NAV = [
  { id: 'dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
  { id: 'clients', label: 'Clients & Projets', icon: Users },
]

export default function AdminLayout({ view, go, onLogout, children }) {
  return (
    <div className="min-h-screen bg-[#0a0a12] flex">
      {/* Sidebar */}
      <aside className="w-56 flex-shrink-0 bg-[#07070f] border-r border-white/5 flex flex-col">
        {/* Logo */}
        <div className="p-5 border-b border-white/5">
          <span className="text-lg font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">soz-dev</span>
          </span>
          <p className="text-[11px] text-slate-600 mt-0.5 font-mono">// admin</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-0.5">
          {NAV.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
                view === id || (view === 'project' && id === 'clients') || (view === 'project-new' && id === 'clients')
                  ? 'bg-purple-600/20 text-purple-300 font-medium'
                  : 'text-slate-500 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </nav>

        {/* Quick action */}
        <div className="p-3 border-t border-white/5">
          <button
            onClick={() => go('clients')}
            className="w-full flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium py-2 px-3 rounded-lg transition"
          >
            <Plus size={14} />
            Nouveau client
          </button>
        </div>

        {/* Logout */}
        <div className="p-3">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-600 hover:text-red-400 text-sm transition hover:bg-red-400/5"
          >
            <LogOut size={14} />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
