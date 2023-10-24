import React from 'react';

const HomeDesc = ({ desc, className }: { desc: string; className?: string }) => {
  return (
    <p
      className={`flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] w-full font-medium text-right text-[#4851c4] ${className}`}
    >
      {desc.split(' ').map((descEl, index) => (
        <span key={index} className="split-text h-[11px] md:h-[14px] overflow-hidden">
          {descEl}{' '}
        </span>
      ))}
    </p>
  );
};

export default HomeDesc;
