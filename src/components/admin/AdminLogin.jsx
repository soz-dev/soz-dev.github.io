import { useState } from 'react'
import { checkPassword } from '../../lib/adminDb'

export default function AdminLogin({ onLogin }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (checkPassword(password)) {
      sessionStorage.setItem('admin_auth', '1')
      onLogin()
    } else {
      setError('Mot de passe incorrect.')
      setPassword('')
    }
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
            <label className="text-xs text-slate-400 uppercase tracking-wider block mb-1.5">Mot de passe</label>
            <input
              type="password" value={password} onChange={e => setPassword(e.target.value)}
              required autoFocus
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-purple-500 transition"
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2.5 rounded-lg transition text-sm"
          >
            Entrer
          </button>
        </form>
      </div>
    </div>
  )
}
