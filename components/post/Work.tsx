import { Post } from "@/types/notion";
import React from "react";

const Work = ({ posts }: { posts: Post[] }) => {
	return (
		<div>
			{posts.map((post) => (
				<div>{post.title}</div>
			))}
		</div>
	);
};

export default Work;