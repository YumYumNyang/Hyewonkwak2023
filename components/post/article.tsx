import { getAllTags } from "@/lib/notion/getAllTags";
import { Post } from "@/types/notion";
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Article = ({ posts }: { posts: Post[] }) => {
  const tags = getAllTags(posts)
  return (
    <div className="w-full h-full px-10 max-sm:px-4">
      {posts.map((post) => (
        <Link
          className="flex mb-8 max-sm:mb-4"
          key={post.id}
          href={`/article/${post.slug}`}
        >
          <div className="relative w-[160px] max-sm:w-[100px] aspect-square mr-4 max-sm:mr-2">
            <Image
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-auto"
              src={post.cover ? post.cover : '/creating/01.png'}
            />
          </div>
          <div className="flex flex-col text-stone-700">
            <div className="text-sm max-sm:text-xs text-stone-500">
              {dayjs(post.date).format('YYYY MMM DD')}
            </div>
            <div className="text-2xl font-medium max-sm:text-lg">
              {post.title}
            </div>
            <div className="text-lg max-sm:text-sm">{post.summary}</div>
            <div className="flex">
              {post.tags?.map((tag: string) => (
                <div key={tag} className="text-sm max-sm:text-xs">
                  #{tag}
                </div>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Article;
