
import { BLOG_POSTS } from './blog-data';

export type SearchResult = {
    id: string;
    title: string;
    category: string;
    url: string;
    type: 'product' | 'blog' | 'page';
};

// Simulated Product Data (will be replaced by real DB later)
const PRODUCTS = [
    { id: 'p1', title: 'Modelo Tokio', category: 'Sofá Relax', url: '/nuestros-sofas/relax' },
    { id: 'p2', title: 'Modelo Berlín', category: 'Sofá Cama', url: '/nuestros-sofas/cama' },
    { id: 'p3', title: 'Sillón Picasso', category: 'Sillón Relax', url: '/oferta' }, // Special Offer
    { id: 'p4', title: 'Modelo París', category: 'Rinconera', url: '/nuestros-sofas/rinconeras' },
    { id: 'p5', title: 'Modelo Niza', category: 'Deslizante', url: '/nuestros-sofas/deslizantes' },
    { id: 'p6', title: 'Sillón Relax TOUS', category: 'Sillón Relax', url: '/oferta' },
];

const PAGES = [
    { id: 'pg1', title: 'Sobre Nosotros', category: 'Empresa', url: '/sobre-nosotros' },
    { id: 'pg2', title: 'Visítanos / Contacto', category: 'Contacto', url: '/visitanos' },
    { id: 'pg3', title: 'Catálogo Completo', category: 'Navegación', url: '/nuestros-sofas' },
];

export const getSearchResults = (query: string): SearchResult[] => {
    if (!query || query.length < 2) return [];

    const lowerQuery = query.toLowerCase();

    // 1. Search in Products
    const productResults: SearchResult[] = PRODUCTS
        .filter(p => p.title.toLowerCase().includes(lowerQuery) || p.category.toLowerCase().includes(lowerQuery))
        .map(p => ({ ...p, type: 'product' }));

    // 2. Search in Blog
    const blogResults: SearchResult[] = BLOG_POSTS
        .filter(post => post.title.toLowerCase().includes(lowerQuery) || post.description.toLowerCase().includes(lowerQuery))
        .map(post => ({
            id: post.slug,
            title: post.title,
            category: 'Blog',
            url: `/blog/${post.slug}`,
            type: 'blog'
        }));

    // 3. Search in Static Pages
    const pageResults: SearchResult[] = PAGES
        .filter(p => p.title.toLowerCase().includes(lowerQuery))
        .map(p => ({ ...p, type: 'page' }));

    return [...productResults, ...blogResults, ...pageResults].slice(0, 8); // Limit to 8 results
};
