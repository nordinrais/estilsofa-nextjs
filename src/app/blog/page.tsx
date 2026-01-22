
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '@/data/blog-data';

export const metadata = {
    title: "Blog - Consejos y Tendencias | EstilSofa",
    description: "Descubre consejos prácticos sobre decoración, limpieza de sofás y las últimas tendencias en descanso en el Blog de EstilSofa.",
};

export default function BlogPage() {
    return (
        <>
            <div className="py-16 bg-gradient-to-br from-gray-900 to-black text-white text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Consejos y Tendencias</h1>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto">
                        Todo lo que necesitas saber para cuidar tu descanso y elegir el mejor sofá.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post) => (
                        <article key={post.slug} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 group">
                            <Link href={`/blog/${post.slug}`}>
                                <div className="h-56 relative bg-gray-200 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-8">
                                    <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider mb-2 block">
                                        {post.category}
                                    </span>
                                    <h3 className="text-xl font-bold mb-3 font-heading text-[#0F172A] group-hover:text-[#D97706] transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3">
                                        {post.description}
                                    </p>
                                    <span className="text-[#D97706] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Leer artículo <span>→</span>
                                    </span>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </>
    );
}
