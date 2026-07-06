import styles from "./Sidebar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>administrator</h2>
      <div className={styles.image}>
        <Image
          src="/administrator.png"
          alt="administrator image"
          width="160"
          height="160"
          loading="eager"
        />
      </div>
      <div className={styles.texts}>
        <p className={styles.text}>
          <span className={styles.small}>name:&ensp;</span>
          Haruna Konohira
        </p>
        <p className={styles.text}>
          <span className={styles.small}>status:&ensp;</span>
          Looking for a job
        </p>
        <div className={styles.text}>
          <span className={styles.small}>url:&ensp;</span>
          <Link href="https://github.com/harunakonohira" target="_blank">
            <p>GitHub account</p>
          </Link>
        </div>
      </div>
    </aside>
  );
}
