import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="flex justify-around max-sm:flex-col-reverse max-w-screen-xl px-10 pt-40 m-auto">
      <div className="flex flex-col">
        <span>
          <span className="flex align-bottom">
            <h1 className="text-xl font-semibold">Hyewon Kwak</h1>
            <h3 className="pl-2 text-center">| she/her</h3>
          </span>
          <span className="text-xs">Frontend Engineer, Creator</span>
        </span>
        <span className="flex flex-col py-4">
          <h2 className="font-medium uppercase text-md">About me</h2>
          <span>December/16 1999</span>
          <span>Based in Korea</span>
          <span>khw121699@gmail.com</span>
        </span>
        <span className="flex flex-col py-4">
          <h2 className="font-medium uppercase text-md">language</h2>
          <span>korean</span>
          <span>english</span>
        </span>
        <span className="flex flex-col py-4">
          <h2 className="font-medium uppercase text-md">experience</h2>
          <span>NEXON KOREA</span>
          <span>Frontend Developer | 2022+</span>
          <span>Ninehire</span>
          <span>Frontend developer Intern</span>
          <span>2020-2021</span>
        </span>
        <span className="flex flex-col py-4">
          <h2 className="font-medium uppercase text-md">skills</h2>
          <div className="flex flex-col py-4">
            <span>Frontend Development</span>
            <span>--</span>
            <span>Javascript Typescript</span>
            <span>Styling | CSS SCSS Styled-Components</span>
            <span>Frameworks | React Vue Svelte Next.js Nuxt.js</span>
            <span>Motion | CSS Animation GSAP</span>
            <span>State Management | Redux React-Query</span>
            <span>Bundler | Webpack Vite</span>
          </div>
          <div className="flex flex-col pb-4">
            <span>Design</span>
            <span>--</span>
            <span>Figma</span>
            <span>Blender</span>
          </div>
        </span>
        <span className="flex flex-col py-4">
          <h2 className="font-medium uppercase text-md">links</h2>
          <span>Github</span>
        </span>
      </div>
      <div className="my-10 flex-grow-0 flex-shrink-0 w-[400px] h-[300px] md:max-lg:w-[360px] md:max-lg:h-[270px] max-md:w-[320px] max-md:h-[240px] relative overflow-hidden bg-white">
        <Image
          layout="fill"
          objectFit="cover"
          src="/about/hyewon.jpg"
          alt="I always jump into new challenges because I like to see myself
        improving."
          className="flex-grow-0 flex-shrink-0 object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default About;
