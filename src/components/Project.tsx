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
      <Gallery altBase={project.name} images={
        Array.from({
          length: project.imagesCount
        },
        (_, i) => `/assets/projects/${project.slug}/${i + 1}.webp`
        )
      } />
      <section className="mx-auto mt-8 max-w-3xl rounded-2xl glass p-6 shadow-lg shadow-caribbean_current/5">
        <h2 className="font-display text-2xl font-bold tracking-tight text-caribbean_current">
          {project.name}
        </h2>
        <p className="mt-2 text-base leading-relaxed text-ink/70">
          {project.description}
        </p>
        {
          project.note != null && (
            <p className="mt-4 border-l-2 border-desert_sand pl-3 text-sm leading-relaxed text-ink/60">
              <strong className="font-semibold">{project.note}</strong>
            </p>
          )
        }
      </section>

      {/* Presentation Links Section */}
      <LinkSection title={APP.PROJECT.PRESENTATION_LINKS} links={presentationLinks} className="mx-auto mt-4 max-w-3xl px-6" />

      {/* App Links Section */}
      <LinkSection title={APP.PROJECT.APP_LINKS} links={appLinks} className="mx-auto mt-4 max-w-3xl px-6" />

      {/* API Links Section */}
      <LinkSection title={APP.PROJECT.API_LINKS} links={apiLinks} className="mx-auto mt-4 max-w-3xl px-6" />

      {/* Monorepo Links Section */}
      <LinkSection title={APP.PROJECT.FULLSTACK_LINKS} links={fullstackLinks} className="mx-auto mt-4 max-w-3xl px-6" />

      {/* Other Links Section */}
      <LinkSection title={APP.PROJECT.OTHERS_LINKS} links={otherLinks} className="mx-auto mt-4 max-w-3xl px-6" />

      <section className='mx-auto max-w-3xl p-6'>
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-caribbean_current">{APP.SKILLS.SKILLS_TITLE}</p>
        <div aria-label={APP.SKILLS.SKILLS_TITLE} className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full border border-caribbean_current/20 bg-caribbean_current/5 px-3 py-1 text-sm font-semibold text-caribbean_current transition-colors duration-300 hover:bg-brand hover:text-seasalt"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </article>
  )
}
