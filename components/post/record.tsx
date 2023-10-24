import { Post } from "@/types/notion";
import React, { useEffect } from "react";

const Record = ({ posts }: { posts: Post[] }) => {
	return (
		<div className="min-h-full pt-20">
			{posts.map((post) => (
				<div key={post.id}>{post.title}</div>
			))}
		</div>
	);
};

export default Record;
