import { getAllTags } from '@/lib/notion/getAllTags';
import { Post } from '@/types/notion';
import React from 'react';

const Article = ({ posts }: { posts: Post[] }) => {
  const tags = getAllTags(posts);
  return (
    <div className="w-full h-full">
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default Article;
