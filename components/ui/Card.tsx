import styles from "./Card.module.css";
import Link from "next/link";

type CardProps = {
  href: string;
  title: string;
  text: string;
  date: string;
};

export default function Card( {href, title, text, date}: CardProps) {
  return (
    <Link href={href} className={styles.card}>
      <p className={styles.cardTitle}>{title}</p>
      <div className={styles.cardWrap}>
        <p className={styles.cardText}>
          {text}
        </p>
        <p className={styles.cardDate}>{date}</p>
      </div>
    </Link>
  );
}
