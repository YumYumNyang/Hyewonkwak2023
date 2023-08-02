import { NotionAPI } from "notion-client";
import BLOG from "./config";

const api = new NotionAPI({ authToken: BLOG.NOTION_TOKEN });

export default api;
