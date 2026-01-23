
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Aviso Legal - EstilSofá",
    description: "Aviso Legal de EstilSofá. Información sobre condiciones de uso del sitio web.",
};

export default function AvisoLegalPage() {
    return (
        <main className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 pb-4 border-b-4 border-[#ecd75f] text-[#0F172A]">
                Aviso Legal
            </h1>
            <p className="text-gray-600 mb-8 font-medium">
                <strong>Última actualización:</strong> 5 de enero de 2026
            </p>

            <div className="prose prose-slate max-w-none text-gray-700">
                <p>
                    En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de
                    Comercio Electrónico (LSSI-CE), le informamos de los siguientes datos:
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    1. Datos Identificativos del Titular
                </h2>
                <div className="bg-blue-50 border-l-4 border-[#ecd75f] p-6 my-6 rounded-md">
                    <p className="mb-0">
                        <strong>Denominación social:</strong> EstilSofá<br />
                        <strong>CIF:</strong> B98402365<br />
                        <strong>Domicilio social:</strong> Avinguda Luis Santangel 67, Museros, 46136, Valencia<br />
                        <strong>Teléfono:</strong> 961 443 681<br />
                        <strong>WhatsApp:</strong> 677 481 926<br />
                        <strong>Email:</strong> info@estilsofa.com<br />
                        <strong>Sitio web:</strong> www.estilsofa.com
                    </p>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    2. Objeto
                </h2>
                <p>
                    El presente Aviso Legal regula el uso y utilización del sitio web www.estilsofa.com, del que es titular
                    EstilSofá.
                </p>
                <p>
                    La navegación por el sitio web atribuye la condición de <strong>usuario</strong> del mismo e implica la
                    aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    3. Condiciones de Uso
                </h2>
                <h3 className="text-xl font-bold mt-6 mb-3 text-[#0F172A]">3.1. Uso Permitido</h3>
                <p>El usuario se compromete a utilizar el sitio web, sus contenidos y servicios de conformidad con:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>La legislación vigente</li>
                    <li>El presente Aviso Legal</li>
                    <li>Las buenas costumbres y el orden público</li>
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-3 text-[#0F172A]">3.2. Uso Prohibido</h3>
                <p>Queda expresamente prohibido:</p>
                <ul className="list-none pl-0 mb-4 space-y-2">
                    <li>❌ Realizar acciones que puedan dañar, inutilizar o sobrecargar el sitio web</li>
                    <li>❌ Introducir virus, código malicioso o cualquier tecnología dañina</li>
                    <li>❌ Intentar acceder a áreas restringidas del sistema</li>
                    <li>❌ Utilizar el sitio para actividades ilícitas o contrarias a la buena fe</li>
                    <li>❌ Reproducir, copiar, distribuir o modificar los contenidos sin autorización</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    4. Propiedad Intelectual e Industrial
                </h2>
                <p>
                    Todos los contenidos del sitio web (textos, imágenes, diseño gráfico, código fuente, logotipos, marcas, etc.)
                    son propiedad de <strong>EstilSofá</strong> o de terceros que han autorizado su uso, y están protegidos por
                    derechos de propiedad intelectual e industrial.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    5. Compras Online
                </h2>
                <h3 className="text-xl font-bold mt-6 mb-3 text-[#0F172A]">5.1. Precios</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Todos los precios incluyen IVA (21%)</li>
                    <li>Los precios pueden variar sin previo aviso</li>
                    <li>Las ofertas tienen validez limitada (se indica plazo)</li>
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-3 text-[#0F172A]">5.2. Envíos y Entregas</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Zona de entrega:</strong> Valencia y alrededores</li>
                    <li><strong>Plazo de entrega:</strong> 7-30 días laborables</li>
                    <li><strong>Gastos de envío:</strong> Según destino y peso</li>
                    <li><strong>Montaje:</strong> No incluye montaje</li>
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-3 text-[#0F172A]">5.3. Derecho de Desistimiento</h3>
                <p>Según la Ley General para la Defensa de los Consumidores y Usuarios:</p>
                <ul className="list-none pl-0 mb-4 space-y-2">
                    <li>✓ <strong>Plazo:</strong> 14 días naturales desde la recepción del producto</li>
                    <li>✓ <strong>Procedimiento:</strong> Notificación por email o correo postal</li>
                    <li>✓ <strong>Devolución:</strong> El producto debe estar en perfecto estado, sin usar</li>
                    <li>✓ <strong>Reembolso:</strong> Se realizará en un plazo máximo de 14 días</li>
                </ul>
                <p><strong>Gastos de devolución:</strong> A cargo del cliente</p>

                <h3 className="text-xl font-bold mt-6 mb-3 text-[#0F172A]">5.4. Garantías</h3>
                <p>Todos nuestros productos cuentan con:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Garantía legal:</strong> 2 años (según normativa europea)</li>
                    <li><strong>Garantía del fabricante:</strong> 2 años</li>
                </ul>
                <p className="mt-4"><strong>Cobertura:</strong></p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Defectos de fabricación</li>
                    <li>Vicios ocultos</li>
                    <li>Falta de conformidad con lo anunciado</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    6. Protección de Datos
                </h2>
                <p>
                    El tratamiento de datos personales se rige por nuestra <Link href="/politica-privacidad" className="text-[#D97706] hover:underline">Política de Privacidad</Link>.
                </p>
                <p className="mt-4">
                    <strong>Responsable del tratamiento:</strong> EstilSofá<br />
                    <strong>Finalidad:</strong> Gestión de solicitudes, ventas y comunicaciones comerciales<br />
                    <strong>Derechos:</strong> Acceso, rectificación, supresión, oposición, limitación y portabilidad
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    7. Reclamaciones
                </h2>
                <h3 className="text-xl font-bold mt-6 mb-3 text-[#0F172A]">7.1. Hojas de Reclamación</h3>
                <p>
                    Como establecimiento comercial, disponemos de <strong>Hojas Oficiales de Reclamación</strong> a disposición
                    de los consumidores en nuestra tienda física.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-3 text-[#0F172A]">7.2. Resolución Online de Litigios</h3>
                <p>
                    Según el Reglamento (UE) 524/2013, los consumidores pueden acceder a la plataforma de resolución de litigios
                    en línea:
                </p>
                <p className="mt-2">
                    <strong>Plataforma ODR:</strong> <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#D97706] hover:underline">https://ec.europa.eu/consumers/odr/</a>
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    8. Legislación Aplicable y Jurisdicción
                </h2>
                <p>El presente Aviso Legal se rige por la legislación española, en particular:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Ley 34/2002 (LSSI-CE)</li>
                    <li>Reglamento (UE) 2016/679 (RGPD)</li>
                    <li>Ley Orgánica 3/2018 (LOPDGDD)</li>
                    <li>Ley General para la Defensa de los Consumidores y Usuarios</li>
                </ul>
                <p>
                    Para la resolución de controversias, las partes se someten a los Juzgados y Tribunales del domicilio del
                    usuario (si es consumidor) o de Valencia (si es empresa).
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    9. Contacto
                </h2>
                <p>Para cualquier consulta sobre este Aviso Legal:</p>
                <ul className="list-none pl-0 mb-4 space-y-3">
                    <li>📧 <strong>Email:</strong> info@estilsofa.com</li>
                    <li>📞 <strong>Teléfono:</strong> 961 443 681</li>
                    <li>💬 <strong>WhatsApp:</strong> 677 481 926</li>
                    <li>📍 <strong>Dirección:</strong> Avinguda Luis Santangel 67, Museros, Valencia</li>
                    <li>🕐 <strong>Horario:</strong> Lunes a Viernes de 10:00 a 14:00 y de 17:00 a 20:00</li>
                </ul>

                <hr className="my-10 border-t-2 border-gray-200" />
                <p className="text-center italic text-gray-500">
                    Al utilizar este sitio web, usted acepta los términos y condiciones establecidos en este Aviso Legal.
                </p>
            </div>
        </main>
    );
}
