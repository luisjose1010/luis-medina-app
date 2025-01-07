import { CallToAction } from './CallToAction'
import { Experience } from './Experience'
import { Header } from './Header'
import { Projects } from './Projects'
import { Skills } from './Skills'

export function LandingPage () {
  return (
    <>
      <Header />
      <Projects />
      <Experience />
      <CallToAction />
      <Skills />
    </>
  )
}
