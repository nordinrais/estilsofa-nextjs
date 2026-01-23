
import { MetadataRoute } from 'next';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { BLOG_POSTS } from '@/data/blog-data';

const BASE_URL = 'https://estilsofa.com';

export default function sitemap(): MetadataRoute.Sitemap {
    // 1. Páginas estáticas principales
    const staticPages = [
        '',
        '/nuestros-sofas',
        '/sobre-nosotros',
        '/visitanos',
        '/oferta',
        '/blog',
        '/politica-privacidad',
        '/politica-cookies',
        '/aviso-legal',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // 2. Páginas de Categorías de Sofás
    // Mapeamos las claves de CATEGORIES (relax, deslizantes...) a la URL real
    // OJO: En products.ts, la clave es 'relax' pero el folder es 'sofas-relax'.
    // Según search-data.tsx, la URL se construye usando la CLAVE del objeto CATEGORIES, no el folder.
    // Ejemplo: /nuestros-sofas/relax (NO /nuestros-sofas/sofas-relax)

    const categoryPages = Object.keys(CATEGORIES).map((key) => ({
        url: `${BASE_URL}/nuestros-sofas/${key}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // 3. Páginas de Productos Individuales
    // La URL en search-data es: /nuestros-sofas/[categorySlug]/[productPath]
    // Necesitamos hacer ingeniería inversa del "folder" al "categorySlug"

    // Mapa inverso auxiliar: 'sofas-relax' -> 'relax'
    const folderToSlugMap: Record<string, string> = {
        'sofas-relax': 'relax',
        'sofas-deslizantes': 'deslizantes',
        'sofas-cama': 'cama',
        'sillones-relax': 'sillones',
        'sofas-fijos': 'fijos',
        'sillones-fijos': 'sillones-fijos'
    };

    const productPages = Object.values(PRODUCTS).map((product) => {
        // Si el folder del producto tiene un mapeo (ej: sofas-relax -> relax), usamos 'relax'.
        // Si no (ej: sillones-fijos), usamos el mismo folder.
        const categorySlug = folderToSlugMap[product.folder] || product.folder;

        return {
            url: `${BASE_URL}/nuestros-sofas/${categorySlug}/${product.path}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        };
    });

    // 4. Páginas del Blog
    const blogPages = BLOG_POSTS.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.publishDate), // Convertir string fecha a Date (aproximado)
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticPages, ...categoryPages, ...productPages, ...blogPages];
}
