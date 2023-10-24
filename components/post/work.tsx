'use client';

import { Post } from '@/types/notion';
import React from 'react';
import WavePlane from '../three/wave-plane';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Scroll, ScrollControls } from '@react-three/drei';
import WavesScene from '../three/wave-scene';

const Work = ({ posts }: { posts: Post[] }) => {
  return <div className="w-full"></div>;
};

export default Work;
