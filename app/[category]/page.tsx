import { getAllPosts } from "@/lib/notion/getAllPosts";
import { Category } from "@/types/notion";
import React from "react";
import Article from "@/components/post/Article";
import Record from "@/components/post/Record";
import Work from "@/components/post/Work";

const Posts = async ({
	params,
}: {
	params: { category: Category; slug: string };
}) => {
	const category = params.category;
	const posts = await getAllPosts();
	const categorizedPosts = {
		[Category.ARTICLE]: <Article posts={posts["article"]} />,
		[Category.RECORD]: <Record posts={posts["record"]} />,
		[Category.WORK]: <Work posts={posts["work"]} />,
	} as { [key in Category]: React.ReactNode };
	return (
		<div className="w-full min-h-full">{categorizedPosts[category]}</div>
	);
};

export default Posts;
