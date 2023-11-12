import { Post, PostDetail } from '@/types/notion'
import React, { cache } from 'react'
import api from '@/lib/notion/request'
import Link from 'next/link'
import dayjs from 'dayjs'
import Pin from '../icon/pin'

interface PostDict {
  [id: string]: PostDetail
}
const Record = ({ posts }: { posts: Post[] }) => {
  const postDetails = posts.reduce((acc: PostDict, post: Post) => {
    acc[post.id] = { id: post.id, post: post, recordMap: null }
    return acc
  }, {} as PostDict)
  return (
    <div className="relative w-full min-h-full pt-20">
      <div className="flex flex-col min-w-screen">
        {posts.map((post: Post) => {
          return (
            <div
              className="flex items-start my-20 max-sm:my-10 max-w-full"
              key={post.id}
            >
              <div className="flex flex-shrink-0 w-40 max-sm:text-xs text-xl font-medium max-sm:w-10  text-left text-stone-700">
                {dayjs(post.date).format('YYYY MMM DD')}
              </div>
              <Pin className="flex flex-shrink-0 z-10 mt-3" />
              <div className="flex flex-col w-full">
                <Link
                  className="ml-8 max-sm:ml-4"
                  href={`/record/${post.slug}`}
                >
                  <div className="text-xl font-medium text-left text-stone-700">
                    {post.title}
                  </div>
                  <div>{post.summary}</div>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
      <div className="absolute top-0 left-40 ml-[3.5px] w-[1px] max-sm:left-10 h-full min-h-screen bg-[#57534E]"></div>
    </div>
  )
}

export default Record
