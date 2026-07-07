import styles from "./ButtonBlack.module.css";
import Link from "next/link";

type ButtonBlackProps = {
  href: string;
  text: string;
};

export default function ButtonBlack({ href, text }: ButtonBlackProps) {
  return <Link className={styles.buttonBlack} href={href}>{text}</Link>;
}
