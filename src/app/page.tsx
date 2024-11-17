import LandingPage from '@/components/LandingPage'
import Footer from '@/components/Footer'
import { links } from '@/lib/consts'

export default function Home (): React.ReactNode {
  return (
    <>
      <LandingPage />
      <Footer links={[
        links.home,
        links.projects,
        links.experience,
        links.skills,
        links.contact
      ]} />
    </>
  )
}
