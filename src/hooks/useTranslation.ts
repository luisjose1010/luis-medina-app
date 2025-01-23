import { TranslationContext } from '@/contexts/translation'
import { getTranslation } from '@/i18n'
import { setLanguageCookie } from '@/i18n/actions'
import { useContext } from 'react'

export function useTranslation () {
  const { lang } = useContext(TranslationContext)
  const t = getTranslation({ currentLocale: lang })

  return t
}

export function useLanguage (): [string, (lang: string) => void] {
  const { lang, setLang } = useContext(TranslationContext)

  const changeLanguage = (newLang: string) => {
    if (setLang == null) return

    const pathname = window.location.pathname
    const newPathname = pathname.replace(`/${lang}`, `/${newLang}`)

    setLang(newLang)

    window.history.replaceState(
      null,
      lang,
      newPathname
    )

    // Sync setting between server cookie and client context with new language
    setLanguageCookie(newLang)
      .then(() => { setLang(newLang) })
      .catch((error) => { console.error('Error setting language: ', error) })
  }

  return [lang, changeLanguage]
}
