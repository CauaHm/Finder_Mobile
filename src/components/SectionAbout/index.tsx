import computer from '../../assets/images/blueComputer.png'
import styles from './styles.module.css';

import { SocialButtons } from '../SocialButtons/SocialButtons';
import { DefaultButton } from '../DefaultButton';
import { motion } from "framer-motion"

export function SectionAbout() {
  return (
    <section className={styles.section}>
      <div className={styles.shape}></div>
      <motion.div
        className={styles.leftSction}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, x: 0 }}
        transition={{ duration: 1 }} 
      >
        <h1 className={styles.title}>Aumente suas vendas! Cadastre seus produtos e <span>alcance mais clientes na sua região!</span></h1>
        <p>Cadastre seus produtos agora e ganhe mais visibilidade, atraindo clientes próximos e impulsionando seu negócio!</p>
        <nav className={styles.nav}>
          <DefaultButton value='Ver produtos'/>
          <SocialButtons/>
        </nav>
      </motion.div>
      <div
        className={`${styles.rightSction} ${styles.imgUpDown}`}>
        <img className={styles.banner} src={computer} alt="Imagem de um computador" />
      </div>
    </section>
  );
}