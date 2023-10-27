import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";

const Sunshine = () => {
  const comp = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.timeline().from(
        ".item-1 img",
        {
          translateY: "-100%",
          filter: "brightness(0.4)",
          ease: "power2.out",
          duration: 1.4,
        },
        "0.4"
      );
    }, comp);

    return () => ctx.revert(); // cleanup
  }, []);
  return (
    <div
      ref={comp}
      className="item-1 flex flex-col justify-center items-center gap-[8px] mt-[200px]"
    >
      <div className="flex-grow-0 flex-shrink-0 w-[400px] h-[400px] md:max-lg:w-[300px] md:max-lg:h-[300px] max-md:w-[280px] max-md:h-[280px]  relative overflow-hidden bg-white">
        <Image
          priority
          sizes="100%"
          fill
          alt="monet's paintings are magnificent.."
          src="/sunshine/01.png"
          className="flex-grow-0 flex-shrink-0 object-cover w-full h-full brightness-100"
        />
      </div>
      <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-right text-[#4851c4]">
        warm sunshine makes me feel alive.
      </p>
    </div>
  );
};

export default Sunshine;
