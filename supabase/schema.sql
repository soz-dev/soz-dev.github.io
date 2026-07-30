-- =============================================
-- SOZ-DEV Admin — Schéma Supabase
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
  montant_total integer     default 0,
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);

-- Index pour les performances
create index if not exists projets_client_id_idx on projets(client_id);
create index if not exists projets_updated_at_idx on projets(updated_at desc);

-- Row Level Security (seul l'utilisateur authentifié peut accéder)
alter table clients enable row level security;
alter table projets enable row level security;

create policy "Admin clients" on clients
  for all to authenticated using (true) with check (true);

create policy "Admin projets" on projets
  for all to authenticated using (true) with check (true);
