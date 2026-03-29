import { useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, type NavigationProp } from '@react-navigation/native';
import { useAuth } from '../../contexts/AuthContext';

type RootStackParamList = {
  Home: undefined;
  Products: undefined;
  Favorites: undefined;
  Login: undefined;
};

export function Header() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { isAuthenticated, logout } = useAuth();

  const navItems = useMemo(
    () => [
      { name: 'Home', route: 'Home' as const },
      { name: 'Produtos', route: 'Products' as const },
      { name: 'Favoritos', route: 'Favorites' as const },
    ],
    []
  );

  const handleLogout = async () => {
    await logout();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.header}>
      <Text style={styles.brand}>Finder</Text>
      <View style={styles.nav}>
        {navItems.map((item) =>
          item.name === 'Favoritos' && !isAuthenticated ? null : (
            <TouchableOpacity key={item.name} onPress={() => navigation.navigate(item.route)} style={styles.navItem}>
              <Text style={styles.navText}>{item.name}</Text>
            </TouchableOpacity>
          )
        )}
        {isAuthenticated ? (
          <TouchableOpacity onPress={handleLogout} style={styles.navItem}>
            <Text style={styles.logout}>Sair</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.navItem}>
            <Text style={styles.login}>Entrar</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 14,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brand: { fontSize: 22, fontWeight: 'bold', color: '#333' },
  nav: { flexDirection: 'row', alignItems: 'center' },
  navItem: { marginLeft: 10 },
  navText: { color: '#333', fontWeight: '600' },
  login: { color: '#007AFF', fontWeight: '700' },
  logout: { color: '#e74c3c', fontWeight: '700' },
});
