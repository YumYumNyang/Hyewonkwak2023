import Posts from '@/app/[category]/page'
import api from '@/lib/notion/request'
import { Post } from '@/types/notion'
import { ExtendedRecordMap } from 'notion-types'
import React from 'react'
import { NotionRenderer } from 'react-notion-x'
import ArticleRenderer from './article-renderer'

const ArticleItem = async ({
  posts,
  slug,
}: {
  posts: Post[]
  slug: string
}) => {
  const post = posts.filter((post: Post) => post.slug[0] == slug)[0]
  if (post) {
    const postId = post?.id
    const postRecordMap = await api.getPage(postId)
    return <ArticleRenderer post={post} recordMap={postRecordMap} />
  }
}

export default ArticleItem
