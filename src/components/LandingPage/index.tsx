import { CallToAction } from './CallToAction'
import { Experience } from './Experience'
import { Header } from './Header'
import { Projects } from './Projects'
import { Skills } from './Skills'
import { Stats } from './Stats'

export function LandingPage () {
  return (
    <>
      <Header />
      <Stats />
      <Projects />
      <Experience />
      <CallToAction />
      <Skills />
    </>
  )
}
