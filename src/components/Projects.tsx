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
    <article className="relative flex flex-col justify-between p-4 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
      <section className="relative mx-4 mt-4 overflow-hidden text-gray-700  bg-white bg-clip-border rounded-xl">
        <Image
          src={`/assets/projects/${slug}/1.webp`}
          width={1680}
          height={1050}
          alt={name}
        />
      </section>
      <section className="p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900">
            {name}
          </p>
        </div>
        <p className=" line-clamp-2 text-sm font-normal leading-normal text-gray-700 opacity-75">
          {description}
        </p>
        {
          note != null && (
            <p className="mt-2 text-xs text-gray-600">
              <strong className="font-bold opacity-90">{note}</strong>
            </p>
          )
        }
      </section>
      <section className="flex flex-wrap justify-start gap-2 ml-5 lg:gap-4">
        <Button.LinkSolid href={`${links.projectsPage.url}/${slug}`} dark={true} className="text-seasalt">
          {UI.BUTTON.EXPLORE}
        </Button.LinkSolid>
        <Button.LinkOutline
          href={projectLink.url}
          dark={true}
          target="_blank"
          className="text-caribbean_current hover:text-seasalt"
        >
          {projectLink.label}
        </Button.LinkOutline>
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
