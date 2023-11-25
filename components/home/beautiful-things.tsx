import useGsapContext from '@/lib/hooks/useGsapContext'
import gsap from 'gsap'
import Image from 'next/image'
import React, { useLayoutEffect, useRef } from 'react'
import HomeDesc from '../ui/home-desc'
import useImageLoad from '@/lib/hooks/useImageLoad'

const BeautifulThings = () => {
  const comp = useRef<HTMLDivElement>(null)
  const imageLoaded = useImageLoad(comp)
  const ctx = useGsapContext(comp)
  useLayoutEffect(() => {
    if (imageLoaded) {
      ctx.add(() => {
        gsap
          .timeline()
          .to(comp.current, { opacity: 1 })
          .from(
            '.item-1 img',
            {
              translateX: '-100%',
              filter: 'brightness(0.4)',
              ease: 'power2.out',
              duration: 2,
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
      })
    } else {
      gsap.set(comp.current, { opacity: 0 })
    }
    return () => ctx.revert() // cleanup
  }, [ctx, imageLoaded])
  return (
    <div ref={comp}>
      <div className="flex flex-col items-start justify-center gap-2 mt-20 item-1 max-sm:mt-[180px]">
        <div className="flex-grow-0 flex-shrink-0 w-[620px] h-[320px] md:max-lg:w-[465px] md:max-lg:h-[240px] max-md:w-[310px] max-md:h-[160px] overflow-hidden bg-white">
          <img
            alt=" In Natalie Karpushenko photo exhibition 2023.05"
            src="./beautiful-things/01.png"
            className="object-cover h-full brightness-100"
          />
        </div>
        <HomeDesc
          startAnimation={imageLoaded}
          delay={0.4}
          desc={'In Natalie Karpushenko photo exhibition 2023.05'}
        />
      </div>
      <div className="item-2 flex flex-col justify-center items-end ml-[334px] md:max-lg:ml-[250.5px]  max-md:ml-[160px] mt-[40px] md:max-lg:mt-[30px] max-md:mt-[20px] gap-2">
        <div className="flex-grow-0 flex-shrink-0 w-[375px] h-[210px]  md:max-lg:w-[281.25px] md:max-lg:h-[157.5px] max-md:w-[165px] max-md:h-[105px] relative overflow-hidden bg-white">
          <img
            alt="In orangerie museum 2023.05"
            src="/beautiful-things/02.png"
            className="object-cover h-full brightness-100"
          />
        </div>
        <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 relative px-2.5">
          <HomeDesc
            startAnimation={imageLoaded}
            delay={1}
            desc={'In orangerie museum 2023.05'}
          />
        </div>
      </div>
      <div className="item-3 flex flex-col justify-start ml-[17px] mt-[20px] md:max-lg:ml-[8px] md:max-lg:mt-[10px] max-md:ml-[8px] max-md:mt-[0px] gap-2">
        <div className="flex-grow-0 flex-shrink-0 w-[240px] h-[240px] md:max-lg:w-[160px] md:max-lg:h-[160px] max-md:w-[140px] max-md:h-[140px]  relative overflow-hidden bg-white">
          <img
            alt="monet's paintings are magnificent.."
            src="/beautiful-things/03.png"
            className="object-cover h-full brightness-100"
          />
        </div>
        <HomeDesc
          startAnimation={imageLoaded}
          delay={1.4}
          desc={'monet&apos;s paintings are magnificent..'}
        />
      </div>
    </div>
  )
}

export default BeautifulThings
