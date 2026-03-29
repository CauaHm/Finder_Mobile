import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
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
      <TouchableOpacity onPress={() => onToggleFavorite(product.asin)} style={styles.favorite}>
        <Text style={{ color: isFavorite ? '#e74c3c' : '#888' }}>♥</Text>
      </TouchableOpacity>
      {productImage ? (
        <Image source={{ uri: productImage }} style={styles.image} />
      ) : (
        <View style={styles.imagePlaceholder}><Text>Imagem</Text></View>
      )}
      <Text style={styles.title}>{productTitle}</Text>
      {product.product_original_price ? <Text style={styles.originalPrice}>{product.product_original_price}</Text> : null}
      <Text style={styles.price}>R$ {productPrice ?? 'N/A'}</Text>
      <TouchableOpacity
        onPress={() => product.product_url && Linking.openURL(product.product_url)}
      >
        <Text style={styles.link}>Ver na Amazon</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 10, padding: 12, marginBottom: 12, borderWidth: 1, borderColor: '#ddd' },
  favorite: { position: 'absolute', top: 8, right: 8, zIndex: 10 },
  image: { width: '100%', height: 160, borderRadius: 8, marginBottom: 10 },
  imagePlaceholder: { width: '100%', height: 160, borderRadius: 8, backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 4 },
  originalPrice: { textDecorationLine: 'line-through', color: '#999' },
  price: { fontSize: 16, fontWeight: '700', color: '#222', marginBottom: 8 },
  link: { color: '#007AFF', fontWeight: '600' },
});