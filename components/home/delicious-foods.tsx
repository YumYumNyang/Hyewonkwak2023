import useGsapContext from '@/lib/hooks/useGsapContext'
import gsap from 'gsap'
import Image from 'next/image'
import React, { useLayoutEffect, useRef } from 'react'
import HomeDesc from '../ui/home-desc'

const DeliciousFoods = () => {
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
            translateX: '-100%',
            filter: 'brightness(0.4)',
            ease: 'power2.out',
            duration: 1.0,
          },
          '<+0.4',
        )
        .from(
          '.item-3 img',
          {
            translateY: '-100%',
            filter: 'brightness(0.4)',
            ease: 'power2.out',
            duration: 1.4,
          },
          '<+0.4',
        )
    })

    return () => ctx.revert() // cleanup
  }, [])
  return (
    <div
      ref={comp}
      className="flex flex-col items-start gap-[53px] mt-[60px] max-sm:mt-[180px] "
    >
      <div className="item-1 flex flex-col justify-end items-end pl-[368px] md:max-lg:pl-[268px] sm:max-md:pl-[208px] max-sm:pl-[0px]  max-sm:mr-[80px] top-0 gap-2">
        <HomeDesc
          className="justify-end"
          delay={0.4}
          desc={' my fav burgurshop in yangjae.'}
        />
        <div className="flex-grow-0 flex-shrink-0 w-[320px] h-[320px] md:max-lg:w-[240px] md:max-lg:h-[240px] max-md:w-[160px] max-md:h-[160px] overflow-hidden bg-white">
          <img
            alt="my fav burgurshop in yangjae."
            src="/delicious-food/02.png"
            className="object-cover h-full brightness-100"
          />
        </div>
      </div>
      <div className="item-2 flex flex-col justify-start items-start pl-[-2px] max-sm:pl-[80px] gap-2">
        <HomeDesc
          delay={0.8}
          desc={'I’m interested in foods from different countries.'}
        />
        <div className="flex-grow-0 flex-shrink-0 w-[384px] h-[204px] md:max-lg:w-[244px] md:max-lg:h-[153px] max-md:w-[192px] max-md:h-[102px] overflow-hidden bg-white">
          <img
            alt="I’m interested in foods from different countries."
            src="/delicious-food/01.png"
            className="object-cover h-full brightness-100"
          />
        </div>
      </div>
      <div className="item-3 flex flex-col justify-start items-end pl-[196px] sm:max-lg:pl-[86px] max-sm:pl-[136px] gap-2 max-sm:pr-[32px]">
        <HomeDesc
          className="justify-end"
          delay={1.2}
          desc={
            'sushi and raw fish is my all-time favorite. \n I read all the books “Mr. Sushi King”'
          }
        />
        <div className="flex-grow-0 flex-shrink-0  w-[255px] h-[255px] md:max-lg:w-[200px] md:max-lg:h-[200px] max-md:w-[160px] max-md:h-[160px] overflow-hidden bg-white">
          <img
            alt="sushi and raw fish is my all-time favorite."
            src="/delicious-food/03.png"
            className="object-cover h-full brightness-100"
          />
        </div>
      </div>
    </div>
  )
}

export default DeliciousFoods
