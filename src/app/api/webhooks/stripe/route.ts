
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { supabase } from '@/lib/supabase';

// Inicializar Stripe (usará la clave secreta desde variables de entorno)
// Nota: Necesitamos la clave secreta que empieza por sk_
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2024-12-18.acacia' as any, // Usamos una versión reciente o la que typescript acepte
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: Request) {
    if (!process.env.STRIPE_SECRET_KEY || !endpointSecret || !supabase) {
        console.error("Missing configuration: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET or Supabase client");
        return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const body = await req.text();
    const sig = (await headers()).get('stripe-signature') as string;

    let event: Stripe.Event;

    try {
        // Verificar que la petición viene realmente de Stripe
        event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    } catch (err: any) {
        console.error(`Webhook Error: ${err.message}`);
        return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
    }

    // Manejar el evento de "Pago Completado"
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session;

        console.log('💰 Pago recibido:', session.id);

        try {
            // Extraer datos importantes
            const orderData = {
                stripe_session_id: session.id,
                customer_email: session.customer_details?.email || 'no-email',
                customer_name: session.customer_details?.name || 'Anonimo',
                amount_total: (session.amount_total || 0) / 100, // Convertir céntimos a euros
                payment_status: session.payment_status,
                shipping_details: session.shipping_details || session.customer_details?.address,
                order_details: session.custom_fields || [] // AQUÍ van el Color y Tela que configuramos
            };

            // Guardar en Supabase
            const { error } = await supabase
                .from('orders')
                .insert([orderData]);

            if (error) {
                console.error('Error insertando en Supabase:', error);
                return NextResponse.json({ error: 'Database error' }, { status: 500 });
            }

            console.log('✅ Pedido guardado en Supabase!');

        } catch (err) {
            console.error('Error procesando pedido:', err);
            return NextResponse.json({ error: 'Processing error' }, { status: 500 });
        }
    }

    return NextResponse.json({ received: true });
}
