import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { supabaseAdmin } from '@/lib/supabase-admin'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      const userId = session.metadata?.userId
      const priceId = session.metadata?.priceId
      if (!userId) break

      const isLifetime = priceId === process.env.NEXT_PUBLIC_STRIPE_LIFETIME_PRICE

      if (isLifetime) {
        // Decrement lifetime slots
        await supabaseAdmin.rpc('decrement_lifetime_slots')
        await supabaseAdmin.from('profiles').upsert({
          id: userId,
          is_premium: true,
          plan: 'lifetime',
          stripe_subscription_id: null,
          subscription_end_date: null,
        })
      }
      break
    }

    case 'customer.subscription.created':
    case 'customer.subscription.updated': {
      const sub = event.data.object as Stripe.Subscription
      const userId = sub.metadata?.userId ||
        (await supabaseAdmin.from('profiles').select('id').eq('stripe_customer_id', sub.customer).single())?.data?.id

      if (!userId) break
      const isActive = sub.status === 'active' || sub.status === 'trialing'
      const priceId = sub.items.data[0]?.price.id
      const plan = priceId === process.env.NEXT_PUBLIC_STRIPE_ANNUAL_PRICE ? 'annual' : 'monthly'

      await supabaseAdmin.from('profiles').upsert({
        id: userId,
        is_premium: isActive,
        plan: isActive ? plan : 'free',
        stripe_subscription_id: sub.id,
        subscription_end_date: new Date((sub as any).current_period_end * 1000).toISOString(),
      })
      break
    }

    case 'customer.subscription.deleted': {
      const sub = event.data.object as Stripe.Subscription
      const { data } = await supabaseAdmin
        .from('profiles')
        .select('id')
        .eq('stripe_customer_id', sub.customer)
        .single()
      if (data) {
        await supabaseAdmin.from('profiles').update({
          is_premium: false,
          plan: 'free',
          stripe_subscription_id: null,
          subscription_end_date: null,
        }).eq('id', data.id)
      }
      break
    }
  }

  return NextResponse.json({ received: true })
}
