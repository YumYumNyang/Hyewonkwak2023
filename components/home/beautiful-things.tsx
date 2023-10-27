import gsap from "gsap";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";

const BeautifulThings = () => {
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
            translateY: "100%",
            filter: "brightness(0.4)",
            ease: "power2.out",
            duration: 1.0,
          },
          "<+0.4"
        );
    }, comp);

    return () => ctx.revert(); // cleanup
  }, []);
  return (
    <div ref={comp}>
      <div className="flex flex-col items-start justify-center gap-2 item-1 mt-28">
        <div className="flex-grow-0 flex-shrink-0 w-[620px] h-[320px] md:max-lg:w-[465px] md:max-lg:h-[240px] max-md:w-[310px] max-md:h-[160px] relative overflow-hidden bg-white">
          <Image
            priority
            sizes="100%"
            fill
            alt=" In Natalie Karpushenko photo exhibition 2023.05"
            src="/beaufitul-things/01.jpeg"
            className="w-full h-full absolute left-[-57px] top-[-17px] object-cover brightness-100"
          />
        </div>
        <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
          In Natalie Karpushenko photo exhibition 2023.05
        </p>
      </div>
      <div className="item-2 flex flex-col justify-center items-end ml-[334px] md:max-lg:ml-[250.5px]  max-md:ml-[160px] mt-[40px] md:max-lg:mt-[30px] max-md:mt-[20px] gap-2">
        <div className="flex-grow-0 flex-shrink-0 w-[375px] h-[210px]  md:max-lg:w-[281.25px] md:max-lg:h-[157.5px] max-md:w-[165px] max-md:h-[105px] relative overflow-hidden bg-white">
          <Image
            priority
            sizes="100%"
            fill
            alt="In orangerie museum 2023.05"
            src="/beaufitul-things/02.png"
            className="flex-grow-0 flex-shrink-0 object-cover w-full h-full brightness-100"
          />
        </div>
        <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 relative px-2.5">
          <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
            In orangerie museum 2023.05
          </p>
        </div>
      </div>
      <div className="item-3 flex flex-col justify-start ml-[17px] mt-[20px] md:max-lg:ml-[8px] md:max-lg:mt-[10px] max-md:ml-[8px] max-md:mt-[0px] gap-2">
        <div className="flex-grow-0 flex-shrink-0 w-[240px] h-[240px] md:max-lg:w-[160px] md:max-lg:h-[160px] max-md:w-[140px] max-md:h-[140px]  relative overflow-hidden bg-white">
          <Image
            priority
            sizes="100%"
            fill
            alt="monet's paintings are magnificent.."
            src="/beaufitul-things/03.png"
            className="flex-grow-0 flex-shrink-0 object-cover w-full h-full brightness-100"
          />
        </div>
        <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
          monet&apos;s paintings are magnificent..
        </p>
      </div>
    </div>
  );
};

export default BeautifulThings;
