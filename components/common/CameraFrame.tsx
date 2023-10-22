import React from "react";
import FrameInline from "../icon/FrameInline";
import FrameLineLB from "../icon/FrameLineLB";
import FrameLineLT from "../icon/FrameLineLT";
import FrameLineRB from "../icon/FrameLineRB";
import FrameLineRT from "../icon/FrameLineRT";
import Header from "./Header";

const CameraFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="box-border relative w-full h-full">
      <Header />
      <div className="fixed z-50 w-full h-full p-4 pointer-events-none ">
        <FrameLineLT className="w-[120px] h-[100px] sm:w-[180px]:h-[150px] absolute top-4 left-4" />
        <FrameLineLB className="w-[120px] h-[100px] sm:w-[180px]:h-[150px] absolute bottom-4 left-4" />
        <FrameLineRT className="w-[120px] h-[100px] sm:w-[180px]:h-[150px] absolute top-4 right-4" />
        <FrameLineRB className="w-[120px] h-[100px] sm:w-[180px]:h-[150px] absolute bottom-4 right-4" />
      </div>
      <div className="pointer-events-none opacity-25 fixed bg-zinc-600 w-full h-[0.2px] top-[33vh]" />
      <div className="pointer-events-none opacity-25 fixed bg-zinc-600 w-full h-[0.2px] top-[66vh]" />
      <div className="pointer-events-none opacity-25 fixed bg-zinc-600 top-0 w-[0.2px] h-full left-[33%]" />
      <div className="pointer-events-none opacity-25 fixed bg-zinc-600 top-0 w-[0.2px] h-full left-[66%]" />
      {children}
    </div>
  );
};

export default CameraFrame;
