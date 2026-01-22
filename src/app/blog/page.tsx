import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
    const articles = [
        {
            title: "Cómo limpiar tu sofá de tela fácilmente",
            category: "Guías Prácticas",
            excerpt: "Trucos caseros y profesionales para eliminar manchas sin dañar el tejido.",
            image: "/assets/blog/como-limpiar-tu-sofa-de-tela-facilmente.webp",
            slug: "como-limpiar-sofa-tela"
        },
        {
            title: "Cómo elegir el sofá perfecto para tu hogar",
            category: "Guía de Compra",
            excerpt: "Descubre los factores clave antes de comprar: medidas, materiales, estilo y funcionalidad.",
            image: "/assets/blog/guis-de-compra-de-sofa.webp",
            slug: "guia-compra-sofa-perfecto"
        },
        {
            title: "Mantén tu tapicería como nueva",
            category: "Trucos de Limpieza",
            excerpt: "Consejos prácticos y productos recomendados para el cuidado diario de tu sofá.",
            image: "/assets/blog/trucos-de-limpieza.webp",
            slug: "trucos-limpieza-mantenimiento"
        },
        {
            title: "Sillón Relax: ¿Manual o Eléctrico?",
            category: "Guía Comparativa",
            excerpt: "Descubre las diferencias, ventajas y cuál se adapta mejor a tus necesidades y presupuesto.",
            image: "/assets/blog/sillon-relax-manual-vs-electrico.webp",
            slug: "sillon-relax-manual-vs-electrico"
        }
    ];

    return (
        <>
            <Header />
            <div className="py-20 bg-gradient-to-br from-gray-800 to-black text-white text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Consejos y Tendencias</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto font-light">
                        Todo lo que necesitas saber para cuidar tu descanso y elegir el mejor sofá.
                    </p>
                </div>
            </div>

            <main className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <article key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group">
                            <Link href={`/blog/${article.slug}`} className="block h-full">
                                <div className="relative h-48 bg-gray-200 overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-dark">
                                        {article.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 font-heading group-hover:text-primary-dark transition-colors">{article.title}</h3>
                                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                                    <span className="text-primary-dark font-semibold text-sm group-hover:underline">Leer artículo →</span>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}
