import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import PublicLayout from './layouts/PublicLayout'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ProjetsPage from './pages/ProjetsPage'
import TarifsPage from './pages/TarifsPage'
import DevisPage from './pages/DevisPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import ErrorBoundary from './components/ErrorBoundary'

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
          <Route index element={<ErrorBoundary variant="crash"><HomePage /></ErrorBoundary>} />
          <Route path="services" element={<ErrorBoundary variant="crash"><ServicesPage /></ErrorBoundary>} />
          <Route path="projets" element={<ErrorBoundary variant="crash"><ProjetsPage /></ErrorBoundary>} />
          <Route path="tarifs" element={<ErrorBoundary variant="crash"><TarifsPage /></ErrorBoundary>} />
          <Route path="devis" element={<ErrorBoundary variant="crash"><DevisPage /></ErrorBoundary>} />
          <Route path="a-propos" element={<ErrorBoundary variant="crash"><AboutPage /></ErrorBoundary>} />
          <Route path="contact" element={<ErrorBoundary variant="crash"><ContactPage /></ErrorBoundary>} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
