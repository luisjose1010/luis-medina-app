import { inter } from '@/assets/styles/fonts'
import '@/assets/styles/globals.css'
import { ScrollToTop } from '@/components/ScrollToTop'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luis Medina App',
  description: 'Aplicación de tipo portafolio de Luis José Medina Sandoval'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
