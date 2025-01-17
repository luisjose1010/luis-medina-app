import english from '@/i18n/lang/en.json'
import spanish from '@/i18n/lang/es.json'

const LANG = {
  ENGLISH: 'en-US',
  SPANISH: 'es'
}

export const getTranslation = ({
  currentLocale = LANG.ENGLISH
}: {
  currentLocale: string | undefined
}) => {
  if (currentLocale === LANG.SPANISH) return { ...english, ...spanish }

  return english
}
