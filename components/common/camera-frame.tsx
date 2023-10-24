import React from 'react';
import FrameInline from '../icon/frame-inline';
import FrameLineLB from '../icon/frameline-lb';
import FrameLineLT from '../icon/frameline-lt';
import FrameLineRB from '../icon/frameline-rb';
import FrameLineRT from '../icon/frameline-rt';
import Header from './header';
import ScrollIndicator from '../icon/scroll-indicator';
import CenterBox from '../icon/center-box';

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
      <div className="z-50 pointer-events-none opacity-20 fixed bg-zinc-600 w-full h-[0.2px] top-[33vh]" />
      <div className="z-50 pointer-events-none opacity-20 fixed bg-zinc-600 w-full h-[0.2px] top-[66vh]" />
      <div className="z-50 pointer-events-none opacity-20 fixed bg-zinc-600 top-0 w-[0.2px] h-full left-[33%]" />
      <div className="z-50 pointer-events-none opacity-20 fixed bg-zinc-600 top-0 w-[0.2px] h-full left-[66%]" />
      <ScrollIndicator className="fixed z-50 bottom-2 left-[50%] ml-[-136px] w-[273px] max-sm:w-[120px] max-sm:ml-[-60px] " />
      <CenterBox className="fixed z-52 left-[50%] top-[50vh] w-[100px] h-[60px] ml-[-50px] mt-[-30px] max-sm:opacity-50" />
      {children}
    </div>
  );
};

export default CameraFrame;
