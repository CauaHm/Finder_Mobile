import { View, StyleSheet } from 'react-native';
import { type reactnode } from 'react';

type MainProps = {
  children: ReactNode;
};

export function Main({ children }: MainProps) {
  return <View style={styles.content}>{children}</View>;
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingVertical: 16,
    width: '100%',
  },
});