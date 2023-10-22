import Image from "next/image";
import React from "react";

const Water = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-start mt-[100px] gap-9">
        <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 relative gap-2 pl-[231px] max-xl:pl-[120px] md:max-lg:pl-[100px] max-sm:pl-[80px]">
          <div className="flex-grow-0 flex-shrink-0 w-[580px] h-[320px] md:max-lg:w-[435px] md:max-lg:h-[240px] max-md:w-[260px] max-md:h-[160px] relative overflow-hidden bg-white">
            <Image
              layout="fill"
              objectFit="cover"
              alt="In okinawa 2023.05"
              src="/water/01.png"
              className="flex-grow-0 flex-shrink-0 object-cover w-full h-full"
            />
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
            In okinawa 2023.05{" "}
          </p>
        </div>
        <div className="relative flex flex-col items-start justify-start flex-grow-0 flex-shrink-0 gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
            I love swimming. Being in water makes me comfortable, relieve
            stress, refresh my mind.
          </p>
          <div className="flex-grow-0 flex-shrink-0 w-[380px] h-[220px] md:max-lg:w-[295px] md:max-lg:h-[165px] max-md:w-[190px] max-md:h-[110px] relative overflow-hidden bg-white">
            <Image
              layout="fill"
              objectFit="cover"
              alt="I love swimming. Being in water makes me comfortable, relieve
            stress, refresh my mind."
              src="/water/02.png"
              className="flex-grow-0 flex-shrink-0 object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Water;
