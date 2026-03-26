import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { supabaseAdmin } from '@/lib/supabase'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: NextRequest) {
  try {
    const { priceId, email, userId } = await req.json()

    // Check lifetime slots if applicable
    if (priceId === process.env.NEXT_PUBLIC_STRIPE_LIFETIME_PRICE) {
      const { data } = await supabaseAdmin
        .from('lifetime_slots')
        .select('slots_remaining')
        .single()
      if (!data || data.slots_remaining <= 0) {
        return NextResponse.json({ error: 'Lifetime slots sold out' }, { status: 400 })
      }
    }

    // Get or create Stripe customer
    let customerId: string
    const { data: profile } = await supabaseAdmin
      .from('profiles')
      .select('stripe_customer_id')
      .eq('id', userId)
      .single()

    if (profile?.stripe_customer_id) {
      customerId = profile.stripe_customer_id
    } else {
      const customer = await stripe.customers.create({ email, metadata: { userId } })
      customerId = customer.id
      await supabaseAdmin.from('profiles').upsert({ id: userId, email, stripe_customer_id: customerId })
    }

    const isLifetime = priceId === process.env.NEXT_PUBLIC_STRIPE_LIFETIME_PRICE
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: isLifetime ? 'payment' : 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/#pricing`,
      metadata: { userId, priceId },
    })

    return NextResponse.json({ url: session.url })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
