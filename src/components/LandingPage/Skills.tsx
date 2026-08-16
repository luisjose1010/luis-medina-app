'use client' // TODO: delete if possible
import { useTranslation } from '@/hooks/useTranslation'
import { skills, tools } from '@/lib/consts'
import Image from 'next/image'

export function Skills () {
  const { APP } = useTranslation()

  return (
    <section id="skills" className="flex flex-col h-auto p-4 gap-4 justify-center items-center bg-gradient-to-b from-white via-desert_sand-900 to-white lg:h-screen sm:p-6 lg:p-12">
      <h2 className="font-display text-center mt-4 text-4xl font-bold tracking-tight text-caribbean_current relative pb-3 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-16 after:rounded-full after:bg-gradient-to-r after:from-caribbean_current after:to-dark_cyan-600">{APP.SKILLS.TITLE}</h2>
      <p className="text-dark_purple/60 text-lg text-center mt-2">
        {APP.SKILLS.DESCRIPTION}
      </p>

      {/* Infinite marquee — the whole stack at a glance (pauses on hover) */}
      <div className="marquee-mask relative w-full overflow-hidden py-4">
        <ul aria-hidden className="marquee-track flex items-center gap-10">
          {
            [...skills, ...tools, ...skills, ...tools].map((logo, index) => (
              <li key={index} className="shrink-0 opacity-60 transition-opacity duration-300 hover:opacity-100">
                <Image
                  src={`/assets/logos/${logo.src}.svg`}
                  alt=""
                  width={40}
                  height={40}
                  className="h-9 w-9 object-contain grayscale transition-all duration-300 hover:grayscale-0"
                />
              </li>
            ))
          }
        </ul>
      </div>

      <h3 className="mt-2 font-bold uppercase text-caribbean_current text-center tracking-widest">
        {APP.SKILLS.SKILLS_TITLE}
      </h3>
      <ul className="flex flex-wrap w-3/4 p-4 gap-4 justify-center items-stretch">
        {
          skills.map((logo, index) => (
            <li key={index} className="reveal flex flex-col items-center justify-center gap-2 w-28 py-4 px-2 rounded-2xl border border-caribbean_current/10 bg-seasalt/80 backdrop-blur-sm shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-caribbean_current/30 hover:bg-seasalt">
              <Image
                src={`/assets/logos/${logo.src}.svg`}
                alt={logo.alt}
                width={48}
                height={48}
                className="h-10 w-10 object-contain"
              />
              <span className="text-xs font-medium text-dark_purple/70 text-center">{logo.alt.replace(/\s*Logo$/i, '')}</span>
            </li>
          ))
        }
      </ul>

      <h3 className="mt-2 font-bold uppercase text-caribbean_current text-center tracking-widest">
        {APP.SKILLS.TOOLS_TITLE}
      </h3>
      <ul className="flex flex-wrap w-3/4 p-4 gap-4 justify-center items-stretch">
        {
          tools.map((logo, index) => (
            <li key={index} className="reveal flex flex-col items-center justify-center gap-2 w-28 py-4 px-2 rounded-2xl border border-caribbean_current/10 bg-seasalt/80 backdrop-blur-sm shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-caribbean_current/30 hover:bg-seasalt">
              <Image
                src={`/assets/logos/${logo.src}.svg`}
                alt={logo.alt}
                width={48}
                height={48}
                className="h-10 w-10 object-contain"
              />
              <span className="text-xs font-medium text-dark_purple/70 text-center">{logo.alt.replace(/\s*Logo$/i, '')}</span>
            </li>
          ))
        }
      </ul>
    </section>
  )
}
