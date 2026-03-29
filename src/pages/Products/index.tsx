import { useState, useEffect } from "react";
import { Categories } from "../../components/Categories/index.tsx";
import { Main } from "../../components/Main";
import { ProductsSearch } from "../../components/ProductsSearch/index.tsx";
import { MainTamplates } from "../../Templates/MainTampletes";
import { ProductCard } from "../../components/ProductCard/index.tsx";
import type { Product } from "../../Models/Product.tsx";
import styles from './styles.module.css';

const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

export function Products() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]); // Armazena ASINs
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoritos") || "[]");
    setFavorites(storedFavorites);
  }, []);

  const fetchProducts = async (searchQuery: string) => {
    if (!searchQuery) return;
    
    setIsLoading(true);
    setError(null);
    setProducts([]); 

    if (!API_KEY) {
      setError("Chave da API não configurada. Verifique o .env.local");
      setIsLoading(false);
      return;
    }

    const url = 'https://real-time-amazon-data.p.rapidapi.com/search';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(`${url}?query=${encodeURIComponent(searchQuery)}&country=BR`, options);
      if (!response.ok) {
        throw new Error('Erro ao buscar dados da API.');
      }
      const data = await response.json();

      if (!data.data?.products || data.data.products.length === 0) {
        setError("Nenhum produto encontrado.");
      } else {
        const productData: Product[] = data.data.products;
        setProducts(productData);
        localStorage.setItem("produtos", JSON.stringify(productData)); 
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro ao buscar produtos.");
      }
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchProducts(query);
  };

  const handleCategoryClick = (category: string) => {
    setQuery(category);
    fetchProducts(category);
  };

  const handleToggleFavorite = (asin: string) => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoritos") || "[]");
    
    const isAlreadyFavorite = storedFavorites.some((p: Product) => p.asin === asin);
    
    let updatedFavorites;

    if (isAlreadyFavorite) {
      updatedFavorites = storedFavorites.filter((p: Product) => p.asin !== asin);
    } else {
      const productToAdd = products.find(p => p.asin === asin);
      if (productToAdd) {
        updatedFavorites = [...storedFavorites, productToAdd];
      } else {
        updatedFavorites = storedFavorites;
      }
    }
    
    const newFavoritesIds = updatedFavorites.map((p: Product) => p.asin);
    setFavorites(newFavoritesIds);
    
    localStorage.setItem("favoritos", JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    const storedFavoritesObjs = JSON.parse(localStorage.getItem("favoritos") || "[]");
    const ids = storedFavoritesObjs.map((p: Product) => p.asin);
    setFavorites(ids);
  }, []);

  return (
      <MainTamplates>
        <Main>
          <h2>Produtos</h2>
          <ProductsSearch 
            value={query}
            onChange={setQuery}
            onSubmit={handleSearchSubmit}
          />
          <Categories onCategoryClick={handleCategoryClick} />
          
          <div className={styles.results}>
            {isLoading && <p>Buscando...</p>}
            {error && <p className={styles.error}>{error}</p>}
            {products.map((product) => (
              <ProductCard 
                key={product.asin}
                product={product}
                isFavorite={favorites.includes(product.asin)}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        </Main>
      </MainTamplates>
  );
}