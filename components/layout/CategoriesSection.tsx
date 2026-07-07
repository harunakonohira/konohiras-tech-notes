import styles from "./CategoriesSection.module.css";
import ButtonColor from "../ui/ButtonColor";

export default function CategoriesSection() {
  return (
    <section className={styles.categories}>
      <h2 className={styles.h2}>categories</h2>
      <div className={styles.wrapper}>
        <ButtonColor href="/" text="view all" />
        <ButtonColor href="/" text="view all" />
        <ButtonColor href="/" text="view all" />
        <ButtonColor href="/" text="view all" />
        <ButtonColor href="/" text="view all" />
        <ButtonColor href="/" text="view all" />
        <ButtonColor href="/" text="view all" />
        <ButtonColor href="/" text="view all" />
        <ButtonColor href="/" text="view all" />
      </div>
    </section>
  );
}
