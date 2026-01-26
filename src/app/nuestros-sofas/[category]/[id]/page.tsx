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
                    <div>
                        <h1 className="text-4xl font-bold mb-2 font-heading">{product.title}</h1>
                        <p className="text-xl text-gray-600 mb-8">Diseño y Calidad Premium</p>

                        <div className="border-b border-gray-200 pb-8 mb-8">
                            <h3 className="font-bold text-lg mb-4">Características</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex gap-3"><span className="text-primary font-bold">✓</span> Fabricación nacional de alta calidad</li>
                                <li className="flex gap-3"><span className="text-primary font-bold">✓</span> Estructura de madera reforzada</li>
                                <li className="flex gap-3"><span className="text-primary font-bold">✓</span> Disponible en múltiples tejidos y colores</li>
                                <li className="flex gap-3"><span className="text-primary font-bold">✓</span> Garantía de confort EstilSofa</li>
                            </ul>
                        </div>

                        {product.specialPrice && (
                            <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 mb-8">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-bold text-gray-900 text-lg">💎 Configuración Especial</h3>
                                    <div className="bg-orange-500 text-white px-4 py-1 rounded-full font-bold text-xl">
                                        {product.specialPrice.price}
                                    </div>
                                </div>
                                <div className="text-gray-700 text-sm space-y-2 mb-4">
                                    <p><strong>● {product.specialPrice.configuration}</strong></p>
                                    <p>Tapizado en: <strong>{product.specialPrice.fabric}</strong></p>
                                </div>
                                <div className="bg-white rounded p-3 text-sm text-gray-600">
                                    <p className="font-bold mb-1">✓ Incluye:</p>
                                    <ul className="list-disc list-inside">
                                        {product.specialPrice.includes.map((inc, i) => <li key={i}>{inc}</li>)}
                                    </ul>
                                </div>
                            </div>
                        )}

                        <div className="mb-10">
                            <h3 className="font-bold text-lg mb-2">Opciones Disponibles</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {formatOptions(product.options)
                                    ? `Este modelo se puede personalizar en diferentes medidas, tapizados y configuraciones (${formatOptions(product.options)}). Consulta disponibilidad en tienda.`
                                    : "Este modelo se puede personalizar en diferentes tapizados y acabados. Consulta disponibilidad en tienda."
                                }
                            </p>
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

                        {/* PDF Catalogue Button */}
                        {product.pdf && (
                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <a
                                    href={getImagePath(product.pdf)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-red-100 text-red-600 flex items-center justify-center rounded-lg text-2xl group-hover:scale-110 transition-transform">
                                        📄
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Catálogo Técnico PDF</p>
                                        <p className="text-sm text-gray-500">Descargar especificaciones completas</p>
                                    </div>
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Technical Options Image Section */}
                {product.optionsImage && (
                    <div className="mt-20 pt-10 border-t border-gray-200">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold font-heading mb-4">Especificaciones y Medidas</h2>
                            <p className="text-gray-600">Consulta todas las configuraciones técnicas disponibles para el {product.title}</p>
                        </div>
                        <div className="relative max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-4 border border-gray-100">
                            <Image
                                src={getImagePath(product.optionsImage)}
                                alt={`Especificaciones ${product.title}`}
                                width={1200}
                                height={800}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                )}

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
