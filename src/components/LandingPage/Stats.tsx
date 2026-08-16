'use client'
import { useTranslation } from '@/hooks/useTranslation'
import { projects } from '@/lib/consts'
import { useEffect, useRef, useState } from 'react'

const CAREER_START_YEAR = 2021

function useCountUp (target: number, duration = 1400): [number, React.RefObject<HTMLSpanElement>] {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (node == null) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setValue(target)
      return
    }

    let frame = 0
    let start: number | null = null

    const step = (timestamp: number) => {
      start ??= timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      // easeOutExpo — fast then settles, reads as "counting up"
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setValue(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          frame = requestAnimationFrame(step)
          observer.disconnect()
        }
      })
    }, { threshold: 0.4 })

    observer.observe(node)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [target, duration])

  return [value, ref]
}

interface StatProps {
  value: number
  label: string
  suffix?: string
}

const Stat = ({ value, label, suffix = '+' }: StatProps) => {
  const [count, ref] = useCountUp(value)

  return (
    <li className="reveal flex flex-col items-center gap-1 px-6 py-5 rounded-2xl glass shadow-lg shadow-caribbean_current/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
      <span
        ref={ref}
        className="font-display text-4xl font-bold tabular-nums bg-gradient-to-r from-caribbean_current to-dark_cyan-600 bg-clip-text text-transparent lg:text-5xl"
      >
        {count}{suffix}
      </span>
      <span className="text-xs font-medium uppercase tracking-widest text-ink/60 text-center">
        {label}
      </span>
    </li>
  )
}

export function Stats () {
  const { APP } = useTranslation()

  const years = new Date().getFullYear() - CAREER_START_YEAR
  const liveApps = projects.filter(project => project.links.some(link => link.label === 'LIVE')).length
  const technologies = new Set(projects.flatMap(project => project.tags)).size

  return (
    <section aria-label="Stats" className="relative -mt-2 px-6 py-10 lg:px-12">
      <ul className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 lg:flex lg:flex-wrap lg:justify-center lg:gap-8">
        <Stat value={years} label={APP.STATS.YEARS} />
        <Stat value={projects.length} label={APP.STATS.PROJECTS} />
        <Stat value={liveApps} label={APP.STATS.LIVE} />
        <Stat value={technologies} label={APP.STATS.TECHS} />
      </ul>
    </section>
  )
}
