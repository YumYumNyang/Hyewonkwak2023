import useGsapContext from '@/lib/hooks/useGsapContext'
import gsap from 'gsap'
import Image from 'next/image'
import React, { useLayoutEffect, useRef } from 'react'
import HomeDesc from '../ui/home-desc'

const FocusingOnSomething = () => {
  const comp = useRef<HTMLDivElement>(null)
  const ctx = useGsapContext(comp)
  useLayoutEffect(() => {
    ctx.add(() => {
      gsap
        .timeline()
        .from(
          '.item-1 img',
          {
            translateY: '-100%',
            filter: 'brightness(0.4)',
            ease: 'power2.out',
            duration: 1.4,
          },
          '0.4',
        )
        .from(
          '.item-2 img',
          {
            translateY: '100%',
            filter: 'brightness(0.4)',
            ease: 'power2.out',
            duration: 1.0,
          },
          '<+0.4',
        )
    })

    return () => ctx.revert() // cleanup
  }, [])
  return (
    <div ref={comp} className="flex flex-col gap-[44px] mt-[80px]">
      <div className="item-1 flex flex-col justify-start items-start gap-2 pl-[180px] sm:max-md:pl-[100px] max-sm:pl-[80px]">
        <HomeDesc
          delay={0.6}
          desc={'I can find real fun in the moment of immersion.'}
        />
        <div className="flex-grow-0 flex-shrink-0 w-[360px] h-[360px] md:max-lg:w-[280px] md:max-lg:h-[280px] max-md:w-[240px] max-md:h-[240px]  relative overflow-hidden bg-white">
          <img
            alt=""
            src="/focusing-on-something/01.png"
            className="object-cover h-full brightness-100"
          />
        </div>
      </div>
      <div className="item-2 flex-grow-0 flex-shrink-0 w-[280px] h-[240px] md:max-lg:w-[210px] md:max-lg:h-[180px] max-md:w-[210px] max-md:h-[180px]  relative overflow-hidden bg-white">
        <img
          alt=""
          src="/focusing-on-something/02.png"
          className="object-cover h-full brightness-100"
        />
      </div>
    </div>
  )
}

export default FocusingOnSomething
