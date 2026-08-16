'use client'
import { Footer } from '@/components/Footer'
import { LandingPage } from '@/components/LandingPage'
import { useLinks } from '@/hooks/useLinks'

/** Luis's original layout (the Figma one). Rendered when the light theme is active. */
export function LightLanding () {
  const { links } = useLinks()

  const navLinks = [
    links.home,
    links.projects,
    links.experience,
    links.skills,
    links.cv,
    links.contact
  ]

  return (
    <>
      <LandingPage />
      <Footer links={navLinks} />
    </>
  )
}
