import { Post } from "@/types/notion";
import Link from "next/link";
import React from "react";
import RecordRenderer from "./record-renderer";
import api from "@/lib/notion/request";

const RecordList = async ({ posts, slug }: { slug: string; posts: Post[] }) => {
	const postId = posts.filter((post: Post) => post.slug[0] == slug)[0]?.id;
	if (postId) {
		const postRecordMap = await api.getPage(postId);
		return (
			<div className="min-h-full pt-20">
				{posts.map((post: Post) => {
					return (
            <div key={post.id}>
              <Link href={`/record/${post.slug}`}>{post.title}</Link>
            </div>
          );
				})}
				<RecordRenderer recordMap={postRecordMap} />
			</div>
		);
	}
  return <></>;
};

export default RecordList;
