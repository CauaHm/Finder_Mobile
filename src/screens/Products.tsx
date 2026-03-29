import { useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'; // Importante para sincronização
import { Categories } from '../components/Categories';
import { ProductCard } from '../components/ProductCard';
import { ProductsSearch } from '../components/ProductsSearch';
import { MainTamplates } from '../Templates/MainTampletes';
import { colors, spacing } from '../styles/theme.ts';
import type { Product as ProductModel } from '../Models/Product';

const API_KEY = process.env.EXPO_PUBLIC_RAPIDAPI_KEY;
const FAVORITES_KEY = '@finder:favorites';
const apiUrl = 'https://real-time-amazon-data.p.rapidapi.com/search';

export default function Products() {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [favorites, setFavorites] = useState<ProductModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Atualiza a lista de favoritos toda vez que a tela ganha foco
  useFocusEffect(
    useCallback(() => {
      async function loadFavorites() {
        try {
          const data = await AsyncStorage.getItem(FAVORITES_KEY);
          if (data) setFavorites(JSON.parse(data));
        } catch (err) {
          console.error(err);
        }
      }
      loadFavorites();
    }, [])
  );

  const fetchProducts = async (searchQuery?: string) => {
    const termToSearch = searchQuery !== undefined ? searchQuery : query;
    if (!termToSearch.trim()) return;
    if (!API_KEY) {
      setError('Chave da API não configurada');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${apiUrl}?query=${encodeURIComponent(termToSearch)}&country=BR`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com',
        },
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Erro ao buscar produtos');
      setProducts(data.data.products || []);
      setQuery(''); // Limpa o input após o sucesso da busca
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = async (product: ProductModel) => {
    try {
      const isFav = favorites.some((fav) => fav.asin === product.asin);
      let newFavorites;

      if (isFav) {
        newFavorites = favorites.filter((fav) => fav.asin !== product.asin);
      } else {
        newFavorites = [...favorites, product];
      }

      setFavorites(newFavorites);
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    } catch (err) {
      Alert.alert('Erro', 'Não foi possível atualizar favoritos.');
    }
  };

  return (
    <MainTamplates>
      <View style={styles.container}>
        <Text style={styles.header}>Produtos</Text>
        <ProductsSearch
          value={query}
          onChange={setQuery}
          onSubmit={() => fetchProducts()} 
        />

        {loading && <ActivityIndicator size="large" color={colors.primary} style={styles.loader} />}
        {error && <Text style={styles.error}>{error}</Text>}

        <Categories 
          onCategoryClick={(category) => { 
            setQuery(category); 
            fetchProducts(category);
          }} 
        />

        <FlatList<ProductModel>
          data={products}
          keyExtractor={(item) => item.asin}
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              isFavorite={favorites.some((fav) => fav.asin === item.asin)}
              onToggleFavorite={() => toggleFavorite(item)}
            />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </MainTamplates>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  error: { color: colors.danger, marginVertical: spacing.sm },
  loader: { marginVertical: spacing.md },
  listContent: { paddingBottom: 100 }
});