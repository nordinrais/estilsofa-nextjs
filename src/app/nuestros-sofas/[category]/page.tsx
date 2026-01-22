import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Mock Data - In a real app this would come from Supabase or a data file
const categoriesData: Record<string, { title: string; description: string; products: any[] }> = {
    "relax": {
        title: "Sofás Relax",
        description: "La combinación perfecta entre tecnología y descanso.",
        products: [
            { id: "afrodita", name: "Modelo Afrodita", price: "Desde 899€", image: "/assets/hero/sofa-afrodita-tapizado-claro-pata-metalica-ambiente.webp" },
            { id: "picaso", name: "Sillón Picaso", price: "Desde 499€", image: "/assets/categorias-de-sofas/categoria-sillones-relax/sillon-relax-levanta-personas-electrico-para-mayores-barato.webp" }
        ]
    },
    "deslizantes": {
        title: "Sofás Deslizantes",
        description: "Gana espacio y comodidad con nuestros sistemas deslizantes.",
        products: [
            { id: "tokio", name: "Modelo Tokio", price: "Desde 1099€", image: "/assets/categorias-de-sofas/categoria-sofas-deslizantes/sofa-con-asientos-deslizantes-y-cabezales-reclinables-oferta.webp" }
        ]
    },
    // Add other categories as needed or handle default
};

export default function CategoryPage({ params }: { params: { category: string } }) {
    const categoryId = params.category;
    const category = categoriesData[categoryId];

    if (!category) {
        // Ideally check against valid categories, if not found show generic or 404
        // For now, let's allow a fallback for mocked viewing
        return (
            <div className="container mx-auto px-6 py-12 text-center">
                <h1 className="text-4xl font-bold mb-4 font-heading capitalize">{categoryId.replace('-', ' ')}</h1>
                <p className="text-xl text-gray-600 mb-8">Mostrando productos de la categoría {categoryId}...</p>
                <div className="p-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                    <p className="text-gray-500">Próximamente: Lista completa de productos para esta categoría.</p>
                    <Link href="/nuestros-sofas" className="text-blue-600 hover:underline mt-4 inline-block">← Volver a Categorías</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="mb-12">
                <Link href="/nuestros-sofas" className="text-gray-500 hover:text-black mb-4 inline-block transition-colors">← Volver a Categorías</Link>
                <h1 className="text-4xl font-bold mb-2 font-heading text-[#0F172A]">{category.title}</h1>
                <p className="text-xl text-gray-600">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.products.map(product => (
                    <Link key={product.id} href={`/nuestros-sofas/${categoryId}/${product.id}`} className="group block">
                        <div className="relative h-[300px] mb-4 overflow-hidden rounded-lg bg-gray-100">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#D97706] transition-colors">{product.name}</h3>
                        <p className="text-gray-600 font-medium">{product.price}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
