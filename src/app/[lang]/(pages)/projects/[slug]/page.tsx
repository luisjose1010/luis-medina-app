'use client' // TODO: delete if possible
import { Project } from '@/components/Project'
import { useLinks } from '@/hooks/useLinks'
import { useProjects } from '@/hooks/useProjects'
import { useTranslation } from '@/hooks/useTranslation'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default function ProjectPage ({ params }: { params: { slug: string } }) {
  const { APP } = useTranslation()
  const { links } = useLinks()
  const { projects } = useProjects()
  const projectIndex = projects.findIndex((project) => project.slug === params.slug)

  if (projectIndex > -1) {
    const project = projects[projectIndex]

    return (
      <main className="relative overflow-hidden">
        {/* Ambient atmosphere, consistent with the landing hero */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="blob absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-dark_cyan-900/60 blur-3xl" />
          <div className="blob blob-slow absolute -right-40 bottom-1/4 h-[26rem] w-[26rem] rounded-full bg-desert_sand-800/50 blur-3xl" />
        </div>

        <header className="mx-6 md:mx-12">
          <Link
            href={links.projectsPage.url}
            className="inline-flex items-center gap-1 text-sm font-semibold text-caribbean_current/70 transition-colors hover:text-caribbean_current"
          >
            ← {APP.PROJECTS.TITLE}
          </Link>
          <h1 className="font-display my-2 text-4xl font-bold tracking-tight text-flow bg-gradient-to-r from-caribbean_current-300 via-dark_cyan-500 to-caribbean_current-600 bg-clip-text text-transparent lg:text-5xl">
            {project.name}
          </h1>
          <hr className="mt-3 h-px bg-caribbean_current/40 border-0 rounded-full" />
        </header>

        <Project project={project} className="p-6 md:p-12" />
      </main>
    )
  } else {
    return notFound()
  }
}
