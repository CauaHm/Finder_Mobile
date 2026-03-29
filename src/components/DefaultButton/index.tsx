import styles from './styles.module.css';

type DefaultButtonProps = {
  value: string;
};

  export function DefaultButton( {value} : DefaultButtonProps) {
  return <button className={styles.defaultButton}>{value}</button>
}