import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type CategoriesCardsProps = {
  paragraph: string;
  onPress?: () => void;
};

export function CategoriesCards({ paragraph, onPress }: CategoriesCardsProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{paragraph}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
});