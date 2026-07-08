import styles from "../../Blog.module.css";
import Sidebar from "@/components/layout/Sidebar";
import Card from "@/components/ui/Card";
import ButtonBlack from "@/components/ui/ButtonBlack";
import CategoriesSection from "@/components/layout/CategoriesSection";

export default function Blog() {
  return (
    <div className={styles.twoColumn}>
      <Sidebar />
      <main className={styles.main}>
        <section className={styles.new}>
          <h2 className={styles.h2}>category → category name</h2>
          <div className={styles.contents}>
            <Card
              href="/"
              title="タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル"
              text="こういう時に開きたいみたいな文章を書いておけるところ"
              date="2026.07.06"
            />
            <Card
              href="/"
              title="タイトルタイトルタイトルタイトルタイトルタイトル"
              text="こういう時に開きたいみたいな文章を書いておけるところ"
              date="2026.07.06"
            />
            <Card
              href="/"
              title="タイトルタイトルタイトル"
              text="こういう時に開きたいみたいな文章を書いておけるところこういう時に開きたいみたいな文章を書いておけるところこういう時に開きたいみたいな文章を書いておけるところこういう時に開きたいみたいな文章を書いておけるところ"
              date="2026.07.06"
            />
            <Card
              href="/"
              title="タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル"
              text="こういう時に開きたいみたいな文章を書いておけるところ"
              date="2026.07.06"
            />
            <Card
              href="/"
              title="タイトルタイトルタイトルタイトルタイトルタイトル"
              text="こういう時に開きたいみたいな文章を書いておけるところ"
              date="2026.07.06"
            />
            <Card
              href="/"
              title="タイトルタイトルタイトル"
              text="こういう時に開きたいみたいな文章を書いておけるところこういう時に開きたいみたいな文章を書いておけるところこういう時に開きたいみたいな文章を書いておけるところこういう時に開きたいみたいな文章を書いておけるところ"
              date="2026.07.06"
            />
          </div>
          <div className={styles.newButton}>
            <ButtonBlack href="/" text="view more..." />
          </div>
        </section>
        <CategoriesSection />
      </main>
    </div>
  );
}
