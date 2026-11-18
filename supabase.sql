create table public.inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  full_name text not null,
  company text,
  email text not null,
  phone text not null,
  service text not null,
  location text not null,
  project_type text not null,
  budget text,
  timeline text,
  description text not null,
  file_url text
);
alter table public.inquiries enable row level security;
create policy "anyone can submit" on public.inquiries for insert to anon with check (true);
insert into storage.buckets (id, name, public) values ('quote-files', 'quote-files', false);
create policy "anyone can upload" on storage.objects for insert to anon with check (bucket_id = 'quote-files');
