import styles from "./ButtonColor.module.css";
import Link from "next/link";

type ButtonColorProps = {
  href: string;
  text: string;
};

export default function ButtonColor({ href, text }: ButtonColorProps) {
  return (
    <Link className={styles.buttonColor} href={href}>
      {text}
    </Link>
  );
}
