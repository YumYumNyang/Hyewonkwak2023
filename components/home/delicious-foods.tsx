import gsap from "gsap";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";

const DeliciousFoods = () => {
  const comp = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .from(
          ".item-1 img",
          {
            translateY: "-100%",
            filter: "brightness(0.4)",
            ease: "power2.out",
            duration: 1.4,
          },
          "0.4"
        )
        .from(
          ".item-2 img",
          {
            translateY: "100%",
            filter: "brightness(0.4)",
            ease: "power2.out",
            duration: 1.0,
          },
          "<+0.4"
        )
        .from(
          ".item-3 img",
          {
            translateY: "-100%",
            filter: "brightness(0.4)",
            ease: "power2.out",
            duration: 1.4,
          },
          "<+0.4"
        );
    }, comp);

    return () => ctx.revert(); // cleanup
  }, []);
  return (
    <div ref={comp} className="flex flex-col gap-[53px] mt-[80px]">
      <div className="item-1 flex flex-col justify-start items-end pl-[368px] md:max-lg:pl-[268px] sm:max-md:pl-[208px] max-sm:pl-[100px] top-0 gap-2">
        <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
          my fav burgurshop in yangjae.
        </p>
        <div className="flex-grow-0 flex-shrink-0 w-[320px] h-[320px] md:max-lg:w-[240px] md:max-lg:h-[240px] max-md:w-[160px] max-md:h-[160px] relative overflow-hidden bg-white">
          <Image
            priority
            sizes="100%"
            fill
            alt="my fav burgurshop in yangjae."
            src="/delicious-food/02.png"
            className="flex-grow-0 flex-shrink-0 object-cover w-full h-full brightness-100"
          />
        </div>
      </div>
      <div className="item-2 flex flex-col justify-start items-start pl-[-2px] gap-2">
        <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
          I’m interested in foods from different countries.
        </p>
        <div className="flex-grow-0 flex-shrink-0 w-[384px] h-[204px] md:max-lg:w-[244px] md:max-lg:h-[153px] max-md:w-[192px] max-md:h-[102px] relative overflow-hidden bg-white">
          <Image
            priority
            sizes="100%"
            fill
            alt="I’m interested in foods from different countries."
            src="/delicious-food/01.png"
            className="flex-grow-0 flex-shrink-0 object-cover w-full h-full brightness-100"
          />
        </div>
      </div>
      <div className="item-3 flex flex-col justify-start items-end pl-[296px] sm:max-lg:pl-[196px] max-sm:pl-[136px]  gap-2 pr-[124px] max-sm:pr-[32px]">
        <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-right text-[#4851c4]">
          <span className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-right text-[#4851c4]">
            sushi and raw fish is my all-time favorite.
          </span>
          <br />
          <span className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-right text-[#4851c4]">
            I read all the books “Mr. Sushi King”
          </span>
        </p>
        <div className="flex-grow-0 flex-shrink-0  w-[255px] h-[255px] md:max-lg:w-[200px] md:max-lg:h-[200px] max-md:w-[160px] max-md:h-[160px] relative overflow-hidden bg-white">
          <Image
            priority
            sizes="100%"
            fill
            alt="sushi and raw fish is my all-time favorite."
            src="/delicious-food/03.png"
            className="flex-grow-0 flex-shrink-0 object-cover w-full h-full brightness-100"
          />
        </div>
      </div>
    </div>
  );
};

export default DeliciousFoods;