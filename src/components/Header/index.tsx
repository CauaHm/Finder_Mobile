import { View, Text, Image, StyleSheet } from 'react-native';


export function Header() {

  return (
    <View style={styles.header}>
      <Text style={styles.image}><Image source={require('../../assets/images/logoFinder.png')}></Image>Finder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    padding: 14,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#eee',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: { height: 100, width: '100%', marginTop: 10, borderRadius: 8 },
});
