import Link from "next/link";
import Image from "next/image";

export default function AboutPreview() {
    return (
        <section className="py-20 bg-gray-50" id="sobre-nosotros">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Artesanía y Confort</h2>
                    <p className="text-lg text-gray-800 mb-4 leading-relaxed">
                        En EstilSofa fabricamos descanso desde hace más de una década. Nuestro compromiso es ofrecer sofás
                        que no solo decoren tu hogar, sino que mejoren tu calidad de vida.
                    </p>
                    <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                        Utilizamos materiales de primera calidad, estructuras reforzadas y las últimas tecnologías en
                        mecanismos relax y deslizantes. Cada pieza es única y personalizable.
                    </p>
                    <Link href="/sobre-nosotros" className="btn btn-outline min-w-[200px]">
                        Conócenos Mejor
                    </Link>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[400px]">
                    <div className="row-span-2 relative rounded-lg overflow-hidden h-full">
                        <Image
                            src="/assets/imagen-tienda/fotosfachadatiendaes/tienda-estilos-exterior-.webp"
                            alt="Tienda EstilSofa Museros Valencia - Exterior"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative rounded-lg overflow-hidden h-full">
                        <Image
                            src="/assets/imagen-tienda/fotostiendainteriores/showroom-images/interior-tienda-de-muebles-zona-de-prueba-de-sofas.webp"
                            alt="Showroom EstilSofa"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative rounded-lg overflow-hidden h-full">
                        <Image
                            src="/assets/imagen-tienda/fotostiendainteriores/showroom-images/amplia-exposicion-de-sillones-relax-electricos-y-manuales.webp"
                            alt="Exposición Sillones Relax EstilSofa"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
