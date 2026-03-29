import { View, Text, Image, StyleSheet } from 'react-native';
import { SocialButtons } from '../SocialButtons/SocialButtons';
import { DefaultButton } from '../DefaultButton';

export function SectionAbout() {
  return (
    <View style={styles.section}>
      <View style={styles.leftSection}>
        <Text style={styles.title}>
          Aumente suas vendas! Cadastre seus produtos e{' '}
          <Text style={styles.titleStrong}>alcance mais clientes na sua região!</Text>
        </Text>
        <Text style={styles.description}>
          Cadastre seus produtos agora e gainhe mais visibilidade, atraindo clientes próximos e impulsionando seu negócio!
        </Text>
        <View style={styles.actions}>
          <DefaultButton value="Ver produtos" onPress={() => {}} />
          <SocialButtons />
        </View>
      </View>
      <Image source={require('../../assets/images/blueComputer.png')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  section: { paddingVertical: 20, backgroundColor: '#f8f8f8', borderRadius: 12, marginBottom: 16 },
  leftSection: { padding: 12 },
  title: { fontSize: 20, fontWeight: '700', color: '#111', marginBottom: 8 },
  titleStrong: { color: '#F6C000' },
  description: { fontSize: 14, color: '#444', marginBottom: 12 },
  actions: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  image: { height: 140, width: '100%', marginTop: 10, borderRadius: 8 },
});