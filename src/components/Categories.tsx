import Link from "next/link";
import Image from "next/image";

const categories = [
    {
        title: "Sofás Relax",
        image: "/assets/categorias-de-sofas/categoria-sofas-relax/sofa-relax-electrico-motor-pared-cero-alta-gama.png",
        link: "/nuestros-sofas/relax"
    },
    {
        title: "Sofás Deslizantes",
        image: "/assets/categorias-de-sofas/categoria-sofas-deslizantes/sofa-con-asientos-deslizantes-y-cabezales-reclinables-oferta.webp",
        link: "/nuestros-sofas/deslizantes"
    },
    {
        title: "Sofás Cama",
        image: "/assets/categorias-de-sofas/categoria-sofas-cama/sofa-cama-apertura-italiana-con-colchon-viscoelastico-matrimonial-1.webp",
        link: "/nuestros-sofas/cama"
    },
    {
        title: "Sillones Relax",
        image: "/assets/categorias-de-sofas/categoria-sillones-relax/sillon-relax-levanta-personas-electrico-para-mayores-barato.webp",
        link: "/nuestros-sofas/sillones"
    },
    {
        title: "Sillones Fijos",
        image: "/assets/categorias-de-sofas/categoria-sillones-fijos/comprar-sillon-fijo-1-plazas-tapizado-tela-antimanchas.webp",
        link: "/nuestros-sofas/sillones-fijos"
    },
    {
        title: "Sofás Fijos",
        image: "/assets/categorias-de-sofas/categoria-sofas-fijos/sofas-fijos-2-y-3-plazas-modernos.webp",
        link: "/nuestros-sofas/fijos"
    }
];

export default function Categories() {
    return (
        <section className="py-20" id="nuestros-sofas">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Categorías Destacadas</h2>
                    <p className="text-xl text-gray-600">Explora nuestros modelos por tipo</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, index) => (
                        <Link
                            key={index}
                            href={cat.link}
                            className="group block relative h-[300px] overflow-hidden rounded-lg shadow-lg"
                        >
                            <Image
                                src={cat.image}
                                alt={`${cat.title} - EstilSofa Valencia`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                                <h3 className="text-2xl font-bold">{cat.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
