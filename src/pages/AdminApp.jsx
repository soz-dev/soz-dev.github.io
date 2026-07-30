import { useState, useEffect } from 'react'
import AdminLogin from '../components/admin/AdminLogin'
import AdminLayout from '../components/admin/AdminLayout'
import DashboardPage from '../components/admin/DashboardPage'
import ClientsPage from '../components/admin/ClientsPage'
import ProjectPage from '../components/admin/ProjectPage'
import { getSession, onAuthChange, signOut } from '../lib/supabaseAdmin'

export default function AdminApp() {
  const [authed, setAuthed] = useState(false)
  const [bootstrapping, setBootstrapping] = useState(true)
  const [nav, setNav] = useState({ view: 'dashboard' })
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') !== 'light')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  useEffect(() => {
    let unsub = () => {}
    ;(async () => {
      try {
        const session = await getSession()
        setAuthed(!!session)
      } finally {
        setBootstrapping(false)
      }
      unsub = onAuthChange((session) => setAuthed(!!session))
    })()
    return () => unsub()
  }, [])

  const go = (view, data = {}) => setNav({ view, ...data })

  const toggleDark = () => {
    const next = !isDark
    setIsDark(next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  const logout = async () => {
    try {
      await signOut()
    } finally {
      setAuthed(false)
    }
  }

  if (bootstrapping) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0a0a12] flex items-center justify-center">
        <div className="w-5 h-5 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!authed) return <AdminLogin onLogin={() => setAuthed(true)} />

  return (
    <AdminLayout view={nav.view} go={go} onLogout={logout} isDark={isDark} toggleDark={toggleDark}>
      {nav.view === 'dashboard' && <DashboardPage go={go} />}
      {nav.view === 'clients' && (
        <ClientsPage go={go} openClient={nav.openClient || null} />
      )}
      {(nav.view === 'project-new' || nav.view === 'project') && (
        <ProjectPage
          client={nav.client}
          project={nav.project || null}
          go={go}
        />
      )}
    </AdminLayout>
  )
}
