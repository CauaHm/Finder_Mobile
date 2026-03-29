import { View, Text, StyleSheet } from 'react-native';
import { GenericHtml } from '../GenericHtml';
import { Feather } from '@expo/vector-icons';

export function SectionAboutDoWeDo() {
  const items = [
    'Plataforma Inovadora',
    'Interface intuitiva',
    'Comparação de preços',
    'Busca detalhada',
    'Geolocalização de lojas',
];

  return (
    <View style={styles.section}>
      <View style={styles.listContainer}>
      {items.map((item) => (
        <View key={item} style={styles.listItem}>
          <Feather name="check-square" size={20} color="#ffcb45" /> 
          
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
</View>
      <View style={styles.textContainer}>
        <GenericHtml titulo="O que" tituloGrifado="fazemos?">
          <Text style={styles.description}>
            O Finder é uma plataforma que conecta consumidores a diversas lojas locais, oferecendo uma experiência intuitiva e prática. Com comparação de preços em tempo real, os usuários encontram as melhores ofertas disponíveis na região. Além disso, a busca detalhada de produtos facilita a navegação e a escolha dos itens desejados. Para maior comodidade, o carrinho de compras virtual permite adicionar produtos de diferentes lojas em uma única compra. Também utilizamos geolocalização para ajudar os clientes a localizarem os estabelecimentos físicos com facilidade. Nosso objetivo é otimizar a experiência de compra local, promovendo o comércio regional e facilitando o acesso a produtos e serviços de forma eficiente.
          </Text>
        </GenericHtml>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { padding: 16, backgroundColor: '#fff8e8', marginBottom: 16, borderColor: '#ffcc80', borderWidth: 1, borderRadius: 8, marginHorizontal: 32 },
  listContainer: { marginBottom: 14 },
  listItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 6, textAlign: 'left', justifyContent: 'center' },
  bullet: { marginRight: 8 },
  itemText: { fontSize: 16, color: '#444', fontWeight: '500' },
  textContainer: { paddingTop: 8, textAlign: 'center', justifyContent: 'center', alignItems: 'center' },
  description: { fontSize: 14, color: '#333', lineHeight: 20, justifyContent: 'center', textAlign: 'center' },
});