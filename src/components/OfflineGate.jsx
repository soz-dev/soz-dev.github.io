import { useEffect, useState } from 'react'
import ErrorFallback from './ErrorFallback'

/** Affiche une page dédiée si le navigateur passe hors ligne. */
export default function OfflineGate({ children }) {
  const [offline, setOffline] = useState(
    typeof navigator !== 'undefined' ? !navigator.onLine : false,
  )

  useEffect(() => {
    const goOffline = () => setOffline(true)
    const goOnline = () => setOffline(false)
    window.addEventListener('offline', goOffline)
    window.addEventListener('online', goOnline)
    return () => {
      window.removeEventListener('offline', goOffline)
      window.removeEventListener('online', goOnline)
    }
  }, [])

  if (offline) {
    return (
      <ErrorFallback
        variant="offline"
        onRetry={() => {
          if (navigator.onLine) setOffline(false)
          else window.location.reload()
        }}
      />
    )
  }

  return children
}
