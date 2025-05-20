'use client'
import { LeftArrowIcon, RightArrowIcon } from '@/assets/Icons'
import { Button } from '@/components/Button'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface GalleryProps {
  images: string[]
}

export function Gallery ({ images }: GalleryProps) {
  const [current, setCurrent] = useState(0)

  const previousSlide = () => {
    if (current === 0) {
      setCurrent(images.length - 1)
    } else {
      setCurrent(current - 1)
    }
  }

  const nextSlide = () => {
    if (current === images.length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  // Activate the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => { clearInterval(interval) }
  })

  return (
    <article className='mx-auto bg-gray-200 overflow-hidden relative rounded-xl w-full lg:w-1/2 aspect-[16/10]'>
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
                alt={`Gallery image ${index + 1}`}
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

      <div className='absolute flex justify-center bottom-0 py-2.5 gap-2 w-full z-10 md:py-4 md:gap-5'>
        {
          images.map((_src, index) => (
            <div
              key={index}
              onClick={() => { setCurrent(index) }}
              className={`${current === index ? 'bg-caribbean_current' : 'bg-desert_sand'} w-2 h-2 rounded-full cursor-pointer md:w-3 md:h-3`}
            ></div>
          ))
        }
      </div>
    </article>
  )
}
