import { Post } from '@/types/notion'
import Link from 'next/link'
import React from 'react'
import { Badge } from '../ui/badge'
import dayjs from 'dayjs'

const ListItem = ({ post }: { post: Post }) => {
  console.log(post)
  return (
    <Link
      key={post.id}
      className="flex flex-col p-2 w-full bg-white hover:shadow-md transition hover:text-blue"
      href={`/article/${post.slug}`}
    >
      <h3 className="pb-1 text-sm text-muted-foreground">
        {dayjs(new Date(post.date)).format('YYYY MMM D')}
      </h3>
      <div
        style={{
          backgroundImage: `url(${post.cover ? post.cover : '/blank.png'})`,
        }}
        className={`w-full aspect-[1/1] bg-cover overflow-hidden `}
      ></div>
      <h1 className="py-2 text-md sm:text-lg font-bold">{post.title}</h1>
      <h3 className="pb-1 text-sm sm:text-md text-muted-foreground">
        {post.summary}
      </h3>
      <div className="py-1 flex flex-wrap">
        {post.tags?.map((tag, index) => (
          <Badge variant="secondary" key={index}>
            {tag}
          </Badge>
        ))}
      </div>
    </Link>
  )
}

export default ListItem
