import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

const FREE_DAILY_LIMIT = 10

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: cors })
}

function getIP(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'
  )
}

export async function POST(req: NextRequest) {
  try {
    const { messages, userId } = await req.json()
    if (!messages?.length) return NextResponse.json({ error: 'No messages' }, { status: 400, headers: cors })

    let isPremium = false
    let remaining = FREE_DAILY_LIMIT
    const today = new Date().toISOString().split('T')[0]

    if (userId) {
      // Authenticated user — check premium + per-user limit
      const { data: profile } = await supabaseAdmin
        .from('profiles')
        .select('is_premium, ai_free_count, ai_free_date')
        .eq('id', userId)
        .single()

      isPremium = profile?.is_premium ?? false

      if (!isPremium) {
        const lastDate = profile?.ai_free_date ?? ''
        const count = lastDate === today ? (profile?.ai_free_count ?? 0) : 0

        if (count >= FREE_DAILY_LIMIT) {
          return NextResponse.json({
            error: 'Daily limit reached. Upgrade to Premium for unlimited AI.',
            remaining: 0,
            limitReached: true,
          }, { status: 429, headers: cors })
        }

        await supabaseAdmin.from('profiles').upsert({
          id: userId,
          ai_free_count: count + 1,
          ai_free_date: today,
        })

        remaining = FREE_DAILY_LIMIT - (count + 1)
      }
    } else {
      // Anonymous user (mobile app, no login) — track by IP
      const ip = getIP(req)

      const { data: usage } = await supabaseAdmin
        .from('ai_anon_usage')
        .select('count, date')
        .eq('ip', ip)
        .single()

      const lastDate = usage?.date ?? ''
      const count = lastDate === today ? (usage?.count ?? 0) : 0

      if (count >= FREE_DAILY_LIMIT) {
        return NextResponse.json({
          error: 'Daily limit reached. Upgrade to Premium for unlimited AI.',
          remaining: 0,
          limitReached: true,
        }, { status: 429, headers: cors })
      }

      await supabaseAdmin.from('ai_anon_usage').upsert({
        ip,
        count: count + 1,
        date: today,
      })

      remaining = FREE_DAILY_LIMIT - (count + 1)
    }

    // Call Groq
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        max_tokens: 1024,
        messages,
      }),
    })

    const data = await groqRes.json()
    if (data.error) return NextResponse.json({ error: data.error.message }, { status: 500, headers: cors })

    const reply = data.choices?.[0]?.message?.content ?? 'No response received.'
    return NextResponse.json({ reply, remaining: isPremium ? null : remaining }, { headers: cors })

  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500, headers: cors })
  }
}
