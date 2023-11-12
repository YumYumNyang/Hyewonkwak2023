import useGsapContext from '@/lib/hooks/useGsapContext'
import gsap from 'gsap'
import Image from 'next/image'
import React, { useLayoutEffect, useRef } from 'react'
import HomeDesc from '../ui/home-desc'

const MorningCoffee = () => {
  const comp = useRef<HTMLDivElement>(null)
  const ctx = useGsapContext(comp)
  useLayoutEffect(() => {
    ctx.add(() => {
      gsap
        .timeline()
        .from(
          '.item-1',
          {
            translateY: '-100%',
            filter: 'brightness(0.4)',
            ease: 'power2.out',
            duration: 1.4,
          },
          '0.4',
        )
        .from(
          '.item-2',
          {
            translateY: '-100%',
            filter: 'brightness(0.4)',
            ease: 'power2.out',
            duration: 1.0,
          },
          '<+0.6',
        )
    })
    return () => ctx.revert() // cleanup
  }, [])
  return (
    <div
      ref={comp}
      className="flex flex-col justify-start items-start relative gap-[25px] mt-[100px]"
    >
      <div className="flex-grow-0 flex-shrink-0 w-[343px] h-[343px] md:max-lg:w-[280px] md:max-lg:h-[280px] max-md:w-[200px] max-md:h-[200px]  relative overflow-hidden bg-white">
        <div className="item-1 bg-cover w-full h-full brightness-100 bg-[url('/morning-coffee/02.png')]" />
      </div>
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative pl-[260px] md:max-lg:pl-[160px] sm:max-md:pl-[140px] max-sm:pl-[100px]">
        <HomeDesc delay={0.6} desc={'I literally can’t live without coffee!'} />
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 pl-[344px]  md:max-lg:pl-[244px] sm:max-md:pl-[184px] max-md:pl-[100px]">
        <div className="flex-grow-0 flex-shrink-0 w-[248px] h-[184px] md:max-lg:w-[192px] md:max-lg:h-[138px]  relative overflow-hidden bg-white">
          <div className="item-2 bg-cover w-full h-full brightness-100 bg-[url('/morning-coffee/01.png')]" />
        </div>
      </div>
    </div>
  )
}

export default MorningCoffee
