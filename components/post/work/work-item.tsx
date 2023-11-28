import Posts from '@/app/[category]/page'
import api from '@/lib/notion/request'
import { Post } from '@/types/notion'
import { ExtendedRecordMap } from 'notion-types'
import React from 'react'
import { NotionRenderer } from 'react-notion-x'
import WorkRenderer from './work-renderer'

const WorkItem = async ({ posts, slug }: { posts: Post[]; slug: string }) => {
  const postId = posts.filter((post: Post) => post.slug === slug)[0]?.id
  if (postId) {
    const postRecordMap = await api.getPage(postId)
    return <WorkRenderer recordMap={postRecordMap} />
  }
}

export default WorkItem
