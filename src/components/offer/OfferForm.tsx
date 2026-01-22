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
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            {/* ... rest of the component ... */}
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Solicitar Oferta</h3>
            <p className="text-gray-600 mb-6">Déjanos tus datos y te llamamos para confirmar disponibilidad y envío.</p>

            {status === 'success' ? (
                <div className="bg-green-50 text-green-800 p-4 rounded-lg text-center animate-fadeIn">
                    <p className="font-bold text-lg">¡Gracias {formData.name}!</p>
                    <p>Hemos recibido tu solicitud. Te llamaremos en breve.</p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="mt-4 text-sm text-green-700 underline"
                    >
                        Enviar otra solicitud
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D97706] focus:border-transparent transition-all"
                            placeholder="Tu nombre"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                        <input
                            type="tel"
                            id="phone"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D97706] focus:border-transparent transition-all"
                            placeholder="600 000 000"
                        />
                    </div>

                    <div className="space-y-3 pt-2">
                        <label className="flex items-start gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                required
                                checked={formData.consent}
                                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                                className="mt-1 w-4 h-4 text-[#D97706] rounded border-gray-300 focus:ring-[#D97706]"
                            />
                            <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                                Acepto la <a href="#" className="underline decoration-gray-400 hover:decoration-[#D97706]">política de privacidad</a> *
                            </span>
                        </label>
                        <label className="flex items-start gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={formData.newsletter}
                                onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                                className="mt-1 w-4 h-4 text-[#D97706] rounded border-gray-300 focus:ring-[#D97706]"
                            />
                            <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                                Quiero recibir ofertas exclusivas
                            </span>
                        </label>
                    </div>

                    {status === 'error' && (
                        <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                            {errorMessage}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full bg-[#D97706] hover:bg-[#b45309] text-white font-bold py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {status === 'submitting' ? 'Enviando...' : 'SOLICITAR AHORA'}
                    </button>

                    <p className="text-xs text-center text-gray-400 mt-4">
                        🔒 Tus datos están 100% seguros y no serán compartidos.
                    </p>
                </form>
            )}
        </div>
    );
}
