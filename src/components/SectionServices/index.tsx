import { View, Text, StyleSheet } from 'react-native';
import { GenericHtml } from '../GenericHtml';

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
          <Text style={styles.card} key={service}>{service}</Text>
        ))}
      </GenericHtml>
      <View style={styles.servicesList}>
        {services.map((service) => (
          <View style={styles.serviceItem} key={service}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.serviceText}>{service}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { marginBottom: 16, backgroundColor: '#fff', borderRadius: 8, padding: 12 },
  card: { fontSize: 14, color: '#333', marginBottom: 4 },
  servicesList: { marginTop: 12 },
  serviceItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  bullet: { marginRight: 6 },
  serviceText: { color: '#444', flexShrink: 1 },
});