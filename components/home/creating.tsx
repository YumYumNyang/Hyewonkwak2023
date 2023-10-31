import gsap from 'gsap'
import Image from 'next/image'
import React, { useEffect, useLayoutEffect, useRef } from 'react'

const Creating = () => {
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
    <div ref={comp}>
      <div className="relative flex flex-col items-start justify-start flex-grow-0 flex-shrink-0 gap-2 mt-[100px]">
        <div className="item-1 flex-grow-0 flex-shrink-0 w-[306px] h-[306px] md:max-lg:w-[280px] md:max-lg:h-[280px] sm:max-md:w-[200px] sm:max-md:h-[200px] max-sm:w-[160px] max-sm:h-[160px] relative overflow-hidden bg-white">
          <Image
            priority
            sizes="100%"
            fill
            alt="frontend developer"
            src="/creating/01.png"
            className="flex-grow-0 flex-shrink-0 object-cover w-full h-full brightness-100"
          />
        </div>
        <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
          <span className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
            I&apos;m frontend developer,{' '}
          </span>
          <br />
          <span className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
            but I&apos;m also interested in design.
          </span>
          <br />
          <span className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
            I like creating something.
          </span>
        </p>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2 pl-[180px] md:max-lg:pl-[100px] sm:max-md:pl-[40px] max-sm:pl-[100px] mt-10">
        <div className="item-2 flex-grow-0 flex-shrink-0 w-[400px] h-[400px] md:max-lg:w-[360px] md:max-lg:h-[360px] sm:max-md:w-[280px] sm:max-md:h-[280px]  max-sm:w-[180px] max-sm:h-[180px] relative overflow-hidden bg-white">
          <Image
            priority
            sizes="100%"
            fill
            alt=" my deskterior, I can do anything with my computer and a cup of
            coffee!"
            src="/creating/02.png"
            className="flex-grow-0 flex-shrink-0 object-cover w-full h-full brightness-100"
          />
        </div>
        <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
          my deskterior, I can do anything with my computer and a cup of coffee!
        </p>
      </div>
    </div>
  )
}

export default Creating
