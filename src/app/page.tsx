import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero relative h-[80vh] min-h-[600px] flex items-center justify-center mt-8 bg-gray-100 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero/sofa-afrodita-tapizado-claro-pata-metalica-ambiente.webp"
            alt="Sofá Estilsofa Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="hero-content relative z-10 text-center max-w-[800px] px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
            El sofá que tu descanso merece
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-10 font-body">
            Diseño premium, mecanismos relax y personalización total. Encuentra tu confort perfecto.
          </p>
          <div className="hero-actions">
            <Link href="/nuestros-sofas" className="btn btn-primary px-8 py-4 text-lg">
              Ver Colección 2025
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Preview (Hub) */}
      <section className="py-20" id="nuestros-sofas">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-[#0F172A]">Categorías Destacadas</h2>
            <p className="text-gray-600 text-lg">Explora nuestros modelos por tipo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sofás Relax */}
            <Link href="/nuestros-sofas" className="category-card group block relative h-[300px] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/assets/categorias-de-sofas/categoria-sofas-relax/sofa-relax-electrico-motor-pared-cero-alta-gama.png"
                alt="Sofás Relax"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-2xl font-bold font-heading">Sofás Relax</h3>
              </div>
            </Link>

            {/* Sofás Deslizantes */}
            <Link href="/nuestros-sofas" className="category-card group block relative h-[300px] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/assets/categorias-de-sofas/categoria-sofas-deslizantes/sofa-con-asientos-deslizantes-y-cabezales-reclinables-oferta.webp"
                alt="Sofás Deslizantes"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-2xl font-bold font-heading">Sofás Deslizantes</h3>
              </div>
            </Link>

            {/* Sofás Cama */}
            <Link href="/nuestros-sofas" className="category-card group block relative h-[300px] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/assets/categorias-de-sofas/categoria-sofas-cama/sofa-cama-apertura-italiana-con-colchon-viscoelastico-matrimonial-1.webp"
                alt="Sofás Cama"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-2xl font-bold font-heading">Sofás Cama</h3>
              </div>
            </Link>

            {/* Sillones Relax */}
            <Link href="/nuestros-sofas" className="category-card group block relative h-[300px] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/assets/categorias-de-sofas/categoria-sillones-relax/sillon-relax-levanta-personas-electrico-para-mayores-barato.webp"
                alt="Sillones Relax"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-2xl font-bold font-heading">Sillones Relax</h3>
              </div>
            </Link>

            {/* Sillones Fijos */}
            <Link href="/nuestros-sofas" className="category-card group block relative h-[300px] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/assets/categorias-de-sofas/categoria-sillones-fijos/comprar-sillon-fijo-1-plazas-tapizado-tela-antimanchas.webp"
                alt="Sillones Fijos"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-2xl font-bold font-heading">Sillones Fijos</h3>
              </div>
            </Link>

            {/* Sofás Fijos */}
            <Link href="/nuestros-sofas" className="category-card group block relative h-[300px] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/assets/categorias-de-sofas/categoria-sofas-fijos/sofas-fijos-2-y-3-plazas-modernos.webp"
                alt="Sofás Fijos"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-2xl font-bold font-heading">Sofás Fijos</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros Brief */}
      <section className="py-20 bg-gray-50 from-gray-50 to-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading text-[#0F172A]">Artesanía y Confort</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              En EstilSofa fabricamos descanso desde hace más de una década. Nuestro compromiso es ofrecer sofás
              que no solo decoren tu hogar, sino que mejoren tu calidad de vida.
            </p>
            <p className="text-gray-700 text-lg mb-10 leading-relaxed">
              Utilizamos materiales de primera calidad, estructuras reforzadas y las últimas tecnologías en
              mecanismos relax y deslizantes. Cada pieza es única y personalizable.
            </p>
            <div>
              <Link href="/sobre-nosotros" className="btn btn-outline px-8 py-3 rounded border border-black text-black font-semibold hover:bg-black hover:text-white transition-colors">
                Conócenos Mejor
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[400px]">
            {/* Facade Image (Large, Left) */}
            <div className="row-span-2 rounded-lg overflow-hidden relative">
              <Image
                src="/assets/imagen-tienda/fotosfachadatiendaes/tienda-estilos-exterior-.webp"
                alt="Tienda Exterior"
                fill
                className="object-cover"
              />
            </div>
            {/* Interior 1 */}
            <div className="rounded-lg overflow-hidden relative">
              <Image
                src="/assets/imagen-tienda/fotostiendainteriores/showroom-images/interior-tienda-de-muebles-zona-de-prueba-de-sofas.webp"
                alt="Interior Tienda 1"
                fill
                className="object-cover"
              />
            </div>
            {/* Interior 2 */}
            <div className="rounded-lg overflow-hidden relative">
              <Image
                src="/assets/imagen-tienda/fotostiendainteriores/showroom-images/amplia-exposicion-de-sillones-relax-electricos-y-manuales.webp"
                alt="Interior Tienda 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
