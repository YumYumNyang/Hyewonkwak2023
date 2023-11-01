import gsap from 'gsap'
import Image from 'next/image'
import React, { useLayoutEffect, useRef } from 'react'
import HomeDesc from '../ui/home-desc'

const Water = () => {
  const comp = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .from(
          '.item-2 img',
          {
            translateX: '-100%',
            filter: 'brightness(0.4)',
            ease: 'power2.out',
            duration: 1.4,
          },
          '0.4',
        )
        .from(
          '.item-1 img',
          {
            translateX: '-110%',
            filter: 'brightness(0.4)',
            ease: 'power2.out',
            duration: 1.4,
          },
          '<+0.2',
        )
    }, comp)
  })
  return (
    <div
      ref={comp}
      className="flex flex-col items-start justify-start mt-[100px] gap-9"
    >
      <div className="item-1 flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 relative gap-2 pl-[231px] max-xl:pl-[120px] md:max-lg:pl-[100px] max-sm:pl-[80px]">
        <div className="flex-grow-0 flex-shrink-0 w-[580px] h-[320px] md:max-lg:w-[435px] md:max-lg:h-[240px] max-md:w-[260px] max-md:h-[160px] relative overflow-hidden bg-white">
          <img
            alt="In okinawa 2023.05"
            src="/water/01.png"
            className="object-cover h-full brightness-100"
          />
        </div>
        <HomeDesc
          delay={1.2}
          className="justify-end"
          desc={'In okinawa 2023.05 '}
        />
      </div>
      <div className="relative flex flex-col items-start justify-start flex-grow-0 flex-shrink-0 gap-2 item-2">
        <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]"></p>
        <HomeDesc
          delay={0.4}
          desc={
            'I love swimming. \n Being in water makes me comfortable, \n relieve stress, refresh my mind.'
          }
        />
        <div className="flex-grow-0 flex-shrink-0 w-[380px] h-[220px] md:max-lg:w-[295px] md:max-lg:h-[165px] max-md:w-[190px] max-md:h-[110px] relative overflow-hidden bg-white">
          <img
            alt="I love swimming. Being in water makes me comfortable, relieve
            stress, refresh my mind."
            src="/water/02.png"
            className="object-cover h-full brightness-100"
          />
        </div>
      </div>
    </div>
  )
}

export default Water
