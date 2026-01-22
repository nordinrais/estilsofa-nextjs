# Guía de Configuración de Supabase

Sigue estos pasos para crear tu backend en 5 minutos:

## 1. Crear Cuenta y Proyecto
1. Ve a [supabase.com](https://supabase.com/) y haz clic en "Start your project".
2. Regístrate con GitHub (recomendado) o correo electrónico.
3. Haz clic en **"New Project"**.
4. Elige tu organización (se crea una por defecto).
5. Rellena los datos:
   - **Name**: `estilsofa-web`
   - **Database Password**: Genera una segura y **GUÁRDALA** (la necesitarás si usas conexión directa, aunque nosotros usaremos API).
   - **Region**: Elige `Europe (Frankfurt)` o la más cercana a España para mejor latencia.
   - **Plan**: Free (Gratis).
6. Haz clic en **"Create new project"**. Espera unos minutos a que se configure.

## 2. Obtener Credenciales (API Keys)
Una vez el proyecto esté activo (verde):
1. En el menú lateral izquierdo, ve a **Settings** (icono de engranaje ⚙️) > **API**.
2. Necesitamos dos valores de la sección "Project URL" y "Project API keys":
   - **Project URL**: (ej: `https://xyzxyz.supabase.co`)
   - **anon public** key: (es una cadena larga que empieza por `eyJ...`).

## 3. Entregar Credenciales
Copia esos dos valores y envíamelos por el chat. Yo crearé el archivo `.env.local` seguro en tu proyecto.

---

*Nota: No te preocupes por crear las tablas todavía, yo tengo un script preparado para crear toda la estructura (Productos, Blog, Contactos) automáticamente una vez tenga acceso.*
