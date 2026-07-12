import styles from "../../blog/Blog.module.css";
import Sidebar from "@/components/layout/Sidebar";
import Card from "@/components/ui/Card";
import ButtonBlack from "@/components/ui/ButtonBlack";
import CategoriesSection from "@/components/layout/CategoriesSection";
import { getCategoryBySlug, getArticleByCategory } from "@/libs/blog";

export default async function Category({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { slug } = await params;
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const limit = 9;
  const offset = (currentPage - 1) * limit;

  // 1. slug からカテゴリーを特定
  const category = await getCategoryBySlug(slug);
  console.log("category:", category);

  // 2. そのカテゴリーの id で記事を絞る
  const { contents, totalCount } = await getArticleByCategory(
    category.id,
    limit,
    offset,
  );

  const totalPages = Math.ceil(totalCount / limit);

  return (
    <div className={styles.twoColumn}>
      <Sidebar />
      <main className={styles.main}>
        <section className={styles.new}>
          <h2 className={styles.h2}>category → {category.name}</h2>
          <div className={styles.contents}>
            {contents.map((article) => {
              const d = new Date(article.publishedAt);
              const date = `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`;
              return (
                <Card
                  key={article.id}
                  href={`/blog/${article.slug}`}
                  title={article.title}
                  text={article.excerpt}
                  date={date}
                />
              );
            })}
          </div>
          <div className={styles.buttons}>
            {currentPage > 1 && (
              <ButtonBlack
                href={`/category/${slug}?page=${currentPage - 1}`}
                text="<- before page"
              />
            )}
            {currentPage < totalPages && (
              <ButtonBlack
                href={`/category/${slug}?page=${currentPage + 1}`}
                text="next page ->"
              />
            )}
          </div>
        </section>
        <CategoriesSection />
      </main>
    </div>
  );
}
