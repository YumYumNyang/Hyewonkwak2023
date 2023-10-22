import Image from 'next/image';
import React from 'react';

const AllKindsofDrinks = () => {
  return (
    <div className="flex justify-start items-start gap-[50px] md:max-lg:gap-[20px] max-md:gap-[10px]">
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2 pt-[431px] w-[320px] md:max-lg:w-[240px] max-md:w-[200px] ">
        <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-right text-[#4851c4] w-full">
          I enjoy all kinds of drinks. <br />I especially like “Real Shochu” and “gin”.
        </p>
        <div className="flex-grow-0 flex-shrink-0 h-[320px] w-full md:max-lg:h-[240px]  max-md:h-[200px]  relative overflow-hidden bg-white">
          <Image
            alt="I enjoy all kinds of drinks. I especially like “Real Shochu” and
          “gin”."
            src="/all-kinds-of-drinks/01.png"
            layout="fill"
            objectFit="cover"
            className="flex-grow-0 flex-shrink-0 object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="relative flex flex-col items-end justify-start  flex-grow-0 flex-shrink-0 gap-2 w-[296px] md:max-lg:w-[222px]  max-md:w-[198px]">
        <div className="flex-grow-0 flex-shrink-0  h-[520px] md:max-lg:h-[360px] max-md:h-[360px] w-full relative overflow-hidden bg-white">
          <Image
            alt="In orion beer factory. 2023.05"
            src="/all-kinds-of-drinks/02.png"
            layout="fill"
            objectFit="cover"
            className="flex-grow-0 flex-shrink-0 object-cover w-full h-full"
          />
        </div>
        <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] w-full font-medium text-right text-[#4851c4]">
          In orion beer factory. 2023.05
        </p>
      </div>
    </div>
  );
};

export default AllKindsofDrinks;
