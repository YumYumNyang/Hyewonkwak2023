import { Post, PostDetail } from "@/types/notion";
import React, { cache } from "react";
import "react-notion-x/src/styles.css";
import api from "@/lib/notion/request";
import Link from "next/link";

interface PostDict {
  [id: string]: PostDetail;
}
const Record = ({ posts }: { posts: Post[] }) => {
  const postDetails = posts.reduce((acc: PostDict, post: Post) => {
    acc[post.id] = { id: post.id, post: post, recordMap: null };
    return acc;
  }, {} as PostDict);
  return (
    <div className="min-h-full pt-20">
      {posts.map((post: Post) => {
        return (
          <div key={post.id}>
            <Link href={`/record/${post.slug}`}>{post.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Record;
