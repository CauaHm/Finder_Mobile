import { useState, useEffect } from "react";
import { Main } from "../../components/Main";
import { MainTamplates } from "../../Templates/MainTampletes";
import { ProductCard } from "../../components/ProductCard";
import type { Product } from "../../Models/Product.tsx";
import styles from './styles.module.css';

export function Favorites() {
  // O estado agora armazena diretamente os produtos
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Carrega os objetos salvos diretamente
    const storedFavorites = JSON.parse(localStorage.getItem("favoritos") || "[]");
    setFavoriteProducts(storedFavorites);
  }, []);
  
  const handleToggleFavorite = (asin: string) => {
    // Remove o produto da lista visual
    const updatedFavorites = favoriteProducts.filter(p => p.asin !== asin);
    setFavoriteProducts(updatedFavorites);
    
    // Atualiza o localStorage com a nova lista de objetos
    localStorage.setItem("favoritos", JSON.stringify(updatedFavorites));
  };

  return (
    <MainTamplates>
      <Main>
        <div className={styles.containerTitle}>
          <h1>Favoritos <span className={styles.heartIcon}>❤️</span></h1>
        </div>
        <div className={styles.productsFav}>
          {favoriteProducts.length === 0 ? (
            <p>Você ainda não favoritou nenhum produto.</p>
          ) : (
            favoriteProducts.map((product) => (
              <ProductCard 
                key={product.asin}
                product={product}
                isFavorite={true} // Na página de favoritos, todos são favoritos
                onToggleFavorite={handleToggleFavorite} 
              />
            ))
          )}
        </div>
      </Main>
    </MainTamplates>
  );
}