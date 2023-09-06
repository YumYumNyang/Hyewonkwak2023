import { Post } from "@/types/notion";
import { useFrame } from "@react-three/fiber";
import { useRouter } from "next/navigation";
import React, { Ref, useMemo, useRef } from "react";
import { Mesh } from "three";
import * as THREE from "three";
import { MathUtils } from "three/src/math/MathUtils";
const fragmentShader = `
    varying vec2 vUv;
    varying float vWave;
    uniform sampler2D u_texture;

    void main() {
        
        float wave = vWave * 0.2;
        float r = texture2D(u_texture, vUv).r;
        float g = texture2D(u_texture, vUv).g;
        float b = texture2D(u_texture, vUv).b;
        
        vec3 texture = vec3(r, g, b);
        gl_FragColor = vec4(texture , 1.0);
    }
    `;

const vertexShader = `
    uniform float u_time;
    uniform float u_intensity;
    varying vec2 vUv;
    varying float vWave;

    void main(){
        vUv = uv;

        vec4 modelPosition = modelMatrix * vec4(position, 1.0);

        modelPosition.z += sin(modelPosition.x * 10.0 + u_time * 3.0 * u_intensity )  * 0.1;
        modelPosition.z += sin(modelPosition.y * 6.0  + u_time * 2.0 * u_intensity  )  * 0.1;
        
        vWave = modelPosition.z;

        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;

        gl_Position = projectedPosition;
    }
`;

const WavePlane = ({ post, index }: { post: Post; index: number }) => {
	const mesh = useRef<Mesh>(null!);
	const hover = useRef<boolean>(false);
	const router = useRouter();
	const uniforms = useMemo(
		() => ({
			u_time: {
				value: 0.0,
			},
			u_texture: {
				value: new THREE.TextureLoader().load(
					post.cover
						? post.cover
						: "https://www.notion.so/images/page-cover/met_silk_kashan_carpet.jpg"
				),
			},
			u_intensity: {
				value: 0.3,
			},
		}),
		[]
	);

	useFrame((state) => {
		const { clock } = state;
		const material = mesh.current.material as THREE.ShaderMaterial;
		material.uniforms.u_time.value = clock.getElapsedTime();
		material.uniforms.u_intensity.value = MathUtils.lerp(
			material.uniforms.u_intensity.value,
			hover.current ? 0.8 : 0.3,
			0.02
		);
	});

	return (
		<mesh
			ref={mesh}
			position={[(index % 2 ? -1 : 1) * 0.8, 0, -0.8 * index + 10]}
			onPointerOver={() => (hover.current = true)}
			onPointerOut={() => (hover.current = false)}
			onClick={() => router.push(`work/${post.id}`)}>
			<planeGeometry args={[1, 1, 32, 32]} />
			<shaderMaterial
				fragmentShader={fragmentShader}
				vertexShader={vertexShader}
				uniforms={uniforms}
				wireframe={false}
			/>
		</mesh>
	);
};

export default WavePlane;
