'use client' // TODO: delete if possible
import { Button } from '@/components/Button'
import { useLinks } from '@/hooks/useLinks'
import { useProjects } from '@/hooks/useProjects'
import { useTranslation } from '@/hooks/useTranslation'

interface ProjectProps {
  project: Project
  className?: string
}

function ProjectCard ({ project, className = '' }: ProjectProps) {
  const { UI } = useTranslation()
  const { links } = useLinks()

  return (
    <article className={`flex flex-col justify-between gap-4 bg-caribbean_current text-seasalt rounded-2xl shadow-md p-6 transition ${className}`}>
      <section>
        <h3 className="text-3xl font-bold mb-2">{project.name}</h3>
        <p className="text-base line-clamp-3">{project.description}</p>
      </section>

      <section className="flex gap-3">
        <Button.LinkSolid href={`${links.projectsPage.url}/${project.slug}`} size="small" className="text-caribbean_current">
          {UI.BUTTON.EXPLORE}
        </Button.LinkSolid>
        {
          project.source != null && (
            <Button.LinkOutline size="small" href={typeof project.source === 'string' ? project.source : project.source?.app} target="_blank" className="hover:text-caribbean_current">
              {UI.BUTTON.GITHUB}
            </Button.LinkOutline>
          )
        }
      </section>
    </article>
  )
}

export function Projects () {
  const { APP, UI } = useTranslation()
  const { links } = useLinks()
  const { projects } = useProjects()

  return (
    <section id="projects" className="flex h-auto p-6 flex-col-reverse gap-2 text-seasalt justify-evenly items-center bg-forest bg-cover lg:p-12 xl:h-screen">
      <article className="p-6 sm:w-full lg:self-start lg:w-1/2">
        <h2 className="text-5xl font-bold mb-3">{APP.PROJECTS.TITLE}</h2>
        <p className="mb-5">
          {APP.PROJECTS.DESCRIPTION}
        </p>
        <section className="flex items-center gap-8 justify-start">
          <Button.LinkSolid href={links.projectsPage.url} size="large" className="text-black">
            {UI.BUTTON.EXPLORE}
          </Button.LinkSolid>
          <Button.LinkOutline href="https://github.com/luisjose1010?tab=repositories" target="_blank" size="large" className="hover:text-black">
            {UI.BUTTON.GITHUB}
          </Button.LinkOutline>
        </section>
      </article>
      <article className="flex gap-12 justify-center mt-10 max-lg:hidden">
        {
          projects.slice(0, 3).map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              className="w-full max-w-xs"
            />
          ))
        }
      </article>
    </section>
  )
}
