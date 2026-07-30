// Sections du questionnaire
// options select : 'value|Label' ou juste 'Label' (value = label)
// options radio/multiselect : chaînes simples

import { parseOpt } from './formatUtils'

export { parseOpt }

export const SECTIONS = [
  {
    id: 'projet',
    title: 'Le projet',
    emoji: '🎯',
    questions: [
      {
        id: 'type_projet', label: 'Type de projet', type: 'select', required: true,
        options: [
          'site-vitrine|Site vitrine (1 page)',
          'site-vitrine-multi|Site vitrine multi-pages',
          'site-pro|Site professionnel',
          'ecommerce|E-commerce',
          'app-web|Application web',
          'app-ios|Application iOS',
        ],
      },
      { id: 'objectif', label: 'Objectif principal', type: 'textarea', placeholder: 'Présenter mon activité, vendre en ligne, gérer des réservations...' },
      { id: 'cible', label: 'Cible / audience', type: 'text', placeholder: 'Ex: artisans locaux, jeunes entrepreneurs...' },
      {
        id: 'delai', label: 'Délai souhaité', type: 'select',
        options: ['urgent|Urgent (< 1 mois) · +40%', '2-3-mois|2-3 mois · +15%', '3-6-mois|3-6 mois', 'flexible|Flexible'],  
      },
      {
        id: 'budget', label: 'Budget indicatif', type: 'select',
        options: ['<1000|< 1 000€', '1000-2000|1 000€ – 2 000€', '2000-5000|2 000€ – 5 000€', '>5000|> 5 000€', 'nsp|Non défini'],
      },
    ],
  },
  {
    id: 'design',
    title: 'Design & identité',
    emoji: '🎨',
    questions: [
      {
        id: 'style', label: 'Style visuel souhaité', type: 'multiselect',
        options: ['Minimaliste', 'Moderne', 'Corporate', 'Créatif', 'Luxe / Premium', 'Coloré / Playful', 'Dark / Tech', 'Naturel / Eco'],
      },
      { id: 'couleurs', label: 'Couleurs souhaitées', type: 'text', placeholder: 'Ex: bleu marine, blanc cassé, touches dorées...' },
      { id: 'exemples_design', label: 'Sites ou apps appréciés', type: 'textarea', placeholder: 'URLs ou noms de sites inspirants...' },
      { id: 'maquettes', label: 'Maquettes Figma interactives', type: 'radio', options: ['Oui (+290€)', 'Non – intégration directe'] },
      { id: 'logo', label: 'Logo', type: 'radio', options: ['Oui, j\'ai un logo', 'Non – à créer (+420€)', 'Partiel – à refaire'] },
      { id: 'charte', label: 'Charte graphique', type: 'radio', options: ['Oui, complète', 'Partielle', 'Non'] },
    ],
  },
  {
    id: 'contenu',
    title: 'Contenu',
    emoji: '📝',
    questions: [
      {
        id: 'nb_pages', label: 'Nombre de pages / écrans', type: 'select',
        options: ['1|1 page (landing)', '2-5|2 à 5 pages', '6-10|6 à 10 pages', '10+|Plus de 10 pages', 'nsp|Non défini'],
      },
      { id: 'contenu_existant', label: 'Textes & images disponibles', type: 'radio', options: ['Oui, tout est prêt', 'Partiellement', 'Non, à créer'] },
      {
        id: 'langues', label: 'Langues', type: 'multiselect',
        options: ['Français', 'Anglais (+420€)', 'Espagnol', 'Autre'],
      },
      { id: 'blog', label: 'Blog / actualités', type: 'radio', options: ['Oui (+280€)', 'Non'] },
    ],
  },
  {
    id: 'fonctionnalites',
    title: 'Fonctionnalités',
    emoji: '⚙️',
    questions: [
      {
        id: 'fonc_principales', label: 'Fonctionnalités souhaitées', type: 'multiselect',
        options: [
          'Formulaire de contact (inclus)',
          'Galerie photos / portfolio (inclus)',
          'Calendrier / prise de RDV (+560€)',
          'Système de réservation (+560€)',
          'Tableau de bord admin (+700€)',
          'Espace client / membres (+700€)',
          'Paiement en ligne (+560€)',
          'Carte interactive / Maps (+280€)',
          'Chat en direct (+420€)',
          'Newsletter (+210€)',
          'Notifications push (+280€)',
          'Recherche avancée (+420€)',
          'Géolocalisation (+280€)',
          'Export PDF / rapports (+420€)',
        ],
      },
      {
        id: 'auth', label: 'Authentification', type: 'multiselect',
        options: [
          'Non nécessaire',
          'Login email / mot de passe (inclus avec espace client)',
          'Google Sign-In (+210€)',
          'Apple Sign-In (+210€)',
          'Rôles utilisateurs (+420€)',
        ],
      },
      { id: 'fonc_autres', label: 'Autres fonctionnalités / idées', type: 'textarea', placeholder: 'Tout ce qui n\'est pas dans la liste...' },
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    emoji: '🛒',
    conditional: (q) => ['ecommerce', 'app-web'].includes(q.type_projet),
    questions: [
      {
        id: 'nb_produits', label: 'Nombre de produits', type: 'select',
        options: ['1-20|1 à 20', '21-100|21 à 100', '100-500|100 à 500', '500+|500+'],
      },
      { id: 'paiement', label: 'Solutions de paiement', type: 'multiselect', options: ['Stripe', 'PayPal', 'Apple Pay', 'Google Pay', 'Virement'] },
      { id: 'livraison', label: 'Gestion livraison / retours', type: 'radio', options: ['Oui (+420€)', 'Non'] },
    ],
  },
  {
    id: 'technique',
    title: 'Technique',
    emoji: '🔧',
    questions: [
      { id: 'hebergement', label: 'Hébergement existant', type: 'radio', options: ['Oui', 'Non'] },
      { id: 'hebergement_details', label: 'Précisions hébergement', type: 'text', placeholder: 'Ex: OVH, Vercel, Hostinger...' },
      { id: 'domaine', label: 'Nom de domaine', type: 'radio', options: ['Oui, existant', 'Non, à acheter (~12€/an)'] },
      {
        id: 'integrations', label: 'Intégrations souhaitées', type: 'multiselect',
        options: ['Google Analytics (inclus)', 'Mailchimp / Brevo (+210€)', 'Calendly (inclus)', 'CRM existant (+420€)', 'Zapier (+280€)', 'Autre'],
      },
      { id: 'maintenance', label: 'Maintenance mensuelle (+200€/mois)', type: 'radio', options: ['Oui', 'Non'] },
      { id: 'seo', label: 'SEO / référencement', type: 'radio', options: ['Basique (inclus)', 'Avancé (+280€)', 'Non nécessaire'] },
    ],
  },
  {
    id: 'complementaire',
    title: 'Informations complémentaires',
    emoji: '💬',
    questions: [
      { id: 'concurrents', label: 'Sites concurrents à observer', type: 'textarea', placeholder: 'URLs ou noms...' },
      { id: 'points_forts', label: 'Points forts à mettre en avant', type: 'textarea', placeholder: 'Ce qui vous différencie de la concurrence...' },
      { id: 'contraintes', label: 'Contraintes particulières', type: 'textarea', placeholder: 'RGPD, accessibilité, délais légaux, contraintes techniques...' },
      { id: 'autres_infos', label: 'Autres informations importantes', type: 'textarea', placeholder: 'Tout ce qui n\'a pas été couvert ci-dessus...' },
    ],
  },
]

function formatAnswer(q, val) {
  if (!val || (Array.isArray(val) && val.length === 0)) return '___________'
  if (Array.isArray(val)) return val.join(', ')
  if (q.type === 'select') {
    const found = (q.options || []).map(parseOpt).find(o => o.value === val)
    return found ? found.label : val
  }
  return val
}

function formatOptions(q) {
  if (q.type === 'select' || q.type === 'radio') {
    return (q.options || []).map(o => parseOpt(o).label).join(' / ')
  }
  if (q.type === 'multiselect') {
    return (q.options || []).map(o => `[ ] ${parseOpt(o).label}`).join('\n       ')
  }
  return ''
}

export function generateEmailBody(client, projet, questionnaire = {}) {
  const lines = []
  const prenom = client.nom?.split(' ')[0] || client.nom || 'vous'
  lines.push(`Bonjour ${prenom},`, '')
  lines.push(`Suite à notre échange concernant votre projet "${projet.nom || 'à définir'}", voici le questionnaire détaillé.`)
  lines.push('Merci de compléter chaque champ et de me renvoyer cet email.')
  lines.push('Je reviendrai vers vous rapidement pour fixer un appel.', '')
  lines.push('À très bientôt,')
  lines.push('Sofyan – soz-dev.com', '')
  lines.push('═'.repeat(50))
  lines.push(`QUESTIONNAIRE PROJET : ${(projet.nom || 'Nouveau projet').toUpperCase()}`)
  lines.push('═'.repeat(50))

  const visibleSections = SECTIONS.filter(s => !s.conditional || s.conditional(questionnaire))
  for (const section of visibleSections) {
    lines.push('', `${section.emoji}  ${section.title.toUpperCase()}`)
    lines.push('─'.repeat(40))
    for (const q of section.questions) {
      const val = questionnaire[q.id]
      const answer = formatAnswer(q, val)
      if (q.type === 'multiselect') {
        lines.push(`▸ ${q.label} :`)
        lines.push(`       ${formatOptions(q)}`)
        lines.push(`       Sélection : ${Array.isArray(val) && val.length ? val.join(', ') : '___________'}`)
      } else if (q.type === 'select' || q.type === 'radio') {
        lines.push(`▸ ${q.label} (${formatOptions(q)}) : ${answer}`)
      } else {
        lines.push(`▸ ${q.label} : ${answer}`)
      }
    }
  }

  lines.push('', '═'.repeat(50))
  lines.push('Merci pour vos réponses !')
  return lines.join('\n')
}
