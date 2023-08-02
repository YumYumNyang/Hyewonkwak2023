const path = require("path");

const BLOG = {
	BLOG_INDEX_ID:
		process.env.BLOG_INDEX_ID || "5b01e1b-d507-42d4-8bfb-341923556a08",
	NOTION_TOKEN: process.env.NOTION_TOKEN || "",
	LANG: "ko-KR",
};

module.exports = BLOG;
