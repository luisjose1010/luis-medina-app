'use client'
import { links } from '@/lib/consts'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const navLinks = [
  links.home,
  links.projectsPage,
  links.experience,
  links.skills,
  links.contact
]

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): React.ReactNode {
  return (
    <>
      <NavBar links={navLinks} />
      {children}
      <Footer links={navLinks} />
    </>
  )
}
