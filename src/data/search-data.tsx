
import { BLOG_POSTS } from './blog-data';
import { PRODUCTS, CATEGORIES } from './products';

export type SearchResult = {
    id: string;
    title: string;
    category: string;
    url: string;
    type: 'product' | 'blog' | 'page';
};

// Map folder to category slug for URL building
const folderToCategorySlug: Record<string, string> = {
    'sofas-relax': 'relax',
    'sofas-deslizantes': 'deslizantes',
    'sofas-cama': 'cama',
    'sillones-relax': 'sillones',
    'sofas-fijos': 'fijos',
    'sillones-fijos': 'sillones-fijos'
};

const PAGES = [
    { id: 'pg1', title: 'Sobre Nosotros', category: 'Empresa', url: '/sobre-nosotros' },
    { id: 'pg2', title: 'Visítanos / Contacto', category: 'Contacto', url: '/visitanos' },
    { id: 'pg3', title: 'Catálogo Completo', category: 'Navegación', url: '/nuestros-sofas' },
    { id: 'pg4', title: 'Ofertas', category: 'Promociones', url: '/oferta' },
];

export const getSearchResults = (query: string): SearchResult[] => {
    if (!query || query.length < 2) return [];

    const lowerQuery = query.toLowerCase();

    // 1. Search in Products (from real data)
    const productResults: SearchResult[] = Object.entries(PRODUCTS)
        .filter(([key, p]) =>
            p.title.toLowerCase().includes(lowerQuery) ||
            key.toLowerCase().includes(lowerQuery)
        )
        .map(([key, p]) => {
            const categorySlug = folderToCategorySlug[p.folder] || p.folder;
            return {
                id: key,
                title: p.title,
                category: CATEGORIES[categorySlug as keyof typeof CATEGORIES]?.title || p.folder,
                url: `/nuestros-sofas/${categorySlug}/${p.path}`,
                type: 'product' as const
            };
        });

    // 2. Search in Blog
    const blogResults: SearchResult[] = BLOG_POSTS
        .filter(post => post.title.toLowerCase().includes(lowerQuery) || post.description.toLowerCase().includes(lowerQuery))
        .map(post => ({
            id: post.slug,
            title: post.title,
            category: 'Blog',
            url: `/blog/${post.slug}`,
            type: 'blog' as const
        }));

    // 3. Search in Static Pages
    const pageResults: SearchResult[] = PAGES
        .filter(p => p.title.toLowerCase().includes(lowerQuery))
        .map(p => ({ ...p, type: 'page' as const }));

    return [...productResults, ...blogResults, ...pageResults].slice(0, 8); // Limit to 8 results
};
