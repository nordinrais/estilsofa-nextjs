
import Image from 'next/image';
import Link from 'next/link';

export type BlogPost = {
    slug: string;
    title: string;
    description: string;
    category: string;
    readingTime: string;
    publishDate: string;
    image: string;
    content: React.ReactNode;
};

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: "como-limpiar-sofa-tela",
        title: "Cómo Limpiar tu Sofá de Tela Fácilmente",
        description: "Trucos caseros y profesionales para eliminar manchas sin dañar el tejido. Guía completa paso a paso.",
        category: "Guías Prácticas",
        readingTime: "5 min lectura",
        publishDate: "8 de enero de 2026",
        image: "/assets/blog/como-limpiar-tu-sofa-de-tela-facilmente.webp",
        content: (
            <>
                <p><strong>Tu sofá es el centro de tu hogar</strong>, el lugar donde compartes momentos especiales con
                    familia y amigos. Mantenerlo limpio no solo mejora su aspecto, sino que también prolonga su vida útil.
                    En esta guía te enseñamos cómo limpiar tu sofá de tela de forma efectiva y segura.</p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-[#0F172A]">🔍 Antes de Empezar: Identifica el Tipo de Tela</h2>

                <p className="mb-4">No todas las telas son iguales. Antes de aplicar cualquier producto, revisa la etiqueta de tu sofá.
                    Generalmente encontrarás estos códigos:</p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>W (Water):</strong> Puedes usar productos a base de agua</li>
                    <li><strong>S (Solvent):</strong> Solo limpiadores en seco o a base de solvente</li>
                    <li><strong>WS:</strong> Puedes usar ambos tipos de limpiadores</li>
                    <li><strong>X:</strong> Solo aspirado o cepillado, sin productos químicos</li>
                </ul>

                <div className="bg-[#f0f9ff] border-l-4 border-[#2563EB] p-6 rounded-md my-8">
                    <h4 className="text-[#2563EB] font-bold mb-3">💡 Consejo Profesional</h4>
                    <p>Antes de limpiar toda la superficie, haz una prueba en una zona oculta del sofá (parte trasera o
                        debajo de los cojines) para asegurarte de que el producto no daña o decolora la tela.</p>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-[#0F172A]">🧼 Limpieza Básica: Mantenimiento Regular</h2>

                <h3 className="text-xl font-bold mt-8 mb-3 text-gray-800">Paso 1: Aspirado Profundo</h3>
                <p className="mb-4">Usa la aspiradora con el accesorio de tapicería al menos una vez por semana. Esto elimina polvo, migas y
                    pelos que se acumulan en las fibras. Presta especial atención a:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Pliegues y costuras</li>
                    <li>Espacios entre cojines</li>
                    <li>Reposabrazos y respaldo</li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-3 text-gray-800">Paso 2: Cepillado Suave</h3>
                <p className="mb-4">Usa un cepillo de cerdas suaves para levantar el pelo y devolver la textura original a la tela. Hazlo en
                    dirección del tejido para no dañar las fibras.</p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-[#0F172A]">🎯 Eliminación de Manchas Según el Tipo</h2>

                <h3 className="text-xl font-bold mt-8 mb-3 text-gray-800">Manchas de Líquidos (Café, Vino, Refrescos)</h3>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                    <li><strong>Actúa rápido:</strong> Absorbe el exceso con papel de cocina sin frotar</li>
                    <li><strong>Prepara solución:</strong> Mezcla 1 cucharada de jabón neutro + 2 tazas de agua tibia</li>
                    <li><strong>Aplica:</strong> Humedece un paño limpio en la solución y da toques suaves</li>
                    <li><strong>Enjuaga:</strong> Con otro paño húmedo (solo agua) para eliminar el jabón</li>
                    <li><strong>Seca:</strong> Usa toallas secas presionando (nunca frotes)</li>
                </ol>

                <h3 className="text-xl font-bold mt-8 mb-3 text-gray-800">Manchas de Grasa (Aceite, Comida)</h3>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                    <li>Espolvorea bicarbonato de sodio sobre la mancha</li>
                    <li>Deja actuar 15-20 minutos para absorber la grasa</li>
                    <li>Aspira el bicarbonato</li>
                    <li>Si persiste, aplica una pequeña cantidad de alcohol isopropílico con un paño</li>
                </ol>

                <div className="bg-[#fff3cd] border-l-4 border-[#ffc107] p-6 rounded-md my-8">
                    <h4 className="text-[#856404] font-bold mb-3">⚠️ Advertencia Importante</h4>
                    <p>NUNCA frotes las manchas con fuerza. Esto puede extender la mancha, empujarla más profundo en las
                        fibras y dañar el tejido. Siempre da toques suaves desde el exterior hacia el centro de la mancha.
                    </p>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-[#0F172A]">🌟 Limpieza Profunda: Método Profesional en Casa</h2>
                <p className="mb-4">Para una limpieza completa 2-3 veces al año:</p>

                <h3 className="text-xl font-bold mt-8 mb-3 text-gray-800">Opción 1: Vapor (Telas con código W o WS)</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Alquila o usa una limpiadora de vapor para tapicería</li>
                    <li>Pasa el vapor de forma uniforme sin saturar</li>
                    <li>Permite secar completamente (12-24 horas)</li>
                    <li>Ventila bien la habitación</li>
                </ul>

                <div className="bg-[#f0f9ff] border-l-4 border-[#2563EB] p-6 rounded-md my-8">
                    <h4 className="text-[#2563EB] font-bold mb-3">💡 Truco de Experto: Elimina Olores</h4>
                    <p>Para refrescar tu sofá entre limpiezas, espolvorea bicarbonato de sodio sobre toda la superficie,
                        deja actuar 30 minutos y aspira. Esto absorbe olores y refresca la tela naturalmente.</p>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-[#0F172A]">🛡️ Prevención: Mantén tu Sofá Impecable por Más Tiempo</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>Protección:</strong> Considera aplicar un protector de telas para repeler líquidos</li>
                    <li><strong>Normas en casa:</strong> Evita comer sobre el sofá (o usa bandejas)</li>
                    <li><strong>Luz solar:</strong> Evita exposición directa prolongada para prevenir decoloración</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-[#0F172A]">✅ Conclusión</h2>
                <p className="mb-4">
                    Mantener tu sofá de tela limpio no tiene por qué ser complicado. Con mantenimiento regular, atención
                    rápida a las manchas y productos adecuados, tu sofá se verá como nuevo durante años.
                </p>
            </>
        )
    },
    {
        slug: "guia-compra-sofa-perfecto",
        title: "Cómo Elegir el Sofá Perfecto para tu Hogar",
        description: "Guía completa para elegir el sofá ideal. Descubre cómo acertar con medidas, materiales, estilo y funcionalidad.",
        category: "Guía de Compra",
        readingTime: "8 min lectura",
        publishDate: "8 de enero de 2026",
        image: "/assets/blog/guis-de-compra-de-sofa.webp",
        content: (
            <>
                <p><strong>Comprar un sofá es una de las decisiones más importantes</strong> para tu hogar. No solo es una
                    inversión económica significativa, sino que también es el mueble donde pasarás miles de horas.
                    Por eso, elegir el sofá adecuado requiere considerar múltiples factores.</p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-[#0F172A]">📏 Paso 1: Las Medidas Son Fundamentales</h2>
                <p>El error más común al comprar un sofá es no medir correctamente.</p>

                <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">Mide tu Espacio</h3>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                    <li><strong>Ancho de la habitación:</strong> El sofá no debe ocupar más del 60% del ancho total</li>
                    <li><strong>Profundidad disponible:</strong> Deja al menos 80-100 cm de paso frontal</li>
                    <li><strong>Altura del techo:</strong> Para techos bajos, elige sofás con respaldo bajo</li>
                </ol>

                <div className="bg-[#f0f9ff] border-l-4 border-[#2563EB] p-6 rounded-md my-8">
                    <h4 className="text-[#2563EB] font-bold mb-3">💡 Truco de Experto</h4>
                    <p>Usa cinta de carrocero en el suelo para marcar las dimensiones exactas del sofá que estás
                        considerando.</p>
                </div>

                <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">Medidas Estándar</h3>
                <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse shadow-sm bg-white">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="p-4 font-semibold">Tipo de Sofá</th>
                                <th className="p-4 font-semibold">Personas</th>
                                <th className="p-4 font-semibold">Ancho Aprox.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-100">
                                <td className="p-4">Sofá 2 plazas</td>
                                <td className="p-4">2 personas</td>
                                <td className="p-4">140-180 cm</td>
                            </tr>
                            <tr className="border-b border-gray-100">
                                <td className="p-4">Sofá 3 plazas</td>
                                <td className="p-4">3 personas</td>
                                <td className="p-4">180-220 cm</td>
                            </tr>
                            <tr className="border-b border-gray-100">
                                <td className="p-4">Chaise Longue</td>
                                <td className="p-4">3-4 personas</td>
                                <td className="p-4">240-300 cm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-[#0F172A]">🎨 Paso 3: Materiales y Tapizados</h2>

                <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">Tela/Tejido</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>Ventajas:</strong> Transpirable, cálida, variedad</li>
                    <li><strong>Recomendado para:</strong> Hogares sin mascotas ni niños, climas fríos</li>
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">Polipiel/Símil Piel</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>Ventajas:</strong> Fácil limpieza, resistente a manchas</li>
                    <li><strong>Recomendado para:</strong> Familias con niños/mascotas</li>
                </ul>

                <div className="bg-[#f0fdf4] border-l-4 border-[#10b981] p-6 rounded-md my-8">
                    <h4 className="text-[#10b981] font-bold mb-3">✅ Checklist Materiales</h4>
                    <ul className="space-y-1">
                        <li>Mascotas → Polipiel o microfibra</li>
                        <li>Niños → Antimanchas</li>
                        <li>Lujo → Cuero natural</li>
                    </ul>
                </div>
            </>
        )
    },
    {
        slug: "trucos-limpieza-mantenimiento",
        title: "Mantén tu Tapicería Como Nueva",
        description: "Consejos prácticos, rutinas de mantenimiento y productos recomendados para el cuidado diario de tu sofá.",
        category: "Trucos de Limpieza",
        readingTime: "6 min lectura",
        publishDate: "8 de enero de 2026",
        image: "/assets/blog/trucos-de-limpieza.webp",
        content: (
            <>
                <p><strong>Un sofá bien cuidado puede durar décadas.</strong> El secreto no está en limpiezas intensivas
                    ocasionales, sino en un mantenimiento regular.</p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-[#0F172A]">🗓️ Rutina de Mantenimiento</h2>

                <div className="bg-[#fffbeb] border-l-4 border-[#f59e0b] p-6 rounded-md my-8">
                    <h4 className="text-[#f59e0b] font-bold mb-3">📅 Calendario Recomendado</h4>
                    <p className="font-bold mt-2">Semanal:</p>
                    <ul className="list-disc pl-6 mb-2">
                        <li>Aspirado completo</li>
                        <li>Rotación de cojines</li>
                    </ul>
                    <p className="font-bold mt-2">Mensual:</p>
                    <ul className="list-disc pl-6 mb-2">
                        <li>Limpieza de manchas visibles</li>
                        <li>Bicarbonato para olores</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-[#0F172A]">✨ Trucos Profesionales</h2>

                <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">La Regla del Hielo (Para Chicle)</h3>
                <p className="mb-4">Si tienes chicle pegado, coloca cubitos de hielo en una bolsa sobre el chicle. Se endurecerá y podrás retirarlo.</p>

                <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">Manchas de Bolígrafo (En Piel)</h3>
                <p className="mb-4">Aplica laca para el pelo, deja 10 segundos y limpia con paño húmedo.</p>

                <div className="bg-[#faf5ff] border-l-4 border-[#a855f7] p-6 rounded-md my-8">
                    <h4 className="text-[#a855f7] font-bold mb-3">🛒 Lista de Compra Esencial</h4>
                    <ul className="list-decimal pl-6 space-y-2">
                        <li>Aspiradora con accesorio tapicería</li>
                        <li>Cepillo cerdas suaves</li>
                        <li>Bicarbonato de sodio</li>
                        <li>Vinagre blanco</li>
                        <li>Paños microfibra</li>
                    </ul>
                </div>
            </>
        )
    },
    {
        slug: "sillon-relax-manual-vs-electrico",
        title: "Sillón Relax: ¿Manual o Eléctrico?",
        description: "Comparativa completa: diferencias, ventajas, precios y cuál elegir según tus necesidades de movilidad y presupuesto.",
        category: "Guía Comparativa",
        readingTime: "7 min lectura",
        publishDate: "8 de enero de 2026",
        image: "/assets/blog/sillon-relax-manual-vs-electrico.webp",
        content: (
            <>
                <p><strong>Elegir entre un sillón relax manual o eléctrico</strong> es una decisión clave. Ambos ofrecen confort, pero funcionan de manera diferente.</p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-[#0F172A]">Gearbox vs Motores</h2>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 my-6">
                    <h3 className="text-xl font-bold mb-4">🤲 Sillón Manual</h3>
                    <p className="mb-4">Funciona mediante palanca o empuje corporal.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-[#f0fdf4] p-4 rounded border-l-4 border-green-500">
                            <h4 className="text-green-600 font-bold">✅ Ventajas</h4>
                            <ul className="list-disc pl-4 text-sm">
                                <li>Más económico</li>
                                <li>Sin cables</li>
                                <li>Menos averías</li>
                            </ul>
                        </div>
                        <div className="bg-[#fef2f2] p-4 rounded border-l-4 border-red-500">
                            <h4 className="text-red-500 font-bold">❌ Desventajas</h4>
                            <ul className="list-disc pl-4 text-sm">
                                <li>Requiere fuerza física</li>
                                <li>Posiciones limitadas</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 my-6">
                    <h3 className="text-xl font-bold mb-4">⚡ Sillón Eléctrico</h3>
                    <p className="mb-4">Funciona con motores y mando a distancia.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-[#f0fdf4] p-4 rounded border-l-4 border-green-500">
                            <h4 className="text-green-600 font-bold">✅ Ventajas</h4>
                            <ul className="list-disc pl-4 text-sm">
                                <li>Cero esfuerzo</li>
                                <li>Posiciones infinitas</li>
                                <li>Opción levanta-personas</li>
                            </ul>
                        </div>
                        <div className="bg-[#fef2f2] p-4 rounded border-l-4 border-red-500">
                            <h4 className="text-red-500 font-bold">❌ Desventajas</h4>
                            <ul className="list-disc pl-4 text-sm">
                                <li>Más caro</li>
                                <li>Necesita enchufe</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-[#0F172A]">✅ Veredicto Final</h2>

                <div className="bg-[#f0f9ff] p-6 rounded mb-4">
                    <h3 className="font-bold text-[#2563EB] mb-2">Elige MANUAL si...</h3>
                    <ul className="list-none space-y-1">
                        <li>✅ Tienes &lt; 60 años y buena movilidad</li>
                        <li>✅ Presupuesto ajustado (&lt; 600€)</li>
                    </ul>
                </div>

                <div className="bg-[#fffbeb] p-6 rounded mb-4">
                    <h3 className="font-bold text-[#d97706] mb-2">Elige ELÉCTRICO si...</h3>
                    <ul className="list-none space-y-1">
                        <li>✅ Tienes &gt; 65 años o movilidad reducida</li>
                        <li>✅ Buscas máximo confort y personalización</li>
                    </ul>
                </div>
            </>
        )
    }
];
