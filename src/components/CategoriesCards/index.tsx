import type React from "react";
import styles from "./styles.module.css";

type CategoriesCardsProps = {
  icon: React.ReactNode;
  paragraph: string;
};

export function CategoriesCards({icon, paragraph}: CategoriesCardsProps) {
  return (
    <button className={styles.categoriesBtn} data-category={paragraph}>
      {icon}
      {paragraph}
    </button>
  );
}