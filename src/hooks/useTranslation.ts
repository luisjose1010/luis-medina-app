import { TranslationContext } from '@/contexts/translation'
import { getTranslation } from '@/i18n'
import { useContext } from 'react'

export function useTranslation () {
  const { lang } = useContext(TranslationContext)
  const t = getTranslation({ currentLocale: lang })

  return t
}

export function useLanguage () {
  const { lang, setLang } = useContext(TranslationContext)

  const changeLanguage = (lang: string) => {
    if (setLang == null) return
    setLang(lang)
  }

  return [lang, changeLanguage]
}
