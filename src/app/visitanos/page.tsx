'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Visitanos() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setFormStatus('success');
        }, 1500);
    };

    return (
        <div className="container mx-auto px-6 py-12">

            {/* Premium Hero */}
            <div className="hero-contact relative h-[400px] mb-16 rounded-2xl overflow-hidden flex items-center justify-center text-center text-white">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/imagen-tienda/fotosfachadatiendaes/tienda-estilos-exterior-.webp"
                        alt="Tienda Estilo Exterior"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <div className="relative z-10 p-6 max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Ven a probar la comodidad por ti mismo</h1>
                    <p className="text-xl opacity-95 leading-relaxed">
                        Porque hay sensaciones que una pantalla no puede transmitir. <br />
                        Te esperamos en nuestro showroom para una experiencia exclusiva.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
                {/* Left Column: Info, Channels, Map */}
                <div>
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold mb-4 font-heading text-[#0F172A]">Estamos aquí para ti</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Nuestra tienda es el punto de encuentro entre tu inspiración online y la realidad palpable.
                            Ven, toca, siéntate y recibe el asesoramiento de nuestros expertos.
                        </p>
                    </div>

                    {/* Direct Channels */}
                    <div className="grid grid-cols-3 gap-4 mb-10">
                        <a href="tel:+34961443681" className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:bg-gray-50 hover:-translate-y-1 transition-all text-center">
                            <span className="text-3xl mb-2">📞</span>
                            <strong className="text-gray-800">961 443 681</strong>
                        </a>
                        <a href="https://wa.me/34677481926?text=Hola,%20me%20gustaría%20visitar%20vuestra%20tienda." target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:bg-gray-50 hover:-translate-y-1 transition-all text-center">
                            <span className="text-3xl mb-2">💬</span>
                            <strong className="text-gray-800">WhatsApp</strong>
                        </a>
                        <a href="mailto:info@estilsofa.com" className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:bg-gray-50 hover:-translate-y-1 transition-all text-center">
                            <span className="text-3xl mb-2">✉️</span>
                            <strong className="text-gray-800">Email</strong>
                        </a>
                    </div>

                    {/* Location Details */}
                    <div className="mb-10">
                        <h3 className="text-2xl font-bold mb-4 font-heading text-[#0F172A]">Datos de Localización</h3>
                        <p className="text-gray-700 mb-2 text-lg"><strong>📍 Dirección:</strong> Avinguda Lluis Santángel 67, 46136, Valencia</p>
                        <p className="text-gray-700 text-lg"><strong>🕒 Horario:</strong> Lunes a Sábado: 10:00 - 14:00 | 17:00 - 20:30</p>
                    </div>

                    {/* Map */}
                    <div id="mapa" className="h-[400px] bg-gray-200 rounded-2xl overflow-hidden border border-gray-200 shadow-sm mb-10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3077.578687726615!2d-0.3349784235339243!3d39.56114740947701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6041c6c6c6c6c7%3A0x1!2zMznCsDMzJzQwLjEiTiAwwrAxOSc1Ni43Ilc!5e0!3m2!1ses!2ses!4v1703876000000!5m2!1ses!2ses"
                            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy">
                        </iframe>
                    </div>

                    {/* Trust Gallery */}
                    <div className="mb-10">
                        <h3 className="text-2xl font-bold mb-4 font-heading text-[#0F172A]">Galería de Confianza</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="h-[120px] relative rounded-lg overflow-hidden">
                                <Image src="/assets/imagen-tienda/fotosfachadatiendaes/tienda-estilos-exterior-.webp" alt="Fachada" fill className="object-cover hover:scale-105 transition-transform" />
                            </div>
                            <div className="h-[120px] relative rounded-lg overflow-hidden">
                                <Image src="/assets/imagen-tienda/fotostiendainteriores/showroom-images/showroom-de-muebles-con-exposicion-de-sofas-cama.webp" alt="Showroom" fill className="object-cover hover:scale-105 transition-transform" />
                            </div>
                            <div className="h-[120px] relative rounded-lg overflow-hidden">
                                <Image src="/assets/imagen-tienda/fotostiendainteriores/showroom-images/amplia-exposicion-de-sillones-relax-electricos-y-manuales.webp" alt="Exposición" fill className="object-cover hover:scale-105 transition-transform" />
                            </div>
                            <div className="h-[120px] relative rounded-lg overflow-hidden">
                                <Image src="/assets/imagen-tienda/fotostiendainteriores/showroom-images/interior-tienda-de-muebles-zona-de-prueba-de-sofas.webp" alt="Zona Prueba" fill className="object-cover hover:scale-105 transition-transform" />
                            </div>
                        </div>
                    </div>

                    {/* Social Proof Badge */}
                    <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200 flex items-center gap-4 shadow-sm">
                        <div className="text-4xl">⭐</div>
                        <div>
                            <h4 className="font-bold text-lg mb-1">Opiniones Excelentes</h4>
                            <p className="text-gray-600 text-sm mb-2">Clientes reales de Valencia confían en nosotros.</p>
                            <a href="https://www.google.com/search?q=estilsofa+valencia#lrd=0xd6041c6c6c6c6c7:0x1,1,,," target="_blank" className="text-[#D97706] font-semibold hover:underline">Ver reseñas en Google →</a>
                        </div>
                    </div>

                </div>

                {/* Right Column: Booking Form */}
                <div className="lg:sticky lg:top-24">
                    <div id="bookingForm" className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
                        {formStatus === 'success' ? (
                            <div className="bg-green-50 text-green-800 p-8 rounded-xl text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="text-5xl mb-4">✅</div>
                                <strong className="text-xl block mb-2">¡Gracias! Hemos recibido tu mensaje.</strong>
                                <p>Te contactaremos en menos de 24 horas para confirmar tu visita.</p>
                                <button onClick={() => setFormStatus('idle')} className="mt-6 text-sm text-green-700 underline hover:text-green-900">Enviar otro mensaje</button>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-3xl font-bold mb-3 font-heading text-[#0F172A]">Prepara tu Visita</h2>
                                <p className="text-gray-600 mb-8">
                                    Adelantanos tus preferencias y te estaremos esperando con una selección personalizada.
                                </p>

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-6">
                                        <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Nombre</label>
                                        <input
                                            type="text"
                                            className="w-full border-b-2 border-gray-200 py-3 text-lg focus:outline-none focus:border-black transition-colors"
                                            placeholder="Tu nombre"
                                            required
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Email o Teléfono</label>
                                        <input
                                            type="text"
                                            className="w-full border-b-2 border-gray-200 py-3 text-lg focus:outline-none focus:border-black transition-colors"
                                            placeholder="¿Cómo te contactamos?"
                                            required
                                        />
                                    </div>
                                    <div className="mb-8">
                                        <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Mensaje (Opcional)</label>
                                        <textarea
                                            className="w-full border-b-2 border-gray-200 py-3 text-lg focus:outline-none focus:border-black transition-colors"
                                            rows={2}
                                            placeholder="Me interesa ver sofás relax..."
                                        ></textarea>
                                    </div>

                                    <div className="mb-8">
                                        <label className="flex items-start cursor-pointer">
                                            <input type="checkbox" required className="mt-1 mr-3 w-5 h-5 accent-[#D97706]" />
                                            <span className="text-sm text-gray-500">
                                                He leído y acepto la <a href="/politica-privacidad" target="_blank" className="text-[#D97706] underline hover:text-[#b45309]">Política de Privacidad</a> *
                                            </span>
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formStatus === 'submitting'}
                                        className="btn btn-primary w-full py-4 text-white font-bold text-lg rounded shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {formStatus === 'submitting' ? 'Enviando...' : 'Confirmar Solicitud'}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
