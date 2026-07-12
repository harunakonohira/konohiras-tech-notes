import { client } from "./client";
import { Article } from "./types";

export async function getArticle(limit: number, offset: number = 0) {
  const { contents, totalCount } = await client.getList<Article>({
    endpoint: "blog",
    queries: { limit, offset },
  });
  return { contents, totalCount };
}