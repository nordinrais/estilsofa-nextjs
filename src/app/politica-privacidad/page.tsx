
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Política de Privacidad - EstilSofá",
    description: "Política de Privacidad de EstilSofá. Información sobre el tratamiento de datos personales conforme al RGPD.",
};

export default function PoliticaPrivacidadPage() {
    return (
        <main className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 pb-4 border-b-4 border-[#ecd75f] text-[#0F172A]">
                Política de Privacidad
            </h1>
            <p className="text-gray-600 mb-8 font-medium">
                <strong>Última actualización:</strong> 5 de enero de 2026
            </p>

            <div className="prose prose-slate max-w-none text-gray-700">
                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    1. Información del Responsable
                </h2>
                <p>
                    De conformidad con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016,
                    relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales
                    (RGPD), y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los
                    derechos digitales (LOPDGDD), le informamos:
                </p>

                <div className="bg-blue-50 border-l-4 border-[#ecd75f] p-6 my-6 rounded-md">
                    <p className="mb-2 font-semibold text-[#0F172A]">Responsable del tratamiento:</p>
                    <ul className="list-none pl-0 mb-0 space-y-1">
                        <li><strong>Identidad:</strong> EstilSofá</li>
                        <li><strong>CIF:</strong> B98402365</li>
                        <li><strong>Dirección:</strong> Avinguda Luis Santangel 67, Museros, 46136, Valencia</li>
                        <li><strong>Teléfono:</strong> 961 443 681</li>
                        <li><strong>WhatsApp:</strong> 677 481 926</li>
                        <li><strong>Email:</strong> info@estilsofa.com</li>
                        <li><strong>Sitio web:</strong> www.estilsofa.com</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    2. Finalidad del Tratamiento de Datos
                </h2>
                <p>
                    Los datos personales que nos proporcione a través de los formularios de contacto, reserva de ofertas,
                    solicitud de cita o suscripción a newsletter serán tratados con las siguientes finalidades:
                </p>

                <h3 className="text-xl font-bold mt-6 mb-3 text-[#0F172A]">2.1. Formulario de Contacto y Reserva de Ofertas</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Gestionar su solicitud de información o reserva</li>
                    <li>Contactarle telefónicamente o por WhatsApp para asesoramiento personalizado</li>
                    <li>Enviarle información sobre productos y ofertas solicitadas</li>
                    <li>Gestionar la reserva de productos en oferta</li>
                </ul>
                <p><strong>Base jurídica:</strong> Consentimiento del interesado y ejecución de medidas precontractuales.</p>

                <h3 className="text-xl font-bold mt-6 mb-3 text-[#0F172A]">2.2. Formulario de Cita Previa</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Gestionar su cita en nuestra tienda física</li>
                    <li>Confirmar la cita por teléfono, email o WhatsApp</li>
                    <li>Recordatorio de la cita programada</li>
                </ul>
                <p><strong>Base jurídica:</strong> Consentimiento del interesado.</p>

                <h3 className="text-xl font-bold mt-6 mb-3 text-[#0F172A]">2.3. Newsletter y Comunicaciones Comerciales</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Enviarle información sobre nuevos productos, ofertas y promociones</li>
                    <li>Comunicaciones sobre eventos especiales en tienda</li>
                    <li>Contenido de valor relacionado con decoración y mobiliario</li>
                </ul>
                <p>
                    <strong>Base jurídica:</strong> Consentimiento expreso del interesado. Puede retirar su consentimiento en
                    cualquier momento.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-3 text-[#0F172A]">2.4. Gestión de Compras</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Procesar su pedido de productos</li>
                    <li>Gestionar el pago y facturación</li>
                    <li>Coordinar la entrega o recogida del producto</li>
                    <li>Atención postventa y garantías</li>
                </ul>
                <p><strong>Base jurídica:</strong> Ejecución del contrato de compraventa.</p>

                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    3. Datos Personales Recogidos
                </h2>
                <p>Según el formulario utilizado, podemos recoger los siguientes datos:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Datos identificativos:</strong> Nombre, apellidos</li>
                    <li><strong>Datos de contacto:</strong> Teléfono, email, dirección postal</li>
                    <li><strong>Datos de navegación:</strong> Dirección IP, cookies, páginas visitadas</li>
                    <li><strong>Datos comerciales:</strong> Productos de interés, preferencias de compra</li>
                    <li><strong>Datos económicos:</strong> Información de pago (procesada de forma segura por pasarelas de pago certificadas)</li>
                </ul>
                <p>
                    <strong>Carácter obligatorio:</strong> Los campos marcados con asterisco (*) son obligatorios. La no
                    cumplimentación de estos campos puede impedir la prestación del servicio solicitado.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    4. Plazo de Conservación
                </h2>
                <p>Sus datos personales serán conservados durante los siguientes plazos:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Solicitudes de información:</strong> 1 año desde la última interacción</li>
                    <li><strong>Clientes:</strong> Durante la relación comercial y 6 años adicionales (obligaciones fiscales y contables)</li>
                    <li><strong>Newsletter:</strong> Hasta que solicite la baja</li>
                    <li><strong>Cookies:</strong> Según lo establecido en la <Link href="/politica-cookies" className="text-[#D97706] hover:underline">Política de Cookies</Link></li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    5. Destinatarios de los Datos
                </h2>
                <p>Sus datos personales no serán cedidos a terceros, salvo en los siguientes casos:</p>

                <h3 className="text-xl font-bold mt-6 mb-3 text-[#0F172A]">5.1. Prestadores de Servicios</h3>
                <p>Podemos compartir sus datos con proveedores que nos ayudan a prestar nuestros servicios:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Servicios de hosting y alojamiento web</li>
                    <li>Plataformas de email marketing (si se suscribe a newsletter)</li>
                    <li>Servicios de mensajería y transporte (para entregas)</li>
                    <li>Pasarelas de pago (para procesar pagos online)</li>
                    <li>Herramientas de analítica web (Google Analytics)</li>
                </ul>
                <p>
                    Todos estos proveedores están obligados contractualmente a mantener la confidencialidad y seguridad de sus
                    datos.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-3 text-[#0F172A]">5.2. Obligaciones Legales</h3>
                <p>Cuando sea requerido por ley o autoridad competente (Agencia Tributaria, juzgados, etc.).</p>

                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    6. Transferencias Internacionales
                </h2>
                <p>
                    Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del Espacio Económico Europeo (EEE).
                    En estos casos, garantizamos que:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>El país destinatario cuenta con un nivel de protección adecuado según la Comisión Europea, o</li>
                    <li>Se han adoptado garantías adecuadas (cláusulas contractuales tipo aprobadas por la UE)</li>
                </ul>
                <p className="mt-4"><strong>Proveedores con transferencias internacionales:</strong></p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Google Analytics (EE.UU.) - Cláusulas Contractuales Tipo</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    7. Derechos del Usuario
                </h2>
                <p>En cualquier momento puede ejercer los siguientes derechos:</p>

                <div className="space-y-4 mb-6">
                    <div>
                        <h4 className="font-bold text-[#D97706]">7.1. Derecho de Acceso</h4>
                        <p>Conocer qué datos personales tenemos sobre usted y cómo los tratamos.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-[#D97706]">7.2. Derecho de Rectificación</h4>
                        <p>Solicitar la corrección de datos inexactos o incompletos.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-[#D97706]">7.3. Derecho de Supresión ("Derecho al Olvido")</h4>
                        <p>Solicitar la eliminación de sus datos cuando ya no sean necesarios o retire su consentimiento.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-[#D97706]">7.4. Derecho de Oposición</h4>
                        <p>Oponerse al tratamiento de sus datos para finalidades específicas.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-[#D97706]">7.5. Derecho de Limitación del Tratamiento</h4>
                        <p>Solicitar que limitemos el uso de sus datos en determinadas circunstancias.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-[#D97706]">7.6. Derecho de Portabilidad</h4>
                        <p>Recibir sus datos en formato estructurado y transmitirlos a otro responsable.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-[#D97706]">7.7. Derecho a No Ser Objeto de Decisiones Automatizadas</h4>
                        <p>No ser objeto de decisiones basadas únicamente en tratamiento automatizado.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-[#D97706]">7.8. Derecho a Retirar el Consentimiento</h4>
                        <p>Retirar el consentimiento en cualquier momento sin que afecte a la licitud del tratamiento previo.</p>
                    </div>
                </div>

                <h3 className="text-xl font-bold mt-6 mb-3 text-[#0F172A]">Cómo Ejercer sus Derechos</h3>
                <p>Puede ejercer sus derechos mediante:</p>
                <ul className="list-none pl-0 mb-4 space-y-2">
                    <li><strong>Email:</strong> info@estilsofa.com</li>
                    <li><strong>Correo postal:</strong> Avinguda Luis Santangel 67, Museros, 46136, Valencia</li>
                    <li><strong>Presencialmente:</strong> En nuestra tienda física</li>
                </ul>
                <p>Deberá acreditar su identidad mediante DNI/NIE o documento equivalente.</p>
                <p>
                    <strong>Plazo de respuesta:</strong> 1 mes desde la recepción de la solicitud (ampliable a 3 meses en casos
                    complejos).
                </p>

                <h3 className="text-xl font-bold mt-6 mb-3 text-[#0F172A]">Reclamación ante la Autoridad de Control</h3>
                <p>Si considera que el tratamiento de sus datos vulnera la normativa, puede presentar una reclamación ante:</p>
                <div className="bg-blue-50 border-l-4 border-[#ecd75f] p-6 my-6 rounded-md">
                    <p className="mb-2 font-semibold text-[#0F172A]">Agencia Española de Protección de Datos (AEPD)</p>
                    <ul className="list-none pl-0 mb-0 space-y-1">
                        <li><strong>Dirección:</strong> C/ Jorge Juan, 6, 28001 Valencia</li>
                        <li><strong>Teléfono:</strong> 901 100 099 / 912 663 517</li>
                        <li><strong>Web:</strong> <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[#D97706] hover:underline">www.aepd.es</a></li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    8. Medidas de Seguridad
                </h2>
                <p>
                    Hemos implementado medidas técnicas y organizativas apropiadas para garantizar la seguridad de sus datos
                    personales:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Cifrado SSL/TLS</strong> en la transmisión de datos</li>
                    <li><strong>Acceso restringido</strong> a datos personales solo a personal autorizado</li>
                    <li><strong>Copias de seguridad</strong> periódicas</li>
                    <li><strong>Protección contra malware</strong> y ataques informáticos</li>
                    <li><strong>Formación del personal</strong> en protección de datos</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    9. Cookies
                </h2>
                <p>
                    Este sitio web utiliza cookies. Para más información, consulte nuestra <Link href="/politica-cookies" className="text-[#D97706] hover:underline">Política de Cookies</Link>.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    10. Redes Sociales
                </h2>
                <p>
                    Si interactúa con nosotros a través de redes sociales (Instagram, Facebook, etc.), el tratamiento de sus
                    datos se regirá por:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Esta Política de Privacidad</li>
                    <li>Las condiciones de uso y políticas de privacidad de cada red social</li>
                    <li>La configuración de privacidad de su perfil</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    11. Menores de Edad
                </h2>
                <p>
                    Nuestros servicios están dirigidos a mayores de 18 años. No recopilamos intencionadamente datos de menores de
                    14 años. Si es padre/madre o tutor y descubre que su hijo/a nos ha proporcionado datos, contacte con
                    nosotros para proceder a su eliminación.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    12. Enlaces a Terceros
                </h2>
                <p>
                    Nuestro sitio web puede contener enlaces a sitios de terceros. No nos hacemos responsables de las políticas
                    de privacidad de estos sitios. Le recomendamos leer sus políticas antes de proporcionar datos personales.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    13. Actualización de la Política
                </h2>
                <p>
                    Esta Política de Privacidad puede ser actualizada. La fecha de última actualización se indica al inicio del
                    documento. Le recomendamos revisarla periódicamente.
                </p>
                <p className="mt-4">Los cambios sustanciales serán comunicados mediante:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Aviso destacado en el sitio web</li>
                    <li>Email (si está suscrito a comunicaciones)</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    14. Contacto
                </h2>
                <p>Para cualquier consulta sobre esta Política de Privacidad o el tratamiento de sus datos personales:</p>
                <ul className="list-none pl-0 mb-4 space-y-3">
                    <li>📧 <strong>Email:</strong> info@estilsofa.com</li>
                    <li>📞 <strong>Teléfono:</strong> 961 443 681</li>
                    <li>💬 <strong>WhatsApp:</strong> 677 481 926</li>
                    <li>📍 <strong>Dirección:</strong> Avinguda Luis Santangel 67, Museros, 46136, Valencia</li>
                </ul>

                <hr className="my-10 border-t-2 border-gray-200" />

                <p className="text-center italic text-gray-500 font-medium">
                    <strong>EstilSofá</strong> se compromete a proteger su privacidad y tratar sus datos con la máxima
                    confidencialidad y seguridad.
                </p>

                <hr className="my-10 border-t-2 border-gray-200" />

                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    Consentimiento
                </h2>
                <p>Al utilizar nuestros formularios y servicios, usted declara:</p>
                <ul className="list-none pl-0 mb-4 space-y-2">
                    <li>✓ Haber leído y comprendido esta Política de Privacidad</li>
                    <li>✓ Ser mayor de 18 años (o contar con autorización parental)</li>
                    <li>✓ Que los datos proporcionados son verdaderos y actualizados</li>
                    <li>✓ Consentir el tratamiento de sus datos según lo descrito</li>
                </ul>
                <p>
                    <strong>Puede retirar su consentimiento en cualquier momento</strong> contactando con nosotros por los medios
                    indicados.
                </p>
            </div>
        </main>
    );
}
