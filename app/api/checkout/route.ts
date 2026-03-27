import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { supabaseAdmin } from '@/lib/supabase-admin'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: NextRequest) {
  try {
    const { priceId, email, userId } = await req.json()

    const isLifetime = priceId === process.env.NEXT_PUBLIC_STRIPE_LIFETIME_PRICE

    // Build session params — work with or without a logged-in user
    const sessionParams: any = {
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: isLifetime ? 'payment' : 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/#pricing`,
      metadata: { userId: userId || '', priceId },
    }

    if (userId && email) {
      // Logged-in user — attach to their Stripe customer record
      const { data: profile } = await supabaseAdmin
        .from('profiles')
        .select('stripe_customer_id')
        .eq('id', userId)
        .single()

      if (profile?.stripe_customer_id) {
        sessionParams.customer = profile.stripe_customer_id
      } else {
        const customer = await stripe.customers.create({ email, metadata: { userId } })
        sessionParams.customer = customer.id
        await supabaseAdmin.from('profiles').upsert({ id: userId, email, stripe_customer_id: customer.id })
      }
    } else {
      // Guest checkout — Stripe collects email, webhook links it later
      sessionParams.customer_creation = 'always'
      if (email) sessionParams.customer_email = email
    }

    const session = await stripe.checkout.sessions.create(sessionParams)
    return NextResponse.json({ url: session.url })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
