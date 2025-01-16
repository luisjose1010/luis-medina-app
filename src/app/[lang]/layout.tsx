import { inter } from '@/assets/styles/fonts'
import '@/assets/styles/globals.css'
import { ScrollToTop } from '@/components/ScrollToTop'
import { TranslateProvider } from '@/contexts/translate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luis Medina App',
  description: 'Aplicación de tipo portafolio de Luis José Medina Sandoval'
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
      <body className={`${inter.className} antialiased`}>
        <TranslateProvider lang={lang}>
          {children}
        </TranslateProvider>
        <ScrollToTop />
      </body>
    </html>
  )
}
