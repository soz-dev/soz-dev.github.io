export const PRIX_BASE = {
  'site-vitrine':       390,
  'site-vitrine-multi': 690,
  'site-pro':           1290,
  'ecommerce':          1990,
  'app-web':            2990,
  'app-ios':            2990,
}

export const LABEL_TYPE = {
  'site-vitrine':       'Landing / vitrine 1 page',
  'site-vitrine-multi': 'Site vitrine multi-pages',
  'site-pro':           'Site professionnel',
  'ecommerce':          'Boutique Stripe',
  'app-web':            'Application web / outil',
  'app-ios':            'Application iOS native',
}

const INTEGRATIONS_PRIX = {
  'Mailchimp / Brevo (+120€)': { label: 'Intégration Mailchimp / Brevo', montant: 120 },
  'CRM existant (+220€)':      { label: 'Intégration CRM', montant: 220 },
  'Zapier (+150€)':            { label: 'Intégration Zapier', montant: 150 },
}

const BASE_INCLUS = [
  'Responsive mobile & tablette',
  'HTTPS / SSL',
  '1 mois de support après livraison',
]

function getInclus(q) {
  const list = [...BASE_INCLUS]
  const foncs = q.fonc_principales || []
  if (foncs.some(f => f.startsWith('Formulaire de contact'))) list.push('Formulaire de contact')
  if (foncs.some(f => f.startsWith('Galerie photos'))) list.push('Galerie photos / portfolio')
  if ((q.auth || []).some(a => a.startsWith('Login email'))) list.push('Login email / mot de passe')
  if (q.seo === 'Basique (inclus)') list.push('Référencement SEO basique')
  if ((q.integrations || []).some(i => i.startsWith('Google Analytics'))) list.push('Google Analytics')
  if ((q.integrations || []).some(i => i.startsWith('Calendly'))) list.push('Intégration Calendly')
  return list
}

const FONCS_PRIX = {
  'Calendrier / prise de RDV (+290€)':  { label: 'Calendrier / prise de RDV', montant: 290 },
  'Système de réservation (+290€)':     { label: 'Système de réservation', montant: 290 },
  'Tableau de bord admin (+390€)':      { label: 'Tableau de bord admin', montant: 390 },
  'Espace client / membres (+390€)':    { label: 'Espace client / membres', montant: 390 },
  'Paiement en ligne (+290€)':          { label: 'Paiement en ligne (Stripe)', montant: 290 },
  'Carte interactive / Maps (+150€)':  { label: 'Carte interactive', montant: 150 },
  'Chat widget (+90€)':                 { label: 'Chat (Crisp / Tawk)', montant: 90 },
  'Newsletter (+90€)':                  { label: 'Newsletter', montant: 90 },
  'Notifications push (+150€)':         { label: 'Notifications push', montant: 150 },
  'Recherche avancée (+190€)':          { label: 'Recherche avancée', montant: 190 },
  'Géolocalisation (+150€)':            { label: 'Géolocalisation', montant: 150 },
  'Export PDF / rapports (+190€)':      { label: 'Export PDF / rapports', montant: 190 },
}

export function calculateDevis(q) {
  if (!q?.type_projet) return null

  const lignes = [{ label: LABEL_TYPE[q.type_projet] || q.type_projet, montant: PRIX_BASE[q.type_projet] || 0, base: true }]
  const add = (label, montant) => lignes.push({ label, montant })

  if (q.logo === 'Non – à créer (+190€)') add('Création de logo', 190)
  if (q.maquettes === 'Oui (+150€)') add('Maquettes Figma interactives', 150)
  if (q.blog === 'Oui (+120€)') add('Blog / actualités', 120)
  if ((q.langues || []).includes('Anglais (+190€)')) add('Version anglaise', 190)

  for (const f of (q.fonc_principales || [])) {
    if (FONCS_PRIX[f]) lignes.push({ ...FONCS_PRIX[f] })
  }

  if ((q.auth || []).includes('Google Sign-In (+120€)')) add('Authentification Google', 120)
  if ((q.auth || []).includes('Apple Sign-In (+120€)')) add('Authentification Apple', 120)
  if ((q.auth || []).includes('Rôles utilisateurs (+220€)')) add('Gestion des rôles', 220)
  if (q.livraison === 'Oui (+220€)') add('Gestion livraison / retours', 220)
  if (q.seo === 'Avancé (+150€)') add('SEO avancé', 150)

  for (const i of (q.integrations || [])) {
    if (INTEGRATIONS_PRIX[i]) lignes.push({ ...INTEGRATIONS_PRIX[i] })
  }

  const DELAI_SURCHARGE = { 'urgent': 0.40, '2-3-mois': 0.15 }
  const delaiRate = DELAI_SURCHARGE[q.delai]
  if (delaiRate) {
    const baseAvantDelai = lignes.reduce((s, l) => s + l.montant, 0)
    const surcharge = Math.round(baseAvantDelai * delaiRate)
    const label = q.delai === 'urgent'
      ? 'Supplément urgence (< 1 mois · +40%)'
      : 'Supplément délai serré (2-3 mois · +15%)'
    lignes.push({ label, montant: surcharge, urgence: true })
  }

  const sousTotal = lignes.reduce((s, l) => s + l.montant, 0)
  const acompte = Math.round(sousTotal * 0.3)

  return {
    lignes,
    inclus: getInclus(q),
    sousTotal,
    acompte,
    solde: sousTotal - acompte,
    maintenance: q.maintenance === 'Oui' ? 200 : 0,
  }
}
