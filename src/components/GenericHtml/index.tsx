import { View, Text, StyleSheet } from 'react-native';
import { type ReactNode } from 'react';

type GenericHtmlProps = {
  titulo: string;
  tituloGrifado: string;
  children: ReactNode;
};

export function GenericHtml({ titulo, tituloGrifado, children }: GenericHtmlProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {titulo} <Text style={styles.highlight}>{tituloGrifado}</Text>
      </Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 12 },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  highlight: { color: '#F6C000' },
});