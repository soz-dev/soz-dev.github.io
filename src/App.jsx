import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import PublicLayout from './layouts/PublicLayout'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ProjetsPage from './pages/ProjetsPage'
import TarifsPage from './pages/TarifsPage'
import DevisPage from './pages/DevisPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

const AdminApp = lazy(() => import('./pages/AdminApp'))
const DesignSystemPage = lazy(() => import('./pages/DesignSystemPage'))

/** Anciennes URLs ?mode=admin / ?mode=ds → routes dédiées */
function LegacyModeRedirect() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const mode = params.get('mode')
    if (mode === 'admin') navigate('/admin', { replace: true })
    else if (mode === 'ds' || mode === 'design') navigate('/design-system', { replace: true })
  }, [location.search, navigate])

  return null
}

function AdminFallback() {
  return (
    <div className="min-h-screen bg-[#0a0a12] flex items-center justify-center">
      <div className="w-5 h-5 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <LegacyModeRedirect />
      <Routes>
        <Route path="/admin" element={
          <Suspense fallback={<AdminFallback />}>
            <AdminApp />
          </Suspense>
        } />
        <Route path="/design-system" element={
          <Suspense fallback={<div className="min-h-screen bg-white dark:bg-[#030712]" />}>
            <DesignSystemPage />
          </Suspense>
        } />

        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="projets" element={<ProjetsPage />} />
          <Route path="tarifs" element={<TarifsPage />} />
          <Route path="devis" element={<DevisPage />} />
          <Route path="a-propos" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
