import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { Product } from '../../Models/Product';

type ProductCardProps = {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (asin: string) => void;
};

export function ProductCard({ product, isFavorite, onToggleFavorite }: ProductCardProps) {
  const productImage = product.product_photo || product.image;
  const productTitle = product.product_title || product.title;
  const productPrice = product.product_price || product.price;

  return (
    <View style={styles.card}>
      <TouchableOpacity 
        onPress={() => onToggleFavorite(product.asin)} 
        style={styles.favorite}
      >
        <Ionicons 
          name={isFavorite ? "heart" : "heart-outline"} 
          size={32} 
          color={isFavorite ? "#ff4d4d" : "#000"} 
        />
      </TouchableOpacity>

      {productImage ? (
        <Image source={{ uri: productImage }} style={styles.image} resizeMode="contain" />
      ) : (
        <View style={styles.imagePlaceholder}><Text>Sem Imagem</Text></View>
      )}

      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={2}>{productTitle}</Text>
        <Text style={styles.price}>{productPrice ? `R$ ${productPrice}` : 'N/A'}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => product.product_url && Linking.openURL(product.product_url)}
        >
          <Text style={styles.buttonText}>Ver na Amazon</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff8e8', borderRadius: 15, padding: 16, marginBottom: 16, borderWidth: 2, borderColor: '#ffcb45' },
  favorite: { position: 'absolute', top: 12, right: 12, zIndex: 10 },
  image: { width: '100%', height: 180, borderRadius: 8, marginBottom: 12, backgroundColor: '#fff' },
  imagePlaceholder: { width: '100%', height: 180, borderRadius: 8, backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 16, fontWeight: '700', color: '#333' },
  price: { fontSize: 18, fontWeight: '800', color: '#222', marginVertical: 8 },
  button: { backgroundColor: '#ffcb45', padding: 10, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '700' },
  infoContainer: { gap: 4 }
});