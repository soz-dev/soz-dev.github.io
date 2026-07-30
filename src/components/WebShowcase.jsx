import { motion } from 'framer-motion'
import { Monitor } from 'lucide-react'

const IMG = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=75`

const ui = {
  sans: 'system-ui, -apple-system, sans-serif',
  serif: 'Georgia, "Times New Roman", serif',
}

/** Fixed-size image — never stretches empty space */
function Pic({ id, w, h, alt, style = {} }) {
  return (
    <img
      loading="lazy"
      src={IMG(id, w, h)}
      alt={alt}
      width={w}
      height={h}
      style={{ display: 'block', width: '100%', height: h, objectFit: 'cover', ...style }}
      onError={e => { e.target.style.opacity = '0.3' }}
    />
  )
}

// ═══════════════════════════════════════════════════════════
// 1. RESTAURANT — dark gold, menu + galerie + réservation
// ═══════════════════════════════════════════════════════════
function MiniRestaurant() {
  const dishes = [
    ['Carpaccio de bœuf', '18€'],
    ['Burrata & tomates', '16€'],
    ['Risotto aux truffes', '32€'],
    ['Pigeon rôti', '38€'],
    ['Bar en croûte', '34€'],
    ['Fondant chocolat', '14€'],
    ['Tiramisu maison', '12€'],
  ]
  return (
    <div style={{ fontFamily: ui.serif, background: '#0c0a09', color: '#faf6ef', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 10px', borderBottom: '1px solid rgba(212,168,67,0.35)', fontFamily: ui.sans }}>
        <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: 2, color: '#d4a843' }}>BELLA CUCINA</span>
        <div style={{ display: 'flex', gap: 8, fontSize: 6, color: 'rgba(250,246,239,0.55)' }}>
          <span>Menu</span><span>Cave</span><span>Contact</span>
        </div>
      </div>
      <Pic id="1414235077428-338989a2e8c0" w={400} h={110} alt="Plat signature" />
      <div style={{ padding: '10px 10px 6px', textAlign: 'center' }}>
        <p style={{ fontSize: 6, letterSpacing: 2, color: '#d4a843', margin: 0, fontFamily: ui.sans }}>PARIS 8 · ★ MICHELIN</p>
        <h2 style={{ fontSize: 16, fontWeight: 700, fontStyle: 'italic', margin: '4px 0 2px', lineHeight: 1.15 }}>La table italienne<br />d’exception</h2>
        <p style={{ fontSize: 7, color: 'rgba(250,246,239,0.55)', margin: 0, fontFamily: ui.sans, lineHeight: 1.4 }}>Produits du marché · Cuisine ouverte · Cave 400 références</p>
      </div>
      <div style={{ margin: '6px 10px', padding: '8px', border: '1px solid rgba(212,168,67,0.3)', borderRadius: 4 }}>
        <p style={{ fontSize: 7, letterSpacing: 2, color: '#d4a843', margin: '0 0 6px', fontFamily: ui.sans, fontWeight: 700 }}>À LA CARTE</p>
        {dishes.map(([n, p]) => (
          <div key={n} style={{ display: 'flex', justifyContent: 'space-between', fontFamily: ui.sans, fontSize: 7.5, marginBottom: 4, borderBottom: '1px dotted rgba(212,168,67,0.2)', paddingBottom: 3 }}>
            <span>{n}</span>
            <span style={{ color: '#d4a843', fontWeight: 700 }}>{p}</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 3, padding: '0 10px 8px' }}>
        <Pic id="1517248135467-4c7edcad34c4" w={120} h={52} alt="Salle" style={{ borderRadius: 3 }} />
        <Pic id="1559339352-61f453b8c7a0" w={120} h={52} alt="Pasta" style={{ borderRadius: 3 }} />
        <Pic id="1414235077428-338989a2e8c0" w={120} h={52} alt="Dessert" style={{ borderRadius: 3 }} />
      </div>
      <div style={{ margin: '0 10px 10px', padding: '8px', background: 'rgba(212,168,67,0.12)', borderRadius: 4, fontFamily: ui.sans }}>
        <p style={{ fontSize: 7, margin: '0 0 4px', color: 'rgba(250,246,239,0.7)' }}>Réserver une table</p>
        <div style={{ display: 'flex', gap: 4 }}>
          <div style={{ flex: 1, background: '#1a1714', padding: '5px 6px', borderRadius: 3, fontSize: 6.5, color: 'rgba(250,246,239,0.5)' }}>Date · Heure · Couverts</div>
          <button type="button" style={{ background: '#d4a843', color: '#0c0a09', border: 'none', padding: '5px 10px', fontSize: 7, fontWeight: 800, borderRadius: 3, cursor: 'pointer' }}>OK</button>
        </div>
      </div>
      <div style={{ padding: '6px 10px', borderTop: '1px solid rgba(212,168,67,0.2)', fontFamily: ui.sans, fontSize: 5.5, color: 'rgba(250,246,239,0.4)', display: 'flex', justifyContent: 'space-between' }}>
        <span>12h–14h30 · 19h–23h</span>
        <span>01 42 00 00 00</span>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// 2. COACH — warm landing: bio, offres, avis, agenda
// ═══════════════════════════════════════════════════════════
function MiniCoach() {
  return (
    <div style={{ fontFamily: ui.sans, background: '#f4f1eb', color: '#1a2e28', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 10px', background: '#1a2e28', color: '#f4f1eb' }}>
        <span style={{ fontSize: 9, fontWeight: 800 }}>Marie Laurent</span>
        <div style={{ display: 'flex', gap: 7, fontSize: 6, opacity: 0.7 }}><span>Méthode</span><span>Offres</span><span>Blog</span></div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 88px', gap: 8, padding: '10px' }}>
        <div>
          <p style={{ fontSize: 6, letterSpacing: 1.5, color: '#5c7a6e', margin: '0 0 3px', fontWeight: 700 }}>COACH ICF · PARIS</p>
          <h2 style={{ fontSize: 14, fontWeight: 800, margin: '0 0 4px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>Passez au niveau supérieur</h2>
          <p style={{ fontSize: 7, color: '#5a6b64', margin: '0 0 6px', lineHeight: 1.35 }}>Accompagnement carrière & leadership pour cadres ambitieux.</p>
          <button type="button" style={{ background: '#c4a574', color: '#1a2e28', border: 'none', padding: '5px 10px', borderRadius: 4, fontSize: 7, fontWeight: 700, cursor: 'pointer' }}>Prendre RDV</button>
        </div>
        <Pic id="1573496359142-b8d87734a5a2" w={88} h={100} alt="Marie Laurent" style={{ borderRadius: 6 }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 4, padding: '0 10px 10px' }}>
        {[['200+', 'clients'], ['6 ans', 'xp'], ['4.9★', 'avis']].map(([v, l]) => (
          <div key={l} style={{ background: '#fff', borderRadius: 5, padding: '7px 6px', textAlign: 'center', border: '1px solid #e5e0d6' }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: '#2d4a40' }}>{v}</div>
            <div style={{ fontSize: 6, color: '#6b7c74' }}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{ padding: '0 10px 10px' }}>
        <p style={{ fontSize: 7, fontWeight: 800, margin: '0 0 5px', letterSpacing: 0.5 }}>FORMULES</p>
        {[
          ['Découverte', '1 séance · 90 min', '120 €'],
          ['Pack Carrière', '6 séances + plan', '650 €'],
          ['Leadership', '12 semaines', '1 890 €'],
        ].map(([t, d, p]) => (
          <div key={t} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', border: '1px solid #e5e0d6', borderRadius: 5, padding: '6px 8px', marginBottom: 4 }}>
            <div>
              <div style={{ fontSize: 8, fontWeight: 700 }}>{t}</div>
              <div style={{ fontSize: 6, color: '#6b7c74' }}>{d}</div>
            </div>
            <div style={{ fontSize: 9, fontWeight: 800, color: '#2d4a40' }}>{p}</div>
          </div>
        ))}
      </div>
      <div style={{ margin: '0 10px 10px', padding: '8px', background: '#1a2e28', color: '#f4f1eb', borderRadius: 6 }}>
        <p style={{ fontSize: 7, fontStyle: 'italic', margin: '0 0 3px', lineHeight: 1.35, color: '#e8e4dc' }}>&ldquo;En 3 mois j&apos;ai décroché le poste de mes rêves.&rdquo;</p>
        <p style={{ fontSize: 6, color: '#c4a574', margin: 0 }}>— Sophie T., Manager</p>
      </div>
      <div style={{ padding: '6px 10px 10px', borderTop: '1px solid #e5e0d6', fontSize: 6, color: '#6b7c74', display: 'flex', justifyContent: 'space-between' }}>
        <span>Prochaine dispo · Lun 14h</span>
        <span style={{ color: '#2d4a40', fontWeight: 700 }}>Réserver →</span>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// 3. E-COMMERCE — boutique dense catalogue + panier
// ═══════════════════════════════════════════════════════════
function MiniEcommerce() {
  const products = [
    [IMG('1542291026-7eec264c27ff', 120, 120), 'Air Runner', '129 €', '189 €'],
    [IMG('1548036328-c9fa89d128fa', 120, 120), 'Sac Cuir', '189 €', null],
    [IMG('1523275335684-37898b6baf30', 120, 120), 'Montre Or', '320 €', '450 €'],
    [IMG('1434389677669-e08b4cac3105', 120, 120), 'Lunettes', '89 €', null],
    [IMG('1521572163474-6864f9cf17ab', 120, 120), 'Casquette', '45 €', null],
    [IMG('1560343090-f0409e627644', 120, 120), 'Basket Pro', '159 €', '199 €'],
  ]
  return (
    <div style={{ fontFamily: ui.sans, background: '#faf8f6', color: '#1a1a1a', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 9px', background: '#1a1a1a', color: '#fff' }}>
        <span style={{ fontWeight: 900, fontSize: 10, letterSpacing: 1 }}>LUXE<span style={{ color: '#e8a0bf' }}>SHOP</span></span>
        <div style={{ display: 'flex', gap: 6, fontSize: 6.5, alignItems: 'center' }}>
          <span style={{ opacity: 0.5 }}>Femme</span>
          <span style={{ opacity: 0.5 }}>Homme</span>
          <span style={{ background: '#e8a0bf', color: '#1a1a1a', borderRadius: 10, padding: '2px 6px', fontWeight: 700 }}>3</span>
        </div>
      </div>
      <div style={{ background: 'linear-gradient(90deg,#1a1a1a,#3d2a35)', padding: '6px 9px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 7.5, fontWeight: 700, color: '#fff' }}><span style={{ background: '#e8a0bf', color: '#1a1a1a', padding: '1px 5px', borderRadius: 2, fontWeight: 800, marginRight: 5, fontSize: 6 }}>-30%</span>Soldes d&apos;été</span>
        <span style={{ fontSize: 6.5, color: '#e8a0bf', fontWeight: 600 }}>Tout voir →</span>
      </div>
      <div style={{ padding: '8px 9px 4px', display: 'flex', gap: 4, fontSize: 6, overflow: 'hidden' }}>
        {['Nouveautés', 'Chaussures', 'Sacs', 'Accessoires', 'Promo'].map((c, i) => (
          <span key={c} style={{ padding: '3px 7px', borderRadius: 12, background: i === 0 ? '#1a1a1a' : '#fff', color: i === 0 ? '#fff' : '#666', border: '1px solid #e8e4e0', whiteSpace: 'nowrap', fontWeight: 600 }}>{c}</span>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, padding: '6px 9px 10px' }}>
        {products.map(([src, name, price, old], i) => (
          <div key={name} style={{ background: '#fff', borderRadius: 6, overflow: 'hidden', border: '1px solid #eee' }}>
            <div style={{ position: 'relative' }}>
              <img loading="lazy" src={src} alt={name} style={{ width: '100%', height: 72, objectFit: 'cover', display: 'block' }} onError={e => { e.target.style.opacity = '0.3' }} />
              {old && <span style={{ position: 'absolute', top: 4, left: 4, background: '#e8a0bf', color: '#1a1a1a', fontSize: 5.5, fontWeight: 800, padding: '1px 4px', borderRadius: 2 }}>PROMO</span>}
            </div>
            <div style={{ padding: '5px 6px 6px' }}>
              <div style={{ fontSize: 7.5, fontWeight: 700 }}>{name}</div>
              <div style={{ display: 'flex', gap: 4, alignItems: 'baseline', marginTop: 2 }}>
                <span style={{ fontSize: 8, fontWeight: 800 }}>{price}</span>
                {old && <span style={{ fontSize: 6.5, color: '#999', textDecoration: 'line-through' }}>{old}</span>}
              </div>
              <button type="button" style={{ marginTop: 4, width: '100%', background: i % 2 ? '#1a1a1a' : '#f0ece8', color: i % 2 ? '#fff' : '#1a1a1a', border: 'none', padding: '4px', fontSize: 6.5, fontWeight: 700, borderRadius: 3, cursor: 'pointer' }}>
                Ajouter
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: '7px 9px', background: '#1a1a1a', color: 'rgba(255,255,255,0.55)', fontSize: 6, display: 'flex', justifyContent: 'space-between' }}>
        <span>✓ Paiement Stripe</span>
        <span>✓ Livraison 24h</span>
        <span>✓ Retours 30j</span>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// 4. SAAS — landing + mock dashboard
// ═══════════════════════════════════════════════════════════
function MiniSaaS() {
  return (
    <div style={{ fontFamily: ui.sans, background: '#0b1220', color: '#e2e8f0', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 10px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <span style={{ fontSize: 9, fontWeight: 800 }}>Flow<span style={{ color: '#818cf8' }}>Metric</span></span>
        <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
          <span style={{ fontSize: 6, opacity: 0.5 }}>Docs</span>
          <span style={{ fontSize: 6, opacity: 0.5 }}>Pricing</span>
          <button type="button" style={{ background: '#6366f1', color: '#fff', border: 'none', padding: '3px 8px', borderRadius: 4, fontSize: 6.5, fontWeight: 700, cursor: 'pointer' }}>Essai gratuit</button>
        </div>
      </div>
      <div style={{ padding: '12px 10px 8px', textAlign: 'center' }}>
        <p style={{ fontSize: 6, color: '#818cf8', fontWeight: 700, letterSpacing: 1, margin: '0 0 4px' }}>ANALYTICS B2B</p>
        <h2 style={{ fontSize: 14, fontWeight: 800, margin: '0 0 4px', lineHeight: 1.2 }}>Vos KPIs en temps réel</h2>
        <p style={{ fontSize: 7, color: '#94a3b8', margin: '0 0 8px', lineHeight: 1.35 }}>Tableaux de bord, alertes, exports — sans Excel.</p>
        <div style={{ display: 'flex', gap: 4, justifyContent: 'center' }}>
          <button type="button" style={{ background: '#6366f1', color: '#fff', border: 'none', padding: '5px 12px', borderRadius: 5, fontSize: 7, fontWeight: 700, cursor: 'pointer' }}>Démarrer</button>
          <button type="button" style={{ background: 'transparent', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.15)', padding: '5px 10px', borderRadius: 5, fontSize: 7, fontWeight: 600, cursor: 'pointer' }}>Voir démo</button>
        </div>
      </div>
      <div style={{ margin: '0 10px 10px', background: '#111827', borderRadius: 8, border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '5px 8px', gap: 8, fontSize: 6, color: '#64748b' }}>
          <span style={{ color: '#818cf8', fontWeight: 700 }}>Overview</span>
          <span>Revenue</span>
          <span>Users</span>
          <span>Settings</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 5, padding: '8px' }}>
          {[['MRR', '24,8k€', '+12%'], ['Users', '1 842', '+8%'], ['Churn', '2,1%', '-0.4%']].map(([l, v, d]) => (
            <div key={l} style={{ background: '#0b1220', borderRadius: 5, padding: '6px' }}>
              <div style={{ fontSize: 5.5, color: '#64748b' }}>{l}</div>
              <div style={{ fontSize: 11, fontWeight: 800, margin: '2px 0' }}>{v}</div>
              <div style={{ fontSize: 6, color: d.startsWith('+') ? '#34d399' : '#34d399' }}>{d}</div>
            </div>
          ))}
        </div>
        <div style={{ padding: '0 8px 8px' }}>
          <div style={{ height: 48, background: 'linear-gradient(180deg,rgba(99,102,241,0.25),transparent)', borderRadius: 4, position: 'relative', overflow: 'hidden' }}>
            <svg width="100%" height="48" viewBox="0 0 200 48" preserveAspectRatio="none">
              <polyline fill="none" stroke="#818cf8" strokeWidth="2" points="0,40 30,35 60,28 90,30 120,18 150,22 180,10 200,12" />
            </svg>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 5.5, color: '#475569', marginTop: 3 }}>
            <span>Jan</span><span>Mar</span><span>Mai</span><span>Jul</span>
          </div>
        </div>
      </div>
      <div style={{ padding: '0 10px 10px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 }}>
        {['Sync Stripe', 'SSO Google', 'API REST', 'Webhooks'].map(f => (
          <div key={f} style={{ fontSize: 6.5, padding: '5px 6px', background: 'rgba(99,102,241,0.12)', borderRadius: 4, color: '#c7d2fe', fontWeight: 600 }}>✓ {f}</div>
        ))}
      </div>
      <div style={{ padding: '6px 10px', borderTop: '1px solid rgba(255,255,255,0.06)', fontSize: 6, color: '#64748b', textAlign: 'center' }}>
        Dès 29 €/mois · 14 jours d&apos;essai
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// 5. ARTISAN — vitrine locale urgence + services + zones
// ═══════════════════════════════════════════════════════════
function MiniArtisan() {
  return (
    <div style={{ fontFamily: ui.sans, background: '#fff', color: '#0f1c2e', width: '100%' }}>
      <div style={{ background: '#ea580c', color: '#fff', padding: '4px 10px', fontSize: 6.5, fontWeight: 700, display: 'flex', justifyContent: 'space-between' }}>
        <span>⚡ Urgence 24/7 — Paris &amp; banlieue</span>
        <span>06 12 34 56 78</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 10px', background: '#0f1c2e', color: '#fff' }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 800 }}>Pro Plomberie</div>
          <div style={{ fontSize: 5.5, opacity: 0.6 }}>Artisan RGE · Depuis 2009</div>
        </div>
        <button type="button" style={{ background: '#ea580c', color: '#fff', border: 'none', padding: '5px 9px', borderRadius: 4, fontSize: 7, fontWeight: 700, cursor: 'pointer' }}>Devis gratuit</button>
      </div>
      <Pic id="1581094794329-c8112a89af12" w={400} h={90} alt="Intervention" />
      <div style={{ padding: '8px 10px' }}>
        <h2 style={{ fontSize: 13, fontWeight: 800, margin: '0 0 3px', lineHeight: 1.2 }}>Plombier de confiance à Paris</h2>
        <p style={{ fontSize: 7, color: '#64748b', margin: '0 0 8px', lineHeight: 1.35 }}>Fuite, débouchage, chaudière, salle de bain — devis sous 2h.</p>
        <div style={{ display: 'flex', gap: 4, marginBottom: 8, flexWrap: 'wrap' }}>
          {['✓ Assuré', '✓ RGE', '✓ Devis gratuit', '✓ Facture'].map(b => (
            <span key={b} style={{ fontSize: 6, background: '#fff7ed', color: '#c2410c', padding: '3px 6px', borderRadius: 3, fontWeight: 600 }}>{b}</span>
          ))}
        </div>
        <p style={{ fontSize: 7, fontWeight: 800, margin: '0 0 5px' }}>NOS SERVICES</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5, marginBottom: 8 }}>
          {[
            ['Fuite & débouchage', 'Dès 89 €'],
            ['Chauffe-eau', 'Dès 149 €'],
            ['Salle de bain', 'Sur devis'],
            ['Entretien chaudière', '99 €/an'],
          ].map(([t, p]) => (
            <div key={t} style={{ border: '1px solid #e2e8f0', borderRadius: 5, padding: '6px' }}>
              <div style={{ fontSize: 7.5, fontWeight: 700 }}>{t}</div>
              <div style={{ fontSize: 6.5, color: '#ea580c', fontWeight: 700, marginTop: 2 }}>{p}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 7, fontWeight: 800, margin: '0 0 4px' }}>ZONES</p>
        <p style={{ fontSize: 6.5, color: '#64748b', margin: '0 0 8px', lineHeight: 1.4 }}>Paris 1–20 · Vincennes · Boulogne · Neuilly · Saint-Denis</p>
        <div style={{ background: '#0f1c2e', color: '#fff', borderRadius: 6, padding: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 7, opacity: 0.6 }}>Disponible maintenant</div>
            <div style={{ fontSize: 9, fontWeight: 800 }}>Intervention sous 45 min</div>
          </div>
          <button type="button" style={{ background: '#ea580c', color: '#fff', border: 'none', padding: '6px 10px', borderRadius: 4, fontSize: 7, fontWeight: 700, cursor: 'pointer' }}>Appeler</button>
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// 6. BLOG / MAGAZINE — éditorial dense
// ═══════════════════════════════════════════════════════════
function MiniBlog() {
  const articles = [
    ['IA', 'Les 7 outils qui changent le code en 2026', '8 min'],
    ['Design', 'Typographie : 5 erreurs qui tuent un site', '5 min'],
    ['Business', 'Combien facturer un site vitrine ?', '6 min'],
    ['Tech', 'Supabase vs Firebase pour un SaaS', '10 min'],
  ]
  return (
    <div style={{ fontFamily: ui.serif, background: '#f7f4ef', color: '#1a1a1a', width: '100%' }}>
      <div style={{ padding: '8px 10px 6px', borderBottom: '2px solid #1a1a1a', textAlign: 'center' }}>
        <p style={{ fontSize: 5.5, letterSpacing: 3, margin: '0 0 2px', fontFamily: ui.sans, color: '#666' }}>VENDREDI · ÉDITION DIGITALE</p>
        <h1 style={{ fontSize: 18, fontWeight: 900, margin: 0, letterSpacing: '-0.02em' }}>The Pulse</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 4, fontSize: 6, fontFamily: ui.sans, color: '#555', borderTop: '1px solid #ccc', paddingTop: 4 }}>
          {['Tech', 'Design', 'Business', 'Culture', 'Outils'].map(r => <span key={r}>{r}</span>)}
        </div>
      </div>
      <div style={{ padding: '8px 10px' }}>
        <Pic id="1486312338219-ce68d2c6f44d" w={400} h={88} alt="À la une" style={{ borderRadius: 2, marginBottom: 6 }} />
        <span style={{ fontSize: 5.5, fontFamily: ui.sans, background: '#1a1a1a', color: '#f7f4ef', padding: '2px 5px', fontWeight: 700, letterSpacing: 1 }}>À LA UNE</span>
        <h2 style={{ fontSize: 13, fontWeight: 800, margin: '5px 0 3px', lineHeight: 1.2 }}>Comment l&apos;IA accélère (vraiment) les freelances</h2>
        <p style={{ fontSize: 7, color: '#555', margin: '0 0 4px', lineHeight: 1.35, fontFamily: ui.sans }}>Enquête auprès de 40 développeurs indépendants sur leur stack 2026.</p>
        <p style={{ fontSize: 6, color: '#888', fontFamily: ui.sans, margin: '0 0 10px' }}>Alex M. · 8 min · 2,4k lectures</p>
        <p style={{ fontSize: 7, fontWeight: 800, fontFamily: ui.sans, margin: '0 0 5px', letterSpacing: 0.5 }}>AUSSI À LIRE</p>
        {articles.map(([cat, title, time]) => (
          <div key={title} style={{ display: 'flex', gap: 8, marginBottom: 6, paddingBottom: 6, borderBottom: '1px solid #e5e0d6' }}>
            <div style={{ width: 4, background: '#a855f7', borderRadius: 2, flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 5.5, fontFamily: ui.sans, color: '#a855f7', fontWeight: 700, margin: '0 0 1px', letterSpacing: 0.5 }}>{cat}</p>
              <p style={{ fontSize: 8, fontWeight: 700, margin: '0 0 2px', lineHeight: 1.25 }}>{title}</p>
              <p style={{ fontSize: 6, color: '#888', margin: 0, fontFamily: ui.sans }}>{time} de lecture</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ margin: '0 10px 10px', padding: '8px', background: '#1a1a1a', color: '#f7f4ef', borderRadius: 4, fontFamily: ui.sans }}>
        <p style={{ fontSize: 8, fontWeight: 700, margin: '0 0 3px' }}>Newsletter hebdo</p>
        <p style={{ fontSize: 6.5, opacity: 0.6, margin: '0 0 5px' }}>1 email / semaine, zéro spam.</p>
        <div style={{ display: 'flex', gap: 4 }}>
          <div style={{ flex: 1, background: '#333', padding: '5px 6px', borderRadius: 3, fontSize: 6.5, opacity: 0.5 }}>votre@email.com</div>
          <button type="button" style={{ background: '#a855f7', color: '#fff', border: 'none', padding: '5px 9px', fontSize: 7, fontWeight: 700, borderRadius: 3, cursor: 'pointer' }}>OK</button>
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// 7. CABINET — institutionnel multi-sections
// ═══════════════════════════════════════════════════════════
function MiniCabinet() {
  return (
    <div style={{ fontFamily: ui.serif, background: '#f5f2eb', color: '#0f1f3d', width: '100%' }}>
      <div style={{ padding: '10px 10px 8px', textAlign: 'center', borderBottom: '1px solid #c9a84c' }}>
        <p style={{ fontSize: 5.5, letterSpacing: 3, color: '#c9a84c', margin: '0 0 3px', fontFamily: ui.sans }}>CABINET D&apos;AVOCATS · PARIS</p>
        <h1 style={{ fontSize: 14, fontWeight: 700, margin: 0, letterSpacing: 1 }}>Dupont & Associés</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 5, fontSize: 6, fontFamily: ui.sans, color: '#5a6478' }}>
          {['Cabinet', 'Domaines', 'Équipe', 'Contact'].map(l => <span key={l}>{l}</span>)}
        </div>
      </div>
      <Pic id="1497366216548-37526070297c" w={400} h={78} alt="Bureau" />
      <div style={{ padding: '10px' }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, margin: '0 0 4px', lineHeight: 1.25 }}>Conseil juridique d&apos;excellence</h2>
        <p style={{ fontSize: 7, color: '#5a6478', margin: '0 0 8px', lineHeight: 1.4, fontFamily: ui.sans }}>30 ans au service des entreprises et des particuliers. Consultation sur rendez-vous.</p>
        <p style={{ fontSize: 6, letterSpacing: 1.5, color: '#c9a84c', margin: '0 0 5px', fontFamily: ui.sans, fontWeight: 700 }}>DOMAINES D&apos;EXPERTISE</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, marginBottom: 10, fontFamily: ui.sans }}>
          {['Droit des affaires', 'Droit immobilier', 'Droit du travail', 'Fiscalité', 'Famille', 'Pénal'].map(d => (
            <div key={d} style={{ fontSize: 7, border: '1px solid #c9a84c', padding: '5px 6px', textAlign: 'center', fontWeight: 600 }}>{d}</div>
          ))}
        </div>
        <p style={{ fontSize: 6, letterSpacing: 1.5, color: '#c9a84c', margin: '0 0 5px', fontFamily: ui.sans, fontWeight: 700 }}>L&apos;ÉQUIPE</p>
        <div style={{ display: 'flex', gap: 6, marginBottom: 10, fontFamily: ui.sans }}>
          {[
            [IMG('1560250097-0b93528c311a', 60, 60), 'Me Dupont', 'Associé'],
            [IMG('1573496359142-b8d87734a5a2', 60, 60), 'Me Martin', 'Associée'],
            [IMG('1472099645785-5658abf4ff4e', 60, 60), 'Me Leroy', 'Counsel'],
          ].map(([src, name, role]) => (
            <div key={name} style={{ flex: 1, textAlign: 'center' }}>
              <img loading="lazy" src={src} alt={name} style={{ width: '100%', height: 48, objectFit: 'cover', borderRadius: 3, display: 'block', marginBottom: 3 }} onError={e => { e.target.style.opacity = '0.3' }} />
              <div style={{ fontSize: 6.5, fontWeight: 700 }}>{name}</div>
              <div style={{ fontSize: 5.5, color: '#5a6478' }}>{role}</div>
            </div>
          ))}
        </div>
        <button type="button" style={{ width: '100%', background: '#c9a84c', color: '#0f1f3d', border: 'none', padding: '8px', fontSize: 8, fontWeight: 800, cursor: 'pointer', fontFamily: ui.sans }}>
          Prendre rendez-vous →
        </button>
      </div>
      <div style={{ padding: '6px 10px', borderTop: '1px solid #ddd', fontSize: 5.5, color: '#5a6478', fontFamily: ui.sans, display: 'flex', justifyContent: 'space-between' }}>
        <span>16 rue de la Paix, 75002</span>
        <span>01 40 00 00 00</span>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// 8. PORTFOLIO — créatif dark masonry + séries
// ═══════════════════════════════════════════════════════════
function MiniPortfolio() {
  return (
    <div style={{ fontFamily: ui.sans, background: '#0a0a0a', color: '#fff', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 10px' }}>
        <span style={{ fontSize: 11, fontWeight: 900, letterSpacing: 2 }}>LÉNA</span>
        <div style={{ display: 'flex', gap: 8, fontSize: 6, color: 'rgba(255,255,255,0.45)' }}>
          <span>Work</span><span>About</span><span style={{ color: '#c8f542' }}>Book</span>
        </div>
      </div>
      <div style={{ padding: '4px 10px 10px' }}>
        <p style={{ fontSize: 6, color: '#c8f542', letterSpacing: 2, margin: '0 0 3px', fontWeight: 700 }}>PHOTOGRAPHE · PARIS</p>
        <h2 style={{ fontSize: 15, fontWeight: 800, margin: '0 0 4px', lineHeight: 1.15 }}>Images qui<br />racontent.</h2>
        <p style={{ fontSize: 7, color: 'rgba(255,255,255,0.45)', margin: '0 0 10px', lineHeight: 1.35 }}>Mode · Portrait · Architecture · Éditorial</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 4, marginBottom: 4 }}>
          <Pic id="1501854140801-50d01698950b" w={200} h={100} alt="Nature" style={{ borderRadius: 3 }} />
          <Pic id="1469334031218-e382a71b716b" w={160} h={100} alt="Mode" style={{ borderRadius: 3 }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 4, marginBottom: 10 }}>
          <Pic id="1518173946687-a4c8892bbd9f" w={120} h={56} alt="Urban" style={{ borderRadius: 3 }} />
          <Pic id="1492693428060-cfa7817adba9" w={120} h={56} alt="Portrait" style={{ borderRadius: 3 }} />
          <Pic id="1441986300917-64674bd600d8" w={120} h={56} alt="Produit" style={{ borderRadius: 3 }} />
        </div>
        <p style={{ fontSize: 7, fontWeight: 800, margin: '0 0 5px', color: '#c8f542', letterSpacing: 1 }}>SÉRIES</p>
        {[
          ['01 — NATURE', '84 photos · Print available'],
          ['02 — MODE SS26', '120 photos · Éditorial'],
          ['03 — URBAN', '240 photos · 3 prix'],
          ['04 — PORTRAITS', '56 sessions · Booking'],
        ].map(([t, d]) => (
          <div key={t} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <div>
              <div style={{ fontSize: 8, fontWeight: 700 }}>{t}</div>
              <div style={{ fontSize: 6, color: 'rgba(255,255,255,0.4)' }}>{d}</div>
            </div>
            <span style={{ fontSize: 7, color: '#c8f542', fontWeight: 700 }}>→</span>
          </div>
        ))}
        <button type="button" style={{ marginTop: 10, width: '100%', background: 'transparent', color: '#c8f542', border: '1px solid #c8f542', padding: '8px', fontSize: 8, fontWeight: 700, cursor: 'pointer' }}>
          Book a session
        </button>
      </div>
    </div>
  )
}

// ── Browser frame ──────────────────────────────────────────
function BrowserFrame({ url, label, tags, children, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay }}
      className="rounded-2xl overflow-hidden border border-gray-200 dark:border-white/8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-[#0f0f1a] border-b border-gray-200 dark:border-white/8 flex-shrink-0">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        </div>
        <div className="flex-1 mx-1.5 bg-white/60 dark:bg-white/8 rounded-full px-3 py-0.5 text-[10px] text-gray-400 dark:text-slate-500 font-mono truncate">{url}</div>
        <Monitor size={10} className="text-gray-400 dark:text-slate-600 flex-shrink-0" />
      </div>
      <div
        style={{ height: 340, overflowY: 'auto', overflowX: 'hidden', WebkitOverflowScrolling: 'touch' }}
        className="bg-white"
      >
        {children}
      </div>
      <div className="px-3.5 py-2.5 bg-gray-50 dark:bg-[#07070f] border-t border-gray-200 dark:border-white/8 flex-shrink-0">
        <p className="text-xs font-semibold text-gray-800 dark:text-white mb-1.5 font-display">{label}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map(t => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-300 font-mono">{t}</span>
          ))}
        </div>
        <p className="text-[10px] text-slate-400 mt-1.5 font-mono">Défilez pour voir toute la page ↓</p>
      </div>
    </motion.div>
  )
}

const DEMOS = [
  { url: 'bella-cucina.fr', label: 'Restaurant gastronomique', tags: ['Menu', 'Réservation', 'Galerie'], component: <MiniRestaurant /> },
  { url: 'marie-coaching.fr', label: 'Coach & thérapeute', tags: ['Offres', 'Avis', 'RDV'], component: <MiniCoach /> },
  { url: 'luxeshop.fr', label: 'Boutique e-commerce', tags: ['Catalogue', 'Panier', 'Stripe'], component: <MiniEcommerce /> },
  { url: 'app.flowmetric.io', label: 'SaaS / produit', tags: ['Landing', 'Dashboard', 'KPIs'], component: <MiniSaaS /> },
  { url: 'proplomberie-paris.fr', label: 'Artisan / vitrine locale', tags: ['Urgence', 'Services', 'SEO local'], component: <MiniArtisan /> },
  { url: 'thepulse.fr', label: 'Blog / magazine', tags: ['Éditorial', 'Articles', 'Newsletter'], component: <MiniBlog /> },
  { url: 'dupont-avocats.fr', label: 'Cabinet professionnel', tags: ['Domaines', 'Équipe', 'RDV'], component: <MiniCabinet /> },
  { url: 'lena-photo.fr', label: 'Portfolio créatif', tags: ['Galerie', 'Séries', 'Booking'], component: <MiniPortfolio /> },
]

export default function WebShowcase() {
  return (
    <section id="exemples" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[1000px] h-[700px] rounded-full blur-[160px]" style={{ background: 'rgba(6,182,212,0.04)' }} />
      </div>
      <div className="relative max-w-6xl mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-cyan-400 tracking-[0.3em] uppercase block mb-4">Exemples</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5">
            Huit sites,{' '}<span className="gradient-text">huit univers</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-xl mx-auto">
            Mini-pages complètes et scrollables — restaurant, boutique, SaaS, portfolio… Pas des blocs vides.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DEMOS.map((demo, i) => (
            <BrowserFrame key={demo.url} url={demo.url} label={demo.label} tags={demo.tags} delay={i * 0.06}>
              {demo.component}
            </BrowserFrame>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#devis"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Un site comme celui-ci pour vous → devis
          </a>
        </motion.div>
      </div>
    </section>
  )
}
