'use client'
import PersonalImage from '@/assets/luis-medina.webp'
import { Button } from '@/components/Button'
import { NavBar } from '@/components/NavBar'
import { useLinks } from '@/hooks/useLinks'
import { useTranslation } from '@/hooks/useTranslation'
import Image from 'next/image'
import { useEffect, useState, type SyntheticEvent } from 'react'

interface PresentationProps {
  title?: string
  text: string
  children?: React.ReactNode
}

const Presentation = ({ title = 'Luis José Medina Sandoval', text, children }: PresentationProps) => (
    <>
      <h1 className="text-4xl font-bold mb-4 bg-white">{title}</h1>
      <span className="text-dark_purple/60">{text}</span>
      <div className="flex flex-wrap gap-1 mt-3 ml-1 mb-1 lg:gap-3 z-10">
        {children}
      </div>
    </>
)

export function Header () {
  const { APP, UI } = useTranslation()
  const { links } = useLinks()
  const [step, setStep] = useState(0)
  const [animation, setAnimation] = useState('')

  const navLinks = [
    links.home,
    links.projects,
    links.experience,
    links.skills,
    links.contact
  ]

  const presentations = [
    (
      <Presentation
        key={0}
        title={APP.PRESENTATIONS.TITLE}
        text={APP.PRESENTATIONS.DESCRIPTION}
      >
        <Button.Solid dark={true} size="small" onClick={() => window.open(links.contact.url, '_self')} className="mb-1 text-seasalt">
          {UI.BUTTON.CONTACT_ME}
        </Button.Solid>
        <Button.Outline dark={true} size="small" onClick={() => window.open('/assets/luis-medina-cv.pdf', '_blank')} className="mb-1 hover:text-seasalt">
          {UI.BUTTON.DOWNLOAD_CV}
        </Button.Outline>
      </Presentation>
    ),
    (
      <Presentation
        key={1}
        title={APP.PRESENTATIONS.GITHUB_TITLE}
        text={APP.PRESENTATIONS.GITHUB_DESCRIPTION}
      >
        <Button.Outline dark={true} size="small" onClick={() => window.open('https://github.com/luisjose1010', '_blank')} className="hover:text-seasalt">
          {UI.BUTTON.GITHUB}
        </Button.Outline>
      </Presentation>
    ),
    (
      <Presentation
        key={2}
        title={APP.PRESENTATIONS.LINKEDIN_TITLE}
        text={APP.PRESENTATIONS.LINKEDIN_DESCRIPTION}
      >
        <Button.Outline dark={true} size="small" onClick={() => window.open('https://www.linkedin.com/in/luis-jose-medina-sandoval-444262195/', '_blank')} className="hover:text-seasalt">
          {UI.BUTTON.LINKEDIN}
        </Button.Outline>
      </Presentation>
    ),
    (
      <Presentation
        key={3}
        title={APP.PRESENTATIONS.CV_TITLE}
        text={APP.PRESENTATIONS.CV_DESCRIPTION}
      >
        <Button.Outline dark={true} size="small" onClick={() => window.open('/assets/luis-medina-cv.pdf', '_blank')} className="hover:text-seasalt">
          {UI.BUTTON.DOWNLOAD_CV}
        </Button.Outline>
      </Presentation>
    ),
    (
      <Presentation
        key={4}
        title={APP.PRESENTATIONS.PROJECTS_TITLE}
        text={APP.PRESENTATIONS.PROJECTS_DESCRIPTION}
      >
        <Button.Outline dark={true} size="small" onClick={() => window.open(links.projectsPage.url, '_self')} className="hover:text-seasalt">
          {UI.BUTTON.PROJECTS}
        </Button.Outline>
      </Presentation>
    )
  ]

  const handleNextStep = (event?: SyntheticEvent<HTMLElement>): void => {
    event?.preventDefault()
    event?.stopPropagation()

    if (step < presentations.length - 1) {
      setAnimation('slide-off-top')
    } else {
      setAnimation('fade-in')
      setStep(0)
    }
  }

  const handleEndAnimation = (): void => {
    if (animation === 'slide-off-top' && step < presentations.length) {
      setStep(prevState => prevState + 1)
      setAnimation('slide-in-bottom')
    } else if (step >= presentations.length) {
      setAnimation('fade-in')
      setStep(0)
    } else {
      setAnimation('')
    }
  }

  // Activate the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextStep()
    }, 5000)
    return () => { clearInterval(interval) }
  })

  return (
    <header id="header" className="flex h-auto lg:p-12 lg:pb-0 lg:max-2xl:h-screen">
      {/* Side decoration */}
      <div onClick={handleNextStep} className="flex relative flex-col justify-center cursor-pointer marker:text-xl text-desert_sand  before:block before:absolute before:-top-[50%] before:bottom-[65%] before:border-l-[3px] before:border-caribbean_current before:rounded-2xl after:block after:absolute after:top-[65%] after:-bottom-20 after:border-l-[3px] after:border-caribbean_current after:rounded-2xl after:overflow-hidden after:-z-10 max-lg:left-10">
        {
          presentations.map((_presentation, index) => (
            <a href="#" key={index} className={`-my-2 transition-colors delay-200 ${step === index ? 'text-caribbean_current' : ''}`}>
              <li></li>
            </a>
          ))
        }
      </div>
      <article className="w-full">
        <NavBar links={navLinks} className="ml-4" />

        <main id="main" className="flex px-12 ml-4 mt-4 overflow-hidden text-caribbean_current gap-5 cursor-pointer lg:gap-12 xl:gap-60 max-lg:flex-wrap" onClick={handleNextStep}>
          <div className="overflow-hidden lg:max-w-md xl:max-w-lg 2xl:max-w-3xl">
            <div onAnimationEnd={handleEndAnimation} className={`${animation} ${animation !== '' && 'relative -z-10' /* behind while animated */}`}>
              {presentations[step]}
            </div>
          </div>
          <div className="flex">
            <i className="w-16 h-16 mt-2 lg:hidden">
              <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0" /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M12 5L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> <path d="M8 16L12 20L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> <path d="M16 8L12 4L8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
            </i>
            <Image
              priority={true}
              className="aspect-[79/103] object-contain -z-20 lg:max-2xl:h-4/5"
              src={PersonalImage}
              alt="Imagen personal"
            />
          </div>
        </main>
      </article>
    </header>
  )
}
