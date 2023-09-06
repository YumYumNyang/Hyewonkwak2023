import { Block } from "notion-types";

export default function mapImageUrl(url: string, block: Block) {
	if (!url) {
		return undefined;
	}

	if (
		url.startsWith("data:") ||
		url.startsWith("https://images.unsplash.com")
	) {
		return url;
	}

	try {
		const u = new URL(url);

		if (
			u.pathname.startsWith("/secure.notion-static.com") &&
			u.hostname.endsWith(".amazonaws.com")
		) {
			if (
				u.searchParams.has("X-Amz-Credential") &&
				u.searchParams.has("X-Amz-Signature") &&
				u.searchParams.has("X-Amz-Algorithm")
			) {
				// if the URL is already signed, then use it as-is
				url = u.origin + u.pathname;
			}
		}
	} catch {
		// ignore invalid urls
	}

	if (url.startsWith("/images")) {
		url = `https://www.notion.so${url}`;
	} else {
		url = `https://www.notion.so${
			url.startsWith("/image") ? url : `/image/${encodeURIComponent(url)}`
		}`;
	}
	const notionImageUrlV2 = new URL(url);

	url = notionImageUrlV2.toString();

	return url;
}
