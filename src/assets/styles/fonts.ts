import { Fraunces, Inter } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })

export const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  axes: ['SOFT', 'opsz']
})
