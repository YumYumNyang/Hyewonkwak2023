import { Post } from "@/types/notion";
import React from "react";

const Record = ({ posts }: { posts: Post[] }) => {
	return (
		<div>
			{posts.map((post) => (
				<div key={post.id}>{post.title}</div>
			))}
		</div>
	);
};

export default Record;
