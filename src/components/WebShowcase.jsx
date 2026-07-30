import { motion } from 'framer-motion'
import { Monitor } from 'lucide-react'

const IMG = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=75`

const ui = {
  sans: "'Manrope', system-ui, sans-serif",
  display: "'Syne', system-ui, sans-serif",
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
    <div style={{ fontFamily: ui.display, background: '#0c0a09', color: '#faf6ef', width: '100%' }}>
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
// 5. ARTISAN — marketplace urgence (tech live + devis + FAQ)
// ═══════════════════════════════════════════════════════════
function MiniArtisan() {
  return (
    <div style={{ fontFamily: ui.sans, background: '#f1f5f9', color: '#0f172a', width: '100%' }}>
      <div style={{ background: '#0f172a', color: '#fff', padding: '5px 9px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 5.5 }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 0 2px rgba(74,222,128,0.35)' }} />
          3 techniciens en ligne · Paris
        </span>
        <span style={{ fontWeight: 800, color: '#fb923c' }}>Appel gratuit</span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 9px', background: '#fff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 24, height: 24, borderRadius: 6, background: 'linear-gradient(135deg,#ea580c,#c2410c)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 900, color: '#fff', fontFamily: ui.display }}>PP</div>
          <div>
            <div style={{ fontSize: 9, fontWeight: 800, fontFamily: ui.display, letterSpacing: '-0.02em' }}>Pro Plomberie</div>
            <div style={{ fontSize: 5, color: '#64748b' }}>★★★★★ 4,9 · RGE · Assuré</div>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 8, fontWeight: 900, color: '#ea580c' }}>06 12 34 56 78</div>
          <div style={{ fontSize: 5, color: '#64748b' }}>24/7</div>
        </div>
      </div>

      {/* Hero photo full + overlay CTA */}
      <div style={{ position: 'relative' }}>
        <Pic id="1581094794329-c8112a89af12" w={400} h={120} alt="Intervention" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(15,23,42,0.15),rgba(15,23,42,0.88))' }} />
        <div style={{ position: 'absolute', left: 10, right: 10, bottom: 10, color: '#fff' }}>
          <p style={{ fontSize: 5.5, fontWeight: 800, color: '#fb923c', letterSpacing: 1.2, margin: '0 0 3px' }}>URGENCE FUITE · CHAUDIÈRE · DÉBOUCHAGE</p>
          <h2 style={{ fontSize: 14, fontWeight: 900, margin: '0 0 6px', lineHeight: 1.1, fontFamily: ui.display }}>Intervention<br />sous 45 minutes</h2>
          <div style={{ display: 'flex', gap: 4 }}>
            <button type="button" style={{ flex: 1, background: '#ea580c', color: '#fff', border: 'none', padding: '7px', borderRadius: 6, fontSize: 7, fontWeight: 800, cursor: 'pointer' }}>Obtenir un devis</button>
            <button type="button" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.35)', padding: '7px 10px', borderRadius: 6, fontSize: 7, fontWeight: 700, cursor: 'pointer' }}>Appeler</button>
          </div>
        </div>
      </div>

      {/* Tech live cards */}
      <div style={{ padding: '9px', marginTop: -6, position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: 6.5, fontWeight: 800, margin: '0 0 5px', fontFamily: ui.display }}>Techniciens près de vous</p>
        <div style={{ display: 'flex', gap: 5, overflow: 'hidden' }}>
          {[
            [IMG('1560250097-0b93528c311a', 48, 48), 'Marc D.', '12 min', 'Libre'],
            [IMG('1472099645785-5658abf4ff4e', 48, 48), 'Yanis B.', '18 min', 'Libre'],
            [IMG('1507003211169-0a1dd7228f2d', 48, 48), 'Karim T.', '25 min', 'Bientôt'],
          ].map(([src, name, eta, st]) => (
            <div key={name} style={{ flex: '1 0 30%', background: '#fff', borderRadius: 8, padding: '6px', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(15,23,42,0.04)' }}>
              <div style={{ display: 'flex', gap: 5, alignItems: 'center', marginBottom: 4 }}>
                <img loading="lazy" src={src} alt={name} style={{ width: 22, height: 22, borderRadius: '50%', objectFit: 'cover' }} onError={e => { e.target.style.opacity = '0.3' }} />
                <div>
                  <div style={{ fontSize: 6.5, fontWeight: 800 }}>{name}</div>
                  <div style={{ fontSize: 5, color: st === 'Libre' ? '#16a34a' : '#ca8a04', fontWeight: 700 }}>{st}</div>
                </div>
              </div>
              <div style={{ fontSize: 5.5, color: '#64748b' }}>ETA · <strong style={{ color: '#0f172a' }}>{eta}</strong></div>
            </div>
          ))}
        </div>
      </div>

      {/* Services en tuiles photo */}
      <div style={{ padding: '0 9px 9px' }}>
        <p style={{ fontSize: 6.5, fontWeight: 800, margin: '0 0 5px', fontFamily: ui.display }}>Nos interventions</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 }}>
          {[
            ['1584622650111-993a426fbf0a', 'Fuite & débouchage', 'dès 89 €'],
            ['1558618666-fcd25c85f82e', 'Chauffe-eau', 'dès 149 €'],
            ['1552321554-5fefe8c9ef14', 'Salle de bain', 'sur devis'],
            ['1504328348525-8c7912c777bb', 'Entretien annuel', '99 €/an'],
          ].map(([id, t, p]) => (
            <div key={t} style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', height: 64 }}>
              <Pic id={id} w={180} h={64} alt={t} style={{ height: 64 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 30%,rgba(15,23,42,0.9))' }} />
              <div style={{ position: 'absolute', left: 6, right: 6, bottom: 5, color: '#fff' }}>
                <div style={{ fontSize: 7, fontWeight: 800 }}>{t}</div>
                <div style={{ fontSize: 6, color: '#fb923c', fontWeight: 700 }}>{p}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Devis express + garantie */}
      <div style={{ margin: '0 9px 9px', display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: 5 }}>
        <div style={{ background: '#fff', borderRadius: 8, border: '1px solid #e2e8f0', padding: '8px' }}>
          <p style={{ fontSize: 6.5, fontWeight: 800, margin: '0 0 5px' }}>Devis express</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, marginBottom: 5 }}>
            {['Fuite', 'Paris 11'].map(v => (
              <div key={v} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 5, padding: '5px 6px', fontSize: 6, color: '#64748b' }}>{v} ▾</div>
            ))}
          </div>
          <button type="button" style={{ width: '100%', background: '#0f172a', color: '#fff', border: 'none', padding: '6px', borderRadius: 5, fontSize: 6.5, fontWeight: 800, cursor: 'pointer' }}>Estimer en 30 sec →</button>
        </div>
        <div style={{ background: 'linear-gradient(160deg,#fff7ed,#ffedd5)', borderRadius: 8, border: '1px solid #fed7aa', padding: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontSize: 16, fontWeight: 900, color: '#ea580c', fontFamily: ui.display, lineHeight: 1 }}>2h</div>
          <div style={{ fontSize: 5.5, fontWeight: 700, color: '#9a3412', marginTop: 2 }}>devis max</div>
          <div style={{ fontSize: 5, color: '#c2410c', marginTop: 4 }}>ou c&apos;est gratuit*</div>
        </div>
      </div>

      {/* Avant/après + avis carousel feel */}
      <div style={{ padding: '0 9px 9px' }}>
        <p style={{ fontSize: 6.5, fontWeight: 800, margin: '0 0 5px', fontFamily: ui.display }}>Avant / après</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, marginBottom: 6, position: 'relative' }}>
          <div style={{ position: 'relative' }}>
            <Pic id="1584622650111-993a426fbf0a" w={180} h={58} alt="Avant" style={{ borderRadius: 6, height: 58 }} />
            <span style={{ position: 'absolute', top: 4, left: 4, background: '#0f172a', color: '#fff', fontSize: 5, fontWeight: 800, padding: '2px 4px', borderRadius: 3 }}>AVANT</span>
          </div>
          <div style={{ position: 'relative' }}>
            <Pic id="1552321554-5fefe8c9ef14" w={180} h={58} alt="Après" style={{ borderRadius: 6, height: 58 }} />
            <span style={{ position: 'absolute', top: 4, left: 4, background: '#ea580c', color: '#fff', fontSize: 5, fontWeight: 800, padding: '2px 4px', borderRadius: 3 }}>APRÈS</span>
          </div>
        </div>
        <div style={{ background: '#fff', borderRadius: 8, padding: '8px', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
            <span style={{ fontSize: 5.5, color: '#ea580c', fontWeight: 800 }}>★★★★★</span>
            <span style={{ fontSize: 5, color: '#94a3b8' }}>il y a 2h</span>
          </div>
          <p style={{ fontSize: 6.5, margin: '0 0 3px', lineHeight: 1.35, color: '#334155' }}>&ldquo;Fuite cuisine un dimanche — arrivés en 28 min. Propres, efficaces.&rdquo;</p>
          <p style={{ fontSize: 5.5, fontWeight: 700, margin: 0 }}>Sophie L. · Paris 15</p>
        </div>
      </div>

      {/* FAQ mini */}
      <div style={{ margin: '0 9px 9px', background: '#0f172a', borderRadius: 8, padding: '8px', color: '#fff' }}>
        <p style={{ fontSize: 6.5, fontWeight: 800, margin: '0 0 5px', fontFamily: ui.display }}>Questions fréquentes</p>
        {[
          ['Déplacement facturé ?', 'Inclus en zone Paris'],
          ['Paiement CB sur place ?', 'Oui · facture email'],
          ['Garantie travaux ?', '12 mois pièces & main'],
        ].map(([q, a], i) => (
          <div key={q} style={{ display: 'flex', justifyContent: 'space-between', gap: 6, padding: '5px 0', borderTop: i ? '1px solid rgba(255,255,255,0.08)' : 'none', fontSize: 6 }}>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>{q}</span>
            <span style={{ fontWeight: 700, color: '#fb923c', whiteSpace: 'nowrap' }}>{a}</span>
          </div>
        ))}
      </div>

      <div style={{ margin: '0 9px 10px', padding: '9px', background: 'linear-gradient(90deg,#ea580c,#c2410c)', borderRadius: 8, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 5, opacity: 0.85 }}>Technicien libre · maintenant</div>
          <div style={{ fontSize: 9, fontWeight: 900, fontFamily: ui.display }}>Réserver · 45 min</div>
        </div>
        <button type="button" style={{ background: '#fff', color: '#c2410c', border: 'none', padding: '7px 12px', borderRadius: 6, fontSize: 7, fontWeight: 900, cursor: 'pointer' }}>GO</button>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// 6. BLOG — éditorial moderne (feature overlay + grille + ticker)
// ═══════════════════════════════════════════════════════════
function MiniBlog() {
  return (
    <div style={{ fontFamily: ui.sans, background: '#f7f5f0', color: '#111', width: '100%' }}>
      {/* Top ticker */}
      <div style={{ background: '#111', color: '#f7f5f0', padding: '4px 9px', display: 'flex', gap: 8, alignItems: 'center', fontSize: 5, overflow: 'hidden' }}>
        <span style={{ background: '#e11d48', padding: '2px 5px', fontWeight: 900, letterSpacing: 0.5, flexShrink: 0 }}>LIVE</span>
        <span style={{ opacity: 0.75, whiteSpace: 'nowrap' }}>IA & freelances · Étude exclusive 2026 · 40 interviews · </span>
        <span style={{ color: '#e11d48', fontWeight: 700, flexShrink: 0 }}>Lire →</span>
      </div>

      {/* Masthead modern */}
      <div style={{ padding: '10px 10px 8px', background: '#f7f5f0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 6 }}>
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 900, margin: 0, fontFamily: ui.display, letterSpacing: '-0.04em', lineHeight: 0.9 }}>PULSE</h1>
            <p style={{ fontSize: 5, letterSpacing: 2, color: '#888', margin: '3px 0 0' }}>TECH CULTURE DIGEST</p>
          </div>
          <div style={{ textAlign: 'right', fontSize: 5, color: '#888', lineHeight: 1.4 }}>
            <div>31.07.2026</div>
            <div style={{ fontWeight: 700, color: '#111' }}>Vol. 12</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
          {['Tout', 'Tech', 'Design', 'Business', 'Outils'].map((r, i) => (
            <span key={r} style={{ fontSize: 5.5, fontWeight: 700, padding: '3px 7px', borderRadius: 20, background: i === 0 ? '#111' : '#fff', color: i === 0 ? '#fff' : '#555', border: '1px solid #e5e0d6' }}>{r}</span>
          ))}
        </div>
      </div>

      {/* Featured full-bleed with text ON image */}
      <div style={{ position: 'relative', margin: '0 0 8px' }}>
        <Pic id="1486312338219-ce68d2c6f44d" w={400} h={140} alt="Featured" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 25%,rgba(0,0,0,0.92))' }} />
        <div style={{ position: 'absolute', left: 10, right: 10, bottom: 10, color: '#fff' }}>
          <span style={{ fontSize: 5, background: '#e11d48', padding: '2px 5px', fontWeight: 800, letterSpacing: 1 }}>ENQUÊTE</span>
          <h2 style={{ fontSize: 14, fontWeight: 900, margin: '5px 0 4px', lineHeight: 1.15, fontFamily: ui.display }}>Comment l&apos;IA accélère (vraiment) les freelances</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 5.5, opacity: 0.7 }}>Alex Moreau · 8 min</span>
            <span style={{ fontSize: 5.5, color: '#e11d48', fontWeight: 800 }}>2,4k lectures</span>
          </div>
        </div>
      </div>

      {/* Body snippet with drop cap */}
      <div style={{ padding: '0 10px 8px', display: 'grid', gridTemplateColumns: '1fr 72px', gap: 8 }}>
        <div>
          <p style={{ fontSize: 7, lineHeight: 1.45, margin: 0, color: '#333' }}>
            <span style={{ float: 'left', fontSize: 26, fontWeight: 900, fontFamily: ui.display, lineHeight: 0.8, color: '#e11d48', marginRight: 4, marginTop: 2 }}>E</span>
            n 2026, livrer deux fois plus vite n&apos;est plus un mythe. On a suivi 40 indépendants pendant 3 mois…
          </p>
        </div>
        <div style={{ background: '#111', color: '#f7f5f0', padding: '7px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontSize: 5, color: '#e11d48', fontWeight: 800, marginBottom: 3 }}>TRENDING</div>
          <div style={{ fontSize: 6, fontWeight: 700, lineHeight: 1.25 }}>Stack 2026 des tops freelances</div>
        </div>
      </div>

      {/* Pull quote cinematic */}
      <div style={{ margin: '0 10px 8px', padding: '12px 10px', background: '#111', color: '#f7f5f0', position: 'relative' }}>
        <span style={{ position: 'absolute', top: 4, left: 8, fontSize: 28, fontFamily: ui.display, color: '#e11d48', opacity: 0.5, lineHeight: 1 }}>&ldquo;</span>
        <p style={{ fontSize: 9, fontStyle: 'italic', margin: '8px 0 4px', lineHeight: 1.3, fontFamily: ui.display, paddingLeft: 4 }}>Je livre 2× plus vite sans baisser la qualité.</p>
        <p style={{ fontSize: 5.5, color: '#e11d48', fontWeight: 700, margin: 0 }}>— Extrait de l&apos;enquête</p>
      </div>

      {/* Magazine grid 2+1 */}
      <div style={{ padding: '0 10px 8px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 6 }}>
        <div>
          <div style={{ position: 'relative', marginBottom: 5 }}>
            <Pic id="1558655146-d6682f6d3868" w={200} h={78} alt="Design" style={{ borderRadius: 2 }} />
            <span style={{ position: 'absolute', bottom: 5, left: 5, background: '#fff', fontSize: 5, fontWeight: 800, padding: '2px 4px', color: '#e11d48' }}>DESIGN</span>
          </div>
          <p style={{ fontSize: 8, fontWeight: 800, margin: '0 0 2px', lineHeight: 1.2, fontFamily: ui.display }}>5 erreurs typo qui tuent un site</p>
          <p style={{ fontSize: 5.5, color: '#888', margin: 0 }}>5 min · Camille R.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          {[
            ['0d9488', 'BUSINESS', 'Combien facturer une vitrine ?', '6 min'],
            ['e11d48', 'TECH', 'Supabase vs Firebase', '10 min'],
          ].map(([c, cat, title, time]) => (
            <div key={title} style={{ background: '#fff', border: '1px solid #e8e4de', padding: '6px 7px', flex: 1 }}>
              <p style={{ fontSize: 5, color: `#${c}`, fontWeight: 800, letterSpacing: 0.8, margin: '0 0 2px' }}>{cat}</p>
              <p style={{ fontSize: 7, fontWeight: 800, margin: '0 0 2px', lineHeight: 1.2, fontFamily: ui.display }}>{title}</p>
              <p style={{ fontSize: 5, color: '#888', margin: 0 }}>{time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Ranked list with bars */}
      <div style={{ margin: '0 10px 8px', background: '#fff', border: '1px solid #e8e4de', padding: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <p style={{ fontSize: 6.5, fontWeight: 800, margin: 0, fontFamily: ui.display }}>Most read</p>
          <span style={{ fontSize: 5, color: '#e11d48', fontWeight: 700 }}>Cette semaine</span>
        </div>
        {[
          ['01', 'Les 7 outils qui changent le code', 92],
          ['02', 'Pricing psychologique', 78],
          ['03', 'Dark mode : quand le faire', 61],
          ['04', 'Landing vs vitrine', 54],
        ].map(([n, t, pct]) => (
          <div key={n} style={{ marginBottom: 5 }}>
            <div style={{ display: 'flex', gap: 6, alignItems: 'baseline', marginBottom: 2 }}>
              <span style={{ fontSize: 8, fontWeight: 900, color: '#e11d48', fontFamily: ui.display }}>{n}</span>
              <span style={{ fontSize: 6.5, fontWeight: 700, flex: 1 }}>{t}</span>
            </div>
            <div style={{ height: 2, background: '#f0ebe3', borderRadius: 2 }}>
              <div style={{ height: 2, width: `${pct}%`, background: '#e11d48', borderRadius: 2 }} />
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter cinematic */}
      <div style={{ margin: '0 10px 10px', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 0, overflow: 'hidden', borderRadius: 2 }}>
        <div style={{ position: 'relative', minHeight: 70 }}>
          <Pic id="1432888497340-2d2e8f57e2e3" w={160} h={70} alt="NL" style={{ height: '100%', minHeight: 70 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)' }} />
        </div>
        <div style={{ background: '#e11d48', color: '#fff', padding: '8px 9px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: 8, fontWeight: 900, margin: '0 0 2px', fontFamily: ui.display }}>Weekly Pulse</p>
          <p style={{ fontSize: 5.5, opacity: 0.85, margin: '0 0 5px' }}>1 mail · lundi 8h · 0 spam</p>
          <div style={{ display: 'flex', gap: 3 }}>
            <div style={{ flex: 1, background: 'rgba(255,255,255,0.2)', padding: '5px', fontSize: 5.5 }}>vous@</div>
            <button type="button" style={{ background: '#111', color: '#fff', border: 'none', padding: '5px 8px', fontSize: 6, fontWeight: 800, cursor: 'pointer' }}>OK</button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// 7. CABINET — luxe paper / or / RDV widget
// ═══════════════════════════════════════════════════════════
function MiniCabinet() {
  return (
    <div style={{ fontFamily: ui.sans, background: '#efe9dc', color: '#0c1a2e', width: '100%' }}>
      <div style={{ height: 3, background: 'linear-gradient(90deg,#c9a84c,#e8d5a3,#c9a84c)' }} />

      <div style={{ padding: '8px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0c1a2e', color: 'rgba(239,233,220,0.7)', fontSize: 5, letterSpacing: 1 }}>
        <span>PARIS · LYON · GENÈVE</span>
        <span style={{ color: '#c9a84c', fontWeight: 700 }}>RDV SOUS 48H</span>
      </div>

      {/* Brand block with seal */}
      <div style={{ padding: '14px 10px 12px', textAlign: 'center', background: 'linear-gradient(180deg,#f7f2e7,#efe9dc)', position: 'relative' }}>
        <div style={{ width: 36, height: 36, margin: '0 auto 7px', border: '1.5px solid #c9a84c', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 0 4px rgba(201,168,76,0.12)' }}>
          <span style={{ fontSize: 10, fontWeight: 800, color: '#c9a84c', fontFamily: ui.display }}>D&amp;A</span>
        </div>
        <p style={{ fontSize: 5, letterSpacing: 3.5, color: '#c9a84c', margin: '0 0 4px', fontWeight: 700 }}>CABINET D&apos;AVOCATS</p>
        <h1 style={{ fontSize: 16, fontWeight: 700, margin: 0, fontFamily: ui.display, letterSpacing: 0.8 }}>Dupont &amp; Associés</h1>
        <div style={{ width: 40, height: 1, background: '#c9a84c', margin: '8px auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 0, fontSize: 5.5, fontWeight: 600, color: '#5a6478' }}>
          {['Cabinet', 'Expertises', 'Équipe', 'Honoraires', 'Contact'].map((l, i) => (
            <span key={l} style={{ padding: '0 5px', borderRight: i < 4 ? '1px solid rgba(201,168,76,0.4)' : 'none' }}>{l}</span>
          ))}
        </div>
      </div>

      {/* Split hero: image + manifesto */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr' }}>
        <div style={{ position: 'relative', minHeight: 110 }}>
          <Pic id="1497366216548-37526070297c" w={220} h={110} alt="Bureau" style={{ height: '100%', minHeight: 110 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent, rgba(12,26,46,0.4))' }} />
        </div>
        <div style={{ background: '#0c1a2e', color: '#efe9dc', padding: '10px 9px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: 5, letterSpacing: 2, color: '#c9a84c', margin: '0 0 5px', fontWeight: 700 }}>DEPUIS 1994</p>
          <h2 style={{ fontSize: 11, fontWeight: 700, margin: '0 0 5px', lineHeight: 1.2, fontFamily: ui.display }}>Le droit,<br />avec exigence.</h2>
          <p style={{ fontSize: 6, opacity: 0.65, margin: '0 0 7px', lineHeight: 1.35 }}>Entreprises &amp; particuliers. Consultation confidentielle.</p>
          <button type="button" style={{ alignSelf: 'flex-start', background: '#c9a84c', color: '#0c1a2e', border: 'none', padding: '5px 9px', fontSize: 6, fontWeight: 800, cursor: 'pointer' }}>Prendre RDV</button>
        </div>
      </div>

      {/* Metrics ribbon */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', background: '#c9a84c' }}>
        {[['30+', 'ans'], ['12', 'avocats'], ['2k+', 'dossiers'], ['4.8', '★']].map(([v, l]) => (
          <div key={l} style={{ padding: '8px 4px', textAlign: 'center', borderRight: '1px solid rgba(12,26,46,0.12)' }}>
            <div style={{ fontSize: 12, fontWeight: 900, fontFamily: ui.display, color: '#0c1a2e', lineHeight: 1 }}>{v}</div>
            <div style={{ fontSize: 5, fontWeight: 700, color: 'rgba(12,26,46,0.65)', marginTop: 2, textTransform: 'uppercase', letterSpacing: 0.5 }}>{l}</div>
          </div>
        ))}
      </div>

      {/* Expertises as elegant chips + detail */}
      <div style={{ padding: '10px' }}>
        <p style={{ fontSize: 5.5, letterSpacing: 2, color: '#c9a84c', margin: '0 0 6px', fontWeight: 800 }}>EXPERTISES</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, marginBottom: 8 }}>
          {[
            ['Affaires', 'M&A · Contrats'],
            ['Immobilier', 'Transactions'],
            ['Travail', 'Contentieux'],
            ['Fiscal', 'Optimisation'],
            ['Famille', 'Patrimoine'],
            ['Pénal', 'Compliance'],
          ].map(([t, d], i) => (
            <div key={t} style={{ background: i === 0 ? '#0c1a2e' : '#f7f2e7', color: i === 0 ? '#efe9dc' : '#0c1a2e', padding: '7px 8px', border: i === 0 ? 'none' : '1px solid #e0d8c8' }}>
              <div style={{ fontSize: 7, fontWeight: 800 }}>{t}</div>
              <div style={{ fontSize: 5, opacity: 0.6, marginTop: 1 }}>{d}</div>
            </div>
          ))}
        </div>

        {/* RDV calendar widget */}
        <div style={{ background: '#fff', border: '1px solid #c9a84c', padding: '8px', marginBottom: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
            <p style={{ fontSize: 7, fontWeight: 800, margin: 0, fontFamily: ui.display }}>Consultation</p>
            <span style={{ fontSize: 5, color: '#c9a84c', fontWeight: 700 }}>Août 2026</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 2, marginBottom: 6, textAlign: 'center' }}>
            {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, i) => (
              <span key={`${d}${i}`} style={{ fontSize: 5, color: '#8a8494', fontWeight: 700 }}>{d}</span>
            ))}
            {['', '', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'].map((d, i) => (
              <span key={i} style={{
                fontSize: 6, fontWeight: d === '7' || d === '8' ? 800 : 500, padding: '3px 0',
                background: d === '7' ? '#c9a84c' : d === '8' ? 'rgba(201,168,76,0.2)' : 'transparent',
                color: d === '7' ? '#0c1a2e' : '#0c1a2e',
                borderRadius: 2,
              }}>{d}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 3 }}>
            {['09:30', '11:00', '14:30'].map((h, i) => (
              <span key={h} style={{ flex: 1, textAlign: 'center', fontSize: 6, fontWeight: 700, padding: '4px', border: '1px solid', borderColor: i === 1 ? '#c9a84c' : '#e0d8c8', background: i === 1 ? '#c9a84c' : '#fff', color: '#0c1a2e' }}>{h}</span>
            ))}
          </div>
        </div>

        {/* Quote + seals */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 5, marginBottom: 8 }}>
          <div style={{ background: '#0c1a2e', color: '#efe9dc', padding: '9px' }}>
            <p style={{ fontSize: 7.5, fontStyle: 'italic', margin: '0 0 5px', lineHeight: 1.35, fontFamily: ui.display }}>&ldquo;Chaque dossier mérite une stratégie unique.&rdquo;</p>
            <p style={{ fontSize: 5.5, color: '#c9a84c', fontWeight: 700, margin: 0 }}>— Me Dupont</p>
          </div>
          <div style={{ background: '#f7f2e7', border: '1px solid #e0d8c8', padding: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4 }}>
            {['Barreau de Paris', 'ISO Confidentiel', 'Médiation'].map(s => (
              <div key={s} style={{ fontSize: 5.5, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', border: '1px solid #c9a84c', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#c9a84c', fontSize: 6 }}>✓</span>
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Team row refined */}
        <p style={{ fontSize: 5.5, letterSpacing: 2, color: '#c9a84c', margin: '0 0 6px', fontWeight: 800 }}>ASSOCIÉS</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 5 }}>
          {[
            [IMG('1560250097-0b93528c311a', 80, 100), 'Me Dupont', 'Associé'],
            [IMG('1573496359142-b8d87734a5a2', 80, 100), 'Me Martin', 'Associée'],
            [IMG('1472099645785-5658abf4ff4e', 80, 100), 'Me Leroy', 'Counsel'],
          ].map(([src, name, role]) => (
            <div key={name}>
              <div style={{ position: 'relative', marginBottom: 4, outline: '1px solid #c9a84c', outlineOffset: 2 }}>
                <img loading="lazy" src={src} alt={name} style={{ width: '100%', height: 68, objectFit: 'cover', display: 'block', filter: 'grayscale(0.4)' }} onError={e => { e.target.style.opacity = '0.3' }} />
              </div>
              <div style={{ fontSize: 6, fontWeight: 800 }}>{name}</div>
              <div style={{ fontSize: 5, color: '#8a8494' }}>{role}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Honoraires strip */}
      <div style={{ margin: '0 10px 10px', background: '#fff', border: '1px solid #e0d8c8', padding: '8px' }}>
        <p style={{ fontSize: 5.5, letterSpacing: 1.5, color: '#c9a84c', margin: '0 0 5px', fontWeight: 800 }}>HONORAIRES</p>
        {[
          ['Consultation 45 min', '180 €'],
          ['Forfait contentieux', 'sur devis'],
        ].map(([l, p]) => (
          <div key={l} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 6.5, padding: '4px 0', borderBottom: '1px dotted #e0d8c8' }}>
            <span>{l}</span>
            <span style={{ fontWeight: 800 }}>{p}</span>
          </div>
        ))}
      </div>

      <div style={{ background: '#0c1a2e', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 5, color: '#c9a84c', letterSpacing: 1, marginBottom: 2 }}>16 RUE DE LA PAIX · 75002</div>
          <div style={{ fontSize: 9, fontWeight: 800, color: '#efe9dc' }}>01 40 00 00 00</div>
        </div>
        <button type="button" style={{ background: '#c9a84c', color: '#0c1a2e', border: 'none', padding: '8px 12px', fontSize: 7, fontWeight: 900, cursor: 'pointer' }}>Consultation →</button>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// 8. PORTFOLIO — expérimental (typo overlap + filmstrip + meta)
// ═══════════════════════════════════════════════════════════
function MiniPortfolio() {
  return (
    <div style={{ fontFamily: ui.sans, background: '#050505', color: '#fff', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 10px' }}>
        <span style={{ fontSize: 11, fontWeight: 900, letterSpacing: 4, fontFamily: ui.display }}>LÉNA</span>
        <div style={{ display: 'flex', gap: 2 }}>
          {['Work', 'About', 'Book'].map((l, i) => (
            <span key={l} style={{ fontSize: 5.5, fontWeight: 700, padding: '3px 7px', borderRadius: 2, background: i === 2 ? '#c8f542' : 'transparent', color: i === 2 ? '#050505' : 'rgba(255,255,255,0.45)' }}>{l}</span>
          ))}
        </div>
      </div>

      {/* Hero: image with massive overlapping type */}
      <div style={{ position: 'relative', height: 150, overflow: 'hidden' }}>
        <Pic id="1469334031218-e382a71b716b" w={400} h={150} alt="Hero" style={{ height: 150 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(5,5,5,0.2),rgba(5,5,5,0.75))' }} />
        <div style={{ position: 'absolute', left: 10, right: 10, top: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <p style={{ fontSize: 5, color: '#c8f542', letterSpacing: 2, fontWeight: 800, margin: 0 }}>PARIS / MILAN · 2026</p>
          <span style={{ fontSize: 5, background: '#c8f542', color: '#050505', fontWeight: 900, padding: '2px 5px' }}>OPEN</span>
        </div>
        <h2 style={{ position: 'absolute', left: 8, bottom: 8, right: 8, fontSize: 28, fontWeight: 900, margin: 0, lineHeight: 0.85, fontFamily: ui.display, letterSpacing: '-0.04em', textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
          IMAGES<br />
          <span style={{ color: '#c8f542' }}>QUI</span><br />
          RACONTENT
        </h2>
      </div>

      {/* Meta bar */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        {[['480+', 'SHOOTS'], ['12', 'AWARDS'], ['8', 'YEARS'], ['EU', 'BASED']].map(([v, l]) => (
          <div key={l} style={{ padding: '8px 4px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: 11, fontWeight: 900, color: '#c8f542', fontFamily: ui.display }}>{v}</div>
            <div style={{ fontSize: 4.5, letterSpacing: 1, color: 'rgba(255,255,255,0.35)', marginTop: 1 }}>{l}</div>
          </div>
        ))}
      </div>

      {/* Filmstrip horizontal */}
      <div style={{ padding: '8px 0 8px 10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: 10, marginBottom: 5 }}>
          <p style={{ fontSize: 6, fontWeight: 800, margin: 0, letterSpacing: 1.5, fontFamily: ui.display }}>FILMSTRIP</p>
          <span style={{ fontSize: 5, color: '#c8f542' }}>scroll →</span>
        </div>
        <div style={{ display: 'flex', gap: 4, overflow: 'hidden' }}>
          {[
            ['1501854140801-50d01698950b', '01'],
            ['1518173946687-a4c8892bbd9f', '02'],
            ['1492693428060-cfa7817adba9', '03'],
            ['1441986300917-64674bd600d8', '04'],
            ['1529626455594-4fe221cba588', '05'],
          ].map(([id, n]) => (
            <div key={n} style={{ position: 'relative', flex: '0 0 72px' }}>
              <Pic id={id} w={72} h={88} alt={n} style={{ borderRadius: 1, height: 88 }} />
              <span style={{ position: 'absolute', top: 3, left: 3, fontSize: 5, fontWeight: 900, background: 'rgba(0,0,0,0.7)', padding: '1px 3px', color: '#c8f542' }}>{n}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured project detail card */}
      <div style={{ margin: '0 10px 8px', border: '1px solid rgba(200,245,66,0.25)', background: '#0c0c0c' }}>
        <div style={{ position: 'relative' }}>
          <Pic id="1496743417675-0a8e80c6f0b4" w={400} h={90} alt="Case" />
          <span style={{ position: 'absolute', top: 6, right: 6, fontSize: 22, fontWeight: 900, fontFamily: ui.display, color: 'rgba(200,245,66,0.4)', lineHeight: 1 }}>01</span>
        </div>
        <div style={{ padding: '8px 9px', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 8 }}>
          <div>
            <p style={{ fontSize: 5, color: '#c8f542', letterSpacing: 1.5, margin: '0 0 3px', fontWeight: 800 }}>FEATURED · SS26</p>
            <p style={{ fontSize: 11, fontWeight: 900, margin: '0 0 3px', fontFamily: ui.display, lineHeight: 1.1 }}>Vogue Italia<br />Editorial</p>
            <p style={{ fontSize: 5.5, color: 'rgba(255,255,255,0.4)', margin: 0 }}>Milan · 120 frames · Print</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3, justifyContent: 'center' }}>
            {[['Role', 'Lead photo'], ['Client', 'Vogue'], ['Year', '2026']].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 5.5, borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 2 }}>
                <span style={{ color: 'rgba(255,255,255,0.35)' }}>{k}</span>
                <span style={{ fontWeight: 700 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Work index */}
      <div style={{ padding: '0 10px 8px' }}>
        <p style={{ fontSize: 5.5, color: '#c8f542', letterSpacing: 2, margin: '0 0 4px', fontWeight: 800 }}>INDEX</p>
        {[
          ['02', 'NATURE QUIET', '84', 'Print'],
          ['03', 'URBAN NIGHT', '240', 'Award'],
          ['04', 'FACES', '56', 'Book'],
          ['05', 'STILL LIFE', '32', 'Studio'],
        ].map(([n, t, c, tag]) => (
          <div key={n} style={{ display: 'grid', gridTemplateColumns: '20px 1fr auto auto', gap: 6, alignItems: 'center', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <span style={{ fontSize: 7, fontWeight: 900, color: 'rgba(200,245,66,0.45)', fontFamily: ui.display }}>{n}</span>
            <span style={{ fontSize: 7.5, fontWeight: 700 }}>{t}</span>
            <span style={{ fontSize: 5, color: 'rgba(255,255,255,0.3)' }}>{c}</span>
            <span style={{ fontSize: 5, fontWeight: 800, color: '#c8f542', border: '1px solid rgba(200,245,66,0.4)', padding: '1px 4px' }}>{tag}</span>
          </div>
        ))}
      </div>

      {/* Clients marquee feel */}
      <div style={{ padding: '6px 10px', background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 6, fontWeight: 800, letterSpacing: 1.5, color: 'rgba(255,255,255,0.35)' }}>
          <span>VOGUE</span><span>NIKE</span><span>HERMÈS</span><span>LE MONDE</span>
        </div>
      </div>

      {/* Booking CTA */}
      <div style={{ padding: '10px' }}>
        <div style={{ background: '#c8f542', padding: '10px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 8, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 5.5, fontWeight: 800, color: '#050505', opacity: 0.6, letterSpacing: 1 }}>NEXT AVAILABILITY</div>
            <div style={{ fontSize: 12, fontWeight: 900, color: '#050505', fontFamily: ui.display }}>Août · Paris</div>
          </div>
          <button type="button" style={{ background: '#050505', color: '#c8f542', border: 'none', padding: '8px 12px', fontSize: 7, fontWeight: 900, cursor: 'pointer' }}>Book →</button>
        </div>
        <p style={{ fontSize: 6, color: 'rgba(255,255,255,0.35)', margin: '8px 0 0', lineHeight: 1.4, textAlign: 'center' }}>
          Direction artistique · Europe &amp; remote
        </p>
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
        style={{ height: 380, overflowY: 'auto', overflowX: 'hidden', WebkitOverflowScrolling: 'touch' }}
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
  { url: 'proplomberie-paris.fr', label: 'Artisan / vitrine locale', tags: ['Urgence', 'Process', 'Zones', 'Avis'], component: <MiniArtisan /> },
  { url: 'thepulse.fr', label: 'Blog / magazine', tags: ['Masthead', 'Drop cap', 'Colonnes'], component: <MiniBlog /> },
  { url: 'dupont-avocats.fr', label: 'Cabinet professionnel', tags: ['Letterhead', 'Expertises', 'Équipe'], component: <MiniCabinet /> },
  { url: 'lena-photo.fr', label: 'Portfolio créatif', tags: ['Case study', 'Masonry', 'Booking'], component: <MiniPortfolio /> },
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
