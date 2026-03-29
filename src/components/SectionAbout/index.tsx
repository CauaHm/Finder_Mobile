import { View, Text, StyleSheet } from 'react-native';
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
    </View>
    
  );
}

const styles = StyleSheet.create({
  section: {display: 'flex',height: 'auto', paddingVertical: 20, backgroundColor: '#f8f8f8', borderRadius: 12, marginBottom: 16, flexDirection: 'column', gap: 12, justifyContent: 'center', alignItems: 'center' },
  leftSection: {width: '50%', padding: 12, flexDirection: 'column', gap: 12 },
  rightSection: {width: '50%', padding: 12, flex: 1 },
  title: {textAlign: 'center', fontSize: 32, fontWeight: '700', color: '#111', marginBottom: 8 },
  titleStrong: { color: '#F6C000' },
  description: {textAlign: 'center', fontSize: 24, color: '#444', marginBottom: 12 },
  actions: { flexDirection: 'column', alignItems: 'center', gap: 8 },
});