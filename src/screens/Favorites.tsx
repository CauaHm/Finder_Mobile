import { useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { MainTamplates } from '../Templates/MainTampletes';
import { ProductCard } from '../components/ProductCard';
import type { Product } from '../Models/Product';

const FAVORITES_KEY = '@finder:favorites';

export default function Favorites() {
  const [favorites, setFavorites] = useState<Product[]>([]);

  const loadFavorites = async () => {
    try {
      const data = await AsyncStorage.getItem(FAVORITES_KEY);
      if (data) setFavorites(JSON.parse(data));
    } catch (error) {
      console.error(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [])
  );

  const removeFavorite = async (asin: string) => {
    const newFavorites = favorites.filter(item => item.asin !== asin);
    setFavorites(newFavorites);
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
  };

  return (
    <MainTamplates>
      <View style={styles.container}>
        <Text style={styles.header}>Meus Favoritos</Text>
        <FlatList<Product>
          data={favorites}
          keyExtractor={(item) => item.asin}
          ListEmptyComponent={<Text style={styles.empty}>Nenhum favorito ainda.</Text>}
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              isFavorite={true}
              onToggleFavorite={() => removeFavorite(item.asin)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </MainTamplates>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  empty: { textAlign: 'center', marginTop: 40, color: '#666' }
});