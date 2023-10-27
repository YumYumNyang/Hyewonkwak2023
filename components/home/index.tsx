import React, { useEffect, useMemo, useRef, useState } from "react";
import AllKindsofDrinks from "./all-kinds-of-drinks";
import BeautifulThings from "./beautiful-things";
import Creating from "./creating";
import DeliciousFoods from "./delicious-foods";
import FocusingOnSomething from "./focusing-on-something";
import MorningCoffee from "./morning-coffee";
import NewChallenges from "./new-challenges";
import Routine from "./routine";
import Sunshine from "./sunshine";
import Travling from "./travling";
import Water from "./water";
import cx from "classnames";
import useImageLoad from "@/lib/hooks/useImageLoad";
import gsap from "gsap";
const images = [
  "all-kinds-of-drinks/01.png",
  "all-kinds-of-drinks/02.png",
  "beautiful-things/01.jpeg",
  "beautiful-things/02.png",
  "beautiful-things/03.png",
  "creating/01.png",
  "creating/02.png",
  "delicious-food/01.png",
  "delicious-food/02.png",
  "delicious-food/03.png",
  "focusing-on-something/01.png",
  "focusing-on-something/02.png",
  "morning-coffee/01.png",
  "morning-coffee/02.png",
  "new-challenges/01.png",
  "routine/01.png",
  "routine/02.png",
  "sunshine/01.png",
  "travling/01.png",
  "travling/02.png",
  "travling/03.png",
  "water/01.png",
  "water/02.png",
];
const Home = () => {
  const [activeIndex, setActiveIndex] = useState(7);
  const imageLoaded = useImageLoad(images);
  const content = useMemo(() => {
    return [
      { title: "Creating", component: <Creating /> },
      { title: "Water", component: <Water /> },
      { title: "Routine", component: <Routine /> },
      { title: "Travling", component: <Travling /> },
      { title: "New Challenges", component: <NewChallenges /> },
      { title: "Beautiful Things", component: <BeautifulThings /> },
      { title: "Delicious Foods", component: <DeliciousFoods /> },
      { title: "All Kinds of Drinks", component: <AllKindsofDrinks /> },
      { title: "Morning Coffee", component: <MorningCoffee /> },
      { title: "Sunshine", component: <Sunshine /> },
      { title: "Focusing On Something", component: <FocusingOnSomething /> },
    ];
  }, []);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (imageLoaded) {
      let ctx = gsap.context(() => {
        gsap.timeline().from(".title", {
          paddingTop: "100%",
          stagger: 0.1,
          ease: "sine.out",
        });
      }, ref);
      return () => ctx.revert(); // cleanup
    }
  }, [imageLoaded]);

  return !imageLoaded ? (
    <div>loading...</div>
  ) : (
    <div
      ref={ref}
      className="flex justify-end h-full max-w-screen-xl mx-auto max-sm:flex-col max-sm:justify-start"
    >
      <div className="absolute left-0 z-10 top-[20vh] flex flex-col max-sm:top-[100px] pl-10 ">
        {content.map((item, index) => (
          <h1
            onClick={() => setActiveIndex(index)}
            className={cx(
              `flex items-center overflow-hidden whitespace-nowrap transition-[font-size] duration-500 ease-out origin-left hover:text-[#EB5849] h-[46px] hover:text-[42px] pt-1 text-[32px] font-medium text-left cursor-pointer lg:max-xl:text-[28px]   lg:max-xl:hover:text-[36px] lg:max-xl:h-[38px] sm:max-lg:text-[24px]  sm:max-lg:hover:text-[32px] sm:max-lg:h-[38px]  max-sm:text-[28px] max-sm:hover:text-[36px] max-sm:h-[38px]`,
              {
                "text-[#EB5849] text-[42px] lg:max-xl:text-[36px] sm:max-lg:text-[32px] max-sm:text-[36px] ":
                  activeIndex === index,
              },
              { "text-stone-500": activeIndex !== index }
            )}
            key={index}
          >
            <span className="title">{item["title"]}</span>
          </h1>
        ))}
      </div>
      <div className="content relative flex flex-col items-start mx-[32px] py-[10vh] max-sm:mx-auto max-sm:mt-[340px]">
        {content[activeIndex].component}
      </div>
    </div>
  );
};

export default Home;
