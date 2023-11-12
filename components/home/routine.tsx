import useGsapContext from '@/lib/hooks/useGsapContext'
import gsap from 'gsap'
import Image from 'next/image'
import React, { useLayoutEffect, useRef } from 'react'
import HomeDesc from '../ui/home-desc'

const Routine = () => {
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
    <div
      ref={comp}
      className="flex flex-col justify-start items-start gap-[63px] mt-[100px] max-sm:mt-[180px]"
    >
      <div className="relative flex flex-col items-start justify-start flex-grow-0 flex-shrink-0 gap-2 item-1">
        <HomeDesc
          delay={0.4}
          desc={
            'Routine makes me sustain healthy life. \n I go swimming every twice a week.'
          }
        />
        <div className="flex-grow-0 flex-shrink-0  w-[380px] h-[220px] md:max-lg:w-[285px] md:max-lg:h-[165px] max-md:w-[280px] max-md:h-[165px] relative overflow-hidden bg-white">
          <img
            alt="Routine makes me sustain healthy life."
            src="/routine/01.png"
            className="object-cover h-full brightness-100"
          />
        </div>
      </div>
      <div className="item-2 flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 relative gap-2 pl-[306px]  md:max-lg:pl-[180px] max-md:pl-[100px] ">
        <div className="flex-grow-0 flex-shrink-0 w-[280px] h-[280px] md:max-lg:w-[260px] md:max-lg:h-[260px] max-md:w-[220px] max-md:h-[220px] relative overflow-hidden bg-white">
          <img
            alt="before starting work, I drink a cup of coffee."
            src="/routine/02.png"
            className="object-cover h-full brightness-100"
          />
        </div>
        <HomeDesc
          className="justify-end"
          delay={1.0}
          desc={'before starting work, I drink a cup of coffee.'}
        />
      </div>
    </div>
  )
}

export default Routine
