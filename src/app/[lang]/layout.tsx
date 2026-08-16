import { fraunces, inter } from '@/assets/styles/fonts'
import '@/assets/styles/globals.css'
import { ScrollToTop } from '@/components/ScrollToTop'
import { TranslationProvider } from '@/contexts/translation'
import type { Metadata } from 'next'

const SITE_URL = 'https://luis-medina-app.vercel.app'
const DESCRIPTION = 'Portafolio de Luis José Medina Sandoval — ingeniero en informática y desarrollador full-stack (TypeScript, React, Next.js, Node.js).'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Luis Medina | Full-Stack Developer',
    template: '%s | Luis Medina'
  },
  description: DESCRIPTION,
  keywords: ['Luis Medina', 'Full-Stack Developer', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Portafolio'],
  authors: [{ name: 'Luis José Medina Sandoval', url: SITE_URL }],
  creator: 'Luis José Medina Sandoval',
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Luis Medina App',
    title: 'Luis Medina | Full-Stack Developer',
    description: DESCRIPTION
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luis Medina | Full-Stack Developer',
    description: DESCRIPTION
  },
  robots: { index: true, follow: true }
}

export default function RootLayout ({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: { lang: string }
}>) {
  const { lang } = params

  return (
    <html lang={lang}>
      <body className={`${inter.className} ${fraunces.variable} antialiased`}>
        {/* Scroll progress — CSS scroll-driven, no JS */}
        <div aria-hidden className="fixed inset-x-0 top-0 z-50 h-1">
          <div className="scroll-progress h-full bg-gradient-to-r from-caribbean_current via-dark_cyan-600 to-desert_sand" />
        </div>
        <TranslationProvider lang={lang}>
          {children}
        </TranslationProvider>
        <ScrollToTop />
      </body>
    </html>
  )
}
