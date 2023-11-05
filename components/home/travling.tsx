import gsap from 'gsap'
import Image from 'next/image'
import React, { useLayoutEffect, useRef } from 'react'
import HomeDesc from '../ui/home-desc'

const Travling = () => {
  const comp = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
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
        .from(
          '.item-3 img',
          {
            translateY: '100%',
            filter: 'brightness(0.4)',
            ease: 'power2.out',
            duration: 1.0,
          },
          '<+0.4',
        )
    }, comp)
    return () => ctx.revert() // cleanup
  }, [])

  return (
    <div ref={comp} className="flex flex-col">
      <div className="item-1 flex flex-col items-end justify-start gap-2 pl-[400px] md:max-lg:pl-[280px] max-md:pl-[200px] max-sm:mt-[180px]">
        <div className="flex-grow-0 flex-shrink-0 w-[260px] h-[388px] md:max-lg:w-[195px] md:max-lg:h-[291px] max-md:w-[130px] max-md:h-[194px] relative overflow-hidden bg-white">
          <img
            alt="In London, 2023.08"
            src="/travling/03.png"
            className="object-cover h-full brightness-100"
          />
        </div>
        <HomeDesc
          delay={0.4}
          desc={'In London, 2023.08'}
          className="justify-end"
        />
      </div>
      <div className="flex items-end gap-4">
        <div className="flex flex-col items-start justify-start gap-2 item-2">
          <HomeDesc delay={0.8} desc={'In Paris, 2023.08'} />
          <div className="flex-grow-0 flex-shrink-0 w-[260px] h-[460px] md:max-lg:w-[195px] md:max-lg:h-[345px] max-md:w-[130px] max-md:h-[230px] relative overflow-hidden bg-white">
            <img
              alt="In Paris, 2023.08"
              src="/travling/02.png"
              className="object-cover h-full brightness-100"
            />
          </div>
        </div>
        <div className="flex flex-col items-end justify-start gap-2 item-3">
          <HomeDesc delay={1.2} desc={'what a beautiful sunset!'} />
          <div className="flex-grow-0 flex-shrink-0 w-[160px] h-[268px] md:max-lg:w-[120px] md:max-lg:h-[207px] max-md:w-[80px] max-md:h-[134px] relative overflow-hidden bg-white">
            <img
              alt="what a beautiful sunset!"
              src="/travling/01.png"
              className="object-cover h-full brightness-100"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Travling
