import { motion } from 'motion/react';
import styles from './styles.module.css';
import { FaCheckCircle } from "react-icons/fa";

type CardsProps = {
  title: string;
  paragraph: string;
};

export function Cards({ title, paragraph }: CardsProps) {
  return (
    <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}   
    className={styles.listCards}>
      <div className={styles.card}>
        <FaCheckCircle />
        <h3>{title}</h3>
        <p>{paragraph}</p>
      </div>
    </motion.div>
  );
}