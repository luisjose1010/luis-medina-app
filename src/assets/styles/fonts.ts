import { Fraunces, Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  axes: ['SOFT', 'opsz']
})

// Used only by the dark layout ported from the standalone portfolio
export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-grotesk'
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains'
})
