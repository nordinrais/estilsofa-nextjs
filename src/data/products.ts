export type ProductData = {
    id: string;
    title: string;
    folder: string;
    path: string;
    category: string;
    image: string;
    images: string[];
    options?: string[];
    optionsImage?: string;
    pdf?: string;
    price?: string;
    specialPrice?: {
        price: string;
        configuration: string;
        fabric: string;
        includes: string[];
        note: string;
    };
};

export const ESTILSOFA_DATA = {
    categories: {
        'relax': {
            title: 'Sofás Relax',
            folder: 'sofas-relax',
            banner: '/assets/imagenes-banner-categorias/banner-sofas-relax.webp',
            description: 'Relax eléctricos y manuales. Te ayudamos a elegir según postura y espacio.'
        },
        'deslizantes': {
            title: 'Sofás Deslizantes',
            folder: 'sofas-deslizantes',
            banner: '/assets/imagenes-banner-categorias/banner-sofas-deslizantes.webp',
            description: 'Gana espacio y comodidad. Asientos que se extienden para convertirse en chaise longue.'
        },
        'cama': {
            title: 'Sofás Cama',
            folder: 'sofas-cama',
            banner: '/assets/imagenes-banner-categorias/banner-sofas-cama.webp',
            description: 'Olvídate de los sofás cama incómodos. Diseños modernos con colchones de verdad.'
        },
        'sillones': {
            title: 'Sillones Relax',
            folder: 'sillones-relax',
            banner: '/assets/imagenes-banner-categorias/banner-sillones-relax.webp',
            description: 'Tu propio espacio de confort. Manuales o eléctricos, con opciones levanta-personas.'
        },
        'fijos': {
            title: 'Sofás Fijos',
            folder: 'sofas-fijos',
            banner: '/assets/imagenes-banner-categorias/banner-sofas-fijos.webp',
            description: 'Elegancia pura sin mecanismos. Ideales para salones que buscan estética ligera.'
        },
        'sillones-fijos': {
            title: 'Sillones Fijos',
            folder: 'sillones-fijos',
            banner: '/assets/imagenes-banner-categorias/banner-sillones-fijos.webp',
            description: 'Comodidad individual con diseño atemporal.'
        }
    },
    products: [
        // SOFÁS RELAX
        { id: 'sofa-relax-aroa', title: 'Modelo Aroa', folder: 'sofas-relax', path: 'sofa-relax-aroa', category: 'relax', image: 'aroa-relax.webp', images: ['aroa-relax.webp'], options: ['2_plazas', '3_plazas', '4_plazas', 'chaise'] },
        { id: 'sofa-relax-clair', title: 'Modelo Clair', folder: 'sofas-relax', path: 'sofa-relax-clair', category: 'relax', image: 'clair-relax-abierto.webp', images: ['clair-relax-abierto.webp'], options: ['2_plazas', '3_plazas', '4_plazas', 'chaise'] },
        { id: 'sofa-relax-claris', title: 'Modelo Claris', folder: 'sofas-relax', path: 'sofa-relax-claris', category: 'relax', image: 'claris-relax.webp', images: ['claris-relax.webp'], options: ['2_plazas', '3_plazas', '4_plazas', 'chaise'] },
        {
            id: 'sofa-relax-naomi',
            title: 'Modelo Naomi',
            folder: 'sofas-relax',
            path: 'sofa-relax-naomi',
            category: 'relax',
            image: 'sofa-relax-motor-patas-altas-diseno-moderno-naome.webp',
            images: ['sofa-relax-motor-patas-altas-diseno-moderno-naome.webp', 'vista-perfil-sofa-relax-motor-estilo-nordico-patas-altas.webp', 'sofa-relax-motor-ideal-robot-aspirador-patas-altas.webp', 'mecanismo-relax-electrico-apertura-total-sofa-naome.webp', 'botonera-oculta-sofa-relax-motorizado-asiento-deslizante.webp', 'detalle-tapizado-calidad-sofa-relax-modelo-naome.webp', 'sofá-relax-motorizado-familiar.webp', 'sofá-funcional-para-salón-familiar.webp', 'sofá-relax-espacioso-con-arcón.webp', 'sofá-con-arcón-para-almacenaje.webp', 'sofá-con-almacenamiento-en-brazo.webp', 'chaise-longue-con-espacio-oculto.webp'],
            options: ['2_plazas', '3_plazas', '4_plazas', 'chaise'],
            optionsImage: 'sofa-rexax-caracteristicas.tecnicas.png',
            pdf: 'sofa-relax-motorizado-especificaciones.pdf',
            specialPrice: {
                price: '1.689€',
                configuration: 'Chaise Longue (Derecha o Izquierda)',
                fabric: 'Tela Lorus 2',
                includes: ['Arcón en chaise longue', 'Arcón en brazo', 'Mecanismo relax motorizado'],
                note: 'Otras configuraciones disponibles a consultar'
            }
        },
        { id: 'soffa-relax-care', title: 'Modelo Care', folder: 'sofas-relax', path: 'soffa-relax-care', category: 'relax', image: 'care-relax.webp', images: ['care-relax.webp'], options: ['2_plazas', '3_plazas', '4_plazas', 'chaise'] },

        // SOFÁS DESLIZANTES
        { id: 'adel-deslizante', title: 'Modelo Adel', folder: 'sofas-deslizantes', path: 'adel-deslizante', category: 'deslizantes', image: 'adel-deslizante-1.webp', images: ['adel-deslizante-1.webp', 'adel-deslizante-2.webp'], options: ['2_plazas', '3_plazas', '4_plazas', 'chaise'] },
        { id: 'amon-deslizante', title: 'Modelo Amon', folder: 'sofas-deslizantes', path: 'amon-deslizante', category: 'deslizantes', image: 'sofa-amon-deslizante-con-reposabrazos.webp', images: ['sofa-amon-deslizante-con-reposabrazos.webp', 'sofa-amon-deslizante-confortable-tela.webp', 'sofa-amon-deslizante-de-dos-plazas.webp', 'sofa-amon-deslizante-estilo-minimalista-1.webp', 'sofa-amon-deslizante-moderno-azul.webp', 'sofa-amon-deslizante-para-apartamento.webp'], options: ['2_plazas', '3_plazas', '4_plazas', 'chaise'] },
        { id: 'blanca-deslizante', title: 'Modelo Blanca', folder: 'sofas-deslizantes', path: 'blanca-deslizante', category: 'deslizantes', image: 'sofa-blanco-deslizante-asientos-extraibles-para-salon.webp', images: ['sofa-blanco-deslizante-asientos-extraibles-para-salon.webp', 'sofa-blanco-deslizante-comodo-para-familias-y-visitas.webp', 'sofa-blanco-deslizante-con-chaise-longue-modular.webp', 'sofa-blanco-deslizante-estilo-moderno-lineas-rectas.webp', 'sofa-blanco-deslizante-grande-para-salon-amplio-luminoso.webp', 'sofa-blanco-deslizante-tela-antimanchas-facil-limpieza.webp', 'sofa-victor-deslizante-con-chaise-longue-modular.webp'], options: ['2_plazas', '3_plazas', '4_plazas', 'chaise'] },
        { id: 'rihana-deslizante', title: 'Modelo Rihana', folder: 'sofas-deslizantes', path: 'rihana-deslizante', category: 'deslizantes', image: 'comprar-sofa-rihanna-deslizante-diseno-moderno.webp', images: ['comprar-sofa-rihanna-deslizante-diseno-moderno.webp', 'sofa-rihanna-diseno-versatilidad.webp', 'rinconera-deslizante-modelo-rihanna-a-medida.webp', 'sofa-chaise-longue-deslizante-rihanna.webp', 'sofa-deslizante-rihanna-asientos-extensibles-con-arcon.webp', 'sofa-modelo-rihanna-3-plazas-tela-antimanchas.webp', 'sofa-modelo-rihanna-deslizante-con-asientos-de-viscoelastica.png', 'sofa-rihanna-cabezal-italiano-y-deslizante.webp'], options: ['2_plazas', '3_plazas', '4_plazas', 'chaise'] },
        { id: 'roma-deslizante', title: 'Modelo Roma', folder: 'sofas-deslizantes', path: 'roma-deslizante', category: 'deslizantes', image: '01_sofa-chaiselongue-roma-asientos-extraibles-apertura-carro-al-suelo.webp', images: ['01_sofa-chaiselongue-roma-asientos-extraibles-apertura-carro-al-suelo.webp', '02_sofa-deslizante-roma-3-plazas-tejido-antimanchas-beige-arena.webp', '03_sofa-rinconera-modular-roma-tapizado-gris-perla-salon-moderno.webp', '04_vista-frontal-sofa-modelo-roma-transformable-en-cama-auxiliar.webp', '05_estructura-sofa-roma-deslizante-madera-pino-reforzada-vista-interi.webp', '06_textura-tela-aquaclean-sofa-deslizante-roma-resistencia-mascotas-1.webp', '07_sofa-lineal-roma-sistema-deslizante-con-rinonera-alta-densidad.webp', '08_sofa-roma-2-plazas-asientos-extensibles-ideal-apartamentos-pequenos.webp', '10_acabado-costuras-asiento-deslizante-sofa-roma-espuma-suave.webp', '12_respaldo-rinonera-ergonomica-fibra-hueca-siliconada-sofa-roma.webp'], options: ['2_plazas', '3_plazas', '4_plazas', 'chaise'], pdf: 'Roma_Sofá_Modular_Versatilidad_y_Confort.pdf', optionsImage: 'opciones-disponibles.webp' },
        { id: 'sofia-deslizante', title: 'Modelo Sofia', folder: 'sofas-deslizantes', path: 'sofia-deslizante', category: 'deslizantes', image: 'sofa-sofia-deslizante-asientos-extraibles-para-salon-familiar.webp', images: ['sofa-sofia-deslizante-asientos-extraibles-para-salon-familiar.webp', 'sofa-sofia-deslizante-con-chaise-longue-y-arcon.webp', 'sofa-sofia-deslizante-con-respaldos-reclinables-comodos.png', 'sofa-sofia-deslizante-con-respaldos-reclinables-comodos.webp', 'sofa-sofia-deslizante-diseno-moderno-lineas-suaves-y-elegantes.webp', 'sofa-sofia-deslizante-grande-para-salon-amplio-y-luminoso.webp'], options: ['2_plazas', '3_plazas', '4_plazas', 'chaise'] },
        { id: 'tokio-deslizante', title: 'Modelo Tokio', folder: 'sofas-deslizantes', path: 'tokio-deslizante', category: 'deslizantes', image: 'tokio-view-01.webp', images: ['tokio-view-01.webp', 'tokio-view-02.webp', 'tokio-view-03.webp', 'tokio-view-04.webp', 'tokio-view-05.webp', 'tokio-view-06.webp', 'tokio-view-07.webp', 'tokio-specs-08.webp', 'tokio-specs-09.webp', 'tokio-detail-10.webp', 'tokio-detail-11.webp', 'tokio-detail-12.webp', 'tokio-detail-13.webp'], options: ['2_plazas', '3_plazas', '4_plazas', 'chaise'], pdf: 'Tokio_Design_System.pdf', optionsImage: 'tokio-options.webp' },
        { id: 'victor', title: 'Modelo Victor', folder: 'sofas-deslizantes', path: 'victor', category: 'deslizantes', image: 'sofa-victor-deslizante-asientos-extraibles-y-rinconera.webp', images: ['sofa-victor-deslizante-asientos-extraibles-y-rinconera.webp', 'sofa-victor-deslizante-comodo-para-ver-tv-y-relax-diario.webp', 'sofa-victor-deslizante-con-arcon-y-espacio-de-almacenaje.webp', 'sofa-victor-deslizante-con-chaise-longue-reversible.webp', 'sofa-victor-deslizante-estilo-moderno-para-salon-contemporaneo.webp', 'sofa-victor-deslizante-tela-antimanchas-y-facil-limpieza.webp'], options: ['2_plazas', '3_plazas', '4_plazas', 'chaise'] },

        // SOFÁS CAMA
        { id: 'sofa-cama-basco', title: 'Modelo Basco', folder: 'sofas-cama', path: 'sofa-cama-basco', category: 'cama', image: 'comprar-sofa-cama-italiano-basco-al-mejor-precio.webp', images: ['comprar-sofa-cama-italiano-basco-al-mejor-precio.webp', 'oferta-sofa-cama-apertura-italiana-modelo-basco.webp', 'precio-sofa-cama-sistema-italiano-basco-3-plazas.webp', 'sofa-cama-italiano-basco-con-colchon-viscoelastico.webp', 'sofa-cama-modelo-basco-tela-antimanchas-online.webp', 'tienda-donde-comprar-sofa-cama-italiano-basco.webp'], options: ['2_plazas', '3_plazas', '4_plazas', 'chaise'] },
        { id: 'sofa-cama-brimen', title: 'Modelo Brimen', folder: 'sofas-cama', path: 'sofa-cama-brimen', category: 'cama', image: 'comprar-sofa-cama-italiano-brimen-al-mejor-precio.webp', images: ['comprar-sofa-cama-italiano-brimen-al-mejor-precio.webp', 'mejores-opiniones-sofa-cama-apertura-italiana-brimen.webp', 'oferta-sofa-cama-brimen-sistema-apertura-italiana.webp', 'onde-comprar-sofa-cama-brimen-con-envio-rapido.webp', 'precio-sofa-cama-modelo-brimen-3-plazas.webp', 'sofa-cama-brimen-tapizado-antimanchas-oferta.webp', 'sofa-cama-italiano-brimen-para-uso-diario-comodo.webp', 'sofa-cama-matrimonio-brimen-apertura-facil.webp', 'tienda-online-sofa-cama-italiano-brimen-garantia.png'], options: ['2_plazas', '3_plazas', '4_plazas', 'chaise'] },
        { id: 'sofa-cama-rolling', title: 'Modelo Rolling', folder: 'sofas-cama', path: 'sofa-cama-rolling', category: 'cama', image: 'comprar-sofa-cama-modelo-rolling-al-mejor-precio.webp', images: ['comprar-sofa-cama-modelo-rolling-al-mejor-precio.webp', 'oferta-sofa-cama-rolling-para-habitacion-juvenil.webp', 'precio-sofa-cama-rolling-tapizado-personalizable.webp', 'sofa-cama-rolling-apertura-frontal-con-ruedas.webp', 'sofa-cama-rolling-con-envio-a-domicilio-rapido.webp', 'sofa-cama-rolling-sistema-deslizante-barato.webp'], options: ['2_plazas', '3_plazas', '4_plazas', 'chaise'] },
        { id: 'sofa-cama-tamara', title: 'Modelo Tamara', folder: 'sofas-cama', path: 'sofa-cama-tamara', category: 'cama', image: 'comprar-sofa-cama-italiano-tamara-oferta-online.webp', images: ['comprar-sofa-cama-italiano-tamara-oferta-online.webp', 'medidas-exactas-sofa-cama-italiano-tamara-cama-140.webp', 'precio-sofa-cama-modelo-tamara-3-plazas.webp', 'sofa-cama-apertura-italiana-tamara-para-uso-diario.webp', 'sofa-cama-italiano-tamara-tapizado-tela-antimanchas.webp', 'sofa-cama-sistema-italiano-tamara-con-colchon-viscoelastico.webp', 'tienda-sofa-cama-italiano-tamara-financiacion-sin-intereses.webp'], options: ['2_plazas', '3_plazas', '4_plazas', 'chaise'] },
        { id: 'sofa-cama-tarancon', title: 'Modelo Tarancon', folder: 'sofas-cama', path: 'sofa-cama-tarancon', category: 'cama', image: 'comprar-sofa-cama-italiano-tarancon-online.webp', images: ['comprar-sofa-cama-italiano-tarancon-online.webp', 'oferta-sofa-cama-sistema-italiano-modelo-tarancon.webp', 'precio-sofa-cama-apertura-italiana-tarancon.webp', 'sofa-cama-3-plazas-apertura-italiana-tarancon.webp', 'sofa-cama-italiano-tarancon-con-colchon-viscoelastico.webp', 'tienda-de-sofas-cama-modelo-tarancon-baratos.webp'], options: ['2_plazas', '3_plazas', '4_plazas', 'chaise'] },

        // SILLONES RELAX
        { id: 'sillon-relax-manual-sara', title: 'Modelo Sara', folder: 'sillones-relax', path: 'sillon-relax-manual-sara', category: 'sillones', image: 'comprar-sillon-relax-manual-modelo-sara-online.webp', images: ['comprar-sillon-relax-manual-modelo-sara-online.webp', 'medidas-sillon-relax-manual-de-empuje-sara.webp', 'sillon-relax-sara-manual-ideal-para-espacios-pequenos.webp'], options: ['1_plaza'] },
        { id: 'sillon-relax-pl-alma', title: 'Modelo Alma', folder: 'sillones-relax', path: 'sillon-relax-pl-alma', category: 'sillones', image: 'butaca-motor-alma-diseno-ergonomico.webp', images: ['butaca-motor-alma-diseno-ergonomico.webp', 'butaca-relax-electrica-alma-reclinable.webp', 'precio-sofa-elevador-motor-relaxo-alma-sillon.webp', 'sillon-reclinable-motorizado-alma-confort.webp', 'sillon-relax-alma-mecanismo-electrico.webp'], options: ['1_plaza'] },
        { id: 'sillon-relax-pl-paula', title: 'Modelo Paula', folder: 'sillones-relax', path: 'sillon-relax-pl-paula', category: 'sillones', image: 'comprar-sillon-relax-electrico-modelo-paula-online.webp', images: ['comprar-sillon-relax-electrico-modelo-paula-online.webp', 'mejor-precio-sillon-relax-paula-un-motor.webp', 'oferta-sillon-relax-manual-modelo-paula-economico.webp', 'precio-sillon-relax-paula-con-sistema-levantapersonas.webp', 'sillon-relax-paula-tapizado-tela-antimanchas-lavable.webp', 'tienda-donde-comprar-sillon-relax-paula-garantia.webp'], options: ['1_plaza'] },
        { id: 'sillon-relax-pl-picaso', title: 'Modelo Picaso', folder: 'sillones-relax', path: 'sillon-relax-pl-picaso', category: 'sillones', image: 'comprar-sillon-relax-picaso-4-motores-independientes.webp', images: ['comprar-sillon-relax-picaso-4-motores-independientes.webp', 'mejor-sillon-relax-picaso-ajuste-lumbar-motorizado.webp', 'oferta-sillon-descanso-picaso-ergonomico-gama-alta.webp', 'precio-sillon-relax-picaso-con-ajuste-lumbar-y-cervical.webp', 'sillon-relax-modelo-picaso-con-cuatro-motores-electricos-1.webp', 'sillon-relax-picaso-4-motores-para-dolor-de-espalda.webp', 'sillon-relax-picaso-control-independiente-cabeza-y-rinones.webp', 'tienda-sillon-electrico-picaso-movimiento-independiente.webp'], options: ['1_plaza'] },
        { id: 'sillon-relax-pl-tous', title: 'Modelo Tous', folder: 'sillones-relax', path: 'sillon-relax-pl-tous', category: 'sillones', image: '01_sillon-relax-levantapersonas-barato.webp', images: ['01_sillon-relax-levantapersonas-barato.webp', '02_sillon-relax-electrico-con-motor.webp', '03_sillon-relax-automatico-con-mando.webp', '04_oferta-sillon-relax-para-personas-mayores.webp', '05_sillon-elevador-precio-minimo-garantizado.webp', '07_comprar-sillon-levantapersonas-online.webp', '07_sillon-relax-elevador-power-lift.webp'], options: ['1_plaza'], price: '499€' },

        // SILLONES FIJOS
        { id: 'sillon-gemma-madera', title: 'Modelo Gemma Madera', folder: 'sillones-fijos', path: 'sillon-gemma-madera', category: 'sillones-fijos', image: 'ambiente-salon-con-butaca-gemma-madera.webp', images: ['ambiente-salon-con-butaca-gemma-madera.webp', 'butaca-gemma-madera-diseno-nordico-comoda.webp', 'detalle-patas-madera-sillon-gemma-fijo.webp', 'sillon-fijo-modelo-gemma-patas-madera-salon.webp', 'sillon-gemma-patas-haya-tapizado-tela.webp', 'sillon-lectura-gemma-madera-moderno.webp'], options: ['1_plaza'] },
        { id: 'sillon-gemma-metal', title: 'Modelo Gemma Metal', folder: 'sillones-fijos', path: 'sillon-gemma-metal', category: 'sillones-fijos', image: 'butaca-gemma-metal-estilo-industrial-salon.webp', images: ['butaca-gemma-metal-estilo-industrial-salon.webp', 'butaca-moderna-gemma-metal-confort.webp', 'detalle-estructura-metalica-sillon-gemma.webp', 'sillon-diseno-gemma-metal-para-sala-espera.webp', 'sillon-fijo-modelo-gemma-patas-metal-moderno.webp', 'sillon-gemma-patas-acero-tapizado-gris.webp'], options: ['1_plaza'] },
        { id: 'sillon-mili-capitone', title: 'Modelo Mili Capitone', folder: 'sillones-fijos', path: 'sillon-mili-capitone', category: 'sillones-fijos', image: 'butaca-mili-capitone-estilo-chester-salon.webp', images: ['butaca-mili-capitone-estilo-chester-salon.webp', 'butaca-mili-capitone-patas-madera-oscura.webp', 'detalle-respaldo-capitone-sillon-mili.webp', 'sillon-acento-mili-capitone-elegante.webp', 'sillon-fijo-modelo-mili-tapizado-capitone-clasico.webp', 'sillon-mili-botonadura-capitone-terciopelo.webp'], options: ['1_plaza'] },
        { id: 'sillon-moli', title: 'Modelo Moli', folder: 'sillones-fijos', path: 'sillon-moli', category: 'sillones-fijos', image: 'ambiente-acogedor-con-sillon-fijo-moli.webp', images: ['ambiente-acogedor-con-sillon-fijo-moli.webp', 'butaca-moli-comoda-para-salon-moderno.webp', 'butaca-moli-patas-conicas-estilo-actual.webp', 'sillon-fijo-modelo-moli-diseno-contemporaneo.webp', 'sillon-lectura-moli-ergonomico-hogar.webp', 'sillon-moli-tapizado-tela-antimanchas.webp'], options: ['1_plaza'] },
        { id: 'sillon-norik', title: 'Modelo Norik', folder: 'sillones-fijos', path: 'sillon-norik', category: 'sillones-fijos', image: 'butaca-norik-compacta-para-espacios-pequenos.webp', images: ['butaca-norik-compacta-para-espacios-pequenos.webp', 'butaca-norik-diseno-minimalista-salon.webp', 'sillon-descanso-norik-para-rincon-lectura.webp', 'sillon-fijo-modelo-norik-lineas-rectas-moderno.webp', 'sillon-norik-tapizado-tejido-suave.webp', 'vista-frontal-sillon-fijo-norik.webp'], options: ['1_plaza'] },
        { id: 'sillon-orejero', title: 'Modelo Orejero', folder: 'sillones-fijos', path: 'sillon-orejero', category: 'sillones-fijos', image: 'butaca-orejera-moderna-tapizado-color-vivo.webp', images: ['butaca-orejera-moderna-tapizado-color-vivo.webp', 'butaca-orejera-para-salon-acogedor.webp', 'detalle-orejas-sillon-fijo-tradicional.webp', 'sillon-orejero-fijo-clasico-renovado.webp', 'sillon-orejero-lectura-respaldo-alto-comodo.webp', 'sillon-orejero-patas-madera-estilo-vintage.webp'], options: ['1_plaza'] },

        // SOFÁS FIJOS
        { id: 'celia-fijo', title: 'Modelo Celia', folder: 'sofas-fijos', path: 'celia-fijo', category: 'fijos', image: 'sofa-celia-fijo-asientos-espuma-alta-densidad-muy-comodo.webp', images: ['sofa-celia-fijo-asientos-espuma-alta-densidad-muy-comodo.webp', 'sofa-celia-fijo-con-asiento-duro-modular.webp', 'sofa-celia-fijo-con-patas-altas-y-lineas-elegantes.webp', 'sofa-celia-fijo-estilo-moderno-para-salon-contemporaneo-1.webp', 'sofa-celia-fijo-grande-para-salon-amplio-y-luminoso.webp', 'sofa-celia-fijo-tapizado-antimanchas-facil-de-limpiar.webp'], options: ['2_plazas', '3_plazas', '4_plazas', 'chaise'] },
        { id: 'crema-fijo', title: 'Modelo Crema', folder: 'sofas-fijos', path: 'crema-fijo', category: 'fijos', image: 'sofa-fijo-brazoa-recto-suaves-ambiente-luminoso.webp', images: ['sofa-fijo-brazoa-recto-suaves-ambiente-luminoso.webp', 'sofa-fijo-color-crema-asientos-espuma-alta-densidad.webp', 'sofa-fijo-color-crema-estilo-moderno-para-salon.webp', 'sofa-fijo-crema-comodo-para-salon-familiar-y-visitas.webp', 'sofa-fijo-crema-con-patas-altas-y-diseno-elegante.webp', 'sofa-fijo-crema-lineas-suaves-ambiente-luminoso.webp', 'sofa-fijo-crema-tapizado-antimanchas-facil-limpieza.webp'], options: ['2_plazas', '3_plazas', '4_plazas', 'chaise'] },
        { id: 'giorgina-fijo', title: 'Modelo Giorgina', folder: 'sofas-fijos', path: 'giorgina-fijo', category: 'fijos', image: 'sofa-giorgina-asientos-espuma-alta-densidad-confort.webp', images: ['sofa-giorgina-asientos-espuma-alta-densidad-confort.webp', 'sofa-giorgina-con-chaise-longue-modular-y-comoda.webp', 'sofa-giorgina-con-patas-altas-y-lineas-contemporaneas.webp', 'sofa-giorgina-diseno-minimalista-con-acabado-premium.webp', 'sofa-giorgina-fijo-con-respaldos-ergonomicos-y-asiento-profundo.webp', 'sofa-giorgina-fijo-estilo-moderno-para-salon-elegante.webp', 'sofa-giorgina-grande-para-salon-amplio-y-luminoso.webp', 'sofa-giorgina-ideal-para-salones-pequenos-y-medianos.webp', 'sofa-giorgina-sofa-comodo-para-ver-tv-y-relax.webp', 'sofa-giorgina-tapizado-antimanchas-facil-de-limpiar.webp'], options: ['2_plazas', '3_plazas', '4_plazas', 'chaise'] },
        { id: 'loris-fijo', title: 'Modelo Loris', folder: 'sofas-fijos', path: 'loris-fijo', category: 'fijos', image: 'sofa-loris-asientos-espuma-alta-densidad-confort-diario.webp', images: ['sofa-loris-asientos-espuma-alta-densidad-confort-diario.webp', 'sofa-loris-con-chaise-longue-modular-y-comoda.webp', 'sofa-loris-con-patas-altas-y-diseno-elegante.webp', 'sofa-loris-fijo-estilo-moderno-para-salon-contemporaneo.webp', 'sofa-loris-grande-para-salon-amplio-y-luminoso.webp', 'sofa-loris-tapizado-antimanchas-y-facil-de-limpiar.webp'], options: ['2_plazas', '3_plazas', '4_plazas', 'chaise'] },
        { id: 'origen-catpitone', title: 'Modelo Origen Capitone', folder: 'sofas-fijos', path: 'origen-catpitone', category: 'fijos', image: 'acabados-premium-remates-sofa-fijo-origen.jpg.webp', images: ['acabados-premium-remates-sofa-fijo-origen.jpg.webp', 'sofa-fijo-modelo-origen-estilo-chester-renovado.jpg.webp', 'sofa-fijo-origen-capitone-detalle-brazos-tapizado.webp', 'sofa-fijo-origen-capitone-detalle-respaldo.webp', 'sofa-fijo-origen-capitone-foto-detalle-costuras-patas.webp', 'sofa-origen-capitone.jpg.webp'], options: ['2_plazas', '3_plazas', '4_plazas', 'chaise'] },
        { id: 'vania-fijo', title: 'Modelo Vania', folder: 'sofas-fijos', path: 'vania-fijo', category: 'fijos', image: 'vista-frontal-sofa-fijo-modelo-vania-diseno-moderno.webp', images: ['vista-frontal-sofa-fijo-modelo-vania-diseno-moderno.webp', 'detalle-confeccion-brazo-y-costuras-sofa-vania.webp', 'detalle-patas-altas-para-robot-limpieza-sofa-vania.webp', 'perspectiva-diagonal-tres-cuartos-sofa-modelo-vania.webp', 'primer-plano-textura-tapizado-suave-sofa-vania.webp', 'vista-lateral-perfil-fondo-sofa-fijo-vania.webp'], options: ['2_plazas', '3_plazas', '4_plazas', 'chaise'] },
        { id: 'zoe-fijo', title: 'Modelo Zoe', folder: 'sofas-fijos', path: 'zoe-fijo', category: 'fijos', image: 'detalle-altura-patas-compatible-robot-aspirador-sofa-zoe.webp', images: ['detalle-altura-patas-compatible-robot-aspirador-sofa-zoe.webp', 'detalle-asiento-fijo-firmeza-y-confort-sofa-zoe.webp', 'perspectiva-diagonal-sofa-elevado-suelo-zoe.webp', 'primer-plano-tejido-resistente-patas-metalicas-zoe.webp', 'sofa-fijo-patas-altas-estilo-nordico-modelo-zoe.webp', 'vista-lateral-perfil-ligero-sin-mecanismos-modelo-zoe.webp'], options: ['2_plazas', '3_plazas', '4_plazas', 'chaise'] }
    ]
};
