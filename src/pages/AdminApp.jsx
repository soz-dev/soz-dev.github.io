import { useState, useEffect, lazy, Suspense } from 'react'
import { supabase } from '../lib/supabaseAdmin'
import AdminLogin from '../components/admin/AdminLogin'
import AdminLayout from '../components/admin/AdminLayout'
import DashboardPage from '../components/admin/DashboardPage'
import ClientsPage from '../components/admin/ClientsPage'
import ProjectPage from '../components/admin/ProjectPage'

export default function AdminApp() {
  const [session, setSession] = useState(undefined) // undefined = loading
  const [nav, setNav] = useState({ view: 'dashboard' })

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session))
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, s) => setSession(s))
    return () => subscription.unsubscribe()
  }, [])

  const go = (view, data = {}) => setNav({ view, ...data })

  // Loading
  if (session === undefined) {
    return (
      <div className="min-h-screen bg-[#0a0a12] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  // Not authenticated
  if (!session) return <AdminLogin onLogin={setSession} />

  return (
    <AdminLayout view={nav.view} go={go} onLogout={() => supabase.auth.signOut()}>
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
