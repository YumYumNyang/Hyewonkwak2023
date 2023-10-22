import useIntersect from '@/lib/hooks/useIntersect';
import { Post } from '@/types/notion';
import React, { useEffect } from 'react';

const Record = ({ posts }: { posts: Post[] }) => {
  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
    }
  });

  return (
    <div className="pt-20 min-h-full">
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default Record;
