import { useTranslation } from '@/hooks/useTranslation'
import { links } from '@/lib/consts'

export function useLinks () {
  const { DATA } = useTranslation()

  type LinkKey = keyof typeof DATA.LINKS

  const mappedLinks = { ...links }

  Object.keys(links).forEach((key) => {
    mappedLinks[key] = {
      ...mappedLinks[key],
      // The 'name' property is not a unique key, using 'url'
      name: DATA.LINKS[links[key].url as LinkKey].TITLE
    }
  })

  return {
    links: mappedLinks
  }
}
