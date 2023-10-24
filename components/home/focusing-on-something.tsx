import Image from 'next/image';
import React from 'react';

const FocusingOnSomething = () => {
  return (
    <div className="flex flex-col gap-[44px] mt-[80px]">
      <div className="flex flex-col justify-start items-start gap-2 pl-[180px] sm:max-md:pl-[100px] max-sm:pl-[80px]">
        <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
          I can find real fun in the moment of immersion.
        </p>
        <div className="flex-grow-0 flex-shrink-0 w-[360px] h-[360px] md:max-lg:w-[280px] md:max-lg:h-[280px] max-md:w-[240px] max-md:h-[240px]  relative overflow-hidden bg-white">
          <Image
            alt="monet's paintings are magnificent.."
            src="/focusing-on-something/01.png"
            layout="fill"
            objectFit="cover"
            className="flex-grow-0 flex-shrink-0 object-cover w-full h-full w-[362px] h-[346px] object-cover"
          />
        </div>
      </div>
      <div className="flex-grow-0 flex-shrink-0 w-[280px] h-[240px] md:max-lg:w-[210px] md:max-lg:h-[180px] max-md:w-[210px] max-md:h-[180px]  relative overflow-hidden bg-white">
        <Image
          alt="monet's paintings are magnificent.."
          src="/focusing-on-something/02.png"
          layout="fill"
          objectFit="cover"
          className="absolute flex-grow-0 flex-shrink-0 object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default FocusingOnSomething;
