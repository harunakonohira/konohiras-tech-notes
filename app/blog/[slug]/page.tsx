import styles from "./Notes.module.css";
import Sidebar from "@/components/layout/Sidebar";
import ButtonBlack from "@/components/ui/ButtonBlack";
import CategoriesSection from "@/components/layout/CategoriesSection";
import { getArticleBySlug } from "@/libs/blog";

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  const d = new Date(article.publishedAt);
  const date = `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`;
  return (
    <div className={styles.twoColumn}>
      <Sidebar />
      <main className={styles.main}>
        <section className={styles.new}>
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
        <CategoriesSection />
      </main>
    </div>
  );
}
