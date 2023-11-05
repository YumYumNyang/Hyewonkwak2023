import { Post, PostDetail } from "@/types/notion";
import React, { cache } from "react";
import "react-notion-x/src/styles.css";
import api from "@/lib/notion/request";
import Link from "next/link";
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
    <div className="relative min-h-full pt-20">
      <div className="flex flex-col">
        {posts.map((post: Post) => {
          return (
            <div className="flex items-center py-20" key={post.id}>
              <div className="w-40 text-xl font-medium text-left text-stone-700">
                {dayjs(post.date).format('YYYY MMM DD')}
              </div>
              <Pin className="z-10 mr-8" />
              <div className="text-xl font-medium text-left text-stone-700">
                <Link href={`/record/${post.slug}`}>{post.title}</Link>
              </div>
            </div>
          )
        })}
      </div>
      <div className="absolute top-0 left-40 ml-[3.5px] h-full">
        <svg
          width={1}
          viewBox="0 0 1 1281"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <line x1="0.5" y1={-13} x2="0.5" y2={1281} stroke="#57534E" />
        </svg>
      </div>
    </div>
  )
}

export default Record;
