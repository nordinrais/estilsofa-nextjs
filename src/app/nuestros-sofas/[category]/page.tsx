import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ESTILSOFA_DATA } from "@/data/products";
import { notFound } from "next/navigation";

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const catData = ESTILSOFA_DATA.categories[category as keyof typeof ESTILSOFA_DATA.categories];

    if (!catData) {
        return notFound();
    }

    const products = ESTILSOFA_DATA.products.filter(p => p.category === category);

    // Helper to get image path
    const getImagePath = (folder: string, id: string, image: string) => {
        return `/assets/${folder}/${id}/${image}`;
    };

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50 pb-20">
                <div className="relative h-[300px] overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    <Image
                        src={catData.banner}
                        alt={catData.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
                        <div className="text-white px-6">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading drop-shadow-lg">{catData.title}</h1>
                            <p className="text-lg md:text-xl font-light opacity-90 max-w-2xl mx-auto drop-shadow-md">
                                {catData.description}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-6 py-12">
                    {products.length === 0 ? (
                        <div className="text-center py-20">
                            <h2 className="text-2xl text-gray-400">Próximamente más modelos en esta categoría.</h2>
                            <Link href="/nuestros-sofas" className="btn btn-primary mt-6">Volver al Catálogo</Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((product) => (
                                <Link
                                    key={product.id}
                                    href={`/nuestros-sofas/${category}/${product.id}`}
                                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 block"
                                >
                                    <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                                        <Image
                                            src={getImagePath(product.folder, product.id, product.image)}
                                            alt={product.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                                            Ver Detalles
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-dark transition-colors mb-2 font-heading">
                                            {product.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                            Disponible en tienda
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
