import { View, StyleSheet } from 'react-native';
import { type ReactNode } from 'react';
import { Header } from '../../components/Header';

type MainTamplatesProps = {
  children: ReactNode;
};

export function MainTamplates({ children }: MainTamplatesProps) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainContent}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  mainContent: { flex: 1, padding: 16 },
});