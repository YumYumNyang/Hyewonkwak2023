import React from "react";

const FrameLineLT = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      width="180"
      height="152"
      viewBox="0 0 180 152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="1" x2="180" y2="1" stroke="black" stroke-width="2" />
      <line x1="1" y1="2" x2="1" y2="152" stroke="black" stroke-width="2" />
    </svg>
  );
};

export default FrameLineLT;
