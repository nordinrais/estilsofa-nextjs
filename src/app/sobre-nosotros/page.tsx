import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50 pb-20">

                {/* Hero Section */}
                <div className="container mx-auto px-6 py-12">
                    <div className="relative rounded-2xl overflow-hidden h-[400px] flex items-center justify-center text-center text-white">
                        <div className="absolute inset-0 bg-black/50 z-10"></div>
                        <Image
                            src="/assets/imagenes-banner-categorias/banner-sobre-nosotros-sofas-deslizantes.webp"
                            alt="Sobre Nosotros EstilSofa"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="relative z-20 max-w-3xl px-6">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Redefiniendo el Hogar Español</h1>
                            <p className="text-xl md:text-2xl font-light opacity-95 leading-relaxed">
                                No somos una tienda de muebles tradicional. Somos la respuesta a una nueva realidad donde el hogar
                                es el protagonista absoluto de la vida y el trabajo.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Vision Section */}
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 font-heading">Nuestra Visión: El Hogar como Eje Central</h2>
                        <div className="h-1 w-16 bg-primary mb-8"></div>
                        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                            Como bien señala el experto Giorgio Bonaventura, la fusión de los espacios de vida y trabajo ha
                            redefinido nuestras casas. Ya no buscamos solo "llenar espacios", sino crear entornos que cuenten
                            nuestra historia.
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            En un mercado donde el consumidor es cada vez más racional e informado, nosotros apostamos por la
                            <strong> durabilidad y el valor</strong>. No creemos en el "usar y tirar", sino en piezas que
                            aumentan su valor con el tiempo, elevando el ticket medio de bienestar de cada familia.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-8 rounded-2xl">
                        <div className="bg-white p-8 rounded-lg text-center mb-4 shadow-sm">
                            <div className="text-5xl font-bold text-black font-heading mb-2">+13%</div>
                            <p className="text-gray-600">Inversión media en confort (2022)</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg text-center shadow-sm">
                            <div className="text-4xl font-bold text-black font-heading mb-2">Tienda Física</div>
                            <p className="text-gray-600">El canal preferido para vivir la experiencia</p>
                        </div>
                    </div>
                </div>

                {/* Video Section */}
                <div className="container mx-auto px-6 mb-20">
                    <div className="rounded-2xl overflow-hidden shadow-xl bg-black aspect-video relative">
                        <video
                            controls
                            className="w-full h-full object-cover"
                            poster="/assets/imagen-tienda/fotostiendainteriores/showroom-images/exposicion-de-sofas-cama-y-sillones-en-tienda-fisica.webp"
                        >
                            <source src="/assets/Videos/video tienda.mp4" type="video/mp4" />
                            Tu navegador no soporta videos HTML5.
                        </video>
                    </div>
                </div>

                {/* Pillars Section */}
                <div className="container mx-auto px-6 mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 font-heading">Nuestros 4 Pilares Fundamentales</h2>
                        <p className="text-xl text-gray-600">Lo que nos diferencia en un sector en transformación</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Pillar 1 */}
                        <div className="bg-white p-10 rounded-xl border border-gray-200 shadow-sm hover:-translate-y-1 transition-transform">
                            <div className="text-4xl mb-6 bg-yellow-50 w-20 h-20 flex items-center justify-center rounded-full text-primary-dark">✨</div>
                            <h3 className="text-2xl font-bold mb-4 font-heading">Calidad y Diseño Personalizado</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Atención personalizada centrada en ti. Como indica Manel Cantarino, el cliente actual busca diseño y
                                calidad por encima de todo. Cada sofá se fabrica pensando en tus necesidades específicas, huyendo de
                                la estandarización masiva.
                            </p>
                        </div>

                        {/* Pillar 2 */}
                        <div className="bg-white p-10 rounded-xl border border-gray-200 shadow-sm hover:-translate-y-1 transition-transform">
                            <div className="text-4xl mb-6 bg-yellow-50 w-20 h-20 flex items-center justify-center rounded-full text-primary-dark">🚀</div>
                            <h3 className="text-2xl font-bold mb-4 font-heading">Logística Propia y Agilidad</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Sabemos que tu tiempo es oro. Por eso, al igual que los líderes del sector como Juan Manuel Millán,
                                hemos optimizado nuestra logística para que sea ágil y precisa. Controlamos el proceso al 100% para
                                evitar esperas innecesarias.
                            </p>
                        </div>

                        {/* Pillar 3 */}
                        <div className="bg-white p-10 rounded-xl border border-gray-200 shadow-sm hover:-translate-y-1 transition-transform">
                            <div className="text-4xl mb-6 bg-yellow-50 w-20 h-20 flex items-center justify-center rounded-full text-primary-dark">🔄</div>
                            <h3 className="text-2xl font-bold mb-4 font-heading">Experiencia Omnicanal (ROPO)</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Entendemos tu proceso: investigas online (Research Online) y compras offline (Purchase Offline).
                                Nuestra web es tu catálogo abierto 24/7, y nuestra tienda física, el lugar donde confirmar
                                sensaciones.
                            </p>
                        </div>

                        {/* Pillar 4 */}
                        <div className="bg-white p-10 rounded-xl border border-gray-200 shadow-sm hover:-translate-y-1 transition-transform">
                            <div className="text-4xl mb-6 bg-yellow-50 w-20 h-20 flex items-center justify-center rounded-full text-primary-dark">🤝</div>
                            <h3 className="text-2xl font-bold mb-4 font-heading">El Factor Humano</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Aunque somos digitales, creemos profundamente en la atención persona a persona. Nuestros asesores
                                expertos son el valor diferencial que ninguna pantalla puede sustituir, guiándote en una de las
                                inversiones más importantes de tu hogar.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quote Section */}
                <div className="container mx-auto px-6 mb-20">
                    <div className="bg-black text-white p-16 rounded-2xl text-center">
                        <h2 className="text-3xl font-bold mb-6 font-heading">Hacemos tus sueños realidad</h2>
                        <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-10 leading-relaxed">
                            "La financiación ha crecido un 8% en el sector, y nosotros no nos quedamos atrás. Ofrecemos soluciones
                            integradas para que el precio nunca sea un obstáculo entre tú y el confort que mereces."
                        </p>
                        <Link href="/nuestros-sofas" className="btn btn-primary px-8 py-3 text-lg">
                            Explorar Colección
                        </Link>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="text-center container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-4 font-heading">¿Listo para redescubrir tu hogar?</h2>
                    <p className="text-xl text-gray-600 mb-8">Ven a visitarnos y siente la diferencia.</p>
                    <div className="flex gap-4 justify-center">
                        <Link href="/visitanos" className="btn btn-outline border-black text-black hover:bg-black hover:text-white px-6">
                            Ver Ubicación
                        </Link>
                        <Link href="/visitanos" className="btn btn-primary px-6">
                            Contactar Ahora
                        </Link>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    );
}
