-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Create 'products' table
create table products (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  slug text not null unique,
  description text,
  price numeric,
  category text not null,
  image_url text,
  features text[], -- Array of strings for features
  is_offer boolean default false
);

-- 2. Create 'posts' table (Blog)
create table posts (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  slug text not null unique,
  excerpt text,
  content text, -- HTML or Markdown content
  cover_image text,
  author text default 'EstilSofa Team',
  published boolean default true
);

-- 3. Create 'leads' table (Contact Forms)
create table leads (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text,
  phone text,
  message text,
  source text default 'web', -- 'web', 'landing-offer', etc.
  status text default 'new' -- 'new', 'contacted', 'closed'
);

-- 4. Enable Row Level Security (RLS)
alter table products enable row level security;
alter table posts enable row level security;
alter table leads enable row level security;

-- 5. Create Policies (Permissions)

-- Public read access for Products and Posts
create policy "Allow public read access on products"
  on products for select using (true);

create policy "Allow public read access on posts"
  on posts for select using (true);

-- Allow anyone to INSERT leads (for public forms)
create policy "Allow public insert on leads"
  on leads for insert with check (true);

-- Only Authenticated users can View Leads (Admin dashboard later)
-- For now, we allow select for debugging, but in prod should be stricter.
create policy "Allow public select on leads"
  on leads for select using (true);


-- 6. Insert Mock Data (Optional - to start with something)

-- Seed Products
insert into products (title, slug, category, price, is_offer, image_url) values
('Modelo Tokio', 'modelo-tokio', 'Sofá Relax', 1299, false, '/assets/sofas/tokio/tokio-1.jpg'),
('Sillón Picasso', 'sillon-picasso', 'Sillón Relax', 899, true, '/assets/sillon-picasso/picasso-1.jpg'),
('Modelo Berlín', 'modelo-berlin', 'Sofá Cama', 1050, false, '/assets/sofas/berlin/berlin-1.jpg');

-- Seed Posts
insert into posts (title, slug, excerpt, content, cover_image) values
('Cómo limpiar tu sofá de tela', 'como-limpiar-sofa-tela', 'Guía completa para mantener tu sofá como nuevo.', '<p>Contenido del artículo...</p>', '/assets/blog/limpieza.jpg'),
('Sillón Relax Manual vs Eléctrico', 'sillon-relax-manual-vs-electrico', 'Descubre cuál se adapta mejor a tus necesidades.', '<p>Contenido del artículo...</p>', '/assets/blog/comparativa.jpg');
