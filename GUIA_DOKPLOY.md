# Guía de Despliegue en Dokploy

Sigue estos pasos para poner tu nueva web Next.js en línea sin borrar la antigua todavía.

## 1. Crear la Aplicación
1. Entra en tu panel de Dokploy.
2. Ve a tu proyecto y haz clic en **"Create Service"** > **"Application"**.
3. **Name**: `estilsofa-next` (o algo para distinguirla de la vieja).
4. **Description**: Nueva web en Next.js.
5. Haz clic en **"Create"**.

## 2. Conectar GitHub
1. Dentro de la nueva aplicación, busca la sección **"Git"**.
2. **Repository URL**: `https://github.com/nordinrais/estilsofa-nextjs` (o selecciona tu repo si ya conectaste tu cuenta).
3. **Branch**: `main`.
4. **Build Path**: `/web-nextjs` (**IMPORTANTE**: Como tu proyecto está en una subcarpeta, debes poner esto).
5. Haz clic en **"Save"**.

## 3. Configurar Entorno (Environment)
1. Ve a la pestaña **"Environment"**.
2. Aquí debemos poner las claves de Supabase para que la web funcione. Añade estas dos variables:
   - `NEXT_PUBLIC_SUPABASE_URL`: (Pega tu URL de Supabase `https://...`)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: (Pega tu clave `sb_publishable_...` o `eyJ...`)
3. Haz clic en **"Save"**.

## 4. Configurar Build & Start (Settings)
Ve a la pestaña **"Settings"** (o "General") y asegúrate de configurar esto:
- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Port**: `3000`

## 5. Desplegar
1. Ve a la pestaña **"Deployments"**.
2. Haz clic en **"Deploy"**.
3. Espera unos minutos. Verás los logs de construcción.

## 6. Dominio de Prueba
1. Ve a la pestaña **"Domains"**.
2. Genera un dominio gratuito de Dokploy (ej: `estilsofa-next.tu-ip.traefik.me`) O añade un subdominio tuyo (ej: `beta.estilsofa.com`).
3. Abre ese enlace para verificar que la nueva web carga perfectamente.

---
**¡SOLO CUANDO TODO ESTÉ PERFECTO!** -> Procederemos al paso 7: Cambiar el dominio principal `estilsofa.com` de la aplicación antigua a esta nueva.
