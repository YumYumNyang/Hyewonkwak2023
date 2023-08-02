export default function filterPosts(posts: any) {
	if (!posts || !posts.length) return [];

	// filter Private Posts

	return posts.filter((post: any) => !post?.private);
}
