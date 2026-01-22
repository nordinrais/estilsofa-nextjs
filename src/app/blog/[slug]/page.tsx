"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

const blogArticles: Record<string, { title: string, category: string, content: string }> = {
  "como-limpiar-sofa-tela": {
    title: "Cómo limpiar tu sofá de tela fácilmente",
    category: "Guías Prácticas",
    content: `
      <p>Mantener tu sofá de tela limpio es esencial para prolongar su vida útil y mantener un ambiente saludable en casa.</p>
      
      <h2>Trucos caseros efectivos</h2>
      <p>El bicarbonato de sodio es tu mejor aliado para eliminar olores y manchas superficiales. Espolvorea sobre el sofá, deja actuar 30 minutos y aspira.</p>
      
      <h2>Productos profesionales</h2>
      <p>Para manchas difíciles, te recomendamos usar productos específicos para tapicerías como el <strong>Aquaclean</strong> o limpiadores enzimáticos.</p>
      
      <h3>Pasos básicos:</h3>
      <ol>
        <li>Aspira regularmente para eliminar polvo y partículas</li>
        <li>Trata las manchas inmediatamente con un paño húmedo</li>
        <li>Usa productos específicos para el tipo de tela</li>
        <li>Deja secar completamente antes de usar</li>
      </ol>
    `
  },
  "guia-compra-sofa-perfecto": {
    title: "Cómo elegir el sofá perfecto para tu hogar",
    category: "Guía de Compra",
    content: `
      <p>Comprar un sofá es una inversión importante. Esta guía te ayudará a tomar la mejor decisión.</p>
      
      <h2>1. Mide tu espacio</h2>
      <p>Antes de enamorarte de un modelo, asegúrate de que quepa en tu salón. Mide:</p>
      <ul>
        <li>Ancho de puertas y pasillos</li>
        <li>Espacio disponible en el salón</li>
        <li>Altura del techo si es un sofá alto</li>
      </ul>
      
      <h2>2. Define el uso</h2>
      <p>¿Será para ver TV a diario? ¿Para recibir visitas? El uso determinará el tipo de sofá ideal.</p>
      
      <h2>3. Materiales y tapizados</h2>
      <p>Si tienes mascotas o niños, opta por tejidos antimanchas. Si buscas elegancia, el terciopelo o cuero son excelentes opciones.</p>
      
      <h2>4. Funcionalidad</h2>
      <p>Considera si necesitas:</p>
      <ul>
        <li>Sofá cama para invitados</li>
        <li>Relax eléctrico para mayor comodidad</li>
        <li>Asientos deslizantes para más espacio</li>
        <li>Arcones de almacenamiento</li>
      </ul>
    `
  },
  "trucos-limpieza-mantenimiento": {
    title: "Mantén tu tapicería como nueva",
    category: "Trucos de Limpieza",
    content: `
      <p>El cuidado regular de tu sofá prolongará su vida útil y mantendrá su aspecto impecable.</p>
      
      <h2>Rutina de mantenimiento semanal</h2>
      <ul>
        <li>Aspira los cojines y rincones para eliminar polvo</li>
        <li>Ventila los cojines dándoles la vuelta</li>
        <li>Limpia derrames inmediatamente con agua fría</li>
      </ul>
      
      <h2>Productos recomendados</h2>
      <ul>
        <li><strong>Telas naturales:</strong> Vinagre blanco diluido</li>
        <li><strong>Microfibra:</strong> Alcohol isopropílico</li>
        <li><strong>Cuero:</strong> Cremas especiales hidratantes</li>
        <li><strong>Antimanchas:</strong> Paño húmedo y jabón neutro</li>
      </ul>
      
      <h2>Consejos profesionales</h2>
      <p>Realiza una limpieza profunda profesional cada 12-18 meses. Los expertos utilizan vapor y productos que no dañan las fibras.</p>
    `
  },
  "sillon-relax-manual-vs-electrico": {
    title: "Sillón Relax: ¿Manual o Eléctrico?",
    category: "Guía Comparativa",
    content: `
      <div style="text-align: center; margin: 2rem 0;">
        <img src="/assets/blog/sillon-relax-manual-vs-electrico.webp" alt="Comparativa Sillón Manual vs Eléctrico" style="width: 100%; max-width: 700px; border-radius: 12px; margin-bottom: 2rem;" />
      </div>

      <div style="text-align: center; margin: 2rem 0;">
        <p style="font-weight: 600; margin-bottom: 1rem;">Compartir:</p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="https://wa.me/?text=Sillón Relax: ¿Manual o Eléctrico? - EstilSofa" target="_blank" style="background: #25D366; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600;">
            📱 WhatsApp
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://estilsofa.com" target="_blank" style="background: #1877F2; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600;">
            👥 Facebook
          </a>
          <a href="https://twitter.com/intent/tweet?text=Sillón Relax: ¿Manual o Eléctrico?" target="_blank" style="background: #1DA1F2; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600;">
            🐦 Twitter
          </a>
        </div>
      </div>

      <p>Elegir entre un sillón relax manual o eléctrico es una de las decisiones más importantes al comprar tu sillón de descanso. Ambos ofrecen <strong>confort excepcional</strong>, pero funcionan de manera diferente y se adaptan a distintos perfiles de usuario.</p>
      
      <p>En esta guía comparativa analizamos a fondo las diferencias, ventajas, desventajas y te ayudamos a decidir cuál es la mejor opción para ti según tu situación, presupuesto y necesidades.</p>

      <h2>🔍 ¿Qué es un Sillón Relax?</h2>
      <p>Un sillón relax es un asiento diseñado específicamente para proporcionar <strong>máximo confort y relajación</strong>. Su característica principal es que permite reclinar el respaldo y elevar los reposapiés mediante un mecanismo (manual o eléctrico), adaptándose a diferentes posiciones de descanso.</p>
      
      <p><strong>Son ideales para:</strong></p>
      <ul>
        <li>Personas que pasan muchas horas viendo TV o leyendo</li>
        <li>Personas mayores que necesitan ayuda para levantarse</li>
        <li>Quien busca aliviar dolores de espalda o piernas</li>
        <li>Espacios donde se prioriza el descanso individual</li>
      </ul>

      <h2>🛠️ Sillón Relax Manual</h2>
      <h3>Ventajas:</h3>
      <ul>
        <li>💰 <strong>Precio más económico</strong> (desde 300€)</li>
        <li>🔌 <strong>No requiere conexión eléctrica</strong></li>
        <li>🔧 <strong>Menor mantenimiento</strong></li>
        <li>📏 <strong>Diseño más compacto</strong></li>
        <li>⚡ <strong>Sin dependencia de corriente</strong></li>
      </ul>
      
      <h3>Desventajas:</h3>
      <ul>
        <li>💪 Requiere esfuerzo físico para reclinarlo</li>
        <li>🎚️ Menos posiciones de ajuste</li>
        <li>👴 No incluye función levanta-personas</li>
        <li>⏱️ Ajuste menos preciso</li>
      </ul>
      
      <h2>⚡ Sillón Relax Eléctrico</h2>
      <h3>Ventajas:</h3>
      <ul>
        <li>🎮 <strong>Ajuste con mando a distancia</strong></li>
        <li>🎯 <strong>Múltiples posiciones personalizables</strong></li>
        <li>🆙 <strong>Función levanta-personas</strong> (ideal para mayores)</li>
        <li>😌 <strong>Máximo confort sin esfuerzo</strong></li>
        <li>🩺 <strong>Recomendado por fisioterapeutas</strong></li>
      </ul>
      
      <h3>Desventajas:</h3>
      <ul>
        <li>💵 Precio más elevado (desde 500€)</li>
        <li>🔌 Requiere toma de corriente cercana</li>
        <li>🔧 Mayor complejidad mecánica</li>
        <li>⚠️ Posible avería del motor</li>
      </ul>
      
      <h2>✅ ¿Cuál elegir?</h2>
      <div style="background: #f8f9fa; padding: 1.5rem; border-left: 4px solid #ff6b35; margin: 2rem 0; border-radius: 6px;">
        <p><strong>🔧 ELIGE MANUAL si:</strong></p>
        <ul style="margin-bottom: 0;">
          <li>Eres joven y tienes movilidad normal</li>
          <li>Buscas precio económico</li>
          <li>No tienes enchufes cerca del sillón</li>
          <li>Prefieres simplicidad mecánica</li>
        </ul>
      </div>

      <div style="background: #f8f9fa; padding: 1.5rem; border-left: 4px solid #28a745; margin: 2rem 0; border-radius: 6px;">
        <p><strong>⚡ ELIGE ELÉCTRICO si:</strong></p>
        <ul style="margin-bottom: 0;">
          <li>Priorizas el confort máximo</li>
          <li>Tienes problemas de movilidad o dolor</li>
          <li>Buscas función levanta-personas</li>
          <li>Quieres ajuste preciso y sin esfuerzo</li>
        </ul>
      </div>

      <h2>💡 Conclusión</h2>
      <p>Ambas opciones son excelentes, pero la elección depende de tus <strong>necesidades específicas y presupuesto</strong>. Si buscas el máximo bienestar y tienes problemas de movilidad, un sillón eléctrico es una inversión que mejorará significativamente tu calidad de vida. Si buscas una opción más económica y no necesitas ayuda para levantarte, un sillón manual será perfecto para ti.</p>
    `
  }
};

