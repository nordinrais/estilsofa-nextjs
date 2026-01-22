"use client";

"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function OfferLanding() {
    return (
        <>
            {/* Simplified Header override if needed, or stick to standard Header */}
            <Header />

            <main className="bg-white pb-20">

                {/* Split Hero */}
                <section className="grid lg:grid-cols-2 min-h-[600px] bg-white">
                    <div className="flex flex-col justify-center p-8 md:p-20 bg-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-dark font-heading leading-tight">
                            Recupere su independencia para sentarse y levantarse sin esfuerzo
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            El Sillón Power Lift TOUS: la solución definitiva para el descanso y la movilidad en el hogar.
                        </p>
                        <div>
                            <a href="#reservar" className="btn btn-primary text-lg px-8 py-4 shadow-lg shadow-primary/20">
                                Solicitar Prueba en Tienda
                            </a>
                        </div>
                    </div>
                    <div className="bg-gray-50 flex items-center justify-center p-8">
                        <div className="relative w-full max-w-lg aspect-square">
                            <Image
                                src="/assets/sillones-relax/sillon-relax-pl-tous/01_sillon-relax-levantapersonas-barato.webp"
                                alt="Sillón TOUS Power Lift"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </section>

                <div className="container mx-auto px-6 py-12">

                    {/* Intro */}
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                            El descanso que tu cuerpo necesita
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Recupera la vitalidad y dale a tu cuerpo el respiro que merece. Nuestro sillón relax power lift ha
                            sido diseñado pensando en la ergonomía avanzada y el cuidado integral de la salud.
                            <strong className="block mt-2 text-black">No es solo un asiento; es tu centro de recuperación personal en casa.</strong>
                        </p>
                    </div>

                    {/* Product Feature Split */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">
                            <Image
                                src="/assets/sillones-relax/sillon-relax-pl-tous/02_sillon-relax-electrico-con-motor.webp"
                                alt="Sillón TOUS Relax"
                                width={800}
                                height={600}
                                className="w-full h-auto"
                            />
                            <div className="bg-gray-50 p-4 text-center border-t border-gray-100 text-sm font-medium text-gray-600">
                                <strong>Medidas:</strong> Ancho: 76 cm | Fondo: 90 cm | Alto: 105 cm
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl font-bold mb-2 font-heading">Sillón Relax TOUS</h2>
                            <p className="text-xl text-gray-500 mb-6">Con sistema Power Lift (Levantapersonas) y mando a distancia.</p>

                            <div className="flex items-baseline gap-4 mb-8">
                                <span className="text-2xl text-gray-400 line-through">799€</span>
                                <span className="text-5xl font-bold text-primary-dark">499€</span>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-8">
                                <h4 className="font-bold text-primary-dark mb-4 text-lg border-b border-gray-200 pb-2">Personaliza tu Sillón:</h4>

                                <div className="flex gap-6 mb-6">
                                    <div className="text-center">
                                        <div className="w-12 h-12 rounded-full bg-[#A6A6A6] shadow-inner mb-2 border-2 border-white ring-2 ring-gray-200 cursor-pointer hover:ring-primary"></div>
                                        <span className="text-xs text-gray-500 font-medium">Arte Piedra</span>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-12 h-12 rounded-full bg-[#8D837D] shadow-inner mb-2 border-2 border-white ring-2 ring-gray-200 cursor-pointer hover:ring-primary"></div>
                                        <span className="text-xs text-gray-500 font-medium">Arte Mouse</span>
                                    </div>
                                </div>

                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex gap-3 items-center">
                                        <span className="text-green-500 text-xl">✓</span> Motor silencioso de alta durabilidad
                                    </li>
                                    <li className="flex gap-3 items-center">
                                        <span className="text-green-500 text-xl">✓</span> Tela agradable y fácil de limpiar
                                    </li>
                                    <li className="flex gap-3 items-center">
                                        <span className="text-green-500 text-xl">✓</span> Mando sencillo de 2 botones
                                    </li>
                                    <li className="flex gap-3 items-center">
                                        <span className="text-green-500 text-xl">✓</span> Bolsillo lateral porta-objetos
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a href="#reservar" className="btn btn-primary flex-1 min-w-[200px] text-center justify-center">Reservar Oferta</a>
                                <a href="https://wa.me/34..." className="btn bg-[#25D366] text-white hover:bg-[#1faa53] flex-1 min-w-[200px] text-center justify-center border-none">
                                    💬 Asesoramiento
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Benefits Grid */}
                    <div className="mb-24">
                        <h3 className="text-3xl font-bold text-center mb-12">
                            <span className="border-b-4 border-primary pb-2">Beneficios para tu Salud</span>
                        </h3>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Independencia", desc: "Levántate sin esfuerzo gracias al motor Power Lift." },
                                { title: "Circulación", desc: "Eleva las piernas para mejorar el retorno venoso." },
                                { title: "Cuidado Espalda", desc: "Sopar lumbar y cervical ergonómico." },
                                { title: "Relax Total", desc: "Libera tensión y reduce los niveles de cortisol." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-primary">
                                    <h4 className="font-bold text-xl mb-3">{item.title}</h4>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* White Glove Service */}
                    <div className="bg-gray-900 text-white rounded-3xl overflow-hidden p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 mb-20">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-6 font-heading text-white">Entrega "Guante Blanco"</h2>
                            <p className="text-xl text-gray-300 mb-8 font-light">Sabemos que recibir un mueble puede ser estresante. Por eso, nuestro servicio incluye:</p>
                            <ul className="space-y-4">
                                <li className="flex gap-4 items-center text-lg">
                                    <span className="bg-primary text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">✓</span>
                                    Subida a Domicilio
                                </li>
                                <li className="flex gap-4 items-center text-lg">
                                    <span className="bg-primary text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">✓</span>
                                    Montaje Profesional
                                </li>
                                <li className="flex gap-4 items-center text-lg">
                                    <span className="bg-primary text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">✓</span>
                                    Retirada de Embalajes
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 relative aspect-square w-full max-w-sm bg-white/10 rounded-2xl overflow-hidden">
                            <Image
                                src="/assets/sillones-relax/sillon-relax-pl-tous/03_sillon-relax-automatico-con-mando.webp"
                                alt="Remote Control"
                                fill
                                className="object-cover opacity-90"
                            />
                        </div>
                    </div>


                    {/* Reservation Form */}
                    <section id="reservar" className="max-w-2xl mx-auto">
                        <div className="bg-white border-2 border-primary p-8 md:p-12 rounded-2xl shadow-2xl">
                            <h2 className="text-3xl font-bold text-center mb-2 font-heading">Solicite el Sillón TOUS por 499€</h2>
                            <p className="text-center text-gray-600 mb-8">Déjenos su teléfono y le llamaremos para confirmar el color y la entrega.</p>

                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block font-bold mb-2">Nombre</label>
                                    <input type="text" className="w-full text-lg p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Su nombre" />
                                </div>
                                <div>
                                    <label className="block font-bold mb-2">Teléfono de Contacto</label>
                                    <input type="tel" className="w-full text-lg p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Ej: 600 123 456" />
                                </div>

                                <div className="flex items-start gap-3 pt-2">
                                    <input type="checkbox" required className="mt-1 w-5 h-5 accent-primary" />
                                    <span className="text-sm text-gray-500">He leído y acepto la Política de Privacidad *</span>
                                </div>

                                <button className="btn btn-primary w-full py-4 text-lg font-bold shadow-lg shadow-yellow-500/30">
                                    Solicitar Llamada Gratuita
                                </button>
                            </form>
                        </div>
                    </section>

                    {/* Mobile Sticky Bar */}
                    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden flex gap-4 z-50 shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
                        <a href="tel:961443681" className="btn btn-outline flex-1 text-center justify-center">📞 Llamar</a>
                        <a href="#reservar" className="btn btn-primary flex-1 text-center justify-center">🛒 Reservar</a>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
