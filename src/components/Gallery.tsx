'use client'
import { LeftArrowIcon, RightArrowIcon } from '@/assets/Icons'
import { Button } from '@/components/Button'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

interface GalleryProps {
  images: string[]
  altBase?: string
  sizes?: string
}

export function Gallery ({ images, altBase, sizes }: GalleryProps) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const previousSlide = () => {
    if (current === 0) {
      setCurrent(images.length - 1)
    } else {
      setCurrent(current - 1)
    }
  }

  const nextSlide = useCallback(() => {
    if (current === images.length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }, [current, images.length])

  // Activate the slide every 5 seconds (respect prefers-reduced-motion and pause on hover)
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches || paused) return
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => { clearInterval(interval) }
  }, [current, paused, nextSlide])

  return (
    <article className='group mx-auto bg-gradient-to-br from-band via-surface to-dark_cyan-900 overflow-hidden relative rounded-2xl border border-line/20 shadow-xl shadow-caribbean_current/10 w-full lg:w-2/3 xl:w-1/2 aspect-[16/10]'
      onMouseEnter={() => { setPaused(true) }}
      onMouseLeave={() => { setPaused(false) }}
      aria-roledescription="carousel"
      aria-label="Project gallery"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') previousSlide()
        if (event.key === 'ArrowRight') nextSlide()
      }}
    >
      <section
        className="flex h-full transition ease-out duration-200"
        style={{
          transform: `translateX(-${current * 100}%)`
        }}
      >
        {
          images.map((src, index) => (
            <div key={src} className="w-full h-full flex-shrink-0 relative">
              <Image
                fill
                priority={index === current}
                src={src}
                alt={`${altBase ?? 'Project image'} ${index + 1}`}
                sizes={sizes ?? '(min-width: 1024px) 50vw, 100vw'}
                className="object-contain"
              />
            </div>
          ))
        }
      </section>

      <section className='absolute flex top-0 h-full w-full justify-between items-center text-3xl z-10'>
        <Button.Outline dark={true} size="none" onClick={previousSlide} className='text-caribbean_current hover:text-seasalt ml-2 h-5 md:h-10'>
          <LeftArrowIcon className="h-5 md:h-10" />
        </Button.Outline>
        <Button.Outline dark={true} size="none" onClick={nextSlide} className='text-caribbean_current hover:text-seasalt mr-2 h-5 md:h-10'>
          <RightArrowIcon className="h-5 md:h-10" />
        </Button.Outline>
      </section>

      <span className="absolute right-3 top-3 z-10 rounded-full glass px-2.5 py-0.5 text-xs font-semibold tabular-nums text-caribbean_current">
        {current + 1} / {images.length}
      </span>

      <div className='absolute flex justify-center bottom-0 py-2.5 gap-2 w-full z-10 md:py-4 md:gap-5'>
        {
          images.map((_src, index) => (
            <button
              type="button"
              key={index}
              aria-label={`${altBase ?? 'Project image'} ${index + 1}`}
              aria-current={current === index}
              onClick={() => { setCurrent(index) }}
              className={`${current === index ? 'bg-caribbean_current w-5 md:w-7' : 'bg-desert_sand w-2 hover:bg-desert_sand-400 md:w-3'} h-2 rounded-full transition-all duration-300 md:h-3`}
            ></button>
          ))
        }
      </div>
    </article>
  )
}
