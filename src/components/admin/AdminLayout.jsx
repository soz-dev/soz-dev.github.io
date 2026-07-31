import { useState } from 'react'
import {
  LayoutDashboard,
  Users,
  LogOut,
  Plus,
  Sun,
  Moon,
  Menu,
  X,
  Palette,
  ExternalLink,
  FileText,
} from 'lucide-react'
import BrandLogo from '../BrandLogo'

const NAV = [
  { id: 'dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
  { id: 'clients', label: 'Clients & Projets', icon: Users },
]

const LINKS = [
  { href: '/design-system', label: 'Design system', icon: Palette },
  { href: '/devis', label: 'Devis public', icon: FileText },
  { href: '/', label: 'Voir le site', icon: ExternalLink },
]

export default function AdminLayout({ view, go, onLogout, isDark, toggleDark, children }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navigate = (id) => {
    go(id)
    setMobileOpen(false)
  }

  const sidebar = (
    <>
      <div className="p-5 border-b border-gray-200 dark:border-white/5 flex items-center justify-between">
        <div className="overflow-visible">
          <BrandLogo variant="lockup" />
          <p className="text-[11px] text-gray-400 dark:text-slate-600 mt-0.5 font-mono">admin</p>
        </div>
        <button
          type="button"
          className="md:hidden p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white"
          onClick={() => setMobileOpen(false)}
          aria-label="Fermer le menu"
        >
          <X size={18} />
        </button>
      </div>

      <nav className="flex-1 p-3 space-y-0.5">
        {NAV.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => navigate(id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
              view === id || (view === 'project' && id === 'clients') || (view === 'project-new' && id === 'clients')
                ? 'bg-purple-100 dark:bg-brand-600/20 text-brand-700 dark:text-brand-300 font-medium'
                : 'text-gray-500 dark:text-slate-500 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <Icon size={15} />
            {label}
          </button>
        ))}
      </nav>

      <div className="p-3 border-t border-gray-200 dark:border-white/5">
        <button
          type="button"
          onClick={() => navigate('clients')}
          className="w-full flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium py-2 px-3 rounded-lg transition"
        >
          <Plus size={14} />
          Nouveau client
        </button>
      </div>

      <div className="px-3 pb-1 pt-2">
        <p className="px-3 text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">Ressources</p>
        {LINKS.map(({ href, label, icon: Icon }) => (
          <a
            key={href}
            href={href}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-500 dark:text-slate-500 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white transition"
          >
            <Icon size={15} />
            {label}
          </a>
        ))}
      </div>

      <div className="p-3 space-y-0.5 border-t border-gray-200 dark:border-white/5">
        <button
          type="button"
          onClick={toggleDark}
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-gray-500 dark:text-slate-500 hover:text-gray-900 dark:hover:text-white text-sm transition hover:bg-gray-100 dark:hover:bg-white/5"
        >
          {isDark ? <Sun size={14} /> : <Moon size={14} />}
          {isDark ? 'Mode clair' : 'Mode sombre'}
        </button>
        <button
          type="button"
          onClick={onLogout}
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-gray-400 dark:text-slate-600 hover:text-red-500 dark:hover:text-red-400 text-sm transition hover:bg-red-50 dark:hover:bg-red-400/5"
        >
          <LogOut size={14} />
          Déconnexion
        </button>
      </div>
    </>
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a12] flex flex-col md:flex-row">
      <header className="md:hidden flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-white/5 bg-white dark:bg-[#07070f]">
        <BrandLogo variant="lockup" />
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="p-2 text-gray-600 dark:text-slate-400"
          aria-label="Ouvrir le menu"
          aria-expanded={mobileOpen}
        >
          <Menu size={20} />
        </button>
      </header>

      <aside className="hidden md:flex w-56 flex-shrink-0 bg-white dark:bg-[#07070f] border-r border-gray-200 dark:border-white/5 flex-col shadow-sm dark:shadow-none">
        {sidebar}
      </aside>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Fermer"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="relative z-10 w-64 max-w-[85vw] h-full bg-white dark:bg-[#07070f] border-r border-gray-200 dark:border-white/5 flex flex-col shadow-xl">
            {sidebar}
          </aside>
        </div>
      )}

      <main className="flex-1 overflow-y-auto min-w-0">
        {children}
      </main>
    </div>
  )
}
