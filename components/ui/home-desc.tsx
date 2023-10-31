import React, { useEffect } from 'react'

const HomeDesc = ({
  desc,
  className,
}: {
  desc: string
  className?: string
}) => {
  return (
    <p
      className={`overflow-y-hidden flex-grow-0 flex-shrink-0 h-[11px] md:h-[14px] text-[9px] md:text-[12px] w-full font-medium text-right text-[#4851c4] ${className}`}
    >
      {desc.split(' ').map((descEl, index) => (
        <span key={index} className="split-text ">
          {descEl}{' '}
        </span>
      ))}
    </p>
  )
}

export default HomeDesc
