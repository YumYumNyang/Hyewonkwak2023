import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const HomeDesc = ({
  delay,
  desc,
  className,
}: {
  delay?: number
  desc: string
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (delay && ref.current) {
      gsap.from(ref.current.querySelectorAll('.split-text'), {
        translateY: '100%',
        stagger: 0.1,
        delay: delay,
      })
    }
  }, [ref, delay])

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
            className="flex h-[11px] md:h-[14px] overflow-y-hidden"
          >
            <span className="split-text">{descEl} </span>
          </span>
        ),
      )}
    </div>
  )
}

export default HomeDesc
