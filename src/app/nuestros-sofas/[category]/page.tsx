import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CATEGORIES, PRODUCTS } from '@/data/products';

// Helper to get products for a category
const getProductsByCategory = (folder: string) => {
    return Object.values(PRODUCTS).filter(product => product.folder === folder);
};

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
    const { category: categorySlug } = await params;
    const category = CATEGORIES[categorySlug as keyof typeof CATEGORIES];

    if (!category) {
        return {
            title: 'Categoría no encontrada | EstilSofá'
        };
    }

    return {
        title: `${category.title} | EstilSofá`,
        description: category.description,
    };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category: categorySlug } = await params;
    const category = CATEGORIES[categorySlug as keyof typeof CATEGORIES];

    if (!category) {
        notFound();
    }

    const products = getProductsByCategory(category.folder);

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="mb-12">
                <Link href="/nuestros-sofas" className="text-gray-500 hover:text-black mb-4 inline-block transition-colors">
                    ← Volver a Categorías
                </Link>
                <h1 className="text-4xl font-bold mb-2 font-heading text-[#0F172A]">{category.title}</h1>
                <p className="text-xl text-gray-600 max-w-3xl">{category.description}</p>
            </div>

            {products.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <Link
                            key={index}
                            href={`/nuestros-sofas/${categorySlug}/${product.path}`}
                            className="group block bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className="relative h-[300px] overflow-hidden bg-gray-100">
                                <Image
                                    src={`/assets/${product.folder}/${product.path}/${product.images[0]}`}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {product.options && product.options.length > 0 && (
                                    <div className="absolute bottom-3 left-3 flex gap-2">
                                        <span className="bg-white/90 backdrop-blur-sm text-xs font-bold px-2 py-1 rounded text-gray-800 shadow-sm">
                                            {product.options.length} opciones
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#D97706] transition-colors mb-2">
                                    {product.title}
                                </h3>
                                {/* Assuming price might not be on all products, checking just in case */}
                                {'price' in product && (
                                    <p className="text-[#D97706] font-semibold text-lg">
                                        {(product as any).price}
                                    </p>
                                )}
                                <div className="mt-4 flex items-center text-sm text-gray-500 font-medium group-hover:text-[#D97706] transition-colors">
                                    Ver detalles <span className="ml-1">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="py-20 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                    <p className="text-xl text-gray-500">No hay productos disponibles en esta categoría actualmente.</p>
                    <Link href="/nuestros-sofas" className="mt-4 inline-block text-[#D97706] font-semibold hover:underline">
                        Ver otras categorías
                    </Link>
                </div>
            )}
        </div>
    );
}
