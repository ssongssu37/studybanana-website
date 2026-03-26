import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get('userId')
  if (!userId) return NextResponse.json({ is_premium: false, plan: 'free' })

  const { data } = await supabaseAdmin
    .from('profiles')
    .select('is_premium, plan, subscription_end_date')
    .eq('id', userId)
    .single()

  if (!data) return NextResponse.json({ is_premium: false, plan: 'free' })

  // Auto-expire subscriptions
  if (data.plan !== 'lifetime' && data.subscription_end_date) {
    const expired = new Date(data.subscription_end_date) < new Date()
    if (expired && data.is_premium) {
      await supabaseAdmin.from('profiles').update({ is_premium: false, plan: 'free' }).eq('id', userId)
      return NextResponse.json({ is_premium: false, plan: 'free' })
    }
  }

  return NextResponse.json({ is_premium: data.is_premium, plan: data.plan })
}
