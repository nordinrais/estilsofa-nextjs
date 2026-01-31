import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const hostname = request.headers.get('host') || ''

    // Forzar redirección canónica: estilsofa.com → www.estilsofa.com
    if (hostname === 'estilsofa.com') {
        const url = request.nextUrl.clone()
        url.host = 'www.estilsofa.com'
        url.protocol = 'https'
        return NextResponse.redirect(url, 301)
    }

    const pathname = request.nextUrl.pathname

    // Handle /pages/*.html URLs
    if (pathname.startsWith('/pages/') && pathname.endsWith('.html')) {
        // Extract the page name: /pages/oferta.html -> oferta
        const pageName = pathname.replace('/pages/', '').replace('.html', '')

        // Map to new routes
        const newPath = pageName === 'index' ? '/' : `/${pageName}`

        return NextResponse.redirect(new URL(newPath, request.url), 301)
    }

    // Handle /*.html URLs at root level
    if (pathname.endsWith('.html') && !pathname.startsWith('/pages/')) {
        // Extract the page name: /oferta.html -> oferta
        const pageName = pathname.replace('.html', '').replace('/', '')

        // Map to new routes
        const newPath = pageName === 'index' ? '/' : `/${pageName}`

        return NextResponse.redirect(new URL(newPath, request.url), 301)
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        // Match all paths except static files and api routes
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
    ],
}
