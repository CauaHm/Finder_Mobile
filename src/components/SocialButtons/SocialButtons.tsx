import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export function SocialButtons() {
  const navItems = [
    { key: 'instagram', label: 'Instagram', icon: '📸' },
    { key: 'whatsapp', label: 'WhatsApp', icon: '💬' },
    { key: 'email', label: 'E-mail', icon: '✉️' },
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