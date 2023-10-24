import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import HomeDesc from '../ui/home-desc';

const AllKindsofDrinks = () => {
  const comp = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .from(
          '.item-1 img',
          {
            translateY: '-100%',
            filter: 'brightness(0.4)',
            ease: 'power2.out',
            duration: 1.4,
          },
          '0.2'
        )
        .from(
          '.item-2 img',
          {
            translateY: '100%',
            filter: 'brightness(0.4)',
            ease: 'power2.out',
            duration: 1.0,
          },
          '<+0.4'
        )
        .from(
          '.item-2 .split-text',
          {
            translateY: '100%',
            ease: 'power2.out',
            duration: 1.0,
          },
          '<+0.4'
        );
    }, comp);

    return () => ctx.revert(); // cleanup
  }, []);
  return (
    <div
      ref={comp}
      className="flex justify-start items-start gap-[50px] md:max-lg:gap-[20px] max-md:gap-[10px] mt-[80px]"
    >
      <div className="item-1 flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2 pt-[431px] w-[320px] md:max-lg:w-[240px] sm:max-md:w-[200px] max-sm:w-[180px] max-sm:pt-[240px] ">
        <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-right text-[#4851c4] w-full">
          I enjoy all kinds of drinks. <br />I especially like “Real Shochu” and “gin”.
        </p>
        <div className="flex-grow-0 flex-shrink-0 h-[320px] w-full md:max-lg:h-[240px]  max-md:h-[200px] max-sm:h-[180px] relative overflow-hidden bg-white">
          <Image
            alt="I enjoy all kinds of drinks. I especially like “Real Shochu” and
          “gin”."
            src="/all-kinds-of-drinks/01.png"
            layout="fill"
            objectFit="cover"
            className="brightness-100 flex-grow-0 flex-shrink-0 object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="item-2 relative flex flex-col items-end justify-start  flex-grow-0 flex-shrink-0 gap-2 w-[296px] md:max-lg:w-[222px]  sm:max-md:w-[198px] max-sm:w-[180px]">
        <div className="img-wrap flex-grow-0 flex-shrink-0  h-[520px] md:max-lg:h-[360px] sm:max-md:h-[360px]  max-sm:h-[320px] w-full relative overflow-hidden bg-white">
          <Image
            alt="In orion beer factory. 2023.05"
            src="/all-kinds-of-drinks/02.png"
            layout="fill"
            objectFit="cover"
            className="brightness-100 absoulute bottom-0 flex-grow-0 flex-shrink-0 object-cover w-full h-full"
          />
        </div>
        <HomeDesc desc="In orion beer factory. 2023.05" />
      </div>
    </div>
  );
};

export default AllKindsofDrinks;
