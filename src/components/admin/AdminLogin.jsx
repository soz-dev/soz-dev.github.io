import { useState, useEffect } from 'react'
import { Lock, ArrowLeft } from 'lucide-react'
import { signIn } from '../../lib/supabaseAdmin'
import { Button, Input, Badge } from '../../design-system'
import BrandLogo from '../BrandLogo'

export default function AdminLogin({ onLogin, initialError = '' }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(initialError)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (initialError) setError(initialError)
  }, [initialError])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await signIn(email.trim(), password)
      onLogin()
    } catch (err) {
      const msg = err?.message || 'Identifiants incorrects.'
      if (/missing|invalid api|failed to fetch|fetch/i.test(msg) || !import.meta.env.VITE_ADMIN_SUPABASE_URL) {
        setError('Connexion impossible : vérifiez la config Supabase (variables d’environnement).')
      } else if (/autorisé|authorized/i.test(msg)) {
        setError('Accès refusé : seul le compte admin autorisé peut se connecter.')
      } else if (/invalid login|invalid credentials|email|password/i.test(msg)) {
        setError('Email ou mot de passe incorrect.')
      } else {
        setError(msg)
      }
      setPassword('')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[var(--ds-page-bg)] grid-pattern flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent-500/10 blur-[80px] pointer-events-none" />

      <a
        href="/"
        className="absolute top-6 left-6 inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        <ArrowLeft size={14} />
        Retour au site
      </a>

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2.5 mb-3 overflow-visible">
            <BrandLogo variant="lockup" className="scale-110 origin-center" />
          </div>
          <Badge tone="mono">Espace admin</Badge>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
            Clients, projets, devis &amp; design system
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-7 md:p-8 space-y-4 shadow-lg"
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="p-2 rounded-xl bg-brand-500/10">
              <Lock size={16} className="text-brand-500" />
            </div>
            <h1 className="font-display text-lg font-bold text-gray-900 dark:text-white">Connexion</h1>
          </div>

          <Input
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoFocus
            autoComplete="username"
            placeholder="vous@email.com"
          />
          <Input
            label="Mot de passe"
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            placeholder="••••••••"
          />

          {error && (
            <p className="text-sm text-danger-500 bg-danger-500/10 rounded-lg px-3 py-2">{error}</p>
          )}

          <Button type="submit" disabled={loading} className="w-full" size="lg">
            {loading ? 'Connexion…' : 'Accéder au panel'}
          </Button>

          <p className="text-[11px] text-center text-slate-400 pt-1">
            Accès réservé · compte autorisé uniquement
          </p>
        </form>
      </div>
    </div>
  )
}
