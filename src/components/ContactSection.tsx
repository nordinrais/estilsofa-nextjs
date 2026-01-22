import Link from "next/link";

export default function ContactSection() {
    return (
        <section className="py-20 bg-black text-white" id="contacto">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-4xl font-bold mb-8 text-white">Visítanos</h2>

                    <div className="mb-8">
                        <h4 className="text-primary text-xl font-bold mb-2">EstilSofa</h4>
                        <p className="text-gray-300 leading-relaxed">
                            Avinguda Lluis Santángel 67<br />
                            Museros, 46136, Valencia
                        </p>
                    </div>

                    <div className="mb-10">
                        <h4 className="text-primary text-xl font-bold mb-4">Contacto</h4>
                        <div className="space-y-2 text-gray-300">
                            <p>Tel: <a href="tel:961443681" className="text-white hover:text-primary transition-colors">961 443 681</a></p>
                            <p>WhatsApp: <a href="https://wa.me/34677481926" className="text-white hover:text-primary transition-colors">677 481 926</a></p>
                            <p>Email: <a href="mailto:info@estilsofa.com" className="text-white hover:text-primary transition-colors">info@estilsofa.com</a></p>
                        </div>
                    </div>

                    <Link href="/visitanos" className="btn btn-primary">
                        Solicitar Cita Previa
                    </Link>
                </div>

                <div className="min-h-[400px] bg-gray-800 rounded-lg overflow-hidden relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3077.578687726615!2d-0.3349784235339243!3d39.56114740947701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6041c6c6c6c6c7%3A0x1!2zMznCsDMzJzQwLjEiTiAwwrAxOSc1Ni43Ilc!5e0!3m2!1ses!2ses!4v1703876000000!5m2!1ses!2ses"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className="absolute inset-0"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
