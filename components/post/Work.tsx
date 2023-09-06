"use client";

import { Post } from "@/types/notion";
import React from "react";
import WavePlane from "../three/WavePlane";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Work = ({ posts }: { posts: Post[] }) => {
	return (
		<Canvas
			camera={{
				fov: 45,
				near: 0.1,
				far: 1000,
				position: [0.2, 0.2, 14],
			}}>
			<OrbitControls
				enablePan={false}
				enableRotate={false}
				dampingFactor={0.25}
			/>
			{posts.map((post, index) => (
				<WavePlane key={post.id} post={post} index={index} />
			))}
		</Canvas>
	);
};

export default Work;
