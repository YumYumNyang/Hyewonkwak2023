import Image from "next/image";
import React from "react";

const NewChallenges = () => {
  return (
    <div className="relative flex flex-col items-start justify-start gap-2 mt-[200px]">
      <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left  md:max-lg:w-[280px] max-md:w-[200px] text-[#4851c4]">
        I always jump into new challenges because I like to see myself
        improving.
      </p>
      <div className="flex-grow-0 flex-shrink-0 w-[350px] h-[350px] md:max-lg:w-[280px] md:max-lg:h-[280px] sm:max-md:w-[200px] sm:max-md:h-[200px] relative overflow-hidden bg-white">
        <Image
          layout="fill"
          objectFit="cover"
          alt="I always jump into new challenges because I like to see myself
        improving."
          src="/new-challenges/01.png"
          className="flex-grow-0 flex-shrink-0 object-cover w-full h-full"
        />
      </div>
      <div className="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
        <p className="flex-grow-0 flex-shrink-0 text-[9px] md:text-[12px] font-medium text-left text-[#4851c4]">
          this year, I’ve got life guard certificate.
        </p>
      </div>
    </div>
  );
};

export default NewChallenges;
