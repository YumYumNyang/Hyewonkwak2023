import React from 'react'

const FrameLineRB = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      width="180"
      height="152"
      viewBox="0 0 180 152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="180" y1="151" y2="151" stroke="black" strokeWidth="2" />
      <line x1="179" y1="150" x2="179" stroke="black" strokeWidth="2" />
    </svg>
  )
}

export default FrameLineRB
