import { useTranslation } from '@/hooks/useTranslation'
import { links } from '@/lib/consts'

export function useLinks () {
  const { DATA } = useTranslation()

  type DataLinksKey = keyof typeof DATA.LINKS
  type LinksKey = keyof typeof links

  const mappedLinks = { ...links }

  Object.keys(links).forEach((key) => {
    mappedLinks[key as LinksKey] = {
      ...mappedLinks[key as LinksKey],
      // The 'name' property is not a unique key, using 'url'
      name: DATA.LINKS[links[key as LinksKey].url as DataLinksKey].TITLE
    }
  })

  return {
    links: mappedLinks
  }
}
