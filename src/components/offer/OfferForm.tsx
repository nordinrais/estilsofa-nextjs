'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function OfferForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        consent: false,
        newsletter: false
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.consent) {
            alert("Por favor, acepta la política de privacidad.");
            return;
        }

        if (!supabase) {
            console.error("Supabase not initialized");
            setStatus('error');
            setErrorMessage('Error de configuración en el servidor. Inténtalo más tarde.');
            return;
        }

        setStatus('submitting');
        setErrorMessage('');

        try {
            const { error } = await supabase
                .from('leads')
                .insert([
                    {
                        name: formData.name,
                        phone: formData.phone,
                        source: 'offer-landing-picasso',
                        message: formData.newsletter ? 'Opt-in newsletter' : ''
                    }
                ]);

            if (error) throw error;

            setStatus('success');
            setFormData({ name: '', phone: '', consent: false, newsletter: false });
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setErrorMessage('Hubo un error al enviar tus datos. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* OPCIÓN 1: COMPRA DIRECTA (NUEVO DISEÑO DESTACADO) */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-green-500 relative overflow-hidden order-1 lg:order-1 transform hover:scale-[1.01] transition-transform">
                <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                    OPCIÓN RECOMENDADA
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-2">COMPRA DIRECTA</h3>
                <p className="text-gray-500 mb-8">Recíbelo en 48/72h sin esperas.</p>

                <div className="flex flex-col gap-6 items-center justify-center h-[60%]">
                    <a
                        href="https://buy.stripe.com/3cIdR80xJ73ea6r6cI4AU01"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-6 bg-green-600 hover:bg-green-700 text-white font-black text-2xl rounded-xl shadow-lg hover:shadow-2xl flex flex-col items-center justify-center gap-1 group transition-all"
                    >
                        <span>COMPRAR AHORA</span>
                        <span className="text-green-100 text-sm font-normal group-hover:text-white">Pago Único: 499€ (IVA Inc.)</span>
                    </a>

                    <div className="grid grid-cols-2 gap-4 w-full text-sm text-gray-600 mt-4">
                        <div className="flex items-center gap-2"><span className="text-green-500 text-xl">🔒</span> Pago 100% Seguro</div>
                        <div className="flex items-center gap-2"><span className="text-green-500 text-xl">🚚</span> Envío Gratuito</div>
                        <div className="flex items-center gap-2"><span className="text-green-500 text-xl">🛡️</span> Garantía 3 Años</div>
                        <div className="flex items-center gap-2"><span className="text-green-500 text-xl">↩️</span> Devolución 14 días</div>
                    </div>
                </div>
            </div>

            {/* OPCIÓN 2: SOLICITAR LLAMADA (FORMULARIO EXISTENTE) */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 order-2 lg:order-2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">¿Tienes Dudas? Te llamamos</h3>
                <p className="text-gray-500 mb-6 text-sm">Déjanos tu teléfono y un especialista te explicará todo sin compromiso.</p>

                {status === 'success' ? (
                    <div className="bg-green-100 text-green-800 p-6 rounded-xl text-center border border-green-200">
                        <div className="text-4xl mb-2">✅</div>
                        <p className="font-bold text-lg">¡Solicitud Enviada!</p>
                        <p className="text-sm">Te llamaremos en unos minutos.</p>
                        <button onClick={() => setStatus('idle')} className="mt-4 text-xs text-green-700 underline">Volver al formulario</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                placeholder="Tu nombre"
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                placeholder="Tu teléfono"
                            />
                        </div>

                        <div className="space-y-2 pt-1">
                            <label className="flex items-start gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    required
                                    checked={formData.consent}
                                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                                    className="mt-1 w-4 h-4 text-gray-600 rounded border-gray-300 focus:ring-gray-500"
                                />
                                <span className="text-xs text-gray-500">Acepto la política de privacidad *</span>
                            </label>
                            <label className="flex items-start gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={formData.newsletter}
                                    onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                                    className="mt-1 w-4 h-4 text-gray-600 rounded border-gray-300 focus:ring-gray-500"
                                />
                                <span className="text-xs text-gray-500">Recibir ofertas</span>
                            </label>
                        </div>

                        {status === 'error' && <div className="text-red-600 text-xs text-center">{errorMessage}</div>}

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 rounded-lg shadow-md transition-all disabled:opacity-70"
                        >
                            {status === 'submitting' ? 'Enviando...' : 'SOLICITAR LLAMADA GRATIS'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
