import Link from "next/link";

export default function Hero() {
    return (
        <section
            className="hero relative flex items-center justify-center overflow-hidden mt-8 md:mt-0 min-h-[600px] h-[80vh] bg-gray-100"
            style={{
                backgroundImage: "url('/assets/hero/sofa-afrodita-tapizado-claro-pata-metalica-ambiente.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            <div className="absolute inset-0 bg-black/30 z-10"></div>

            <div className="relative z-20 text-center max-w-[800px] px-8 text-white">
                <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-white drop-shadow-md">
                    El sofá que tu descanso merece
                </h1>
                <p className="text-xl md:text-2xl text-gray-100 mb-10 font-light">
                    Diseño premium, mecanismos relax y personalización total. Encuentra tu confort perfecto.
                </p>
                <div className="hero-actions">
                    <Link href="/nuestros-sofas" className="btn btn-primary text-lg px-8 py-3">
                        Ver Colección 2025
                    </Link>
                </div>
            </div>
        </section>
    );
}
