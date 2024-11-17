import Header from './Header'
import ProjectsSection from './Projects'
import SkillsSection from './Skills'
import CallToAction from './CallToAction'
import ExperienceSection from './Experience'

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <ProjectsSection />
      <ExperienceSection />
      <CallToAction />
      <SkillsSection />
    </>
  )
}

export default LandingPage
