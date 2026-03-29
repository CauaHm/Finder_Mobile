import { DefaultButton } from "../DefaultButton";
import styles from "./styles.module.css";

type ProductsSearchProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ProductsSearch({ value, onChange, onSubmit }: ProductsSearchProps) {
  return (
    <form className={styles.containerForm} onSubmit={onSubmit}>
      <input 
        className={styles.searchInput} 
        type="text" 
        id="search-input" 
        placeholder="Produto..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <DefaultButton value="Buscar"/>
    </form>
  );
}