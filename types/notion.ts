export interface Post {
	id: string;
	date: { start_date: string };
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

export enum Category {
	"ARTICLE" = "article",
	"RECORD" = "record",
	"WORK" = "work",
}

export type CategorizedPosts = {
	[key in Category]: Post[];
};
