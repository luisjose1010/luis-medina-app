import { projects } from '@/lib/consts'
import Image from 'next/image'
import { Button } from './Button'

export function ProjectCard ({ name, description, source, live, slug, notes }: Project) {
  return (
    <article className="relative flex flex-col justify-between p-4 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
      <section className="relative mx-4 mt-4 overflow-hidden text-gray-700  bg-white bg-clip-border rounded-xl">
        <Image
          src={`/assets/projects/${slug}/1.png`}
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
          notes != null && (
            <p className="mt-1 text-xs leading-normal text-gray-700 opacity-75">
              ({notes})
            </p>
          )
        }
      </section>
      <section className="flex flex-wrap justify-start gap-2 ml-5 lg:gap-4">
        <Button.LinkSolid href={`proyectos/${slug}`} dark={true} className="text-seasalt">
          Explorar
        </Button.LinkSolid>
        {/* If not live and source not undefined, then source */}
        {
          live != null
            ? (
              <Button.LinkOutline href={typeof live === 'string' ? live : live?.app} dark={true} target="_blank" className="text-caribbean_current hover:text-seasalt">
                En vivo
              </Button.LinkOutline>
              )
            : source != null && (
              <Button.LinkOutline href={typeof source === 'string' ? source : source?.app} dark={true} target="_blank" className="text-caribbean_current hover:text-seasalt">
                GitHub
              </Button.LinkOutline>
            )
        }
      </section>
    </article>
  )
}

export function Projects () {
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
