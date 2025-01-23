'use client'
import { CloseIcon } from '@/assets/Icons'
import { LanguageSelector } from '@/components/NavBar/LanguageSelector'
import { useTranslation } from '@/hooks/useTranslation'
import Link from 'next/link'
import { useEffect, useRef, useState, type FocusEvent } from 'react'

interface NavBarProps {
  links: NavLink[]
  className?: string
}

export function NavBar ({ links, className = '' }: NavBarProps) {
  const { UI } = useTranslation()
  const [open, setOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const linkRef = useRef<HTMLAnchorElement>(null)

  const handleBlur = (event: FocusEvent): void => {
    // Prevents the blur, closes the nav with the close button, and keeps it open with the language selector
    if (event.relatedTarget?.parentElement !== navRef.current && event.relatedTarget?.getAttribute('data-nav-prevent-blur') == null) {
      setOpen(false)
    }
  }

  useEffect(() => {
    if (open) {
      linkRef.current?.focus()
    }
  }, [open])

  return (
    <article className={`${className} flex flex-wrap mt-4 py-4 lg:py-2 text-caribbean_current px-12 lg:min-h-40`}>
      <article className="flex justify-center items-end w-full max-h-9 lg:mt-6">
        <svg className="fill-current h-6 w-6 mr-2 sm:mr-4 lg:mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
        <span className="font-semibold tracking-tight">Luis Medina App</span>
        <button data-nav-prevent-blur onClick={() => { setOpen(!open) }} className="fill-current h-8 w-8 right-6 md:right-8 top-6 fixed z-30 focus:outline-none lg:hidden">
          <span className="sr-only">Open main menu</span>
          <div className="block w-5">
            <span aria-hidden="true" className={`${open ? 'rotate-45' : '-translate-y-1.5'} block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`}></span>
            <span aria-hidden="true" className={`${open ? 'opacity-0' : ''} block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`}></span>
            <span aria-hidden="true" className={`${open ? '-rotate-45' : 'translate-y-1.5'} block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out`}></span>
          </div>
        </button>
        <LanguageSelector className={`${!open && '-top-80'} fixed z-20 top-6 md:hidden`} />
      </article>

      <nav className="flex flex-grow text-sm font-bold lg:w-auto lg:justify-between max-lg:hidden items-center">
        {
          links?.map((link, index) => (
            <Link key={index} href={link.url}>
              <span className="transition duration-300 ease-in-out hover:text-caribbean_current-800">{link.name}</span>
            </Link>
          ))
        }
      </nav>

      <LanguageSelector className="absolute z-20 max-md:hidden md:top-6 md:right-24 lg:top-10 lg:right-10" />

      <nav
        ref={navRef}
        onBlur={(event) => { handleBlur(event) }}
        className={`${!open && '-translate-x-[200%]'} z-20 flex flex-col shrink-0 grow-0 justify-around gap-4 p-2.5 shadow-lg backdrop-blur-md rounded-lg border border-slate-600/60 bg-slate-500/40 text-caribbean_current fixed top-2/4 -translate-y-2/4 transition-transform duration-200 left-6 min-h-[auto] min-w-[64px] lg:hidden`}
      >
        {
          links?.map((link, index) => (
            <Link
              ref={index === 0 ? linkRef : null}
              key={index} href={link.url}
              className="flex aspect-square min-h-[32px] w-20 flex-col items-center justify-center gap-1 rounded-md p-1.5 transition duration-300 ease-in-out text-caribbean_current hover:bg-caribbean_current hover:text-seasalt hover:scale-105"
            >
              <link.Icon className="w-16 h-16" />
              <small className="text-xs font-medium">
                {link.name}
              </small>
            </Link>
          ))
        }

        <hr className="dark:border-gray-700/60" />

        <button
          onClick={() => { setOpen(false) }}
          className="flex aspect-square min-h-[32px] w-20 flex-col items-center justify-center gap-1 rounded-md p-1.5 transition duration-300 ease-in-out text-caribbean_current hover:bg-caribbean_current hover:text-seasalt hover:scale-105"
        >
          <CloseIcon className="w-16 h-16" />
          <small className="text-xs font-medium">{UI.BUTTON.CLOSE}</small>
        </button>
      </nav>
    </article>
  )
}
