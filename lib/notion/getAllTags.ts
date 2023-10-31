import { Post } from '@/types/notion'

export function getAllTags(posts: Post[]) {
  const tags = Object.keys(
    posts.reduce(
      (tagDicts, post) => {
        post.tags?.forEach((tag: string) => (tagDicts[tag] = true))
        return tagDicts
      },
      {} as { [key: string]: boolean },
    ),
  )
  return tags
}
