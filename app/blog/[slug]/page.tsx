import styles from "./Notes.module.css";
import Sidebar from "@/components/layout/Sidebar";
import ButtonBlack from "@/components/ui/ButtonBlack";
import Card from "@/components/ui/Card";
import CategoriesSection from "@/components/layout/CategoriesSection";
import { getArticleBySlug, getArticleByCategory } from "@/libs/blog";

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  const { contents: related } = await getArticleByCategory(
    article.category.id,
    4,
  );
  const relatedArticles = related.filter((a) => a.id !== article.id);
  const d = new Date(article.publishedAt);
  const date = `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`;
  return (
    <div className={styles.twoColumn}>
      <Sidebar />
      <main className={styles.main}>
        <section className={`${styles.new} ${styles.pin}`}>
          <div className={styles.contents}>
            <h1 className={styles.h1}>{article.title}</h1>
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            <p className={styles.date}>{date}</p>
          </div>
          <div className={styles.newButton}>
            <ButtonBlack href="/blog" text="← return" />
          </div>
        </section>

        {relatedArticles.length > 0 && (
          <section className={styles.related}>
            <h2 className={styles.h2}>related notes</h2>
            <div className={styles.contents}>
              {relatedArticles.map((a) => {
                const d = new Date(a.publishedAt);
                const date = `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`;
                return (
                  <Card
                    key={a.id}
                    href={`/blog/${a.slug}`}
                    title={a.title}
                    text={a.excerpt}
                    date={date}
                  />
                );
              })}
            </div>
          </section>
        )}
        <CategoriesSection />
      </main>
    </div>
  );
}
