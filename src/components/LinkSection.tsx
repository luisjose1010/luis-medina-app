import { Button } from '@/components/Button'

interface LinkSectionProps {
  title: string
  links: ProjectLink[]
  className?: string
}

export function LinkSection ({ title, links, className = '' }: LinkSectionProps) {
  if (links.length === 0) return null

  return (
    <section className={`${className}`}>
      <h3 className="mt-2 text-base font-medium leading-relaxed text-caribbean_current-100">
        {title}
      </h3>
      <div className="flex flex-wrap justify-start mt-2 gap-2 lg:gap-4">
        {links.map((link, index) => {
          const isSolidButton = link.isSolidButton ?? false
          const ButtonComponent = isSolidButton ? Button.LinkSolid : Button.LinkOutline

          return (
            <ButtonComponent
              key={index}
              href={link.url}
              dark={true}
              target="_blank"
              className={isSolidButton ? 'text-seasalt' : 'text-caribbean_current hover:text-seasalt'}
            >
              {link.label}
            </ButtonComponent>
          )
        })}
      </div>
    </section>
  )
}
