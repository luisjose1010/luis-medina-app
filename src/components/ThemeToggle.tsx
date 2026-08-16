'use client'
import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'lm-theme'
export const DEFAULT_THEME: Theme = 'dark'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle ({ className = '' }: ThemeToggleProps) {
  // The real theme is set by the inline script in the layout before paint;
  // this only mirrors it so the icon matches on hydration.
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME)

  useEffect(() => {
    const current = document.documentElement.dataset.theme
    setTheme(current === 'light' ? 'light' : 'dark')
  }, [])

  const toggleTheme = (): void => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    setTheme(next)

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit
    }
  }

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      data-nav-prevent-blur
      onClick={toggleTheme}
      aria-label={isDark ? 'Activar tema claro' : 'Activar tema oscuro'}
      aria-pressed={isDark}
      title={isDark ? 'Tema claro' : 'Tema oscuro'}
      className={`${className} group relative inline-flex h-9 w-9 items-center justify-center rounded-full glass text-caribbean_current shadow-sm transition-all duration-300 ease-out hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-dark_cyan-600`}
    >
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`absolute h-4 w-4 transition-all duration-500 ${isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}
      >
        {/* Sun — shown while dark is active, since clicking goes to light */}
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`absolute h-4 w-4 transition-all duration-500 ${isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
      >
        {/* Moon */}
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    </button>
  )
}
