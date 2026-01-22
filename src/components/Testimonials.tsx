import Link from "next/link";

const reviews = [
    {
        author: "María José G.",
        text: "Compramos un sofá relax y estamos encantados. La atención en tienda fue excelente y el montaje muy rápido. 100% recomendables.",
        rating: 5
    },
    {
        author: "Carlos R.",
        text: "Muy buena calidad precio. El sofá deslizante que elegimos es comodísimo. Gracias por el asesoramiento.",
        rating: 5
    },
    {
        author: "Ana B.",
        text: "Servicio impecable. Nos trajeron el sofá y se llevaron el viejo. Muy profesionales.",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-white border-t border-gray-200">
            <div className="container mx-auto px-6 text-center">
                <span className="text-[#F5A623] font-bold uppercase tracking-widest text-sm mb-2 block">
                    Clientes Felices
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Lo que dicen de nosotros</h2>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-lg text-left shadow-sm">
                            <div className="text-[#F5A623] mb-2 text-xl">
                                {"★".repeat(review.rating)}
                            </div>
                            <p className="italic text-gray-800 mb-4 leading-relaxed">
                                "{review.text}"
                            </p>
                            <p className="font-semibold text-gray-900">— {review.author}</p>
                        </div>
                    ))}
                </div>

                <Link
                    href="https://www.google.com/search?q=estilsofa+valencia#lrd=0xd6041c6c6c6c6c7:0x1,1,,,"
                    target="_blank"
                    className="btn btn-outline"
                >
                    Ver todas las reseñas en Google
                </Link>
            </div>
        </section>
    );
}
