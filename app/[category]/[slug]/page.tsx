import React from 'react'
import RecordRenderer from '@/components/post/record/record-renderer'
import RecordList from '@/components/post/record/record-list'
import { getAllPosts } from '@/lib/notion/getAllPosts'
import { CategorizedPosts, Category, Post } from '@/types/notion'
import WorkItem from '@/components/post/work/work-item'
import ArticleItem from '@/components/post/article/article-item'
import { Metadata, ResolvingMetadata } from 'next'

type Params = { category: Category; slug: string }
type Props = {
  params: Params
  searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateStaticParams({
  params: { category },
}: {
  params: { category: Category }
}) {
  const posts = await getAllPosts()
  return (Object.keys(posts) as Category[]).reduce(
    (params: Params[], category: Category) => {
      return [
        ...posts[category]?.map(
          (post: Post) =>
            ({
              category: post.category,
              slug: post.slug,
            }) as Params,
        ),
        ...params,
      ]
    },
    [] as Params[],
  )
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { category, slug } = params
  const posts = await getAllPosts()
  const previousImages = (await parent).openGraph?.images || []
  const post = posts[category]?.filter((post: Post) => post.slug === slug)[0]
  if (post) {
    return {
      title: post.title,
      description: post.summary,
      openGraph: {
        title: post.title,
        description: post.summary,
        images: [post.cover ? post.cover : '', ...previousImages],
        type: 'article',
        publishedTime: post.date,
        authors: 'Hyewon Kwak',
        tags: post.tags,
      },
    }
  }
  return {}
}

const PostItem = async ({
  params,
}: {
  params: { category: Category; slug: string }
}) => {
  const posts = await getAllPosts()
  const { category } = params

  const categorizedPosts = {
    /* @ts-ignore */
    article: <ArticleItem slug={params.slug} posts={posts.article} />,
    /* @ts-ignore */
    record: <RecordList slug={params.slug} posts={posts.record} />,
    /* @ts-ignore */
    work: <WorkItem slug={params.slug} posts={posts.work} />,
  } as { [key in Category]: React.ReactNode }
  return <>{categorizedPosts[category]}</>
}

export default PostItem
