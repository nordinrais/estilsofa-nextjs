# EstilSofa - Next.js Website

Sitio web moderno de EstilSofa construido con Next.js 15, TypeScript y Tailwind CSS.

## 🚀 Tecnologías

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Base de Datos**: Supabase
- **Hosting**: Vercel

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus credenciales de Supabase

# Iniciar servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## 🗂️ Estructura del Proyecto

```
src/
├── app/                    # Rutas de Next.js
│   ├── page.tsx           # Home
│   ├── sobre-nosotros/    # Página "Sobre Nosotros"
│   ├── nuestros-sofas/    # Catálogo
│   │   └── [category]/    # Categoría dinámica
│   │       └── [id]/      # Producto dinámico
│   ├── blog/              # Blog
│   │   └── [slug]/        # Artículo dinámico
│   ├── visitanos/         # Contacto
│   └── oferta/            # Landing page
├── components/            # Componentes reutilizables
├── data/                  # Datos de productos
└── lib/                   # Utilidades (Supabase client)
```

## 📊 Base de Datos (Supabase)

### Tablas

**contact_submissions**: Formularios de contacto
**newsletter_subscriptions**: Suscripciones al newsletter

Ver `deployment_plan.md` para SQL de creación de tablas.

## 🛠️ Comandos

```bash
npm run dev      # Desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linter
```

## 🌐 Deployment

Este proyecto está configurado para deployment en **Vercel**.

1. Push a GitHub
2. Conectar repo en Vercel
3. Configurar variables de entorno en Vercel Dashboard
4. Deploy automático

## 📝 Variables de Entorno

Ver `.env.example` para las variables requeridas.

## 📄 Licencia

© 2026 EstilSofa. Todos los derechos reservados.
