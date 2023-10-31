import Image from 'next/image'
import gsap from 'gsap'
import React, { useLayoutEffect, useRef } from 'react'
const NewChallenges = () => {
  const comp = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.timeline().from(
        '.item-1 img',
        {
          translateY: '-100%',
          filter: 'brightness(0.4)',
          ease: 'power2.out',
          duration: 1.4,
        },
        '0.4',
      )
    }, comp)

    return () => ctx.revert() // cleanup
  }, [])
  return (
    <div
      ref={comp}
      className="item-1 relative flex flex-col items-start justify-start gap-2 mt-[100px]"
    >
      <p className=" flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left  md:max-lg:w-[280px] max-md:w-[200px] text-[#4851c4]">
        I always jump into new challenges because I like to see myself
        improving.
      </p>
      <div className="flex-grow-0 flex-shrink-0 w-[350px] h-[350px] md:max-lg:w-[280px] md:max-lg:h-[280px] sm:max-md:w-[200px] sm:max-md:h-[200px] relative overflow-hidden bg-white">
        <Image
          priority
          sizes="100%"
          fill
          alt="I always jump into new challenges because I like to see myself
        improving."
          src="/new-challenges/01.png"
          className="flex-grow-0 flex-shrink-0 object-cover w-full h-full brightness-100"
        />
      </div>
      <div className="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
        <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
          this year, I’ve got life guard certificate.
        </p>
      </div>
    </div>
  )
}

export default NewChallenges
