/**
 * RÈGLE : chaque fichier Lottie n’est utilisé qu’UNE seule fois sur tout le site.
 * Pas d’alias vers le même JSON. Visuels alignés sur le texte de la section.
 */
export const LOTTIE = {
  scroll: '/lottie/scroll.json',

  devis: '/lottie/devis.json',
  estimate: '/lottie/estimate.json',
  contact: '/lottie/contact.json',
  process: '/lottie/process.json',
  pack: '/lottie/pack.json',
  pricing: '/lottie/pricing.json',
  review: '/lottie/review.json',
  about: '/lottie/identity.json', // persona profil « qui suis-je »
  faq: '/lottie/search.json', // loupe = questions / recherche de réponses
  guide: '/lottie/guide.json',
  projects: '/lottie/projects.json',

  // Services
  services: '/lottie/coding.json',
  web: '/lottie/design.json',
  shop: '/lottie/shop.json',
  tools: '/lottie/tools.json',
  // phone : mock animé (pas de Lottie — évite fusée hors sujet)

  // Tarifs synthèse + garanties home
  trust: '/lottie/trust.json', // persona accueil / engagement
  engagements: '/lottie/engagements.json', // revue / garanties
  consultation: '/lottie/consultation.json', // échange / process court

  // Erreurs
  crash: '/lottie/crash.json',
  error: '/lottie/error.json', // 404 illustré
  offline: '/lottie/offline.json',
}
