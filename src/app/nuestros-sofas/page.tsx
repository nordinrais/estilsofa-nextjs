import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const catalogCategories = [
    {
        title: "Sofás Relax",
        slug: "relax",
        image: "/assets/categorias-de-sofas/categoria-sofas-relax/sofa-relax-electrico-motor-pared-cero-alta-gama.png",
        chips: ["Motor Pared Cero", "Máximo Confort", "Personalizable"],
        description: "La combinación perfecta entre tecnología y descanso. Sistemas eléctricos silenciosos que se adaptan a tu postura ideal."
    },
    {
        title: "Sofás Deslizantes",
        slug: "deslizantes",
        image: "/assets/categorias-de-sofas/categoria-sofas-deslizantes/sofa-con-asientos-deslizantes-y-cabezales-reclinables-oferta.webp",
        chips: ["Asientos Extensibles", "Cabezal Reclinable", "Estructura Robusta"],
        description: "Gana espacio y comodidad. Asientos que se extienden para convertirse en chaise longue o cama improvisada."
    },
    {
        title: "Sofás Cama",
        slug: "cama",
        image: "/assets/categorias-de-sofas/categoria-sofas-cama/sofa-cama-apertura-italiana-con-colchon-viscoelastico-matrimonial-1.webp",
        chips: ["Apertura Italiana", "Colchón Premium", "Uso Diario"],
        description: "Olvídate de los sofás cama incómodos. Diseños modernos con colchones de verdad para dormir como en una cama."
    },
    {
        title: "Sillones Relax",
        slug: "sillones",
        image: "/assets/categorias-de-sofas/categoria-sillones-relax/sillon-relax-levanta-personas-electrico-para-mayores-barato.webp",
        chips: ["Individual", "Power Lift", "Geriátrico"],
        description: "Tu propio espacio de confort. Manuales o eléctricos, con opciones levanta-personas para mayor autonomía."
    },
    {
        title: "Sofás Fijos",
        slug: "fijos",
        image: "/assets/categorias-de-sofas/categoria-sofas-fijos/sofas-fijos-2-y-3-plazas-modernos.webp",
        chips: ["Diseño Atemporal", "Patas Altas", "Fácil Limpieza"],
        description: "Elegancia pura sin mecanismos. Ideales para salones que buscan estética ligera y máxima durabilidad."
    },
    {
        title: "Sillones Fijos",
        slug: "sillones-fijos",
        image: "/assets/categorias-de-sofas/categoria-sillones-fijos/comprar-sillon-fijo-1-plazas-tapizado-tela-antimanchas.webp",
        chips: ["Compacto", "Lectura", "Diseño"],
        description: "El complemento perfecto. Butacas y sillones de orejas que aportan calidez y estilo a cualquier rincón."
    }
];

export default function Catalog() {
    return (
        <>
            <Header />
            <main className="container mx-auto px-6 py-12 min-h-screen bg-gray-50">

                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4 font-heading">Descubre nuestra colección</h1>
                    <p className="text-xl text-gray-600 font-light">
                        Calidad, diseño y funcionalidad para cada hogar.
                    </p>
                </div>

                <div className="flex flex-col gap-12">
                    {catalogCategories.map((cat, index) => (
                        <article key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm flex flex-col md:flex-row group hover:shadow-lg transition-shadow">
                            <div className={`flex-1 md:h-[400px] relative overflow-hidden ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                                <Link href={`/nuestros-sofas/${cat.slug}`}>
                                    <Image
                                        src={cat.image}
                                        alt={cat.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </Link>
                            </div>
                            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {cat.chips.map((chip, i) => (
                                        <span key={i} className="text-sm font-medium bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                                            {chip}
                                        </span>
                                    ))}
                                </div>
                                <h2 className="text-3xl font-bold mb-4 font-heading text-black">{cat.title}</h2>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-prose">
                                    {cat.description}
                                </p>
                                <div>
                                    <Link href={`/nuestros-sofas/${cat.slug}`} className="btn btn-primary px-8">
                                        Ver Modelos
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

            </main>
            <Footer />
        </>
    );
}
