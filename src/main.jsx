import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { initPalette } from './design-system/themes'
import ErrorBoundary from './components/ErrorBoundary'
import OfflineGate from './components/OfflineGate'
import App from './App.jsx'

initPalette()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <OfflineGate>
          <App />
        </OfflineGate>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>,
)
