'use client'
import { UpArrowIcon } from '@/assets/Icons'
import { useEffect, useState } from 'react'
import { Button } from './Button'

export function ScrollToTop () {
  const [scroll, setScroll] = useState(0)
  const [show, setShow] = useState(false)
  const isBrowser = () => typeof window !== 'undefined' // The approach recommended by Next.js

  function scrollToTop () {
    if (!isBrowser()) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setShow(true)
      } else {
        setShow(false)
      }
      setScroll(window.scrollY)
    }
    window.addEventListener('scroll', onScroll)

    return () => { window.removeEventListener('scroll', onScroll) }
  }, [scroll])

  // Hide the button after 3 seconds
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false)
      }, 3000)
    }
  }, [show])

  return (
    <Button.Solid dark={true} size="small" onClick={scrollToTop} className={`${!show && 'translate-y-[200%]'} text-seasalt fixed shadow-lg bottom-6 right-6 rounded-full aspect-square z-50 transition-transform duration-300 md:bottom-7 lg:right-7`}>
        <UpArrowIcon className="h-6 lg:h-8" />
    </Button.Solid>
  )
}
