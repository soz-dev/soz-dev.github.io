-- =============================================
-- HOTFIX sécurité : restreindre l’admin à 1 email
-- À coller dans Supabase > SQL Editor > Run
-- =============================================

drop policy if exists "Admin clients" on clients;
drop policy if exists "Admin projets" on projets;
drop policy if exists "Admin only clients" on clients;
drop policy if exists "Admin only projets" on projets;

revoke all on table clients from anon;
revoke all on table projets from anon;

create policy "Admin only clients" on clients
  for all to authenticated
  using ((auth.jwt() ->> 'email') = 'sofyan.devpro@gmail.com')
  with check ((auth.jwt() ->> 'email') = 'sofyan.devpro@gmail.com');

create policy "Admin only projets" on projets
  for all to authenticated
  using ((auth.jwt() ->> 'email') = 'sofyan.devpro@gmail.com')
  with check ((auth.jwt() ->> 'email') = 'sofyan.devpro@gmail.com');
