import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl

  // Get hostname (e.g. foo.example.org, bar.example.org, etc.)
  const hostname = request.headers.get('host')

  if (!hostname.includes('.')) {
    return NextResponse.next()
  }

  const currentSlug =
    process.env.NODE_ENV === 'production'
      ? hostname.replace(`.example.org`, '')
      : hostname.replace(`.localhost:3000`, '')

  url.pathname = `/${currentSlug}${url.pathname}`

  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!public|static|_next).*)'],
}
