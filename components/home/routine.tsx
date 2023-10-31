import gsap from 'gsap'
import Image from 'next/image'
import React, { useLayoutEffect, useRef } from 'react'

const Routine = () => {
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
    <div
      ref={comp}
      className="flex flex-col justify-start items-start gap-[63px] mt-[100px]"
    >
      <div className="relative flex flex-col items-start justify-start flex-grow-0 flex-shrink-0 gap-2 item-1">
        <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
          <span className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
            Routine makes me sustain healthy life.
          </span>
          <br />
          <span className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
            I go swimming every twice a week.
          </span>
        </p>
        <div className="flex-grow-0 flex-shrink-0  w-[380px] h-[220px] md:max-lg:w-[285px] md:max-lg:h-[165px] max-md:w-[280px] max-md:h-[165px] relative overflow-hidden bg-white">
          <Image
            priority
            sizes="100%"
            fill
            alt="Routine makes me sustain healthy life."
            src="/routine/02.png"
            className="flex-grow-0 flex-shrink-0 object-cover w-full h-full brightness-100"
          />
        </div>
      </div>
      <div className="item-2 flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 relative gap-2 pl-[306px]  md:max-lg:pl-[180px] max-md:pl-[100px] ">
        <div className="flex-grow-0 flex-shrink-0 w-[280px] h-[280px] md:max-lg:w-[260px] md:max-lg:h-[260px] max-md:w-[220px] max-md:h-[220px] relative overflow-hidden bg-white">
          <Image
            priority
            sizes="100%"
            fill
            alt="before starting work, I drink a cup of coffee."
            src="/routine/01.png"
            className="flex-grow-0 flex-shrink-0 object-cover w-full h-full brightness-100"
          />
        </div>
        <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
          before starting work, I drink a cup of coffee.
        </p>
      </div>
    </div>
  )
}

export default Routine
