"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    return (
        <>
            <Header />
            <main className="container mx-auto px-6 py-12 bg-gray-50 min-h-screen">

                {/* Hero */}
                <div className="relative rounded-2xl overflow-hidden bg-gray-900 text-center py-24 px-6 mb-16 text-white"
                    style={{
                        backgroundImage: "url('/assets/imagen-tienda/fotostiendainteriores/showroom-images/exposicion-de-sofas-cama-y-sillones-en-tienda-fisica.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}>
                    <div className="absolute inset-0 bg-black/60 z-10"></div>
                    <div className="relative z-20 max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Ven a probar la comodidad por ti mismo</h1>
                        <p className="text-xl opacity-90 leading-relaxed font-light">
                            Porque hay sensaciones que una pantalla no puede transmitir. <br className="hidden md:block" />
                            Te esperamos en nuestro showroom para una experiencia exclusiva.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Info & Map */}
                    <div>
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 font-heading">Estamos aquí para ti</h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Nuestra tienda es el punto de encuentro entre tu inspiración online y la realidad palpable.
                                Ven, toca, siéntate y recibe el asesoramiento de nuestros expertos.
                            </p>
                        </div>

                        {/* Channels Grid */}
                        <div className="grid grid-cols-3 gap-4 mb-10">
                            <a href="tel:+34961443681" className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow hover:border-black text-center group">
                                <span className="text-3xl mb-2">📞</span>
                                <strong className="text-gray-800 group-hover:text-primary-dark transition-colors">961 443 681</strong>
                            </a>
                            <a href="https://wa.me/34677481926?text=Hola,%20me%20gustaría%20visitar%20vuestra%20tienda." target="_blank" className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow hover:border-black text-center group">
                                <span className="text-3xl mb-2">💬</span>
                                <strong className="text-gray-800 group-hover:text-primary-dark transition-colors">WhatsApp</strong>
                            </a>
                            <a href="mailto:info@estilsofa.com" className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow hover:border-black text-center group">
                                <span className="text-3xl mb-2">✉️</span>
                                <strong className="text-gray-800 group-hover:text-primary-dark transition-colors">Email</strong>
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-xl border border-gray-200 mb-8 shadow-sm">
                            <h3 className="text-xl font-bold mb-4 font-heading">Datos de Localización</h3>
                            <p className="mb-2 text-gray-700"><strong>📍 Dirección:</strong> Avinguda Lluis Santángel 67, 46136, Valencia</p>
                            <p className="text-gray-700"><strong>🕒 Horario:</strong> Lunes a Sábado: 10:00 - 14:00 | 17:00 - 20:30</p>
                        </div>

                        {/* Map */}
                        <div id="mapa" className="rounded-xl overflow-hidden h-[400px] shadow-md border border-gray-200 mb-8">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3077.578687726615!2d-0.3349784235339243!3d39.56114740947701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6041c6c6c6c6c7%3A0x1!2zMznCsDMzJzQwLjEiTiAwwrAxOSc1Ni43Ilc!5e0!3m2!1ses!2ses!4v1703876000000!5m2!1ses!2ses"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy">
                            </iframe>
                        </div>

                        {/* Social Proof */}
                        <div className="flex items-center gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <div className="text-4xl">⭐</div>
                            <div>
                                <h4 className="font-bold text-lg">Opiniones Excelentes</h4>
                                <p className="text-gray-600 text-sm mb-1">Clientes reales de Valencia confían en nosotros.</p>
                                <a href="https://www.google.com/search?q=estilsofa+valencia#lrd=0xd6041c6c6c6c6c7:0x1,1,,," target="_blank" className="text-primary-dark font-semibold hover:underline">Ver reseñas en Google →</a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Booking Form */}
                    <div id="bookingForm" className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 sticky top-24">
                        {!isSuccess ? (
                            <>
                                <h2 className="text-3xl font-bold mb-2 font-heading">Prepara tu Visita</h2>
                                <p className="text-gray-600 mb-8">
                                    Adelantanos tus preferencias y te estaremos esperando con una selección personalizada.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Nombre</label>
                                        <input type="text" className="w-full border-b-2 border-gray-200 py-3 bg-transparent text-lg focus:outline-none focus:border-black transition-colors" placeholder="Tu nombre" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email o Teléfono</label>
                                        <input type="text" className="w-full border-b-2 border-gray-200 py-3 bg-transparent text-lg focus:outline-none focus:border-black transition-colors" placeholder="¿Cómo te contactamos?" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Mensaje (Opcional)</label>
                                        <textarea className="w-full border-b-2 border-gray-200 py-3 bg-transparent text-lg focus:outline-none focus:border-black transition-colors resize-none" rows={3} placeholder="Me interesa ver sofás relax..."></textarea>
                                    </div>

                                    <div className="flex items-start gap-3 pt-2">
                                        <input type="checkbox" id="privacy" required className="mt-1 w-5 h-5 cursor-pointer accent-primary" />
                                        <label htmlFor="privacy" className="text-sm text-gray-500 cursor-pointer">
                                            He leído y acepto la <a href="/politica-privacidad" className="text-primary-dark underline">Política de Privacidad</a> *
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn btn-primary w-full py-4 text-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Enviando...' : 'Confirmar Solicitud'}
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="text-center py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="bg-green-100 text-green-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">✓</div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">¡Gracias! Hemos recibido tu mensaje.</h3>
                                <p className="text-gray-600 text-lg">Te contactaremos en menos de 24 horas para confirmar tu visita.</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
