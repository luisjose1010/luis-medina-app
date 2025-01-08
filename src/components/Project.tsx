import { Button } from '@/components/Button'
import { Gallery } from '@/components/Gallery'

interface ProjectProps {
  project: Project
  className?: string
}

export function Project ({ project, className = '' }: ProjectProps) {
  return (
    <article className={`${className}`}>
      <Gallery images={
        Array.from({
          length: project.imagesCount
        },
        (_, i) => `/assets/projects/${project.slug}/${i + 1}.png`
        )
      } />
      <section className="p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium leading-relaxed text-caribbean_current-100">
            {project.name}
          </h2>
        </div>
        <p className="text-base font-normal leading-normal text-gray-700 opacity-75">
          {project.description}
        </p>
        {
          project.notes != null && (
            <p className="mt-2 text-sm font-normal leading-normal text-gray-700 opacity-75">
              ({project.notes})
            </p>
          )
        }
      </section>
      <section className="ml-5">
        <h3 className="text-base font-medium leading-relaxed text-caribbean_current-100">
          App:
        </h3>
        <div className="flex flex-wrap justify-start gap-2 lg:gap-4">
          {
            project.live != null && (
              <Button.LinkSolid href={typeof project.live === 'string' ? project.live : project.live?.app} dark={true} target="_blank" className="text-seasalt">
                En vivo
              </Button.LinkSolid>
            )
          }
          {
            project.source != null && (
              <Button.LinkOutline href={typeof project.source === 'string' ? project.source : project.source?.app} dark={true} target="_blank" className="text-caribbean_current hover:text-seasalt">
                GitHub
              </Button.LinkOutline>
            )
          }
        </div>
      </section>

      {
        (typeof project.live !== 'string' && typeof project.source !== 'string') &&
        (typeof project.live !== 'undefined' && typeof project.source !== 'undefined') && (
          <section className="mt-3 ml-5">
            <h3 className="text-base font-medium leading-relaxed text-caribbean_current-100">
              API:
            </h3>
            <div className="flex flex-wrap justify-start gap-2 lg:gap-4">
              {
                project.live != null && (
                  <Button.LinkSolid href={project.live.api} dark={true} target="_blank" className="text-seasalt">
                    En vivo
                  </Button.LinkSolid>
                )
              }
              {
                project.source != null && (
                  <Button.LinkOutline href={project.source.api} dark={true} target="_blank" className="text-caribbean_current hover:text-seasalt">
                    GitHub
                  </Button.LinkOutline>
                )
              }
            </div>
          </section>
        )
      }
      <section className='p-6'>
        Tags: {
          project.tags.map((tag, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{tag}</span>
          ))
        }
      </section>
    </article>
  )
}
