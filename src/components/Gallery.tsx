'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Button from './Button'
import { LeftArrowIcon, RightArrowIcon } from '@/assets/Icons'

interface GalleryProps {
  images: string[]
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [current, setCurrent] = useState(0)

  const previousSlide = (): void => {
    if (current === 0) {
      setCurrent(images.length - 1)
    } else {
      setCurrent(current - 1)
    }
  }

  const nextSlide = (): void => {
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
    <article className='mx-auto overflow-hidden relative rounded-xl w-full lg:w-1/2'>
      <section
        className="flex transition ease-out duration-200"
        style={{
          transform: `translateX(-${current * 100}%)`
        }}
      >
        {
          images.map((src) => (
            <Image priority={true} key={src} src={src} width={1680} height={1050} alt="" className='w-full' />
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
              className={`w-2 h-2 rounded-full cursor-pointer md:w-3 md:h-3 ${current === index ? 'bg-caribbean_current' : 'bg-desert_sand'}`}
            ></div>
          ))
        }
      </div>
    </article>
  )
}

export default Gallery
