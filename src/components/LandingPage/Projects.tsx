'use client' // TODO: delete if possible
import { Button } from '@/components/Button'
import { useLinks } from '@/hooks/useLinks'
import { useProjects } from '@/hooks/useProjects'
import { useTranslation } from '@/hooks/useTranslation'
import Image from 'next/image'

interface ProjectProps {
  project: Project
  className?: string
}

function ProjectCard ({ project, className = '' }: ProjectProps) {
  const { UI } = useTranslation()
  const { links } = useLinks()
  const projectLink = project.links[0]

  return (
    <article className={`reveal group flex flex-col justify-between gap-4 bg-caribbean_current/75 backdrop-blur-md border border-seasalt/20 text-seasalt rounded-2xl shadow-md p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:bg-caribbean_current/90 hover:shadow-2xl hover:shadow-dark_purple/40 ${className}`}>
      <section className="relative -mx-2 -mt-2 mb-1 overflow-hidden rounded-xl border border-seasalt/10 bg-dark_purple/20">
        <Image
          src={`/assets/projects/${project.slug}/${project.cover ?? 1}.webp`}
          width={1680}
          height={1050}
          alt={project.name}
          className="aspect-[16/9] w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-caribbean_current/50 via-transparent to-transparent" />
      </section>

      <section>
        <h3 className="font-display text-2xl font-bold mb-2 tracking-tight">{project.name}</h3>
        <p className="text-sm line-clamp-2 text-seasalt/85">{project.description}</p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {
            project.tags.slice(0, 4).map((tag, index) => (
              <li key={index} className="rounded-full border border-seasalt/25 bg-seasalt/10 px-2 py-0.5 text-[11px] font-medium tracking-wide">
                {tag}
              </li>
            ))
          }
        </ul>
      </section>

      <section className="flex gap-3">
        <Button.LinkSolid href={`${links.projectsPage.url}/${project.slug}`} size="small" className="text-caribbean_current">
          {UI.BUTTON.EXPLORE}
        </Button.LinkSolid>
        {projectLink !== undefined && (
          <Button.LinkOutline
            size="small"
            href={projectLink.url}
            target="_blank"
            className="hover:text-caribbean_current"
          >
            {projectLink.label}
          </Button.LinkOutline>
        )}
      </section>
    </article>
  )
}

export function Projects () {
  const { APP, UI } = useTranslation()
  const { links } = useLinks()
  const { projects } = useProjects()

  return (
    <section id="projects" className="relative flex h-auto p-6 flex-col-reverse gap-2 text-seasalt justify-evenly items-center bg-forest bg-cover bg-center bg-fixed lg:p-12 xl:min-h-screen">
      {/* Scrim: keeps the copy readable over the forest photo */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-dark_purple/60 via-dark_purple/25 to-caribbean_current-200/50" />
      <article className="relative py-6 sm:w-full md:px-6 md:self-start lg:w-1/2">
        <h2 className="font-display text-5xl font-bold mb-3 tracking-tight">{APP.PROJECTS.TITLE}</h2>
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
      {/* Featured work — swipeable carousel on mobile, row on desktop */}
      <article className="relative mt-10 flex w-full gap-6 justify-center max-lg:justify-start max-lg:snap-x max-lg:snap-mandatory max-lg:overflow-x-auto max-lg:px-1 max-lg:pb-4 lg:gap-8">
        {
          projects.slice(0, 3).map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              className="w-[85vw] max-w-xs shrink-0 snap-center sm:w-72 lg:w-full"
            />
          ))
        }
      </article>
    </section>
  )
}
