import styles from './styles.module.css';

type MainProps = {
  children: React.ReactNode;
};

export function Main({ children }: MainProps) {
  return (
    <main className={styles.content}>{children}</main>
  );
}