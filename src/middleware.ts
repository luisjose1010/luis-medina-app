import { NextResponse, type NextRequest } from 'next/server'

const locales = ['en-US', 'es']

// Get the preferred locale
function getLocale (request: NextRequest) {
  const acceptLanguageHeader = request.headers.get('accept-language')

  if (acceptLanguageHeader != null) {
    const acceptedLanguages = acceptLanguageHeader.split(',').map((lang) => lang.trim())

    for (const lang of acceptedLanguages) {
      const langCode = new Intl.Locale(lang).language
      if (locales.includes(lang)) return lang
      if (locales.includes(langCode)) return langCode
    }
  }
  // Default to English if no preferred language is found
  return 'en-US'
}

export function middleware (request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|assets|favicon.ico).*)'
    // Optional: only run on root (/) URL
    // '/'
  ]
}
