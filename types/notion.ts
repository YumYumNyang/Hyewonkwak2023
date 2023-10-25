import { ExtendedRecordMap } from "notion-types";

export interface Post {
	id: string;
	date: string;
	slug: string[];
	tags?: string[];
	summary?: string;
	title: string;
	createdTime: string;
	fullWidth: boolean;
	category: Category;
	private: boolean;
	cover?: string;
}
export interface PostDetail {
	id: string;
	post: Post;
	recordMap: ExtendedRecordMap | null;
}

const CATEGORY = {
	ARTICLE: "article",
	RECORD: "record",
	WORK: "work",
} as const;

export type Category = (typeof CATEGORY)[keyof typeof CATEGORY];

export type CategorizedPosts = {
	[key in Category]: Post[];
};
