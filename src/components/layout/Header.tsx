'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from '@/components/ui/SearchBar';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="site-header sticky top-0 bg-white z-50 shadow-sm py-4 min-h-[100px] flex items-center">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center">
                    {/* Logo - Relative z-50 to stay above mobile menu */}
                    <Link href="/" className="logo block relative z-50" onClick={closeMenu}>
                        <Image
                            src="/assets/logotipo/logotipo-estilsofa-maestro-encabezado.png"
                            alt="EstilSofa"
                            width={200}
                            height={60}
                            className="h-[60px] w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Search */}
                    <div className="search-container hidden md:block">
                        <SearchBar />
                    </div>

                    {/* Desktop Navigation */}
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

                    {/* Desktop CTA Button */}
                    <div className="hidden md:block">
                        <Link href="/visitanos" className="btn btn-primary px-6 py-3 rounded text-white font-semibold uppercase tracking-wider text-sm hover:bg-[#ecd75f] hover:text-[#0F172A] transition-colors">
                            Pedir Cita
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-3xl text-gray-800 focus:outline-none relative z-50"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={`fixed inset-0 bg-white/95 backdrop-blur-sm z-40 transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center items-center gap-8 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <nav className="flex flex-col items-center gap-6 text-xl">
                        <Link href="/" onClick={closeMenu} className="font-medium text-gray-800 hover:text-[#D97706]">
                            Inicio
                        </Link>
                        <Link href="/sobre-nosotros" onClick={closeMenu} className="font-medium text-gray-800 hover:text-[#D97706]">
                            Sobre nosotros
                        </Link>
                        <Link href="/nuestros-sofas" onClick={closeMenu} className="font-medium text-gray-800 hover:text-[#D97706]">
                            Nuestros sofás
                        </Link>
                        <Link href="/blog" onClick={closeMenu} className="font-medium text-gray-800 hover:text-[#D97706]">
                            Blog
                        </Link>
                        <Link href="/oferta" onClick={closeMenu} className="font-semibold text-[#D97706] hover:opacity-80">
                            Ofertas
                        </Link>
                        <Link href="/visitanos" onClick={closeMenu} className="font-medium text-gray-800 hover:text-[#D97706]">
                            Visítanos
                        </Link>
                    </nav>

                    {/* Mobile Search - Optional but good for UX */}
                    <div className="w-3/4 max-w-xs">
                        {/* We can reuse SearchBar here too, but it needs to handle click outside differently nicely in modal. 
                             For now let's keep it simple or just rely on desktop search being enough? 
                             Actually better to have it. But lets stick to navigation first as requested. 
                             I'll add the CTA instead.
                         */}
                    </div>

                    <Link href="/visitanos" onClick={closeMenu} className="btn btn-primary px-10 py-4 rounded text-white font-semibold uppercase tracking-wider text-lg hover:bg-[#ecd75f] hover:text-[#0F172A] transition-colors shadow-lg">
                        Pedir Cita
                    </Link>
                </div>
            </div>
        </header>
    );
}
