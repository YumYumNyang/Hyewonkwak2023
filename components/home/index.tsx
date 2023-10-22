import React, { useEffect, useMemo, useState } from 'react';
import AllKindsofDrinks from './all-kinds-of-drinks';
import BeautifulThings from './beautiful-things';
import Creating from './creating';
import DeliciousFoods from './delicious-foods';
import FocusingOnSomething from './focusing-on-something';
import MorningCoffee from './morning-coffee';
import NewChallenges from './new-challenges';
import Routine from './routine';
import Sunshine from './sunshine';
import Travling from './travling';
import Water from './water';
import cx from 'classnames';
const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const content = useMemo(() => {
    return [
      { title: 'Creating', component: <Creating /> },
      { title: 'Water', component: <Water /> },
      { title: 'Routine', component: <Routine /> },
      { title: 'Travling', component: <Travling /> },
      { title: 'New Challenges', component: <NewChallenges /> },
      { title: 'Beautiful Things', component: <BeautifulThings /> },
      { title: 'Delicious Foods', component: <DeliciousFoods /> },
      { title: 'All Kinds of Drinks', component: <AllKindsofDrinks /> },
      { title: 'Morning Coffee', component: <MorningCoffee /> },
      { title: 'Sunshine', component: <Sunshine /> },
      { title: 'Focusing On Something', component: <FocusingOnSomething /> },
    ];
  }, []);

  return (
    <div className="flex justify-between h-full max-w-screen-xl mx-auto max-sm:justify-start max-sm:flex-col">
      <div className="flex flex-col mt-[20vh] max-sm:mt-[100px] px-10 ">
        {content.map((item, index) => (
          <h1
            onClick={() => setActiveIndex(index)}
            className={cx(
              'whitespace-nowrap transition duration-500 ease-out origin-left hover:text-[#EB5849] hover:scale-125 pt-1 text-4xl font-medium text-left cursor-pointer lg:max-xl:text-3xl md:max-lg:text-2xl sm:max-md:text-2xl max-sm:text-md ',
              { 'text-[#EB5849] scale-125': activeIndex === index },
              { 'text-stone-500': activeIndex !== index }
            )}
            key={index}
          >
            {item['title']}
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
