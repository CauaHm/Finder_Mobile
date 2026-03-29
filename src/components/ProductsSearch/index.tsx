import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
type ProductsSearchProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

export function ProductsSearch({ value, onChange, onSubmit }: ProductsSearchProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        placeholder="Produto..."
      />
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', marginBottom: 12, gap: 8 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10 },
  button: { backgroundColor: '#F6C000', borderRadius: 8, justifyContent: 'center', paddingHorizontal: 12 },
  buttonText: { fontWeight: '600', color: '#000' },
});