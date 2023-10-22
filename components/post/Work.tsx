'use client';

import { Post } from '@/types/notion';
import React from 'react';
import WavePlane from '../three/WavePlane';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Scroll, ScrollControls } from '@react-three/drei';
import WavesScene from '../three/WavesScene';

const Work = ({ posts }: { posts: Post[] }) => {
  return <div className="w-full h-full max-w-screen-xl m-auto"></div>;
};

export default Work;
