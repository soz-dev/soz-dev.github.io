# SOZ-DEV. soz-dev.com

Site portfolio & freelance (React + Vite) déployé sur GitHub Pages : [soz-dev.com](https://soz-dev.com).

## Stack

- React 19, Vite 8, Tailwind CSS 4
- Framer Motion, Lucide
- Admin : Supabase Auth + tables `clients` / `projets`
- PDF devis : jsPDF

## Développement

```bash
cp .env.local.example .env.local   # renseigner Supabase + Web3Forms
npm install
npm run dev
```

- Site public : `http://localhost:5173/`
- Admin : `http://localhost:5173/?mode=admin`

## Variables d’environnement

| Variable | Rôle |
|----------|------|
| `VITE_ADMIN_SUPABASE_URL` | URL du projet Supabase |
| `VITE_ADMIN_SUPABASE_ANON_KEY` | Clé anon (publique) |
| `VITE_WEB3FORMS_ACCESS_KEY` | Access Key [Web3Forms](https://web3forms.com) (contact + devis) |
| `VITE_CONTACT_EMAIL` | Destinataire affiché (défaut `sofyan.devpro@gmail.com`) |

En production, les mêmes secrets sont injectés dans `.github/workflows/deploy.yml`.

## Envoi email (Contact + Devis)

Sans serveur (GitHub Pages), l’envoi passe par **Web3Forms** (gratuit) :

1. Créer une Access Key sur [web3forms.com](https://web3forms.com) avec l’email **sofyan.devpro@gmail.com**.
2. Mettre `VITE_WEB3FORMS_ACCESS_KEY=…` dans `.env.local`.
3. Ajouter le secret GitHub Actions `VITE_WEB3FORMS_ACCESS_KEY` (et optionnellement `VITE_CONTACT_EMAIL`).

Sans clé : message d’aide en DEV ; en production, erreur claire à l’envoi.

## Admin Supabase (une fois)

1. Créer un projet Supabase et exécuter [`supabase/schema.sql`](supabase/schema.sql) dans le SQL Editor.
2. Auth → créer un utilisateur admin ; **désactiver les inscriptions publiques**.
3. Remplir `.env.local` et les secrets GitHub Actions `VITE_ADMIN_SUPABASE_*`.

## Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build production (`dist/`) |
| `npm run preview` | Prévisualiser le build |
| `npm run lint` | Oxlint |

## Déploiement

Push sur `main` → workflow **Deploy to GitHub Pages**. Domaine custom via `public/CNAME` (`soz-dev.com`).

### HTTPS (obligatoire côté GitHub)

Le code utilise `https://soz-dev.com` (canonical, OG, sitemap, JSON-LD) et un redirect client HTTP→HTTPS sur `soz-dev.com` / `www` (pas sur localhost).

**À cocher manuellement** (non fiable via API) :

1. Repo → **Settings** → **Pages**
2. Custom domain : `soz-dev.com` (doit matcher `public/CNAME`)
3. Cocher **Enforce HTTPS** (disponible une fois le certificat Let’s Encrypt émis)

Sans cette case, les visiteurs peuvent encore ouvrir `http://soz-dev.com` (navigateur « Non sécurisé »).

### DNS (apex + www)

| Hôte | Type | Valeur |
|------|------|--------|
| `@` (apex) | A | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| `www` | CNAME | `soz-dev.github.io` |

GitHub redirige en général `www` ↔ apex selon le domaine principal défini dans Pages. Après un changement DNS, attendre la propagation puis vérifier que **Enforce HTTPS** n’est plus grisé.
