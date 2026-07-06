import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.link}>
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="konohira's tech notes"
          width="228"
          height="24"
        />
      </Link>
    </header>
  );
}
