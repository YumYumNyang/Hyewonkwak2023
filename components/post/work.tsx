"use client";

import { Post } from "@/types/notion";
import Link from "next/link";
import React from "react";

const Work = ({ posts }: { posts: Post[] }) => {
	return (
		<div>
			{posts.map((post: Post) => {
				return (
					<>
						<div>
							<Link href={`/work/${post.slug}`}>
								{post.title}
							</Link>
						</div>
					</>
				);
			})}
		</div>
	);
};

export default Work;
