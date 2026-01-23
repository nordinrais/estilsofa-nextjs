
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Política de Cookies - EstilSofá",
    description: "Política de Cookies de EstilSofá. Información sobre el uso de cookies en nuestro sitio web.",
};

export default function PoliticaCookiesPage() {
    return (
        <main className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 pb-4 border-b-4 border-[#ecd75f] text-[#0F172A]">
                Política de Cookies
            </h1>
            <p className="text-gray-600 mb-8 font-medium">
                <strong>Última actualización:</strong> 5 de enero de 2026
            </p>

            <div className="prose prose-slate max-w-none text-gray-700">
                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    1. ¿Qué son las Cookies?
                </h2>
                <p>
                    Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies
                    permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de
                    navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que
                    utilice su equipo, pueden utilizarse para reconocer al usuario.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    2. Tipos de Cookies que Utilizamos
                </h2>

                <h3 className="text-xl font-bold mt-6 mb-3 text-[#0F172A]">2.1. Según la entidad que las gestiona</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                        <strong>Cookies propias:</strong> Son aquellas que se envían a su equipo desde nuestros propios equipos
                        o dominios y desde el que prestamos el servicio que nos solicita.
                    </li>
                    <li>
                        <strong>Cookies de terceros:</strong> Son aquellas que se envían a su equipo desde un equipo o dominio
                        que no es gestionado por nosotros, sino por otra entidad colaboradora.
                    </li>
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-3 text-[#0F172A]">2.2. Según su finalidad</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                        <strong>Cookies técnicas:</strong> Son aquellas necesarias para la navegación y el buen funcionamiento
                        de nuestra página web.
                    </li>
                    <li>
                        <strong>Cookies de análisis:</strong> Son aquellas que nos permiten cuantificar el número de usuarios y
                        así realizar la medición y análisis estadístico de la utilización que hacen los usuarios de los
                        servicios ofertados.
                    </li>
                    <li>
                        <strong>Cookies publicitarias:</strong> Son aquellas que permiten la gestión, de la forma más eficaz
                        posible, de los espacios publicitarios que se pudieran incluir en nuestra página web.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    3. Relación de Cookies Utilizadas
                </h2>
                <div className="overflow-x-auto my-6">
                    <table className="min-w-full border-collapse border border-gray-200 text-sm">
                        <thead>
                            <tr className="bg-gray-50 text-left">
                                <th className="border border-gray-200 p-3 font-semibold text-[#0F172A]">Cookie</th>
                                <th className="border border-gray-200 p-3 font-semibold text-[#0F172A]">Proveedor</th>
                                <th className="border border-gray-200 p-3 font-semibold text-[#0F172A]">Duración</th>
                                <th className="border border-gray-200 p-3 font-semibold text-[#0F172A]">Finalidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-200 p-3">cookie_consent</td>
                                <td className="border border-gray-200 p-3">EstilSofá</td>
                                <td className="border border-gray-200 p-3">1 año</td>
                                <td className="border border-gray-200 p-3">Técnica - Recuerda sus preferencias de consentimiento.</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 p-3">_ga</td>
                                <td className="border border-gray-200 p-3">Google Analytics</td>
                                <td className="border border-gray-200 p-3">2 años</td>
                                <td className="border border-gray-200 p-3">Analítica - Se usa para distinguir a los usuarios.</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 p-3">_gid</td>
                                <td className="border border-gray-200 p-3">Google Analytics</td>
                                <td className="border border-gray-200 p-3">24 horas</td>
                                <td className="border border-gray-200 p-3">Analítica - Se usa para distinguir a los usuarios.</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 p-3">_fbp</td>
                                <td className="border border-gray-200 p-3">Facebook</td>
                                <td className="border border-gray-200 p-3">3 meses</td>
                                <td className="border border-gray-200 p-3">Publicidad - Utilizada por Facebook para ofrecer productos publicitarios.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    4. Configuración y Desactivación de Cookies
                </h2>
                <p>
                    Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de
                    las opciones del navegador instalado en su ordenador:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Chrome:</strong> Configuración -&#62; Privacidad y seguridad -&#62; Cookies y otros datos de sitios.</li>
                    <li><strong>Firefox:</strong> Ajustes -&#62; Privacidad y seguridad.</li>
                    <li><strong>Safari:</strong> Preferencias -&#62; Privacidad.</li>
                    <li><strong>Edge:</strong> Configuración -&#62; Cookies y permisos del sitio.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-[#ecd75f] text-[#0F172A]">
                    5. Actualización de la Política de Cookies
                </h2>
                <p>
                    Es posible que actualicemos la Política de Cookies de nuestro Sitio Web, por ello le recomendamos revisar
                    esta política cada vez que acceda al mismo con el objetivo de estar adecuadamente informado sobre cómo y
                    para qué usamos las cookies.
                </p>

                <div className="bg-blue-50 border-l-4 border-[#ecd75f] p-6 my-6 rounded-md">
                    <p className="mb-0">
                        Si tiene dudas sobre esta Política de Cookies, puede contactar con nosotros en{' '}
                        <strong>info@estilsofa.com</strong>
                    </p>
                </div>
            </div>
        </main>
    );
}
