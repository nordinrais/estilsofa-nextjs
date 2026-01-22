'use client';

import { useState } from 'react';

export default function OfferForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        privacy: false,
        newsletter: false
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setStatus('success');
        setFormData({ name: '', phone: '', privacy: false, newsletter: false });
    };

    return (
        <div className="bg-white border-2 border-[#D97706] p-8 md:p-12 rounded-xl shadow-2xl relative overflow-hidden">
            {status === 'success' ? (
                <div className="text-center py-12 animate-fadeIn">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-4xl">✅</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">¡Solicitud Recibida!</h3>
                    <p className="text-gray-600 text-lg">
                        Gracias por su interés. Un especialista de EstilSofá le llamará en breve al número indicado para confirmar detalles y responder sus dudas.
                    </p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="mt-8 text-[#D97706] font-semibold hover:underline"
                    >
                        Volver al formulario
                    </button>
                </div>
            ) : (
                <>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900">
                        Solicite el Sillón TOUS por <span className="text-[#D97706]">499€</span>
                    </h2>
                    <p className="text-center text-gray-600 mb-8 text-lg">
                        Déjenos su teléfono y le llamaremos para confirmar el color y la entrega gratuita.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-800 font-bold mb-2">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D97706] focus:border-transparent outline-none transition-all"
                                placeholder="Su nombre completo"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-gray-800 font-bold mb-2">Teléfono de Contacto</label>
                            <input
                                type="tel"
                                id="phone"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D97706] focus:border-transparent outline-none transition-all"
                                placeholder="Ej: 600 123 456"
                            />
                        </div>

                        <div className="space-y-4 pt-2">
                            <label className="flex items-start gap-3 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        required
                                        checked={formData.privacy}
                                        onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 checked:bg-[#D97706] checked:border-[#D97706] transition-all"
                                    />
                                    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none opacity-0 peer-checked:opacity-100 text-white transition-opacity" viewBox="0 0 14 14" fill="none">
                                        <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="text-gray-600 text-sm leading-relaxed">
                                    He leído y acepto la <a href="/politica-privacidad" target="_blank" className="text-[#D97706] hover:underline">Política de Privacidad</a> *
                                </span>
                            </label>

                            <label className="flex items-start gap-3 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={formData.newsletter}
                                        onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 checked:bg-[#D97706] checked:border-[#D97706] transition-all"
                                    />
                                    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none opacity-0 peer-checked:opacity-100 text-white transition-opacity" viewBox="0 0 14 14" fill="none">
                                        <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="text-gray-600 text-sm leading-relaxed">
                                    Deseo recibir información sobre ofertas y novedades
                                </span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className={`w-full bg-[#D97706] hover:bg-[#b45309] text-white font-bold py-4 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ${status === 'submitting' ? 'opacity-75 cursor-wait' : ''}`}
                        >
                            {status === 'submitting' ? 'Enviando...' : 'Solicitar Llamada Gratuita'}
                        </button>

                        <p className="text-xs text-center text-gray-500 mt-4">
                            * Campos obligatorios. Tus datos están 100% seguros.
                        </p>
                    </form>
                </>
            )}
        </div>
    );
}
