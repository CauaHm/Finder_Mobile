import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainTamplates } from '../Templates/MainTampletes';
import type { Product } from '../Models/Product';

const FAVORITES_KEY = '@finder:favorites';

export default function Favorites() {
  const [favorites, setFavorites] = useState<Product[]>([]);

  useEffect(() => {
    async function loadFavorites() {
      try {
        const data = await AsyncStorage.getItem(FAVORITES_KEY);
        if (data) {
          setFavorites(JSON.parse(data));
        }
      } catch (error) {
        console.error('Erro ao carregar favoritos', error);
      }
    }
    void loadFavorites();
  }, []);

  if (favorites.length === 0) {
    return (
      <MainTamplates>
        <View style={styles.container}>
          <Text style={styles.empty}>Nenhum favorito adicionado ainda.</Text>
        </View>
      </MainTamplates>
    );
  }

  return (
    <MainTamplates>
      <View style={styles.container}>
        <FlatList<Product>
          data={favorites}
          keyExtractor={(item: Product) => item.asin}
          renderItem={({ item }: { item: Product }) => (
            <View style={styles.card}>
              <Text style={styles.title}>{item.product_title ?? item.title ?? 'Sem nome'}</Text>
              <Text style={styles.price}>R$ {item.product_price ?? item.price ?? 0}</Text>
            </View>
          )}
        />
      </View>
    </MainTamplates>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  empty: { fontSize: 16, color: '#666', textAlign: 'center', marginTop: 40 },
  card: { marginBottom: 12, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12 },
  title: { fontWeight: '600', fontSize: 16, marginBottom: 4 },
  price: { color: '#333' },
});