import { client } from "./client";
import { Article, Category } from "./types";


export async function getArticle(limit: number, offset: number = 0) {
  const { contents, totalCount } = await client.getList<Article>({
    endpoint: "blog",
    queries: { limit, offset },
  });
  return { contents, totalCount };
}

export async function getCategoryBySlug(slug: string) {
  const { contents } = await client.getList<Category>({
    endpoint: "categories",
    queries: { filters: `slug[equals]${slug}` },
  });
  return contents[0];
}

export async function getArticleByCategory(
  categoryId: string,
  limit: number,
  offset: number = 0
) {
  const { contents, totalCount } = await client.getList<Article>({
    endpoint: "blog",
    queries: {
      filters: `category[equals]${categoryId}`,
      limit,
      offset,
    },
  });
  return { contents, totalCount };
}
