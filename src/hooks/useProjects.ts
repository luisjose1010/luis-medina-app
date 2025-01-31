import { useTranslation } from '@/hooks/useTranslation'
import { projects } from '@/lib/consts'

interface ProjectTranslation {
  TITLE: string
  DESCRIPTION: string
  NOTE?: string
}

type ProjectsTranslation = Record<string, ProjectTranslation>

export function useProjects () {
  const { DATA } = useTranslation()
  const projectsTranslation = DATA.PROJECTS as ProjectsTranslation

  const mappedProjects = projects.map((project) => {
    const translation = projectsTranslation[project.name]

    return {
      ...project,
      name: translation.TITLE,
      description: translation.DESCRIPTION,
      ...(translation?.NOTE != null && { note: translation.NOTE })
    }
  })

  return {
    projects: mappedProjects
  }
}
