create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  full_name text not null,
  email text not null,
  phone text,
  message text not null
);
alter table public.contact_messages enable row level security;
create policy "anyone can send a message" on public.contact_messages for insert to anon with check (true);
