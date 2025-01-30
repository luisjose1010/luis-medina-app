import { useTranslation } from '@/hooks/useTranslation'
import { projects } from '@/lib/consts'

export function useProjects () {
  const { DATA } = useTranslation()

  type ProjectKey = keyof typeof DATA.PROJECTS

  const mappedProjects = projects.map(project => {
    if (!DATA.PROJECTS[project.name as ProjectKey]?.NOTES != null) {
      return {
        ...project,
        name: DATA.PROJECTS[project.name as ProjectKey].TITLE,
        description: DATA.PROJECTS[project.name as ProjectKey].DESCRIPTION,
        notes: DATA.PROJECTS[project.name as ProjectKey].NOTES
      }
    }

    return {
      ...project,
      name: DATA.PROJECTS[project.name as ProjectKey].TITLE,
      description: DATA.PROJECTS[project.name as ProjectKey].DESCRIPTION
    }
  })

  console.log(mappedProjects)

  return {
    projects: mappedProjects
  }
}
