import { NextResponse } from 'next/server'

export function middleware() {
  const response = NextResponse.next()

  response.headers.set(
    'Cache-Control',
    'public, maxage=10, stale-while-revalidate=59'
  )

  return response
}
