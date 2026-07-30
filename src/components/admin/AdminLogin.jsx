import { useState } from 'react'
import { supabase } from '../../lib/supabaseAdmin'

export default function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { data, error: err } = await supabase.auth.signInWithPassword({ email, password })
    if (err) setError('Email ou mot de passe incorrect.')
    else onLogin(data.session)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#0a0a12] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <span className="text-2xl font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">soz-dev</span>
          </span>
          <p className="text-slate-500 text-sm mt-1">Espace admin</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white/[0.04] rounded-2xl border border-white/10 p-7 space-y-4">
          <h1 className="text-white font-semibold text-lg mb-1">Connexion</h1>
          <div>
            <label className="text-xs text-slate-400 uppercase tracking-wider block mb-1.5">Email</label>
            <input
              type="email" value={email} onChange={e => setEmail(e.target.value)} required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-purple-500 transition placeholder-slate-600"
            />
          </div>
          <div>
            <label className="text-xs text-slate-400 uppercase tracking-wider block mb-1.5">Mot de passe</label>
            <input
              type="password" value={password} onChange={e => setPassword(e.target.value)} required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-purple-500 transition"
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit" disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2.5 rounded-lg transition disabled:opacity-50 text-sm"
          >
            {loading ? 'Connexion…' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  )
}
