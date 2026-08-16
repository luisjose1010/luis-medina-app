'use client' // TODO: delete if possible
import { useExperience } from '@/hooks/useExperience'
import { useTranslation } from '@/hooks/useTranslation'

interface ExperienceItemProps {
  title: string
  description: string
  year: number | string
  period?: string
  children?: React.ReactNode // Optional prop for additional content
}

const ExperienceItem = ({ title, description, year, period, children }: ExperienceItemProps) => (
    <li data-before={`${year}`} className="reveal relative my-3 rounded-2xl glass p-4 text-left shadow-sm transition-all duration-300 ease-out max-w-max hover:-translate-y-1 hover:shadow-xl hover:shadow-caribbean_current/10 sm:max-w-sm md:max-w-md md:p-6 lg:max-w-3xl before:absolute before:content-[attr(data-before)] before:bg-desert_sand before:w-16 before:h-16 before:rounded-full before:-left-7 before:text-dark_purple before:text-center before:font-medium before:flex before:items-center before:justify-center before:lg:-left-14">
      <h3 className="mb-1 text-xl font-semibold">{title}</h3>
      { period != null && <p className="mb-2 text-sm text-dark_purple/60">{period}</p> }
      <p className="text-dark_purple/60 leading-relaxed">{description}</p>
      {
        children != null && (
          <div className="flex p-6 justify-center">
            {children}
          </div>
        )
      }
    </li>
)

export function Experience () {
  const { APP } = useTranslation()
  const { experience } = useExperience()

  return (
    <section id="experience" className="relative overflow-hidden flex flex-col min-h-screen py-12 px-10 gap-5 justify-center items-center text-center text-caribbean_current lg:px-12 xl:p-16">
      {/* Ambient atmosphere, same language as the hero */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob blob-slow absolute -left-32 top-10 h-[26rem] w-[26rem] rounded-full bg-dark_cyan-900/60 blur-3xl" />
        <div className="blob absolute -right-24 bottom-0 h-[22rem] w-[22rem] rounded-full bg-desert_sand-800/60 blur-3xl" />
      </div>
      <h2 className="font-display text-4xl font-bold tracking-tight relative pb-3 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-16 after:rounded-full after:bg-gradient-to-r after:from-caribbean_current after:to-dark_cyan-600">{APP.EXPERIENCE.TITLE}</h2>
      <ul className="relative pl-8 lg:pl-5 before:content-[''] before:absolute before:left-1 before:top-9 before:bottom-40 before:bg-caribbean_current before:w-0.5 before:rounded-full before:lg:-left-6">
        {
          experience.map((item, index) => (
            <ExperienceItem
              key={index}
              title={item.name}
              description={item.description}
              year={item.year}
              period={item.period}
            />
          ))
        }
      </ul>
    </section>
  )
}
