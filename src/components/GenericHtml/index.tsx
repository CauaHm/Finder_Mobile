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
  container: { marginBottom: 12, textAlign: 'center', justifyContent: 'center', alignItems: 'center', width: '100%' },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 8, justifyContent: 'center', textAlign: 'center' },
  highlight: { color: '#F6C000' },
});