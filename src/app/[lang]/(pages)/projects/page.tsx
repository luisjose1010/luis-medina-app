'use client' // TODO: delete if possible
import { Projects } from '@/components/Projects'
import { useTranslation } from '@/hooks/useTranslation'

export default function ProjectsPage () {
  const { APP } = useTranslation()

  return (
    <>
      <h1 className="my-3 text-caribbean_current mx-12 text-4xl font-bold">{APP.PROJECTS.TITLE}</h1>
      <hr className="mx-12 h-px bg-caribbean_current/50 border-0 rounded-full lg:mt-2" />
      <article className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2 md:gap-8 md:p-12">
        <Projects />
      </article>
    </>
  )
}
