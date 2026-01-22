import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="site-header sticky top-0 bg-white z-50 shadow-sm py-4 min-h-[100px] flex items-center">
            <div className="container mx-auto flex justify-between items-center px-6">
                {/* Logo */}
                <Link href="/" className="logo block">
                    <Image
                        src="/assets/logotipo/logotipo-estilsofa-maestro-encabezado.png"
                        alt="EstilSofa"
                        width={200}
                        height={60}
                        className="h-[60px] w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Search Bar (Placeholder for functionality) */}
                <div className="search-container relative w-[250px] hidden md:block">
                    <input
                        type="text"
                        placeholder="Buscar sofá..."
                        className="w-full px-4 py-2 border border-blue-200 rounded-full bg-gray-50 text-sm focus:outline-none focus:border-[#ecd75f] focus:ring-2 focus:ring-[#ecd75f]/20 transition-all font-body"
                    />
                </div>

                {/* Navigation */}
                <nav className="main-nav hidden md:flex gap-8 items-center">
                    <Link href="/" className="nav-link text-gray-800 font-medium hover:text-[#D97706] transition-colors">
                        Inicio
                    </Link>
                    <Link href="/sobre-nosotros" className="nav-link text-gray-800 font-medium hover:text-[#D97706] transition-colors">
                        Sobre nosotros
                    </Link>
                    <Link href="/nuestros-sofas" className="nav-link text-gray-800 font-medium hover:text-[#D97706] transition-colors">
                        Nuestros sofás
                    </Link>
                    <Link href="/blog" className="nav-link text-gray-800 font-medium hover:text-[#D97706] transition-colors">
                        Blog
                    </Link>
                    <Link href="/oferta" className="nav-link promo text-[#D97706] font-semibold hover:opacity-80 transition-opacity">
                        Ofertas
                    </Link>
                    <Link href="/visitanos" className="nav-link text-gray-800 font-medium hover:text-[#D97706] transition-colors">
                        Visítanos
                    </Link>
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link href="/visitanos" className="btn btn-primary px-6 py-3 rounded text-white font-semibold uppercase tracking-wider text-sm hover:bg-[#ecd75f] hover:text-[#0F172A] transition-colors">
                        Pedir Cita
                    </Link>
                </div>

                {/* Mobile Menu Toggle (To be implemented) */}
                <button className="md:hidden p-2 text-2xl">
                    ☰
                </button>
            </div>
        </header>
    );
}
