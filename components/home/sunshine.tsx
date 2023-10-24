import Image from "next/image";
import React from "react";

const Sunshine = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[8px] mt-[200px]">
      <div className="flex-grow-0 flex-shrink-0 w-[400px] h-[400px] md:max-lg:w-[300px] md:max-lg:h-[300px] max-md:w-[280px] max-md:h-[280px]  relative overflow-hidden bg-white">
        <Image
          alt="monet's paintings are magnificent.."
          src="/sunshine/01.png"
          layout="fill"
          objectFit="cover"
          className="flex-grow-0 flex-shrink-0 object-cover w-full h-full"
        />
      </div>
      <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-right text-[#4851c4]">
        warm sunshine makes me feel alive.
      </p>
    </div>
  );
};

export default Sunshine;
