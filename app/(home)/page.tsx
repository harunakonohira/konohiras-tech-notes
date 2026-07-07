import styles from "./page.module.css";
import Sidebar from "@/components/layout/Sidebar";

export default function home() {
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
        <div className={styles.new}></div>
        <div className={styles.category}></div>
      </main>
    </div>
  );
}
