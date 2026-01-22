import Link from "next/link";

export default function Offers() {
    return (
        <section className="py-20" id="ofertas">
            <div className="container mx-auto px-6 text-center">
                <span className="text-primary-dark font-bold uppercase tracking-widest text-sm mb-2 block">
                    Oportunidades Únicas
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Ofertas Especiales</h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Offer 1 */}
                    <div className="bg-white p-8 border border-primary/20 rounded-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                        <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                            FLASH
                        </div>
                        <h3 className="text-2xl font-bold mb-3 font-heading">Oferta flash</h3>
                        <p className="text-gray-600 mb-6">Descuentos de hasta el 30% en exposición.</p>
                        <Link href="/oferta" className="btn bg-primary-dark text-white hover:bg-primary hover:text-black w-full justify-center">
                            Consultar
                        </Link>
                    </div>

                    {/* Offer 2 */}
                    <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-2xl font-bold mb-3 font-heading">Pack Relax</h3>
                        <p className="text-gray-600 mb-6">2 Sillones Relax con precio especial.</p>
                        <Link href="/visitanos" className="btn btn-outline w-full justify-center">
                            Consultar
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
