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
// 5. ARTISAN — urgence locale, process, avis, carte zones
// ═══════════════════════════════════════════════════════════
function MiniArtisan() {
  return (
    <div style={{ fontFamily: ui.sans, background: '#f8fafc', color: '#0f172a', width: '100%' }}>
      {/* Bandeau urgence */}
      <div style={{ background: 'linear-gradient(90deg,#c2410c,#ea580c)', color: '#fff', padding: '5px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#86efac', boxShadow: '0 0 0 3px rgba(134,239,172,0.35)', display: 'inline-block' }} />
          <span style={{ fontSize: 6.5, fontWeight: 800 }}>Urgence 24/7 — dispo maintenant</span>
        </div>
        <span style={{ fontSize: 7, fontWeight: 900, letterSpacing: 0.3 }}>06 12 34 56 78</span>
      </div>

      {/* Nav */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 10px', background: '#0f172a', color: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 22, height: 22, borderRadius: 5, background: '#ea580c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 900 }}>PP</div>
          <div>
            <div style={{ fontSize: 9, fontWeight: 800, fontFamily: ui.display }}>Pro Plomberie</div>
            <div style={{ fontSize: 5, opacity: 0.5 }}>Artisan RGE · Paris</div>
          </div>
        </div>
        <button type="button" style={{ background: '#ea580c', color: '#fff', border: 'none', padding: '5px 9px', borderRadius: 5, fontSize: 6.5, fontWeight: 800, cursor: 'pointer' }}>Devis 2h</button>
      </div>

      {/* Hero split */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr' }}>
        <div style={{ padding: '10px', background: '#fff' }}>
          <p style={{ fontSize: 5.5, fontWeight: 800, color: '#ea580c', letterSpacing: 1.2, margin: '0 0 4px' }}>PLOMBIER PARIS &amp; IDF</p>
          <h2 style={{ fontSize: 13, fontWeight: 800, margin: '0 0 4px', lineHeight: 1.15, fontFamily: ui.display }}>Fuite ? Chaudière ?<br />On intervient.</h2>
          <p style={{ fontSize: 6.5, color: '#64748b', margin: '0 0 7px', lineHeight: 1.35 }}>Devis sous 2h · Déplacement inclus en zone · Facture &amp; garantie.</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <button type="button" style={{ background: '#0f172a', color: '#fff', border: 'none', padding: '5px 9px', borderRadius: 4, fontSize: 6.5, fontWeight: 700, cursor: 'pointer' }}>Appeler</button>
            <button type="button" style={{ background: '#fff', color: '#0f172a', border: '1.5px solid #0f172a', padding: '5px 9px', borderRadius: 4, fontSize: 6.5, fontWeight: 700, cursor: 'pointer' }}>WhatsApp</button>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <Pic id="1581094794329-c8112a89af12" w={180} h={118} alt="Intervention" style={{ height: '100%', minHeight: 118 }} />
          <div style={{ position: 'absolute', bottom: 6, left: 6, right: 6, background: 'rgba(15,23,42,0.88)', color: '#fff', borderRadius: 4, padding: '4px 6px', fontSize: 5.5 }}>
            <span style={{ color: '#86efac', fontWeight: 800 }}>★ 4,9</span> · 312 avis Google
          </div>
        </div>
      </div>

      {/* Badges confiance */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: '#e2e8f0' }}>
        {[['✓', 'Assuré'], ['★', 'RGE'], ['€', 'Devis 0€'], ['⏱', '<45 min']].map(([i, l]) => (
          <div key={l} style={{ background: '#fff', padding: '7px 4px', textAlign: 'center' }}>
            <div style={{ fontSize: 9, marginBottom: 1 }}>{i}</div>
            <div style={{ fontSize: 5.5, fontWeight: 700, color: '#475569' }}>{l}</div>
          </div>
        ))}
      </div>

      {/* Services riches */}
      <div style={{ padding: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
          <p style={{ fontSize: 7.5, fontWeight: 800, margin: 0, fontFamily: ui.display }}>Services</p>
          <span style={{ fontSize: 5.5, color: '#ea580c', fontWeight: 700 }}>Tarifs transparents →</span>
        </div>
        {[
          ['01', 'Fuite & débouchage', 'Recherche + réparation', 'dès 89 €', '#fff7ed'],
          ['02', 'Chauffe-eau / chaudière', 'Dépannage & entretien', 'dès 149 €', '#eff6ff'],
          ['03', 'Salle de bain clé en main', 'Conception → pose', 'sur devis', '#f0fdf4'],
          ['04', 'Contrat entretien annuel', '2 visites / an incluses', '99 €/an', '#fef3c7'],
        ].map(([n, t, d, p, bg]) => (
          <div key={n} style={{ display: 'grid', gridTemplateColumns: '22px 1fr auto', gap: 7, alignItems: 'center', background: bg, borderRadius: 6, padding: '7px 8px', marginBottom: 4 }}>
            <span style={{ fontSize: 8, fontWeight: 900, color: '#ea580c', fontFamily: ui.display }}>{n}</span>
            <div>
              <div style={{ fontSize: 7.5, fontWeight: 800 }}>{t}</div>
              <div style={{ fontSize: 5.5, color: '#64748b' }}>{d}</div>
            </div>
            <span style={{ fontSize: 7, fontWeight: 800, color: '#c2410c', whiteSpace: 'nowrap' }}>{p}</span>
          </div>
        ))}
      </div>

      {/* Process timeline */}
      <div style={{ margin: '0 10px 10px', padding: '9px', background: '#0f172a', borderRadius: 8, color: '#fff' }}>
        <p style={{ fontSize: 7, fontWeight: 800, margin: '0 0 7px', fontFamily: ui.display }}>Comment ça marche</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
          {[
            ['1', 'Vous appelez', 'Diagnostic gratuit'],
            ['2', 'Devis 2h', 'Validé par SMS'],
            ['3', 'On intervient', 'Sous 45 min*'],
          ].map(([n, t, d]) => (
            <div key={n} style={{ textAlign: 'center' }}>
              <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#ea580c', margin: '0 auto 4px', fontSize: 8, fontWeight: 900, lineHeight: '18px' }}>{n}</div>
              <div style={{ fontSize: 6.5, fontWeight: 700 }}>{t}</div>
              <div style={{ fontSize: 5, color: '#94a3b8', marginTop: 1 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Zones + avis */}
      <div style={{ padding: '0 10px 10px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 7, padding: '8px', overflow: 'hidden' }}>
          <p style={{ fontSize: 6.5, fontWeight: 800, margin: '0 0 5px' }}>Zones d&apos;intervention</p>
          <div style={{ height: 52, borderRadius: 5, background: 'linear-gradient(135deg,#dbeafe,#e2e8f0)', position: 'relative', marginBottom: 5 }}>
            {[[18, 22], [48, 18], [32, 38], [62, 42], [78, 28]].map(([l, t], i) => (
              <span key={i} style={{ position: 'absolute', left: `${l}%`, top: `${t}%`, width: 7, height: 7, borderRadius: '50%', background: '#ea580c', border: '1.5px solid #fff', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
            ))}
          </div>
          <p style={{ fontSize: 5.5, color: '#64748b', margin: 0, lineHeight: 1.35 }}>Paris 1–20 · Vincennes · Boulogne · Neuilly · St-Denis</p>
        </div>
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 7, padding: '8px' }}>
          <p style={{ fontSize: 6.5, fontWeight: 800, margin: '0 0 5px' }}>Dernier avis</p>
          <p style={{ fontSize: 6.5, fontStyle: 'italic', color: '#334155', margin: '0 0 4px', lineHeight: 1.35 }}>&ldquo;Arrivés en 30 min, fuite réglée. Top.&rdquo;</p>
          <p style={{ fontSize: 5.5, color: '#ea580c', fontWeight: 700, margin: 0 }}>★★★★★ Karim · Paris 11</p>
          <div style={{ marginTop: 6, paddingTop: 5, borderTop: '1px solid #f1f5f9', fontSize: 5.5, color: '#64748b' }}>
            Avant / après salle de bain ↓
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3, marginTop: 4 }}>
            <Pic id="1584622650111-993a426fbf0a" w={80} h={36} alt="Avant" style={{ borderRadius: 3, height: 36 }} />
            <Pic id="1552321554-5fefe8c9ef14" w={80} h={36} alt="Après" style={{ borderRadius: 3, height: 36 }} />
          </div>
        </div>
      </div>

      {/* CTA sticky */}
      <div style={{ margin: '0 10px 10px', padding: '9px 10px', background: 'linear-gradient(135deg,#ea580c,#c2410c)', borderRadius: 8, color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 5.5, opacity: 0.85 }}>Technicien libre · 14h22</div>
          <div style={{ fontSize: 9, fontWeight: 900, fontFamily: ui.display }}>Intervention sous 45 min</div>
        </div>
        <button type="button" style={{ background: '#fff', color: '#c2410c', border: 'none', padding: '7px 11px', borderRadius: 5, fontSize: 7, fontWeight: 900, cursor: 'pointer' }}>Appeler</button>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// 6. BLOG — magazine éditorial dense (ink + coral)
// ═══════════════════════════════════════════════════════════
function MiniBlog() {
  return (
    <div style={{ fontFamily: ui.sans, background: '#faf8f5', color: '#111', width: '100%' }}>
      {/* Masthead */}
      <div style={{ padding: '9px 10px 0', borderBottom: '3px double #111' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 5, letterSpacing: 1.5, color: '#666', marginBottom: 3, textTransform: 'uppercase' }}>
          <span>Vol. 12 · N°48</span>
          <span>Vendredi 31 juil. 2026</span>
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 900, margin: 0, textAlign: 'center', fontFamily: ui.display, letterSpacing: '-0.03em', lineHeight: 1 }}>THE PULSE</h1>
        <p style={{ fontSize: 5.5, textAlign: 'center', color: '#888', margin: '2px 0 6px', letterSpacing: 2 }}>TECH · DESIGN · BUSINESS</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 0, borderTop: '1px solid #111', fontSize: 6, fontWeight: 700 }}>
          {['Tech', 'Design', 'Business', 'Culture', 'Outils'].map((r, i) => (
            <span key={r} style={{ padding: '5px 7px', borderRight: i < 4 ? '1px solid #ddd' : 'none', color: i === 0 ? '#e11d48' : '#333' }}>{r}</span>
          ))}
        </div>
      </div>

      {/* Featured story */}
      <div style={{ padding: '8px 10px' }}>
        <div style={{ position: 'relative', marginBottom: 7 }}>
          <Pic id="1486312338219-ce68d2c6f44d" w={400} h={100} alt="À la une" style={{ borderRadius: 0 }} />
          <span style={{ position: 'absolute', top: 6, left: 6, background: '#e11d48', color: '#fff', fontSize: 5, fontWeight: 800, padding: '2px 5px', letterSpacing: 1 }}>À LA UNE</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 6 }}>
          <div style={{ fontSize: 28, fontWeight: 900, fontFamily: ui.display, lineHeight: 0.85, color: '#e11d48' }}>C</div>
          <div>
            <h2 style={{ fontSize: 12, fontWeight: 800, margin: '0 0 3px', lineHeight: 1.2, fontFamily: ui.display }}>omment l&apos;IA accélère (vraiment) les freelances</h2>
            <p style={{ fontSize: 6.5, color: '#555', margin: '0 0 4px', lineHeight: 1.4 }}>Enquête auprès de 40 développeurs indépendants sur leur stack, leurs tarifs et ce qui a changé en 2026.</p>
            <p style={{ fontSize: 5.5, color: '#888', margin: 0 }}>Alex Moreau · 8 min · 2,4k lectures</p>
          </div>
        </div>
      </div>

      {/* Pull quote */}
      <div style={{ margin: '0 10px 8px', padding: '8px 10px', borderLeft: '3px solid #e11d48', background: '#fff' }}>
        <p style={{ fontSize: 8, fontStyle: 'italic', margin: '0 0 3px', lineHeight: 1.35, fontFamily: ui.display }}>&ldquo;Je livre 2× plus vite sans baisser la qualité.&rdquo;</p>
        <p style={{ fontSize: 5.5, color: '#e11d48', fontWeight: 700, margin: 0 }}>— Témoignage extrait</p>
      </div>

      {/* Deux colonnes + sidebar */}
      <div style={{ padding: '0 10px 8px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }}>
        <div>
          <Pic id="1516321318423-f06f685304cd" w={180} h={60} alt="Design" style={{ marginBottom: 4 }} />
          <p style={{ fontSize: 5, color: '#e11d48', fontWeight: 800, letterSpacing: 1, margin: '0 0 2px' }}>DESIGN</p>
          <p style={{ fontSize: 7.5, fontWeight: 800, margin: '0 0 2px', lineHeight: 1.2, fontFamily: ui.display }}>5 erreurs typo qui tuent un site</p>
          <p style={{ fontSize: 5.5, color: '#888', margin: 0 }}>5 min</p>
        </div>
        <div>
          <Pic id="1460925492860-0d79478dd561" w={180} h={60} alt="Business" style={{ marginBottom: 4 }} />
          <p style={{ fontSize: 5, color: '#0d9488', fontWeight: 800, letterSpacing: 1, margin: '0 0 2px' }}>BUSINESS</p>
          <p style={{ fontSize: 7.5, fontWeight: 800, margin: '0 0 2px', lineHeight: 1.2, fontFamily: ui.display }}>Combien facturer une vitrine ?</p>
          <p style={{ fontSize: 5.5, color: '#888', margin: 0 }}>6 min</p>
        </div>
      </div>

      {/* Liste dense */}
      <div style={{ margin: '0 10px 8px', background: '#111', color: '#faf8f5', borderRadius: 0, padding: '8px 9px' }}>
        <p style={{ fontSize: 6, fontWeight: 800, letterSpacing: 1.5, margin: '0 0 6px', color: '#e11d48' }}>AUSSI À LIRE</p>
        {[
          ['01', 'Les 7 outils qui changent le code', 'IA · 8 min'],
          ['02', 'Supabase vs Firebase pour un SaaS', 'Tech · 10 min'],
          ['03', 'Pricing psychologique : ce qui marche', 'Biz · 7 min'],
          ['04', 'Dark mode : quand (ne pas) le faire', 'UI · 4 min'],
        ].map(([n, t, m]) => (
          <div key={n} style={{ display: 'flex', gap: 7, padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <span style={{ fontSize: 9, fontWeight: 900, color: '#e11d48', fontFamily: ui.display, minWidth: 16 }}>{n}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 7, fontWeight: 700 }}>{t}</div>
              <div style={{ fontSize: 5.5, color: 'rgba(250,248,245,0.45)', marginTop: 1 }}>{m}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Auteur + newsletter */}
      <div style={{ padding: '0 10px 10px', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 6 }}>
        <div style={{ background: '#fff', border: '1px solid #e8e4de', padding: '7px', display: 'flex', gap: 6, alignItems: 'center' }}>
          <img loading="lazy" src={IMG('1472099645785-5658abf4ff4e', 48, 48)} alt="Auteur" style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover' }} onError={e => { e.target.style.opacity = '0.3' }} />
          <div>
            <div style={{ fontSize: 6.5, fontWeight: 800 }}>Alex Moreau</div>
            <div style={{ fontSize: 5, color: '#888' }}>Rédacteur en chef</div>
          </div>
        </div>
        <div style={{ background: '#e11d48', color: '#fff', padding: '7px 8px' }}>
          <p style={{ fontSize: 6.5, fontWeight: 800, margin: '0 0 2px' }}>Newsletter hebdo</p>
          <p style={{ fontSize: 5, opacity: 0.8, margin: '0 0 4px' }}>1 mail · 0 spam</p>
          <div style={{ display: 'flex', gap: 3 }}>
            <div style={{ flex: 1, background: 'rgba(255,255,255,0.2)', padding: '4px 5px', fontSize: 5.5 }}>email@</div>
            <button type="button" style={{ background: '#111', color: '#fff', border: 'none', padding: '4px 7px', fontSize: 6, fontWeight: 800, cursor: 'pointer' }}>OK</button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// 7. CABINET — institutionnel luxe navy / or
// ═══════════════════════════════════════════════════════════
function MiniCabinet() {
  return (
    <div style={{ fontFamily: ui.sans, background: '#f3efe6', color: '#0c1a2e', width: '100%' }}>
      {/* Top bar credentials */}
      <div style={{ background: '#0c1a2e', color: 'rgba(243,239,230,0.65)', padding: '4px 10px', fontSize: 5, letterSpacing: 1.2, display: 'flex', justifyContent: 'space-between', textTransform: 'uppercase' }}>
        <span>Paris · Lyon · Genève</span>
        <span>Depuis 1994</span>
      </div>

      {/* Letterhead */}
      <div style={{ padding: '12px 10px 10px', textAlign: 'center', background: 'linear-gradient(180deg,#f3efe6 0%,#ebe4d4 100%)', borderBottom: '1px solid #c9a84c' }}>
        <div style={{ width: 28, height: 28, margin: '0 auto 6px', border: '1.5px solid #c9a84c', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 9, fontWeight: 800, color: '#c9a84c', fontFamily: ui.display }}>D&amp;A</span>
        </div>
        <p style={{ fontSize: 5, letterSpacing: 3, color: '#c9a84c', margin: '0 0 3px', fontWeight: 700 }}>CABINET D&apos;AVOCATS</p>
        <h1 style={{ fontSize: 15, fontWeight: 700, margin: 0, fontFamily: ui.display, letterSpacing: 0.5 }}>Dupont &amp; Associés</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 0, marginTop: 8, fontSize: 6, borderTop: '1px solid rgba(201,168,76,0.4)', paddingTop: 6 }}>
          {['Cabinet', 'Expertises', 'Équipe', 'Honoraires', 'Contact'].map((l, i) => (
            <span key={l} style={{ padding: '0 6px', borderRight: i < 4 ? '1px solid rgba(201,168,76,0.35)' : 'none', color: '#5a6478', fontWeight: 600 }}>{l}</span>
          ))}
        </div>
      </div>

      {/* Hero image + overlay caption */}
      <div style={{ position: 'relative' }}>
        <Pic id="1497366216548-37526070297c" w={400} h={88} alt="Bureau" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 40%,rgba(12,26,46,0.85))' }} />
        <p style={{ position: 'absolute', bottom: 8, left: 10, right: 10, color: '#f3efe6', fontSize: 10, fontWeight: 700, fontFamily: ui.display, margin: 0, lineHeight: 1.2 }}>
          Le droit, avec exigence<br />et proximité.
        </p>
      </div>

      {/* Intro + stats */}
      <div style={{ padding: '10px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 8 }}>
        <div>
          <p style={{ fontSize: 7, color: '#5a6478', margin: '0 0 6px', lineHeight: 1.4 }}>30 ans au service des entreprises et des particuliers. Consultation sur rendez-vous, confidentielle.</p>
          <button type="button" style={{ background: '#c9a84c', color: '#0c1a2e', border: 'none', padding: '6px 10px', fontSize: 6.5, fontWeight: 800, cursor: 'pointer' }}>Prendre RDV →</button>
        </div>
        <div style={{ display: 'grid', gap: 4 }}>
          {[['30+', 'années'], ['12', 'avocats'], ['4.8★', 'clients']].map(([v, l]) => (
            <div key={l} style={{ background: '#0c1a2e', color: '#f3efe6', padding: '5px 7px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 11, fontWeight: 800, color: '#c9a84c', fontFamily: ui.display }}>{v}</span>
              <span style={{ fontSize: 5.5, opacity: 0.6 }}>{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Expertises numérotées */}
      <div style={{ padding: '0 10px 10px' }}>
        <p style={{ fontSize: 5.5, letterSpacing: 2, color: '#c9a84c', margin: '0 0 6px', fontWeight: 800 }}>DOMAINES D&apos;EXPERTISE</p>
        <div style={{ background: '#fff', border: '1px solid #e0d8c8' }}>
          {[
            ['01', 'Droit des affaires', 'M&A · Contrats · Contentieux'],
            ['02', 'Immobilier', 'Transactions · Copropriété'],
            ['03', 'Droit du travail', 'Licenciements · Accords'],
            ['04', 'Fiscalité', 'Optimisation · Contrôle'],
            ['05', 'Famille & patrimoine', 'Divorce · Successions'],
            ['06', 'Pénal des affaires', 'Défense · Compliance'],
          ].map(([n, t, d], i) => (
            <div key={n} style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 6, padding: '7px 8px', borderBottom: i < 5 ? '1px solid #f0ebe0' : 'none', alignItems: 'center' }}>
              <span style={{ fontSize: 9, fontWeight: 800, color: '#c9a84c', fontFamily: ui.display }}>{n}</span>
              <div>
                <div style={{ fontSize: 7.5, fontWeight: 700 }}>{t}</div>
                <div style={{ fontSize: 5.5, color: '#8a8494' }}>{d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Approche + citation */}
      <div style={{ margin: '0 10px 10px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
        <div style={{ background: '#0c1a2e', color: '#f3efe6', padding: '9px' }}>
          <p style={{ fontSize: 5.5, letterSpacing: 1.5, color: '#c9a84c', margin: '0 0 5px', fontWeight: 700 }}>NOTRE APPROCHE</p>
          {['Écoute & diagnostic', 'Stratégie sur-mesure', 'Suivi transparent'].map((s, i) => (
            <div key={s} style={{ display: 'flex', gap: 6, marginBottom: 5, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 7, color: '#c9a84c', fontWeight: 800 }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ fontSize: 6.5, lineHeight: 1.3 }}>{s}</span>
            </div>
          ))}
        </div>
        <div style={{ background: '#fff', border: '1px solid #c9a84c', padding: '9px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: 7.5, fontStyle: 'italic', margin: '0 0 5px', lineHeight: 1.35, fontFamily: ui.display }}>&ldquo;Chaque dossier mérite une stratégie unique.&rdquo;</p>
          <p style={{ fontSize: 5.5, color: '#c9a84c', fontWeight: 700, margin: 0 }}>— Me Dupont, Associé fondateur</p>
        </div>
      </div>

      {/* Équipe */}
      <div style={{ padding: '0 10px 10px' }}>
        <p style={{ fontSize: 5.5, letterSpacing: 2, color: '#c9a84c', margin: '0 0 6px', fontWeight: 800 }}>L&apos;ÉQUIPE</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 5 }}>
          {[
            [IMG('1560250097-0b93528c311a', 80, 100), 'Me Dupont', 'Associé', 'Affaires'],
            [IMG('1573496359142-b8d87734a5a2', 80, 100), 'Me Martin', 'Associée', 'Travail'],
            [IMG('1472099645785-5658abf4ff4e', 80, 100), 'Me Leroy', 'Counsel', 'Fiscal'],
          ].map(([src, name, role, spe]) => (
            <div key={name} style={{ position: 'relative', overflow: 'hidden' }}>
              <img loading="lazy" src={src} alt={name} style={{ width: '100%', height: 72, objectFit: 'cover', display: 'block', filter: 'grayscale(0.3)' }} onError={e => { e.target.style.opacity = '0.3' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent,rgba(12,26,46,0.92))', padding: '14px 5px 5px', color: '#fff' }}>
                <div style={{ fontSize: 6, fontWeight: 800 }}>{name}</div>
                <div style={{ fontSize: 5, color: '#c9a84c' }}>{role} · {spe}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact strip */}
      <div style={{ background: '#c9a84c', padding: '9px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 5.5, color: '#0c1a2e', opacity: 0.7 }}>16 rue de la Paix · 75002</div>
          <div style={{ fontSize: 8, fontWeight: 800, color: '#0c1a2e' }}>01 40 00 00 00</div>
        </div>
        <button type="button" style={{ background: '#0c1a2e', color: '#f3efe6', border: 'none', padding: '7px 11px', fontSize: 7, fontWeight: 800, cursor: 'pointer' }}>Consultation</button>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// 8. PORTFOLIO — créatif asymétrique, case study, booking
// ═══════════════════════════════════════════════════════════
function MiniPortfolio() {
  return (
    <div style={{ fontFamily: ui.sans, background: '#090909', color: '#fff', width: '100%' }}>
      {/* Nav minimal */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 10px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <span style={{ fontSize: 12, fontWeight: 900, letterSpacing: 3, fontFamily: ui.display }}>LÉNA</span>
        <div style={{ display: 'flex', gap: 9, fontSize: 6, color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>
          <span>Work</span>
          <span>About</span>
          <span style={{ color: '#c8f542' }}>Book</span>
        </div>
      </div>

      {/* Hero typo + portrait strip */}
      <div style={{ padding: '12px 10px 8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 5.5, color: '#c8f542', letterSpacing: 2.5, margin: '0 0 5px', fontWeight: 800 }}>PHOTOGRAPHE · PARIS / MILAN</p>
            <h2 style={{ fontSize: 18, fontWeight: 900, margin: '0 0 5px', lineHeight: 0.95, fontFamily: ui.display, letterSpacing: '-0.03em' }}>
              Images<br />qui<br /><span style={{ color: '#c8f542' }}>racontent.</span>
            </h2>
            <p style={{ fontSize: 6.5, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.35 }}>Mode · Portrait · Archi · Éditorial</p>
          </div>
          <div style={{ width: 72, position: 'relative' }}>
            <Pic id="1492693428060-cfa7817adba9" w={72} h={96} alt="Léna" style={{ borderRadius: 2 }} />
            <div style={{ position: 'absolute', bottom: -4, right: -4, background: '#c8f542', color: '#090909', fontSize: 5, fontWeight: 900, padding: '2px 5px' }}>AVAILABLE</div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, margin: '4px 10px 10px', background: 'rgba(255,255,255,0.08)' }}>
        {[['480+', 'shootings'], ['12', 'prix'], ['8 ans', 'xp']].map(([v, l]) => (
          <div key={l} style={{ background: '#111', padding: '8px 6px', textAlign: 'center' }}>
            <div style={{ fontSize: 12, fontWeight: 900, color: '#c8f542', fontFamily: ui.display }}>{v}</div>
            <div style={{ fontSize: 5, color: 'rgba(255,255,255,0.4)', letterSpacing: 1, textTransform: 'uppercase' }}>{l}</div>
          </div>
        ))}
      </div>

      {/* Featured case study */}
      <div style={{ margin: '0 10px 10px', position: 'relative' }}>
        <Pic id="1469334031218-e382a71b716b" w={400} h={110} alt="Featured" style={{ borderRadius: 2 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(9,9,9,0.85) 0%,transparent 60%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 10 }}>
          <span style={{ fontSize: 5, color: '#c8f542', fontWeight: 800, letterSpacing: 1.5, marginBottom: 3 }}>FEATURED · SS26</span>
          <span style={{ fontSize: 11, fontWeight: 900, fontFamily: ui.display, lineHeight: 1.1 }}>Mode Éditorial<br />Vogue Italia</span>
          <span style={{ fontSize: 5.5, color: 'rgba(255,255,255,0.5)', marginTop: 3 }}>120 frames · Milan</span>
        </div>
        <span style={{ position: 'absolute', top: 8, right: 8, fontSize: 20, fontWeight: 900, fontFamily: ui.display, color: 'rgba(200,245,66,0.35)', lineHeight: 1 }}>01</span>
      </div>

      {/* Masonry asymétrique avec overlays */}
      <div style={{ padding: '0 10px 8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
          <p style={{ fontSize: 7, fontWeight: 800, margin: 0, letterSpacing: 1, fontFamily: ui.display }}>SELECTED WORK</p>
          <span style={{ fontSize: 5.5, color: '#c8f542' }}>View all →</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 4, marginBottom: 4 }}>
          <div style={{ position: 'relative' }}>
            <Pic id="1501854140801-50d01698950b" w={200} h={100} alt="Nature" style={{ borderRadius: 2 }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 6px 5px', background: 'linear-gradient(transparent,rgba(0,0,0,0.8))' }}>
              <div style={{ fontSize: 7, fontWeight: 800 }}>Nature Quiet</div>
              <div style={{ fontSize: 5, color: '#c8f542' }}>84 photos</div>
            </div>
          </div>
          <div style={{ display: 'grid', gap: 4 }}>
            <div style={{ position: 'relative' }}>
              <Pic id="1518173946687-a4c8892bbd9f" w={140} h={48} alt="Urban" style={{ borderRadius: 2, height: 48 }} />
              <span style={{ position: 'absolute', bottom: 3, left: 4, fontSize: 5.5, fontWeight: 700, background: 'rgba(0,0,0,0.7)', padding: '1px 4px' }}>Urban</span>
            </div>
            <div style={{ position: 'relative' }}>
              <Pic id="1441986300917-64674bd600d8" w={140} h={48} alt="Produit" style={{ borderRadius: 2, height: 48 }} />
              <span style={{ position: 'absolute', bottom: 3, left: 4, fontSize: 5.5, fontWeight: 700, background: 'rgba(0,0,0,0.7)', padding: '1px 4px' }}>Still life</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 0.9fr', gap: 4 }}>
          <Pic id="1496743417675-0a8e80c6f0b4" w={100} h={54} alt="Arch" style={{ borderRadius: 2, height: 54 }} />
          <div style={{ position: 'relative' }}>
            <Pic id="1529626455594-4fe221cba588" w={140} h={54} alt="Portrait" style={{ borderRadius: 2, height: 54 }} />
            <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(200,245,66,0.15)', fontSize: 6, fontWeight: 800, color: '#c8f542' }}>Portraits →</span>
          </div>
          <div style={{ background: '#161616', borderRadius: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 54, border: '1px dashed rgba(200,245,66,0.35)' }}>
            <span style={{ fontSize: 10, fontWeight: 900, color: '#c8f542' }}>+36</span>
            <span style={{ fontSize: 5, color: 'rgba(255,255,255,0.4)' }}>projets</span>
          </div>
        </div>
      </div>

      {/* Séries list redesign */}
      <div style={{ padding: '6px 10px 10px' }}>
        <p style={{ fontSize: 5.5, color: '#c8f542', letterSpacing: 2, margin: '0 0 6px', fontWeight: 800 }}>SÉRIES</p>
        {[
          ['01', 'NATURE QUIET', 'Print · 84'],
          ['02', 'MODE SS26', 'Éditorial · 120'],
          ['03', 'URBAN NIGHT', 'Prix · 240'],
          ['04', 'FACES', 'Booking · 56'],
        ].map(([n, t, d]) => (
          <div key={n} style={{ display: 'grid', gridTemplateColumns: '22px 1fr auto auto', gap: 6, alignItems: 'center', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <span style={{ fontSize: 8, fontWeight: 900, color: 'rgba(200,245,66,0.5)', fontFamily: ui.display }}>{n}</span>
            <span style={{ fontSize: 8, fontWeight: 700 }}>{t}</span>
            <span style={{ fontSize: 5.5, color: 'rgba(255,255,255,0.35)' }}>{d}</span>
            <span style={{ fontSize: 8, color: '#c8f542', fontWeight: 700 }}>→</span>
          </div>
        ))}
      </div>

      {/* Clients + CTA */}
      <div style={{ margin: '0 10px 10px', padding: '9px', background: '#111', borderRadius: 2, border: '1px solid rgba(255,255,255,0.06)' }}>
        <p style={{ fontSize: 5, color: 'rgba(255,255,255,0.35)', letterSpacing: 1.5, margin: '0 0 6px', textAlign: 'center' }}>COLLABORATIONS</p>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 8, fontSize: 6, fontWeight: 800, color: 'rgba(255,255,255,0.5)', letterSpacing: 1 }}>
          <span>VOGUE</span><span>NIKE</span><span>HERMÈS</span><span>LE MONDE</span>
        </div>
        <button type="button" style={{ width: '100%', background: '#c8f542', color: '#090909', border: 'none', padding: '9px', fontSize: 8, fontWeight: 900, cursor: 'pointer', fontFamily: ui.display, letterSpacing: 0.5 }}>
          Book a session →
        </button>
      </div>

      {/* About mini */}
      <div style={{ padding: '0 10px 12px', display: 'flex', gap: 8, alignItems: 'center' }}>
        <div style={{ width: 3, height: 28, background: '#c8f542', flexShrink: 0 }} />
        <p style={{ fontSize: 6.5, color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.4 }}>
          Basée à Paris. Disponible Europe &amp; remote direction artistique.
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
