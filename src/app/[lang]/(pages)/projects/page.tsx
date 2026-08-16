'use client' // TODO: delete if possible
import { Projects } from '@/components/Projects'
import { useTranslation } from '@/hooks/useTranslation'

export default function ProjectsPage () {
  const { APP } = useTranslation()

  return (
    <main className="relative overflow-hidden">
      {/* Ambient atmosphere, consistent with the landing hero */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-dark_cyan-900/60 blur-3xl" />
        <div className="blob blob-slow absolute -right-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-desert_sand-800/50 blur-3xl" />
      </div>

      <header className="mx-6 md:mx-12">
        <h1 className="font-display my-3 text-4xl font-bold tracking-tight text-flow bg-gradient-to-r from-caribbean_current-300 via-dark_cyan-500 to-caribbean_current-600 bg-clip-text text-transparent lg:text-5xl">
          {APP.PROJECTS.TITLE}
        </h1>
        <p className="max-w-3xl text-ink/60">{APP.PROJECTS.DESCRIPTION}</p>
        <hr className="mt-4 h-px bg-caribbean_current/40 border-0 rounded-full" />
      </header>

      <article className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 md:p-12 xl:grid-cols-3">
        <Projects />
      </article>
    </main>
  )
}
