import { Footer } from '@/components/Footer'
import { LandingPage } from '@/components/LandingPage'
import { links } from '@/lib/consts'

const navLinks = [
  links.home,
  links.projects,
  links.experience,
  links.skills,
  links.contact
]

export default function Home () {
  return (
    <>
      <LandingPage />
      <Footer links={navLinks} />
    </>
  )
}
