'use client'
import { Footer } from '@/components/Footer'
import { NavBar } from '@/components/NavBar'
import { useLinks } from '@/hooks/useLinks'

export default function ProjectsLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const { links } = useLinks()

  const navLinks = [
    links.home,
    links.projectsPage,
    links.experience,
    links.skills,
    links.cv,
    links.contact
  ]

  return (
    <>
      <NavBar links={navLinks} />
      {children}
      <Footer links={navLinks} />
    </>
  )
}
