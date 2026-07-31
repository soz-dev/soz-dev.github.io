import { Link } from 'react-router-dom'
import { RefreshCw, Home, Mail } from 'lucide-react'
import LottieIcon from './motion/LottieIcon'
import { LOTTIE } from '../lib/lottieMap'

const COPY = {
  crash: {
    title: 'Oups, un souci technique',
    desc: 'La page a rencontré une erreur inattendue. Vous pouvez réessayer ou revenir à l’accueil.',
    src: LOTTIE.crash,
  },
  offline: {
    title: 'Pas de connexion',
    desc: 'Le site ne répond pas ou vous êtes hors ligne. Vérifiez votre réseau puis réessayez.',
    src: LOTTIE.offline,
  },
  notfound: {
    title: 'Page introuvable',
    desc: 'Cette adresse n’existe pas (ou plus). Revenez à l’accueil pour continuer.',
    src: LOTTIE.error,
  },
}

export default function ErrorFallback({
  error,
  onRetry,
  variant = 'crash',
  title,
  description,
}) {
  const c = COPY[variant] || COPY.crash

  return (
    <div className="min-h-screen bg-white dark:bg-[#030712] flex items-center justify-center px-6 py-16">
      <div className="max-w-md w-full text-center">
        <div className="w-64 h-64 mx-auto mb-6">
          <LottieIcon src={c.src} className="w-full h-full" />
        </div>
        <p className="text-xs font-mono text-brand-400 tracking-[0.3em] uppercase mb-3">
          {variant === 'offline' ? 'Hors ligne' : variant === 'notfound' ? '404' : 'Erreur'}
        </p>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
          {title || c.title}
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-8">
          {description || c.desc}
        </p>
        {import.meta.env.DEV && error?.message && (
          <pre className="text-left text-[11px] text-red-500/90 bg-red-50 dark:bg-red-500/10 rounded-xl p-3 mb-6 overflow-auto max-h-28">
            {error.message}
          </pre>
        )}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {onRetry && (
            <button
              type="button"
              onClick={() => {
                onRetry()
                window.location.reload()
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 text-white text-sm font-semibold hover:opacity-90"
            >
              <RefreshCw className="w-4 h-4" />
              Réessayer
            </button>
          )}
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 dark:border-white/15 text-gray-800 dark:text-white text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/5"
          >
            <Home className="w-4 h-4" />
            Accueil
          </Link>
          <a
            href="mailto:sofyan.devpro@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-slate-500 hover:text-brand-500"
          >
            <Mail className="w-4 h-4" />
            Me contacter
          </a>
        </div>
      </div>
    </div>
  )
}
