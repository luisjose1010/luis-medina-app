import Button from './Button'
import Gallery from './Gallery'

interface ProjectProps {
  project: Project,
  className?: string,
}

const Project: React.FC<ProjectProps> = ({ project, className = '' }) => {
  return (
    <article className={`${className}`}>
      <Gallery images={
        Array.from({
          length: project.imagesCount
        },
          (_, i) => `/assets/projects/${project.slug}/${i + 1}.png`,
        )
      } />
      <section className="p-6">
        <div className="flex items-center justify-between">
          <p className="text-base font-medium leading-relaxed text-blue-gray-900">
            {project.name}
          </p>
        </div>
        <p className="text-base font-normal leading-normal text-gray-700 opacity-75">
          {project.description}
        </p>
        {
          project.notes
          &&
          <p className="mt-2 text-sm font-normal leading-normal text-gray-700 opacity-75">
            ({project.notes})
          </p>
        }
      </section>
      <section className="flex flex-wrap justify-start gap-2 ml-5 lg:gap-4">
        {
          project.live
          &&
          <Button.LinkSolid href={typeof project.live === 'string' ? project.live : project.live?.app} dark={true} target="_blank" className="text-seasalt">
            En vivo
          </Button.LinkSolid>
        }
        {
          project.source
          &&
          <Button.LinkOutline href={typeof project.source === 'string' ? project.source : project.source?.app} dark={true} target="_blank" className="text-caribbean_current hover:text-seasalt">
            GitHub
          </Button.LinkOutline>
        }
      </section>
      <section className='p-6'>
        Tags: {project.tags.map((tag, index) => <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{tag}</span>)}
      </section>
    </article>
  )
}

export default Project
