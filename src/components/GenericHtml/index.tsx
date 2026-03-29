import { motion } from 'motion/react';
import styles from './styles.module.css';

type GenericHtmlProps = {
  titulo: string;
  tituloGrifado: string;
  children: React.ReactNode
};

export function GenericHtml({ titulo, tituloGrifado, children }: GenericHtmlProps) {
  return (
    <div
          
        className={styles.GenericHtml}
        >

      <motion.h2
      initial={{ opacity: 0, x: -5000 }}
      animate={{ opacity: 0, x: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={styles.subTitle}>{titulo} <span className={styles.subTitleSpan}>{tituloGrifado}</span></motion.h2>
      {children}
    </div>
  );
}