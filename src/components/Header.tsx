"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="site-header bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
            <div className="container mx-auto px-6 flex justify-between items-center py-4">
                {/* Logo */}
                <Link href="/" className="logo flex-shrink-0">
                    <Image
                        src="/assets/logotipo/logotipo-estilsofa-maestro-encabezado.png"
                        alt="EstilSofa"
                        width={200}
                        height={60}
                        className="h-[50px] w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Search Bar - Desktop */}
                <div className="search-container hidden md:block relative w-[250px] ml-8">
                    <input
                        type="text"
                        placeholder="Buscar sofá..."
                        className="w-full px-4 py-2 border border-gray-200 rounded-full text-sm bg-gray-50 focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                </div>

                {/* Desktop Navigation */}
                <nav className="main-nav hidden md:flex gap-8 items-center ml-auto">
                    <Link
                        href="/"
                        className="text-gray-800 hover:text-primary-dark font-medium transition-colors"
                    >
                        Inicio
                    </Link>
                    <Link
                        href="/sobre-nosotros"
                        className="text-gray-800 hover:text-primary-dark font-medium transition-colors"
                    >
                        Sobre nosotros
                    </Link>
                    <Link
                        href="/nuestros-sofas"
                        className="text-gray-800 hover:text-primary-dark font-medium transition-colors"
                    >
                        Nuestros sofás
                    </Link>
                    <Link
                        href="/blog"
                        className="text-gray-800 hover:text-primary-dark font-medium transition-colors"
                    >
                        Blog
                    </Link>
                    <Link
                        href="/oferta"
                        className="text-primary-dark hover:text-primary font-bold transition-colors"
                    >
                        Ofertas
                    </Link>
                    <Link
                        href="/visitanos"
                        className="text-gray-800 hover:text-primary-dark font-medium transition-colors"
                    >
                        Visítanos
                    </Link>
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block ml-6">
                    <Link href="/visitanos" className="btn btn-primary">
                        Pedir Cita
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-2xl text-gray-800"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col gap-4 border-t border-gray-100">
                    {/* Mobile Search */}
                    <div className="relative w-full mb-2">
                        <input
                            type="text"
                            placeholder="Buscar sofá..."
                            className="w-full px-4 py-2 border border-gray-200 rounded-full text-sm bg-gray-50"
                        />
                    </div>
                    <Link
                        href="/"
                        className="text-gray-800 py-2 border-b border-gray-50 hover:text-primary-dark"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Inicio
                    </Link>
                    <Link
                        href="/sobre-nosotros"
                        className="text-gray-800 py-2 border-b border-gray-50 hover:text-primary-dark"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Sobre nosotros
                    </Link>
                    <Link
                        href="/nuestros-sofas"
                        className="text-gray-800 py-2 border-b border-gray-50 hover:text-primary-dark"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Nuestros sofás
                    </Link>
                    <Link
                        href="/oferta"
                        className="text-primary-dark font-bold py-2 border-b border-gray-50"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Ofertas
                    </Link>
                    <Link
                        href="/visitanos"
                        className="text-gray-800 py-2 hover:text-primary-dark"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Visítanos
                    </Link>
                    <Link
                        href="/visitanos"
                        className="btn btn-primary w-full text-center justify-center mt-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Pedir Cita
                    </Link>
                </div>
            )}
        </header>
    );
}
