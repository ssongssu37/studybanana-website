import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET() {
  const { data } = await supabaseAdmin.from('lifetime_slots').select('slots_remaining').single()
  return NextResponse.json({ slots: data?.slots_remaining ?? 100 })
}
