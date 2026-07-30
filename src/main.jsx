import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { initPalette } from './design-system/themes'
import App from './App.jsx'

initPalette()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
