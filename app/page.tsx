"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const content = [
  {
    title: "creating",
    img: "",
    desc: `The act of creating something makes me as pure as a child.
It always excites me to come up with an idea and make it.

Design, Development is all about creativity, isn’t it?`,
  },
  {
    title: "swimming",
    img: "",
    desc: `I’ve learned how to swim when I was a child. 
Actually I was really good at it! 
I've also participated in a national competition. 
Even though I didn't win a medal, I broke my personal record.
These days, I go swimming about twice a week.

Being in water makes me comfortable, relieve stress, refresh my mind.

Someday, I want to learn free diving. 
`,
  },
  {
    title: "routine",
    img: "",
    desc: `I always make my own routine. 
I wake up at 7:00, go to work.
every tuesday and thursday, I wake up at 6:30, and go swimming at 7:00.

after get to work, I wash my tumbler and drink coffee with mini-kimbob.
back to office, I check what I have to do and watch the news.

this kind of small routine is everywhere in my daliy life.
`,
  },
  {
    title: "Foucusing on something",
    img: "",
    desc: `To be honest, I have a little problem concentrating on something..
but once I start concentrating, I stay there for hours.
I like the feeling of immersing myself in something.
because I can find real fun in the moment of immersion.
`,
  },
  {
    title: "New Challenges",
    img: "",
    desc: `I always look for new challenges and try to learn new things.
Life is limited. I want to do whatever I want to do before I die. 

and doing noting and not devloping my self is not my type. 
I want me to be a better person than before.
So I move forward, make an effort to grow up.`,
  },
  {
    title: "Beautiful Things",
    img: "",
    desc: `I’m fond of beautiful things that please my eyes.
Good design, architecture, photograpy, interaction.. 
is my interests.
`,
  },
  {
    title: "Delicious Foods",
    img: "",
    desc: `Eating delicious food makes me happy!`,
  },
  {
    title: "All Kinds of Drinks",
    img: "",
    desc: `I enjoy drinking alcohol. `,
  },
  {
    title: "Morning Coffee",
    img: "",
    desc: `morning coffee wakes me up and let me start my day well`,
  },
  {
    title: "Chat with people",
    img: "",
    desc: `chatting with my close friends, family, and even a first-timer is my joy.`,
  },
  {
    title: "Delicious Foods",
    img: "",
    desc: `living without delicious foods is totally disaster. `,
  },
  {
    title: "Sunshine",
    img: "",
    desc: `when warm and bright sunshine embraces me, I feel alive.`,
  },
  {
    title: "Kindness",
    img: "",
    desc: `Being kind makes my heart proud.`,
  },
  {
    title: "Solving Problems",
    img: "",
    desc: `I am delighted to persistently bite into a problem and eventually find a solution.`,
  },
  {
    title: "Travling",
    img: "",
    desc: `If you go to a new place, eat new food, and have a different experience, you can realize that the world is a wider and more diverse place than I thought and have a bigger dream.`,
  },
];
export default function Home() {
  const [activeItem, setActiveItem] = useState(content[0]);

  return (
    <div className="flex flex-col-reverse max-w-screen-xl px-4 py-10 m-auto md:flex-row">
      <div className="text-2xl font-medium capitalize sm:text-3xl sm:pr-10 text-primary">
        {content.map((item, index) => (
          <h1
            onMouseEnter={() => setActiveItem(item)}
            onClick={() => setActiveItem(item)}
            className="cursor-pointer sm:pt-2"
            key={index}
          >
            {item.title}
          </h1>
        ))}
      </div>
      <div className="flex flex-col max-w-2xl min-h-[300px] text-secondary">
        <h1 className="pb-10 text-4xl font-bold uppercase text-primary">
          what I love is...
        </h1>
        <img src={activeItem.img} />
        <h3 className="text-xl italic sm:text-2xl font-book">
          {activeItem.title}
        </h3>
        <div className="">{activeItem.desc}</div>
      </div>
    </div>
  );
}
