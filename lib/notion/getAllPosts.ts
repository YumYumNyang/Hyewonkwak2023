import { idToUuid } from "notion-utils";
import BLOG from "./config";
import api from "./request";
import getAllPageIds from "./getAllPageIds";
import getPageProperties from "./getPageProperties";
import filterPosts from "./filterPosts";
import mapImageUrl from "./mapImageUrl";
import { CategorizedPosts, Category, Post } from "@/types/notion";

export async function getAllPosts() {
	const blogId = BLOG.BLOG_INDEX_ID;
	const res = await api.getPage(blogId);
	const blogUuId = idToUuid(blogId);
	const collection = Object.values(res.collection)[0]?.value;
	const block = res.block;
	const schema = collection.schema;
	const rawMetadata = block[blogUuId].value;

	// only collection view or collection view page
	if (
		rawMetadata?.type !== "collection_view_page" &&
		rawMetadata?.type !== "collection_view"
	) {
		console.warn("blogId is not a database");
		return {} as CategorizedPosts;
	} else {
		// get page id array
		const pageIds = getAllPageIds(res);
		const data: any[] = [];
		// no page ids
		if (pageIds?.length === 0) {
			console.warn("no page data");
		}
		// get page properties by using page id
		const PagePromises = pageIds?.map(async (pageId) => {
			const id = pageId;
			const properties =
				(await getPageProperties(id, block, schema)) || null;
			properties.createdTime = new Date(
				block[id].value?.created_time
			).toString();
			properties.fullWidth =
				block[id].value?.format?.page_full_width ?? false;
			properties.cover = mapImageUrl(
				block[id].value?.format?.page_cover,
				block[id].value
			);
			data.push(properties);
		});
		await Promise.all(PagePromises);
		// exclude pages that have to be hidden ans sort by date
		const postedPosts = filterPosts(data).sort((a: any, b: any) => {
			const dateA: any = new Date(a?.date?.start_date || a.createdTime);
			const dateB: any = new Date(b?.date?.start_date || b.createdTime);
			return dateB - dateA;
		});

		// categorize
		const categorizedPosts: CategorizedPosts = postedPosts.reduce(
			(posts: CategorizedPosts, post: Post) => {
				const category = post.category as Category;
				posts[category].push(post);
				return posts;
			},
			{
				["article"]: [],
				["record"]: [],
				["work"]: [],
			} as CategorizedPosts
		);

		return categorizedPosts;
	}
}
