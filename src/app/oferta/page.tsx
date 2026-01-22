
import Image from 'next/image';
import Link from 'next/link';
import OfferForm from '@/components/offer/OfferForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Oferta Exclusiva Sillón TOUS | EstilSofa',
    description: 'Sillón Relax Power Lift TOUS por solo 499€. Mejora tu calidad de vida con el sistema levantapersonas y entrega Guante Blanco.',
    openGraph: {
        title: 'Oferta Exclusiva Sillón TOUS - EstilSofa',
        description: 'Sillón Relax Power Lift TOUS por solo 499€. Mejora tu calidad de vida.',
        images: ['/assets/sillones-relax/sillon-relax-pl-tous/01_sillon-relax-levantapersonas-barato.webp'],
        type: 'website',
    },
};

export default function OfferPage() {
    return (
        <div className="bg-gray-50 font-sans">
            {/* HERO SECTION - Split Design */}
            <section className="relative overflow-hidden bg-white">
                <div className="container mx-auto px-0 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] items-center">
                        <div className="p-8 md:p-16 lg:pr-8 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
                            <span className="inline-block px-4 py-1 bg-green-100 text-green-700 font-bold rounded-full text-sm mb-6 w-fit mx-auto lg:mx-0">
                                🔥 Oferta Limitada
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6 leading-tight font-heading">
                                Recupere su independencia <span className="text-[#D97706]">sin esfuerzo</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                El <strong>Sillón Power Lift TOUS</strong>: la solución definitiva para el descanso y la movilidad en el hogar. Levántese y siéntese con total seguridad.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link href="#reservar" className="bg-[#D97706] text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-[#b45309] hover:-translate-y-1 transition-all">
                                    Solicitar Prueba
                                </Link>
                                <Link href="tel:961443681" className="border-2 border-[#0F172A] text-[#0F172A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                    <span>📞</span> 961 443 681
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-[400px] lg:h-full w-full bg-gray-100 order-1 lg:order-2">
                            <Image
                                src="/assets/sillones-relax/sillon-relax-pl-tous/01_sillon-relax-levantapersonas-barato.webp"
                                alt="Sillón TOUS Power Lift"
                                fill
                                className="object-cover lg:object-contain object-center p-8"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            <main className="container mx-auto px-4 py-16">

                {/* 1. INTRO HEADER */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6 font-heading">El descanso que tu cuerpo necesita</h2>
                    <p className="text-xl text-gray-600 leading-relaxed font-light">
                        Recupera la vitalidad y dale a tu cuerpo el respiro que merece. Diseñado pensando en la ergonomía avanzada y el cuidado integral de la salud.
                        <strong className="block mt-2 text-gray-800 font-medium">No es solo un asiento; es tu centro de recuperación personal en casa.</strong>
                    </p>
                </div>

                {/* 2. MAIN PRODUCT FEATURE SPLIT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Image Column */}
                    <div className="order-2 lg:order-1">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-4">
                            <Image
                                src="/assets/sillones-relax/sillon-relax-pl-tous/02_sillon-relax-electrico-con-motor.webp"
                                alt="Sillón TOUS Relax Eléctrico"
                                width={800}
                                height={800}
                                className="w-full h-auto rounded-xl"
                            />
                            <div className="bg-gray-50 p-4 border-l-4 border-[#D97706] mt-4 rounded-r text-sm text-gray-700">
                                <strong>Medidas Ideales:</strong> Ancho: 76 cm | Fondo: 90 cm | Alto: 105 cm
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-4xl font-bold text-[#0F172A] mb-2 font-heading">Sillón Relax TOUS</h2>
                        <p className="text-xl text-gray-500 mb-6">Con sistema Power Lift (Levantapersonas) y mando a distancia.</p>

                        <div className="flex items-center gap-6 mb-8">
                            <span className="text-3xl text-gray-400 line-through decoration-red-500 decoration-2">799€</span>
                            <span className="text-6xl font-bold text-[#D97706]">499€</span>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-8">
                            <h4 className="font-bold text-[#0F172A] text-lg border-b pb-2 mb-4">✨ Características Premium:</h4>
                            <ul className="space-y-3">
                                {['Motor silencioso de alta durabilidad', 'Tela agradable y fácil de limpiar', 'Mando sencillo de 2 botones', 'Bolsillo lateral porta-objetos'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700">
                                        <span className="text-green-500 text-xl">✅</span> {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 pt-4 border-t">
                                <p className="text-sm text-gray-500 mb-3">Colores disponibles (Stock inmediato):</p>
                                <div className="flex gap-6">
                                    <div className="group cursor-pointer">
                                        <div className="w-12 h-12 rounded-full bg-[#A6A6A6] border-2 border-gray-200 group-hover:border-[#D97706] group-hover:scale-110 transition-all shadow-sm"></div>
                                        <span className="text-xs text-center block mt-1 text-gray-500">Piedra</span>
                                    </div>
                                    <div className="group cursor-pointer">
                                        <div className="w-12 h-12 rounded-full bg-[#8D837D] border-2 border-gray-200 group-hover:border-[#D97706] group-hover:scale-110 transition-all shadow-sm"></div>
                                        <span className="text-xs text-center block mt-1 text-gray-500">Mouse</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="#reservar" className="flex-1 bg-[#D97706] text-white text-center py-4 rounded-lg font-bold text-lg hover:bg-[#b45309] shadow-md transition-all">
                                Reservar Oferta
                            </Link>
                            <a
                                href="https://wa.me/34677481926?text=Hola,%20estoy%20viendo%20la%20oferta%20del%20Sill%C3%B3n%20TOUS%20y%20me%20gustar%C3%ADa%20asesoramiento."
                                target="_blank"
                                className="flex-1 bg-[#25D366] text-white text-center py-4 rounded-lg font-bold text-lg hover:opacity-90 shadow-md transition-all flex items-center justify-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                </svg>
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                {/* 3. BENEFITS GRID */}
                <div className="mb-20">
                    <div className="text-center mb-12 relative">
                        <h3 className="text-3xl font-bold inline-block relative z-10 bg-gray-50 px-8">Beneficios para tu Salud</h3>
                        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300 -z-0"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Independencia", text: "Motor elevador que te permite levantarte sin esfuerzo, ideal para cuidar articulaciones." },
                            { title: "Circulación", text: "Eleva las piernas para favorecer el retorno venoso y aliviar la hinchazón o pesadez." },
                            { title: "Cuidado Espalda", text: "Diseño ergonómico que se adapta a la curvatura natural, liberando tensión lumbar." },
                            { title: "Relax Total", text: "Reclinación suave que ayuda a bajar niveles de estrés y cortisol." }
                        ].map((card, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#D97706] hover:transform hover:-translate-y-2 transition-transform duration-300">
                                <h4 className="font-bold text-xl mb-3 text-gray-800">{card.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. TRUST BADGES */}
                <section className="bg-white rounded-2xl p-12 shadow-inner mb-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold font-heading mb-2">Ingeniería de la Confianza</h2>
                        <p className="text-gray-500">Seguridad certificada y tranquilidad total.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            { icon: "🇪🇺", title: "Marcado CE", desc: "Cumple normativa europea" },
                            { icon: "🛡️", title: "Garantía 3 Años", desc: "Cobertura completa" },
                            { icon: "🚚", title: "Envío Rápido", desc: "Disponibilidad inmediata" }
                        ].map((badge, i) => (
                            <div key={i} className="text-center p-6 border rounded-xl hover:shadow-md transition-shadow">
                                <span className="text-4xl mb-4 block">{badge.icon}</span>
                                <h3 className="font-bold text-lg mb-1">{badge.title}</h3>
                                <p className="text-sm text-gray-500">{badge.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. WHITE GLOVE SERVICE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-bold mb-6 font-heading">Entrega "Guante Blanco"</h2>
                        <p className="text-lg text-gray-600 mb-6">Sabemos que recibir un mueble puede ser estresante. Por eso, nuestro servicio incluye:</p>
                        <ul className="space-y-4">
                            {[
                                "Subida a Domicilio: Lo dejamos donde tú elijas.",
                                "Montaje Profesional: Instalación y prueba in-situ.",
                                "Retirada de Embalajes: No dejamos cartones.",
                                "Explicación de Uso: Te enseñamos a usar el mando."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-green-500 flex-shrink-0 mt-1">✅</span>
                                    <span className="text-gray-800 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-lg h-[300px] relative">
                        <Image
                            src="/assets/sillones-relax/sillon-relax-pl-tous/03_sillon-relax-automatico-con-mando.webp"
                            alt="Mando sencillo de usar"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* 6. FORM SECTION */}
                <div id="reservar" className="max-w-2xl mx-auto scroll-mt-24">
                    <OfferForm />
                </div>

            </main>
        </div>
    );
}
