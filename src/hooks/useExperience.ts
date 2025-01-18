import { useTranslation } from '@/hooks/useTranslation'
import { experience } from '@/lib/consts'

export function useExperience () {
  const { DATA } = useTranslation()

  type ExperienceKey = keyof typeof DATA.EXPERIENCE

  const mappedExperience = experience.map(experience => ({
    ...experience,
    name: DATA.EXPERIENCE[experience.name as ExperienceKey].TITLE,
    description: DATA.EXPERIENCE[experience.name as ExperienceKey].DESCRIPTION
  }))

  return {
    experience: mappedExperience
  }
}
