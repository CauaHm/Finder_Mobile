import { View, Text, StyleSheet } from 'react-native';
import { GenericHtml } from '../GenericHtml';
import { Feather } from '@expo/vector-icons';

export function SectionServices() {
  const services = [
    'Presença digital',
    'Acesso a clientes',
    'Competitividade local',
    'Conversão de vendas',
    'Integração de produtos',
    'Aumento de visitantes',
    'Crescimento sustentável',
    'Maior visibilidade',
    'Expansão do negócio',
    'Facilidade de compra',
    'Fortalecimento do mercado',
    'Aprimoramento logístico',
    'Conectividade comercial',
    'Melhoria na experiência',
    'Suporte ao varejo',
  ];

  return (
    <View style={styles.section}>
      <GenericHtml titulo="O que oferecemos para" tituloGrifado="sua empresa?">
        {services.slice(0, 5).map((service) => (
          <Text style={styles.card} key={service}><Feather name="check-circle" size={25} color="#ffcb45" /> {service}</Text>
        ))}
      </GenericHtml>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { marginBottom: 16, backgroundColor: '#fff', borderRadius: 8, padding: 12, justifyContent: 'center', alignItems: 'center', width: '100%' },
  card: { fontSize: 24, color: '#333', marginBottom: 4, borderColor:'#ffcc80', borderWidth: 1, borderRadius: 4, padding: 8, width: '75%', textAlign: 'center', backgroundColor: '#fff8e8', height: 150, margin: 20, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', fontWeight: '500' },
  servicesList: { marginTop: 12 },
  serviceItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  bullet: { marginRight: 6 },
  serviceText: { color: '#444', flexShrink: 1 },
});