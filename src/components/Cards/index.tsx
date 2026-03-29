import { View, Text, StyleSheet } from 'react-native';

type CardsProps = {
  title: string;
  paragraph: string;
};

export function Cards({ title, paragraph }: CardsProps) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.icon}>✔</Text>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardText}>{paragraph}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  icon: {
    fontSize: 18,
    marginBottom: 6,
  },
  cardTitle: { fontSize: 16, fontWeight: '700', marginBottom: 4 },
  cardText: { color: '#555', fontSize: 14 },
});