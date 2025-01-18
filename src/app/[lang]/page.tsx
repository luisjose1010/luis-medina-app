'use client' // TODO: delete if possible
import { Footer } from '@/components/Footer'
import { LandingPage } from '@/components/LandingPage'
import { useLinks } from '@/hooks/useLinks'

export default function Home () {
  const { links } = useLinks()

  const navLinks = [
    links.home,
    links.projects,
    links.experience,
    links.skills,
    links.contact
  ]

  return (
    <>
      <LandingPage />
      <Footer links={navLinks} />
    </>
  )
}
