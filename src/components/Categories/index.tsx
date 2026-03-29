import { CategoriesCards } from "../CategoriesCards";
import styles from "./styles.module.css";

import { FaTshirt, FaPaintBrush, FaFutbol, FaMale, FaFemale } from "react-icons/fa"; 
import { FaComputer, FaShop } from "react-icons/fa6";

import type { categoriesItems } from "../../Models/CategoriesItems.tsx";

const listCategories: categoriesItems[] = [
  { icon: <FaComputer className={styles.icon} />, paragraph: "eletronicos" },
  { icon: <FaTshirt className={styles.icon} />, paragraph: "roupas" }, 
  { icon: <FaPaintBrush className={styles.icon} />, paragraph: "cosmeticos" },
  { icon: <FaFutbol className={styles.icon} />, paragraph: "esportes" },
  { icon: <FaShop className={styles.icon} />, paragraph: "mercado" },
  { icon: <FaMale className={styles.icon} />, paragraph: "roupas masculinas" },
  { icon: <FaFemale className={styles.icon} />, paragraph: "roupas femininas" },
];

type CategoriesProps = {
  onCategoryClick: (category: string) => void;
}

export function Categories({ onCategoryClick }: CategoriesProps) {
  const renderList = () => {
    return listCategories.map((i) => {
      return (
        <div key={i.paragraph} onClick={() => onCategoryClick(i.paragraph)}>
          <CategoriesCards
            icon={i.icon}
            paragraph={i.paragraph}
          />
        </div>
      );
    });
  };

  return (
    <>
      <h3 className={styles.title}>Pesquise por Categorias</h3>
      <div className={styles.container}>{renderList()}</div>
    </>
  );
}