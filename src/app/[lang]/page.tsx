import { DarkPortfolio } from '@/components/DarkPortfolio'
import { LightLanding } from '@/components/LightLanding'
import { THEME_COOKIE, resolveTheme } from '@/lib/theme'
import { cookies } from 'next/headers'

/**
 * The theme picks the whole layout, not just the palette:
 *   dark  → the ported standalone portfolio (structure by Diego)
 *   light → Luis's original Figma layout
 * Resolved from a cookie on the server so the right one is sent already
 * rendered — no flash, and only one layout ever ships in the DOM.
 */
export default function Home () {
  const theme = resolveTheme(cookies().get(THEME_COOKIE)?.value)

  return theme === 'dark' ? <DarkPortfolio /> : <LightLanding />
}
