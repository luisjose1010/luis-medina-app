export type Theme = 'light' | 'dark'

export const THEME_COOKIE = 'lm-theme'
export const DEFAULT_THEME: Theme = 'dark'

/** Anything unrecognised (or missing) falls back to the default theme. */
export function resolveTheme (value: string | undefined | null): Theme {
  return value === 'light' || value === 'dark' ? value : DEFAULT_THEME
}
