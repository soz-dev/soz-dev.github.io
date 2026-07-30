import { motion } from 'framer-motion'
import { Monitor } from 'lucide-react'

const IMG = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=75`

// ── 1. Restaurant ────────────────────────────────────────────────────────────
function MiniRestaurant() {
  return (
    <div style={{ fontFamily:'system-ui', background:'#09080a', color:'#f5f0e8', width:'100%', height:'100%', overflow:'hidden' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'8px 12px', position:'absolute', top:0, left:0, right:0, zIndex:10, background:'linear-gradient(rgba(0,0,0,0.7),transparent)' }}>
        <span style={{ fontWeight:900, fontSize:10, color:'#d4a843', letterSpacing:3 }}>BELLA CUCINA</span>
        <div style={{ display:'flex', gap:8, fontSize:7, color:'rgba(255,255,255,0.7)' }}>
          <span>Menu</span><span>Réserver</span><span>Contact</span>
        </div>
      </div>
      <div style={{ position:'relative', height:110 }}>
        <img src={IMG('1414235077428-338989a2e8c0',400,120)} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.7))' }} />
        <div style={{ position:'absolute', bottom:8, left:12, right:12, textAlign:'center' }}>
          <p style={{ fontSize:7, color:'#d4a843', letterSpacing:3, margin:'0 0 2px' }}>DEPUIS 1987 · PARIS 8ÈME</p>
          <h1 style={{ fontSize:15, fontWeight:900, margin:'0 0 6px', lineHeight:1.1, fontStyle:'italic' }}>Une expérience inoubliable</h1>
          <button style={{ background:'#d4a843', color:'#09080a', border:'none', padding:'4px 14px', borderRadius:3, fontSize:7.5, fontWeight:800, cursor:'pointer', letterSpacing:1 }}>RÉSERVER →</button>
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:6, padding:'8px 10px' }}>
        {[
          [IMG('1567620905572-d743fce5d776',120,70),'Viandes rôties','28 €'],
          [IMG('1473093295043-cdd812d0e601',120,70),'Pasta maison','22 €'],
          [IMG('1567324216240-9c5e92beea68',120,70),'Desserts','12 €'],
        ].map(([src,n,p],i) => (
          <div key={i} style={{ borderRadius:5, overflow:'hidden', background:'rgba(255,255,255,0.05)' }}>
            <img src={src} alt="" style={{ width:'100%', height:42, objectFit:'cover' }} onError={e=>e.target.style.display='none'} />
            <div style={{ padding:'4px 6px' }}>
              <p style={{ fontSize:7, fontWeight:600, margin:'0 0 1px' }}>{n}</p>
              <p style={{ fontSize:7, color:'#d4a843', margin:0 }}>{p}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'4px 10px', fontSize:6.5, color:'#a0916d' }}>
        <span>★★★★★ 247 avis</span>
        <span>🕐 Ouvert 12h–23h</span>
        <span>📞 01 42 xx xx xx</span>
      </div>
    </div>
  )
}

// ── 2. Coach ─────────────────────────────────────────────────────────────────
function MiniCoach() {
  return (
    <div style={{ fontFamily:'system-ui', background:'#fff', color:'#111', width:'100%', height:'100%', overflow:'hidden' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'8px 12px', background:'#fff', borderBottom:'1px solid #f0f0f0' }}>
        <span style={{ fontWeight:900, fontSize:10, color:'#7c3aed' }}>Marie Laurent <span style={{ fontSize:7, color:'#a78bfa', fontWeight:400 }}>Coach ICF</span></span>
        <button style={{ background:'linear-gradient(135deg,#7c3aed,#06b6d4)', color:'#fff', border:'none', padding:'3px 10px', borderRadius:20, fontSize:7, cursor:'pointer' }}>Prendre RDV</button>
      </div>
      <div style={{ display:'flex', gap:10, padding:'10px 12px', alignItems:'flex-start' }}>
        <img src={IMG('1573496359142-b8d87734a5a2',80,80)} alt="" style={{ width:54, height:54, borderRadius:'50%', objectFit:'cover', flexShrink:0, border:'2px solid #a78bfa' }} onError={e=>{e.target.style.display='none'}} />
        <div>
          <p style={{ fontSize:6.5, color:'#7c3aed', fontWeight:700, margin:'0 0 2px', letterSpacing:2 }}>COACH CERTIFIÉE</p>
          <h2 style={{ fontSize:12, fontWeight:800, margin:'0 0 2px', lineHeight:1.2 }}>Libérez votre<br/>plein potentiel</h2>
          <p style={{ fontSize:6.5, color:'#888', margin:0 }}>+200 clients · 6 ans d'expérience</p>
          <div style={{ display:'flex', gap:3, marginTop:4 }}>
            {['Pro','Bien-être','Life'].map((t,i) => (
              <span key={i} style={{ fontSize:6, background:'rgba(124,58,237,0.08)', color:'#7c3aed', padding:'1px 5px', borderRadius:20 }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ padding:'0 12px 8px' }}>
        <div style={{ background:'linear-gradient(135deg,rgba(124,58,237,0.05),rgba(6,182,212,0.05))', border:'1px solid rgba(124,58,237,0.12)', borderRadius:7, padding:'7px 9px', marginBottom:7 }}>
          <p style={{ fontSize:7, fontStyle:'italic', color:'#555', margin:'0 0 3px', lineHeight:1.4 }}>"En 3 mois j'ai décroché le poste de mes rêves. Merci Marie !"</p>
          <p style={{ fontSize:6.5, color:'#a78bfa', margin:0 }}>— Sophie T., Manager</p>
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:7 }}>
          <span style={{ color:'#888' }}>🗓 Prochaine dispo : <strong style={{ color:'#333' }}>Lundi 14h</strong></span>
          <span style={{ color:'#7c3aed', fontWeight:700 }}>1h · 120 €</span>
        </div>
      </div>
    </div>
  )
}

// ── 3. E-commerce ─────────────────────────────────────────────────────────────
function MiniEcommerce() {
  return (
    <div style={{ fontFamily:'system-ui', background:'#fff', color:'#111', width:'100%', height:'100%', overflow:'hidden' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'8px 12px', borderBottom:'1px solid #f0f0f0' }}>
        <span style={{ fontWeight:900, fontSize:11 }}>LUXE<span style={{ color:'#06b6d4' }}>SHOP</span></span>
        <div style={{ display:'flex', gap:1, alignItems:'center' }}>
          <input style={{ border:'1px solid #f0f0f0', borderRadius:20, padding:'2px 8px', fontSize:7, width:80, outline:'none' }} placeholder="Rechercher..." />
          <span style={{ background:'#111', color:'#fff', borderRadius:20, padding:'2px 7px', fontSize:7, marginLeft:6 }}>🛒 3</span>
        </div>
      </div>
      <div style={{ background:'linear-gradient(135deg,#0f0c2b,#1a1540)', padding:'8px 12px 7px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div>
          <p style={{ fontSize:6.5, color:'#06b6d4', letterSpacing:3, margin:'0 0 1px' }}>PROMO -30%</p>
          <p style={{ fontSize:12, fontWeight:800, color:'#fff', margin:0 }}>Collection Été</p>
        </div>
        <button style={{ background:'#06b6d4', color:'#fff', border:'none', padding:'5px 12px', borderRadius:4, fontSize:7.5, cursor:'pointer', fontWeight:700 }}>Découvrir →</button>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:5, padding:'7px 8px' }}>
        {[
          [IMG('1542291026-7eec264c27ff',120,80),'Sneakers Air','129 €','189 €'],
          [IMG('1548036328-c9fa89d128fa',120,80),'Sac Cuir','189 €',null],
          [IMG('1523275335684-37898b6baf30',120,80),'Montre Or','320 €','450 €'],
        ].map(([src,n,p,old],i) => (
          <div key={i} style={{ borderRadius:5, overflow:'hidden', border:'1px solid #f5f5f5' }}>
            <div style={{ position:'relative' }}>
              <img src={src} alt="" style={{ width:'100%', height:46, objectFit:'cover' }} onError={e=>e.target.style.display='none'} />
              {old && <span style={{ position:'absolute', top:3, left:3, background:'#ef4444', color:'#fff', fontSize:5.5, padding:'1px 4px', borderRadius:3, fontWeight:700 }}>PROMO</span>}
            </div>
            <div style={{ padding:'4px 5px' }}>
              <p style={{ fontSize:6.5, fontWeight:600, margin:'0 0 1px', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{n}</p>
              <div style={{ display:'flex', alignItems:'center', gap:3, marginBottom:3 }}>
                <p style={{ fontSize:7.5, color:'#0891b2', fontWeight:700, margin:0 }}>{p}</p>
                {old && <p style={{ fontSize:6, color:'#aaa', textDecoration:'line-through', margin:0 }}>{old}</p>}
              </div>
              <button style={{ width:'100%', background:'#111', color:'#fff', border:'none', padding:'3px 0', borderRadius:3, fontSize:6, cursor:'pointer' }}>+ Panier</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display:'flex', justifyContent:'space-around', padding:'3px 8px', fontSize:6.5, color:'#aaa', borderTop:'1px solid #f5f5f5' }}>
        <span>🔒 Paiement sécurisé</span><span>🚚 Livraison 24h</span><span>↩ Retour 30j</span>
      </div>
    </div>
  )
}

// ── 4. SaaS ──────────────────────────────────────────────────────────────────
function MiniSaaS() {
  const avatars = ['🧑‍💻','👩‍💼','🧑‍🎨','👨‍🔬','👩‍💻']
  return (
    <div style={{ fontFamily:'system-ui', background:'#030712', color:'#e2e8f0', width:'100%', height:'100%', display:'flex', overflow:'hidden' }}>
      <div style={{ width:42, background:'#07070f', borderRight:'1px solid rgba(255,255,255,0.05)', padding:'10px 0', display:'flex', flexDirection:'column', alignItems:'center', gap:9 }}>
        <div style={{ width:20, height:20, borderRadius:4, background:'linear-gradient(135deg,#a855f7,#06b6d4)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:9 }}>⚡</div>
        {['📊','👥','📦','💬','⚙️'].map((ic,i) => (
          <div key={i} style={{ fontSize:10, opacity:i===0?1:0.3, position:'relative' }}>
            {ic}
            {i===3 && <span style={{ position:'absolute', top:-2, right:-2, width:5, height:5, background:'#ef4444', borderRadius:'50%', display:'block' }} />}
          </div>
        ))}
      </div>
      <div style={{ flex:1, padding:'9px 8px', overflow:'hidden' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8 }}>
          <p style={{ fontSize:8, fontWeight:700, margin:0, color:'#a855f7' }}>// Dashboard</p>
          <span style={{ fontSize:6, background:'rgba(16,185,129,0.15)', color:'#10b981', padding:'1px 5px', borderRadius:20 }}>● Live</span>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:4, marginBottom:7 }}>
          {[['2 840','Users','+12%','#a855f7'],['47 K€','MRR','+8%','#06b6d4']].map(([v,l,d,c],i)=>(
            <div key={i} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:6, padding:'5px 7px' }}>
              <p style={{ fontSize:12, fontWeight:700, margin:'0 0 1px', color:c }}>{v}</p>
              <p style={{ fontSize:6, color:'#64748b', margin:'0 0 1px' }}>{l}</p>
              <p style={{ fontSize:6, color:'#10b981', margin:0 }}>{d}</p>
            </div>
          ))}
        </div>
        <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:5, padding:'6px 7px', marginBottom:6 }}>
          <p style={{ fontSize:6, color:'#64748b', margin:'0 0 5px' }}>Activité — 30 jours</p>
          <div style={{ display:'flex', alignItems:'flex-end', gap:2, height:28 }}>
            {[30,50,40,68,55,78,60,85,72,90,65,95].map((h,i)=>(
              <div key={i} style={{ flex:1, height:`${h}%`, borderRadius:'2px 2px 0 0', background:i===11?'#a855f7':`rgba(168,85,247,${0.12+i*0.055})` }} />
            ))}
          </div>
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div style={{ display:'flex' }}>
            {avatars.map((a,i)=>(
              <span key={i} style={{ fontSize:10, marginLeft:i?-3:0, zIndex:avatars.length-i }}>{a}</span>
            ))}
          </div>
          <span style={{ fontSize:6.5, color:'#64748b' }}>+58 actifs</span>
        </div>
      </div>
    </div>
  )
}

// ── 5. Artisan / Site vitrine ────────────────────────────────────────────────
function MiniArtisan() {
  return (
    <div style={{ fontFamily:'system-ui', background:'#fff', color:'#111', width:'100%', height:'100%', overflow:'hidden' }}>
      <div style={{ background:'#1e3a5f', padding:'7px 12px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div>
          <p style={{ fontSize:9, fontWeight:900, color:'#fff', margin:0 }}>🔧 ProPlomberie</p>
          <p style={{ fontSize:6, color:'rgba(255,255,255,0.6)', margin:0 }}>Intervention rapide · Paris & IDF</p>
        </div>
        <div style={{ background:'#f97316', color:'#fff', borderRadius:5, padding:'4px 8px', textAlign:'center' }}>
          <p style={{ fontSize:7.5, fontWeight:900, margin:0 }}>06 12 34 56 78</p>
          <p style={{ fontSize:6, margin:0, opacity:0.9 }}>Urgence 24/7</p>
        </div>
      </div>
      <div style={{ position:'relative', height:80 }}>
        <img src={IMG('1581094794329-c8112a89af12',400,100)} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} onError={e=>e.target.style.display='none'} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg,rgba(30,58,95,0.85) 40%,transparent)' }} />
        <div style={{ position:'absolute', top:'50%', left:10, transform:'translateY(-50%)' }}>
          <h2 style={{ fontSize:11, fontWeight:900, color:'#fff', margin:'0 0 2px', lineHeight:1.2 }}>Plombier certifié<br/>disponible maintenant</h2>
          <button style={{ background:'#f97316', color:'#fff', border:'none', padding:'3px 10px', borderRadius:3, fontSize:7, fontWeight:700, cursor:'pointer' }}>Devis gratuit →</button>
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:5, padding:'8px 10px' }}>
        {[['🚿','Dépannage'],['🔩','Installation'],['🏠','Rénovation'],['🌊','Chauffage']].map(([e,l],i)=>(
          <div key={i} style={{ background:'#f8fafc', border:'1px solid #e2e8f0', borderRadius:5, padding:'5px 4px', textAlign:'center' }}>
            <p style={{ fontSize:12, margin:'0 0 2px' }}>{e}</p>
            <p style={{ fontSize:6, fontWeight:600, color:'#1e3a5f', margin:0 }}>{l}</p>
          </div>
        ))}
      </div>
      <div style={{ padding:'0 10px', display:'flex', gap:5, fontSize:6.5, color:'#555', alignItems:'center' }}>
        <span>⭐ 4.9/5</span><span>·</span><span>✅ Artisan RGE</span><span>·</span><span>📍 Île-de-France</span>
      </div>
    </div>
  )
}

// ── 6. Blog / Site dynamique ─────────────────────────────────────────────────
function MiniBlog() {
  return (
    <div style={{ fontFamily:'system-ui', background:'#fff', color:'#111', width:'100%', height:'100%', overflow:'hidden' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'7px 12px', borderBottom:'1px solid #f0f0f0' }}>
        <span style={{ fontWeight:900, fontSize:11, color:'#111' }}>THE<span style={{ color:'#a855f7' }}>PULSE</span></span>
        <div style={{ display:'flex', gap:6, fontSize:7, color:'#666' }}>
          {['Tech','Design','Business','Dev'].map(c=><span key={c}>{c}</span>)}
        </div>
      </div>
      <div style={{ position:'relative', height:95 }}>
        <img src={IMG('1486312338219-ce68d2c6f44d',400,120)} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} onError={e=>e.target.style.display='none'} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.75))' }} />
        <div style={{ position:'absolute', bottom:7, left:9, right:9 }}>
          <span style={{ fontSize:6, background:'#a855f7', color:'#fff', padding:'1px 6px', borderRadius:20, fontWeight:600 }}>À LA UNE</span>
          <h2 style={{ fontSize:11, fontWeight:800, color:'#fff', margin:'3px 0 2px', lineHeight:1.25 }}>L'IA va-t-elle remplacer<br/>les développeurs en 2027 ?</h2>
          <div style={{ display:'flex', gap:6, fontSize:6, color:'rgba(255,255,255,0.7)', alignItems:'center' }}>
            <span>👤 Alex M.</span><span>·</span><span>🕐 8 min de lecture</span><span>·</span><span>2.4K vues</span>
          </div>
        </div>
      </div>
      <div style={{ padding:'7px 9px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:5 }}>
          {[
            [IMG('1550745165-9bc0b252726f',80,45),'React 19 : ce qui change'],
            [IMG('1559526324-593bc073d938',80,45),'Figma vs Sketch en 2026'],
          ].map(([src,title],i)=>(
            <div key={i} style={{ display:'flex', gap:5, alignItems:'flex-start' }}>
              <img src={src} alt="" style={{ width:40, height:28, objectFit:'cover', borderRadius:3, flexShrink:0 }} onError={e=>e.target.style.display='none'} />
              <p style={{ fontSize:7, fontWeight:600, margin:0, lineHeight:1.3, color:'#222' }}>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── 7. Cabinet professionnel ──────────────────────────────────────────────────
function MiniCabinet() {
  return (
    <div style={{ fontFamily:'system-ui', background:'#f8f9fc', color:'#111', width:'100%', height:'100%', overflow:'hidden' }}>
      <div style={{ background:'#0f1f3d', padding:'8px 12px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div>
          <p style={{ fontSize:9.5, fontWeight:900, color:'#fff', margin:0, letterSpacing:1 }}>DUPONT <span style={{ color:'#c9a84c', fontWeight:400 }}>&</span> ASSOCIÉS</p>
          <p style={{ fontSize:6, color:'rgba(255,255,255,0.5)', margin:0, letterSpacing:1 }}>CABINET D'AVOCATS · PARIS</p>
        </div>
        <button style={{ background:'transparent', color:'#c9a84c', border:'1px solid #c9a84c', padding:'3px 9px', borderRadius:3, fontSize:7, cursor:'pointer' }}>Consultation</button>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr', height:170, gap:0 }}>
        <div style={{ position:'relative' }}>
          <img src={IMG('1453728013993-6d66e9c9123a',200,180)} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} onError={e=>e.target.style.display='none'} />
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(rgba(15,31,61,0.2),rgba(15,31,61,0.65))' }} />
          <div style={{ position:'absolute', bottom:10, left:10 }}>
            <h2 style={{ fontSize:11, fontWeight:800, color:'#fff', margin:'0 0 2px', lineHeight:1.2 }}>Votre défense,<br/>notre expertise</h2>
            <p style={{ fontSize:6.5, color:'rgba(255,255,255,0.7)', margin:'0 0 5px' }}>30 ans d'expérience</p>
            <button style={{ background:'#c9a84c', color:'#0f1f3d', border:'none', padding:'3px 10px', borderRadius:3, fontSize:7, fontWeight:700, cursor:'pointer' }}>Prendre RDV →</button>
          </div>
        </div>
        <div style={{ background:'#0f1f3d', padding:'10px 10px' }}>
          <p style={{ fontSize:7, color:'#c9a84c', fontWeight:700, margin:'0 0 7px', letterSpacing:2 }}>NOS DOMAINES</p>
          {['⚖️ Droit des affaires','🏠 Droit immobilier','👥 Droit du travail','💼 Droit fiscal','🛡️ Pénal des affaires'].map((l,i)=>(
            <div key={i} style={{ fontSize:7, color:i===0?'#c9a84c':'rgba(255,255,255,0.65)', padding:'3px 0', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>{l}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── 8. Portfolio créatif ──────────────────────────────────────────────────────
function MiniPortfolio() {
  const photos = [
    IMG('1506905925346-21bda4d32df4',120,100),
    IMG('1543610892-0b1f7b6b7eb3',120,60),
    IMG('1501854140801-50d01698950b',120,60),
    IMG('1518173946687-a4c8892bbd9f',120,80),
    IMG('1447752741948-7ba38a9ab966',120,70),
  ]
  return (
    <div style={{ fontFamily:'system-ui', background:'#0a0a0a', color:'#fff', width:'100%', height:'100%', overflow:'hidden' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'8px 12px' }}>
        <span style={{ fontSize:10, fontWeight:900, letterSpacing:3 }}>LÉNA<span style={{ color:'#a855f7' }}>.</span>PHOTO</span>
        <div style={{ display:'flex', gap:8, fontSize:7, color:'rgba(255,255,255,0.5)' }}>
          <span>Portfolio</span><span>À propos</span><span>Contact</span>
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr', gridTemplateRows:'auto auto', gap:4, padding:'4px 8px 6px' }}>
        <div style={{ gridRow:'1/3', borderRadius:5, overflow:'hidden', position:'relative' }}>
          <img src={photos[0]} alt="" style={{ width:'100%', height:160, objectFit:'cover' }} onError={e=>e.target.style.display='none'} />
          <div style={{ position:'absolute', bottom:5, left:5, background:'rgba(168,85,247,0.85)', padding:'2px 7px', borderRadius:3 }}>
            <p style={{ fontSize:6.5, fontWeight:700, margin:0 }}>PAYSAGE</p>
          </div>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:4 }}>
          {photos.slice(1,5).map((src,i)=>(
            <div key={i} style={{ borderRadius:4, overflow:'hidden', height:36 }}>
              <img src={src} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} onError={e=>e.target.style.display='none'} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'4px 10px', borderTop:'1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display:'flex', gap:4, fontSize:6.5, color:'rgba(255,255,255,0.4)' }}>
          <span>📷 240 photos</span><span>·</span><span>🏆 3 prix</span>
        </div>
        <button style={{ background:'rgba(168,85,247,0.2)', color:'#c084fc', border:'1px solid rgba(168,85,247,0.3)', padding:'3px 9px', borderRadius:20, fontSize:6.5, cursor:'pointer' }}>Me contacter</button>
      </div>
    </div>
  )
}

// ── Browser frame ────────────────────────────────────────────────────────────
function BrowserFrame({ url, label, tags, children, delay }) {
  return (
    <motion.div
      initial={{ opacity:0, y:28 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true, margin:'-40px' }}
      transition={{ duration:0.55, delay }}
      className="rounded-2xl overflow-hidden border border-gray-200 dark:border-white/8 shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
    >
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-[#0f0f1a] border-b border-gray-200 dark:border-white/8">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        </div>
        <div className="flex-1 mx-1.5 bg-white/60 dark:bg-white/8 rounded-full px-3 py-0.5 text-[10px] text-gray-400 dark:text-slate-500 font-mono truncate">{url}</div>
        <Monitor size={10} className="text-gray-400 dark:text-slate-600 flex-shrink-0" />
      </div>
      <div style={{ height:258, overflow:'hidden', position:'relative' }}>{children}</div>
      <div className="px-3.5 py-2.5 bg-gray-50 dark:bg-[#07070f] border-t border-gray-200 dark:border-white/8">
        <p className="text-xs font-semibold text-gray-800 dark:text-white mb-1.5">{label}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map(t => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-300 font-mono">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ── Section ──────────────────────────────────────────────────────────────────
const DEMOS = [
  { url:'bella-cucina.fr',       label:'Restaurant gastronomique', tags:['Dark design','Réservation','Menu interactif'],   component:<MiniRestaurant /> },
  { url:'marie-coaching.fr',     label:'Coach & Thérapeute',       tags:['Landing page','Calendrier','Témoignages'],         component:<MiniCoach /> },
  { url:'luxeshop.fr',           label:'Boutique e-commerce',      tags:['Catalogue','Panier','Stripe','Promo'],             component:<MiniEcommerce /> },
  { url:'app.saas-demo.io',      label:'Application SaaS',         tags:['Dashboard','Auth','API REST','Temps réel'],        component:<MiniSaaS /> },
  { url:'proplomberie-paris.fr', label:'Artisan / Site vitrine',   tags:['Urgence 24/7','Devis gratuit','SEO local'],        component:<MiniArtisan /> },
  { url:'thepulse.fr',           label:'Blog / Site dynamique',    tags:['CMS','Articles','Catégories','Newsletter'],        component:<MiniBlog /> },
  { url:'dupont-avocats.fr',     label:'Cabinet professionnel',    tags:['Institutionnel','Rendez-vous','Multi-pages'],      component:<MiniCabinet /> },
  { url:'lena-photo.fr',         label:'Portfolio créatif',        tags:['Galerie','Dark','Fullscreen','Contact'],           component:<MiniPortfolio /> },
]

export default function WebShowcase() {
  return (
    <section id="exemples" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[1000px] h-[700px] rounded-full blur-[160px]" style={{ background:'rgba(6,182,212,0.04)' }} />
      </div>
      <div className="absolute inset-x-0 top-0 h-px" style={{ background:'linear-gradient(to right,transparent,rgba(6,182,212,0.25),transparent)' }} />

      <div className="relative max-w-6xl mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, margin:'-80px' }}
          transition={{ duration:0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-cyan-400 tracking-[0.3em] uppercase block mb-4">Ce qu'on peut créer</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5">
            Votre secteur,{' '}<span className="gradient-text">votre site</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg" style={{ maxWidth:'480px', margin:'0 auto' }}>
            8 exemples de ce qu'on peut construire. Chaque site est unique, conçu sur-mesure pour votre activité et vos clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DEMOS.map((demo, i) => (
            <BrowserFrame key={demo.url} url={demo.url} label={demo.label} tags={demo.tags} delay={i * 0.06}>
              {demo.component}
            </BrowserFrame>
          ))}
        </div>

        <motion.p
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          viewport={{ once:true }}
          transition={{ duration:0.6, delay:0.3 }}
          className="text-center text-sm text-slate-400 dark:text-slate-500 font-mono mt-10"
        >
          Toutes ces démos sont du vrai code React — pas des captures d'écran.{' '}
          <a href="#devis" className="text-purple-400 hover:text-purple-300 transition underline underline-offset-4">Discutons de votre projet →</a>
        </motion.p>
      </div>
    </section>
  )
}
