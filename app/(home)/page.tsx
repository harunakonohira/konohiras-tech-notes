import styles from "./page.module.css";
import Sidebar from "@/components/layout/Sidebar";
import Card from "@/components/ui/Card";
import ButtonBlack from "@/components/ui/ButtonBlack";
import CategoriesSection from "@/components/layout/CategoriesSection";
import { getArticle } from "@/libs/blog";

export const revalidate = 60;

export default async function home() {
  const limit = 3;
  const { contents } = await getArticle(limit);

  return (
    <div className={styles.twoColumn}>
      <Sidebar />
      <main className={styles.main}>
        <section className={styles.intro}>
          <h2 className={styles.h2}>what’s “Konohira’s tech notes”?</h2>
          <p className={styles.text}>
            Things I thought I might forget, items for copy-pasting, things I
            found difficult,
            <br />
            new things I learned, things I came to understand, and so on.
            <br />
            すみません、メモはにほんごでかきます。
          </p>
        </section>
        <section className={styles.new}>
          <h2 className={styles.h2}>new notes</h2>
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
          <div className={styles.newButton}>
            <ButtonBlack href="/blog" text="view all" />
          </div>
        </section>
        <CategoriesSection />
      </main>
    </div>
  );
}
