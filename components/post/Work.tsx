"use client";

import { Post } from "@/types/notion";
import React from "react";
import WavePlane from "../three/WavePlane";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import WavesScene from "../three/WavesScene";

const Work = ({ posts }: { posts: Post[] }) => {
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<Canvas
				camera={{
					fov: 45,
					near: 0.1,
					far: 1000,
					position: [0, 0, 14],
				}}>
				<WavesScene posts={posts} />
			</Canvas>
		</div>
	);
};

export default Work;
