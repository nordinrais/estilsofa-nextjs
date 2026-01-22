import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: "Nuestros Sofás - EstilSofa: Colección Premium",
    description: "Descubre nuestra gama de sofás relax, deslizantes y cama. Personalización y confort garantizados.",
};

const categories = [
    {
        id: "relax",
        title: "Sofás Relax",
        description: "La combinación perfecta entre tecnología y descanso. Sistemas eléctricos silenciosos que se adaptan a tu postura ideal.",
        chips: ["Motor Pared Cero", "Máximo Confort", "Personalizable"],
        image: "/assets/categorias-de-sofas/categoria-sofas-relax/sofa-relax-electrico-motor-pared-cero-alta-gama.png",
        alt: "Sofá Relax Eléctrico"
    },
    {
        id: "deslizantes",
        title: "Sofás Deslizantes",
        description: "Gana espacio y comodidad. Asientos que se extienden para convertirse en chaise longue o cama improvisada.",
        chips: ["Asientos Extensibles", "Cabezal Reclinable", "Estructura Robusta"],
        image: "/assets/categorias-de-sofas/categoria-sofas-deslizantes/sofa-con-asientos-deslizantes-y-cabezales-reclinables-oferta.webp",
        alt: "Sofá Deslizante"
    },
    {
        id: "cama",
        title: "Sofás Cama",
        description: "Olvídate de los sofás cama incómodos. Diseños modernos con colchones de verdad para dormir como en una cama.",
        chips: ["Apertura Italiana", "Colchón Premium", "Uso Diario"],
        image: "/assets/categorias-de-sofas/categoria-sofas-cama/sofa-cama-apertura-italiana-con-colchon-viscoelastico-matrimonial-1.webp",
        alt: "Sofá Cama Italiano"
    },
    {
        id: "sillones",
        title: "Sillones Relax",
        description: "Tu propio espacio de confort. Manuales o eléctricos, con opciones levanta-personas para mayor autonomía.",
        chips: ["Individual", "Power Lift", "Geriátrico"],
        image: "/assets/categorias-de-sofas/categoria-sillones-relax/sillon-relax-levanta-personas-electrico-para-mayores-barato.webp",
        alt: "Sillón Relax"
    },
    {
        id: "fijos",
        title: "Sofás Fijos",
        description: "Elegancia pura sin mecanismos. Ideales para salones que buscan estética ligera y máxima durabilidad.",
        chips: ["Diseño Atemporal", "Patas Altas", "Fácil Limpieza"],
        image: "/assets/categorias-de-sofas/categoria-sofas-fijos/sofas-fijos-2-y-3-plazas-modernos.webp",
        alt: "Sofás Fijos"
    },
    {
        id: "sillones-fijos",
        title: "Sillones Fijos",
        description: "El complemento perfecto. Butacas y sillones de orejas que aportan calidez y estilo a cualquier rincón.",
        chips: ["Compacto", "Lectura", "Diseño"],
        image: "/assets/categorias-de-sofas/categoria-sillones-fijos/comprar-sillon-fijo-1-plazas-tapizado-tela-antimanchas.webp",
        alt: "Sillones Fijos"
    }
];

export default function NuestrosSofas() {
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-[#0F172A]">Descubre nuestra colección</h1>
                <p className="text-xl text-gray-600">Calidad, diseño y funcionalidad para cada hogar.</p>
            </div>

            <div className="space-y-16">
                {categories.map((cat, index) => (
                    <article
                        key={cat.id}
                        className={`flex flex-col md:flex-row items-center gap-0 md:gap-16 bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow group ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        <div className="w-full md:w-1/2 h-[300px] md:h-[400px] relative overflow-hidden">
                            <Link href={`/nuestros-sofas/${cat.id}`}>
                                <Image
                                    src={cat.image}
                                    alt={cat.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </Link>
                        </div>

                        <div className="w-full md:w-1/2 p-8 md:p-12">
                            <div className="flex flex-wrap gap-3 mb-6">
                                {cat.chips.map(chip => (
                                    <span key={chip} className="text-sm bg-gray-100 px-4 py-1 rounded-full text-gray-800 font-medium">
                                        {chip}
                                    </span>
                                ))}
                            </div>
                            <h2 className="text-3xl font-bold mb-4 font-heading text-[#0F172A]">{cat.title}</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                                {cat.description}
                            </p>
                            <Link href={`/nuestros-sofas/${cat.id}`} className="btn btn-primary inline-flex items-center justify-center px-6 py-3 rounded text-white font-semibold uppercase tracking-wider text-sm hover:bg-[#ecd75f] hover:text-[#0F172A] transition-colors">
                                Ver Modelos
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
