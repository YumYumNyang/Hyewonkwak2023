import React, { useMemo, useState } from "react";
import AllKindsofDrinks from "./AllKindsofDrinks";
import BeautifulThings from "./BeautifulThings";
import Creating from "./Creating";
import DeliciousFoods from "./DeliciousFoods";
import FocusingOnSomething from "./FocusingOnSomething";
import MorningCoffee from "./MorningCoffee";
import NewChallenges from "./NewChallenges";
import Routine from "./Routine";
import Sunshine from "./Sunshine";
import Travling from "./Travling";
import Water from "./Water";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(10);
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

  return (
    <div className="flex justify-between h-full max-w-screen-xl mx-auto max-sm:justify-start max-sm:flex-col">
      <div className="flex flex-col mt-[20vh] max-sm:mt-[100px] px-10">
        {content.map((item, index) => (
          <h1
            // onMouseEnter={() => setActiveIndex(index)}
            // onClick={() => setActiveIndex(index)}
            className="pt-1 text-4xl font-medium text-left cursor-pointer lg:max-xl:text-3xl md:max-lg:text-2xl sm:max-md:text-2xl max-sm:text-md text-stone-500"
            key={index}
          >
            {item["title"]}
          </h1>
        ))}
      </div>
      <div className="relative flex flex-col items-start mx-[32px] py-[10vh] max-sm:mx-auto">
        {content[activeIndex].component}
      </div>
    </div>
  );
};

export default Home;
