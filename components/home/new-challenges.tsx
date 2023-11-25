import Image from 'next/image'
import gsap from 'gsap'
import React, { useLayoutEffect, useRef } from 'react'
import HomeDesc from '../ui/home-desc'
import useImageLoad from '@/lib/hooks/useImageLoad'
import useGsapContext from '@/lib/hooks/useGsapContext'
const NewChallenges = () => {
  const comp = useRef<HTMLDivElement>(null)
  const imageLoaded = useImageLoad(comp)
  const ctx = useGsapContext(comp)
  useLayoutEffect(() => {
    if (imageLoaded) {
      ctx.add(() => {
        gsap.timeline().to(comp.current, { opacity: 1 }).from(
          '.item-1 img',
          {
            translateX: '-100%',
            filter: 'brightness(0.4)',
            ease: 'power2.out',
            duration: 1.4,
          },
          '0.4',
        )
      })
    } else {
      gsap.set(comp.current, { opacity: 0 })
    }
    return () => ctx.revert() // cleanup
  }, [ctx, imageLoaded])
  return (
    <div
      ref={comp}
      className="item-1 relative flex flex-col items-center justify-start gap-2 mt-[100px] max-sm:mt-[180px]"
    >
      <HomeDesc
        startAnimation={imageLoaded}
        delay={0.2}
        desc={
          'I always jump into new challenges \n because I like to see myself improving'
        }
      />

      <div className="flex flex-grow-0 justify-center flex-shrink-0 w-[350px] h-[350px] md:max-lg:w-[280px] md:max-lg:h-[280px] sm:max-md:w-[200px] sm:max-md:h-[200px] relative overflow-hidden bg-white">
        <img
          alt="I always jump into new challenges because I like to see myself
        improving."
          src="/new-challenges/01.png"
          className="object-cover w-full brightness-100"
        />
      </div>
      <div className="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
        <HomeDesc
          startAnimation={imageLoaded}
          className="justify-end"
          delay={0.8}
          desc={'this year, I’ve got life guard certificate.'}
        />
      </div>
    </div>
  )
}

export default NewChallenges
