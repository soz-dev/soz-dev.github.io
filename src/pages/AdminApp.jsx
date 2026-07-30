import { useState } from 'react'
import AdminLogin from '../components/admin/AdminLogin'
import AdminLayout from '../components/admin/AdminLayout'
import DashboardPage from '../components/admin/DashboardPage'
import ClientsPage from '../components/admin/ClientsPage'
import ProjectPage from '../components/admin/ProjectPage'

export default function AdminApp() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem('admin_auth') === '1')
  const [nav, setNav] = useState({ view: 'dashboard' })

  const go = (view, data = {}) => setNav({ view, ...data })

  const logout = () => {
    sessionStorage.removeItem('admin_auth')
    setAuthed(false)
  }

  if (!authed) return <AdminLogin onLogin={() => setAuthed(true)} />

  return (
    <AdminLayout view={nav.view} go={go} onLogout={logout}>
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
