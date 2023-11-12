import { Post } from '@/types/notion'
import Link from 'next/link'
import React from 'react'
import RecordRenderer from './record-renderer'
import api from '@/lib/notion/request'
import dayjs from 'dayjs'
import Pin from '@/components/icon/pin'

const RecordList = async ({ posts, slug }: { slug: string; posts: Post[] }) => {
  const postId = posts.filter((post: Post) => post.slug[0] == slug)[0]?.id
  if (postId) {
    const postRecordMap = await api.getPage(postId)
    if (postRecordMap)
      return (
        <div className="relative w-full min-h-full pt-20">
          <div className="flex flex-col min-w-screen">
            {posts.map((post: Post) => {
              return (
                <div
                  className="flex items-start my-20 max-sm:my-10 max-w-full"
                  key={post.id}
                >
                  <div className="flex flex-shrink-0 w-40 max-sm:text-xs text-xl font-medium max-sm:w-10 text-left text-stone-700">
                    {dayjs(post.date).format('YYYY MMM DD')}
                  </div>
                  <Pin className="flex flex-shrink-0 z-10 mt-3" />
                  <div className="flex flex-col w-[88%]">
                    <Link
                      className="ml-8 max-sm:ml-4"
                      href={`/record/${post.slug}`}
                    >
                      <div className="text-xl font-medium text-left text-stone-700">
                        {post.title}
                      </div>
                      <div>{post.summary}</div>
                    </Link>
                    {postId == post.id && (
                      <RecordRenderer post={post} recordMap={postRecordMap} />
                    )}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="absolute top-0 left-40 ml-[3.5px] w-[1px] max-sm:left-10 h-full min-h-screen bg-[#57534E]"></div>
        </div>
      )
  }
  return <></>
}

export default RecordList
