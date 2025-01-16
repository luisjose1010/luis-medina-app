'use client'
import { Footer } from '@/components/Footer'
import { NavBar } from '@/components/NavBar'
import { links } from '@/lib/consts'

const navLinks = [
  links.home,
  links.projectsPage,
  links.experience,
  links.skills,
  links.contact
]

export default function ProjectsLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <NavBar links={navLinks} />
      {children}
      <Footer links={navLinks} />
    </>
  )
}
