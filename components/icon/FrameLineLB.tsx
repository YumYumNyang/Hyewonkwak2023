import React from "react";

const FrameLineLB = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      width="180"
      height="152"
      viewBox="0 0 180 152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        y1="-1"
        x2="180"
        y2="-1"
        transform="matrix(1 0 0 -1 0 150)"
        stroke="black"
        stroke-width="2"
      />
      <line
        y1="-1"
        x2="150"
        y2="-1"
        transform="matrix(0 -1 -1 0 0 150)"
        stroke="black"
        stroke-width="2"
      />
    </svg>
  );
};

export default FrameLineLB;
