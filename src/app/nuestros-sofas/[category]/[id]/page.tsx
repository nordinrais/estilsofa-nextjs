"use client";

import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { useParams, notFound } from "next/navigation";
import { useState, useEffect } from "react";

// Define a flexible type for the product
interface Product {
    title: string;
    folder: string;
    path: string;
    options?: string[];
    images: string[];
    specialPrice?: {
        price: string;
        configuration: string;
        fabric: string;
        includes: string[];
        note: string;
    };
    [key: string]: any;
}

export default function ProductPage() {
    const params = useParams();
    const id = params?.id as string;
    const [product, setProduct] = useState<Product | null>(null);
    const [activeImage, setActiveImage] = useState<string>("");
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<'caracteristicas' | 'especificaciones'>('caracteristicas');

    const handleTabClick = (tab: 'caracteristicas' | 'especificaciones') => {
        setActiveTab(tab);
        setTimeout(() => {
            const element = document.getElementById('product-details-section');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    useEffect(() => {
        if (!id) return;

        // Find product where path matches the URL param 'id'
        // The URL is constructed as /nuestros-sofas/[category]/[path]
        const found = Object.values(PRODUCTS).find((p: any) => p.path === id || p.id === id); // p.id check just in case

        if (found) {
            setProduct(found as Product);
            // safe access to images
            if ('images' in found && Array.isArray(found.images) && found.images.length > 0) {
                setActiveImage(found.images[0]);
            } else if ('image' in found) {
                setActiveImage((found as any).image);
            }
        }
    }, [id]);

    if (!product && typeof window !== 'undefined' && id) {
        // Simple client-side check if not found after effect
        const found = Object.values(PRODUCTS).find((p: any) => p.path === id);
        if (!found) return <div className="p-20 text-center">Producto no encontrado</div>;
    }

    if (!product) return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Cargando...</div>;


    const getImagePath = (imgName: string) => {
        return `/assets/${product.folder}/${product.path || product.id}/${imgName}`;
    };

    const sizeMap: Record<string, string> = {
        '1_plaza': '1 plaza',
        '2_plazas': '2 plazas',
        '3_plazas': '3 plazas',
        '4_plazas': '4 plazas',
        'chaise': 'chaise longue'
    };

    const formatOptions = (opts?: string[]) => {
        if (!opts || opts.length === 0) return "";
        return opts.map(o => sizeMap[o] || o).join(", ");
    };

    return (
        <>
            <main className="container mx-auto px-6 py-12 min-h-screen">
                <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 mt-8">

                    {/* Gallery Section */}
                    <div className="flex flex-col gap-4">
                        <div
                            className="relative aspect-square md:aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden cursor-zoom-in group"
                            onClick={() => setLightboxOpen(true)}
                        >
                            <Image
                                src={getImagePath(activeImage)}
                                alt={product.title}
                                fill
                                className="object-contain"
                            />
                            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                🔍 Clic para ampliar
                            </div>
                        </div>

                        {/* Thumbnails */}
                        {product.images && product.images.length > 1 && (
                            <div className="grid grid-cols-5 gap-4">
                                {product.images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveImage(img)}
                                        className={`relative aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-all ${activeImage === img ? 'border-primary shadow-md' : 'border-transparent hover:border-gray-300'}`}
                                    >
                                        <Image src={getImagePath(img)} alt={`View ${idx}`} fill className="object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Info Section */}
                    <div className="flex flex-col">
                        <h1 className="text-4xl font-bold mb-2 font-heading">{product.title}</h1>
                        <p className="text-xl text-gray-600 mb-6">Diseño y Calidad Premium</p>

                        {/* Side Column Tab Navigation */}
                        <div className="flex flex-col sm:flex-row gap-3 mb-8 bg-gray-50 p-2 rounded-xl border border-gray-100">
                            <button
                                onClick={() => handleTabClick('caracteristicas')}
                                className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all text-sm md:text-base ${activeTab === 'caracteristicas' ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:bg-gray-100'}`}
                            >
                                ✨ Características
                            </button>
                            <button
                                onClick={() => handleTabClick('especificaciones')}
                                className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all text-sm md:text-base ${activeTab === 'especificaciones' ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:bg-gray-100'}`}
                            >
                                📐 Especificaciones
                            </button>
                        </div>

                        <div className="flex flex-col gap-4">
                            <a
                                href={`https://wa.me/34677481926?text=Hola, me interesa el ${product.title}`}
                                target="_blank"
                                className="btn btn-primary w-full text-center justify-center py-4 bg-[#25D366] hover:bg-[#1faa53] border-none text-white shadow-lg"
                            >
                                💬 Consultar Precio por WhatsApp
                            </a>
                            <Link href="/visitanos" className="btn btn-outline w-full text-center justify-center py-4">
                                Pedir Cita en Tienda
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Content Section (Anchor for scroll) */}
                <div id="product-details-section" className="mt-16 pt-8 scroll-mt-24">
                    {/* Synchronized Tab Bar (Optional, can be hidden if user wants only side buttons) */}
                    <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
                        <button
                            onClick={() => setActiveTab('caracteristicas')}
                            className={`py-4 px-8 font-bold text-lg whitespace-nowrap transition-colors border-b-2 ${activeTab === 'caracteristicas' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                        >
                            Detalles y Beneficios
                        </button>
                        <button
                            onClick={() => setActiveTab('especificaciones')}
                            className={`py-4 px-8 font-bold text-lg whitespace-nowrap transition-colors border-b-2 ${activeTab === 'especificaciones' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                        >
                            Ficha Técnica
                        </button>
                    </div>

                    <div className="min-h-[300px]">
                        {activeTab === 'caracteristicas' && (
                            <div className="grid md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div>
                                    <h3 className="font-bold text-2xl mb-6 font-heading text-gray-900 border-l-4 border-primary pl-4">Detalles del Producto</h3>
                                    <ul className="space-y-4 text-gray-700 text-lg">
                                        <li className="flex gap-3"><span className="text-primary font-bold text-xl">✓</span> <span><strong>Fabricación nacional</strong> de alta calidad artesanal</span></li>
                                        <li className="flex gap-3"><span className="text-primary font-bold text-xl">✓</span> <span><strong>Estructura reforzada</strong> de madera de pino maciza</span></li>
                                        <li className="flex gap-3"><span className="text-primary font-bold text-xl">✓</span> <span>Disponible en <strong>múltiples tejidos</strong> y colores antimanchas</span></li>
                                        <li className="flex gap-3"><span className="text-primary font-bold text-xl">✓</span> <span>Máxima ergonomía con <strong>garantía de confort</strong> EstilSofa</span></li>
                                        <li className="flex gap-3"><span className="text-primary font-bold text-xl">✓</span> <span>Opciones de personalización en medidas y firmeza</span></li>
                                    </ul>

                                    <div className="mt-8">
                                        <h3 className="font-bold text-lg mb-2">Opciones Disponibles</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {formatOptions(product.options)
                                                ? `Este modelo se puede personalizar en diferentes medidas, tapizados y configuraciones (${formatOptions(product.options)}). Consulta disponibilidad en tienda.`
                                                : "Este modelo se puede personalizar en diferentes tapizados y acabados. Consulta disponibilidad en tienda."
                                            }
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 h-full flex flex-col justify-center">
                                    <div className="text-center mb-6">
                                        <div className="w-16 h-16 bg-red-100 text-red-600 flex items-center justify-center rounded-2xl text-3xl mx-auto mb-4">
                                            📄
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-900">Documentación Técnica</h4>
                                        <p className="text-gray-600 mt-2">Descarga el catálogo completo con todos los módulos y opciones disponibles.</p>
                                    </div>

                                    {product.pdf ? (
                                        <a
                                            href={getImagePath(product.pdf)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary bg-red-600 hover:bg-red-700 border-none text-white w-full py-4 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                                        >
                                            DESCARGAR CATÁLOGO PDF
                                        </a>
                                    ) : (
                                        <p className="text-center text-sm text-gray-400 italic">Catálogo digital no disponible para este modelo. Consulta en tienda.</p>
                                    )}
                                </div>
                            </div>
                        )}

                        {activeTab === 'especificaciones' && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="grid lg:grid-cols-[1fr_350px] gap-8">
                                    <div className="space-y-8">
                                        {product.optionsImage ? (
                                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden group">
                                                <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                                                    <h3 className="font-bold text-xl font-heading text-gray-900">Medidas y Modulaciones</h3>
                                                    <p className="text-sm text-gray-500 mt-1">Esquema técnico de dimensiones y elementos disponibles</p>
                                                </div>
                                                <div className="relative p-4 md:p-8 cursor-zoom-in" onClick={() => {
                                                    // Use lightbox for specs image too? Why not!
                                                    // We might need to adjust the lightbox to handle both main gallery and specs
                                                }}>
                                                    <Image
                                                        src={getImagePath(product.optionsImage)}
                                                        alt={`Especificaciones ${product.title}`}
                                                        width={1200}
                                                        height={800}
                                                        className="w-full h-auto rounded-lg"
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="bg-gray-50 rounded-2xl p-12 text-center border-2 border-dashed border-gray-200">
                                                <p className="text-gray-400 font-medium">Información técnica detallada en proceso de digitalización.</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-6">
                                        {product.specialPrice && (
                                            <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6 sticky top-8">
                                                <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                                                    <span className="text-2xl">💎</span> Configuración en Oferta
                                                </h3>
                                                <div className="bg-orange-500 text-white px-4 py-2 rounded-xl font-bold text-2xl text-center mb-6 shadow-sm">
                                                    {product.specialPrice.price}
                                                </div>
                                                <div className="text-gray-700 text-sm space-y-4 mb-6">
                                                    <p className="flex items-start gap-2">
                                                        <span className="text-orange-400 mt-1 text-xs">●</span>
                                                        <span><strong>Módulo:</strong><br />{product.specialPrice.configuration}</span>
                                                    </p>
                                                    <p className="flex items-start gap-2">
                                                        <span className="text-orange-400 mt-1 text-xs">●</span>
                                                        <span><strong>Tapizado:</strong><br />{product.specialPrice.fabric}</span>
                                                    </p>
                                                </div>
                                                <div className="bg-white/80 backdrop-blur rounded-xl p-4 text-sm text-gray-600 border border-orange-100">
                                                    <p className="font-bold mb-3 text-gray-900 flex items-center gap-1">
                                                        <span className="text-green-500">✓</span> Qué incluye:
                                                    </p>
                                                    <ul className="space-y-2">
                                                        {product.specialPrice.includes.map((inc, i) => (
                                                            <li key={i} className="flex gap-2 items-start">
                                                                <span className="text-xs mt-1 text-orange-300">▹</span>
                                                                {inc}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <p className="text-[10px] text-gray-400 mt-4 text-center italic">{product.specialPrice.note}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>


                {/* Related Products Section */}
                <div className="mt-16 pt-10 border-t border-gray-200">
                    <h2 className="text-2xl font-bold font-heading mb-8 text-center text-gray-900 uppercase tracking-wide">También te puede interesar</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.values(PRODUCTS)
                            .filter((p: any) => p.folder === product.folder && (p.path || p.id) !== (product.path || product.id))
                            .slice(0, 4)
                            .map((p: any) => {
                                const productPath = p.path || p.id;
                                return (
                                    <Link
                                        key={productPath}
                                        href={`/nuestros-sofas/${p.folder}/${productPath}`}
                                        className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200"
                                    >
                                        <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                                            <Image
                                                src={`/assets/${p.folder}/${productPath}/${p.images[0]}`}
                                                alt={p.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-bold text-gray-800 text-sm md:text-base group-hover:text-primary transition-colors leading-snug">{p.title}</h3>
                                            <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">{p.folder.replace('-', ' ')}</p>
                                            <div className="mt-3 flex items-center text-primary font-bold text-xs">
                                                VER MÁS
                                                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                    </div>
                </div>

                {/* Lightbox Overlay */}
                {lightboxOpen && (
                    <div
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-200"
                        onClick={() => setLightboxOpen(false)}
                    >
                        <button className="absolute top-4 right-4 text-white text-4xl hover:text-primary">&times;</button>
                        <div className="relative w-full max-w-5xl h-[80vh]">
                            <Image
                                src={getImagePath(activeImage)}
                                alt="Zoom"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                )}
            </main>
        </>
    );
}
