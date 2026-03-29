import { View, Text, StyleSheet } from 'react-native';
import { CategoriesCards } from '../CategoriesCards';

const listCategories = [
  'eletronicos',
  'roupas',
  'cosmeticos',
  'esportes',
  'mercado',
  'roupas masculinas',
  'roupas femininas',
];

type CategoriesProps = {
  onCategoryClick: (category: string) => void;
};

export function Categories({ onCategoryClick }: CategoriesProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pesquise por Categorias</Text>
      <View style={styles.items}>
        {listCategories.map((category) => (
          <CategoriesCards key={category} paragraph={category} onPress={() => onCategoryClick(category)} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  items: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
});