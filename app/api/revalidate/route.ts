import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  revalidatePath('/[category]/[slug]', 'page')
  revalidatePath('/[category]', 'page')

  console.log('revalidated')
  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
  })
}
