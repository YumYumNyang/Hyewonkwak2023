import React from 'react'

const Pin = ({ className }: { className: string }) => {
  return (
    <svg
      className={`w-[7px] h-[7px] ${className}`}
      width={7}
      height={7}
      viewBox="0 0 7 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <circle cx="3.5" cy="3.5" r="3.5" fill="#78716C" />
      <circle cx="3.5" cy="3.5" r="2.5" fill="#F5F5F4" />
    </svg>
  )
}

export default Pin
