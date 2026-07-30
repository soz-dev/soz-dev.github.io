import { useState } from 'react'
import { signIn } from '../../lib/supabaseAdmin'

export default function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await signIn(email.trim(), password)
      onLogin()
    } catch (err) {
      setError(err.message || 'Identifiants incorrects.')
      setPassword('')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a12] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2.5 mb-1">
            <img src="/logo-mark.png" alt="SOZ_DEV" className="h-10 w-10 object-contain" width={40} height={40} />
            <span className="text-2xl font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">SOZ_DEV</span>
            </span>
          </div>
          <p className="text-gray-500 dark:text-slate-500 text-sm mt-1">Espace admin</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-white/[0.04] rounded-2xl border border-gray-200 dark:border-white/10 p-7 space-y-4">
          <h1 className="text-gray-900 dark:text-white font-semibold text-lg mb-1">Connexion</h1>
          <div>
            <label className="text-xs text-gray-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">Email</label>
            <input
              type="email" value={email} onChange={e => setEmail(e.target.value)}
              required autoFocus autoComplete="username"
              className="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-3 py-2.5 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-purple-500 transition"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">Mot de passe</label>
            <input
              type="password" value={password} onChange={e => setPassword(e.target.value)}
              required autoComplete="current-password"
              className="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-3 py-2.5 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-purple-500 transition"
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2.5 rounded-lg transition text-sm disabled:opacity-50"
          >
            {loading ? 'Connexion…' : 'Entrer'}
          </button>
        </form>
      </div>
    </div>
  )
}
