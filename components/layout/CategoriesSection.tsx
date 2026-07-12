import styles from "./CategoriesSection.module.css";
import ButtonColor from "../ui/ButtonColor";
import ButtonBlack from "../ui/ButtonBlack";
import { getAllCategories } from "@/libs/blog";

export default async function CategoriesSection() {
  const categories = await getAllCategories();
  return (
    <section className={styles.categories}>
      <h2 className={styles.h2}>categories</h2>
      <div className={styles.wrapper}>
        {categories.map((category) => (
          <ButtonColor
            key={category.id}
            href={`/category/${category.slug}`}
            text={category.name}
          />
        ))}
        <ButtonBlack href="/blog" text="view all" />
      </div>
    </section>
  );
}
