import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: "Sobre Nosotros - EstilSofa: Artesanía y Confort",
    description: "Descubre nuestra visión del hogar, nuestra logística propia y el equipo humano detrás de EstilSofá.",
};

export default function SobreNosotros() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center mb-16 mx-6 mt-8 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/imagenes-banner-categorias/banner-sobre-nosotros-sofas-deslizantes.webp"
                        alt="Sobre Nosotros Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
                </div>

                <div className="relative z-10 text-center max-w-[800px] px-4 text-white">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">Redefiniendo el Hogar Español</h1>
                    <p className="text-xl opacity-95 leading-relaxed font-body">
                        No somos una tienda de muebles tradicional. Somos la respuesta a una nueva realidad donde el hogar
                        es el protagonista absoluto de la vida y el trabajo.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 py-12">
                {/* Vision Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 font-heading text-[#0F172A]">Nuestra Visión: El Hogar como Eje Central</h2>
                        <div className="h-1 w-[60px] bg-[#ecd75f] mb-8"></div>
                        <p className="text-lg text-[#1E293B] mb-6 leading-relaxed">
                            Como bien señala el experto Giorgio Bonaventura, la fusión de los espacios de vida y trabajo ha
                            redefinido nuestras casas. Ya no buscamos solo "llenar espacios", sino crear entornos que cuenten
                            nuestra historia.
                        </p>
                        <p className="text-lg text-[#1E293B] leading-relaxed">
                            En un mercado donde el consumidor es cada vez más racional e informado, nosotros apostamos por la
                            <strong> durabilidad y el valor</strong>. No creemos en el "usar y tirar", sino en piezas que
                            aumentan su valor con el tiempo, elevando el ticket medio de bienestar de cada familia.
                        </p>
                    </div>
                    <div className="bg-[#F1F5F9] p-8 rounded-2xl">
                        <div className="bg-white p-8 rounded-lg text-center mb-4 shadow-sm">
                            <div className="text-5xl font-bold text-[#0F172A] font-heading mb-2">+13%</div>
                            <p className="text-gray-600">Inversión media en confort (2022)</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg text-center shadow-sm">
                            <div className="text-4xl font-bold text-[#0F172A] font-heading mb-2">Tienda Física</div>
                            <p className="text-gray-600">El canal preferido para vivir la experiencia</p>
                        </div>
                    </div>
                </div>

                {/* Store Video Section */}
                <div className="mb-20 rounded-2xl overflow-hidden shadow-2xl">
                    <video controls width="100%" className="block w-full" poster="/assets/imagen-tienda/fotostiendainteriores/showroom-images/exposicion-de-sofas-cama-y-sillones-en-tienda-fisica.webp">
                        <source src="/assets/Videos/video tienda.mp4" type="video/mp4" />
                        Tu navegador no soporta videos HTML5.
                    </video>
                </div>

                {/* Pillars Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-[#0F172A]">Nuestros 4 Pilares Fundamentales</h2>
                    <p className="text-gray-600">Lo que nos diferencia en un sector en transformación</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {/* Calidad */}
                    <div className="bg-white p-10 rounded-lg border border-[#E2E8F0] shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
                        <div className="text-4xl mb-6 text-[#D97706] bg-[#fff8e1] w-[80px] h-[80px] flex items-center justify-center rounded-full">✨</div>
                        <h3 className="text-2xl font-bold mb-4 font-heading">Calidad y Diseño Personalizado</h3>
                        <p className="text-[#1E293B] leading-relaxed">
                            Atención personalizada centrada en ti. Como indica Manel Cantarino, el cliente actual busca diseño y
                            calidad por encima de todo. Cada sofá se fabrica pensando en tus necesidades específicas, huyendo de
                            la estandarización masiva.
                        </p>
                    </div>

                    {/* Logistica */}
                    <div className="bg-white p-10 rounded-lg border border-[#E2E8F0] shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
                        <div className="text-4xl mb-6 text-[#D97706] bg-[#fff8e1] w-[80px] h-[80px] flex items-center justify-center rounded-full">🚀</div>
                        <h3 className="text-2xl font-bold mb-4 font-heading">Logística Propia y Agilidad</h3>
                        <p className="text-[#1E293B] leading-relaxed">
                            Sabemos que tu tiempo es oro. Por eso, al igual que los líderes del sector como Juan Manuel Millán,
                            hemos optimizado nuestra logística para que sea ágil y precisa. Controlamos el proceso al 100% para
                            evitar esperas innecesarias.
                        </p>
                    </div>

                    {/* Omnicanalidad */}
                    <div className="bg-white p-10 rounded-lg border border-[#E2E8F0] shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
                        <div className="text-4xl mb-6 text-[#D97706] bg-[#fff8e1] w-[80px] h-[80px] flex items-center justify-center rounded-full">🔄</div>
                        <h3 className="text-2xl font-bold mb-4 font-heading">Experiencia Omnicanal (ROPO)</h3>
                        <p className="text-[#1E293B] leading-relaxed">
                            Entendemos tu proceso: investigas online (Research Online) y compras offline (Purchase Offline).
                            Nuestra web es tu catálogo abierto 24/7, y nuestra tienda física, el lugar donde confirmar
                            sensaciones.
                        </p>
                    </div>

                    {/* Factor Humano */}
                    <div className="bg-white p-10 rounded-lg border border-[#E2E8F0] shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
                        <div className="text-4xl mb-6 text-[#D97706] bg-[#fff8e1] w-[80px] h-[80px] flex items-center justify-center rounded-full">🤝</div>
                        <h3 className="text-2xl font-bold mb-4 font-heading">El Factor Humano</h3>
                        <p className="text-[#1E293B] leading-relaxed">
                            Aunque somos digitales, creemos profundamente en la atención persona a persona. Nuestros asesores
                            expertos son el valor diferencial que ninguna pantalla puede sustituir, guiándote en una de las
                            inversiones más importantes de tu hogar.
                        </p>
                    </div>
                </div>

                {/* Financing & Quote */}
                <div className="bg-[#0F172A] text-white p-16 rounded-2xl text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading text-white">Hacemos tus sueños realidad</h2>
                    <p className="text-xl max-w-[800px] mx-auto mb-10 text-gray-200">
                        "La financiación ha crecido un 8% en el sector, y nosotros no nos quedamos atrás. Ofrecemos soluciones
                        integradas para que el precio nunca sea un obstáculo entre tú y el confort que mereces."
                    </p>
                    <Link href="/nuestros-sofas" className="btn btn-primary px-8 py-4 text-lg inline-block">
                        Explorar Colección
                    </Link>
                </div>

                {/* CTA Final */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-2 font-heading text-[#0F172A]">¿Listo para redescubrir tu hogar?</h2>
                    <p className="text-gray-600 mb-8">Ven a visitarnos y siente la diferencia.</p>
                    <div className="flex gap-4 justify-center">
                        <Link href="/visitanos#mapa" className="btn btn-outline border-black text-black hover:bg-black hover:text-white px-6 py-3 rounded">
                            Ver Ubicación
                        </Link>
                        <Link href="/visitanos" className="btn btn-primary px-6 py-3 rounded">
                            Contactar Ahora
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}
