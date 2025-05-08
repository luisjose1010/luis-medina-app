import { useTranslation } from '@/hooks/useTranslation'
import { projects } from '@/lib/consts'

interface ProjectTranslation {
  TITLE: string
  DESCRIPTION: string
  NOTE?: string
}

type ProjectsTranslation = Record<string, ProjectTranslation>

export function useProjects () {
  const { DATA, UI } = useTranslation()
  const projectsTranslation = DATA.PROJECTS as ProjectsTranslation
  const buttonLabels = UI.BUTTON

  const mappedProjects = projects.map((project) => {
    const translation = projectsTranslation[project.name]

    const translatedLinks: ProjectLink[] = project.links.map(link => ({
      ...link,
      label: buttonLabels[link.label as keyof typeof buttonLabels] ?? link.label
    }))

    return {
      ...project,
      name: translation.TITLE,
      description: translation.DESCRIPTION,
      ...(translation?.NOTE != null && { note: translation.NOTE }),
      links: translatedLinks
    }
  })

  return {
    projects: mappedProjects
  }
}
