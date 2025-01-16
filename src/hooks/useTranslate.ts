import { TranslateContext } from '@/contexts/translate'
import { getI18N } from '@/i18n'
import { useContext } from 'react'

export function useTranslate () {
  const { lang: currentLocale } = useContext(TranslateContext)
  const i18n = getI18N({ currentLocale })

  return {
    i18n,
    currentLocale
  }
}
