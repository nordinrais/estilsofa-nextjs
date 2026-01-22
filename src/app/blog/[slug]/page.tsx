
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blog-data';

// Generate static params for all existing blog posts
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: 'Artículo no encontrado - EstilSofa',
    };
  }
  return {
    title: `${post.title} | Blog EstilSofá`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className="py-16 md:py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-block mb-6 text-gray-300 hover:text-white transition-colors text-sm font-medium">
              ← Volver al Blog
            </Link>
            <div className="flex items-center gap-3 text-sm opacity-80 mb-4">
              <span className="font-bold text-[#fbbf24] uppercase tracking-wide">{post.category}</span>
              <span>•</span>
              <span>{post.readingTime}</span>
              <span>•</span>
              <span>{post.publishDate}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 font-heading leading-tight">{post.title}</h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">{post.description}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <article className="max-w-3xl mx-auto">
          <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden mb-12 shadow-md">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg prose-slate max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-[#D97706] prose-img:rounded-xl">
            {post.content}
          </div>

          {/* Social Search Placeholder */}
          <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200 flex flex-wrap items-center gap-4">
            <span className="font-bold text-gray-700">Compartir:</span>
            <a href={`https://wa.me/?text=${encodeURIComponent(post.title)}`} target="_blank" className="bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              📱 WhatsApp
            </a>
            <a href="https://facebook.com" target="_blank" className="bg-[#1877F2] text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              👍 Facebook
            </a>
          </div>

          <div className="mt-16 p-10 bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl text-center text-white shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-heading">¿Te ha parecido útil?</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto">
              Descubre nuestra colección de sofás y aplica estos consejos en tu nuevo compañero de descanso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/nuestros-sofas" className="bg-white text-gray-900 px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors">
                Ver Catálogo
              </Link>
              <Link href="/visitanos" className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white/10 transition-colors">
                Pedir Asesoramiento
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
