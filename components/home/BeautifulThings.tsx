import Image from "next/image";
import React from "react";

const BeautifulThings = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-center gap-2 mt-28">
        <div className="flex-grow-0 flex-shrink-0 w-[620px] h-[320px] md:max-lg:w-[465px] md:max-lg:h-[240px] max-md:w-[310px] max-md:h-[160px] relative overflow-hidden bg-white">
          <Image
            layout="fill"
            objectFit="cover"
            alt=" In Natalie Karpushenko photo exhibition 2023.05"
            src="/beaufitul-things/01.jpeg"
            className="w-full h-full absolute left-[-57px] top-[-17px] object-cover"
          />
        </div>
        <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
          In Natalie Karpushenko photo exhibition 2023.05
        </p>
      </div>
      <div className="flex flex-col justify-center items-end ml-[334px] md:max-lg:ml-[250.5px]  max-md:ml-[160px] mt-[40px] md:max-lg:mt-[30px] max-md:mt-[20px] gap-2">
        <div className="flex-grow-0 flex-shrink-0 w-[375px] h-[210px]  md:max-lg:w-[281.25px] md:max-lg:h-[157.5px] max-md:w-[165px] max-md:h-[105px] relative overflow-hidden bg-white">
          <Image
            layout="fill"
            objectFit="cover"
            alt="In orangerie museum 2023.05"
            src="/beaufitul-things/02.png"
            className="flex-grow-0 flex-shrink-0 object-cover w-full h-full"
          />
        </div>
        <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 relative px-2.5">
          <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
            In orangerie museum 2023.05
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-end ml-[17px] mt-[20px] md:max-lg:ml-[8px] md:max-lg:mt-[10px] max-md:ml-[8px] max-md:mt-[0px] gap-2">
        <div className="flex-grow-0 flex-shrink-0 w-[240px] h-[240px] md:max-lg:w-[160px] md:max-lg:h-[160px] max-md:w-[140px] max-md:h-[140px]  relative overflow-hidden bg-white">
          <Image
            alt="monet's paintings are magnificent.."
            src="/beaufitul-things/03.png"
            layout="fill"
            objectFit="cover"
            className="flex-grow-0 flex-shrink-0 object-cover w-full h-full"
          />
        </div>
        <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
          monet&apos;s paintings are magnificent..
        </p>
      </div>
    </>
  );
};

export default BeautifulThings;
