'use client' // TODO: delete if possible
import { Gallery } from '@/components/Gallery'
import { useTranslation } from '@/hooks/useTranslation'
import { LinkSection } from '@/components/LinkSection'

interface ProjectProps {
  project: Project
  className?: string
}

export function Project ({ project, className = '' }: ProjectProps) {
  const { APP } = useTranslation()

  const appLinks = project.links.filter(link => link.type === 'app')
  const apiLinks = project.links.filter(link => link.type === 'api')
  const fullstackLinks = project.links.filter(link => link.type === 'fullstack')
  const presentationLinks = project.links.filter(link => link.type === 'presentation')
  const otherLinks = project.links.filter(link => link.type === 'other')

  return (
    <article className={`${className}`}>
      <Gallery images={
        Array.from({
          length: project.imagesCount
        },
        (_, i) => `/assets/projects/${project.slug}/${i + 1}.webp`
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
          project.note != null && (
            <p className="mt-2 text-sm font-normal leading-normal text-gray-600">
              <strong className="font-bold opacity-90">{project.note}</strong>
            </p>
          )
        }
      </section>

      {/* App Links Section */}
      <LinkSection title={APP.PROJECT.APP_LINKS} links={appLinks} className="ml-5" />

      {/* API Links Section */}
      <LinkSection title={APP.PROJECT.API_LINKS} links={apiLinks} className="ml-5" />

      {/* Monorepo Links Section */}
      <LinkSection title={APP.PROJECT.FULLSTACK_LINKS} links={fullstackLinks} className="ml-5" />

      {/* Presentation Links Section */}
      <LinkSection title={APP.PROJECT.PRESENTATION_LINKS} links={presentationLinks} className="ml-5" />

      {/* Other Links Section */}
      <LinkSection title={APP.PROJECT.OTHERS_LINKS} links={otherLinks} className="ml-5" />

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
