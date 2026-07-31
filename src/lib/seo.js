const SITE = 'https://soz-dev.com'
export const DEFAULT_OG = `${SITE}/logo-light.png`
export const SITE_NAME = 'SOZ-DEV'
export const SITE_URL = SITE

/** Schema.org pour SOZ_DEV — infos publiques du site. */
export const LOCAL_BUSINESS_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'LocalBusiness'],
  '@id': `${SITE}/#organization`,
  name: 'SOZ_DEV',
  alternateName: 'SOZ-DEV',
  url: SITE,
  email: 'sofyan.devpro@gmail.com',
  description:
    'Développeur freelance web & iOS. Sites vitrine, boutiques Stripe, apps React et Swift. Devis en ligne, prix sous le marché.',
  founder: {
    '@type': 'Person',
    name: 'Sofyan Zarouri',
    url: SITE,
    sameAs: [
      'https://github.com/soz-dev',
      'https://www.linkedin.com/in/sofyan-zarouri/',
    ],
  },
  areaServed: {
    '@type': 'Country',
    name: 'France',
  },
  priceRange: '€€',
  image: DEFAULT_OG,
  sameAs: [
    'https://github.com/soz-dev',
    'https://www.linkedin.com/in/sofyan-zarouri/',
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Site vitrine / page d’accueil',
        description: 'Sites web modernes à partir de 390 €',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Application iOS',
        description: 'Apps iPhone natives à partir de 2 990 €',
      },
    },
  ],
}

export const PAGE_SEO = {
  home: {
    title: 'Sofyan Zarouri, développeur web & iOS | SOZ-DEV',
    description:
      'Sites & apps iOS qui convertissent, sans prix agence. À partir de 390 €. Devis en ligne, délais clairs. Freelance basé en France.',
    path: '/',
  },
  services: {
    title: 'Services web & apps iOS',
    description:
      'Vitrines, boutiques Stripe, outils métier et apps iPhone natives. De l’idée à la mise en ligne, avec devis transparent.',
    path: '/services',
  },
  projets: {
    title: 'Projets & réalisations',
    description:
      'LocaZen, Motastic, Dev Mastery… Sites et apps iOS déjà en ligne. Découvrez des cas concrets avant de demander un devis.',
    path: '/projets',
  },
  tarifs: {
    title: 'Tarifs & estimateur',
    description:
      'Grille claire : page d’accueil dès 390 €, vitrine dès 690 €, apps iOS dès 2 990 €. Estimateur en quelques clics puis devis détaillé.',
    path: '/tarifs',
  },
  devis: {
    title: 'Demander un devis',
    description:
      'Questionnaire en ligne, estimation au fil des réponses, acompte 30 %. Sans engagement. Réponse sous 24 h.',
    path: '/devis',
  },
  about: {
    title: 'À propos de Sofyan Zarouri',
    description:
      'Développeur freelance web & iOS. Interlocuteur unique, prix affichés, FAQ sur délais, acompte et propriété du code.',
    path: '/a-propos',
  },
  contact: {
    title: 'Contact',
    description:
      'Écrivez à sofyan.devpro@gmail.com ou utilisez le devis en ligne. Réponse sous 24 h.',
    path: '/contact',
  },
  notFound: {
    title: 'Page introuvable',
    description: 'Cette page n’existe pas. Retournez à l’accueil SOZ-DEV.',
    path: '/404',
    noindex: true,
  },
}
