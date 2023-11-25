import gsap from 'gsap'
import React, { useEffect, useMemo, useRef } from 'react'

const HomeDesc = ({
  delay,
  desc,
  startAnimation,
  className,
}: {
  delay: number
  desc: string
  startAnimation?: boolean
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      const texts = gsap.utils.toArray('.split-text', ref.current)
      if (startAnimation)
        gsap.from(texts, {
          translateY: '100%',
          stagger: 0.1,
          delay: delay,
        })
    }
  }, [startAnimation, ref, delay])

  return (
    <div
      ref={ref}
      className={`whitespace-pre flex flex-wrap text-[9px] md:text-[12px] w-full font-medium text-right text-[#4851c4] ${className}`}
    >
      {desc.split(' ').map((descEl, index) =>
        descEl == '\n' ? (
          <span key={index} className="w-full" />
        ) : (
          <span
            key={index}
            className="flex h-[11px] md:h-[18px] overflow-y-hidden"
          >
            <span className="split-text">{descEl} </span>
          </span>
        ),
      )}
    </div>
  )
}

export default HomeDesc
