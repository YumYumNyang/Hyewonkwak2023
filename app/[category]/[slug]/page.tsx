import RecordRenderer from '@/components/post/record/record-renderer'
import RecordList from '@/components/post/record/record-list'
import { getAllPosts } from '@/lib/notion/getAllPosts'
import { Category, Post } from '@/types/notion'
import React from 'react'
import WorkItem from '@/components/post/work/work-item'
import ArticleItem from '@/components/post/article/article-item'

const PostItem = async ({
  params,
}: {
  params: { category: Category; slug: string }
}) => {
  const posts = await getAllPosts()
  const { category } = params

  const categorizedPosts = {
    /* @ts-ignore */
    article: <ArticleItem slug={params.slug} posts={posts.work} />,
    /* @ts-ignore */
    record: <RecordList slug={params.slug} posts={posts.record} />,
    /* @ts-ignore */
    work: <WorkItem slug={params.slug} posts={posts.work} />,
  } as { [key in Category]: React.ReactNode }
  return <>{categorizedPosts[category]}</>
}

export default PostItem
