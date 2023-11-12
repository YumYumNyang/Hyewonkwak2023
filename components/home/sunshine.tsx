import useGsapContext from '@/lib/hooks/useGsapContext'
import gsap from 'gsap'
import Image from 'next/image'
import React, { useLayoutEffect, useRef } from 'react'
import HomeDesc from '../ui/home-desc'

const Sunshine = () => {
  const comp = useRef<HTMLDivElement>(null)
  const ctx = useGsapContext(comp)
  useLayoutEffect(() => {
    ctx.add(() => {
      gsap.timeline().from(
        '.item-1 img',
        {
          translateY: '-100%',
          filter: 'brightness(0.4)',
          ease: 'power2.out',
          duration: 1.8,
        },
        '0.4',
      )
    })

    return () => ctx.revert() // cleanup
  }, [])
  return (
    <div
      ref={comp}
      className="item-1 flex flex-col justify-center items-center gap-[8px] mt-[200px] max-sm:mt-[180px] "
    >
      <div className="flex-grow-0 flex-shrink-0 w-[400px] h-[400px] md:max-lg:w-[300px] md:max-lg:h-[300px] max-md:w-[280px] max-md:h-[280px]  relative overflow-hidden bg-white">
        <img
          alt="monet's paintings are magnificent.."
          src="/sunshine/01.png"
          className="object-cover h-full brightness-100"
        />
      </div>
      <HomeDesc
        className="justify-end"
        delay={0.4}
        desc={'warm sunshine makes me feel alive.'}
      />
    </div>
  )
}

export default Sunshine
