import Image from "next/image";
import React from "react";

const Travling = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-end justify-start gap-2 pl-[400px] md:max-lg:pl-[280px] max-md:pl-[200px]">
        <div className="flex-grow-0 flex-shrink-0 w-[260px] h-[388px] md:max-lg:w-[195px] md:max-lg:h-[291px] max-md:w-[130px] max-md:h-[194px] relative overflow-hidden bg-white">
          <Image
            layout="fill"
            objectFit="cover"
            alt="In London, 2023.08"
            src="/travling/03.png"
            className="flex-grow-0 flex-shrink-0 object-cover w-full h-full"
          />
        </div>
        <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
          In London, 2023.08
        </p>
      </div>
      <div className="flex items-end gap-4">
        <div className="flex flex-col items-start justify-start gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
            In Paris, 2023.08
          </p>
          <div className="flex-grow-0 flex-shrink-0 w-[260px] h-[460px] md:max-lg:w-[195px] md:max-lg:h-[345px] max-md:w-[130px] max-md:h-[230px] relative overflow-hidden bg-white">
            <Image
              layout="fill"
              objectFit="cover"
              alt="In Paris, 2023.08"
              src="/travling/02.png"
              className="flex-grow-0 flex-shrink-0 object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col items-end justify-start gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
            what a beautiful sunset!
          </p>
          <div className="flex-grow-0 flex-shrink-0 w-[160px] h-[268px] md:max-lg:w-[120px] md:max-lg:h-[207px] max-md:w-[80px] max-md:h-[134px] relative overflow-hidden bg-white">
            <Image
              layout="fill"
              objectFit="cover"
              alt="what a beautiful sunset!"
              src="/travling/01.png"
              className="flex-grow-0 flex-shrink-0 object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travling;