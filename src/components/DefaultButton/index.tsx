import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type DefaultButtonProps = {
  value: string;
  onPress?: () => void;
};

export function DefaultButton({ value, onPress }: DefaultButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F6C000',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '700',
    color: '#000',
  },
});