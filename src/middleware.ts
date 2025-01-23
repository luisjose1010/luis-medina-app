import { NextResponse, type NextRequest } from 'next/server'
import { getLanguageCookie } from './i18n/actions'

const locales = ['en-US', 'es']

// Get the preferred locale
async function getLocale (request: NextRequest) {
  const languageCookie = await getLanguageCookie()
  const acceptLanguageHeader = request.headers.get('accept-language')

  if (acceptLanguageHeader != null) {
    const acceptedLanguages = acceptLanguageHeader.split(',').map((lang) => lang.trim())

    for (const lang of acceptedLanguages) {
      const langCode = new Intl.Locale(lang).language
      if (languageCookie != null && locales.includes(languageCookie)) return languageCookie
      if (locales.includes(lang)) return lang
      if (locales.includes(langCode)) return langCode
    }
  }
  // Default to English if no preferred language is found
  return 'en-US'
}

export async function middleware (request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // Set language cookie if there is a supported locale in the pathname
  if (pathnameLocale != null) {
    const response = NextResponse.next()
    response.cookies.set('language', pathnameLocale)
    return response
  }

  // Redirect if there is no locale
  const locale = await getLocale(request)
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
