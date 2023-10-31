import { ExtendedRecordMap, ID } from 'notion-types'
import { idToUuid } from 'notion-utils'

export default function getAllPageIds(res: ExtendedRecordMap, viewId?: string) {
  const collectionQuery = res.collection_query
  const collectionView = Object.values(collectionQuery)[0]

  let pageIds: ID[] = []
  if (viewId) {
    const vId = idToUuid(viewId)
    pageIds = collectionView[vId]?.blockIds
  } else {
    const pageSet = new Set<ID>()
    Object.values(collectionView).forEach((view: any) => {
      view.collection_group_results?.blockIds?.forEach((id: ID) =>
        pageSet.add(id),
      )
    })
    pageIds = Array.from(pageSet)
  }
  return pageIds
}
