import Image from "next/image";
import React from "react";

const Routine = () => {
  return (
    <>
      <div className="flex flex-col justify-start items-start gap-[63px] mt-[100px]">
        <div className="relative flex flex-col items-start justify-start flex-grow-0 flex-shrink-0 gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
            <span className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
              Routine makes me sustain healthy life.
            </span>
            <br />
            <span className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
              I go swimming every twice a week.
            </span>
          </p>
          <div className="flex-grow-0 flex-shrink-0  w-[380px] h-[220px] md:max-lg:w-[285px] md:max-lg:h-[165px] max-md:w-[280px] max-md:h-[165px] relative overflow-hidden bg-white">
            <Image
              layout="fill"
              objectFit="cover"
              alt="Routine makes me sustain healthy life."
              src="/routine/02.png"
              className="flex-grow-0 flex-shrink-0 object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 relative gap-2 pl-[306px]  md:max-lg:pl-[180px] max-md:pl-[100px] ">
          <div className="flex-grow-0 flex-shrink-0 w-[280px] h-[280px] md:max-lg:w-[260px] md:max-lg:h-[260px] max-md:w-[220px] max-md:h-[220px] relative overflow-hidden bg-white">
            <Image
              layout="fill"
              objectFit="cover"
              alt="before starting work, I drink a cup of coffee."
              src="/routine/01.png"
              className="flex-grow-0 flex-shrink-0 object-cover w-full h-full"
            />
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
            before starting work, I drink a cup of coffee.
          </p>
        </div>
      </div>
      ;
    </>
  );
};

export default Routine;
