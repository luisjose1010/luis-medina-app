'use client'
import { DEFAULT_THEME, THEME_COOKIE, type Theme } from '@/lib/theme'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

/**
 * The active theme lives in a cookie so the server can pick the layout.
 * This mirrors it on the client and swaps it on demand.
 */
export function useTheme (): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME)
  const router = useRouter()

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')
  }, [])

  const toggleTheme = (): void => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'

    // Paint the new palette immediately, then let the server swap the layout.
    document.documentElement.dataset.theme = next
    setTheme(next)
    document.cookie = `${THEME_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`
    router.refresh()
  }

  return [theme, toggleTheme]
}
