import { View, Text, StyleSheet } from 'react-native';
import { SocialButtons } from '../SocialButtons/SocialButtons';

export function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.copy}>© 2025 Finder@v.2</Text>
      <SocialButtons />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fafafa',
    alignItems: 'center',
  },
  copy: {
    color: '#888',
    marginBottom: 8,
  },
});