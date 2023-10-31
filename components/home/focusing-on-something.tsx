import gsap from 'gsap'
import Image from 'next/image'
import React, { useLayoutEffect, useRef } from 'react'

const FocusingOnSomething = () => {
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
    }, comp)

    return () => ctx.revert() // cleanup
  }, [])
  return (
    <div ref={comp} className="flex flex-col gap-[44px] mt-[80px]">
      <div className="item-1 flex flex-col justify-start items-start gap-2 pl-[180px] sm:max-md:pl-[100px] max-sm:pl-[80px]">
        <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
          I can find real fun in the moment of immersion.
        </p>
        <div className="flex-grow-0 flex-shrink-0 w-[360px] h-[360px] md:max-lg:w-[280px] md:max-lg:h-[280px] max-md:w-[240px] max-md:h-[240px]  relative overflow-hidden bg-white">
          <Image
            priority
            sizes="100%"
            fill
            alt=""
            src="/focusing-on-something/01.png"
            className="flex-grow-0 flex-shrink-0 object-cover w-full h-full w-[362px] h-[346px] object-cover brightness-100"
          />
        </div>
      </div>
      <div className="item-2 flex-grow-0 flex-shrink-0 w-[280px] h-[240px] md:max-lg:w-[210px] md:max-lg:h-[180px] max-md:w-[210px] max-md:h-[180px]  relative overflow-hidden bg-white">
        <Image
          priority
          sizes="100%"
          style={{
            width: '100%',
            height: '100%',
          }}
          fill
          alt=""
          src="/focusing-on-something/02.png"
          className="absolute flex-grow-0 flex-shrink-0 object-cover w-full h-full brightness-100"
        />
      </div>
    </div>
  )
}

export default FocusingOnSomething
