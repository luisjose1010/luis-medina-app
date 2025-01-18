'use client' // TODO: delete if possible
import { useExperience } from '@/hooks/useExperience'
import { useTranslation } from '@/hooks/useTranslation'

interface ExperienceItemProps {
  title: string
  description: string
  year: number | string
  children?: React.ReactNode // Optional prop for additional content
}

const ExperienceItem = ({ title, description, year, children }: ExperienceItemProps) => (
    <li data-before={`${year}`} className="p-6 text-left max-w-max sm:max-w-sm md:max-w-md lg:max-w-3xl before:absolute before:content-[attr(data-before)] before:bg-desert_sand before:w-16 before:h-16 before:rounded-full before:-left-7 before:text-dark_purple before:text-center before:font-medium before:flex before:items-center before:justify-center before:lg:-left-14">
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>
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
    <section id="experience" className="flex flex-col min-h-screen p-12 gap-5 justify-center items-center text-center text-caribbean_current xl:p-16">
      <h2 className="text-3xl font-bold">{APP.EXPERIENCE.TITLE}</h2>
      <ul className="relative pl-8 lg:pl-5 before:content-[''] before:absolute before:left-1 before:top-9 before:bottom-40 before:bg-caribbean_current before:w-0.5 before:rounded-full before:lg:-left-6">
        {
          experience.map((item, index) => (
            <ExperienceItem
              key={index}
              title={item.name}
              description={item.description}
              year={item.year}
            />
          ))
        }
      </ul>
    </section>
  )
}
