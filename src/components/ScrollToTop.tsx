'use client'
import { UpArrowIcon } from '@/assets/Icons'
import { Button } from '@/components/Button'
import { useEffect, useRef, useState } from 'react'

export function ScrollToTop () {
  const timeout = useRef<NodeJS.Timeout | null>(null)
  const [scroll, setScroll] = useState(0)
  const [show, setShow] = useState(false)
  const isBrowser = () => typeof window !== 'undefined' // The approach recommended by Next.js

  const scrollToTop = () => {
    if (!isBrowser()) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    // Hide the button after X milliseconds
    const setHideTimer = (milliseconds: number) => {
      if (!isBrowser()) return

      if (timeout.current == null) {
        timeout.current = setTimeout(() => {
          setShow(false)
        }, milliseconds)
      } else {
        // Reset timer if it's already running
        clearTimeout(timeout.current)
        timeout.current = setTimeout(() => {
          setShow(false)
        }, milliseconds)
      }
    }

    const onScroll = () => {
      if (window.scrollY > 50) {
        setShow(true)
        setHideTimer(3000)
      } else {
        setShow(false)
      }
      setScroll(window.scrollY)
    }
    window.addEventListener('scroll', onScroll)

    return () => { window.removeEventListener('scroll', onScroll) }
  }, [scroll])

  return (
    <Button.Solid dark={true} size="small" onClick={scrollToTop} className={`${!show && 'translate-y-[200%]'} text-seasalt fixed shadow-lg bottom-6 right-6 rounded-full aspect-square z-50 transition-transform duration-300 md:bottom-7 lg:right-7`}>
        <UpArrowIcon className="h-6 lg:h-8" />
    </Button.Solid>
  )
}
