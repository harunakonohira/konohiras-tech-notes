import styles from "./Post.module.css";
import Sidebar from "@/components/layout/Sidebar";
import ButtonBlack from "@/components/ui/ButtonBlack";
import CategoriesSection from "@/components/layout/CategoriesSection";

export default function Post() {
  return (
    <div className={styles.twoColumn}>
      <Sidebar />
      <main className={styles.main}>
        <section className={styles.new}>
          <div className={styles.contents}>
            <h1 className={styles.h1}>
              タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
            </h1>
            <div className={styles.content}>
              <p>
                記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。
              </p>
              <p>
                記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。
              </p>
              <p>
                記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。
              </p>
              <p>
                記事の本文が入ります。記事の本文が入ります。<a href="" className="">記事の本文が入ります。</a>記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。記事の本文が入ります。
              </p>
            </div>
            <p className={styles.date}>2026.07.06</p>
          </div>
          <div className={styles.newButton}>
            <ButtonBlack href="/" text="← return" />
          </div>
        </section>
        <CategoriesSection />
      </main>
    </div>
  );
}
