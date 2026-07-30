-- =============================================
-- SOZ-DEV Admin : Schéma Supabase
-- À exécuter dans : Supabase > SQL Editor
-- =============================================

-- Table clients
create table if not exists clients (
  id          uuid        default gen_random_uuid() primary key,
  nom         text        not null,
  email       text        not null,
  telephone   text,
  entreprise  text,
  notes       text,
  created_at  timestamptz default now()
);

-- Table projets
create table if not exists projets (
  id            uuid        default gen_random_uuid() primary key,
  client_id     uuid        references clients(id) on delete cascade,
  nom           text        not null,
  statut        text        default 'questionnaire',
  questionnaire jsonb       default '{}',
  notes_admin   text,
  devis         jsonb,
  paiements     jsonb       default '{"acompte":false,"acompteDate":"","solde":false,"soldeDate":""}':jsonb,
  montant_total integer     default 0,
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);

-- Migration si la table existait déjà sans paiements
alter table projets add column if not exists paiements jsonb
  default '{"acompte":false,"acompteDate":"","solde":false,"soldeDate":""}':jsonb;

-- Index pour les performances
create index if not exists projets_client_id_idx on projets(client_id);
create index if not exists projets_updated_at_idx on projets(updated_at desc);

-- =============================================
-- SÉCURITÉ : seul VOTRE email Auth a accès
-- Désactiver aussi : Authentication > Providers >
-- Email > "Enable sign ups" = OFF
-- =============================================

alter table clients enable row level security;
alter table projets enable row level security;

-- Révoquer tout accès anonyme
revoke all on table clients from anon;
revoke all on table projets from anon;
grant select, insert, update, delete on table clients to authenticated;
grant select, insert, update, delete on table projets to authenticated;

drop policy if exists "Admin clients" on clients;
drop policy if exists "Admin projets" on projets;
drop policy if exists "Admin only clients" on clients;
drop policy if exists "Admin only projets" on projets;

-- ⚠️ Remplacez l’email si besoin (doit matcher le user Auth Supabase)
create policy "Admin only clients" on clients
  for all to authenticated
  using ((auth.jwt() ->> 'email') = 'sofyan.devpro@gmail.com')
  with check ((auth.jwt() ->> 'email') = 'sofyan.devpro@gmail.com');

create policy "Admin only projets" on projets
  for all to authenticated
  using ((auth.jwt() ->> 'email') = 'sofyan.devpro@gmail.com')
  with check ((auth.jwt() ->> 'email') = 'sofyan.devpro@gmail.com');
