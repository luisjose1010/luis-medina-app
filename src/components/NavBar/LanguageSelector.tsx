import { ChevronIcon } from '@/assets/Icons'
import { useLanguage } from '@/hooks/useTranslation'

import { languages } from '@/lib/consts'

export function LanguageSelector ({ className = '' }) {
  const [language, setLanguage] = useLanguage()
  const currentLanguage = Object.values(languages).find((lang) => lang.code === language)

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang)
  }

  return (
    <div className={`${className} group text-white rounded-md text-xs font-semibold bg-black/30 hover:bg-black/70 transition-all`}>
      <button type="button" data-nav-prevent-blur className="inline-flex justify-start items-center w-full gap-x-2 px-3 py-2" aria-expanded="true" aria-haspopup="true">
        {
          currentLanguage != null && (
            <>
              <currentLanguage.Flag className="w-4 h-auto" />
              {currentLanguage.name ?? 'English'}
            </>
          )
        }
        <ChevronIcon className="-mr-1 h-5 w-5 text-white group-hover:rotate-180 transition-all duration-200" />
      </button>
      <ul className="group-hover:block duration-200 transition-all hidden pt-0.5 absolute w-full">
        {
          Object.values(languages).map((lang) => (
            lang.code !== language && (
              <li key={lang.name} className="py-[2px]">
                <button type="button" data-nav-prevent-blur onClick={() => { handleLanguageChange(lang.code) }} className="rounded-md bg-black/30 hover:bg-black/70 whitespace-no-wrap inline-flex justify-start items-center w-full gap-x-2 px-3 py-2">
                  {<lang.Flag className="w-4 h-auto" />}
                  {lang.name}
                </button>
              </li>
            )
          ))
        }
      </ul>
    </div>
  )
}
