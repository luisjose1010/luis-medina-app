'use client'
import PersonalImage from '@/assets/luis-medina.webp'
import { Button } from '@/components/Button'
import { NavBar } from '@/components/NavBar'
import { useLinks } from '@/hooks/useLinks'
import { useTranslation } from '@/hooks/useTranslation'
import Image from 'next/image'
import { useEffect, useRef, useState, type SyntheticEvent } from 'react'

interface PresentationProps {
  title?: string
  text: string
  children?: React.ReactNode
}

const Presentation = ({ title = 'Luis José Medina Sandoval', text, children }: PresentationProps) => (
    <>
      <h1 className="font-display text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-balance text-flow bg-gradient-to-r from-caribbean_current-300 via-dark_cyan-500 to-caribbean_current-600 bg-clip-text text-transparent">{title}</h1>
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
  const [paused, setPaused] = useState(false)
  const pendingStep = useRef<number | null>(null)

  const navLinks = [
    links.home,
    links.projectsPage,
    links.experience,
    links.skills,
    links.cv,
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
        <Button.Outline dark={true} size="small" onClick={() => window.open(links.cv.url, '_blank')} className="mb-1 hover:text-seasalt">
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
        <Button.Outline dark={true} size="small" onClick={() => window.open('https://www.linkedin.com/in/luisjose1010/', '_blank')} className="hover:text-seasalt">
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
        <Button.Outline dark={true} size="small" onClick={() => window.open(links.cv.url, '_blank')} className="hover:text-seasalt">
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

  // Jump straight to a slide from the side indicators
  const handleGoToStep = (index: number): void => {
    if (index === step) return
    pendingStep.current = index
    setAnimation('slide-off-top')
  }

  const handleEndAnimation = (): void => {
    if (animation === 'slide-off-top' && step < presentations.length) {
      const target = pendingStep.current
      pendingStep.current = null
      setStep(prevState => target ?? prevState + 1)
      setAnimation('slide-in-bottom')
    } else if (step >= presentations.length) {
      setAnimation('fade-in')
      setStep(0)
    } else {
      setAnimation('')
    }
  }

  // Activate the slide every 5 seconds (paused while the visitor is reading)
  useEffect(() => {
    if (paused) return

    const interval = setInterval(() => {
      handleNextStep()
    }, 5000)
    return () => { clearInterval(interval) }
  })

  return (
    <header id="header" className="relative bg-grain flex h-auto lg:p-10 lg:pb-0 lg:max-2xl:h-screen">
      {/* Ambient background atmosphere */}
      <div aria-hidden className="absolute inset-0 -z-30 overflow-hidden">
        <div className="blob absolute -top-40 -right-40 h-[34rem] w-[34rem] rounded-full bg-dark_cyan-800/50 blur-3xl" />
        <div className="blob blob-slow absolute top-1/4 -left-48 h-[28rem] w-[28rem] rounded-full bg-desert_sand-700/60 blur-3xl" />
        <div className="blob absolute -bottom-24 right-1/4 h-[22rem] w-[22rem] rounded-full bg-caribbean_current-900/70 blur-3xl" />
      </div>
      {/* Side decoration — also the slide picker */}
      <div className="flex relative flex-col justify-center marker:text-xl text-desert_sand  before:block before:absolute before:-top-[50%] before:bottom-[65%] before:border-l-[3px] before:border-caribbean_current before:rounded-2xl after:block after:absolute after:top-[65%] after:-bottom-20 after:border-l-[3px] after:border-caribbean_current after:rounded-2xl after:overflow-hidden after:-z-10 max-lg:left-10">
        {
          presentations.map((_presentation, index) => (
            <button
              type="button"
              key={index}
              aria-label={`${APP.HERO.SLIDE} ${index + 1}`}
              aria-current={step === index}
              onClick={() => { handleGoToStep(index) }}
              className={`group relative -my-2 flex h-6 w-6 items-center justify-center rounded-full transition-colors delay-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-caribbean_current/60 ${step === index ? 'text-caribbean_current' : 'hover:text-caribbean_current-700'}`}
            >
              <span className={`block rounded-full bg-current transition-all duration-300 ${step === index ? 'h-2.5 w-2.5' : 'h-1.5 w-1.5 group-hover:h-2 group-hover:w-2'}`} />
              {step === index && !paused && (
                <span aria-hidden className="slide-timer absolute left-1/2 top-1/2 h-6 w-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-caribbean_current/40" />
              )}
            </button>
          ))
        }
      </div>
      <article className="w-full fade-up">
        <NavBar links={navLinks} className="lg:ml-3" />

        <main
          id="main"
          className="flex px-10 ml-4 mt-4 overflow-hidden text-caribbean_current gap-5 cursor-pointer lg:gap-12 xl:gap-60 max-lg:flex-wrap"
          onClick={handleNextStep}
          onMouseEnter={() => { setPaused(true) }}
          onMouseLeave={() => { setPaused(false) }}
        >
          <div className="overflow-hidden lg:max-w-md xl:max-w-lg 2xl:max-w-3xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-semibold uppercase tracking-widest text-caribbean_current shadow-sm">
              <span className="relative flex h-2 w-2">
                <span aria-hidden className="ping-soft absolute inline-flex h-full w-full rounded-full bg-dark_cyan-600" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-dark_cyan" />
              </span>
              {APP.HERO.BADGE}
            </span>
            <div onAnimationEnd={handleEndAnimation} className={`${animation} ${animation !== '' && 'relative -z-10' /* behind while animated */}`}>
              {presentations[step]}
            </div>
          </div>
          <div className="flex relative">
            {/* Backdrop shape behind the portrait */}
            <div aria-hidden className="absolute left-1/2 bottom-0 top-16 w-[85%] -translate-x-1/2 -z-[25] rounded-t-[10rem] rounded-b-[2rem] bg-gradient-to-tr from-caribbean_current-800/60 via-dark_cyan-800/50 to-desert_sand-700/70" />
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

        {/* Scroll cue */}
        <a
          href="#projects"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-caribbean_current/70 transition-colors hover:text-caribbean_current lg:max-2xl:flex"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">{APP.HERO.SCROLL}</span>
          <svg aria-hidden className="cue-bounce h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4v14M6 13l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </article>
    </header>
  )
}
