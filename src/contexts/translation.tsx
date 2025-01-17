'use client'
import { createContext, useState } from 'react'

interface TranslationState {
  lang: string
  setLang?: (lang: string) => void
}

export const TranslationContext = createContext<TranslationState>({
  lang: 'en-US'
})

export function TranslationProvider ({ children, lang }: { children: React.ReactNode, lang: string }) {
  const [langState, setLangState] = useState(lang)

  return (
    <TranslationContext.Provider value={{ lang: langState, setLang: setLangState }}>
      {children}
    </TranslationContext.Provider>
  )
}
