import { Scroll, ScrollControls } from '@react-three/drei';
import React from 'react';
import WavePlane from './wave-plane';
import { Post } from '@/types/notion';
import { useThree } from '@react-three/fiber';

const WavesScene = ({ posts }: { posts: Post[] }) => {
  const { size } = useThree();
  const planeHeight = 50;

  return (
    <ScrollControls
      pages={(size.height + posts.length * planeHeight) / size.height}
      damping={0.5}
    >
      <Scroll>
        {posts.map((post, index) => (
          <WavePlane key={post.id} post={post} index={index} />
        ))}
      </Scroll>
    </ScrollControls>
  );
};

export default WavesScene;
