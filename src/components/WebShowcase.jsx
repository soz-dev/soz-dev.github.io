import { motion } from 'framer-motion'
import { Monitor, ExternalLink } from 'lucide-react'

// ── Mini-site : Restaurant ──────────────────────────────────────────────────
function MiniRestaurant() {
  return (
    <div style={{ fontFamily: 'system-ui', background: '#0c0a05', color: '#f5f0e8', width: '100%', height: '100%', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', borderBottom: '1px solid rgba(212,168,67,0.15)' }}>
        <span style={{ fontWeight: 800, fontSize: 11, color: '#d4a843', letterSpacing: 3 }}>BELLA CUCINA</span>
        <div style={{ display: 'flex', gap: 10, fontSize: 8, color: '#a0916d' }}>
          <span>Menu</span><span>Réserver</span><span>Contact</span>
        </div>
      </div>
      <div style={{ background: 'linear-gradient(180deg, #1a0e02 0%, #0c0805 100%)', padding: '18px 14px 14px', textAlign: 'center' }}>
        <p style={{ fontSize: 7, color: '#d4a843', letterSpacing: 4, margin: '0 0 5px' }}>RESTAURANT GASTRONOMIQUE</p>
        <h1 style={{ fontSize: 17, fontWeight: 900, margin: '0 0 5px', lineHeight: 1.2, fontStyle: 'italic' }}>Une Experience<br/>Inoubliable</h1>
        <p style={{ fontSize: 7.5, color: '#a0916d', margin: '0 0 12px' }}>Cuisine italienne raffinée · Paris 8ème</p>
        <button style={{ background: '#d4a843', color: '#0c0a05', border: 'none', padding: '6px 18px', borderRadius: 3, fontSize: 8, fontWeight: 700, cursor: 'pointer', letterSpacing: 1 }}>RÉSERVER UNE TABLE →</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 7, padding: '12px 10px' }}>
        {[['🥩','Viandes rôties','28€'],['🍝','Pasta maison','22€'],['🍮','Desserts','12€']].map(([e,n,p], i) => (
          <div key={i} style={{ background: 'rgba(212,168,67,0.06)', border: '1px solid rgba(212,168,67,0.12)', borderRadius: 5, overflow: 'hidden' }}>
            <div style={{ height: 42, background: `linear-gradient(135deg, rgba(212,168,67,0.15), rgba(212,168,67,0.05))`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{e}</div>
            <div style={{ padding: '5px 7px' }}>
              <p style={{ fontSize: 7.5, fontWeight: 600, margin: '0 0 1px' }}>{n}</p>
              <p style={{ fontSize: 7, color: '#d4a843', margin: 0 }}>À partir de {p}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: '0 10px', display: 'flex', gap: 6, fontSize: 7, color: '#a0916d', justifyContent: 'center' }}>
        <span>★★★★★</span><span>· 247 avis Google</span>
      </div>
    </div>
  )
}

// ── Mini-site : Coach ────────────────────────────────────────────────────────
function MiniCoach() {
  return (
    <div style={{ fontFamily: 'system-ui', background: '#fafafa', color: '#111', width: '100%', height: '100%', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 14px', background: '#fff', borderBottom: '1px solid #f0f0f0' }}>
        <span style={{ fontWeight: 800, fontSize: 10, color: '#7c3aed' }}>Marie Laurent</span>
        <button style={{ background: 'linear-gradient(135deg,#7c3aed,#06b6d4)', color: '#fff', border: 'none', padding: '3px 10px', borderRadius: 20, fontSize: 7.5, cursor: 'pointer' }}>Prendre RDV</button>
      </div>
      <div style={{ padding: '14px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'linear-gradient(135deg,#7c3aed,#06b6d4)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>👩</div>
        <div>
          <p style={{ fontSize: 6.5, color: '#7c3aed', fontWeight: 700, margin: '0 0 2px', letterSpacing: 2 }}>COACH CERTIFIÉE ICF</p>
          <h2 style={{ fontSize: 13, fontWeight: 800, margin: '0 0 3px', lineHeight: 1.2 }}>Libérez votre<br/>plein potentiel</h2>
          <p style={{ fontSize: 7, color: '#666', margin: 0 }}>+200 clients accompagnés depuis 2019</p>
        </div>
      </div>
      <div style={{ padding: '0 14px 12px' }}>
        <p style={{ fontSize: 7.5, fontWeight: 700, margin: '0 0 7px', color: '#333' }}>Mes accompagnements</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 }}>
          {[['🎯','Coaching pro'],['🧘','Bien-être'],['💼','Leadership'],['✨','Life design']].map(([e,l], i) => (
            <div key={i} style={{ background: '#fff', border: `1px solid ${i===0?'#7c3aed30':'#f0f0f0'}`, borderRadius: 5, padding: '5px 7px', display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{ fontSize: 10 }}>{e}</span>
              <span style={{ fontSize: 7, fontWeight: 500 }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ margin: '0 14px', background: 'linear-gradient(135deg,rgba(124,58,237,0.05),rgba(6,182,212,0.05))', border: '1px solid rgba(124,58,237,0.1)', borderRadius: 6, padding: '7px 10px', display: 'flex', justifyContent: 'space-between', fontSize: 7.5, color: '#555' }}>
        <span>🗓 Prochaine dispo : <strong>Lundi 14h</strong></span>
        <span style={{ color: '#7c3aed', fontWeight: 600 }}>1h · 120 €</span>
      </div>
    </div>
  )
}

// ── Mini-site : E-commerce ───────────────────────────────────────────────────
function MiniEcommerce() {
  return (
    <div style={{ fontFamily: 'system-ui', background: '#fff', color: '#111', width: '100%', height: '100%', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 12px', borderBottom: '1px solid #f0f0f0' }}>
        <span style={{ fontWeight: 900, fontSize: 11 }}>LUXE<span style={{ color: '#06b6d4' }}>SHOP</span></span>
        <div style={{ display: 'flex', gap: 8, fontSize: 7.5, color: '#666', alignItems: 'center' }}>
          <span>Femme</span><span>Homme</span>
          <span style={{ background: '#111', color: '#fff', borderRadius: 20, padding: '1px 6px', fontSize: 7 }}>🛒 3</span>
        </div>
      </div>
      <div style={{ background: 'linear-gradient(135deg,#0f0c2b,#1a1540)', padding: '10px 12px 8px', textAlign: 'center' }}>
        <p style={{ fontSize: 7, color: '#06b6d4', letterSpacing: 3, margin: '0 0 2px' }}>COLLECTION ÉTÉ 2026</p>
        <p style={{ fontSize: 13, fontWeight: 800, color: '#fff', margin: '0 0 6px' }}>Le luxe accessible</p>
        <button style={{ background: '#06b6d4', color: '#fff', border: 'none', padding: '4px 14px', borderRadius: 3, fontSize: 7.5, cursor: 'pointer', fontWeight: 600 }}>Découvrir →</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 6, padding: '9px' }}>
        {[['#a78bfa','👜','Sac Cuir','189 €'],['#f9a8d4','👗','Robe Soirée','245 €'],['#67e8f9','⌚','Montre','320 €']].map(([c,e,n,p], i) => (
          <div key={i} style={{ borderRadius: 5, overflow: 'hidden', border: '1px solid #f0f0f0' }}>
            <div style={{ height: 46, background: `linear-gradient(135deg,${c}50,${c}20)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{e}</div>
            <div style={{ padding: '5px 6px' }}>
              <p style={{ fontSize: 7, fontWeight: 600, margin: '0 0 1px' }}>{n}</p>
              <p style={{ fontSize: 7.5, color: '#0891b2', fontWeight: 700, margin: '0 0 4px' }}>{p}</p>
              <button style={{ width: '100%', background: '#111', color: '#fff', border: 'none', padding: '3px 0', borderRadius: 3, fontSize: 6.5, cursor: 'pointer' }}>+ Panier</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: '0 9px', display: 'flex', justifyContent: 'space-between', fontSize: 7, color: '#aaa' }}>
        <span>🔒 Paiement sécurisé</span><span>🚚 Livraison 24h</span><span>↩ Retour 30j</span>
      </div>
    </div>
  )
}

// ── Mini-site : SaaS ─────────────────────────────────────────────────────────
function MiniSaaS() {
  return (
    <div style={{ fontFamily: 'system-ui', background: '#030712', color: '#e2e8f0', width: '100%', height: '100%', display: 'flex', overflow: 'hidden' }}>
      <div style={{ width: 44, background: '#07070f', borderRight: '1px solid rgba(255,255,255,0.05)', padding: '10px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 22, height: 22, borderRadius: 5, background: 'linear-gradient(135deg,#a855f7,#06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10 }}>⚡</div>
        {['📊','👥','📦','💬','⚙️'].map((icon, i) => (
          <div key={i} style={{ fontSize: 11, opacity: i === 0 ? 1 : 0.35 }}>{icon}</div>
        ))}
      </div>
      <div style={{ flex: 1, padding: '10px 9px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 9 }}>
          <p style={{ fontSize: 8.5, fontWeight: 700, margin: 0, color: '#a855f7' }}>// Dashboard</p>
          <span style={{ fontSize: 6.5, background: 'rgba(16,185,129,0.15)', color: '#10b981', padding: '1px 6px', borderRadius: 20 }}>● Actif</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5, marginBottom: 9 }}>
          {[['2 840','Utilisateurs','+12%','#a855f7'],['47 K €','Revenus MRR','+8%','#06b6d4']].map(([v,l,d,c], i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 6, padding: '6px 7px' }}>
              <p style={{ fontSize: 12, fontWeight: 700, margin: '0 0 1px', color: c }}>{v}</p>
              <p style={{ fontSize: 6, color: '#64748b', margin: '0 0 1px' }}>{l}</p>
              <p style={{ fontSize: 6.5, color: '#10b981', margin: 0 }}>{d} ce mois</p>
            </div>
          ))}
        </div>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 6, padding: '7px 8px' }}>
          <p style={{ fontSize: 6.5, color: '#64748b', margin: '0 0 6px' }}>Activité 30 jours</p>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2.5, height: 36 }}>
            {[35,52,41,68,55,78,60,85,72,90,68,95].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: '2px 2px 0 0', background: i === 11 ? '#a855f7' : `rgba(168,85,247,${0.15 + i * 0.055})` }} />
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 4, marginTop: 7 }}>
          {['Analyse','Export','Alertes'].map((l, i) => (
            <button key={i} style={{ flex: 1, background: i===0 ? 'rgba(168,85,247,0.15)' : 'rgba(255,255,255,0.04)', border: `1px solid ${i===0?'rgba(168,85,247,0.3)':'rgba(255,255,255,0.07)'}`, color: i===0?'#c084fc':'#64748b', borderRadius: 5, padding: '3px 0', fontSize: 6, cursor: 'pointer' }}>{l}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Browser frame ────────────────────────────────────────────────────────────
function BrowserFrame({ url, label, tags, children, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay }}
      className="rounded-2xl overflow-hidden border border-gray-200 dark:border-white/8 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400 group"
    >
      {/* Chrome bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-[#0f0f1a] border-b border-gray-200 dark:border-white/8">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        </div>
        <div className="flex-1 mx-1.5 bg-white/60 dark:bg-white/8 rounded-full px-3 py-0.5 text-[10px] text-gray-400 dark:text-slate-500 font-mono truncate">
          {url}
        </div>
        <Monitor size={10} className="text-gray-400 dark:text-slate-600 flex-shrink-0" />
      </div>
      {/* Mini-site */}
      <div style={{ height: 258, overflow: 'hidden' }}>
        {children}
      </div>
      {/* Footer */}
      <div className="px-3.5 py-3 bg-gray-50 dark:bg-[#07070f] border-t border-gray-200 dark:border-white/8">
        <p className="text-xs font-semibold text-gray-800 dark:text-white mb-2">{label}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map(t => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-300 font-mono">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ── Section principale ───────────────────────────────────────────────────────
export default function WebShowcase() {
  const demos = [
    {
      url: 'bella-cucina.fr',
      label: 'Restaurant gastronomique',
      tags: ['Dark design', 'Réservation', 'Menu'],
      component: <MiniRestaurant />,
    },
    {
      url: 'marie-coaching.fr',
      label: 'Coach / Thérapeute',
      tags: ['Landing page', 'Calendrier', 'SEO'],
      component: <MiniCoach />,
    },
    {
      url: 'luxeshop.fr',
      label: 'Boutique e-commerce',
      tags: ['Catalogue', 'Panier', 'Stripe'],
      component: <MiniEcommerce />,
    },
    {
      url: 'app.saas-demo.io',
      label: 'Application SaaS',
      tags: ['Dashboard', 'Auth', 'API REST'],
      component: <MiniSaaS />,
    },
  ]

  return (
    <section id="exemples" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[600px] rounded-full blur-[140px]" style={{ background: 'rgba(6,182,212,0.04)' }} />
      </div>
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(to right,transparent,rgba(6,182,212,0.25),transparent)' }} />

      <div className="relative max-w-5xl mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-cyan-400 tracking-[0.3em] uppercase block mb-4">
            // ce qu'on peut créer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5">
            Votre secteur,{' '}
            <span className="gradient-text">votre site</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg" style={{ maxWidth: '480px', margin: '0 auto' }}>
            Quelques exemples de ce qu'on peut construire ensemble. Chaque site est unique, conçu sur-mesure pour votre activité.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {demos.map((demo, i) => (
            <BrowserFrame
              key={demo.url}
              url={demo.url}
              label={demo.label}
              tags={demo.tags}
              delay={i * 0.08}
            >
              {demo.component}
            </BrowserFrame>
          ))}
        </div>

        {/* Note bas */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-slate-400 dark:text-slate-500 font-mono mt-10"
        >
          // Ces démos sont du vrai code React — pas des images.{' '}
          <a href="#devis" className="text-purple-400 hover:text-purple-300 transition">
            Parlez-moi de votre projet →
          </a>
        </motion.p>
      </div>
    </section>
  )
}
