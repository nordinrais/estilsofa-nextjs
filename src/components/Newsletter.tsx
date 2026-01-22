"use client";

export default function Newsletter() {
    return (
        <section className="py-20 bg-gray-100 text-center">
            <div className="container mx-auto px-6 max-w-2xl">
                <h3 className="text-2xl font-bold mb-4">Únete al Club EstilSofa</h3>
                <p className="text-gray-600 mb-8">
                    Suscríbete para recibir novedades, consejos de decoración y ofertas exclusivas.
                </p>

                <form
                    action="#"
                    method="POST"
                    className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert('¡Gracias por suscribirte! Pronto recibirás noticias nuestras.');
                    }}
                >
                    <input
                        type="email"
                        placeholder="Tu email"
                        required
                        className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                    <button type="submit" className="btn btn-primary whitespace-nowrap">
                        Suscribirse
                    </button>
                </form>
            </div>
        </section>
    );
}
