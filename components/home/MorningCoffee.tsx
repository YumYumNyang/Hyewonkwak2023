import Image from "next/image";
import React from "react";

const MorningCoffee = () => {
  return (
    <div className="flex flex-col justify-start items-start relative gap-[25px] mt-[100px]">
      <div className="flex-grow-0 flex-shrink-0 w-[343px] h-[343px] md:max-lg:w-[280px] md:max-lg:h-[280px] max-md:w-[200px] max-md:h-[200px]  relative overflow-hidden bg-white">
        <Image
          alt="I literally can’t live without coffee!"
          src="/morning-coffee/02.png"
          layout="fill"
          objectFit="cover"
          className="flex-grow-0 flex-shrink-0 object-cover w-full h-full"
        />
      </div>
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative pl-[260px] md:max-lg:pl-[160px] max-md:pl-[140px]">
        <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-right text-[#4851c4]">
          I literally can’t live without coffee!
        </p>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 pl-[344px]  md:max-lg:pl-[244px] max-md:pl-[184px]">
        <div className="flex-grow-0 flex-shrink-0 w-[248px] h-[184px] md:max-lg:w-[192px] md:max-lg:h-[138px]  relative overflow-hidden bg-white">
          <Image
            alt="I literally can’t live without coffee!"
            src="/morning-coffee/01.png"
            layout="fill"
            objectFit="cover"
            className="flex-grow-0 flex-shrink-0 object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MorningCoffee;
