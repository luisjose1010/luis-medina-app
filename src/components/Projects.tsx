'use client' // TODO: delete if possible
import { Button } from '@/components/Button'
import { useLinks } from '@/hooks/useLinks'
import { useProjects } from '@/hooks/useProjects'
import { useTranslation } from '@/hooks/useTranslation'
import Image from 'next/image'

export function ProjectCard ({ name, description, links: projectLinks, slug, note }: Project) {
  const { UI } = useTranslation()
  const { links } = useLinks()
  const projectLink = projectLinks[0]

  return (
    <article className="relative flex flex-col justify-between p-4 text-gray-700 bg-white/70 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-1 bg-clip-border rounded-xl border border-white/20">
      <section className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-gray-200 bg-clip-border rounded-xl group">
        <Image
          src={`/assets/projects/${slug}/1.webp`}
          width={1680}
          height={1050}
          alt={name}
          className="object-contain aspect-[16/10] transition-transform duration-500 group-hover:scale-105"
        />
      </section>
      <section className="p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="block font-sans text-lg font-bold leading-relaxed text-blue-gray-900 tracking-tight">
            {name}
          </p>
        </div>
        <p className="line-clamp-3 text-sm font-normal leading-relaxed text-gray-700 opacity-80">
          {description}
        </p>
        {
          note != null && (
            <p className="mt-3 text-xs text-gray-600 border-l-2 border-caribbean_current pl-2">
              <strong className="font-semibold opacity-90">{note}</strong>
            </p>
          )
        }
      </section>
      <section className="flex flex-wrap justify-start gap-2 ml-5 mb-2 lg:gap-4">
        <Button.LinkSolid href={`${links.projectsPage.url}/${slug}`} dark={true} className="text-seasalt shadow-md hover:shadow-lg transition-all duration-300">
          {UI.BUTTON.EXPLORE}
        </Button.LinkSolid>
        {projectLink !== undefined && (
          <Button.LinkOutline
            href={projectLink.url}
            dark={true}
            target="_blank"
            className="text-caribbean_current hover:bg-caribbean_current hover:text-seasalt transition-colors duration-300"
          >
            {projectLink.label}
          </Button.LinkOutline>
        )}
      </section>
    </article>
  )
}

export function Projects () {
  const { projects } = useProjects()

  return (
    <>
      {
        projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))
      }
    </>
  )
}
