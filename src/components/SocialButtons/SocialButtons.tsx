import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function SocialButtons() {
  const navItems = [
    { key: 'instagram', label: 'Instagram', icon: <Ionicons name="logo-instagram" size={40} /> },
    { key: 'whatsapp', label: 'WhatsApp', icon: <Ionicons name="logo-whatsapp" size={40} /> },
    { key: 'email', label: 'E-mail', icon: <Ionicons name="mail" size={40} /> },
  ];

  return (
    <View style={styles.socialContainer}>
      {navItems.map((item) => (
        <TouchableOpacity key={item.key} style={styles.button} onPress={() => {}}>
          <Text style={styles.icon}>{item.icon}</Text>
          <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  button: {
    alignItems: 'center',
    padding: 6,
  },
  icon: {
    fontSize: 20,
  },
  label: {
    fontSize: 10,
    color: '#333',
  },
});