import styles from "./page.module.css";
import Sidebar from "@/components/layout/Sidebar";

export default function home() {
  return (
    <div className={styles.twoColumn}>
      <Sidebar />
      <main className={styles.main}></main>
    </div>
  );
}
