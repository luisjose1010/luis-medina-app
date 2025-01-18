'use client' // TODO: delete if possible
import { Project } from '@/components/Project'
import { useProjects } from '@/hooks/useProjects'
import { notFound } from 'next/navigation'

export default function ProjectPage ({ params }: { params: { slug: string } }) {
  const { projects } = useProjects()
  const projectIndex = projects.findIndex((project) => project.slug === params.slug)

  if (projectIndex > -1) {
    return (
      <>
        <h1 className="my-3 text-caribbean_current mx-12 text-4xl font-bold">Proyectos</h1>
        <hr className="mx-12 h-px bg-caribbean_current/50 border-0 rounded-full lg:mt-2" />
        <Project project={projects[projectIndex]} className="p-12" />
      </>
    )
  } else {
    return notFound()
  }
}
