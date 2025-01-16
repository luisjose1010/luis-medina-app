'use client'
import { createContext } from 'react'

interface TranslateState {
  lang: string
  setLang?: (lang: string) => void
}

export const TranslateContext = createContext<TranslateState>({
  lang: 'en'
})

export function TranslateProvider ({ children, lang }: { children: React.ReactNode, lang: string }) {
  return (
    <TranslateContext.Provider value={{ lang }}>
      {children}
    </TranslateContext.Provider>
  )
}
