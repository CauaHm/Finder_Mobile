import { View, StyleSheet } from 'react-native';
import { type ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});