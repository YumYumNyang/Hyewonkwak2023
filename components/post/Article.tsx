import { getAllTags } from "@/lib/notion/getAllTags";
import { Post } from "@/types/notion";
import React from "react";

const Article = ({ posts }: { posts: Post[] }) => {
	const tags = getAllTags(posts);

	return (
		<div>
			{posts.map((post) => (
				<div>{post.title}</div>
			))}
		</div>
	);
};

export default Article;