export default async function BlogArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = blogArticles[slug];

  if (!article) {
    return notFound();
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <Link href="/blog" className="text-primary-dark hover:underline mb-6 inline-block">
          ← Volver al Blog
        </Link>

        <article className="prose prose-lg max-w-none">
          <div className="mb-8">
            <span className="text-sm font-bold text-primary-dark uppercase tracking-wide">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 font-heading">
              {article.title}
            </h1>
          </div>

          <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div
              className="blog-content leading-relaxed text-gray-700"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.8'
              }}
            />
          </div>

          <div className="mt-12 p-8 bg-gray-50 rounded-xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas asesoramiento personalizado?</h3>
            <p className="text-gray-700 mb-6">
              Nuestro equipo de expertos está listo para ayudarte a elegir el sofá perfecto para tu hogar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/visitanos" className="btn btn-primary">
                Pedir Cita en Tienda
              </Link>
              <a
                href="https://wa.me/34677481926?text=Hola, me gustaría recibir asesoramiento"
                target="_blank"
                className="btn bg-[#25D366] text-white hover:bg-[#1faa53] border-none"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </article>
      </main>

      <style jsx global>{`
        .blog-content h2 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #1a2332;
        }
        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #2d3748;
        }
        .blog-content ul,
        .blog-content ol {
          margin: 1.5rem 0;
          padding-left: 2rem;
        }
        .blog-content li {
          margin-bottom: 0.75rem;
          line-height: 1.8;
        }
        .blog-content strong {
          color: #1a2332;
          font-weight: 600;
        }
        .blog-content p {
          margin-bottom: 1.5rem;
        }
      `}</style>

      <Footer />
    </>
  );
}
