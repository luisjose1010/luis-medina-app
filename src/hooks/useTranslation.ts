import { TranslationContext } from '@/contexts/translation'
import { getTranslation } from '@/i18n'
import { useContext } from 'react'

export function useTranslation () {
  const { lang, setLang } = useContext(TranslationContext)
  const t = getTranslation({ currentLocale: lang })

  const changeLanguage = (lang: string) => {
    if (setLang == null) return
    setLang(lang)
  }

  return {
    t,
    i18n: {
      language: lang,
      changeLanguage
    }
  }
}
